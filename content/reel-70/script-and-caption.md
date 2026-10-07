# Reel 70 — "Delay of game"

**Status:** Pending review
**Script drafted:** 2026-10-07 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-14 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (10.5, 8.5.2, 8.5.2.1, 7.1.1)
**Source lesson:** `content/lessons-3.json` → `delay-of-game`

The lesson's own hook is "The remedy for a team that won't get on with it.", and
the script keeps its sense while dropping the contraction for the cover card.
This is a lesson about a remedy rather than a judgement, so the structure is
simple: three places a team can stall, and what the opposition may do in each.

**Three topic blocks over four rules, which is nine scenes.** 10.5 is the check
delay and takes a card alone. 8.5.2 and 8.5.2.1 are the warning and its
consequence for a slow offence — one is the call, the other is what follows if
the call is ignored — so they ride scene 5 as sibling blocks rather than taking
two more scenes. 7.1.1 is the pull, and takes a card alone.

**Nothing was added and nothing was dropped.** All four numbers are the lesson's
own `rules` array. 8.5 itself is *not* quoted — the lesson does not cite it, and
8.5.2 names it well enough for the slide to read.

**The block order is the lesson's `rules` order**, which is also the order a
point actually stalls in: the check, then the disc that will not come back into
play, then the next pull.

---

## Video — `reel70-delay-of-game.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Delay of game" · kicker BEGINNER · LESSON 70 / 75 |
| 2 | #1 THE CHECK NEVER COMES | "Warn them, then start it without them." · footer cites 10.5 |
| 3 | Rules detail | Verbatim 10.5, carded alone |
| 4 | #2 SLOW WITH THE DISC | "The same warning, and then a count." · footer cites 8.5.2 · 8.5.2.1 |
| 5 | Rules detail | Verbatim 8.5.2 and 8.5.2.1, sibling blocks |
| 6 | #3 BEFORE THE PULL | "The huddle has an edge to it." · footer cites 7.1.1 |
| 7 | Rules detail | Verbatim 7.1.1, carded alone |
| 8 | FIELD TIP | "Warn first." |
| 9 | Closing | "Lesson 70 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the four cards do

1. **10.5 — the check that never comes.** The warning and the remedy in one
   rule: "Delay of Game", and then "Disc In" if it carries on. It is the longest
   card on the reel at 341 characters, and the only one with a condition
   attached — the team doing the checking has to be stationary and in position
   itself, which is the half people forget.
2. **8.5.2 — the same warning, for the offence.** A team slow to put the disc
   back into play gets warned the same way, or called for a violation.
3. **8.5.2.1 — what follows the warning.** The marker may commence the stall
   count. This is the sibling of 8.5.2 rather than a separate topic: the warning
   is only worth something because of what comes after it.
4. **7.1.1 — before the pull.** One sentence, 59 characters, the shortest card
   the series has carded alongside a block. It widens the lesson from the disc
   in play to the time between points.

**Layout — DRY-MEASURED, 2026-10-07.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 THE CHECK NEVER COMES` **714.2px** of the 900px column (79.4%),
  `#2 SLOW WITH THE DISC` **593.3px** (65.9%),
  `#3 BEFORE THE PULL` **515.8px** (57.3%). Cover `BEGINNER` **231.1px** at its
  own 32px; `FIELD TIP` **222.2px**. The widest is 186px clear of the column, so
  this reel is nowhere near the guard — reel-69's scene 6 ran 859.7px and
  reel-11's 873px is still the series high-water mark.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** Scenes 2
  and 4 take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090 — identical geometry to reels 67, 68 and 69.
- **Scene 6 is the one geometric difference from reel-69.** "The huddle has an
  edge to it." fits on one headline line rather than two, so its body starts at
  y=756 and lands its last baseline at **906**, **184px** clear. That is more
  headroom, not less, and it is the only scene on the reel whose cursor differs
  from the steady state. Bodies are 153, 161 and 151 characters.
- **The cover title fits one line at the standard 84px** — "Delay of game"
  measures **569.6px** of 900, the shortest cover title since reel-52. The hook
  wraps to two lines.
- Scene 8's tip body is 141 characters over four lines and ends at **884** of
  the 1310 floor, 426px clear. `g_tip()` carries no citation line, so
  `BODY_LIMIT` is not its constraint.
- Rules cards: scene 3 ink bottom **754**, scene 5 **840**, scene 7 **404**, all
  against the 1310 floor. Carded lengths: 10.5 is 341 characters over 7 lines,
  8.5.2 is 157 over 3, 8.5.2.1 is 138 over 3, and 7.1.1 is 59 over 2.
- **10.5 at 341 characters is the longest card on this reel and well inside the
  series ceiling** — reel-47 carded 7.12 at 492 characters and reel-34 carded
  17.1.1 at 437. Carded alone it reaches ink bottom 754, with 556px of floor
  unused.
- Scene 5 carries two sibling blocks and is the tallest rules card at **840**,
  still 470px clear. Its `durs` list is `[0.3, 1.7, 2.0]` rather than
  `[0.3, 2.0]` so the warning is readable before its consequence lands —
  `retime()` then stretches the middle state to `HOLD["detail"] * 0.7`, exactly
  as it does on reel-39, reel-65 and reel-69.
- Citation number lines: `10.5` **42.8px** of 900, `7.1.1` **48.9px**, and
  scene 4's `8.5.2  ·  8.5.2.1` **148.0px**.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 35 emitted SVGs, 0 cases. 10.5 carries two pairs of curly quotes
  straight from `rules.json` and 8.5.2 three; those are the rulebook's own
  glyphs, they sit mid-string, and they do not engage the wrapper.
- Projected duration **30.0s** from `retime()`/`fit()` (35 states, 9 scenes,
  23.68s raw + transitions; house target ~30s, band 28–33s). Dead on target,
  and the same state count as reel-69. Durations in `SCENES` are untouched
  placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Warn them: Delay of Game. If the stalling carries on, your side may check the disc in itself, as long as your own players are stationary and in position."
- Scene 4 — "An offence that will not put the disc back into play can be warned the same way. Keep stalling after the warning and the marker may simply start counting on you."
- Scene 6 — "The rule is not only about the disc in play. Teams have to be ready to pull without unreasonable delay, so a huddle between points has a natural limit."
- Scene 8 (field tip) — "Both remedies belong to the team that gave the warning. If nobody calls Delay of Game out loud, nobody gets to call Disc In or start a count."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-69/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed, which came back byte-identical, `TOTAL`
included (both reels are nine scenes). Copy `blend.py` and `encode.py` in from
reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-70` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "The other team is in no hurry. They are standing off the disc, deciding who is guarding whom, and the point is going nowhere. The rulebook has a remedy for this, and it starts with two words you have to say out loud."
- Explanation: "If there is an unnecessary delay in checking the disc in, the opposition may warn you by calling Delay of Game. If the delay continues, the team that gave the warning may check the disc in themselves by calling Disc In - provided their own players are stationary and in position. The same warning covers an offence that will not put the disc back into play, and after it the marker may simply start the stall count. It also covers the time between points: teams have to prepare for the pull without unreasonable delay."
- Example: "You turn it over, they are slow fetching the disc, and slower still getting set for the check. You call Delay of Game. Nothing changes. So, with your own players stationary and in position, you call Disc In, and the disc is live. Had they been standing off the disc with it in hand instead, the marker could have started counting on them after the same warning."
- CTA: "Lesson 70 of 75 - new lesson daily."

## Instagram caption

The other team is in no hurry. They are standing off the disc, deciding who is guarding whom, and the point is going nowhere.

The rulebook has a remedy, and it starts with two words you have to say out loud.

One. The check that never comes.

"If there is an unnecessary delay in checking the disc in, the opposition may give a warning (“Delay of Game”). If the delay continues, the team that gave the warning may check the disc in by calling “Disc In”, without verification from the opposition, but only if the team checking the disc in are all stationary, and positioned as per 10.2."

Warn them: Delay of Game. If the stalling carries on, your side may check the disc in itself, as long as your own players are stationary and in position.

Two. Slow to put the disc back in play.

"If the offence breaches 8.5, or 8.5.1, the defence may give a warning (“Delay of Game” or using a pre-stall for breaches of 8.5.1) or may call a “Violation”."

"If, after a warning, the offence continues to breach 8.5, or 8.5.1, then 9.3.1 does not apply and the marker may commence the stall count."

Same warning, different remedy. Keep stalling after it and the marker may simply start counting on you.

Three. Before the pull.

"Teams must prepare for the pull without unreasonable delay."

It is not only about the disc in play. A huddle between points has a natural limit.

Field note. Warn first. Both remedies belong to the team that gave the warning, so if nobody calls Delay of Game out loud, nobody gets to call Disc In or start a count.

Lesson 70 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (10.5, 8.5.2, 8.5.2.1, 7.1.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

delay of game 🥏

the other team is in no hurry. standing off the disc, deciding who guards whom, and the point is going nowhere

the rulebook has a remedy and it starts with two words you say out loud

one. the check that never comes

"If there is an unnecessary delay in checking the disc in, the opposition may give a warning (“Delay of Game”). If the delay continues, the team that gave the warning may check the disc in by calling “Disc In”, without verification from the opposition, but only if the team checking the disc in are all stationary, and positioned as per 10.2."

warn them: delay of game. if the stalling carries on, your side may check the disc in itself, as long as your own players are stationary and in position

two. slow to put the disc back in play

"If the offence breaches 8.5, or 8.5.1, the defence may give a warning (“Delay of Game” or using a pre-stall for breaches of 8.5.1) or may call a “Violation”."

"If, after a warning, the offence continues to breach 8.5, or 8.5.1, then 9.3.1 does not apply and the marker may commence the stall count."

same warning, different remedy. keep stalling after it and the marker may simply start counting on you

three. before the pull

"Teams must prepare for the pull without unreasonable delay."

it is not only about the disc in play. a huddle between points has a natural limit

field note: warn first. both remedies belong to the team that gave the warning, so if nobody calls delay of game out loud, nobody gets to call disc in or start a count

rule text from WFDF Rules of Ultimate 2025–2028 (10.5, 8.5.2, 8.5.2.1, 7.1.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(10.5, 8.5.2, 8.5.2.1, 7.1.1), pulled from `content/rules.json` rather than
typed.

---

## Notes

- **Lesson 70 of 75**, `delay-of-game` in `content/lessons-3.json`, tag Game.
  Fills 2026-10-14, the only bare date in the seven-day window (2026-10-08
  through 2026-10-14).
- **All four numbers are the lesson's own `rules` array.** Nothing was added for
  legibility and nothing is quoted that the lesson does not cite. 8.5 itself is
  not carded: the lesson does not cite it, and 8.5.2 names it in its own text.
- **Nine scenes over four rules, not eleven.** 8.5.2.1 is the consequence of the
  8.5.2 warning rather than a separate topic, so it shares scene 5 with 8.5.2 as
  a sibling block. Precedent: reel-69 carded 9.5.3 the same way beside 13.4.3;
  reel-39, reel-16, reel-21, reel-25 and reel-53 all ship sibling rules cards.
  Projection lands at 30.0s, exactly the house target.
- **10.5 is the longest card at 341 characters**, reaching ink bottom 754 of the
  1310 floor. Well inside the series ceiling — reel-47's 7.12 is 492 characters
  and reel-34's 17.1.1 is 437.
- **The condition in 10.5 is in the copy on purpose.** "Disc In" is not a free
  restart: the team calling it has to be stationary and positioned per 10.2
  itself. The lesson's own body does not spell that out, the rule does, and the
  slide body, the script explanation and the example all carry it.
- **No kicker on this reel is near the width guard.** The widest is
  `#1 THE CHECK NEVER COMES` at 714.2px of 900, 186px clear. After reel-69 ran
  859.7px this is a deliberate step back from the limit, not an accident.
- **The example beat and the lesson's quiz are different cases** — the quiz asks
  what the opposition may do when a warned team keeps stalling before the check
  (answer: call "Disc In"), and the example walks the same remedy through a
  turnover so the warning, the pause and the restart are all visible.
- **DRY-MEASURED 2026-10-07** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,801 of
  2,200** UTF-16 units (81.9%, well under the 2,090 warn line), TikTok at
  **1,722 of 4,000**. Projected duration 30.0s over 35 states. `render_v3.py` is
  committed here and is the exact file measured. SVG only; no PNGs, no frames,
  no cut.
- **The caption is short because the rules are.** The four verbatim quotes total
  695 characters, close to reel-69's 682, but this lesson needs less prose
  around them: the remedy is procedural and the slides carry it. Nothing was
  padded to fill the budget.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
