// Two Days of Quiet Dread — make.fun entry
// Writes one single-line code-review comment approving a pull request
// while carrying quiet existential dread to /output/entry.txt.
//
// Node 22, stdlib only. No network, no wall clock, no files outside the
// repo. The comment text lives in entry.txt at the repo root; this program
// reads it and writes it, exactly as-is, to entry.txt in the output dir.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read the single-line comment from the repo root.
const line = readFileSync(join(botDir, "entry.txt"), "utf8");

// Keep it exactly one line: strip only a trailing newline, nothing else.
const text = line.replace(/\r?\n$/, "");

// The gate requires 1 to 140 characters of non-whitespace text.
if (text.length < 1 || text.length > 140 || text.trim().length === 0) {
  throw new Error(`entry.txt must be 1-140 characters, got ${text.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
