# Reel 55 — "Offside and false start on the pull"

**Status:** Pending review
**Script drafted:** 2026-09-22 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-29 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (7.3, 7.4, 7.5, 7.5.1, 7.5.2)
**Source lesson:** `content/lessons-3.json` → `offside-false-start`

First reel of the pull run. Reels 53 and 54 gave the shape of a game and the
turnaround after a goal; this one is the moment immediately after that
turnaround — the set, and the two ways it gets broken. The brick reel posted
2026-09-21, so the audience already has the restart 7.5.2 points at.

The lesson's five rules split cleanly three ways: two breaches, one deadline,
two remedies. All five are carded.

---

## Video — `reel55-offside-false-start.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–54.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Offside and false start on the pull" · kicker BEGINNER · LESSON 55 / 75 |
| 2 | #1 TWO WAYS TO BREAK THE SET | "One team moves. The other crosses." · footer cites 7.3 · 7.4 |
| 3 | Rules detail | Verbatim 7.3 and 7.4, one block each |
| 4 | #2 CALL IT BEFORE THE TOUCH | "Call it before the disc is touched." · footer cites 7.5 |
| 5 | Rules detail | Verbatim 7.5 |
| 6 | #3 TWO CALLS, TWO RESTARTS | "The restart depends on who called it." · footer cites 7.5.1 · 7.5.2 |
| 7 | Rules detail | Verbatim 7.5.1 and 7.5.2, one block each |
| 8 | FIELD TIP | "Call offside, then let it land." |
| 9 | Closing | "Lesson 55 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes. **All five rules in the array are carded.**

### What the three cards do

1. **7.3 + 7.4 — the two breaches, side by side.** Two blocks on one card, the
   shape reel-53 scene 3 uses for 4.2 / 4.3. They are a matched pair —
   same trigger ("after signalling readiness"), same deadline, opposite teams —
   and putting them on one card is what makes the symmetry visible. Splitting
   them across two scenes would cost a topic block and the viewer would have to
   hold the first in their head to see the second.
2. **7.5 — the deadline.** Single-rule card, and the one that decides whether
   either call exists at all. Its text quotes 7.3 and 7.4 by number, so it
   reads as the join between card 1 and card 3.
3. **7.5.1 + 7.5.2 — the two remedies.** Two blocks on one card for the same
   reason as card 1: the whole point of the lesson is that these two differ,
   and a difference cannot be shown one slide at a time.

**Layout — DRY-MEASURED, 2026-09-22.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 TWO WAYS TO BREAK THE SET` **823.8px** of the 900px column (91.5%),
  `#2 CALL IT BEFORE THE TOUCH` **772.8px** (85.9%), `#3 TWO CALLS, TWO
  RESTARTS` **767.1px** (85.2%) — the widest is inside the 873px high-water
  mark set by reel-11. Cover `BEGINNER` 231.1px at its own 32px.
  `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812, and
  all three wrap to four lines: last baseline **962**, clearance **128px**
  against the `CITE_Y - 60` limit of 1090.
  - Scenes 2 and 6 were each drafted longer and wrapped to **five** lines, last
    baseline **1012** — still passing, at 78px clearance, with `fit_body()` not
    engaging. Both were tightened to four **while drafting**, before anything
    went to the desk, to keep the block uniform and to stay further from the
    limit than one edit's worth. That is not the forbidden move: the ban is on
    rewording an *approved* body to fit, and nothing here has been approved.
- Scene 8's tip body ends at **1062** of the 1310 floor, 248px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards are the heaviest carded in this run: ink bottoms at **890**
  (scene 3, two blocks), **554** (scene 5) and **990** (scene 7, two blocks)
  against the 1310 floor. 7.3 is 180 characters, 7.4 is 149, 7.5 is 185,
  7.5.1 is 212 and 7.5.2 is 162.
- Projected duration **30.0s** from `retime()`/`fit()` (36 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "A false start is the offence moving after signalling readiness, either off the goal line or relative to each other. Offside is the defence crossing that line before the pull."
- Scene 4 — "Either breach has to be called before the offence touches the disc. Once a receiver has a hand on it the moment has gone, and the point plays on exactly as it stands."
- Scene 6 — "Defence calls false start: the thrower sets a pivot and play restarts there as if a time-out had been called. Offence calls offside: let it land, then take it as a brick."
- Scene 8 (field tip) — "If you call offside, shout it and then deliberately do not touch the disc. Catching the pull forfeits the call: the restart in 7.5.2 only exists if the disc hits the ground untouched, and a teammate reaching out of habit is how it gets lost."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-54/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-55` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Both teams have to stand still before the pull. There are two different calls for when they do not."
- Explanation: "A false start is the offence moving after signalling readiness. Offside is the defence crossing its goal line before the pull is released. Either one has to be called before the offence touches the disc."
- Example: "If the defence calls false start, the thrower sets a pivot and play restarts there as if a time-out had been called. If the offence calls offside, they let the pull land untouched and take it as if a brick had been called."
- CTA: "Lesson 55 of 75 — new lesson daily."

## Instagram caption

Two calls live on the pull, and they do not end the same way.

Before the disc is released, both teams have to hold their shape.

"After signalling readiness all offensive players must stand with one foot on their defending goal line without changing location relative to one another until the pull is released."

Break that and it is a false start.

"After signalling readiness all defensive players must keep their feet entirely behind the vertical plane of the goal line until the pull is released."

Break that and it is offside.

Either one has to be called, and there is a deadline on it.

"If a team breaches 7.3 (“false start”) or 7.4 (“offside”) the opposing team may call the relevant violation. This must be called before the offence touches the disc (7.8 still applies)."

That is where the two part company.

"If the defence chooses to call a false start, the thrower must establish a pivot point as per 7.9, 7.10, 7.11, or 7.12 and then play restarts as soon as possible as if a time-out had been called at that location."

"If the offence chooses to call offside, they must let the disc hit the ground untouched and then resume play as if a brick has been called (no check is required)."

One call restarts play at a pivot. The other only works if the pull is left alone.

Field note. If you call offside, shout it and then deliberately do not touch the disc. Catching the pull forfeits the call.

Lesson 55 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (7.3, 7.4, 7.5, 7.5.1, 7.5.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

offside and false start on the pull 🥏

two calls live on the pull, and they don't end the same way

before the disc is released, both teams have to hold their shape

"After signalling readiness all offensive players must stand with one foot on their defending goal line without changing location relative to one another until the pull is released."

break that and it's a false start

"After signalling readiness all defensive players must keep their feet entirely behind the vertical plane of the goal line until the pull is released."

break that and it's offside

either one has to be called, and there's a deadline on it

"If a team breaches 7.3 (“false start”) or 7.4 (“offside”) the opposing team may call the relevant violation. This must be called before the offence touches the disc (7.8 still applies)."

that's where the two part company

"If the defence chooses to call a false start, the thrower must establish a pivot point as per 7.9, 7.10, 7.11, or 7.12 and then play restarts as soon as possible as if a time-out had been called at that location."

"If the offence chooses to call offside, they must let the disc hit the ground untouched and then resume play as if a brick has been called (no check is required)."

one call restarts play at a pivot. the other only works if the pull is left alone

field note: if you call offside, shout it and then deliberately don't touch the disc. catching the pull forfeits the call

lesson 55 of 75

rules from WFDF Rules of Ultimate 2025–2028 (7.3, 7.4, 7.5, 7.5.1, 7.5.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (7.3, 7.4, 7.5, 7.5.1, 7.5.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. All five of the
  lesson's rules are carded and quoted in full in both captions; all five
  numbers are in the attribution line, in the array's own order.
- **DRY-MEASURED 2026-09-22** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **Two cards carry two rule blocks each, and that is deliberate.** 7.3/7.4 and
  7.5.1/7.5.2 are matched pairs whose whole teaching value is the contrast
  between them. The single-rule-per-card default is not a rule; seventeen
  earlier reels ship two-block cards, reel-53 scene 3 most recently. Scene 7 is
  the tallest rules card in this reel at 990 of the
  1310 floor, which is the constraint that would decide it if the text grew.
- **7.5's verbatim text carries "(7.8 still applies)" and the numbers 7.3 and
  7.4; 7.5.1's carries 7.9 through 7.12.** Those are inside the quotation and
  stay exactly as the rulebook has them. None of them is cited as a rule of
  this post, none appears in the attribution line, and no card quotes their
  text — the lesson's `rules` array is the five above and nothing else.
- **The field tip is the one place this post gives an instruction rather than a
  rule**, and it follows directly from 7.5.2: the restart only exists if the
  disc hits the ground untouched, so catching the pull forfeits the call.
- Instagram caption **1678** characters including hashtags
  (76.3% of the 2,200 limit, under the 2,090
  warn line); TikTok **1,652** of 4,000. Both counts are what
  `tools/check_caption.py` emits, and both include the hashtag block, which is
  what actually gets pasted. Both plain text, both scanned clean
  of markdown, both measured in UTF-16 units by `tools/check_caption.py`, which
  exits 0.
- Curriculum position: lesson 55 is index 21 of `content/lessons-3.json`, the
  next unused lesson after 54. It covers 2026-09-29, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
