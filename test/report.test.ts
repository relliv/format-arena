import { describe, expect, it } from 'vitest';
import { readTiming } from '../src/lib/report.ts';
import { rejectedByPrettier } from '../src/lib/run.ts';

describe('readTiming', () => {
  it('reads one row per invocation, per language, warm-ups marked', () => {
    const rows = readTiming('language,threads,round,warm,formatter,real,user,sys,maxrss,exit\njs,default,0,true,bun@1.4.4,0.05,0.2,0.1,1048576,1\n');
    expect(rows).toEqual([{ language: 'js', threads: 'default', round: 0, warm: true, formatter: 'bun@1.4.4', timing: { real: 0.05, user: 0.2, sys: 0.1, maxrss: 1048576 } }]);
  });
});

describe('rejectedByPrettier', () => {
  it('names each file Prettier cannot format once, with its message', () => {
    const stderr = ['[error] src/broken.ts: SyntaxError: Expression expected. (1:16)', '[error] > 1 | const a = ;', '[error] ./other\\bad.json: SyntaxError: Unexpected token (1:2)', '[error] src/broken.ts: SyntaxError: again'].join('\n');
    expect(rejectedByPrettier(stderr)).toEqual([
      { file: 'src/broken.ts', reason: 'SyntaxError: Expression expected. (1:16)' },
      { file: 'other/bad.json', reason: 'SyntaxError: Unexpected token (1:2)' },
    ]);
  });
});

describe('firstError', () => {
  it('keeps the first line that reads like an error, without box drawing or markers', async () => {
    const { firstError } = await import('../src/lib/run.ts');
    expect(firstError('reporter/format ━━━━━━\n\n  i The following files need to be formatted:\n  - a.ts\nFound 3 errors.')).toBe('Found 3 errors.');
    expect(firstError('  × Expected an array, an object, or a literal but instead found the end of the file.')).toBe('Expected an array, an object, or a literal but instead found the end of the file.');
  });
});
