# Reel 54 — "After every goal, you switch ends"

**Status:** Pending review
**Script drafted:** 2026-09-21 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-28 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (4.5, 4.5.1, 4.5.2, 4.5.3)
**Source lesson:** `content/lessons-3.json` → `switching-ends`

Second reel of the game-shape run that opened at reel 53. Where 53 gave the
container — fifteen goals, half time at eight, seven on and five minimum —
this one gives the loop inside it: what actually happens in the seconds after
a goal. The two sit next to each other deliberately, and 53 posts the day
before.

All four rules in the lesson's array are carded, and they are one rule. 4.5 is
a colon lead-in governing three numbered items; the reel keeps that shape
rather than flattening it.

---

## Video — `reel54-switching-ends.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–53.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "After every goal, you switch ends" · kicker BEGINNER · LESSON 54 / 75 |
| 2 | #1 NO RESTART FROM THE MIDDLE | "The next point starts the moment the goal is scored." · footer cites 4.5 · 4.5.1 |
| 3 | Rules detail | Verbatim 4.5 with 4.5.1 beneath it |
| 4 | #2 YOU SWAP END ZONES | "You defend the other end zone now." · footer cites 4.5.2 |
| 5 | Rules detail | Verbatim 4.5.2 |
| 6 | #3 SCORING MEANS PULLING | "Score, and you are on defence." · footer cites 4.5.3 |
| 7 | Rules detail | Verbatim 4.5.3 |
| 8 | FIELD TIP | "Point at the end zone you are attacking." |
| 9 | Closing | "Lesson 54 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes. **All four rules in the array are carded.**

### What the three cards do

1. **4.5 + 4.5.1 — the lead-in and the first item.** One block, parent above
   sub, the shape reel-51's scene 3 uses for 19.2.1 / 19.2.1.1. 4.5's text ends
   in a colon and governs all three items, so it has to appear before any of
   them; putting it on card 1 means the reader meets the condition
   ("and the game has not been won or half time has not been reached") once,
   at the top, rather than three times.
2. **4.5.2 — the swap.** Single-rule card. Its text is a list fragment ending
   "; and", quoted exactly that way, because that is what the rulebook says and
   the `RULE 4.5.2 · POINT, GOAL AND GAME` header carries the lineage back to
   the lead-in. Same handling as reel-53's 6.3, whose text is a bare
   back-reference: the card stays verbatim and the surrounding copy supplies
   the context.
3. **4.5.3 — the pull.** Single-rule card, and the one beginners are most
   often surprised by: scoring is what puts you on defence.

**Layout — DRY-MEASURED, 2026-09-21.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 NO RESTART FROM THE MIDDLE` **850.2px** of the 900px column (94.5%),
  `#2 YOU SWAP END ZONES` **619.8px** (68.9%), `#3 SCORING MEANS PULLING`
  **704.8px** (78.3%) — the widest is inside the 873px high-water mark set by
  reel-11. Cover `BEGINNER` 231.1px at its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812, and
  all three wrap to four lines: last baseline **962**, clearance **128px**
  against the `CITE_Y - 60` limit of 1090.
  - Scene 2's body was drafted a sentence longer and wrapped to **five** lines,
    last baseline **1012** — still passing, at 78px clearance, with
    `fit_body()` not engaging. It was tightened to four **while drafting**,
    before anything went to the desk, to keep the block uniform and to stay
    further from the limit than one edit's worth. That is not the forbidden
    move: the ban is on rewording an *approved* body to fit, and nothing here
    has been approved.
- Scene 8's tip body ends at **1012** of the 1310 floor, 298px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards are light: ink bottoms at **572** (scene 3, the parent-plus-sub
  block), **404** (scene 5) and **404** (scene 7) against the 1310 floor. 4.5 is
  88 characters, 4.5.1 is 34, 4.5.2 is 58 and 4.5.3 is 52 — the shortest rule
  set carded in this run.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Nobody walks back to halfway and nothing resets. The goal ends one point and the next begins straight away, unless the game has been won or half time has been reached."
- Scene 4 — "The end zone you were attacking is the one you now defend, and it changes again at the next goal. That is why scoring means walking to the far end of the field."
- Scene 6 — "The team that just scored becomes defence and pulls to restart. The team that conceded receives. Scoring buys you the walk down and the pull, not the disc."
- Scene 8 (field tip) — "Before every pull, physically point at the end zone you are attacking. It takes a second, the whole line sees it, and it heads off the exact mistake this lesson exists for: setting up facing the way you were facing last point."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-53/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-54` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Score a goal and the game does not stop. It turns around."
- Explanation: "There is no restart from the middle. The moment a goal is scored the next point starts immediately, the teams switch the end zone they are defending, and the team that just scored becomes defence and pulls."
- Example: "So you score, you walk to the far end of the field, and you pull. The team that conceded receives. That cycle — score, swap, pull — repeats until somebody reaches fifteen."
- CTA: "Lesson 54 of 75 — new lesson daily."

## Instagram caption

Score a goal and the game does not stop. It turns around.

There is no restart from the middle in ultimate. The moment a goal is scored, three things happen at once, and the rulebook lists them in order.

"After a goal is scored, and the game has not been won or half time has not been reached:"

"the next point starts immediately;"

Nobody walks back to halfway. Nobody waits for a whistle. The next point is already on.

"the teams switch the end zone that they are defending; and"

The end zone you spent the last point attacking is the one you now defend. It changes again at the next goal, and again at the one after that.

"the team that scored becomes defence and pulls next."

So scoring buys you the walk to the far end and the pull. The team that just conceded receives.

That is the whole cycle: score, swap, pull. It repeats until somebody reaches fifteen.

Field note. Before every pull, physically point at the end zone you are attacking. It takes a second, the whole line sees it, and it heads off the exact mistake this lesson exists for: setting up facing the way you were facing last point.

Lesson 54 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (4.5, 4.5.1, 4.5.2, 4.5.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

after every goal, you switch ends 🥏

score a goal and the game doesn't stop. it turns around

there's no restart from the middle in ultimate. the moment a goal is scored, three things happen at once, and the rulebook lists them in order

"After a goal is scored, and the game has not been won or half time has not been reached:"

"the next point starts immediately;"

nobody walks back to halfway. nobody waits for a whistle. the next point is already on

"the teams switch the end zone that they are defending; and"

the end zone you spent the last point attacking is the one you now defend. it changes again at the next goal, and again at the one after that

"the team that scored becomes defence and pulls next."

so scoring buys you the walk to the far end and the pull. the team that just conceded receives

that's the whole cycle: score, swap, pull. it repeats until somebody reaches fifteen

field note: before every pull, physically point at the end zone you're attacking. it takes a second, the whole line sees it, and it heads off the exact mistake this lesson exists for — setting up facing the way you were facing last point

lesson 54 of 75

rules from WFDF Rules of Ultimate 2025–2028 (4.5, 4.5.1, 4.5.2, 4.5.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (4.5,
4.5.1, 4.5.2, 4.5.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. All four of the
  lesson's rules are carded and quoted in full in both captions; all four
  numbers are in the attribution line, in the array's own order.
- **DRY-MEASURED 2026-09-21** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **4.5 is a colon lead-in and is carded as one, not flattened.** Its three
  numbered items are the lesson. Card 1 carries the lead-in plus 4.5.1 so the
  governing condition is stated once; cards 2 and 3 carry 4.5.2 and 4.5.3 on
  their own. Do not merge all four onto a single card to "keep the rule
  together" — that leaves scenes 4 and 6 citing text the viewer saw two scenes
  ago, and it was tried before being measured out.
- **4.5.2 is quoted with its trailing "; and" intact.** It is a list item, not
  a sentence, and trimming the conjunction would be an edit to rule text. Same
  for 4.5.1's semicolon. Verbatim means verbatim, punctuation included.
- **This reel does not teach substitutions.** The gap after a goal is also the
  substitution window, but 5.3 belongs to lesson 52 and is not in this lesson's
  `rules` array, so it is not cited here. Scene 6's body stops at who pulls.
- **"Scoring buys you the walk down and the pull, not the disc"** is the line
  doing the work on card 3. It follows directly from 4.5.3 rather than adding
  to it.
- Instagram caption **1373** characters including hashtags
  (62.4% of the 2,200 limit, well under the 2,090
  warn line); TikTok **1249** of 4,000. Both plain text, both scanned clean
  of markdown, both measured in UTF-16 units by `tools/check_caption.py`, which
  exits 0.
- Curriculum position: lesson 54 is index 20 of `content/lessons-3.json`, the
  next unused lesson after 53. It covers 2026-09-28, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
