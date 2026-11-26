import { describe, expect, it } from 'vitest';
import { availableOn, binaryPath, compareVersions, families } from '../src/lib/formatters.ts';
import { listTools } from '../src/lib/store.ts';
import { verifyLanguages } from '../src/lib/verify.ts';

// The newest installed version of each family must format every language it
// declares: a release that drops one fails here, before a run times it on files it skips.
const newest = families.flatMap(f =>
  listTools()
    .filter(t => t.family.name === f.name && availableOn(t) && binaryPath(t))
    .sort((a, b) => compareVersions(a.version, b.version))
    .slice(-1)
);

describe.skipIf(newest.length === 0)('languages verify', () => {
  it('every formatter changes the sample of each language it declares', { timeout: 120_000 }, () => {
    for (const r of verifyLanguages(newest)) expect({ tool: r.tool, unchanged: r.unchanged, error: r.error }).toEqual({ tool: r.tool, unchanged: [], error: undefined });
  });
});
