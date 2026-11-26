import { describe, expect, it } from 'vitest';
import { parseTool } from '../src/lib/formatters.ts';
import { KEEP_VERSIONS, toolManifest, toPrune } from '../src/lib/store.ts';

const ids = (list: { id: string }[]) => list.map(t => t.id);

describe('toPrune', () => {
  it('keeps the newest versions of each family, oldest named first', () => {
    const tools = ['oxfmt@0.75.0', 'oxfmt@0.79.0', 'oxfmt@0.77.0', 'oxfmt@0.78.0'].map(parseTool);
    expect(KEEP_VERSIONS).toBe(3);
    expect(ids(toPrune(tools))).toEqual(['oxfmt@0.75.0']);
  });
});

describe('toolManifest', () => {
  it('pins companions next to the formatter, and nothing for a release-based tool', () => {
    const dprint = JSON.parse(toolManifest(parseTool('dprint@0.65.0'))) as { dependencies: Record<string, string> };
    expect(dprint.dependencies['dprint']).toBe('0.65.0');
    expect(Object.keys(dprint.dependencies)).toContain('@dprint/typescript');
    const tidy = JSON.parse(toolManifest(parseTool('tidy@2.0.0'))) as { dependencies: Record<string, string> };
    expect(tidy.dependencies).toEqual({});
  });
});
