# Reel 71 — "Mixed division basics"

**Status:** Pending review
**Script drafted:** 2026-10-08 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-15 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (5.4, 6.4)
**Source lesson:** `content/lessons-3.json` → `mixed`

The lesson's own hook is "If you're playing mixed, there's a ratio." and the
script keeps it intact for the cover card — it is already the shape of a hook.
This is a lesson about what the rulebook does and does not settle, so the
structure follows that: one rule fixes the ratio, one rule asks teams to talk,
and neither of them fixes the mechanism.

**Two cards, both carded alone, and that is the whole set.** 5.4 is the ratio.
6.4 is the pre-game conversation. The lesson's `rules` array is exactly these
two and nothing was added — this is the shortest pair of rules the series has
carded, 77 and 100 characters, and there is no third number to reach for that
the lesson cites.

**This is a seven-scene reel, the shortest shape the pipeline ships** — same as
reel-68, reel-61, reel-49 and reel-37. `TOTAL` is 7 and the projection lands at
28.8s, inside the house band. A third block would have meant quoting a rule the
lesson does not cite.

**The block order is the lesson's `rules` order, which is also rule-number
order.** 5.4 (Teams) before 6.4 (Starting a Game): the ratio has to exist before
the conversation about match-ups means anything.

**The one thing this reel is careful not to say.** Neither rule specifies how the
ratio is chosen on any given point, and the lesson says so explicitly — the
mechanism "varies by event". So the field tip and the caption both state the
limit of the rule rather than filling it in. 5.4 says the ratio should be *a form
of* an alternating 4:3; it does not say which side starts with four, and nothing
on this reel claims otherwise.

---

## Video — `reel71-mixed-division-basics.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Mixed division basics" · kicker BEGINNER · LESSON 71 / 75 |
| 2 | #1 THE RATIO ALTERNATES | "Four and three, and it changes." · footer cites 5.4 |
| 3 | Rules detail | Verbatim 5.4, carded alone |
| 4 | #2 TALK BEFORE THE GAME | "Match-ups are a conversation." · footer cites 6.4 |
| 5 | Rules detail | Verbatim 6.4, carded alone |
| 6 | FIELD TIP | "Ask at the captains' meeting." |
| 7 | Closing | "Lesson 71 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the two cards do

1. **5.4 — the ratio.** One sentence, 77 characters: for Mixed games, a form of
   an alternating 4:3 personnel ratio should be used. The load-bearing word is
   *alternating*. Players who have only played social mixed often assume a fixed
   split, and the rule does not describe one.
2. **6.4 — the conversation.** Teams should discuss any strategies to make
   personnel match-ups easier to identify. It sits in chapter 6, Starting a Game,
   which is itself the point: this is a thing you do before the first pull, not
   during a point.

**Layout — DRY-MEASURED, 2026-10-08.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all seven scenes: **7 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; both main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 THE RATIO ALTERNATES` **666.9px** of the 900px column (74.1%),
  `#2 TALK BEFORE THE GAME` **676.4px** (75.2%). Cover `BEGINNER` **231.1px** at
  its own 32px; `FIELD TIP` **236.2px**. The widest is 224px clear of the column.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** Scenes 2
  and 4 both take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090 — the same steady-state geometry as reels 67–70. Bodies are 151
  and 158 characters.
- **The cover title wraps to two lines at the standard 84px** —
  "Mixed division" **578.8px** and "basics" **261.5px** of 900. On one line the
  title would measure 863.7px, 36px from the column edge, so the wrapper's break
  is doing real work here; if the title is edited at the desk, re-measure.
- Scene 6's tip body is 184 characters over five lines and ends at **1012** of
  the 1310 floor, 298px clear. `g_tip()` carries no citation line, so
  `BODY_LIMIT` is not its constraint.
- Rules cards: scene 3 ink bottom **404**, scene 5 **454**, both against the 1310
  floor. Carded lengths: 5.4 is 77 characters over 2 lines and 6.4 is 100 over 3.
- **These are the two shortest cards the series has carded.** Scene 3 at ink
  bottom 404 leaves 906px of floor unused — for comparison reel-70 carded 10.5 at
  341 characters and reached 754. Short rules are not a defect, but it is why the
  caption is short too.
- Citation number lines: `5.4` **36.1px** of 900 and `6.4` **36.1px**.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 27 emitted SVGs, **0 occurrences**.
- Projected duration **28.8s** from `retime()`/`fit()` (27 states, 7 scenes,
  24.05s raw + transitions; house target ~30s, band 28–33s). Inside the band at
  the short end, which is what a two-block reel does. Durations in `SCENES` are
  untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The three slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Mixed games use a form of alternating 4:3 personnel ratio, so the split on the field changes from point to point rather than staying the same all game."
- Scene 4 — "Teams should also talk before the game about anything that makes personnel match-ups easier to identify. That is a pre-game conversation, not a mid-point one."
- Scene 6 (field tip) — "The rules set the alternating ratio but not the mechanism for choosing it each point, and that varies by event. Most social leagues run their own variant, so ask before the first pull."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-70/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list and `TOTAL` differ — verified by diffing the
two files with their `SCENES` blocks removed, which came back differing on the
single line `TOTAL = 9` → `TOTAL = 7` and nothing else. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-71` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "If you're playing mixed, there's a ratio. And it is not a fixed one — it is meant to change from point to point, and the rulebook says so in a single sentence."
- Explanation: "For Mixed games, a form of an alternating 4:3 personnel ratio should be used. Alternating is the part people miss: the split on the field is meant to change between points rather than stay the same all game. The rules also say teams should discuss, before the game, any strategies that make personnel match-ups easier to identify. What the rulebook does not do is fix the mechanism for deciding the ratio each point - that varies by event."
- Example: "You turn up to a mixed tournament and the captains' meeting tells you which team sets the ratio on the first point. From there it alternates. In a social league it might be settled a completely different way, because most leagues run their own variant. Either way the question is answered before the first pull, not argued about in the middle of a point."
- CTA: "Lesson 71 of 75 - new lesson daily."

## Instagram caption

If you're playing mixed, there's a ratio. And it is not a fixed one.

It is meant to change from point to point, and the rulebook says so in a single sentence.

One. The ratio alternates.

"For Mixed games, a form of an alternating 4:3 personnel ratio should be used."

Mixed games use a form of alternating 4:3 personnel ratio, so the split on the field changes from point to point rather than staying the same all game. Alternating is the part people miss.

Two. Talk before the game.

"For Mixed games, teams should discuss any strategies to make personnel match-ups easier to identify."

Teams should also talk before the game about anything that makes personnel match-ups easier to identify. That is a pre-game conversation, not a mid-point one.

What the rulebook does not do is fix the mechanism for deciding the ratio each point. That varies by event, so the captains' meeting is where you find out.

Field note. Ask at the captains' meeting. Most social mixed leagues run their own variant, so ask before the first pull rather than mid-point.

Lesson 71 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (5.4, 6.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

mixed division basics 🥏

if you're playing mixed, there's a ratio. and it is not a fixed one

it is meant to change from point to point, and the rulebook says so in one sentence

one. the ratio alternates

"For Mixed games, a form of an alternating 4:3 personnel ratio should be used."

mixed games use a form of alternating 4:3 personnel ratio, so the split on the field changes from point to point rather than staying the same all game. alternating is the part people miss

two. talk before the game

"For Mixed games, teams should discuss any strategies to make personnel match-ups easier to identify."

teams should also talk before the game about anything that makes personnel match-ups easier to identify. that is a pre-game conversation, not a mid-point one

what the rulebook does not do is fix the mechanism for deciding the ratio each point. that varies by event, so the captains' meeting is where you find out

field note: ask at the captains' meeting. most social mixed leagues run their own variant, so ask before the first pull rather than mid-point

rule text from WFDF Rules of Ultimate 2025–2028 (5.4, 6.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(5.4, 6.4), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 71 of 75**, `mixed` in `content/lessons-3.json`, tag Game. Fills
  2026-10-15, the only bare date in the seven-day window (2026-10-09 through
  2026-10-15).
- **Both numbers are the lesson's own `rules` array.** Nothing was added for
  length and nothing is quoted that the lesson does not cite. Chapter 5 for the
  ratio, chapter 6 for the conversation.
- **Seven scenes over two rules.** The shortest shape the pipeline ships, same as
  reel-68, reel-61, reel-49 and reel-37. Projection 28.8s, inside the 28–33s
  band at the short end.
- **The reel states the limit of the rule rather than filling it in.** 5.4 says
  "a form of an alternating 4:3 personnel ratio"; it does not say which side
  starts with four, and the lesson says the mechanism varies by event. The field
  tip, the explanation beat and the caption all say so explicitly. Nothing here
  claims a mechanism the rulebook does not set.
- **5.4 and 6.4 are the two shortest cards the series has carded** at 77 and 100
  characters, reaching ink bottom 404 and 454 of the 1310 floor. The caption is
  short for the same reason — the two verbatim quotes total 177 characters
  against reel-70's 695 — and nothing was padded to fill the budget.
- **No kicker is near the width guard.** The widest is
  `#2 TALK BEFORE THE GAME` at 676.4px of 900, 224px clear. reel-11's 873px is
  still the series high-water mark.
- **The example beat and the lesson's quiz are different cases** — the quiz asks
  what ratio the rulebook describes (answer: a form of an alternating 4:3), and
  the example walks a tournament and a social league so the "ask first" point
  lands on the mechanism rather than the ratio.
- **DRY-MEASURED 2026-10-08** — `check_layout.py` 7 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,299 of
  2,200** UTF-16 units (59.0%, far under the 2,090 warn line), TikTok at
  **1,247 of 4,000** (hashtags included in both figures, the way
  `check_caption.py` counts them). Projected duration 28.8s over 27 states. `render_v3.py` is
  committed here and is the exact file measured. SVG only; no PNGs, no frames,
  no cut.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
