# Reel 64 — "Three ways to turn it over by yourself"

**Status:** Pending review
**Script drafted:** 2026-10-01 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-08 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (13.2, 13.2.4, 13.2.5, 18.2.4, 18.2.4.5)
**Source lesson:** `content/lessons-3.json` → `self-catch`

Three ways to lose the disc with nobody else doing anything to you. The lesson's
own hook is "No defender required", and the script keeps that framing: two of the
three are turnovers listed in chapter 13, and the third looks like the same
mistake but is a travel in chapter 18.

**The third one is the point of the lesson.** Self-catch and deflection both end
possession. Bobbling the disc to yourself to get somewhere does not — it is a
travel, you keep the disc, and you go back. Running all three together and
calling them turnovers would be wrong, so the script says plainly which one is
not one.

**Five numbers, three cards, because 13.2 and 18.2.4 are stems.** 13.2 ends in a
colon and 13.2.4 and 13.2.5 are two of its branches; 18.2.4 ends in a colon and
18.2.4.5 is one of its branches. Carded alone, every one of those branches opens
mid-sentence in lower case ("the thrower intentionally deflects…", "a player
intentionally bobbles…") and reads as a fragment. So each card carries its stem
with the sub-number indented beneath it, which is `g_detail`'s tuple form —
the same shape reel-14 used for 18.2.4 + 18.2.4.1 and reel-63 used for 6.1.

The lesson's `rules` array is 13.2.4, 13.2.5 and 18.2.4.5. **13.2 and 18.2.4 are
stems added for legibility, not new citations** — both are quoted verbatim from
`rules.json` like everything else, and both have precedent (reel-14 and reel-15
carded 18.2.4 the same way). Every card footer cites only what its own card
quotes.

**13.2 is carded twice, on scenes 3 and 5.** The two branches are separate topic
blocks, so each card repeats its stem rather than leaving the second branch
pointing back two slides. reel-14 did the same with 18.2.1 across two footers.

---

## Video — `reel64-three-ways-to-turn-it-over-by-yourself.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Three ways to turn it over by yourself" · kicker BEGINNER · LESSON 64 / 75 |
| 2 | #1 CATCHING YOUR OWN PASS | "Nobody else touched it, so it's gone." · footer cites 13.2 · 13.2.5 |
| 3 | Rules detail | Verbatim 13.2 with 13.2.5 beneath it |
| 4 | #2 THE DELIBERATE DEFLECTION | "You can't bounce it off a defender." · footer cites 13.2 · 13.2.4 |
| 5 | Rules detail | Verbatim 13.2 with 13.2.4 beneath it |
| 6 | #3 BOBBLING IS A TRAVEL | "Tipping it to yourself costs metres." · footer cites 18.2.4 · 18.2.4.5 |
| 7 | Rules detail | Verbatim 18.2.4 with 18.2.4.5 beneath it |
| 8 | FIELD TIP | "A touch by anyone else makes it legal." |
| 9 | Closing | "Lesson 64 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the three cards do

1. **13.2 + 13.2.5 — the self-catch.** The test is "prior to the disc being
   contacted by another player". One touch by anyone else and it is a legal
   catch; no touch at all and possession is over.
2. **13.2 + 13.2.4 — the deflection.** Same list, same outcome, and
   "intentionally" is the whole word that matters.
3. **18.2.4 + 18.2.4.5 — the travel that is not a turnover.** You keep the disc
   and lose the ground. The card is the shortest stem the pipeline has carded.

**Layout — DRY-MEASURED, 2026-10-01.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 CATCHING YOUR OWN PASS` **746.3px** of the 900px column (82.9%),
  `#2 THE DELIBERATE DEFLECTION` **814.3px** (90.5%),
  `#3 BOBBLING IS A TRAVEL` **648.1px** (72.0%). Cover `BEGINNER` **231.1px** at
  its own 32px; `FIELD TIP` **236.2px**.
- **#2 is the widest kicker since reel-11 and the closest any has come to the
  auto-fit.** 814.3px against reel-11's 873px high-water mark, and 85.7px of
  slack. It still takes the standard 34px with nothing shrunk, but a longer
  kicker on this topic would be the first to engage `fit_kicker()` — so if the
  desk edits it, re-measure before building.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 176, 168 and 157 characters.
- **The cover title wraps to two lines at the standard 84px** — **746.8px** and
  **723.6px** of 900. Six words over two lines, the most even-weighted recap
  cover the reel series has had; the cover is the tallest scene at 1210 because
  the `LESSON 64 / 75` line sits at its fixed y, and the collision check is
  clean.
- Scene 8's tip body wraps to four lines and ends at **912** of the 1310 floor,
  398px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scene 3 is the tallest at ink bottom **722** — a new high for a
  rules card, past reel-63's 690 — with scene 5 at **672** and scene 7 at
  **572**, all against the 1310 floor. Carded lengths: 13.2 is 124 characters,
  13.2.5 is 134, 13.2.4 is 92, 18.2.4.5 is 129. **18.2.4 is 30 characters and
  takes the shortest-carded record**, from reel-63's 6.2 at 45.
- Citation number lines are short: `13.2 · 13.2.5` and `13.2 · 13.2.4` both
  **160.4px** of 900, `18.2.4 · 18.2.4.5` **203.7px**.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 34 emitted SVGs, 0 cases. The curly quotes inside 13.2.4 and
  13.2.5 ("deflection", "self-catch") sit mid-string and are unaffected.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.8s raw + transitions; house target ~30s, band 28–33s). Durations in
  `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0:
  Instagram **1735 of 2,200** including hashtags (78.9%, under the 2,090 warn
  line), TikTok **1636 of 4,000**. Both plain text, no markdown, counted in
  UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Throw a pass and catch it yourself before any other player has touched the disc, and that is a self-catch. The rulebook lists it as a turnover, at the spot where you caught it."
- Scene 4 — "Intentionally deflecting your own pass off another player and back into your own hands is a deflection, and it sits in the same list as the self-catch. Also a turnover."
- Scene 6 — "Intentionally bobbling, fumbling or delaying the disc to yourself for the sole purpose of moving somewhere is not a turnover. It is a travel, so you go back."
- Scene 8 (field tip) — "A wobbly throw that comes back to you in the wind is fine if a defender touched it. If nobody did, it is yours and you have lost it."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-63/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed, which came back byte-identical. `TOTAL` is 9
in both. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-64` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "There are three ways to lose the disc without a defender doing anything at all, and one of them is not what people think it is."
- Explanation: "Catch your own pass before any other player has touched the disc and that is a self-catch, which is a turnover. Deliberately deflect your own pass off another player back to yourself and that is a deflection, also a turnover. Intentionally bobble the disc to yourself purely to move somewhere, and that is a travel infraction instead — you keep the disc and you go back."
- Example: "Your throw is blocked by a defender's hand and comes straight back to you. You catch it. That is legal, because another player contacted the disc. If nobody had, it would have been a turnover on the spot."
- CTA: "Lesson 64 of 75 — new lesson daily."

## Instagram caption

Three ways to lose the disc with no defender involved at all. Chapter 13 lists two of them; chapter 18 catches the third.

One. You caught your own pass.

"A turnover that transfers possession of the disc from one team to the other, and results in a stoppage of play, occurs when:"

"in attempting a pass, the thrower catches the disc after release prior to the disc being contacted by another player (a “self-catch”);"

Before the disc is contacted by another player is the whole test. A defender's fingertip is enough to make it legal. Nobody at all, and it is a turnover where you caught it.

Two. You bounced it off somebody on purpose.

"the thrower intentionally deflects a pass to themselves off another player (a “deflection”);"

Same list, same outcome. Intentionally is doing the work here — a pass that comes off a defender's hand and happens to land back with you is not this.

Three. You tipped it to yourself to get somewhere.

"a player intentionally bobbles, fumbles or delays the disc to themselves, for the sole purpose of moving in a specific direction."

This one is not a turnover. It is a travel, which means you keep the disc and go back. Tipping the disc solely to help yourself catch something you could not otherwise have held is not a travel either — the difference is whether you did it to move.

Field note. A wobbly throw that blows back to you is fine if a defender touched it. If nobody did, it is yours and you have lost it.

Lesson 64 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (13.2, 13.2.4, 13.2.5, 18.2.4, 18.2.4.5). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

three ways to turn it over by yourself 🥏

no defender required. chapter 13 lists two of them, chapter 18 catches the third

one — you caught your own pass

"A turnover that transfers possession of the disc from one team to the other, and results in a stoppage of play, occurs when:"

"in attempting a pass, the thrower catches the disc after release prior to the disc being contacted by another player (a “self-catch”);"

"before the disc is contacted by another player" is the whole test. a defender's fingertip is enough to make it legal. nobody at all, and it's a turnover where you caught it

two — you bounced it off somebody on purpose

"the thrower intentionally deflects a pass to themselves off another player (a “deflection”);"

same list, same outcome. "intentionally" is doing the work — a pass that comes off a defender's hand and happens to land back with you isn't this

three — you tipped it to yourself to get somewhere

"a player intentionally bobbles, fumbles or delays the disc to themselves, for the sole purpose of moving in a specific direction."

this one isn't a turnover, it's a travel. you keep the disc and go back

tipping solely to help yourself catch something you couldn't otherwise have held isn't a travel either. the difference is whether you did it to move

field note: a wobbly throw that blows back to you is fine if a defender touched it. if nobody did, it's yours and you've lost it

rule text from WFDF Rules of Ultimate 2025–2028 (13.2, 13.2.4, 13.2.5, 18.2.4, 18.2.4.5) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (13.2,
13.2.4, 13.2.5, 18.2.4, 18.2.4.5), pulled from `content/rules.json` rather than
typed.

---

## Notes

- **Lesson 64 of 75**, `self-catch` in `content/lessons-3.json`, tag Turnovers.
  Fills 2026-10-08, the last bare date in the seven-day window.
- **The third item is deliberately not a turnover.** 18.2.4.5 is a travel: the
  disc stays yours and you go back. Both captions say so explicitly rather than
  letting the list imply three turnovers.
- **13.2 and 18.2.4 are stems carried for legibility**, not citations added to
  the lesson's `rules` array. Precedent: reel-14 and reel-15 both carded 18.2.4
  above its branches for the same reason. All five numbers are quoted verbatim
  from `rules.json`.
- **13.2 appears on two cards** (scenes 3 and 5), once per branch, so neither
  topic block depends on a slide two earlier.
- **DRY-MEASURED 2026-10-01** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0 (Instagram 1735 of 2,200 including hashtags, TikTok
  1636 of 4,000). `render_v3.py` is committed here and is the exact file
  measured. SVG only; no PNGs, no frames, no cut.
- **#2's kicker is the widest since reel-11** at 814.3 of 900px. No auto-fit
  engages, but it is the tightest margin in the back catalogue — re-measure if
  the kicker is edited at the desk.
- The 18.2.4.5 annotation in `rules.json` covers the "tipping to help yourself
  catch it" case, which the Instagram caption mentions and no slide does. It is
  the annotation's own distinction, not an added rule.
- The lesson's quiz answer and the script's example beat are the same case (a
  defender's hand makes the self-catch legal), deliberately — it is the one
  players get wrong.
- No growth/reach claims in either caption.
