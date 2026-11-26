// The Libs dialog: one card per formatter family, from formatters.json, saying who
// maintains it, what it is written in, where it is installed from and why the arena
// tests it. It opens on #libs so the list can be linked to (see dialog.ts).
import type { Family } from '../../src/lib/formatters.ts';
import { LANGUAGES } from '../../src/lib/languages.ts';
import type { RunSummary } from '../../src/lib/report.ts';
import formatters from '../../formatters.json' with { type: 'json' };
import { FAMILIES, familyColor } from './charts.ts';
import { mountHashDialog } from './dialog.ts';

const esc = (s: unknown): string => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
const repoName = (url: string): string => url.replace('https://github.com/', '');

const PLATFORMS: Record<string, string> = {
  'darwin-arm64': 'macOS arm64',
  'darwin-x64': 'macOS x64',
  'linux-arm64': 'Linux arm64',
  'linux-x64': 'Linux x64',
  'win32-arm64': 'Windows arm64',
  'win32-x64': 'Windows x64',
};

function platforms(family: Family): string {
  // A release-based family lists its platforms by release asset; it has no npm binaries.
  const keys = family.release ? Object.keys(family.release.assets) : Object.keys(family.binary);
  return keys.includes('*') ? 'Everywhere Node runs' : keys.map(k => PLATFORMS[k] ?? k).join(', ');
}

/** Versions of a family that appear in any published run, in any language, oldest first. */
function tested(family: string, runs: RunSummary[]): string[] {
  const versions = new Set<string>();
  for (const run of runs) {
    for (const lang of run.languages) {
      for (const setting of lang.settings) {
        for (const f of setting.formatters) if (f.family === family) versions.add(f.version);
      }
    }
  }
  return [...versions].sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
}

/** Companion packages pinned for every version, such as dprint's language plugins. */
function companions(family: Family): string {
  const list = Object.entries(family.with ?? {});
  return list.length
    ? `<dt>With</dt><dd class="lib-with">${list
        .map(([p, v]) => `<a href="https://www.npmjs.com/package/${esc(p)}/v/${esc(v)}" target="_blank" rel="noopener" title="${esc(p)}@${esc(v)} on npm"><code>${esc(p)}@${esc(v)}</code></a>`)
        .join(' ')}</dd>`
    : '';
}

/** Where a version is published: its npm page, or its GitHub release. */
function versionUrl(family: Family, version: string): string {
  if (family.release) return `https://github.com/${family.release.repo}/releases/tag/${family.release.tag.replace('{version}', version)}`;
  return `https://www.npmjs.com/package/${family.package}/v/${version}`;
}

const external = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 3.5h-3v9h9v-3M9.5 2.5h4v4M13.5 2.5l-6 6"/></svg>`;

function card(family: Family, runs: RunSummary[]): string {
  const versions = tested(family.name, runs);
  const range = family.versions === '*' ? '' : ` <span class="lib-range">${esc(family.versions)}</span>`;
  const source = family.release
    ? `<dt>Release</dt><dd><code>${esc(family.release.repo)}</code>${range} <span class="lib-note">a GitHub release, not npm; its sha256 per platform is recorded when a version is added</span></dd>`
    : `<dt>npm</dt><dd><code>${esc(family.package)}</code>${range}</dd>`;
  const where = family.release ? 'on GitHub' : 'on npm';
  const languages = family.languages.map(l => LANGUAGES[l]?.name ?? l).join(', ');
  return `<article class="lib">
    <header class="lib-head">
      <h3><span class="swatch" style="background:${familyColor(family.name)}"></span>${esc(family.name)}</h3>
      <span class="lib-by">${esc(family.about.maintainer)}</span>
    </header>
    <p class="lib-summary">${esc(family.description)}</p>
    <p class="lib-why">${esc(family.about.why)}</p>
    <dl class="lib-facts">
      <dt>Written in</dt><dd>${esc(family.about.language)}</dd>
      ${source}
      <dt>Tested</dt><dd>${
        versions.length
          ? versions
              .map(v => `<a class="lib-version" href="${esc(versionUrl(family, v))}" target="_blank" rel="noopener" title="${esc(family.name)} ${esc(v)} ${where}"><code>${esc(v)}</code></a>`)
              .join(' ')
          : 'Not in a published run yet'
      }</dd>
      ${companions(family)}
      <dt>Formats</dt><dd>${esc(languages)}</dd>
      <dt>Platforms</dt><dd>${esc(platforms(family))}</dd>
    </dl>
    <nav class="lib-links">
      <a href="${esc(family.about.repo)}" target="_blank" rel="noopener">${esc(repoName(family.about.repo))}${external}</a>
      ${
        family.release
          ? `<a href="https://github.com/${esc(family.release.repo)}/releases" target="_blank" rel="noopener">Releases${external}</a>`
          : `<a href="https://www.npmjs.com/package/${esc(family.package)}" target="_blank" rel="noopener">npm${external}</a>`
      }
    </nav>
  </article>`;
}

/** Adds the dialog to the page once and keeps it in step with the #libs hash. */
export function mountLibs(runs: RunSummary[]): void {
  // The JSON import infers a union per entry; formatters.ts reads the same file as Family[].
  const families = (formatters as unknown as { families: Family[] }).families;
  // Prettier first, as the reference every other formatter is compared with; the rest follow in chart order.
  const order = (f: Family) => (f.name === 'prettier' ? -1 : FAMILIES.indexOf(f.name));
  mountHashDialog({
    hash: '#libs',
    id: 'libs',
    title: 'The formatters',
    hint: 'What each one is, who maintains it, where it comes from, and why it is in the arena.',
    body: `<div class="libs-grid">${[...families].sort((a, b) => order(a) - order(b)).map(f => card(f, runs)).join('')}</div>`,
  });
}
