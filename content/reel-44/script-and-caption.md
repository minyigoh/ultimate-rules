# Reel 44 — You have to fetch the disc promptly

**Status:** Pending review
**Script drafted:** 2026-09-12 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-18 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (8.5, 8.5.3, 8.5.1.1, 8.5.1.2, 8.5.2, 8.5.2.1)
**Source lesson:** `content/lessons-3.json` → `walking-pace`

Reels 42 and 43 covered *where* the pivot goes. This one covers *how fast you
have to get there*, which is the half nobody knows exists until somebody calls
it. Third of the four-reel turnover block.

---

## Video — `reel44-walking-pace.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40, 41, 42 and 43.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | You have to fetch the disc promptly · kicker BEGINNER · LESSON 44 / 75 |
| 2 | #1 WALKING PACE OR FASTER | "Both teams have a duty here, not just the one chasing the disc." · footer cites 8.5 · 8.5.3 |
| 3 | Rules detail | Verbatim 8.5 and 8.5.3, two blocks |
| 4 | #2 TEN SECONDS, OR TWENTY | "There are actual numbers, and almost nobody knows them." · footer cites 8.5.1.1 · 8.5.1.2 |
| 5 | Rules detail | Verbatim 8.5.1 as block lead, with 8.5.1.1 and 8.5.1.2 sub-numbered beneath it |
| 6 | #3 A WARNING FIRST | "You get told before anything happens to you." · footer cites 8.5.2 · 8.5.2.1 |
| 7 | Rules detail | Verbatim 8.5.2 and 8.5.2.1, two blocks |
| 8 | FIELD TIP | "Jog to the disc as a habit. It costs nothing and removes the whole conversation." |
| 9 | Closing | "Lesson 44 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### One uncited block lead, no departures

- **8.5.1 is carded as a block lead and is deliberately not cited in the
  footer.** It reads `In addition to 8.5, after a turnover the thrower must
  establish a pivot point within the following time limits, if the disc did not
  become out-of-bounds, and the disc’s location is:` — it ends in a colon, and
  8.5.1.1 and 8.5.1.2 are fragments that are meaningless without it ("in the
  central zone – within ten (10) seconds of the disc coming to rest"). This is
  exactly the reel-34 shape: 8.5.1 is *not* in the lesson's `rules` array, so it
  leads the block for readability while the scene-4 footer cites only 8.5.1.1
  and 8.5.1.2, matching the array.
- **Every rule in the lesson's `rules` array is carded.** Nothing is dropped
  this time, which is the difference from reel 42.
- **8.5.1's own qualifier is load-bearing and must not be trimmed.** The time
  limits only apply "if the disc did not become out-of-bounds" — an
  out-of-bounds disc is governed by 8.5's walking-pace duty alone. Cutting the
  clause would state a rule that does not exist.

### What the three cards do

1. **8.5 and 8.5.3 — the two duties, paired on purpose.** The offence must move
   at walking pace or faster, directly, to retrieve the disc and set the pivot;
   the defence must not obstruct them doing it. Beginners meet this rule as a
   telling-off, so the reel introduces it as a mutual obligation instead, which
   is what it actually is.
2. **8.5.1.1 and 8.5.1.2 — the numbers.** Ten seconds in the central zone,
   twenty in an end zone, counted from the disc coming to rest. Rarely
   enforced, entirely real.
3. **8.5.2 and 8.5.2.1 — what actually happens.** A warning first — "Delay of
   Game", or a pre-stall — or a Violation call. Keep dawdling after the warning
   and 9.3.1 stops protecting you and the marker may start counting on a disc
   you are not even holding. That last consequence is the one worth the reel.

**Layout — NOT DRY-MEASURED in the sandbox. Kickers and captions measured in
the browser.**

Sixth consecutive mount failure on 2026-09-12, same Plan9 `share "c" which is
not mounted` error as 09-08 onwards. `check_layout.py`, `check_caption.py` and
`node --check` could not be run.

- **Kickers**, all three at or under 25 characters: `#1 WALKING PACE OR FASTER`,
  `#2 TEN SECONDS, OR TWENTY`, `#3 A WARNING FIRST`. The first two are two
  characters longer than reel-41's widest (`#1 CONTACT OFF THE DISC`, 654.9px of
  900px in Chrome at 34px Arial Bold), which extrapolates to roughly 710px —
  comfortably inside the column, but **this is an extrapolation, not a
  measurement.** Verify at render time.
- **This reel has three multi-block cards and is the heaviest of the batch.**
  Scene 3 is 48 words over two blocks, scene 5 is 61 words over three (lead plus
  two short fragments), scene 7 is 55 words over two. Scene 5 is the one to
  watch: reel-32's three-block card measured max_y 1026 of 1310, and this is
  comparable. `fit_body()` may engage on any of the three; let it.
  **If any card trips the 80% floor, split that pair and take the reel to
  eleven scenes — do not reword and do not trim a quotation.**

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "After a turnover or a pull, you cannot stroll. The rule says
  walking pace or faster, directly to the disc, and directly to the pivot spot.
  It is not one-sided though. The defence is not allowed to get in your way
  while you do it, and if they are standing between you and the disc, say so."
- Scene 4 — "There are hard numbers behind that, and almost nobody knows them.
  Ten seconds to set your pivot if the disc came to rest in the central zone.
  Twenty if it came to rest in an end zone. The clock starts when the disc
  stops, not when you get to it."
- Scene 6 — "Nothing happens to you without warning. The defence calls Delay of
  Game, or starts a pre-stall, or calls a violation. But keep dawdling after
  that warning and the marker may simply start the stall count — on a disc you
  are not holding yet, from wherever they are standing."
- Scene 8 (field tip) — "Jog to the disc. Not a sprint, just not a stroll. It
  costs you nothing, it removes the entire conversation, and it is the single
  easiest way to look like you have played before."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
In the cloud build run this works as written. On Windows, `python
tools\win_render.py reel-44` — read `tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-41/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix.

---

## Script (~30s)

- Hook: "There is a time limit on picking the disc up after a turnover. Two of them, actually, and almost nobody knows either."
- Explanation: "After a turnover or a pull, you have to move at walking pace or faster, directly to the disc and directly to the pivot spot. And there are numbers: ten seconds to establish your pivot if the disc came to rest in the central zone, twenty if it came to rest in an end zone."
- Example: "Nothing happens to you without a warning first — Delay of Game, or a pre-stall. But keep dawdling after that and the marker can simply start the stall count on you, from wherever they are, on a disc you are not even holding. Worth knowing the other half too: the defence is not allowed to obstruct you getting to the disc or setting your pivot. If they are in the way, say so."
- CTA: "Lesson 44 of 75 — new lesson daily."

## Instagram caption

There is a time limit on picking the disc up after a turnover. Two of them, actually, and almost nobody knows either.

"After a turnover, and after the pull, an offensive player must move at walking pace or faster to directly retrieve the disc and establish a pivot point."

Walking pace or faster. Directly to the disc, directly to the spot.

Then the numbers, which apply once the disc has come to rest and has not gone out-of-bounds:

"in the central zone – within ten (10) seconds of the disc coming to rest."

"in an end zone – within twenty (20) seconds of the disc coming to rest."

The clock starts when the disc stops, not when you get to it.

Nothing happens to you without a warning first. The defence can call Delay of Game, or start a pre-stall, or call a violation. But keep dawdling after the warning and this applies:

"If, after a warning, the offence continues to breach 8.5, or 8.5.1, then 9.3.1 does not apply and the marker may commence the stall count."

A stall count on a disc you are not holding, from wherever the marker happens to be standing.

It is not one-sided, though:

"The defence must not move in a manner that obstructs the offence from taking possession of the disc or establishing a pivot point."

So if someone is standing between you and the disc, that is their breach, not your delay. Say so.

Easiest fix in the game: jog to the disc. Not a sprint, just not a stroll.

Lesson 44 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (8.5, 8.5.1.1, 8.5.1.2, 8.5.2.1, 8.5.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

there's a time limit on picking the disc up after a turnover 🥏 two of them actually

"After a turnover, and after the pull, an offensive player must move at walking pace or faster to directly retrieve the disc and establish a pivot point."

walking pace or faster. directly there

the numbers (disc at rest, not out of bounds):

"in the central zone – within ten (10) seconds of the disc coming to rest."

"in an end zone – within twenty (20) seconds of the disc coming to rest."

⏱️ clock starts when the DISC stops, not when you get to it

you get a warning first — delay of game, or a pre-stall. ignore it and:

"If, after a warning, the offence continues to breach 8.5, or 8.5.1, then 9.3.1 does not apply and the marker may commence the stall count."

a stall count on a disc you're not even holding 😬

and the other half, which nobody tells beginners:

"The defence must not move in a manner that obstructs the offence from taking possession of the disc or establishing a pivot point."

if they're in your way that's their breach, not your delay

easiest fix in the game: jog to the disc

lesson 44 of 75

rules from WFDF Rules of Ultimate 2025–2028 (8.5, 8.5.1.1, 8.5.1.2, 8.5.2.1, 8.5.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(8.5, 8.5.3, 8.5.1.1, 8.5.1.2, 8.5.2, 8.5.2.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **NOT DRY-MEASURED** — sixth consecutive sandbox mount failure. Caption
  figures were measured in the browser; kicker widths are extrapolated from
  reel-41's Chrome measurement, not measured, and body layout is an estimate.
  Verify all of it at render time.
- **NO DEPARTURES.** Every rule in the lesson's `rules` array is carded. 8.5.1
  is carded as an uncited block lead because it ends in a colon and 8.5.1.1 /
  8.5.1.2 are fragments — the reel-34 shape, since 8.5.1 is not in the array.
- **HEAVIEST REEL OF THE BATCH.** All three detail cards are multi-block (48,
  61 and 55 words). Let `fit_body()` shrink them. If any trips the 80% floor,
  split that pair into two and run eleven scenes — never reword, never trim a
  quotation.
- **Do not trim 8.5.1's qualifier.** "if the disc did not become out-of-bounds"
  is the whole scope of the time limits; without it the card states a rule that
  does not exist.
- **LIKELY `_payload()` cases:** 8.5.2 carries curly quotes around “Delay of
  Game” and “Violation”; 8.5.1.1 and 8.5.1.2 carry an en-dash and "ten (10)" /
  "twenty (20)". Verify in the emitted PNGs, not the SVGs.
- **The caption quotes five of the six rules and summarises 8.5.2 in plain
  prose** rather than quoting it, purely for length. The reel cards 8.5.2
  verbatim on scene 7, so nothing is asserted in the caption that is not quoted
  on screen. The summary is written as prose with no quotation marks so it
  cannot read as rule text.
- Instagram caption 1,686 characters including hashtags (76.6% of the 2,200
  limit, well below the 95% warning line); TikTok 1,221 of 4,000. Both plain text and
  scanned clean of markdown. Measured in UTF-16 units in the browser on
  2026-09-12, since `check_caption.py` could not be run.
- Curriculum position: lesson 44 is index 10 of `content/lessons-3.json`, the
  next unused lesson after 43. It covers 2026-09-18.
- No growth/reach claims in either caption.
