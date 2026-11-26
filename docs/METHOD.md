# Method

What a run measures, how, and what it does not show. This document has no numbers, so it stays true from run to run; the numbers are in each run's `report.md`. Everything a run does is in [`src/lib/run.ts`](../src/lib/run.ts), and everything a report computes is in [`src/lib/report.ts`](../src/lib/report.ts) and [`src/lib/stats.ts`](../src/lib/stats.ts).

The measurement method is the one of [ts-check-arena](https://github.com/relliv/ts-check-arena) and [lint-arena](https://github.com/relliv/lint-arena), which follows [danfry1/ts-checker-bench](https://github.com/danfry1/ts-checker-bench) (MIT). This arena applies it to code formatters, where the question is simple to state: does a formatter print exactly what Prettier prints, and how fast?

## Principles

1. **Every number has a record behind it.** A run keeps the timing of every single invocation, the list of every file whose output differs from the reference's with a diff of the first ones, the exact version and binary checksum of every formatter, and the machine and conditions it ran under.
2. **A formatter is a version, not a name.** `oxfmt@0.79.0` is a result; "oxfmt" is not. Every formatter and every package it needs (dprint's plugins) is pinned to an exact version in one lockfile; a formatter that ships as a GitHub release (tidy) is pinned by the sha256 of every platform's archive.
3. **Same question for every formatter.** Every formatter formats the same files in the same style, from a config the arena writes. The project's own formatter configs are never read.
4. **Output is compared byte for byte.** No normalizing: a file is the same as the reference's or it is not.
5. **Fast and wrong is not fast.** A formatter that crashes or refuses its config is not timed, and its speed is always shown next to how many files it formats the way the reference does.
6. **Shipped defaults first, matched settings second.** Every formatter runs as it ships. Thread counts are matched only through settings a formatter documents.
7. **The project is never edited.** Its files are copied out and formatted there.
8. **Nothing identifying leaves the machine.** Absolute paths, the home directory and the user name are scrubbed from every record. A run against a local path stays in `results/private/` until someone publishes it under a neutral name.
9. **Noise is recorded, not hidden.** Load, busy processes, speed limits and the run's source are part of the record, and runs from different sources are never mixed on one axis.

## Formatters and versions

A family ([`formatters.json`](../formatters.json)) describes what stays the same across versions: the package or release, the executable per platform, the check and write arguments, the exit code check mode uses when a file would change, the environment, thread settings and the languages it formats.

| Family | Comes from | What it is | Runs as |
|---|---|---|---|
| prettier | `prettier` | The JavaScript formatter, the reference | JavaScript on the current Node |
| bun | `bun` 1.4.4 and later | `bun fmt`, inside the Bun runtime | The native executable from the platform package |
| oxfmt | `oxfmt` | The Oxc project's formatter | A Node native addon behind a JavaScript launcher, so Node starts too |
| biome | `@biomejs/biome` | `biome format` | The native executable from the platform package |
| dprint | `dprint`, with `@dprint/typescript`, `@dprint/json`, `@dprint/markdown`, `dprint-plugin-malva` and `dprint-plugin-yaml` | dprint with its WebAssembly plugins, loaded from the pinned packages | The native executable from the platform package |
| tidy | the `lukeed/tidy` GitHub release | A Rust port of Prettier's printers | The native executable from the release archive |

Each version is a workspace package, `tools/<family>@<version>/`, added with `pnpm arena tool add`. The supply chain policy in `pnpm-workspace.yaml` applies: a version must be 7 days old, and a weaker publish trust than an earlier version is refused. A release-based tool follows the same 7-day rule against its GitHub publish time; adding it records the release and every platform's sha256 in `tools/<id>/release.json`, and `pnpm arena tool fetch` refuses an archive whose sha256 differs. An exception to the age rule is recorded in that file (`allowYoung`) and in every report. The store keeps the newest 3 versions of each family.

dprint resolves plugins from npm by itself when a config names them by package. The arena installs them as pinned companions instead and gives dprint their local `plugin.wasm` files, so no plugin is fetched outside the lockfile. dprint compiles each plugin once into a cache kept with the tool (`DPRINT_CACHE_DIR`); that happens in the untimed output step.

## Languages

A run formats nine languages ([`src/lib/languages.ts`](../src/lib/languages.ts)), each on its own: JavaScript and TypeScript (`.js .jsx .mjs .cjs .ts .tsx .mts .cts`), JSON, CSS, SCSS, Less, Markdown, YAML, HTML and Angular templates.

**Angular templates** are `.component.html` files, and every `.html` file of a project marked as Angular (`"html": "angular"` in `corpus.json`, or `--html angular`): Angular 20's CLI names a template `app.html` and Angular Material names them `button.html`, so the `.component.html` convention alone would miss most of a modern project. Prettier formats them with its `angular` parser, which knows control flow (`@if`, `@for`), bindings and pipes; bun and oxfmt are told the same through their configs (a Prettier override, an oxfmt association), as an Angular project's config would. Biome, dprint and tidy have no Angular setting and format the files as HTML, which is what such a project would get from them. A formatter takes part in the languages its family declares, and every language is timed and compared separately, since formatters cover different languages.

`pnpm arena languages verify` proves the declarations: `fixtures/languages/` holds one unformatted sample per language, and every formatter must change the sample of every language it declares. The unit tests run the same check against the newest installed version of each family. A formatter that left a sample as it was would be timed on files it skips.

## The style

Every formatter is asked for one style ([`src/lib/style.ts`](../src/lib/style.ts)): Prettier's defaults, written out so no formatter's own default decides anything. 80 columns, two spaces, semicolons, double quotes, trailing commas wherever valid, spaces inside object braces, parentheses around every arrow parameter, LF line endings, prose left as written.

- **Prettier and bun:** a `.prettierrc.json` with those options; bun reads Prettier's config as it is.
- **oxfmt:** the same options under the same names, plus `sortPackageJson: false`, since oxfmt sorts `package.json` keys by default and Prettier never does.
- **Biome:** the matching formatter options (space indentation, which is not Biome's default), Tailwind directives allowed in CSS, and the file size limit raised so no large file is skipped.
- **dprint:** the settings closest to that style. dprint has a style of its own, not Prettier's, so it is expected to differ more than the others; it shows how far another style is, at native speed.
- **tidy:** the same options under tidy's names, with JSDoc formatting turned off, since tidy formats JSDoc comments by default and Prettier never does.
- **Angular templates:** the same style; Prettier and bun get an override that reads `.html` files with the `angular` parser, oxfmt an association with its `angular-html` language. Biome's HTML formatter is turned on.

## A run

`pnpm arena run` writes `results/<date>-<time>-<cpu>-<os>-<label>/`, with the start time in UTC (local paths: `results/private/...`). CI runs are committed to the `data` branch, not to `main`.

1. **Preflight.** It refuses to start without a timer, on battery or under Rosetta, or with a formatter not installed.
2. **Files.** The target is walked once ([`src/lib/stage.ts`](../src/lib/stage.ts)): `node_modules`, `dist`, dot folders and dot files, symbolic links, what git ignores, lockfiles and a corpus project's `exclude` list are skipped. Each language's files are copied into a folder of their own, keeping their paths. Every formatter then formats a whole folder holding exactly that language's files, with no ignore file, no project config and nothing to skip, so no formatter's idea of which files count can change what it is timed on.
3. **Gate.** The reference writes a copy of each language's folder. A file it cannot format (a syntax error) is left out of that language for every formatter and recorded with Prettier's message.
4. **Output.** Every other formatter writes its own copy, which is compared with the reference's byte for byte. A formatter that refuses some files (Biome stops at invalid JSON that Prettier formats) exits with an error but formats the rest; the files it refused are compared like any other and show up as differences, with the error recorded. A formatter that exits with an error without changing any file has crashed or refused its config: it is recorded as failed and not timed.
5. **Timing.** Each formatter is timed in check mode on the untouched staged folder: it reads and formats every file and reports which would change, without writing. For each thread setting, one warm-up round, then the given number of rounds (odd, 7 by default), each starting one formatter further along than the round before. The exit code of every timed check must match the one recorded in step 4.
6. **Records.** `run.json`, `timing.csv` (one row per invocation, language and warm-ups marked), `parity.json`, `parity/<formatter>/<language>.txt` (every differing file, and a diff of the first 25, reference first), `summary.json` and `report.md`. With `--no-save` they are written to a temporary folder, the report is printed, and the folder is deleted.

No formatter is run with a cache: Prettier's is off unless asked for, dprint's incremental mode is turned off in its config, and the others keep none.

## Measurement

| OS | CPU time and peak memory | Wall time |
|---|---|---|
| macOS | `/usr/bin/time -l`: rusage of the process and its children; maximum resident set size | a nanosecond clock around the timer's process |
| Linux | GNU `/usr/bin/time -f`: the same fields | a nanosecond clock around the timer's process |
| Windows | [`windows-time.ps1`](../src/lib/windows-time.ps1): `GetProcessTimes` and the peak working set of the process alone | a stopwatch around the process |

- **Wall time** is the median of the timed rounds, with their min and max.
- **"vs reference"** is the reference's median divided by the formatter's: above 1 is faster.
- **CPU** is user plus sys time over all threads, as a median. **Peak** is the median peak memory, in MiB.
- Prettier and oxfmt start Node; the others do not. That is how each ships, so it is part of the time.
- Check mode prints differently per formatter (Prettier and bun list file names, Biome a summary, dprint and tidy the paths). Output goes to a discarded pipe and is the same work on every round.

## Threads

`--threads default,1,4,max` times each setting. `default` runs every formatter as it ships.

| Family | Default, as documented | Setting | Source |
|---|---|---|---|
| prettier | one thread | none | Prettier's CLI formats one file after another |
| bun | one per core | `--threads=N` | `bun fmt --help --all` |
| oxfmt | one per core | `--threads=N` | `oxfmt --help` |
| biome | one per core | none for `biome format` | `BIOME_THREADS` is documented for `biome ci` only |
| dprint | one per core | `DPRINT_MAX_THREADS=N` | `dprint --help` |
| tidy | one per core | `--threads N` | `tidy up --help` |

A family without a thread setting runs only in the `default` setting.

## Sources: local and CI

A run records where it ran: `local`, or `ci` with the runner label, image and workflow run link. Local runs on a quiet machine are the precise numbers; CI runs are breadth across five runners and are read as ratios within one run, never as seconds across runs. The site never puts local and CI runs on one axis.

## Projects

Any project on disk can be a target (`--target <path>`). For results that are comparable over time and across machines, [`corpus.json`](../corpus.json) pins public projects to a commit. Formatting reads source only, so a corpus project is cloned and never installed or built. Checkouts live outside the repository, in the user's cache folder.

## Caveats

- **One machine per run.** Results from other hardware or operating systems may differ.
- **One style.** The style is Prettier's defaults. A project with another style (single quotes, no semicolons, a wider print width) may see other agreement numbers; run the arena on it.
- **Prettier versions differ too.** A formatter that follows one Prettier release can differ from another; the store keeps more than one Prettier, so the difference shows.
- **Embedded languages** (CSS in a template literal, code blocks in Markdown) are formatted as each formatter does by default.
- **Scope.** Whole-folder formatting only: no editor use, no single-file latency, no range formatting, no plugins beyond dprint's.
- **Platform coverage differs.** A family without a build for a platform is recorded as not available there.

## What this does not show

Which output is better where formatters differ, or why one is faster. A report shows the time and memory each used and which files differ; the diffs are in `parity/` for anyone to judge.
