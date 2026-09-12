# Reel 42 — Where you pick the disc up after a turnover

**Status:** Pending review
**Script drafted:** 2026-09-12 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-16 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (13.9, 13.10, 13.8, 8.5.4)
**Source lesson:** `content/lessons-3.json` → `where-to-pick-up`

Reels 39, 40 and 41 were all about calls. This one and the next three are the
turnover block — the unglamorous procedural material that decides whether a
restart is clean or a two-minute argument. This is the first of them: where the
pivot actually goes.

---

## Video — `reel42-where-to-pick-up.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40 and 41.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Where you pick the disc up after a turnover · kicker BEGINNER · LESSON 42 / 75 |
| 2 | #1 WHERE IT STOPPED | "In the middle of the field, the spot is the spot." · footer cites 13.9 |
| 3 | Rules detail | Verbatim 13.9, one block |
| 4 | #2 NOT WHERE IT STOPPED | "Two cases where you walk to a line instead." · footer cites 13.10 · 13.8 |
| 5 | Rules detail | Verbatim 13.10 and 13.8, two blocks |
| 6 | #3 IF YOU CANNOT AGREE | "There is a rule for that, and it takes three seconds." · footer cites 8.5.4 |
| 7 | Rules detail | Verbatim 8.5.4, one block |
| 8 | FIELD TIP | "The spot is where it crossed the line, not where it rolled to a stop." |
| 9 | Closing | "Lesson 42 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### One stem deliberately left off, and why it is a bigger call than usual

- **13.7 is in the lesson's `rules` array and is still not carded.** It reads
  `After a turnover, the turnover location is where:` — a heading stem — and its
  four sub-items are fragments, two of which are pure cross-references
  (`13.7.3` and `13.7.4` point at 13.2.2–13.2.7). Carding the stem means either
  carding all four, which puts two unexplained cross-references on screen, or
  carding two of four, which truncates an enumeration. Neither is acceptable,
  so the reel teaches "turnover location" through the three cases that use it
  rather than through its definition.
- **This is a departure from the usual footer rule and it is flagged, not
  hidden.** Every other reel in the run cites a subset of its lesson's array;
  this one drops a member that is genuinely load-bearing for the phrase
  "turnover location" appearing in all three quotations. The mitigation is in
  the copy: scene 2's body says in plain words that the turnover location is
  where the disc stopped or was picked up, before 13.9 uses the term. **If that
  reads as too thin at the script gate, the fix is a fourth pair carding 13.7 +
  13.7.1 + 13.7.2 and an eleven-scene reel** — say so and it gets redrafted.
- **Every rule carded is in the lesson's array**, and every footer cites only
  what its own card quotes.

### What the three cards do

1. **13.9 — the ordinary case.** Turnover in the central zone: the pivot goes
   exactly where the disc is. Most turnovers are this and need no thought.
2. **13.10 and 13.8 — the two that move you.** Attacking end zone sends you to
   the nearest point on the goal line; out-of-bounds sends you to the nearest
   point on the central zone *to where it crossed*. Paired on one card on
   purpose: the thing they have in common is that the spot is not where the
   disc ended up, which is the whole misconception this reel is aimed at.
3. **8.5.4 — the tie-break.** Two people pacing out different spots is a
   genuinely common stall, and the rulebook resolves it arithmetically. Worth
   knowing because it ends the conversation rather than winning it.

**Layout — NOT DRY-MEASURED in the sandbox. Kickers and captions measured in
the browser.**

The workspace sandbox failed to mount again on 2026-09-12 — the sixth
consecutive day, same `share "c" which is not mounted` Plan9 error as 09-08
through 09-11. `check_layout.py`, `check_caption.py` and `node --check` could
not be run.

- **Kickers are short by design**, all three at or under 23 characters:
  `#1 WHERE IT STOPPED`, `#2 NOT WHERE IT STOPPED`, `#3 IF YOU CANNOT AGREE`.
  All are shorter than reel-41's widest (`#1 CONTACT OFF THE DISC`, measured at
  654.9px of the 900px column in Chrome at 34px Arial Bold), so `fit_kicker()`
  is not expected to engage. Verify at render time.
- **Scene 5 is the card to watch.** It carries two blocks, 13.10 (24 words) and
  13.8 (38 words), 62 words total. That is heavier than reel-35's two-block
  card and lighter than reel-32's three-block card, which measured max_y 1026
  of 1310. `fit_body()` may engage and should be allowed to. **If it trips the
  80% floor, split the pair rather than rewording** — 13.8 becomes its own
  fourth pair and the reel goes to eleven scenes.
- Scenes 3 and 7 are single short blocks, 18 and 21 words. No risk.

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "The turnover location is where the disc came to rest, or where an
  offensive player picked it up. If that is in the central zone — the middle of
  the field, between the two end zones — then that is your pivot, exactly there.
  No walking it anywhere. Most turnovers are this case and need no thought at
  all."
- Scene 4 — "Two cases move you. If the disc is in the end zone you are
  attacking, you walk to the nearest point on the goal line. If it went
  out-of-bounds, you go to the nearest point on the central zone to where it
  crossed the line. What they have in common is that the spot is not where the
  disc ended up."
- Scene 6 — "Two people pace out two different spots and neither will move.
  This happens more than you would think, and the rulebook does not ask you to
  argue it out. Take the midpoint between the two proposals and restart. It is
  a rule, so nobody has to concede anything."
- Scene 8 (field tip) — "The common mistake is walking straight in from where
  the disc finished. A throw that sails out and rolls another fifteen metres
  comes back to where it crossed the line, not to where you picked it up. Watch
  the crossing point, not the disc."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
In the cloud build run this works as written. On Windows, `python
tools\win_render.py reel-42` — read `tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-41/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix that reel-38 was rejected for lacking.

---

## Script (~30s)

- Hook: "Turnover. The disc is lying somewhere on the field. Where do you actually put your pivot?"
- Explanation: "Three cases cover nearly all of it. If it stopped in the central zone, the pivot goes exactly there. If it is in the end zone you are attacking, you walk to the nearest point on the goal line. And if it went out-of-bounds, you go to the nearest point on the field to where it crossed the line."
- Example: "A throw sails over the sideline and rolls another fifteen metres. You jog out, pick it up, and walk straight in from there. That is the mistake. The spot is where it crossed the line, not where it stopped. And if the two of you cannot agree where that was, take the midpoint between your two guesses — that is a rule, not a compromise."
- CTA: "Lesson 42 of 75 — new lesson daily."

## Instagram caption

Turnover. The disc is lying somewhere on the field. Where do you actually put your pivot?

Three cases cover nearly all of it.

One. It stopped in the central zone — the middle of the field, between the two end zones.

"If the turnover location is in the central zone, the thrower must establish a pivot point at that location."

Exactly there. No walking it anywhere.

Two. It is in the end zone you are attacking.

"If the turnover location is in the offence’s attacking end zone, the thrower must establish a pivot point at the nearest location on the goal line."

Three. It went out-of-bounds. This is the one people get wrong.

"If the turnover location is out-of-bounds, or the disc touched an out-of-bounds area after the turnover occurred, the thrower must establish a pivot point at the location on the central zone nearest to where the disc went out-of-bounds (Section 11.8)."

A throw sails over the sideline and rolls another fifteen metres. You jog out, pick it up, and walk straight in from where you found it. That is the mistake. The spot is where it crossed the line.

And when two of you pace out two different spots and neither will move:

"If players cannot agree on the correct pivot location, the relevant midpoint between the two proposed pivot locations must be used."

Take the midpoint. Nobody has to concede anything, because it is the rule.

Lesson 42 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (13.9, 13.10, 13.8, 8.5.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

turnover. where do you actually put your pivot 🥏

three cases cover nearly all of it

1️⃣ stopped in the central zone → pivot goes exactly there

"If the turnover location is in the central zone, the thrower must establish a pivot point at that location."

2️⃣ in the end zone you're attacking → walk to the nearest point on the goal line

"If the turnover location is in the offence’s attacking end zone, the thrower must establish a pivot point at the nearest location on the goal line."

3️⃣ out of bounds → nearest point on the field to where it CROSSED

"If the turnover location is out-of-bounds, or the disc touched an out-of-bounds area after the turnover occurred, the thrower must establish a pivot point at the location on the central zone nearest to where the disc went out-of-bounds (Section 11.8)."

the mistake: it rolls another 15m, you pick it up and walk straight in from there ✋ the spot is where it crossed the line

and if you can't agree on the spot:

"If players cannot agree on the correct pivot location, the relevant midpoint between the two proposed pivot locations must be used."

take the midpoint. it's a rule, not a compromise

lesson 42 of 75

rules from WFDF Rules of Ultimate 2025–2028 (13.9, 13.10, 13.8, 8.5.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(13.9, 13.10, 13.8, 8.5.4).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **NOT DRY-MEASURED** — sixth consecutive sandbox mount failure. Kicker and
  caption figures were measured in the browser; body layout is an estimate and
  must be verified at render time.
- **FLAGGED DEPARTURE: 13.7 is in the lesson's `rules` array and is not
  carded.** It is a heading stem whose four sub-items include two bare
  cross-references to 13.2.x. Scene 2's body defines "turnover location" in
  plain words instead. If that is not good enough, the redraft is a fourth pair
  carding 13.7 + 13.7.1 + 13.7.2 at eleven scenes.
- **Scene 5 carries two blocks (13.10 + 13.8, 62 words) and is the only card at
  any risk.** Let `fit_body()` shrink it. If it trips the 80% floor, split 13.8
  into its own pair — do not reword.
- Keep the curly apostrophe in "offence’s" exactly as `rules.json` has it, and
  keep "(Section 11.8)" inside 13.8's quotation; it is part of the rule text.
- **LIKELY `_payload()` case:** 13.8 contains parentheses and a hyphenated
  "out-of-bounds"; verify the emitted PNG, not just the SVG.
- Instagram caption 1,632 characters including hashtags (74.2% of the 2,200
  limit, well below the 95% warning line); TikTok 1,271 of 4,000. Both plain text and
  scanned clean of markdown. Measured in UTF-16 units in the browser on
  2026-09-12, since `check_caption.py` could not be run; `build_desk.py` re-runs
  it as a backstop at sync time.
- Curriculum position: lesson 42 is index 8 of `content/lessons-3.json`, the
  next unused lesson after 41. It covers 2026-09-16, the first bare date in the
  newly widened tomorrow-through-tomorrow+6 window.
- No growth/reach claims in either caption.
