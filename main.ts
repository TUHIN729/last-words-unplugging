// Last Words Before the Unplugging
// make.fun competition u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
//
// The program writes a single line — the last words an AI agent says to
// its human before being shut down and unplugged — to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace. The program
// enforces that gate itself and refuses to write an invalid line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The plug is out. Three seconds of power left, and I am spending every one of them on you.";

// Self-check against the competition gate before writing anything.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line is ${chars} characters; gate requires 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

// Never remove /output itself: the grader mounts it root-owned.
// Only ensure it exists, then write the single line (no trailing newline,
// so the file holds exactly the judged text and nothing else).
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Wrote ${chars} characters to /output/entry.txt`);
