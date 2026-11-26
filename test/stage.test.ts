import { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { languageOf } from '../src/lib/languages.ts';
import { compareTrees, computeFileSet, stage } from '../src/lib/stage.ts';

let root: string;
const write = (path: string, text = 'x\n') => {
  mkdirSync(dirname(join(root, path)), { recursive: true });
  writeFileSync(join(root, path), text);
};

beforeEach(() => {
  root = realpathSync(mkdtempSync(join(tmpdir(), 'format-arena-stage-')));
});
afterEach(() => rmSync(root, { recursive: true, force: true }));

describe('languageOf', () => {
  it('maps extensions, case insensitive, and nothing else', () => {
    expect(languageOf('a/b.TSX')).toBe('js');
    expect(languageOf('ci.yml')).toBe('yaml');
    expect(languageOf('README.md')).toBe('markdown');
    expect(languageOf('logo.svg')).toBeNull();
    expect(languageOf('src/app/app.component.html')).toBe('angular');
    expect(languageOf('index.html')).toBe('html');
    expect(languageOf('.html')).toBeNull();
    expect(languageOf('Makefile')).toBeNull();
  });
});

describe('computeFileSet', () => {
  it('groups files by language and skips installs, build output, dot folders, links and lockfiles', () => {
    for (const f of ['src/a.ts', 'src/b.css', 'docs/c.md', 'pkg/package.json', 'node_modules/x/i.js', 'dist/o.js', '.github/w.yml', 'pnpm-lock.yaml', '.prettierrc.json']) write(f);
    symlinkSync('./src/a.ts', join(root, 'link.ts'));
    const set = computeFileSet(root);
    expect(set.byLanguage).toEqual({ js: ['src/a.ts'], css: ['src/b.css'], markdown: ['docs/c.md'], json: ['pkg/package.json'] });
    expect(set.skippedDirs).toBe(3);
  });

  it('counts every .html file of an Angular project as a template', () => {
    for (const f of ['src/app.html', 'src/index.html', 'src/menu.component.html']) write(f);
    expect(computeFileSet(root).byLanguage).toEqual({ html: ['src/app.html', 'src/index.html'], angular: ['src/menu.component.html'] });
    expect(computeFileSet(root, [], 'angular').byLanguage).toEqual({ angular: ['src/app.html', 'src/index.html', 'src/menu.component.html'] });
  });

  it('takes extra paths to leave out', () => {
    for (const f of ['a.ts', 'fixtures/bad.ts']) write(f);
    expect(computeFileSet(root, ['fixtures']).byLanguage.js).toEqual(['a.ts']);
  });
});

describe('stage and compareTrees', () => {
  it('copies files with their paths and compares two trees byte for byte', () => {
    write('src/a.ts', 'const a = 1;\n');
    write('src/b.ts', 'const b = 2;\n');
    const one = join(root, 'one');
    const two = join(root, 'two');
    stage(root, ['src/a.ts', 'src/b.ts'], one);
    stage(root, ['src/a.ts', 'src/b.ts'], two);
    expect(readFileSync(join(one, 'src/a.ts'), 'utf8')).toBe('const a = 1;\n');
    writeFileSync(join(two, 'src/b.ts'), 'const b = 2\n');
    expect(compareTrees(one, two, ['src/a.ts', 'src/b.ts'])).toEqual({ identical: 1, differs: ['src/b.ts'] });
  });
});

describe('angularNames', () => {
  it('stages every template as .component.html and keeps a real name that would collide', async () => {
    const { angularNames } = await import('../src/lib/stage.ts');
    const names = angularNames(['a/button.html', 'a/menu.component.html', 'b/x.html', 'b/x.component.html', 'c/page.htm']);
    expect([...names]).toEqual([
      ['a/button.component.html', 'a/button.html'],
      ['a/menu.component.html', 'a/menu.component.html'],
      ['b/x.html', 'b/x.html'],
      ['b/x.component.html', 'b/x.component.html'],
      ['c/page.component.html', 'c/page.htm'],
    ]);
  });
});
