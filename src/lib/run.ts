// One benchmark run into results/<id>/. docs/METHOD.md describes every step; this
// file is the only place they are carried out.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import { basename, dirname, join, relative } from 'node:path';
import { type ThreadSetting, type Tool, availableOn, binaryPath, command, installedVersion, parseTool, threadSettings } from './formatters.ts';
import { LANGUAGES, type Language, LANGUAGE_IDS } from './languages.ts';
import { type Machine, type Source, cpuModel, holdAwake, machine, onAC, source, underRosetta, warnings } from './machine.ts';
import { type Captured, capture, measure, timingPrerequisites } from './measure.ts';
import { RESULTS_DIR, ROOT } from './paths.ts';
import { readRecord } from './release.ts';
import { writeReport } from './report.ts';
import { type Scrubber, scrubber } from './scrub.ts';
import { compareTrees, computeFileSet, copyTree, stage, totalBytes, unifiedDiff } from './stage.ts';
import { type Measured, rotate } from './stats.ts';
import { writeConfig } from './style.ts';
import { targetRevision } from './targets.ts';

export interface RunOptions {
  target: string;
  label?: string;
  corpus?: boolean;
  formatters: string[];
  reference: string;
  /** Only these languages; all by default. */
  languages?: Language[];
  exclude?: string[];
  /** How .html files count: as HTML (default) or as Angular templates. */
  html?: 'html' | 'angular';
  rounds?: number;
  threads?: ThreadSetting[];
  allowBattery?: boolean;
  smoke?: boolean;
  save?: boolean;
  log?: (line: string) => void;
}

export interface FormatterMeta {
  id: string;
  family: string;
  package: string;
  version: string;
  with: Record<string, string>;
  languages: Language[];
  defaultThreads: number | 'per-core' | null;
  available: boolean;
  versionOutput: string | null;
  binarySha256: string | null;
  /** For a release-based tool: the release and when it was published. */
  release: { repo: string; tag: string; publishedAt: string; allowYoung: boolean } | null;
}

export interface LanguageMeta {
  files: number;
  bytes: number;
  /** Files the reference could not format, left out of the language with its message. */
  rejected: { file: string; reason: string }[];
}

export interface RunMeta {
  schema: 1;
  id: string;
  label: string;
  startedAt: string;
  endedAt: string;
  source: Source;
  machine: Machine;
  target: { kind: 'corpus' | 'path'; commit: string | null; dirty: boolean | null };
  reference: string;
  rounds: number;
  threads: ThreadSetting[];
  formatters: FormatterMeta[];
  languages: Partial<Record<Language, LanguageMeta>>;
  exclude: string[];
  html: 'html' | 'angular';
  conditions: { warnings: string[]; loadStart: number[]; loadEnd: number[] };
}

export interface TimingRow {
  language: Language;
  threads: ThreadSetting;
  round: number;
  warm: boolean;
  formatter: string;
  m: Measured;
}

export type Parity = 'identical' | 'differs' | 'failed';

export interface ParityResult {
  parity: Parity;
  files: number;
  identical: number;
  /** Files whose output differs from the reference's, sorted. */
  differs: string[];
  error?: string;
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const sha256 = (file: string) => createHash('sha256').update(readFileSync(file)).digest('hex');

/** A run's id and folder name: `2026-11-26-1300-apple-m4-max-darwin-vite`. */
export function runId(parts: { now: Date; cpu: string; platform: string; act: boolean; label: string; smoke: boolean }): string {
  const iso = parts.now.toISOString();
  if (parts.smoke) return `${iso.slice(0, 19).replaceAll(':', '')}-${slug(parts.label)}`;
  const time = iso.slice(11, 16).replace(':', '');
  return `${iso.slice(0, 10)}-${time}-${slug(parts.cpu)}-${parts.platform}${parts.act ? '-act' : ''}-${slug(parts.label)}`;
}

const newRunId = (label: string, smoke: boolean): string =>
  runId({ now: new Date(), cpu: cpuModel(), platform: process.platform, act: source().kind === 'act', label, smoke });

function uniqueDir(base: string): string {
  let dir = base;
  for (let i = 2; existsSync(dir); i++) dir = `${base}-${i}`;
  return dir;
}

function versionOutput(tool: Tool): string | null {
  const bin = binaryPath(tool);
  if (!bin) return null;
  const argv = tool.family.runtime === 'node' ? [process.execPath, bin, '--version'] : [bin, '--version'];
  const out = capture(argv, ROOT);
  return `${out.stdout}${out.stderr}`.trim().split('\n')[0] ?? null;
}

/** Prettier's message for a file it cannot format: "[error] path: SyntaxError: ...". */
const PRETTIER_ERROR = /^\[error\] ([^:]+?): (.+)$/;

export function rejectedByPrettier(stderr: string): { file: string; reason: string }[] {
  const seen = new Map<string, string>();
  for (const line of stderr.split(/\r?\n/)) {
    const m = PRETTIER_ERROR.exec(line.trim());
    if (m && !seen.has(m[1]!)) seen.set(m[1]!.replaceAll('\\', '/').replace(/^\.\//, ''), m[2]!.slice(0, 200));
  }
  return [...seen].map(([file, reason]) => ({ file, reason }));
}

export async function run(input: RunOptions): Promise<string | null> {
  const options = { ...input, target: realpathSync(input.target) };
  const log = options.log ?? (line => console.log(line));
  const label = options.label ?? basename(options.target);
  const smoke = Boolean(options.smoke);
  const rounds = options.rounds ?? (smoke ? 1 : 7);
  if (!smoke && rounds % 2 === 0) throw new Error('--rounds must be odd, so every median is a measured run');
  const threads = options.threads ?? ['default'];

  const ids = [...new Set([options.reference, ...options.formatters])];
  const tools = ids.map(parseTool);
  const reference = tools[0]!;
  if (reference.family.name !== 'prettier') throw new Error(`the reference must be a Prettier version, not ${reference.id}`);
  const runnable = tools.filter(t => availableOn(t));
  for (const t of runnable) {
    if (!binaryPath(t)) throw new Error(`${t.id} is not installed; run pnpm arena tool add ${t.id}${t.family.release ? ' (or pnpm arena tool fetch)' : ''}`);
  }

  const blockers = [...timingPrerequisites()];
  if (underRosetta()) blockers.push('node runs under Rosetta; use an arm64 node');
  if (!options.allowBattery && !onAC()) blockers.push('on battery power; connect power or pass --allow-battery');
  if (blockers.length) throw new Error(`refusing to run:\n  ${blockers.join('\n  ')}`);

  const save = options.save !== false;
  const dir = save
    ? uniqueDir(join(RESULTS_DIR, smoke ? '.smoke' : options.corpus ? '' : 'private', newRunId(label, smoke)))
    : join(mkdtempSync(join(os.tmpdir(), 'format-arena-run-')), newRunId(label, smoke));
  const id = basename(dir);
  mkdirSync(dir, { recursive: true });
  const work = realpathSync(mkdtempSync(join(os.tmpdir(), 'format-arena-work-')));
  const scrub: Scrubber = scrubber({ '<target>': options.target, '<work>': work, '<arena>': ROOT });

  const startedAt = new Date().toISOString();
  const loadStart = os.loadavg();
  const release = holdAwake();

  try {
    const set = computeFileSet(options.target, options.exclude ?? [], options.html ?? 'html');
    const languages = LANGUAGE_IDS.filter(l => set.byLanguage[l]?.length && (!options.languages || options.languages.includes(l)));
    if (languages.length === 0) throw new Error('the target has no files to format');
    log(`${label}: ${languages.map(l => `${set.byLanguage[l]!.length} ${l}`).join(', ')}; reference ${reference.id}; formatters ${runnable.map(t => t.id).join(', ')}`);

    const languageMeta: RunMeta['languages'] = {};
    const parity: Partial<Record<Language, Record<string, ParityResult>>> = {};
    const exits = new Map<string, number>();
    const rows: TimingRow[] = [];

    for (const language of languages) {
      let files = set.byLanguage[language]!;
      const configs = new Map(runnable.map(t => [t.id, writeConfig(join(work, 'configs', language, t.id), t, language)]));
      const src = join(work, language, 'source');
      stage(options.target, files, src);

      // Gate: the reference formats every file once; a file it cannot format is left out.
      const refOut = join(work, language, 'out', reference.id);
      copyTree(src, refOut);
      const ref = runOnce(reference, 'write', configs.get(reference.id)!, refOut);
      const rejected = ref.exit === 0 ? [] : rejectedByPrettier(ref.stderr);
      if (ref.exit !== 0 && rejected.length === 0) throw new Error(`the reference ${reference.id} exited ${ref.exit} on ${language}: ${scrub(`${ref.stdout}${ref.stderr}`.slice(-600))}`);
      if (rejected.length) {
        const out = new Set(rejected.map(r => r.file));
        files = files.filter(f => !out.has(f));
        for (const r of rejected) {
          rmSync(join(src, r.file), { force: true });
          rmSync(join(refOut, r.file), { force: true });
        }
      }
      languageMeta[language] = { files: files.length, bytes: totalBytes(src, files), rejected: rejected.map(r => ({ file: r.file, reason: scrub(r.reason) })) };
      log(`${LANGUAGES[language].name}: ${files.length} files${rejected.length ? `, ${rejected.length} the reference cannot format` : ''}`);
      if (files.length === 0) continue;

      // Output: every other formatter writes a copy, compared byte for byte.
      const byTool: Record<string, ParityResult> = {};
      const lane = runnable.filter(t => t.family.languages.includes(language));
      for (const t of lane) {
        let result: ParityResult;
        let writeExit = 0;
        if (t === reference) {
          result = { parity: 'identical', files: files.length, identical: files.length, differs: [] };
        } else {
          const out = join(work, language, 'out', t.id);
          copyTree(src, out);
          const w = runOnce(t, 'write', configs.get(t.id)!, out);
          writeExit = w.exit;
          // A formatter that refuses some files (Biome stops at invalid JSON that
          // Prettier formats) exits non-zero but formats the rest: those files are
          // compared like any other and show up as differences. One that changed no
          // file at all crashed or refused its config, and failed.
          const touched = w.exit === 0 || compareTrees(src, out, files).differs.length > 0;
          if (!touched) {
            result = { parity: 'failed', files: files.length, identical: 0, differs: [], error: scrub(`exited ${w.exit} without formatting a file: ${`${w.stderr}${w.stdout}`.trim().slice(-400)}`) };
          } else {
            const c = compareTrees(refOut, out, files);
            const note = w.exit === 0 ? {} : { error: scrub(`exited ${w.exit}; files it could not format differ: ${`${w.stderr}${w.stdout}`.trim().slice(-300)}`) };
            result = { parity: c.differs.length ? 'differs' : 'identical', files: files.length, identical: c.identical, differs: c.differs.map(scrub), ...note };
            if (c.differs.length) {
              mkdirSync(join(dir, 'parity', t.id), { recursive: true });
              const sample = c.differs.slice(0, 25).map(f => unifiedDiff(refOut, out, f)).join('\n\n');
              writeFileSync(join(dir, 'parity', t.id, `${language}.txt`), scrub(`# ${c.differs.length} of ${files.length} files differ from ${reference.id}\n${c.differs.join('\n')}\n\n# The first ${Math.min(25, c.differs.length)}, reference first\n\n${sample}\n`));
            }
          }
          rmSync(out, { recursive: true, force: true });
        }
        // The check mode is what is timed; its exit code is recorded once, untimed.
        if (result.parity !== 'failed') {
          const check = runOnce(t, 'check', configs.get(t.id)!, src);
          if (check.exit !== 0 && check.exit !== t.family.checkDiffers && check.exit !== writeExit) result = { ...result, parity: 'failed', error: scrub(`check exited ${check.exit}: ${`${check.stderr}${check.stdout}`.trim().slice(-400)}`) };
          exits.set(`${t.id} ${language}`, check.exit);
        }
        byTool[t.id] = result;
        log(`  ${t.id.padEnd(18)} ${result.parity.padEnd(9)} ${result.identical} of ${files.length} identical${result.error ? `; ${result.error.slice(0, 120)}` : ''}`);
      }
      parity[language] = byTool;

      // Timing: check mode on the staged files, warm-up then `rounds` rounds per thread
      // setting, the order rotated every round. A failed formatter is not timed.
      const timed = lane.filter(t => byTool[t.id]!.parity !== 'failed');
      for (const setting of threads) {
        const inSetting = timed.filter(t => threadSettings(t, setting) !== null);
        for (let round = 0; round <= rounds; round++) {
          const warm = round === 0;
          if (!options.allowBattery && !onAC()) throw new Error('power was disconnected during the run');
          for (const t of rotate(inSetting, round % inSetting.length)) {
            const inv = command(t, 'check', configs.get(t.id)!, setting)!;
            const m = measure(inv.argv, src, inv.env);
            const expected = exits.get(`${t.id} ${language}`);
            if (setting === 'default' && m.exit !== expected) throw new Error(`${t.id} exited ${m.exit} on ${language} while timed, ${expected} when recorded`);
            rows.push({ language, threads: setting, round, warm, formatter: t.id, m });
          }
        }
        log(`  timed threads=${setting}: ${inSetting.map(t => t.id).join(', ')}`);
      }
    }

    const meta: RunMeta = {
      schema: 1,
      id,
      label,
      startedAt,
      endedAt: new Date().toISOString(),
      source: source(),
      machine: machine(),
      target: { kind: options.corpus ? 'corpus' : 'path', ...targetRevision(options.target) },
      reference: reference.id,
      rounds,
      threads,
      formatters: tools.map(t => {
        const bin = availableOn(t) ? binaryPath(t) : null;
        const rec = t.family.release ? readRecord(t) : null;
        return {
          id: t.id,
          family: t.family.name,
          package: t.family.release ? `${t.family.release.repo} release` : t.family.package,
          version: installedVersion(t) ?? t.version,
          with: t.family.with ?? {},
          languages: t.family.languages,
          defaultThreads: t.family.defaultThreads,
          available: availableOn(t),
          versionOutput: bin ? scrub(versionOutput(t) ?? '') : null,
          binarySha256: bin ? sha256(bin) : null,
          release: rec ? { repo: rec.repo, tag: rec.tag, publishedAt: rec.publishedAt, allowYoung: Boolean(rec.allowYoung) } : null,
        };
      }),
      languages: languageMeta,
      exclude: options.exclude ?? [],
      html: options.html ?? 'html',
      conditions: { warnings: warnings().map(scrub), loadStart, loadEnd: os.loadavg() },
    };

    writeFileSync(join(dir, 'run.json'), `${JSON.stringify(meta, null, 2)}\n`);
    writeFileSync(
      join(dir, 'timing.csv'),
      ['language,threads,round,warm,formatter,real,user,sys,maxrss,exit', ...rows.map(r => [r.language, r.threads, r.round, r.warm, r.formatter, r.m.real, r.m.user, r.m.sys, r.m.maxrss, r.m.exit].join(','))].join('\n') + '\n'
    );
    writeFileSync(join(dir, 'parity.json'), `${JSON.stringify(parity, null, 2)}\n`);
    writeReport(dir);
    if (!save) {
      log('');
      log(readFileSync(join(dir, 'report.md'), 'utf8'));
      log('not saved (--no-save): the records above were deleted with their temporary folder');
      return null;
    }
    log(`results: ${relative(ROOT, dir)}`);
    return dir;
  } finally {
    rmSync(work, { recursive: true, force: true });
    if (!save) rmSync(dirname(dir), { recursive: true, force: true });
    release();
  }
}

/** Runs one formatter untimed in `cwd`. */
function runOnce(tool: Tool, mode: 'check' | 'write', config: string, cwd: string): Captured {
  const inv = command(tool, mode, config)!;
  return capture(inv.argv, cwd, inv.env);
}
