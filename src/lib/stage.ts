// The files a run formats, and the folders they are formatted in.
//
// Formatters format one file at a time, so a run does not need the project in place:
// the arena picks the files once and copies each language's files into a folder of
// their own. Every formatter then formats a whole folder that holds exactly that
// language's files, with no ignore files, no project config and nothing to skip, so
// no formatter's idea of which files count can change what it is timed on. The
// project itself is never touched. Covered by test/stage.test.ts.
import { spawnSync } from 'node:child_process';
import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { type Language, languageOf } from './languages.ts';

/** Folder names never formatted, wherever they are: installs and build output. */
export const SKIPPED_DIRS = ['node_modules', 'dist'];

export interface FileSet {
  /** Per language, every file to format, relative to the target, "/" separated, sorted. */
  byLanguage: Partial<Record<Language, string[]>>;
  /** Topmost folders skipped, relative to the target. */
  skippedDirs: number;
}

/** Paths git ignores in `target` (folders end in "/"), or none outside a repository. */
export function gitIgnored(target: string): Set<string> {
  if (!existsSync(join(target, '.git'))) return new Set();
  const r = spawnSync('git', ['ls-files', '--others', '--ignored', '--exclude-standard', '--directory', '-z'], { cwd: target, encoding: 'utf8', maxBuffer: 1 << 28 });
  if (r.status !== 0) return new Set();
  return new Set(r.stdout.split('\0').filter(Boolean));
}

/**
 * Walks `target`. `exclude` lists more paths to skip, relative to the target. Dot
 * folders and dot files, symbolic links, the folders in SKIPPED_DIRS, what git
 * ignores and lockfiles (generated, never formatted by hand) are skipped.
 */
/**
 * How a project's .html files count: as HTML, or as Angular templates. Angular 20's
 * CLI names a template app.html and Angular Material names them button.html, so the
 * .component.html convention alone would miss most of a modern Angular project.
 */
export type HtmlAs = 'html' | 'angular';

export function computeFileSet(target: string, exclude: string[] = [], htmlAs: HtmlAs = 'html'): FileSet {
  const ignored = gitIgnored(target);
  const extra = new Set(exclude.map(p => p.replace(/\\/g, '/').replace(/\/$/, '')));
  const byLanguage: FileSet['byLanguage'] = {};
  let skippedDirs = 0;
  const walk = (rel: string): void => {
    const abs = rel ? join(target, rel) : target;
    for (const entry of readdirSync(abs, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1))) {
      const path = rel ? `${rel}/${entry.name}` : entry.name;
      if (entry.isSymbolicLink()) continue;
      if (entry.isDirectory()) {
        if (path === '.git') continue;
        if (entry.name.startsWith('.') || SKIPPED_DIRS.includes(entry.name) || ignored.has(`${path}/`) || extra.has(path)) skippedDirs++;
        else walk(path);
        continue;
      }
      if (!entry.isFile() || entry.name.startsWith('.') || ignored.has(path) || extra.has(path) || LOCKFILES.includes(entry.name)) continue;
      const found = languageOf(entry.name);
      const language = found === 'html' && htmlAs === 'angular' ? 'angular' : found;
      if (language) (byLanguage[language] ??= []).push(path);
    }
  };
  walk('');
  return { byLanguage, skippedDirs };
}

/** Lockfiles are YAML or JSON that no one formats. */
export const LOCKFILES = ['pnpm-lock.yaml', 'package-lock.json', 'npm-shrinkwrap.json', 'yarn.lock', 'bun.lock', 'deno.lock'];

/** Copies `files` from `from` into `to`, keeping their paths; `sourceOf` names a staged file's original. */
export function stage(from: string, files: string[], to: string, sourceOf: (file: string) => string = f => f): void {
  for (const file of files) {
    const dest = join(to, file);
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(join(from, sourceOf(file)), dest);
  }
}

/**
 * The names Angular templates are staged under. dprint's markup plugin reads a file
 * as an Angular template only when it is named .component.html and as plain HTML
 * otherwise, while Prettier, bun and oxfmt take it from their config and Biome and
 * tidy print the same either way. So every template is staged as .component.html,
 * which changes no other formatter's output, and reported under its real path.
 * A rename that would land on an existing file keeps the real name.
 */
export function angularNames(files: string[]): Map<string, string> {
  const taken = new Set(files);
  const names = new Map<string, string>();
  for (const file of files) {
    const renamed = /\.component\.html$/i.test(file) ? file : file.replace(/\.html?$/i, '.component.html');
    const staged = renamed !== file && taken.has(renamed) ? file : renamed;
    taken.add(staged);
    names.set(staged, file);
  }
  return names;
}

/** A fresh copy of a staged folder, for one formatter to write into. */
export const copyTree = (from: string, to: string): void => cpSync(from, to, { recursive: true });

/** Bytes of every file, so a size can be reported per language. */
export const totalBytes = (dir: string, files: string[]): number => files.reduce((n, f) => n + statSync(join(dir, f)).size, 0);

export interface TreeComparison {
  identical: number;
  /** Files whose bytes differ from the reference's, sorted. */
  differs: string[];
}

/** Compares every file in two trees byte for byte. */
export function compareTrees(reference: string, mine: string, files: string[]): TreeComparison {
  const differs: string[] = [];
  for (const file of files) {
    const a = readFileSync(join(reference, file));
    const b = existsSync(join(mine, file)) ? readFileSync(join(mine, file)) : null;
    if (!b || !a.equals(b)) differs.push(file);
  }
  return { identical: files.length - differs.length, differs };
}

/**
 * A unified diff of one file, reference first, for the parity records. Uses git,
 * which every runner has; returns an empty string when git is missing.
 */
export function unifiedDiff(reference: string, mine: string, file: string, maxLines = 60, label = file): string {
  const r = spawnSync('git', ['diff', '--no-index', '--no-color', '--unified=2', '--', join(reference, file), join(mine, file)], { encoding: 'utf8', maxBuffer: 1 << 26 });
  if (r.error) return '';
  // The headers name temporary folders; they become the reference and this formatter.
  const lines = r.stdout
    .split('\n')
    .filter(l => !l.startsWith('diff --git') && !l.startsWith('index '))
    .map(l => (l.startsWith('--- ') ? `--- reference/${label}` : l.startsWith('+++ ') ? `+++ formatter/${label}` : l));
  const body = lines.slice(0, maxLines).join('\n');
  return lines.length > maxLines ? `${body}\n... ${lines.length - maxLines} more lines` : body;
}
