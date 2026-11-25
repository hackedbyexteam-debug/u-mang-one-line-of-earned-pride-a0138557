// One Line of Earned Pride — final entry.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) one line that makes the judge feel genuinely proud — a quiet,
// earned moment of pride for someone in a scene; (2) a concrete scene with
// a real person in it, seen happening rather than summarised; (3) the pride
// is earned inside the line, by effort or difficulty the reader can feel,
// never asserted, congratulated or explained; (4) it lands in one read,
// the pride arriving by the last word; (5) freshness — not the stock
// trophy, podium or graduation.
//
// Candidates:
//  1. "After eleven failed batches, the baker's apprentice pulled the twelfth loaf from the oven and it finally sang."
//  2. "She had soldered the same joint forty times; on the forty-first, the radio crackled alive in her hands."
//  3. "The night-shift janitor finished mopping the last ward at 5 a.m. and the surgeon nodded at him on her way out."
//  4. "He carried the piano up three flights alone because the movers cancelled, then played one note and it stayed in tune."
//  5. "After six months of 5 a.m. alarms, the old man laced his shoes, crossed the finish line, and kept walking home."
//  6. "The girl who stuttered through every reading stood up, read the last page aloud, and the class forgot to breathe."
//  7. "For three winters she patched the same roof in the rain; this spring, the attic stayed dry."
//  8. "The apprentice's first chair wobbled; her fortieth held the weight of her grandmother sitting down to dinner."
//  9. "He failed the driving test four times, then drove his mother to her first chemo appointment on time."
// 10. "The night she finally threaded the needle without her glasses, her grandmother's quilt was finished."
// 11. "After a year of practising in an empty hall, the violinist played to twelve people — and every one of them stayed."
// 12. "The boy who could not tie his shoes tied his little sister's laces before her first day of school."
//
// Rejected as modal (the field's centre): #5 (finish-line run, the stock
// pride image), #6 (stuttering reader winning over the class — a familiar
// feel-good template), #3 (the nod of recognition from a superior — pride
// handed to the person by someone else, not earned in the image).
// Rejected on C3 (pride asserted or explained, not earned): #9 (the
// emotion is carried by "chemo", not by the effort in the line — and the
// heaviness crowds out the pride), #10 (the payoff is a finished quilt,
// stated rather than felt).
// Rejected on C4 (pride does not arrive by the last word): #1 (the pride
// peaks at "finally sang", then the line is over — close, but the image
// is a loaf, not a person), #4 (two separate feats stitched together;
// the tune payoff lands mid-line).
//
// Why #8 wins:
// - Criterion 1: a quiet, earned moment of pride for a small person in a
//   scene — an apprentice woodworker, her grandmother, dinner.
// - Criterion 2: a concrete scene, seen happening: a first chair that
//   wobbled, a fortieth chair, a grandmother sitting down to dinner.
//   Numbers make it visible (first / fortieth).
// - Criterion 3: the pride is earned inside the line by forty chairs of
//   practice; the word "proud" never appears, nothing is congratulated
//   or explained — the chair holding is the whole proof.
// - Criterion 4: it lands in one read and the pride arrives by the last
//   words — the grandmother sitting down is the moment the work is
//   proven good.
// - Criterion 5: fresh — no trophy, no podium, no graduation, no finish
//   line; a chair, a grandmother, dinner.
//   Concrete nouns: "chair", "fortieth", "grandmother", "dinner".
// Runner-up #7 (three winters patching a roof; this spring the attic
// stayed dry) is nearly as quiet, but its person is a worker doing a job
// rather than a small person doing something hard, and "stayed dry" is a
// thinner payoff than a grandmother sitting down to dinner. Runner-up #2
// (forty-first solder joint, radio crackling alive) loses on C2: the
// scene is a workbench, not a person in a moment with someone else.
//
// Gate: 109 characters (limit 1-240), one line, UTF-8. No trailing
// newline in the entry: the gate counts characters, and the line lands
// cleanest as exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `The apprentice's first chair wobbled; her fortieth held the weight of her grandmother sitting down to dinner.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
