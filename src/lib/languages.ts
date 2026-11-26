// The languages a run formats, one track each. A formatter takes part in the tracks
// of the languages its family declares (formatters.json), and every track is timed
// and compared on its own, since formatters cover different languages.

export const LANGUAGES = {
  js: { name: 'JavaScript and TypeScript', extensions: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx', 'mts', 'cts'] },
  json: { name: 'JSON', extensions: ['json'] },
  css: { name: 'CSS', extensions: ['css'] },
  scss: { name: 'SCSS', extensions: ['scss'] },
  less: { name: 'Less', extensions: ['less'] },
  markdown: { name: 'Markdown', extensions: ['md'] },
  yaml: { name: 'YAML', extensions: ['yml', 'yaml'] },
  html: { name: 'HTML', extensions: ['html', 'htm'] },
  // Angular's own naming: a component's template is <name>.component.html. Prettier
  // formats these with its angular parser, which knows @if, @for, bindings and pipes.
  angular: { name: 'Angular templates', extensions: ['component.html'] },
} as const;

export type Language = keyof typeof LANGUAGES;

export const LANGUAGE_IDS = Object.keys(LANGUAGES) as Language[];

/**
 * The language a file belongs to, by its longest matching extension (so
 * app.component.html is an Angular template and index.html is HTML), or null when
 * the arena does not format it.
 */
export function languageOf(file: string): Language | null {
  const name = file.replaceAll('\\', '/').split('/').at(-1)!.toLowerCase();
  let best: { id: Language; length: number } | null = null;
  for (const id of LANGUAGE_IDS) {
    for (const ext of LANGUAGES[id].extensions as readonly string[]) {
      if (name.endsWith(`.${ext}`) && name.length > ext.length + 1 && (!best || ext.length > best.length)) best = { id, length: ext.length };
    }
  }
  return best?.id ?? null;
}

export function isLanguage(id: string): id is Language {
  return id in LANGUAGES;
}
