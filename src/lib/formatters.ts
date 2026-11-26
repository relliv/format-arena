// Formatter families (formatters.json) and the tools built from them: one family at
// one exact version, such as oxfmt@0.79.0. Everything a run needs to start a
// formatter is resolved here: which package or release to install, where its
// executable is, and which arguments, environment and thread settings it runs with.
import { existsSync, mkdirSync, readFileSync, realpathSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import type { Language } from './languages.ts';
import { PLATFORM, ROOT, TOOLS_DIR } from './paths.ts';

export interface BinarySpec {
  package: string;
  file: string;
  /** The versions that publish this platform, when it was added after the first release. */
  versions?: string;
}

export type FamilyName = 'prettier' | 'bun' | 'oxfmt' | 'biome' | 'dprint' | 'tidy';

export interface ReleaseSpec {
  /** owner/name on GitHub. */
  repo: string;
  /** The release tag, {version} replaced. */
  tag: string;
  /** Per <platform>-<arch>: the archive and the executable's path inside it. */
  assets: Record<string, { name: string; file: string }>;
}

export interface Family {
  name: FamilyName;
  description: string;
  keep?: number;
  about: { maintainer: string; repo: string; language: string; why: string };
  /** The npm package, or the name of a release-based tool. */
  package: string;
  /** Set when the binary comes from a GitHub release instead of npm. */
  release?: ReleaseSpec;
  with?: Record<string, string>;
  versions: string;
  runtime?: 'node';
  binary: Record<string, BinarySpec>;
  languages: Language[];
  /** How it formats a language, for the site. */
  notes?: Partial<Record<Language, string>>;
  /** Languages it formats with another language's parser (Angular templates as plain HTML). */
  asHtml?: Language[];
  /** {config} is the generated config. */
  check: string[];
  write: string[];
  /** The exit code of check mode when some file would change. */
  checkDiffers: number;
  /** {cache} is a folder kept with the tool. */
  env: Record<string, string>;
  threads: { one?: string[]; n?: string[]; env?: Record<string, string> } | null;
  defaultThreads: DefaultThreads;
  source: string;
}

export type DefaultThreads = number | 'per-core';

export interface Tool {
  /** family@version: the name in results and charts. */
  id: string;
  family: Family;
  version: string;
}

/** `default` runs a formatter as it ships; a number sets that many threads. */
export type ThreadSetting = 'default' | number;

export type Mode = 'check' | 'write';

export const families: Family[] = (
  JSON.parse(readFileSync(join(ROOT, 'formatters.json'), 'utf8')) as { families: Family[] }
).families;

export function family(name: string): Family {
  const found = families.find(f => f.name === name);
  if (!found) {
    throw new Error(`unknown formatter family "${name}"; known: ${families.map(f => f.name).join(', ')}`);
  }
  return found;
}

function numericParts(version: string): number[] {
  return (version.match(/^\d+(\.\d+)*/)?.[0] ?? '').split('.').filter(Boolean).map(Number);
}

function compare(a: number[], b: number[]): number {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const d = (a[i] ?? 0) - (b[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
}

/**
 * Semver precedence: numeric parts first, then a release above its prereleases,
 * then prerelease identifiers part by part (numbers numerically, words by text).
 */
export function compareVersions(a: string, b: string): number {
  const d = compare(numericParts(a), numericParts(b));
  if (d !== 0) return d;
  const pa = a.split('-').slice(1).join('-');
  const pb = b.split('-').slice(1).join('-');
  if (!pa || !pb) return pa ? -1 : pb ? 1 : 0;
  const xa = pa.split('.');
  const xb = pb.split('.');
  for (let i = 0; i < Math.max(xa.length, xb.length); i++) {
    const [ia, ib] = [xa[i], xb[i]];
    if (ia === undefined) return -1;
    if (ib === undefined) return 1;
    const na = /^\d+$/.test(ia);
    const nb = /^\d+$/.test(ib);
    const c = na && nb ? Number(ia) - Number(ib) : na ? -1 : nb ? 1 : ia.localeCompare(ib);
    if (c !== 0) return c;
  }
  return 0;
}

/** Whether `version` is in a range: "*", or one comparison such as ">=3" or "<2.1". */
export function inRange(version: string, range: string): boolean {
  if (range === '*') return true;
  const m = /^(>=|<=|>|<|=)?\s*(\d+(?:\.\d+)*)$/.exec(range.trim());
  if (!m) throw new Error(`unsupported version range "${range}"`);
  const d = compare(numericParts(version), numericParts(m[2]!));
  switch (m[1] ?? '=') {
    case '>=': return d >= 0;
    case '<=': return d <= 0;
    case '>': return d > 0;
    case '<': return d < 0;
    default: return d === 0;
  }
}

export function parseTool(id: string): Tool {
  const at = id.lastIndexOf('@');
  if (at <= 0 || at === id.length - 1) {
    throw new Error(`"${id}" is not family@version, for example oxfmt@0.79.0`);
  }
  const fam = family(id.slice(0, at));
  const version = id.slice(at + 1);
  if (!/^\d+\.\d+\.\d+[\w.-]*$/.test(version)) {
    throw new Error(`"${id}": give an exact version, not a range or tag`);
  }
  if (!inRange(version, fam.versions)) {
    throw new Error(`${fam.package}@${version} is outside the ${fam.name} family (${fam.versions})`);
  }
  return { id, family: fam, version };
}

export const toolDir = (tool: Tool): string => join(TOOLS_DIR, tool.id);

/** Where a release-based tool's executable is unpacked. Gitignored. */
export const releaseBinDir = (tool: Tool): string => join(toolDir(tool), 'bin');

/** The binary spec for this machine, or null when the formatter publishes no build for it. */
export function binarySpec(tool: Tool, platform = PLATFORM): BinarySpec | null {
  if (tool.family.release) {
    const asset = tool.family.release.assets[platform];
    return asset ? { package: tool.family.package, file: asset.file } : null;
  }
  const spec = tool.family.binary[platform] ?? tool.family.binary['*'] ?? null;
  return spec && (!spec.versions || inRange(tool.version, spec.versions)) ? spec : null;
}

export const availableOn = (tool: Tool, platform = PLATFORM): boolean => binarySpec(tool, platform) !== null;

/** The executable's absolute path, or null when it is not installed (or fetched). */
export function binaryPath(tool: Tool): string | null {
  const spec = binarySpec(tool);
  if (!spec) return null;
  if (tool.family.release) {
    const file = join(releaseBinDir(tool), spec.file);
    return existsSync(file) ? file : null;
  }
  const main = join(toolDir(tool), 'node_modules', tool.family.package, 'package.json');
  if (!existsSync(main)) return null;
  try {
    const require = createRequire(realpathSync(main));
    const manifest = spec.package === tool.family.package ? realpathSync(main) : require.resolve(`${spec.package}/package.json`);
    const file = join(dirname(manifest), spec.file);
    return existsSync(file) ? file : null;
  } catch {
    return null;
  }
}

/** Where a companion package of this tool is installed. */
export function companionPath(tool: Tool, pkg: string): string {
  const main = join(toolDir(tool), 'node_modules', pkg, 'package.json');
  if (!existsSync(main)) throw new Error(`${tool.id}: ${pkg} is not installed; run pnpm install`);
  return dirname(realpathSync(main));
}

/** The installed version: the package's own, or the release's tag. */
export function installedVersion(tool: Tool): string | null {
  if (tool.family.release) return binaryPath(tool) ? tool.version : null;
  const main = join(toolDir(tool), 'node_modules', tool.family.package, 'package.json');
  return existsSync(main) ? (JSON.parse(readFileSync(main, 'utf8')) as { version: string }).version : null;
}

/** The thread flags and environment for a setting, or null when the family documents none. */
export function threadSettings(tool: Tool, threads: ThreadSetting): { args: string[]; env: Record<string, string> } | null {
  if (threads === 'default') return { args: [], env: {} };
  const t = tool.family.threads;
  if (!t) return null;
  const fill = (s: string) => s.replaceAll('{n}', String(threads));
  const args = (threads === 1 ? (t.one ?? t.n) : t.n) ?? [];
  const env = Object.fromEntries(Object.entries(t.env ?? {}).map(([k, v]) => [k, fill(v)]));
  return { args: args.map(fill), env };
}

export interface Invocation {
  argv: string[];
  env: NodeJS.ProcessEnv;
}

/**
 * The full argv and environment for one formatter in one mode. Null when the tool
 * cannot run with this thread setting.
 */
export function command(tool: Tool, mode: Mode, config: string, threads: ThreadSetting = 'default'): Invocation | null {
  const bin = binaryPath(tool);
  if (!bin) throw new Error(`${tool.id} is not installed; run pnpm arena tool add ${tool.id}`);
  const settings = threadSettings(tool, threads);
  if (settings === null) return null;
  const cache = join(toolDir(tool), '.cache');
  const env: NodeJS.ProcessEnv = { ...process.env, NO_COLOR: '1' };
  for (const [key, value] of Object.entries(tool.family.env)) {
    if (value.includes('{cache}')) mkdirSync(cache, { recursive: true });
    env[key] = value.replaceAll('{cache}', cache);
  }
  Object.assign(env, settings.env);
  const args = mode === 'check' ? tool.family.check : tool.family.write;
  return {
    argv: [
      ...(tool.family.runtime === 'node' ? [process.execPath, bin] : [bin]),
      ...args.map(a => a.replaceAll('{config}', config)),
      ...settings.args,
    ],
    env,
  };
}
