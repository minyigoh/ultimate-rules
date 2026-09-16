# Reel 49 — "Calling a time-out you don't have"

**Status:** Pending review
**Script drafted:** 2026-09-16 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-23 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (20.4)
**Source lesson:** `content/lessons-3.json` → `no-timeouts-left`

Second reel of the stoppages block. Reel 48 established the seventy-five-second
time-out and deliberately kept 20.4 back for this one; this is that reel. The
lesson carries a single rule, so this is a **seven-scene** cut in the shape of
reels 11 and 17, not the nine-scene shape reels 43–48 used.

---

## Video — `reel49-no-timeouts-left.mp4` (1080×1920, 30fps)

Seven scenes — cover, one topic/rules-detail pair, two further topic scenes,
field tip, closing. Single-rule shape, same as reels 11 and 17. One citation
card at scene 3; scenes 2, 4 and 5 all foot to 20.4.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Calling a time-out you don't have" · kicker BEGINNER · LESSON 49 / 75 |
| 2 | #1 PLAY STOPS ANYWAY | "The call still works. That is the trap." · footer cites 20.4 |
| 3 | Rules detail | Verbatim 20.4, one block |
| 4 | #2 TWO SECONDS ON THE COUNT | "Two are added to the restart count." · footer cites 20.4 |
| 5 | #3 TEN IS A TURNOVER | "Late in a count, it costs the disc." · footer cites 20.4 |
| 6 | FIELD TIP | "Know the number before you need it." |
| 7 | Closing | "Lesson 49 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card. 20.4 is the only rule number in this lesson's
`rules` array and the only one used anywhere in this post.

### What the one card does, and why there is only one

20.4 is a single self-contained rule that states the stop, the penalty and the
turnover threshold in three sentences. Splitting it across two cards would quote
the same string twice; giving it one card and letting scenes 4 and 5 unpack it
in plain language is the shape reels 11 and 17 already use for a one-sentence
rule, and it is why this cut is seven scenes rather than nine.

**Do not reach for 20.3 or 20.3.6 here.** The seventy-five-second time-out and
the maximum-nine restart belong to reel 48, which has already posted by this
date. Neither is in this lesson's `rules` array, so neither gets a rule number
or a citation footer on this post.

**"The stall count they would have restarted play on" is the load-bearing
phrase, and the copy is careful about it.** The two seconds are added to the
*restart* count, not to the count at the instant the call was made. The lesson's
own quiz makes this the whole question: a count that would have restarted on six
restarts on eight. Every line here says "the restart count" for that reason — do
not simplify it to "two seconds onto the stall count" at review, which is the
obvious edit and is wrong.

**Layout — DRY-MEASURED, 2026-09-16.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory. **SVG only — no PNGs, no frames, no
cut.** The build run owns rendering.

- `tools/check_layout.py` on all seven scenes: **7 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  1210 of the 1310 floor.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 PLAY STOPS ANYWAY` 593.3px of the 900px column, `#2 TWO SECONDS ON THE
  COUNT` 808.7px, `#3 TEN IS A TURNOVER` 561.2px. Cover `BEGINNER` 231.1px at
  its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** Last
  baselines: scenes 2, 4 and 5 all at 962, against the `CITE_Y - 60` limit of
  1090. Clearance 128px on each.
- Scene 6's tip body ends at 1062 of the 1310 floor, 248px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint and
  `fit_body()` does not apply to it.
- **This is the second draft of the three bodies, and the first one measured
  badly.** In v1 all three headlines wrapped to three lines, pushing the body
  start to y=890, and all three bodies then landed on **1090 — the limit
  exactly, zero clearance, one character from `SystemExit`** on each of the
  three. That is the reel-48 v1 defect repeated on every main scene at once.
  Each headline was cut to two lines and each body from five wrapped lines to
  four, here at the draft gate, which is the only place shortening is allowed.
  Once this is approved the rule is shrink the type, never reword.
- Projected duration **28.7s** from `retime()`/`fit()` (30 states, house target
  ~30s, band 28–33s). Seven-scene reels sit at the low end of the band by
  construction — reel 11 shipped at 28.3s. Durations in `SCENES` are untouched
  placeholders — do not hand-tune them.

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "You form the T, you call it, and play stops — even though your team
  has none left. The rulebook does not ignore the call. It stops the point, and
  then it charges you for it."
- Scene 4 — "Not two onto the count at the moment you called it. Two onto the
  number the marker would otherwise have restarted play on. Play resumes with a
  check."
- Scene 5 — "If those two seconds take the restart to ten or above, that is a
  stall-out turnover. A restart at eight becomes ten. The later the count, the
  less this is a small penalty."
- Scene 6 (field tip) — "Time-outs get spent in the first half and forgotten by
  the second. Your captain should say how many are left after every one, and the
  thrower should know it without asking. The moment you want a time-out is the
  worst moment to find out you have none."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-49` — read
`tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-46/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix. Note `TOTAL = 7`, not 9 — the header pagination is per-reel.

---

## Script (~29s)

- Hook: "Your team has none left. You call one anyway. Here is what it costs."
- Explanation: "Play stops — the call is not ignored. But the marker then adds two seconds to the stall count they would otherwise have restarted play on, and play resumes with a check."
- Example: "So the price depends entirely on when you do it. The two seconds go onto the restart count, not the count at the moment you called. A restart that was going to be four becomes six, which is an irritation. A restart that was going to be eight becomes ten — and ten is a stall-out turnover. Late in a count, a time-out you do not have does not cost you two seconds, it costs you the disc."
- CTA: "Lesson 49 of 75 — new lesson daily."

## Instagram caption

A small, precise penalty worth knowing before you need it.

You are trapped on the sideline, the count is climbing, and your hands go up in a T. Except your team spent its last time-out in the first half.

Here is what the rulebook does with that:

"If the thrower attempts to call a time-out while play is live and when their team has no remaining time-outs, play is stopped. The marker must add two (2) seconds to the stall count they would have restarted play on before restarting play with a check. If this results in a stall count of ten (10) or above, this is a “stall-out” turnover."

Three things in there are worth separating out.

First, play stops. The call is not ignored and waved away. Everything halts exactly as if the time-out were real, which is why this is a penalty rather than a harmless mistake.

Second, the two seconds go onto the restart count, not onto the count at the moment you called. The marker works out the number they would otherwise have restarted play on, adds two, and play resumes with a check.

Third, ten ends it. If those two seconds push the restart to ten or above, that is a stall-out turnover and the possession is over. A restart at eight becomes ten.

So the cost is not fixed. Early in a count, two seconds is an irritation. Late in a count, it is the disc.

The fix is not a rule, it is housekeeping. Time-outs get spent in the first half and forgotten by the second. Your captain should say how many are left after every one, and the thrower should know that number without having to ask. The moment you want a time-out is the worst possible moment to find out you have none.

Lesson 49 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (20.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

calling a time-out you don't have 🥏

you're trapped on the sideline, the count is climbing, hands go up in a T. except your team spent its last one in the first half

here's what the rulebook does with that:

"If the thrower attempts to call a time-out while play is live and when their team has no remaining time-outs, play is stopped. The marker must add two (2) seconds to the stall count they would have restarted play on before restarting play with a check. If this results in a stall count of ten (10) or above, this is a “stall-out” turnover."

three things worth separating out

one: play stops. the call is not ignored and waved away — everything halts exactly as if the time-out were real. that's why it's a penalty and not a harmless mistake

two: the two seconds go onto the RESTART count, not the count when you called. the marker works out the number they'd otherwise have restarted on, adds two, check, play on

three: ten ends it. if those two seconds push the restart to ten or above that's a stall-out turnover 🚫 a restart at eight becomes ten

so the cost isn't fixed. early in a count two seconds is an irritation. late in a count it's the disc

the fix isn't a rule, it's housekeeping. time-outs get spent in the first half and forgotten by the second. your captain should say how many are left after every one

lesson 49 of 75

rules from WFDF Rules of Ultimate 2025–2028 (20.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (20.4).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes, not nine.** One rule card, so one topic/rules pair plus two
  unpaired topic scenes. `TOTAL = 7`.
- **DRY-MEASURED 2026-09-16** — `check_layout.py` exit 0, 7 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated.
- **The two seconds land on the restart count, not on the count when you
  called.** 20.4 says "the stall count they would have restarted play on". A
  count that would have restarted on six restarts on eight; one that would have
  restarted on eight restarts on ten, which is a stall-out. Do not compress this
  to "adds two to the stall count" anywhere — it changes the arithmetic.
- **Preserve the rulebook's own punctuation.** 20.4 carries curly doubles around
  `“stall-out”` and the rulebook's parenthesised numerals — "two (2) seconds",
  "ten (10) or above". All of it must survive to the PNG and to the caption
  unchanged.
- **This is chapter 20's second and last appearance in the current block.**
  Scene 3 renders the citation label `RULE 20.4 · TIME-OUTS`, the same label
  reel 48 introduced.
- **Reel 48 is the prerequisite and it posts 2026-09-22, the day before this
  one.** Nothing on screen cross-references it and the caption does not need to
  — this reel stands alone — but the ordering is deliberate and should not be
  swapped at the desk.
- **Lesson 39 ("What the stall count restarts at") is the general restart case.**
  20.4 is a penalty applied on top of whatever that case produced, which is
  exactly why the copy says "the number the marker would otherwise have
  restarted play on" rather than naming a number.
- Instagram caption **1,869 characters** including hashtags (85.0% of the 2,200
  limit, under the 2,090 warn line); TikTok 1,525 of 4,000. Both plain text,
  both scanned clean of markdown, both measured in UTF-16 units by
  `tools/check_caption.py`, which exits 0.
- One verbatim quotation, 335 characters — the shortest rule budget of any reel
  in this block, which is what leaves room for three unpacking paragraphs in the
  caption.
- Curriculum position: lesson 49 is index 15 of `content/lessons-3.json`, the
  next unused lesson after 48. It covers 2026-09-23, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
