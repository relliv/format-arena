// The one style every formatter is asked for, and the config that asks for it, per
// family. The style is Prettier's defaults, written out so no formatter's own
// default decides anything: 80 columns, two spaces, semicolons, double quotes,
// trailing commas everywhere valid, spaces in object braces, parentheses around
// every arrow parameter, LF line endings, prose left as written. Configs are written
// outside the staged files, so no formatter formats another one's config.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { type Tool, companionPath } from './formatters.ts';
import type { Language } from './languages.ts';

export const STYLE = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  proseWrap: 'preserve',
} as const;

/** The dprint plugins, by companion package, and the languages each formats. */
export const DPRINT_PLUGINS = ['@dprint/typescript', '@dprint/json', '@dprint/markdown', 'dprint-plugin-malva', 'dprint-plugin-yaml', 'dprint-plugin-markup'];

/** Every .html file of the Angular language is a template, whatever its name. */
const HTML_FILES = ['*.html', '*.htm'];

function writeJson(file: string, value: unknown): string {
  writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
  return file;
}

/**
 * Writes `tool`'s config for `language` into `dir` and returns its absolute path.
 * Only Angular templates differ: Prettier, bun and oxfmt are told to read .html
 * files with their Angular parser there, as an Angular project's config does.
 */
export function writeConfig(dir: string, tool: Tool, language?: Language): string {
  mkdirSync(dir, { recursive: true });
  const angular = language === 'angular';
  switch (tool.family.name) {
    case 'prettier':
    case 'bun':
      // bun fmt reads a Prettier config as it is, overrides included.
      return writeJson(join(dir, '.prettierrc.json'), angular ? { ...STYLE, overrides: [{ files: HTML_FILES, options: { parser: 'angular' } }] } : STYLE);
    case 'oxfmt':
      // Prettier's option names; oxfmt sorts package.json keys by default, Prettier never does.
      return writeJson(join(dir, '.oxfmtrc.json'), {
        ...STYLE,
        sortPackageJson: false,
        ...(angular ? { associations: [{ files: HTML_FILES, language: 'angular-html' }] } : {}),
      });
    case 'biome':
      return writeJson(join(dir, 'biome.json'), {
        root: true,
        vcs: { enabled: false },
        linter: { enabled: false },
        assist: { enabled: false },
        files: { maxSize: 1 << 30, ignoreUnknown: true },
        formatter: {
          enabled: true,
          indentStyle: 'space',
          indentWidth: STYLE.tabWidth,
          lineWidth: STYLE.printWidth,
          lineEnding: 'lf',
          bracketSpacing: STYLE.bracketSpacing,
          bracketSameLine: STYLE.bracketSameLine,
          attributePosition: 'auto',
        },
        javascript: {
          formatter: {
            quoteStyle: 'double',
            jsxQuoteStyle: 'double',
            quoteProperties: 'asNeeded',
            trailingCommas: 'all',
            semicolons: 'always',
            arrowParentheses: 'always',
          },
        },
        json: { formatter: { trailingCommas: 'none' } },
        css: { parser: { tailwindDirectives: true }, formatter: { quoteStyle: 'double' } },
        html: { formatter: { enabled: true } },
      });
    case 'dprint': {
      // dprint has its own style; these are the settings closest to the one above. It
      // resolves `includes` from the config's folder, so the files come from the
      // positional "." in formatters.json instead.
      const plugin = (pkg: string) => join(companionPath(tool, pkg), 'plugin.wasm');
      return writeJson(join(dir, 'dprint.json'), {
        incremental: false,
        lineWidth: STYLE.printWidth,
        indentWidth: STYLE.tabWidth,
        useTabs: STYLE.useTabs,
        newLineKind: 'lf',
        typescript: {
          quoteStyle: 'alwaysDouble',
          'jsx.quoteStyle': 'preferDouble',
          quoteProps: 'asNeeded',
          semicolons: 'always',
          trailingCommas: 'onlyMultiLine',
          'arrowFunction.useParentheses': 'force',
        },
        json: {},
        markdown: { textWrap: 'maintain' },
        malva: { quotes: 'alwaysDouble' },
        yaml: {},
        plugins: DPRINT_PLUGINS.map(plugin),
      });
    }
    case 'tidy':
      return writeJson(join(dir, 'tidy.json'), {
        width: STYLE.printWidth,
        indent: STYLE.tabWidth,
        tabs: STYLE.useTabs,
        quote: 'double',
        eol: 'lf',
        bracketSpacing: STYLE.bracketSpacing,
        bracketSameLine: STYLE.bracketSameLine,
        // tidy formats JSDoc comments by default, which Prettier never does.
        js: { semi: true, trailingComma: 'all', arrowParens: 'always', quoteProps: 'as-needed', jsxSingleQuote: false, jsdoc: false },
      });
  }
}
