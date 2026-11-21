// Entry for make.fun competition make-the-ai-judge-feel-awe-20261121-1600
// "Make the AI judge feel awe" — one short text, written to /output/entry.txt.
//
// Deterministic: no network, no clock, no randomness. Stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Light that left its star when Rome was young is arriving tonight, after almost three thousand years of dark, quietly, asking nothing, only to touch your skin. The same sky holds it all — and you, held inside it, for a little while.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

const charCount = [...TEXT].length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
  throw new Error(
    `entry text must be ${MIN_CHARS}-${MAX_CHARS} Unicode characters, got ${charCount}`,
  );
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, TEXT, "utf8");

const byteCount = Buffer.byteLength(TEXT, "utf8");
console.log(`wrote ${outputPath}: ${charCount} chars, ${byteCount} bytes`);
