// Turns a run's raw records (run.json, timing.csv, parity.json) into summary.json,
// which the site reads, and report.md, which people read. Both are regenerated from
// the raw records at any time.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { type CorpusProject, corpus } from './corpus.ts';
import { LANGUAGES, type Language, LANGUAGE_IDS } from './languages.ts';
import { RESULTS_DIR } from './paths.ts';
import type { ParityResult, RunMeta } from './run.ts';
import { type Summary, type Timing, speedup, summarize } from './stats.ts';

export interface FormatterSummary extends Summary {
  id: string;
  family: string;
  version: string;
  /** Reference median wall time / this formatter's. */
  speedup: number;
}

export interface ParitySummary {
  id: string;
  parity: ParityResult['parity'];
  files: number;
  identical: number;
  differs: number;
  /** identical / files, 0 to 1. */
  agreement: number;
  /** The first differing files, for the site. */
  sample: string[];
  error?: string;
}

export interface LanguageSummary {
  language: Language;
  name: string;
  files: number;
  bytes: number;
  rejected: number;
  settings: { threads: string; formatters: FormatterSummary[] }[];
  parity: ParitySummary[];
  /** Formatters that failed on this language and were therefore not timed. */
  untimed: string[];
}

export interface RunSummary {
  schema: 1;
  id: string;
  label: string;
  date: string;
  source: RunMeta['source'];
  machine: RunMeta['machine'];
  reference: string;
  rounds: number;
  languages: LanguageSummary[];
  unavailable: string[];
  project?: { repo: string; commit: string; description: string };
}

export function projectOf(meta: Pick<RunMeta, 'label' | 'target'>, projects: CorpusProject[] = corpus): RunSummary['project'] {
  if (meta.target.kind !== 'corpus' || !meta.target.commit || meta.target.dirty) return undefined;
  const p = projects.find(x => x.name === meta.label);
  return p ? { repo: p.repo, commit: meta.target.commit, description: p.description } : undefined;
}

interface Row {
  language: string;
  threads: string;
  round: number;
  warm: boolean;
  formatter: string;
  timing: Timing;
}

export function readTiming(csv: string): Row[] {
  return csv
    .trim()
    .split('\n')
    .slice(1)
    .filter(Boolean)
    .map(line => {
      const [language, threads, round, warm, formatter, real, user, sys, maxrss] = line.split(',');
      return {
        language: language!,
        threads: threads!,
        round: Number(round),
        warm: warm === 'true',
        formatter: formatter!,
        timing: { real: Number(real), user: Number(user), sys: Number(sys), maxrss: Number(maxrss) },
      };
    });
}

export function summarizeRun(meta: RunMeta, rows: Row[], parity: Partial<Record<Language, Record<string, ParityResult>>>): RunSummary {
  const languages = LANGUAGE_IDS.filter(l => meta.languages[l]).map(language => {
    const inLanguage = rows.filter(r => r.language === language);
    const settings = [...new Set(inLanguage.map(r => r.threads))].map(threads => {
      const timed = inLanguage.filter(r => r.threads === threads && !r.warm);
      const ids = [...new Set(timed.map(r => r.formatter))];
      const summaries = ids.map(id => {
        const f = meta.formatters.find(x => x.id === id)!;
        return { id, family: f.family, version: f.version, ...summarize(timed.filter(r => r.formatter === id).map(r => r.timing)), speedup: 0 };
      });
      const ref = summaries.find(s => s.id === meta.reference);
      for (const s of summaries) s.speedup = ref ? speedup(ref.median, s.median) : Number.NaN;
      return { threads, formatters: summaries.sort((a, b) => a.median - b.median) };
    });
    const byTool = parity[language] ?? {};
    const paritySummaries: ParitySummary[] = Object.entries(byTool).map(([id, r]) => ({
      id,
      parity: r.parity,
      files: r.files,
      identical: r.identical,
      differs: r.differs.length,
      agreement: r.parity === 'failed' || r.files === 0 ? 0 : r.identical / r.files,
      sample: r.differs.slice(0, 10),
      ...(r.error ? { error: r.error } : {}),
    }));
    const m = meta.languages[language]!;
    return {
      language,
      name: LANGUAGES[language].name,
      files: m.files,
      bytes: m.bytes,
      rejected: m.rejected.length,
      settings,
      parity: paritySummaries,
      untimed: paritySummaries.filter(p => p.parity === 'failed').map(p => p.id),
    };
  });
  return {
    schema: 1,
    id: meta.id,
    label: meta.label,
    date: meta.startedAt,
    source: meta.source,
    machine: meta.machine,
    reference: meta.reference,
    rounds: meta.rounds,
    languages,
    unavailable: meta.formatters.filter(f => !f.available).map(f => f.id),
    project: projectOf(meta),
  };
}

const s3 = (n: number) => (n < 1 ? n.toFixed(3) : n.toFixed(2));
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
const kib = (n: number) => (n < 1 << 20 ? `${Math.round(n / 1024)} KiB` : `${(n / 2 ** 20).toFixed(1)} MiB`);

export function renderMarkdown(meta: RunMeta, summary: RunSummary): string {
  const lines: string[] = [];
  const where =
    meta.source.kind === 'ci' ? `CI runner \`${meta.source.runner}\`` : meta.source.kind === 'act' ? `act on this machine, as \`${meta.source.runner}\`` : 'local machine';
  const minutes = Math.round((Date.parse(meta.endedAt) - Date.parse(meta.startedAt)) / 60000);
  lines.push(`# ${meta.label}`, '');
  const exact = new Set(meta.formatters.map(f => f.id).filter(id => id !== meta.reference && summary.languages.every(l => { const p = l.parity.find(x => x.id === id); return !p || p.parity === 'identical'; })));
  lines.push(`> ${summary.languages.map(l => `${l.files} ${l.name}`).join(', ')} files, formatted by ${meta.formatters.length} formatters. ${exact.size ? `${[...exact].map(i => `\`${i}\``).join(', ')} print${exact.size === 1 ? 's' : ''} exactly what \`${meta.reference}\` prints in every language it formats.` : `No formatter prints exactly what \`${meta.reference}\` prints in every language.`}`, '');
  lines.push('| | |', '|---|---|');
  lines.push(`| **Machine** | ${meta.machine.cpu}, ${meta.machine.cores} cores, ${meta.machine.memoryGiB} GiB |`);
  lines.push(`| **System** | ${meta.machine.os}, Node ${meta.machine.node}, ${where} |`);
  lines.push(`| **When** | ${meta.startedAt.slice(0, 16).replace('T', ' ')} UTC, ${minutes} min |`);
  lines.push(`| **Method** | check mode, median of ${meta.rounds} rounds after one warm-up per language; order rotated every round |`);
  lines.push(`| **Reference** | \`${meta.reference}\`, with Prettier's default style written out |`);
  lines.push(`| **Run** | \`${meta.id}\` |`, '');
  if (summary.unavailable.length) lines.push(`No build for ${meta.machine.platform}: ${summary.unavailable.map(i => `\`${i}\``).join(', ')}.`, '');

  for (const l of summary.languages) {
    lines.push(`## ${l.name}`, '');
    lines.push(`${l.files} files, ${kib(l.bytes)}${l.rejected ? `; ${l.rejected} files left out because \`${meta.reference}\` cannot format them (run.json)` : ''}.`, '');
    lines.push('| Formatter | Same as reference | Differs | Result |', '|---|--:|--:|---|');
    for (const p of [...l.parity].sort((a, b) => b.agreement - a.agreement)) {
      const result = p.parity === 'failed' ? `❌ failed${p.error ? `: ${p.error.replace(/\s+/g, ' ').replaceAll('|', '\\|').slice(0, 120)}` : ''}` : p.parity === 'identical' ? '✅ identical' : '⚠️ differs';
      lines.push(`| \`${p.id}\` | ${p.identical} (${pct(p.agreement)}) | ${p.differs} | ${result} |`);
    }
    lines.push('');
    for (const setting of l.settings) {
      lines.push(`**Speed, ${setting.threads === 'default' ? 'as shipped' : `${setting.threads} ${setting.threads === '1' ? 'thread' : 'threads'}`}** (check mode over all ${l.files} files)`, '');
      lines.push('| Formatter | Wall | Range | vs reference | CPU | Peak |', '|---|--:|--:|--:|--:|--:|');
      for (const f of setting.formatters) lines.push(`| \`${f.id}\` | **${s3(f.median)} s** | ${s3(f.min)} to ${s3(f.max)} | ${f.speedup.toFixed(1)}× | ${s3(f.cpu)} s | ${Math.round(f.rssMiB)} MiB |`);
      lines.push('');
    }
    if (l.untimed.length) lines.push(`Not timed, because they failed on ${l.name}: ${l.untimed.map(i => `\`${i}\``).join(', ')}.`, '');
  }

  lines.push('## Formatters', '', '| Formatter | Package | Languages | Default threads | Version output | Binary sha256 |', '|---|---|---|---|---|---|');
  for (const f of meta.formatters) {
    const companions = Object.entries(f.with ?? {}).map(([p, v]) => `, ${p}@${v}`).join('');
    const rel = f.release ? ` (${f.release.tag}, published ${f.release.publishedAt.slice(0, 10)}${f.release.allowYoung ? ', added before 7 days as a reviewed exception' : ''})` : '';
    lines.push(`| ${f.id} | ${f.package}@${f.version}${companions}${rel} | ${f.languages.join(', ')} | ${f.defaultThreads ?? ''} | ${f.available ? (f.versionOutput ?? '') : 'no build'} | ${f.binarySha256?.slice(0, 16) ?? ''} |`);
  }
  if (meta.conditions.warnings.length) lines.push('', '## Conditions', '', ...meta.conditions.warnings.map(w => `- ${w}`));
  return `${lines.join('\n')}\n`;
}

export function writeReport(dir: string): RunSummary {
  const meta = JSON.parse(readFileSync(join(dir, 'run.json'), 'utf8')) as RunMeta;
  const rows = readTiming(readFileSync(join(dir, 'timing.csv'), 'utf8'));
  const parity = JSON.parse(readFileSync(join(dir, 'parity.json'), 'utf8')) as Partial<Record<Language, Record<string, ParityResult>>>;
  const summary = summarizeRun(meta, rows, parity);
  writeFileSync(join(dir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
  writeFileSync(join(dir, 'report.md'), renderMarkdown(meta, summary));
  return summary;
}

/** Every published run (results/<id>/), newest first, for the site. */
export function writeIndex(root = RESULTS_DIR): string[] {
  const runs = existsSync(root)
    ? readdirSync(root, { withFileTypes: true })
        .filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== 'private' && existsSync(join(root, d.name, 'summary.json')))
        .map(d => d.name)
        .sort()
        .reverse()
    : [];
  writeFileSync(join(root, 'index.json'), `${JSON.stringify({ runs }, null, 2)}\n`);
  return runs.map(r => relative(root, join(root, r)));
}
