// `pnpm arena languages verify`: proves the languages each family declares. Every
// language has a sample, fixtures/languages/sample.<ext>, written unformatted on
// purpose; every formatter formats a copy of the folder, and must change the sample
// of every language its family declares, without failing. A formatter that leaves
// a sample as it was does not format that language, and would be timed on a
// language it skips.
import { mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { type Tool, command } from './formatters.ts';
import { type Language, languageOf } from './languages.ts';
import { capture } from './measure.ts';
import { FIXTURES_DIR } from './paths.ts';
import { stage } from './stage.ts';
import { writeConfig } from './style.ts';

export interface VerifyResult {
  tool: string;
  /** Declared languages whose sample it left unchanged. */
  unchanged: Language[];
  error?: string;
}

export function verifyLanguages(tools: Tool[]): VerifyResult[] {
  const from = join(FIXTURES_DIR, 'languages');
  const samples = readdirSync(from).filter(f => languageOf(f));
  return tools.map(tool => {
    const work = realpathSync(mkdtempSync(join(tmpdir(), 'format-arena-languages-')));
    try {
      // Only the declared languages' samples, as a run stages one language at a time.
      const declared = samples.filter(f => tool.family.languages.includes(languageOf(f)!));
      const dir = join(work, 'files');
      // One language at a time, each with its own config, as in a run.
      for (const f of declared) {
        const language = languageOf(f)!;
        const one = join(work, 'one', language);
        stage(from, [f], one);
        const inv = command(tool, 'write', writeConfig(join(work, 'config', language), tool, language))!;
        const out = capture(inv.argv, one, inv.env);
        if (out.exit !== 0) return { tool: tool.id, unchanged: [language], error: `${language}: exited ${out.exit}: ${`${out.stderr}${out.stdout}`.trim().slice(-300)}` };
        stage(one, [f], dir);
      }
      const unchanged = declared
        .filter(f => readFileSync(join(from, f)).equals(readFileSync(join(dir, f))))
        .map(f => languageOf(f)!);
      return { tool: tool.id, unchanged };
    } finally {
      rmSync(work, { recursive: true, force: true });
    }
  });
}
