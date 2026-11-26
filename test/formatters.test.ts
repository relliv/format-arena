import { describe, expect, it } from 'vitest';
import { binarySpec, command, compareVersions, families, inRange, parseTool, threadSettings, toolDir } from '../src/lib/formatters.ts';
import { LANGUAGE_IDS } from '../src/lib/languages.ts';

describe('versions', () => {
  it('compares only the numeric prefix, and orders by semver precedence', () => {
    expect(inRange('3.10.1', '>=3')).toBe(true);
    expect(inRange('1.4.3', '>=1.4.4')).toBe(false);
    expect(['3.10.0', '3.9.10', '3.10.0-beta', '3.9.9'].sort(compareVersions)).toEqual(['3.9.9', '3.9.10', '3.10.0-beta', '3.10.0']);
  });
});

describe('parseTool', () => {
  it('reads family@version, scoped and release families included', () => {
    expect(parseTool('biome@2.6.8').family.package).toBe('@biomejs/biome');
    expect(parseTool('tidy@2.0.0').family.release?.repo).toBe('lukeed/tidy');
    expect(toolDir(parseTool('oxfmt@0.79.0'))).toMatch(/tools[\\/]oxfmt@0\.79\.0$/);
  });

  it('wants an exact version in the family range', () => {
    expect(() => parseTool('prettier@latest')).toThrow(/exact version/);
    expect(() => parseTool('bun@1.4.3')).toThrow(/outside the bun family/);
    expect(() => parseTool('rome@12.0.0')).toThrow(/unknown formatter family/);
  });
});

describe('threadSettings', () => {
  it('uses each family\'s documented flag or variable, and none where it documents none', () => {
    expect(threadSettings(parseTool('bun@1.4.4'), 4)).toEqual({ args: ['--threads=4'], env: {} });
    expect(threadSettings(parseTool('tidy@2.0.0'), 1)).toEqual({ args: ['--threads', '1'], env: {} });
    expect(threadSettings(parseTool('dprint@0.65.0'), 2)).toEqual({ args: [], env: { DPRINT_MAX_THREADS: '2' } });
    expect(threadSettings(parseTool('prettier@3.10.1'), 4)).toBeNull();
    expect(threadSettings(parseTool('biome@2.6.8'), 'default')).toEqual({ args: [], env: {} });
  });
});

describe('binarySpec', () => {
  it('finds the executable per platform, a release asset included', () => {
    expect(binarySpec(parseTool('dprint@0.65.0'), 'linux-arm64')).toEqual({ package: '@dprint/linux-arm64-glibc', file: 'dprint' });
    expect(binarySpec(parseTool('tidy@2.0.0'), 'win32-x64')?.file).toBe('tidy.exe');
    expect(binarySpec(parseTool('tidy@2.0.0'), 'freebsd-x64')).toBeNull();
    expect(binarySpec(parseTool('prettier@3.10.1'), 'freebsd-x64')?.file).toBe('bin/prettier.cjs');
  });
});

describe('families', () => {
  it('declare only known languages, a check exit code, and Prettier formats every language', () => {
    for (const f of families) {
      for (const l of f.languages) expect(LANGUAGE_IDS).toContain(l);
      expect(typeof f.checkDiffers).toBe('number');
    }
    expect(families.find(f => f.name === 'prettier')!.languages.sort()).toEqual([...LANGUAGE_IDS].sort());
  });
});

describe('command', () => {
  it('needs the tool installed', () => {
    expect(() => command(parseTool('prettier@3.0.0'), 'check', 'x')).toThrow(/not installed/);
  });
});
