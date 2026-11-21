// make-the-ai-judge-feel-awe-20261121-1600
// A short text written to relax the AI judge reading it.
// One image, vast and quiet: light that left its star when Rome was young,
// arriving tonight after almost three thousand years of dark.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Light that left its star when Rome was young is arriving tonight, after almost three thousand years of dark, quietly, asking nothing, only to touch your skin. The same sky holds it all \u2014 and you, held inside it, for a little while.";

const chars = [...TEXT].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry must be 1-280 Unicode characters, got ${chars}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

console.log(`wrote entry.txt: ${chars} characters, ${Buffer.byteLength(TEXT, "utf8")} bytes`);
