// Tools that come from a GitHub release instead of npm (tidy). Adding a version
// records the release's publish time and the sha256 of every platform's archive in
// tools/<id>/release.json, which is committed and reviewed like the lockfile.
// Fetching downloads this platform's archive, refuses it unless its sha256 matches
// the recorded one, and unpacks it into tools/<id>/bin/ (gitignored). The same
// 7-day release age as for npm packages applies, with the same reviewed exception.
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { type Tool, binarySpec, releaseBinDir, toolDir } from './formatters.ts';
import { PLATFORM } from './paths.ts';

export const RELEASE_AGE_MS = 7 * 24 * 60 * 60 * 1000;

export interface ReleaseRecord {
  repo: string;
  tag: string;
  publishedAt: string;
  /** Set when the version was added before it was 7 days old, as a reviewed exception. */
  allowYoung?: boolean;
  /** Per platform: the archive's name and sha256. */
  assets: Record<string, { name: string; sha256: string }>;
}

const recordFile = (tool: Tool) => join(toolDir(tool), 'release.json');

export function readRecord(tool: Tool): ReleaseRecord | null {
  return existsSync(recordFile(tool)) ? (JSON.parse(readFileSync(recordFile(tool), 'utf8')) as ReleaseRecord) : null;
}

const tagOf = (tool: Tool) => tool.family.release!.tag.replaceAll('{version}', tool.version);
const downloadUrl = (tool: Tool, name: string) => `https://github.com/${tool.family.release!.repo}/releases/download/${tagOf(tool)}/${name}`;

async function get(url: string): Promise<Response> {
  const r = await fetch(url, { headers: { 'user-agent': 'format-arena', accept: 'application/octet-stream, application/json' }, redirect: 'follow' });
  if (!r.ok) throw new Error(`GET ${url}: ${r.status} ${r.statusText}`);
  return r;
}

/**
 * Writes tools/<id>/release.json from the GitHub release: its publish time and the
 * sha256 every platform's archive publishes next to it. Refuses a release younger
 * than 7 days unless `allowYoung`, which is recorded.
 */
export async function describeRelease(tool: Tool, options: { allowYoung?: boolean; now?: number } = {}): Promise<ReleaseRecord> {
  const spec = tool.family.release!;
  const info = (await (await get(`https://api.github.com/repos/${spec.repo}/releases/tags/${tagOf(tool)}`)).json()) as { published_at: string; prerelease: boolean };
  if (info.prerelease) throw new Error(`${tool.id}: ${tagOf(tool)} is a prerelease`);
  const age = (options.now ?? Date.now()) - Date.parse(info.published_at);
  if (age < RELEASE_AGE_MS && !options.allowYoung) {
    throw new Error(`${tool.id} was published ${info.published_at.slice(0, 10)}, less than 7 days ago; pass --allow-young to add it as a reviewed exception`);
  }
  const assets: ReleaseRecord['assets'] = {};
  for (const [platform, asset] of Object.entries(spec.assets)) {
    const text = await (await get(downloadUrl(tool, `${asset.name}.sha256`))).text();
    const sha256 = /^[0-9a-f]{64}/i.exec(text.trim())?.[0]?.toLowerCase();
    if (!sha256) throw new Error(`${tool.id}: no sha256 in ${asset.name}.sha256`);
    assets[platform] = { name: asset.name, sha256 };
  }
  const record: ReleaseRecord = { repo: spec.repo, tag: tagOf(tool), publishedAt: info.published_at, ...(age < RELEASE_AGE_MS ? { allowYoung: true } : {}), assets };
  mkdirSync(toolDir(tool), { recursive: true });
  writeFileSync(recordFile(tool), `${JSON.stringify(record, null, 2)}\n`);
  return record;
}

/**
 * Downloads, verifies and unpacks this platform's archive, unless the executable is
 * already there. Returns false when the release publishes no build for this platform.
 */
export async function fetchRelease(tool: Tool): Promise<boolean> {
  const spec = binarySpec(tool);
  const record = readRecord(tool);
  if (!spec || !record) return false;
  const asset = record.assets[PLATFORM];
  if (!asset) return false;
  const bin = join(releaseBinDir(tool), spec.file);
  if (existsSync(bin)) return true;
  const bytes = Buffer.from(await (await get(downloadUrl(tool, asset.name))).arrayBuffer());
  const actual = createHash('sha256').update(bytes).digest('hex');
  if (actual !== asset.sha256) throw new Error(`${tool.id}: ${asset.name} has sha256 ${actual}, release.json records ${asset.sha256}; refusing it`);
  const dir = mkdtempSync(join(tmpdir(), 'format-arena-release-'));
  try {
    const archive = join(dir, asset.name);
    writeFileSync(archive, bytes);
    mkdirSync(releaseBinDir(tool), { recursive: true });
    // bsdtar (macOS, Windows) reads .zip and .tar.gz alike; GNU tar on Linux reads the .tar.gz builds.
    const r = spawnSync('tar', ['-xf', archive, '-C', releaseBinDir(tool)], { encoding: 'utf8' });
    if (r.status !== 0) throw new Error(`${tool.id}: could not unpack ${asset.name}: ${r.stderr}`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  if (!existsSync(bin)) throw new Error(`${tool.id}: ${asset.name} has no ${spec.file}`);
  if (process.platform !== 'win32') chmodSync(bin, 0o755);
  return true;
}
