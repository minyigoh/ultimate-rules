# Reel 39 — What the stall count restarts at

**Status:** Pending review
**Script drafted:** 2026-09-10 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-13 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (9.5.1, 9.5.2, 9.5.3, 9.5.5, 9.6.1)
**Source lesson:** `content/lessons-3.json` → `count-after-stoppage`

Reel 38 taught the check — the procedure that restarts play. This is the number
you restart it *on*. The two are one sequence: 38 is who touches the disc, 39 is
what the marker says next. It is the second half of the same three seconds, and
it is the half people get wrong, because "maximum six" does not mean six.

---

## Video — `reel39-count-after-stoppage.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36 and 38.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | What the stall count restarts at · kicker BEGINNER · LESSON 39 / 75 |
| 2 | #1 WHOSE BREACH WAS IT | "Their fault, back to one. Your fault, maximum nine." · footer cites 9.5.1 · 9.5.2 |
| 3 | Rules detail | Verbatim 9.5.1 + 9.5.2, two blocks |
| 4 | #2 EVERY OTHER CALL | "Picks and most calls: maximum six." · footer cites 9.5.5 · 9.5.3 |
| 5 | Rules detail | Verbatim 9.5.5 + 9.5.3, two blocks |
| 6 | #3 WHAT "MAXIMUM" MEANS | "The last number said, plus one — or n. Whichever is lower." · footer cites 9.6.1 |
| 7 | Rules detail | Verbatim 9.6 as block lead + 9.6.1 |
| 8 | FIELD TIP | "Say the number out loud before anyone argues." |
| 9 | Closing | "Lesson 39 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### One departure, and two things deliberately left off the cards

- **9.6 is carded as a block lead and it is NOT in the lesson's `rules` array.**
  This is the reel-34 shape, not the reel-36 one. 9.6.1 opens "If “x” is the
  last agreed number fully uttered prior to the call…" and closes on "or
  “Stalling n”" — and *n* is defined nowhere except 9.6. Carded alone, 9.6.1
  quotes a variable the viewer has never been shown. So 9.6 goes above it as the
  block lead, and the scene-6 footer still cites **9.6.1 only**, matching the
  lesson's array. Same call reel 34 made for 1.6 above 1.6.1/1.6.2.
- **9.5.5.1 and 9.5.5.2 are NOT carded.** 9.5.5 ends on "However:", which points
  at them, so leaving them off does leave a connective hanging at the foot of a
  block. They are named in scene 4's prose instead — the reel-36 treatment of
  16.2.1/16.2.2 — because neither is in the lesson's `rules` array and both are
  narrow (a receiving breach alongside a call on the thrower; a violation during
  the check). **Flagged as a judgement call.** The alternative is to card 9.5.5
  as a block lead with both sub-items beneath, which resolves the "However:"
  properly but puts three blocks on scene 5. That was not chosen *this run
  specifically* because the sandbox is down and the denser card could not be
  measured — see the layout note below. If you would rather have it, say so and
  a run with a working sandbox can rebuild scene 5 that way.
- **9.5.4** — the 16.3.2 continuation case, which also restarts at "Stalling
  one (1)". Real, and not in the lesson's `rules` array, so it stays off the
  cards and out of the captions entirely.
- **20.3.6** — the time-out case. Named inside 9.6's own verbatim text, which is
  quoted whole, but never carded or cited in its own right. Time-outs are lesson
  52.

### What the three cards do

1. **9.5.1 + 9.5.2 — fault decides the reset.** The count is not a neutral clock
   you resume; it is re-set according to who caused the stoppage. Defence
   breached, the thrower gets the whole ten back. Offence breached, they get
   almost nothing back.
2. **9.5.5 + 9.5.3 — the two catch-alls.** Everything that is not an accepted
   breach lands here: maximum six for the ordinary case, "Stalling eight (8)"
   for the one call that is specifically about the count itself.
3. **9.6 + 9.6.1 — the arithmetic.** This is the whole reel. "Maximum n" is a
   ceiling, not a value, and it can only ever hold you still or pull you
   backwards.

**Layout — NOT DRY-MEASURED. Estimates only.**

The render sandbox failed to mount on 2026-09-10 (four identical Plan9 errors),
as it did on 2026-09-09. `check_layout.py`, `check_caption.py` and `node --check`
could not be run. Every number below is an estimate from the reel-36 and reel-38
measurements, not an emitted measurement, and must be verified at render time:

- Kickers are all short and none should approach the floor: `#1   WHOSE BREACH
  WAS IT` and `#2   EVERY OTHER CALL` are both well inside reel-36's widest
  (690 of 900), and `#3   WHAT "MAXIMUM" MEANS` is the longest of the three.
  `fit_kicker()` is not expected to engage. **Verify** — the `"` characters in
  kicker 3 are tracked like any other glyph.
- Scene 3's two blocks are short (23 and 20 words) and should land near
  reel-36's emptiest detail card. Scene 5's are similar. **Scene 7 is the card
  to watch:** 9.6 is 27 words with three rule numbers inside the sentence, and
  9.6.1 is 38 words with four sets of curly quotes — denser than either of the
  other two and the closest thing in this reel to reel-38's flagged scene 3.
- **Likely `_payload()` cases.** 9.5.1 and 9.5.3 both *end* on `”.` and 9.5.5
  carries “pick” mid-sentence; 9.6 and 9.6.1 carry six quoted fragments between
  them. Verify in the PNGs, not the SVGs — this is the collision that cost
  reel-21 and carousel-post-5 a round.
- Projected duration **30.0s** on the house rhythm, matching reels 30–32, 35, 36
  and 38. `TOTAL = 9`; `content/reel-36/render_v3.py` already has it.

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "The count does not pick up where it left off. It is re-set, and
  which number you re-set to depends entirely on who caused the stoppage. If the
  defence committed the breach, the thrower gets the whole count back. If the
  offence committed it, they get almost none of it back."
- Scene 4 — "Most calls are neither. A pick, a contested foul, an injury: all of
  them restart at maximum six. The rule adds a 'However' pointing at two narrow
  exceptions — a receiving breach alongside a call on the thrower, and a
  violation during the check — and neither is covered here. A contested
  stall-out is its own number, because that call is about the count itself."
- Scene 6 — "Maximum six is not six. It means the last number fully uttered plus
  one, or six, whichever of the two is lower. On four when the pick came? Four
  plus one is five, and five is lower, so you restart at five. On eight? Nine
  against six, six is lower, so you go back to six."
- Scene 8 (field tip) — "Maximum never jumps you forward. It can only hold you
  where you were or pull you back, which is why the marker gains nothing by
  arguing for it. Agree the last number out loud before you argue about the
  call, and the restart takes three seconds instead of thirty."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-36/render_v3.py` is the newest copy and already has `TOTAL = 9`.

---

## Script (~30s)

- Hook: "Play stopped at stall six. It does not restart at six. It probably does not restart at one either, and most players guess."
- Explanation: "The count is re-set, not resumed, and the number depends on who caused the stoppage. Defence breached — back to Stalling one. Offence breached — maximum nine. Contested stall-out — Stalling eight. Everything else, picks included — maximum six."
- Example: "So you are on four and someone calls a pick. Maximum six does not mean six. It means the last number said plus one, or six, whichever is lower. Four plus one is five, five is lower, so you restart at five. But if you were on eight when that pick came, nine against six means you go back to six. Maximum never jumps you forward — it can only hold you still or pull you back."
- CTA: "Lesson 39 of 75 — new lesson daily."

## Instagram caption

Play stopped at stall six. What does it restart at?

Not six. Probably not one either. The count is re-set, not resumed, and the number depends on who caused the stoppage.

Defence breached:

"After an accepted breach by the defence the stall count restarts at “Stalling one (1)”."

A clean reset — they caused the delay, so the thrower gets the whole count back.

Offence breached:

"After an accepted breach by the offence the stall count restarts at maximum nine (9)."

Contested stall-out:

"After a contested stall-out the stall count restarts at “Stalling eight (8)”."

Everything else:

"After all other calls, including “pick”, the stall count restarts at maximum six (6). However:"

That "However" points at two narrow exceptions this lesson does not cover. For the calls you will actually meet — picks, contested fouls, injuries — it is maximum six.

Now the part that catches people, because maximum six is not six:

"If “x” is the last agreed number fully uttered prior to the call, then the stall count resumes at “Stalling (x plus one)” or “Stalling n”, whichever of those two numbers is lower."

The last number said, plus one — or the ceiling — whichever is lower.

You were on four when the pick was called. Four plus one is five. Five is lower than six, so you restart at five, not six.

You were on eight. Nine against six, and six is lower, so you go back to six.

Maximum never jumps you forward. It can only hold you where you were or pull you back.

The practical version: agree the last number out loud before anyone argues about the call. A count two people heard is a fact. A count only the marker heard is a negotiation.

Lesson 39 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (9.5.1, 9.5.2, 9.5.3, 9.5.5, 9.6.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

play stopped at stall six. it does NOT restart at six 🥏

the count is re-set, not resumed. the number depends on who caused it

defence breached:

"After an accepted breach by the defence the stall count restarts at “Stalling one (1)”."

→ clean reset. whole count back

offence breached:

"After an accepted breach by the offence the stall count restarts at maximum nine (9)."

contested stall-out:

"After a contested stall-out the stall count restarts at “Stalling eight (8)”."

everything else — picks, contested fouls, injuries:

"After all other calls, including “pick”, the stall count restarts at maximum six (6). However:"

and here's the bit nobody knows. maximum six is not six:

"If “x” is the last agreed number fully uttered prior to the call, then the stall count resumes at “Stalling (x plus one)” or “Stalling n”, whichever of those two numbers is lower."

last number said, plus one — or the ceiling — whichever is LOWER

on four when the pick came? 4+1=5, five is lower → restart at five

on eight? 9 vs 6, six is lower → back to six

maximum never jumps you forward ← it can only hold you still or pull you back

agree the number out loud before you argue about the call

lesson 39 of 75

rules from WFDF Rules of Ultimate 2025–2028 (9.5.1, 9.5.2, 9.5.3, 9.5.5, 9.6.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(9.5.1, 9.5.2, 9.5.3, 9.5.5, 9.6.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the reel-30,
  31, 32, 35, 36 and 38 shape. `TOTAL = 9`, which `reel-36/render_v3.py` has.
- **NOT DRY-MEASURED.** The render sandbox failed to mount on 2026-09-10 (four
  identical Plan9 errors), the second consecutive day. Every layout number above
  is an estimate. Verify at render time before trusting any of it.
- **9.6 is carded as a block lead and is a departure** — it is not in the
  lesson's `rules` array. It is there because 9.6.1's "Stalling n" is
  meaningless without it. The footer cites 9.6.1 only. Reel-34 shape.
- **9.5.5's "However:" hangs.** 9.5.5.1 and 9.5.5.2 are named in scene 4's prose
  and never carded or cited. See the departures section for the alternative
  layout if you would rather have them on the card.
- **Do not turn "maximum n" into "n".** The whole reel exists because they are
  different. A pick at stall four restarts at five, not six — that is the
  lesson's own quiz answer, and rendering it as "picks restart at six" inverts
  it.
- **Do not say the count "resumes" or "picks up".** 9.5 is explicit that it
  restarts, and the difference is the point of scene 2.
- Keep the curly quotes in “Stalling one (1)”, “Stalling eight (8)”, “pick”,
  “x” and “Stalling n” — they are the rulebook's.
- Instagram caption 1,920 characters including hashtags (87% of the 2,200
  limit, below the 95% warning line); TikTok 1,313 of 4,000. Both plain text,
  no markdown — scanned for `**`, `*…*`, backticks, `[](…)`, `#` headings and
  `- ` bullets. Measured in UTF-16 units on 2026-09-10 outside the sandbox,
  since `check_caption.py` could not be run; `build_desk.py` re-runs it as a
  backstop at sync time.
- Curriculum position: lesson 39 is index 4 of `content/lessons-3.json`, the
  next unused lesson after 38. It covers 2026-09-13, the only bare date in the
  tomorrow-through-tomorrow+2 window. No Thursday falls in that window, so no
  recap carousel is due this run; the next is 2026-09-17.
- No growth/reach claims in either caption.
