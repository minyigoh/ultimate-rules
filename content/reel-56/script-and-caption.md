# Reel 56 — "The Spirit rules are actual rules"

**Status:** Pending review
**Script drafted:** 2026-09-23 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-30 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (1.3, 1.3.1, 1.3.9, 1.3.10, 1.5.4, 1.4)
**Source lesson:** `content/lessons-3.json` → `spirit-duties`

First reel of the Spirit run, and the first time since reel-5 ("There are no
referees. You are the referee.") that the account goes back to Chapter 1. Reel-5
established that players self-officiate; this one is the follow-up nobody
expects — that the chapter which sounds like a preface is written in the same
imperative mood as the travel rule.

The lesson's six rules split cleanly three ways: the duty stem and its first
item, the two calling duties, then the competitive-play standard and one listed
example of meeting it. All six are carded.

---

## Video — `reel56-spirit-duties.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–55.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "The Spirit rules are actual rules" · kicker BEGINNER · LESSON 56 / 75 |
| 2 | #1 THE WORD IS MUST | "Chapter 1 is not a preamble." · footer cites 1.3 · 1.3.1 |
| 3 | Rules detail | Verbatim 1.3 and 1.3.1, one block each |
| 4 | #2 CALL IT THE SAME ALL GAME | "The score does not change the standard." · footer cites 1.3.9 · 1.3.10 |
| 5 | Rules detail | Verbatim 1.3.9 and 1.3.10, one block each |
| 6 | #3 COMPETITIVE IS NO EXCUSE | "Play hard. That is the whole point." · footer cites 1.4 · 1.5.4 |
| 7 | Rules detail | Verbatim 1.4 and 1.5.4, one block each |
| 8 | FIELD TIP | "Say your name before the point." |
| 9 | Closing | "Lesson 56 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes. **All six rules in the array are carded.**

### What the three cards do

1. **1.3 + 1.3.1 — the stem and its first item.** These are not two rules that
   happen to sit together; 1.3 ends on a colon and 1.3.1 completes the sentence.
   Splitting them across two scenes would card a fragment that reads as a
   sentence with its verb missing. Two blocks on one card is the shape reel-55
   scene 3 uses for 7.3 / 7.4.
2. **1.3.9 + 1.3.10 — the two duties that govern calling.** Consistency and
   significance are the pair this lesson is really about, and the contrast is
   the teaching: one says *when you may not start*, the other says *when not to
   bother*. A difference cannot be shown one slide at a time.
3. **1.4 + 1.5.4 — the standard, and the cheapest way to meet it.** 1.4 is the
   only rule here written as a whole sentence about competitiveness; 1.5.4 is one
   named example from the good-Spirit list, and it is what the field tip acts
   on. Putting the principle above its smallest concrete instance is what stops
   the card reading as an abstraction.

**Layout — DRY-MEASURED, 2026-09-23.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; the three main scenes sit at **1192**.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`), which is what the
  column actually has to hold: `#1 THE WORD IS MUST` **540.4px** of the 900px
  column (60.0%), `#2 CALL IT THE SAME ALL GAME` **795.4px** (88.4%),
  `#3 COMPETITIVE IS NO EXCUSE` **765.3px** (85.0%). The widest is inside the
  873px high-water mark set by reel-11's "SIMULTANEOUS MEANS OFFENCE".
  Cover `BEGINNER` 231.1px at its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes take a 2-line headline and start their body at y=812, and
  all three wrap to four lines: last baseline **962**, clearance **128px**
  against the `CITE_Y - 60` limit of 1090.
  - Scene 4 was drafted longer and wrapped to **five** lines, last baseline
    **1012** — still passing, at 78px clearance, with `fit_body()` not engaging.
    It was tightened to four **while drafting**, before anything went to the
    desk, to keep the block uniform and to stay further from the limit than one
    edit's worth. That is not the forbidden move: the ban is on rewording an
    *approved* body to fit, and nothing here has been approved.
- Scene 8's tip body ends at **1062** of the 1310 floor, 248px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards are the lightest carded in this run: ink bottoms at **690**
  (scene 3), **740** (scene 5) and **740** (scene 7) against the 1310 floor.
  1.3 is 118 characters, 1.3.1 is 61, 1.3.9 is 58, 1.3.10 is 143, 1.4 is 189
  and 1.5.4 is 42 — the shortest rule set the pipeline has carded.
- Projected duration **30.0s** from `retime()`/`fit()` (37 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Spirit of the Game is written as duties, not encouragement. Players act as their own referees, and the first duty listed is to know the rules and the spirit behind them."
- Scene 4 — "Calls must be consistent from the first point to the last. A call is for a breach big enough to change the outcome, or where safety is at risk."
- Scene 6 — "Wanting to win is encouraged by the rulebook itself. What it will not trade away is mutual respect, the agreed rules, player safety and the basic joy of playing."
- Scene 8 (field tip) — "Introducing yourself to your opponent is listed in the rules as good Spirit, and it is the cheapest thing on the list. Every call you make at that matchup afterwards is a conversation with someone you have met rather than an argument with a stranger."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-55/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed. `TOTAL` is 9. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-56` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Chapter 1 of the rulebook uses the word must, not should. Spirit of the Game is a list of things you have to do."
- Explanation: "Players act as their own referees, and the first duty is to know both the rules and the spirit behind them. Two more duties govern calling: make calls consistently through the whole game, and only call a breach big enough to change the outcome or to put someone at risk."
- Example: "If you were letting small travels go in the first point, you do not get to start calling them at 14-14. That is not gamesmanship being frowned upon. It is a duty being breached."
- CTA: "Lesson 56 of 75 — new lesson daily."

## Instagram caption

Spirit of the Game is not the soft bit at the front of the rulebook.

Chapter 1 is written with the word must.

"Players should be mindful of the fact that they are acting as referees in any arbitration between teams. Players must:"

"know and abide by both the rules and the spirit of the rules;"

That is a duty, not a suggestion. Two of those duties are about how you call.

"make calls in a consistent manner throughout the game; and"

"only make a call where a breach is significant enough to make a difference to the outcome of the action, or where a player’s safety is at risk."

Consistency is the one people miss. If you were letting small travels go in the first point, you do not get to start calling them at 14-14.

None of this is an argument against playing hard.

"Highly competitive play is encouraged, but should never sacrifice the mutual respect between players, adherence to the agreed-upon rules of the game, player safety or the basic joy of play."

And the list of good Spirit includes something that takes four seconds.

"introducing yourself to your opponent; and"

Field note. Introduce yourself to your opponent before the point. Every call at that matchup afterwards is a conversation with someone you have met rather than an argument with a stranger.

Lesson 56 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (1.3, 1.3.1, 1.3.9, 1.3.10, 1.5.4, 1.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

the spirit rules are actual rules 🥏

spirit of the game isn't the soft bit at the front of the rulebook

chapter 1 is written with the word must

"Players should be mindful of the fact that they are acting as referees in any arbitration between teams. Players must:"

"know and abide by both the rules and the spirit of the rules;"

that's a duty, not a suggestion. two of those duties are about how you call

"make calls in a consistent manner throughout the game; and"

"only make a call where a breach is significant enough to make a difference to the outcome of the action, or where a player’s safety is at risk."

consistency is the one people miss. if you were letting small travels go in the first point, you don't get to start calling them at 14-14

none of this is an argument against playing hard

"Highly competitive play is encouraged, but should never sacrifice the mutual respect between players, adherence to the agreed-upon rules of the game, player safety or the basic joy of play."

and the list of good spirit includes something that takes four seconds

"introducing yourself to your opponent; and"

field note: introduce yourself to your opponent before the point. every call at that matchup afterwards is a conversation with someone you've met

lesson 56 of 75

rules from WFDF Rules of Ultimate 2025–2028 (1.3, 1.3.1, 1.3.9, 1.3.10, 1.5.4, 1.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (1.3, 1.3.1, 1.3.9, 1.3.10, 1.5.4, 1.4).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. All six of the lesson's
  rules are carded and quoted in full in both captions; all six numbers are in
  the attribution line, in the array's own order.
- **DRY-MEASURED 2026-09-23** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **All three cards carry two rule blocks each, and that is deliberate.** Every
  pair in this lesson is a pair for a different reason — 1.3/1.3.1 is one
  sentence split by the rulebook's own numbering, 1.3.9/1.3.10 is a contrast,
  1.4/1.5.4 is a principle and its instance. The single-rule-per-card default is
  not a rule; reel-55 shipped two of three cards this way. Scenes 5 and 7 are
  the tallest rules cards here at 740 of the 1310 floor, which is the constraint
  that would decide it if the text grew.
- **1.3 ends on a colon and 1.3.1 is a sentence fragment. Both are quoted
  exactly as the rulebook has them**, on the card and in both captions. Nothing
  is added to make them read as free-standing sentences — that would be
  paraphrase. The same applies to 1.5.4, which ends "; and".
- **1.3 is the stem of a list this post does not quote in full.** Items 1.3.2
  through 1.3.8 exist and are not cited here; the lesson's `rules` array names
  six numbers and this post carries exactly those six. No card, caption or
  attribution line implies the list is complete.
- **The field tip is the one place this post gives an instruction rather than a
  rule**, and it follows directly from 1.5.4: introducing yourself is on the
  rulebook's own list of good Spirit, so the tip is an application of a cited
  rule and not an addition to it.
- Instagram caption **1556** characters including hashtags
  (70.7% of the 2,200 limit, well under the 2,090
  warn line); TikTok **1490** of 4,000. Both counts are what
  `tools/check_caption.py` emits, and both include the hashtag block, which is
  what actually gets pasted. Both plain text, both scanned clean
  of markdown, both measured in UTF-16 units by `tools/check_caption.py`, which
  exits 0.
- Curriculum position: lesson 56 is index 22 of `content/lessons-3.json`, the
  next unused lesson after 55. It covers 2026-09-30, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
