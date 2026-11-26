// The Output card: for one language, each formatter's output compared byte for byte
// with the reference's, file by file, then the first differing files per formatter.
import type { LanguageSummary, ParitySummary, RunSummary } from '../../src/lib/report.ts';
import { familyColor } from './charts.ts';

const esc = (s: unknown): string => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
const count = (n: number): string => n.toLocaleString('en-US');
const pct = (n: number): string => `${(n * 100).toFixed(n === 1 || n === 0 ? 0 : 1)}%`;
const familyOf = (id: string): string => id.slice(0, id.lastIndexOf('@'));

/** How main.ts names a formatter: plain text for tooltips, HTML for cells. */
export interface Names {
  short(id: string): string;
  nameHtml(id: string): string;
}

const RESULT: Record<ParitySummary['parity'], [kind: string, mark: string, label: string]> = {
  identical: ['ok', '✓', 'Identical'],
  differs: ['warn', '!', 'Differs'],
  failed: ['bad', '!', 'Failed'],
};

/** Errors are one line; a long one is cut in the cell and whole in its title. */
const ERROR_PREVIEW = 90;

function outputTable(run: RunSummary, lang: LanguageSummary, names: Names): string {
  const dash = '<span class="muted">n/a</span>';
  const row = (p: ParitySummary): string => {
    const reference = p.id === run.reference;
    const [kind, mark, label] = reference ? ['ref', '', 'Reference'] : RESULT[p.parity];
    const failed = p.parity === 'failed';
    const color = familyColor(familyOf(p.id));
    return `<tr><td><span class="swatch" style="background:${color}"></span><span title="${esc(p.id)}">${names.nameHtml(p.id)}</span></td>
      <td><span class="chip ${kind}"${p.error ? ` title="${esc(p.error)}"` : ''}>${mark ? `${mark} ` : ''}${label}</span></td>
      <td class="num strong">${failed ? dash : `${count(p.identical)} <span class="muted">/ ${count(p.files)}</span>`}</td>
      <td>${reference || failed ? dash : `<div class="meter"><span style="width:${(p.agreement * 100).toFixed(1)}%;background:${color}"></span></div><span class="meter-value">${pct(p.agreement)}</span>`}</td>
      <td class="num">${reference || failed ? dash : count(p.differs)}</td>
      <td class="num">${reference || failed ? dash : count(p.untouched ?? 0)}</td>
      <td class="error-cell">${p.error ? `<span class="error-text" title="${esc(p.error)}">${esc(p.error.length > ERROR_PREVIEW ? `${p.error.slice(0, ERROR_PREVIEW)}…` : p.error)}</span>` : ''}</td></tr>`;
  };
  // The reference first, then the closest match.
  const order = [...lang.parity].sort((a, b) => Number(b.id === run.reference) - Number(a.id === run.reference) || b.agreement - a.agreement || a.id.localeCompare(b.id));
  return `<div class="table-scroll" data-scroll="output"><table class="data output-table">
    <thead><tr><th>Formatter</th><th>Result</th><th class="num">Identical files</th><th>Agreement</th><th class="num">Differing</th><th class="num" title="Differing files the formatter left exactly as they were, while the reference changed them">Left as they were</th><th>Note</th></tr></thead>
    <tbody>${order.map(row).join('')}</tbody></table></div>`;
}

/** One collapsible block per formatter that differs: the first differing paths. */
function samples(run: RunSummary, lang: LanguageSummary, names: Names): string {
  const differing = lang.parity.filter(p => p.id !== run.reference && p.sample.length).sort((a, b) => a.differs - b.differs || a.id.localeCompare(b.id));
  if (!differing.length) return '';
  const block = (p: ParitySummary): string => `<details class="differ">
      <summary><span class="swatch" style="background:${familyColor(familyOf(p.id))}"></span><span class="differ-name">${names.nameHtml(p.id)}</span>
        <span class="differ-sum"><span class="sr-sep">: </span>${count(p.differs)} ${p.differs === 1 ? 'file differs' : 'files differ'}${p.sample.length < p.differs ? `, first ${p.sample.length}` : ''}</span></summary>
      <ul class="sample-list">${p.sample.map(f => `<li><code>${esc(f)}</code></li>`).join('')}</ul>
    </details>`;
  return `<h3 class="sub-head">Where they differ</h3>
    <p class="hint">Files whose output is not byte for byte the reference's, fewest first. The run's <code>parity/</code> folder has the diffs.</p>
    <div class="differs">${differing.map(block).join('')}</div>`;
}

export function outputSection(run: RunSummary, lang: LanguageSummary, names: Names): string {
  return `<h2>Output</h2>
    <p class="hint">Each formatter's output on ${count(lang.files)} ${esc(lang.name)} files, compared byte for byte with what ${esc(names.short(run.reference))} prints.${
      lang.rejected ? ` ${count(lang.rejected)} ${lang.rejected === 1 ? 'file was' : 'files were'} left out because the reference cannot format ${lang.rejected === 1 ? 'it' : 'them'}.` : ''
    }</p>
    ${lang.parity.length ? outputTable(run, lang, names) : '<p class="hint">No formatter output was compared for this language.</p>'}
    <p class="hint legend-note">Identical files: files whose output matches the reference's exactly. Agreement: that share of all files. Left as they were: differing files the formatter did not change at all while the reference did, because it refused them (a syntax it does not parse) or judged them formatted. Note: the formatter's exit code and first error line; its full output is in the run's <code>parity/</code> folder. Failed: it exited with an error without changing any file, and was not timed.</p>
    ${samples(run, lang, names)}`;
}
