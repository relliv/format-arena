// The Languages dialog: every language the arena formats as a row, every formatter
// family as a column, and a check where the family formats that language, from
// formatters.json. Each language is timed and compared on its own. Opens on #languages.
import type { Family } from '../../src/lib/formatters.ts';
import { LANGUAGES, LANGUAGE_IDS } from '../../src/lib/languages.ts';
import formatters from '../../formatters.json' with { type: 'json' };
import { FAMILIES, familyColor } from './charts.ts';
import { mountHashDialog } from './dialog.ts';

const esc = (s: unknown): string => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);

const check = `<svg class="lang-check" viewBox="0 0 16 16" role="img" aria-label="Formats it"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function mountLanguages(): void {
  // The JSON import infers a union per entry; formatters.ts reads the same file as Family[].
  const families = (formatters as unknown as { families: Family[] }).families;
  // Prettier first, as the reference, then the chart order.
  const rank = (f: Family) => (f.name === 'prettier' ? -1 : FAMILIES.indexOf(f.name));
  const columns = [...families].sort((a, b) => rank(a) - rank(b));
  const head = columns.map(f => `<th><span class="swatch" style="background:${familyColor(f.name)}"></span>${esc(f.name)}</th>`).join('');
  const rows = LANGUAGE_IDS.map(id => {
    const l = LANGUAGES[id];
    const cells = columns
      .map(f => (f.languages.includes(id) ? `<td class="yes">${check}</td>` : '<td><span class="muted">no</span></td>'))
      .join('');
    return `<tr><td class="lang-name"><b>${esc(l.name)}</b><span class="lang-ext">${l.extensions.map(e => `.${esc(e)}`).join(' ')}</span></td>${cells}</tr>`;
  }).join('');
  mountHashDialog({
    hash: '#languages',
    id: 'languages',
    title: `The ${LANGUAGE_IDS.length} languages`,
    hint: 'Which family formats which language. Each language is timed and compared with the reference on its own, over the files of that language.',
    body: `<div class="languages-table"><div class="table-scroll"><table class="data">
      <thead><tr><th>Language</th>${head}</tr></thead>
      <tbody>${rows}</tbody>
    </table></div></div>`,
  });
}
