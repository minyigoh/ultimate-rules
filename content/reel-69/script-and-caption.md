# Reel 69 — "The fine print on stall-outs"

**Status:** Pending review
**Script drafted:** 2026-10-06 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-13 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (13.4.1, 13.4.2, 13.4.3, 9.5.3)
**Source lesson:** `content/lessons-3.json` → `stall-out-details`

The lesson's own hook is "For when the count and the throw happen at the same
instant.", and the script keeps it. This is the lesson where one disputed moment
splits into three different outcomes, so the structure is the substance: the
script's job is to make clear which of the three you are standing in.

**Three topic blocks over four rules, which is nine scenes.** 13.4.1, 13.4.2 and
13.4.3 are the three branches of 13.4 and each gets its own block. 9.5.3 is not
a fourth branch — it is the consequence that follows a successful contest — so it
rides scene 7 alongside 13.4.3 as a sibling block rather than taking an eleventh
scene. Sibling blocks on one detail card are the house pattern: reel-39 carded
9.5.3 this way beside 9.5.5, and reel-16, reel-21 and reel-53 do the same.

**Nothing was added and nothing was dropped.** All four numbers are the lesson's
own `rules` array. 13.4 itself is *not* quoted — the lesson does not cite it, and
a stem is not needed because each branch reads as a whole sentence on its own.

**The block order is the lesson's `rules` order.** It is also the order the
situation resolves in: do you still have the disc, did the pass connect, and did
you try to have it both ways.

---

## Video — `reel69-fine-print-on-stall-outs.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "The fine print on stall-outs" · kicker BEGINNER · LESSON 69 / 75 |
| 2 | #1 YOU STILL HAVE THE DISC | "A fast count you never got to call." · footer cites 13.4.1 |
| 3 | Rules detail | Verbatim 13.4.1, carded alone |
| 4 | #2 YOU ALREADY THREW IT | "A completed pass can still be contested." · footer cites 13.4.2 |
| 5 | Rules detail | Verbatim 13.4.2, carded alone |
| 6 | #3 CONTEST OR THROW, NOT BOTH | "Throw it anyway and you own the result." · footer cites 13.4.3 · 9.5.3 |
| 7 | Rules detail | Verbatim 13.4.3 and 9.5.3, sibling blocks |
| 8 | FIELD TIP | "Eight, not one." |
| 9 | Closing | "Lesson 69 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the four cards do

1. **13.4.1 — you still have it.** The fast count you never got to call. The
   rulebook's answer is that this is not a turnover at all: it resolves as an
   accepted defensive breach or as a contested stall-out. The longest card on
   the reel at 292 characters, and the one most worth reading slowly.
2. **13.4.2 — the pass connected.** Throwing is not a forfeit. You keep both
   grounds of contest: that it was not a stall-out, or that a fast count came
   immediately before it.
3. **13.4.3 — you tried both.** Contest *and* throw, with the pass incomplete,
   and the turnover stands. This is the trap, and it is one sentence.
4. **9.5.3 — what a contest buys.** The count restarts at eight. It is the
   shortest card in the set and it reframes the whole lesson: contesting is
   worth doing, and it is worth almost no time.

**Layout — DRY-MEASURED, 2026-10-06.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 YOU STILL HAVE THE DISC` **723.7px** of the 900px column (80.4%),
  `#2 YOU ALREADY THREW IT` **667.0px** (74.1%),
  `#3 CONTEST OR THROW, NOT BOTH` **859.7px** (95.5%). Cover `BEGINNER`
  **231.1px** at its own 32px; `FIELD TIP` **236.2px**.
- **Scene 6's kicker is the widest on the reel and the second widest the series
  has shipped**, behind reel-11's 873px high-water mark and ahead of reel-67's
  767.1px. It clears at standard size with 40px to spare, so the guard is a
  no-op — but it is the wording to watch if this scene is ever re-cut, because
  "NOT BOTH" is the half that makes the kicker true and the half that costs the
  width.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 179, 142 and 154 characters. Identical geometry to
  reel-67 and reel-68, which is the intended steady state.
- **The cover title wraps to two lines at the standard 84px** — "The fine print
  on" **658.0px** of 900 and "stall-outs" **373.4px**. Unhyphenated it measures
  1054.7px, so the wrap is doing real work here rather than being incidental.
- Scene 8's tip body wraps to three lines and ends at **884** of the 1310 floor,
  426px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scene 3 ink bottom **704**, scene 5 **504**, scene 7 **740**, all
  against the 1310 floor. Carded lengths: 13.4.1 is 292 characters over 8 lines,
  13.4.2 is 167 over 4, 13.4.3 is 146 over 4, and 9.5.3 is 77 over 2.
- **13.4.1 at 292 characters is the longest card on this reel but nowhere near
  the series ceiling** — reel-47 carded 7.12 at 492 characters and reel-34
  carded 17.1.1 at 437. Carded alone it reaches ink bottom 704, with 606px of
  floor unused.
- Scene 7 carries two sibling blocks and is the tallest rules card at **740**,
  which is still 570px clear. Its `durs` list is `[0.3, 1.7, 2.0]` rather than
  `[0.3, 2.0]` so the first block is readable before the second lands —
  `retime()` then stretches the middle state to `HOLD["detail"] * 0.7`, exactly
  as it does on reel-39 and reel-65.
- Citation number lines: `13.4.1` **72.2px** of 900, `13.4.2` **72.2px**, and
  scene 6's `13.4.3  ·  9.5.3` **167.6px**.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 35 emitted SVGs, 0 cases. 13.4.2 and 9.5.3 each carry a pair of
  curly quotes straight from `rules.json`; those are not `&quot;`, they do not
  engage the wrapper, and they are the approved glyphs because they are the
  rulebook's own.
- Projected duration **30.0s** from `retime()`/`fit()` (35 states, 9 scenes,
  23.68s raw + transitions; house target ~30s, band 28–33s). Dead on target.
  Durations in `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "If the count ran fast and you had no fair chance to call it before the stall-out, this is not read as a plain turnover. It is handled as a fast count, or as a contested stall-out."
- Scene 4 — "Having thrown does not cost you the call. You may contest that it was not a stall-out at all, or that a fast count came immediately before it."
- Scene 6 — "If you contest the stall-out and throw regardless, an incomplete pass means the turnover stands. And a contest that does work restarts the count at eight."
- Scene 8 (field tip) — "A contested stall-out restarts the count at eight, not one. That is very little time, so decide whether you want the call or the throw before you need either."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-68/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list and `TOTAL` differ — verified by diffing the
two files with their `SCENES` blocks removed, which came back identical except
for the single `TOTAL` line (7 → 9). Copy `blend.py` and `encode.py` in from
reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-69` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You throw it, the marker says stall out, and you both think you are right. The rulebook does not treat that as one argument - it treats it as three situations, and which one you are in depends on whether the disc is still in your hand."
- Explanation: "If you still have the disc and the count ran fast enough that you never got a fair chance to call it, this is handled as a fast count or a contested stall-out, not a plain turnover. If the pass went up and was caught, you can still contest - either that it was not a stall-out, or that a fast count came immediately before it. But if you contest and throw anyway and the pass falls, the turnover stands. You do not get both."
- Example: "The count reaches nine, the marker says ten, and you release at the same instant. The pass is dropped. You contest the stall-out, and it changes nothing: you threw it, the pass was incomplete, so the turnover stands and play restarts with a check. Had you held on instead, you would be arguing about the fast count, with the count restarting at eight."
- CTA: "Lesson 69 of 75 - new lesson daily."

## Instagram caption

The count hits ten at the same instant you let go of the disc. Now what?

The rulebook treats this as three situations, not one argument. Which one you are in depends on whether the disc is still in your hand.

One. You still have it, and you think the count was fast.

"If the thrower still has possession of the disc, but they believe a fast count occurred in such a manner that they did not have a reasonable opportunity to call fast count before a stall-out, the play is treated as either an accepted defensive breach (9.5.1) or a contested stall-out (9.5.3)."

If the count ran fast and you had no real chance to say so first, this is not a plain turnover. It is handled as a fast count, or as a contested stall-out.

Two. The pass went up and was caught.

"If the thrower made a completed pass, the thrower can contest if they believe it was not a “stall-out”, or there was a fast count immediately prior to the “stall-out”."

Throwing does not cost you the call. You can still contest that it was not a stall-out, or that a fast count came immediately before it.

Three. You contest, and you throw anyway.

"If the thrower contests a stall-out but also attempts a pass, and the pass is incomplete, then the turnover stands and play restarts with a check."

This is the one that catches people. You do not get both: contest and hold on, or throw and live with the throw.

And a contest that works buys less than you would think.

"After a contested stall-out the stall count restarts at “Stalling eight (8)”."

Field note. Eight, not one. That is very little time, so decide whether you want the call or the throw before you need either.

Lesson 69 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (13.4.1, 13.4.2, 13.4.3, 9.5.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

the fine print on stall-outs 🥏

the count hits ten at the same instant you let go. now what?

it is three situations, not one argument, and which one you are in depends on whether the disc is still in your hand

one. you still have it and you think the count was fast

"If the thrower still has possession of the disc, but they believe a fast count occurred in such a manner that they did not have a reasonable opportunity to call fast count before a stall-out, the play is treated as either an accepted defensive breach (9.5.1) or a contested stall-out (9.5.3)."

if the count ran fast and you had no real chance to say so first, this is not a plain turnover. it is handled as a fast count, or as a contested stall-out

two. the pass went up and was caught

"If the thrower made a completed pass, the thrower can contest if they believe it was not a “stall-out”, or there was a fast count immediately prior to the “stall-out”."

throwing does not cost you the call. you can still contest that it was not a stall-out, or that a fast count came immediately before it

three. you contest and you throw anyway

"If the thrower contests a stall-out but also attempts a pass, and the pass is incomplete, then the turnover stands and play restarts with a check."

this is the one that catches people. you do not get both — contest and hold on, or throw and live with the throw

and a contest that works buys less than you would think

"After a contested stall-out the stall count restarts at “Stalling eight (8)”."

field note: eight, not one. that is very little time, so decide whether you want the call or the throw before you need either

rule text from WFDF Rules of Ultimate 2025–2028 (13.4.1, 13.4.2, 13.4.3, 9.5.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(13.4.1, 13.4.2, 13.4.3, 9.5.3), pulled from `content/rules.json` rather than
typed.

---

## Notes

- **Lesson 69 of 75**, `stall-out-details` in `content/lessons-3.json`, tag
  Marking. Fills 2026-10-13, the only bare date in the seven-day window
  (2026-10-07 through 2026-10-13).
- **All four numbers are the lesson's own `rules` array.** Nothing was added for
  legibility and nothing is quoted that the lesson does not cite. 13.4 itself is
  not carded: the lesson does not cite it, and each of its three branches reads
  as a complete sentence without a stem.
- **Nine scenes over four rules, not eleven.** 9.5.3 is the consequence of a
  successful contest rather than a fourth branch, so it shares scene 7 with
  13.4.3 as a sibling block. Precedent: reel-39 carded 9.5.3 the same way beside
  9.5.5; reel-16, reel-21, reel-25 and reel-53 all ship sibling rules cards.
  Projection lands at 30.0s, exactly the house target.
- **13.4.1 is the longest card at 292 characters**, reaching ink bottom 704 of
  the 1310 floor. Well inside the series ceiling — reel-47's 7.12 is 492
  characters and reel-34's 17.1.1 is 437.
- **Scene 6's kicker is deliberately near the width limit.** `#3 CONTEST OR
  THROW, NOT BOTH` measures 859.7px of the 900px column at standard 34px, the
  second widest the series has shipped. It clears, so `fit_kicker()` is a no-op,
  but the "NOT BOTH" half is both what makes the label true and what costs the
  width — do not lengthen it.
- **The example beat and the lesson's quiz are the same case** (contest, throw
  anyway, pass incomplete, turnover stands), deliberately — it is the one that
  catches people and 13.4.3 answers it in one sentence.
- **DRY-MEASURED 2026-10-06** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,912 of
  2,200** UTF-16 units (86.9%, under the 2,090 warn line), TikTok at **1,840 of
  4,000**. Projected duration 30.0s over 35 states. `render_v3.py` is committed
  here and is the exact file measured. SVG only; no PNGs, no frames, no cut.
- **The caption was trimmed, not padded.** A first pass came in at 2,024 (92.0%)
  and prose was cut to 1,912 — four verbatim quotes totalling 682 characters are
  load-bearing and none of them moved. reel-67 ran 1,972 over four rules, so
  this is in line with it.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
