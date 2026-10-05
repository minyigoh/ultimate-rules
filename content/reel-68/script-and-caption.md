# Reel 68 — "Contested goals"

**Status:** Pending review
**Script drafted:** 2026-10-05 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-12 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (14.2, 14.4)
**Source lesson:** `content/lessons-3.json` → `contested-goal`

The lesson's own hook is "You called goal, they said no.", and the script keeps
its shape. Both numbers sit in chapter 14, so this is one chapter answering one
question: who may call a goal, and when the goal is deemed to have happened.

**Two cards, both carded alone, and that is the whole set.** 14.2 is the call
and what happens when it is contested or withdrawn. 14.4 is the single sentence
that fixes the moment. The lesson's `rules` array is exactly these two, and
nothing was added — no stem is needed, because neither rule is a branch of the
other and neither opens on a connective that would read as a fragment.

**This is a seven-scene reel, which is the shortest shape the pipeline ships.**
Two topic blocks rather than three or four, same as reel-61, reel-49 and
reel-37. `TOTAL` is 7 and the projection still lands inside the house band — see
the measurements below. A third block would have meant quoting a rule the lesson
does not cite, which is the thing this pipeline does not do.

**The block order is the lesson's `rules` order, which is also rule-number
order here.** 14.2 before 14.4: the call has to exist before the question of
when it is deemed to have been made means anything.

---

## Video — `reel68-contested-goals.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Contested goals" · kicker BEGINNER · LESSON 68 / 75 |
| 2 | #1 YOU MAY CALL GOAL | "Saying it stops the play." · footer cites 14.2 |
| 3 | Rules detail | Verbatim 14.2, carded alone |
| 4 | #2 THE MOMENT THAT COUNTS | "Possession, not the shout." · footer cites 14.4 |
| 5 | Rules detail | Verbatim 14.4, carded alone |
| 6 | FIELD TIP | "Check your feet first." |
| 7 | Closing | "Lesson 68 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the two cards do

1. **14.2 — the call, and the restart.** If you believe a goal has been scored
   you may call it and play stops. If the call is contested or retracted, play
   must restart with a check, and the call is deemed to have been made when the
   player established possession. Two things players get wrong live in that
   sentence: calling goal is a *stoppage*, and a contested goal is not resolved
   by playing on.
2. **14.4 — the moment.** The time at which a goal is deemed scored is when the
   player established possession. Not the catch, not the shout. It is one
   sentence and it settles every "but I had already landed" argument.

**Layout — DRY-MEASURED, 2026-10-05.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all seven scenes: **7 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; both main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 YOU MAY CALL GOAL` **583.8px** of the 900px column (64.9%),
  `#2 THE MOMENT THAT COUNTS` **746.3px** (82.9%). Cover `BEGINNER` **231.1px**
  at its own 32px; `FIELD TIP` **222.2px**. The widest here is narrower than
  reel-67's 767.1px and well inside reel-11's 873px high-water mark.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** Both main
  scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 166 and 156 characters. That is the same geometry
  reel-67's three main scenes landed on, which is the intended steady state.
- **The cover title is a single line at the standard 84px** — **653.4px** of 900.
  Two words, so there is nothing for the wrapper to decide. reel-67's title took
  two lines; the cover's 1210 ink bottom is unchanged either way, because the
  lesson line and the hook below it set that figure, not the title.
- Scene 6's tip body wraps to three lines and ends at **884** of the 1310 floor,
  426px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scene 3 ink bottom **604**, scene 5 **454**, both against the 1310
  floor. Carded lengths: 14.2 is 234 characters and 14.4 is 97. **14.2 ties 12.5
  as the longest rule text the series has carded, at exactly 234 characters** —
  but carded alone, without a branch beneath it, so scene 3 comes in at 604
  where reel-67's scene 3 reached 872.
- Citation number lines: `14.2` **50.6px** of 900 and `14.4` **50.6px** — level
  with reel-67's two shortest footers.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 27 emitted SVGs, 0 cases. 14.2 does carry a pair of curly quotes
  around the word goal, straight from `rules.json`; those are not `&quot;` and
  do not engage the wrapper, and they are the approved glyphs because they are
  the rulebook's own.
- Projected duration **28.8s** from `retime()`/`fit()` (27 states, 7 scenes,
  24.05s raw + transitions; house target ~30s, band 28–33s). Inside the band at
  the short end, which is what two topic blocks produce. Durations in `SCENES`
  are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The three slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "If you believe you scored, you may call goal and play stops. If that call is contested or you take it back, play restarts with a check rather than simply carrying on."
- Scene 4 — "A goal happens when the player established possession, not when the disc first touched their hands and not when somebody shouted the word from the sideline."
- Scene 6 (field tip) — "If it is close, look down at your feet straight away rather than celebrating. You will be asked where you were, and you should be the one who knows."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-67/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list and `TOTAL` differ — verified by diffing the
two files with their `SCENES` blocks removed, which came back identical except
for the single `TOTAL` line (9 → 7). Copy `blend.py` and `encode.py` in from
reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-68` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You think you scored. Somebody on the other team does not agree. The rulebook has an answer for both halves of that - who may call it, and the exact instant the goal counts as having happened."
- Explanation: "If you believe a goal has been scored you may call goal, and play stops. If that call is contested or you withdraw it, play restarts with a check rather than carrying on. And the moment a goal is deemed scored is the moment the player established possession - not when the disc arrived, and not when anyone said so out loud."
- Example: "You skim a low pass in the end zone, bounce up and start celebrating. A defender contests. Play does not continue: you restart with a check, and the question is only whether you had established possession with a foot in the end zone. Your celebration was itself the goal call."
- CTA: "Lesson 68 of 75 - new lesson daily."

## Instagram caption

You called goal. They said no. Now what?

The rulebook hands you the call, and then it tells you exactly when the goal happened.

"If a player believes a goal has been scored, they may call “goal” and play stops. After a contested or retracted goal call play must restart with a check and the call is deemed to have been made when the player established possession."

So calling goal is a stoppage, not a celebration. If the call is contested, or you take it back, nobody simply plays on - play restarts with a check.

And you do not have to say a word to have made the call.

The rulebook treats behaving as though you scored, celebrating for example, as a goal call in itself. It stops play, and the result of any additional play does not stand.

Then the question everyone argues about: when was the goal scored?

"The time at which a goal is deemed to have been scored is when the player established possession."

Not when the disc first touched your hands. Not when somebody shouted it from the sideline. When you established possession. And if the call is contested while you still hold the disc, everyone returns to where they were at that moment.

Field note. If it is close, look down at your feet straight away rather than celebrating. You will be asked where you were, and you should be the one who knows.

Lesson 68 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (14.2, 14.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

contested goals 🥏

you called goal. they said no. now what?

"If a player believes a goal has been scored, they may call “goal” and play stops. After a contested or retracted goal call play must restart with a check and the call is deemed to have been made when the player established possession."

so calling goal is a stoppage, not a celebration. if it is contested, or you take it back, nobody plays on - you restart with a check

and you don't have to say a word to have made the call. the rulebook treats behaving as though you scored, celebrating for example, as a goal call in itself. it stops play, and anything that happens after it does not stand

then the bit everyone argues about: when was the goal scored?

"The time at which a goal is deemed to have been scored is when the player established possession."

not when the disc first touched your hands. not when somebody shouted it from the sideline. when you established possession

and if it's contested while you still hold the disc, everyone goes back to where they were at that moment

field note: if it's close, look down at your feet straight away rather than celebrating. you'll be asked where you were, and you should be the one who knows

rule text from WFDF Rules of Ultimate 2025–2028 (14.2, 14.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(14.2, 14.4), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 68 of 75**, `contested-goal` in `content/lessons-3.json`, tag
  Scoring. Fills 2026-10-12, the only bare date in the seven-day window
  (2026-10-06 through 2026-10-12).
- **Both numbers are the lesson's own `rules` array.** Nothing was added for
  legibility, and nothing is quoted that the lesson does not cite.
- **Seven scenes, not nine.** The lesson carries two rules, so it gets two topic
  blocks. Precedent: reel-37, reel-49 and reel-61 all ship at `TOTAL = 7`. The
  projection lands at 28.8s, inside the 28–33s band at its short end, so no
  block was dropped and none was invented.
- **14.2 ties 12.5 as the longest rule text the series has carded**, at exactly
  234 characters. Carded alone it reaches ink bottom 604, where reel-67's 12.5
  plus its 12.5.1 branch reached 872.
- **"Celebrating counts as a goal call" is 14.2's own annotation, not this
  script's inference.** `rules.json` carries it under the Contested Goal
  heading: behaving as though a goal was scored should be treated as a "goal"
  call, that call is a stoppage, and the result of any additional play does not
  stand. Both captions use it; no slide does.
- **"All players return to where they were" is also 14.2's annotation.** It
  applies where the receiver maintains possession through a contested or
  retracted call, and both captions carry it as the practical consequence of the
  deemed-possession clause.
- **DRY-MEASURED 2026-10-05** — `check_layout.py` 7 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,566 of
  2,200** UTF-16 units (71.2%, well under the 2,090 warn line), TikTok at
  **1,396 of 4,000**. `render_v3.py` is committed here and is the exact file
  measured. SVG only; no PNGs, no frames, no cut.
- **The caption is shorter than recent reels and was not padded to match.**
  reel-67 ran 1,972 and reel-66 1,818, both over four or three rules; this
  lesson has two, and the only honest ways to lengthen it would be re-teaching
  the quotes in plain words or citing a rule the lesson does not. Headroom is
  not a target to spend.
- The lesson's quiz answer and the script's example beat are the same case
  (established possession, not the catch and not the shout), deliberately — it
  is the one players argue about, and 14.4 is the whole answer in one sentence.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
