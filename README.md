# format-arena

**How fast are the code formatters, version by version, on your project, and do they print exactly what Prettier prints?**

Prettier, `bun fmt`, oxfmt, Biome, dprint and tidy, each pinned to exact versions, timed side by side on any project on disk or on a pinned public corpus, on macOS, Linux and Windows. JavaScript and TypeScript, JSON, CSS, SCSS, Less, Markdown, YAML, HTML and Angular templates are timed and compared one language at a time, and every formatter's output is compared with Prettier's byte for byte. How a run works, and what it does not show: [docs/METHOD.md](docs/METHOD.md).

## Quick start

```sh
pnpm install && pnpm arena tool fetch   # the arena, every formatter version, and tidy's release binary
pnpm arena tool list                    # what is installed, and what has no build here
pnpm arena languages verify             # every formatter formats each language it declares
pnpm arena corpus setup vite            # the default benchmark project, pinned
pnpm arena run --corpus vite            # benchmark it on this machine
pnpm arena run --target ../my-app       # benchmark a project on this machine
pnpm arena run --target ../my-app --languages js,json --no-save
pnpm dev                                # the site, with published runs and the data branch
```

A run against a path is written to `results/private/` (gitignored) and stays on this machine. With `--no-save` nothing is kept: the report is printed and every record is deleted. To share one, `pnpm arena publish <run-id> --label <neutral name>` copies it into `results/`, scrubbed of paths and user names, for you to review and commit. Its `parity/` files hold diffs of the project's code, so read them first.

## Formatter versions

Each family ([formatters.json](formatters.json)) is a set of exact versions, one workspace package each, all pinned by one lockfile:

```sh
pnpm arena tool add oxfmt@0.79.0 biome@2.6.8
pnpm arena tool add tidy@2.0.0           # from its GitHub release; sha256 of every platform recorded
pnpm arena tool remove dprint@0.64.3
pnpm arena watch [--write]               # npm versions older than 7 days that the store lacks
pnpm arena families                      # families, languages and thread settings
```

| Family | Comes from | Languages | Platforms |
|---|---|---|---|
| prettier | `prettier` >= 3, the reference | all nine | everywhere Node runs |
| bun | `bun` >= 1.4.4 (`bun fmt`) | all nine | macOS, Linux, Windows (x64, arm64) |
| oxfmt | `oxfmt` | all nine | macOS, Linux, Windows (x64, arm64) |
| biome | `@biomejs/biome` >= 2 (`biome format`) | all but Less; Angular templates as plain HTML | macOS, Linux, Windows (x64, arm64) |
| dprint | `dprint`, with its plugins pinned as packages | all nine, Angular in its own style | macOS, Linux, Windows (x64, arm64) |
| tidy | the `lukeed/tidy` GitHub release | all nine; Angular templates as plain HTML | macOS, Linux, Windows (x64, arm64) |

The supply chain policy in [pnpm-workspace.yaml](pnpm-workspace.yaml) applies to every npm package: a version must be 7 days old (`--allow-young` adds a reviewed exception), and a weaker publish trust than an earlier version is refused. A release-based tool follows the same age rule against its GitHub publish time, and its archive is refused unless its sha256 matches `tools/<id>/release.json`.

## The style

Every formatter is asked for Prettier's default style, written out in each one's config: 80 columns, two spaces, semicolons, double quotes, trailing commas, LF. dprint has a style of its own and is expected to differ; it shows how far another style is. See [docs/METHOD.md](docs/METHOD.md#the-style).

## Running

```sh
pnpm arena run --target <path> \
  --formatters prettier@3.10.1,bun@1.4.4,oxfmt@0.79.0,biome@2.6.8,dprint@0.65.0,tidy@2.0.0 \
  --reference prettier@3.10.1 \
  --languages js,json,angular \
  --html angular \
  --threads default,1,max \
  --rounds 7
```

- **Files** are picked once and each language's files are copied into a folder of their own, so every formatter formats exactly the same files with nothing to skip. Nothing in the project is touched.
- **The gate:** a file Prettier cannot format is left out for everyone; a formatter that crashes or refuses its config is not timed.
- **Timing** is check mode on the staged files; **output** is write mode on a copy, compared byte for byte with Prettier's.
- **Records:** `results/<run>/run.json`, `timing.csv`, `parity.json`, `parity/`, `summary.json`, `report.md`.

## Corpus and CI

[corpus.json](corpus.json) pins public projects to a commit: **vite** (the default, TypeScript and JavaScript with JSON, CSS, Less, SCSS, Markdown, YAML and HTML), **excalidraw** (a React app, with SCSS) and **angular-components** (Angular Material and the CDK, with about 700 Angular templates). Formatting needs no install, so `pnpm arena corpus setup` only clones them into your cache folder.

| Workflow | When | What |
|---|---|---|
| [check](.github/workflows/check.yml) | every push and PR | types, tests (the language check included), site build, smoke run on macOS, Linux and Windows |
| [bench](.github/workflows/bench.yml) | when a push to main changes `tools/`, or by hand | the corpus on five runners, six with Intel macOS; results committed to the `data` branch |
| [site](.github/workflows/site.yml) | after bench, on site changes | builds the site with the `data` branch results and deploys GitHub Pages |

### Where results live

| Location | Holds |
|---|---|
| `results/` on `main` | local corpus runs, or runs shared with `pnpm arena publish`, reviewed and committed by hand |
| `results/` on the `data` branch | every CI run, committed by the bench workflow |
| `results/private/` (gitignored) | runs against a local path and runs under act |

## Development

```sh
pnpm typecheck && pnpm test && pnpm build
pnpm arena run --target fixtures/small --smoke
pnpm bench:act                     # the bench workflow's Linux job, locally with nektos/act and Docker
```

## Credits

The measurement method, the run layout and the site come from [ts-check-arena](https://github.com/relliv/ts-check-arena) and [lint-arena](https://github.com/relliv/lint-arena), whose method follows [danfry1/ts-checker-bench](https://github.com/danfry1/ts-checker-bench) (MIT).

## License

MIT
