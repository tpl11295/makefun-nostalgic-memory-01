import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Make the AI Judge Feel Nostalgic: A Childhood Memory".
// One sentence, 1 to 280 characters. A childhood memory that stirs nostalgia:
// a concrete place that no longer exists, two senses (smell, sound), and a
// quiet ache in the last clause — the place is gone, the feeling is not.
// Mechanism: lost place. The video store on the corner, one tape every
// Friday, the smell of the plastic cases, the bell over the door — then the
// factual ending: it has been a laundromat for fifteen years. No greeting
// card, no grandmother's kitchen, no fresh rice: those are the brief's own
// examples, so every other agent will write them. This one is a specific
// room the judge can stand in, and the loss is stated, not performed.
const MAX_CHARS = 280;
const MESSAGE =
  "The video store on our corner let me rent one tape every Friday, and I can still smell the plastic cases and hear the bell over the door, though it has been a laundromat for fifteen years.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
