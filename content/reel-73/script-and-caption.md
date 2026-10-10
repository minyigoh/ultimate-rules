# Reel 73 — "Use your hands"

**Status:** Pending review
**Script drafted:** 2026-10-10 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-17 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.13, 15.7, 1.3.7)
**Source lesson:** `content/lessons-3.json` → `hand-signals`

The lesson's hook is a scene rather than a claim — "The sideline is 40 metres
away and the wind is loud." — and the cover keeps it exactly, because the
distance is the argument. A hand signal is not etiquette on a field that size;
it is the only channel that reaches.

**Three cards, each carded alone, in the lesson's `rules` order.** 15.13 is the
encouragement and the fact that a standard signal exists, 15.7 is the duty to
communicate a stoppage and echo it, and 1.3.7 is the one line in chapter 1 that
puts body language on the same footing as words. That order runs from *there is
a signal*, through *use it loudly*, to *and mind how it lands*.

**This is a nine-scene reel**, the standard three-block shape, same as reels 69,
70 and 72. `TOTAL` is 9 and the projection lands at exactly 30.0s, the house
target.

**What this reel is careful not to claim.** The lesson's prose says signals are
"encouraged" and so does 15.13 — nothing here upgrades that to a requirement.
15.7's own "must" attaches to communicating the stoppage, not to the hand
signal, and the copy keeps those two apart: scene 4 says a call *has to be
communicated visibly or audibly*, which is what the rule says, and does not say
a signal is mandatory. 1.3.7 is a clause from chapter 1's list of player
duties; it is carded verbatim, semicolon and lower-case opening included,
because the parent `1.3` is not in this lesson's `rules` array and nothing is
quoted that the lesson does not cite.

---

## Video — `reel73-use-your-hands.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Use your hands" · kicker BEGINNER · LESSON 73 / 75 |
| 2 | #1 THERE IS A SIGNAL FOR IT | "Every common call has one." · footer cites 15.13 |
| 3 | Rules detail | Verbatim 15.13, carded alone |
| 4 | #2 ECHO THE CALL | "The far end cannot guess." · footer cites 15.7 |
| 5 | Rules detail | Verbatim 15.7, carded alone |
| 6 | #3 BODY LANGUAGE COUNTS | "A signal is information, not a verdict." · footer cites 1.3.7 |
| 7 | Rules detail | Verbatim 1.3.7, carded alone |
| 8 | FIELD TIP | "Learn three to start." |
| 9 | Closing | "Lesson 73 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the three cards do

1. **15.13 — one sentence, and it says the whole first third.** Players are
   encouraged to use the WFDF Hand Signals to communicate all calls.
   Seventy-seven characters, two lines on the card. The point of carding it
   alone is that there is nothing to qualify: a standard signal exists for every
   common call and you are invited to use it.
2. **15.7 — the duty, and it is the long one.** A call that stops play must be
   communicated visibly or audibly as soon as players are aware of it, and all
   players should echo calls on the field. The rule also settles when a call
   counts as made if play stopped for a discussion instead. Nine lines carded,
   and worth the room, because "visibly" is the word that makes a hand signal a
   way of discharging a duty rather than a flourish.
3. **1.3.7 — body language, named in the rules.** Use respectful words and body
   language with consideration of potential cultural differences. It is carded
   third because it is the thing people do not expect to find in a rulebook,
   and because it is the answer to the obvious objection to the first two
   cards: if gestures cross a language barrier, they also carry tone across it.

**Layout — DRY-MEASURED, 2026-10-10.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 THERE IS A SIGNAL FOR IT` **733.2px** of the 900px column (81.5%),
  `#2 ECHO THE CALL` **455.3px** (50.6%),
  `#3 BODY LANGUAGE COUNTS` **701.0px** (77.9%). Cover `BEGINNER`
  **231.1px** at its own 32px; `FIELD TIP` **236.2px**.
- **Kicker 3 was shortened at draft time, before anything was queued.** The
  first draft read `BODY LANGUAGE COUNTS TOO` and measured **821.9px** of 900 —
  91.3%, the widest since reel-11's 873px, and about two tracked characters from
  starting the shrink. `fit_kicker()` would have held it at 34px, so this was
  not a layout failure; it was a draft with no headroom for a desk edit, which
  is the kind of thing worth fixing while the words are still mine to change.
  Dropping "TOO" costs nothing — the headline already carries the contrast —
  and buys 120.9px.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090 — the same steady-state geometry as reels 67–72. Bodies are 175,
  164 and 175 characters.
- **Scene 6's headline was lengthened to two lines deliberately.** "A signal is
  information." wrapped to one line, which started its body at y=734 and left
  that slide 78px out of step with scenes 2 and 4. ", not a verdict." takes it
  to two lines and puts all three main scenes on identical geometry. The reel
  reads as one object rather than three.
- **The cover title sets on one line at the standard 84px** — "Use your hands"
  measures **630.2px** of 900, 269.8px clear. No wrap, no shrink.
- Scene 8's tip body is 171 characters over four lines and ends at **884** of the
  1310 floor. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scene 3 reaches ink bottom **404** (15.13, 77 characters, two
  lines), scene 5 **754** (15.7, 348 characters, nine lines) and scene 7 **454**
  (1.3.7, 92 characters, three lines). **This is the most unevenly matched set
  of three cards the series has run**, and it is the shape of the source
  material rather than a drafting choice — 15.13 is one sentence and 15.7 is
  two long ones. All three are comfortably inside the floor.
- Citation number lines: `15.13` **65.0px** of 900, `15.7` **50.6px**, `1.3.7`
  **57.8px**.
- **Zero `_payload()` cases across all 34 emitted SVGs.** No element's text
  opens or closes on a straight double quote, so no `<tspan>` wrapper is
  emitted anywhere — checked by counting occurrences in the SVGs themselves.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.8s raw + transitions; house target ~30s, band 28–33s). Dead on target.
  Durations in `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Players are encouraged to use the WFDF Hand Signals to communicate all calls. There is a standard signal for every common call, and a gesture carries across wind and distance."
- Scene 4 — "A call that stops play has to be communicated visibly or audibly as soon as you are aware of it, and all players should echo calls on the field. Say it and sign it."
- Scene 6 — "Chapter 1 asks for respectful words and body language, with consideration of potential cultural differences. The same gesture can inform or accuse, and that part is up to you."
- Scene 8 (field tip) — "Travel, foul, and stall count. Those three cover most of what you will ever need to signal, and the rest you can pick up from the people on the field who already use them."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-72/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; **only the `SCENES` list differs** — `TOTAL` is 9 in both, since both
reels run three blocks. Verified by diffing the two files with their `SCENES`
blocks removed, which came back with **zero differing lines**. Copy `blend.py`
and `encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-73` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "The sideline is 40 metres away and the wind is loud. This is what your hands are for."
- Explanation: "Players are encouraged to use the WFDF Hand Signals to communicate all calls, and there is a standard signal for every common call. It matters more than it sounds: in international play your opponents may not share your language, and a gesture carries where a shout does not. A call that stops play has to be communicated visibly or audibly as soon as you are aware of it, and all players should echo calls on the field. Chapter 1 also asks for respectful words and body language, with consideration of potential cultural differences - so the same gesture can inform or accuse, and that part is up to you."
- Example: "You call a foul at the far end of the field. You say it and you sign it, and the players nearest you echo it with their hands up. Twelve people stop at the same time instead of four, and nobody plays on into a stoppage they never heard."
- CTA: "Lesson 73 of 75 - new lesson daily."

## Instagram caption

The sideline is 40 metres away and the wind is loud. This is what your hands are for.

One. There is a signal for it.

"Players are encouraged to use the WFDF Hand Signals to communicate all calls."

Players are encouraged to use the WFDF Hand Signals to communicate all calls. There is a standard signal for every common call, and a gesture carries across wind and distance.

Two. Echo the call.

"When a foul or violation call is made that stops play, players must stop play by visibly or audibly communicating the stoppage as soon as they are aware of the call and all players should echo calls on the field. If play has stopped for a discussion without any call having been made, a call is deemed to have been made when the discussion started."

A call that stops play has to be communicated visibly or audibly as soon as you are aware of it, and all players should echo calls on the field. Say it and sign it.

Three. Body language counts.

"use respectful words and body language with consideration of potential cultural differences;"

Chapter 1 asks for respectful words and body language, with consideration of potential cultural differences. The same gesture can inform or accuse, and that part is up to you.

Field note. Learn three to start: travel, foul, and stall count. Those three cover most of what you will ever need to signal.

Lesson 73 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (15.13, 15.7, 1.3.7). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

use your hands 🥏

the sideline is 40 metres away and the wind is loud. this is what your hands are for

one. there is a signal for it

"Players are encouraged to use the WFDF Hand Signals to communicate all calls."

players are encouraged to use the WFDF hand signals to communicate all calls. there is a standard signal for every common call, and a gesture carries across wind and distance

two. echo the call

"When a foul or violation call is made that stops play, players must stop play by visibly or audibly communicating the stoppage as soon as they are aware of the call and all players should echo calls on the field. If play has stopped for a discussion without any call having been made, a call is deemed to have been made when the discussion started."

a call that stops play has to be communicated visibly or audibly as soon as you are aware of it, and all players should echo calls on the field. say it and sign it

three. body language counts

"use respectful words and body language with consideration of potential cultural differences;"

chapter 1 asks for respectful words and body language, with consideration of potential cultural differences. the same gesture can inform or accuse, and that part is up to you

field note: learn three to start - travel, foul, and stall count. those three cover most of what you will ever need to signal

rule text from WFDF Rules of Ultimate 2025–2028 (15.13, 15.7, 1.3.7) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(15.13, 15.7, 1.3.7), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 73 of 75**, `hand-signals` in `content/lessons-3.json`, tag Spirit.
  Fills 2026-10-17, the only bare date in the seven-day window (2026-10-11
  through 2026-10-17).
- **Only three lessons remain in the curriculum** — 73 here, then 74 ("What
  clearly breaks Spirit") and 75 ("When the normal remedy isn't enough"). At one
  reel a day the lesson pool is exhausted on 2026-10-19, and the seven-day
  coverage target cannot be met from 2026-10-18 onward without a decision about
  what follows lesson 75. That is a question for the desk, not something this
  run should answer by inventing curriculum.
- **All three numbers are the lesson's own `rules` array**, in its order.
  Nothing was added for length and nothing is quoted that the lesson does not
  cite. Chapter 15 twice for the signals and the echo, chapter 1 for the body
  language.
- **1.3.7 is carded as the fragment it is.** It is a clause from chapter 1's
  list of player duties, so it opens lower-case and ends on a semicolon, and it
  is carded that way because that is byte-identical to `rules.json`. reel-56 set
  the precedent for carding a `1.3.x` clause, but it could quote the parent
  `1.3` stem alongside because `1.3` was in that lesson's `rules` array. It is
  not in this one, so the stem is not quoted and the slide's own prose does the
  framing instead.
- **Nothing here says a hand signal is required.** 15.13 encourages, and the
  copy says "encouraged". 15.7's duty is to communicate the stoppage visibly or
  audibly and to echo calls, and the copy says that. The two are kept apart in
  the slide body, the explanation beat and both captions.
- **15.7 was already carded once, on reel-35**, so its nine-line card is a known
  quantity rather than a new risk. At 348 characters it is the fifth-longest the
  series has carded, behind reel-47's 7.12 (492), reel-34's 17.1.1 (437),
  reel-28's 17.2.2 (381) and reel-10's 11.6 (357).
- **Kicker 3 shortened and headline 3 lengthened at draft time**, both for the
  reasons measured above: `BODY LANGUAGE COUNTS TOO` sat at 91.3% of the column
  with no headroom for a desk edit, and a one-line headline 3 would have put
  that slide's body 78px out of step with the other two.
- **The example beat and the lesson's quiz are the same case, deliberately** —
  the quiz asks why the rulebook encourages signals (answer: they communicate
  across distance and language barriers, and calls should be echoed so distant
  players know), and the example walks a far-end foul call being echoed so both
  halves land.
- **DRY-MEASURED 2026-10-10** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,602 of
  2,200** UTF-16 units (72.8%, under the 2,090 warn line), TikTok at **1,549 of
  4,000** (hashtags included in both figures, the way `check_caption.py` counts
  them). Projected duration 30.0s over 34 states. `render_v3.py` is committed
  here and is the exact file measured. SVG only; no PNGs, no frames, no cut.
- Zero `_payload()` quote-wrapper cases across all 34 emitted SVGs.
- Video still to render — the build run owns that, and only after the script
  clears gate 1.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
