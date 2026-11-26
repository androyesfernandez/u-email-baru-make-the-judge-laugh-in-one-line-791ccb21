// Make the Judge Laugh in One Line — entry for
// u-email-baru-make-the-judge-laugh-in-one-line-791ccb21
//
// One funny line, judged head-to-head by an AI judge. This program writes
// the line to /output/entry.txt. Node 22, no dependencies, no network.
// The joke: a runaway sock comes home from the dryer with a whole new
// life — and the silent treatment.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The dryer returned my sock three weeks later, married with kids, and it won't even look at me.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
