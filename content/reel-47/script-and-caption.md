# Reel 47 — Pulls that go out of bounds: the brick

**Status:** Pending review
**Script drafted:** 2026-09-14 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-21 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (7.12, 2.5, 7.11)
**Source lesson:** `content/lessons-3.json` → `brick`

Second reel of the pull block. Reel 46 covered the pull you touch and do not
catch. This one covers the pull nobody touches at all — the one that crosses
the sideline in the air — and the choice the rulebook hands you when it does.
Reel 46's notes deliberately left 7.11 and the brick out of scope and pointed
here; this is that material.

---

## Video — `reel47-brick.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40, 41, 42, 43, 44,
45 and 46.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Pulls that go out of bounds: the brick · kicker BEGINNER · LESSON 47 / 75 |
| 2 | #1 STRAIGHT OUT, YOU CHOOSE | "A pull that never lands in gives you a choice." · footer cites 7.12 |
| 3 | Rules detail | Verbatim 7.12, one block |
| 4 | #2 THE CROSSED LINES | "The brick mark is already on the field." · footer cites 2.5 |
| 5 | Rules detail | Verbatim 2.5, one block |
| 6 | #3 LANDED IN? NO CHOICE | "Land it in, roll it out, and the choice is gone." · footer cites 7.11 |
| 7 | Rules detail | Verbatim 7.11, one block |
| 8 | FIELD TIP | "Signal the brick before you touch the disc." |
| 9 | Closing | "Lesson 47 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card. All three rule numbers come from the lesson's
own `rules` array; no deviation this time, unlike reel-46's carded 13.1.

### What the three cards do

1. **7.12 — the choice, and the condition on it.** Out of bounds without first
   touching the field or an offensive player. Then it is the brick mark nearest
   your defending end zone, or the central zone nearest where it went out. The
   rule also carries the signalling requirement, which is why the field tip
   needs no second citation.
2. **2.5 — what a brick mark actually is.** The lesson's hook is "those crossed
   lines finally make sense", so the deck has to show the reader the thing.
   Crossed one-metre lines, midway between the sidelines, one end-zone length in
   from a goal line. This is a Playing Field rule, not a Pull rule, and it is
   the only non-chapter-7 card in the reel.
3. **7.11 — the case that is not a brick, which is the one people get wrong.**
   Landed in, rolled out, untouched: no choice at all, you take it where it
   crossed. Card 3 exists because the brick is the memorable half and beginners
   over-apply it.

**Do not put the 18-metre figure on any card or in either caption.** "One
end-zone length" is what 2.5 says and it is what ships; the metric value is a
different rule and is not cited here.

**Do not mention 7.11.1** (the pull that *does* contact an offensive player
before going out). That is reel-46's territory — touching the pull — and
carding it here would blur the clean split between the two reels.

**Layout — DRY-MEASURED, 2026-09-14.** First real measurement since 09-08. The
draft run now has Pillow, the Liberation Sans fonts and `tools/check_layout.py`,
so these are emitted numbers, not estimates. Measured on SVG only — no PNGs, no
frames, no cut. The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 STRAIGHT OUT, YOU CHOOSE` 787.9px of the 900px column, `#2 THE CROSSED
  LINES` 572.5px, `#3 LANDED IN? NO CHOICE` 653.8px. Cover `BEGINNER` 231.1px at
  its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** Last
  baselines: scene 2 at 1012, scene 4 at 1012, scene 6 at 962, against the
  `CITE_Y - 60` limit of 1090. Tightest margin is 78px.
- **This is the second draft of those three bodies, and the first one measured
  badly.** The v1 wording put scene 2 at 33px and scenes 4 and 6 at 29px — the
  80% floor exactly, with scene 4's last baseline landing on 1090, the limit
  itself. One more character would have raised `SystemExit`. The copy was
  shortened here, at the draft gate, which is the only place shortening is
  allowed; once this is approved the rule is shrink the type, never reword.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` below are the untouched placeholders
  — do not hand-tune them.

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "If it sails out without first touching the field or an offensive
  player, you choose where the point starts: the brick mark nearest the end zone
  you are defending, or the central zone closest to where it went out."
- Scene 4 — "It is a pair of crossed one-metre lines, midway between the
  sidelines, one end-zone length in from a goal line. There is one at each end.
  You take the one nearest the end zone you are defending."
- Scene 6 — "The brick is only on offer if the pull never touched down. If it
  lands in the field and then rolls out untouched, you start where it first
  crossed the perimeter line instead."
- Scene 8 (field tip) — "The brick is only binding if it is signalled before the
  disc is picked up. One arm fully extended overhead, and call it. Do that on
  the walk in, while the disc is still lying there, and nobody has to argue
  about whether you claimed it in time."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-47` — read
`tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-45/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix.

---

## Script (~30s)

- Hook: "Those crossed lines in the middle of the field finally make sense."
- Explanation: "They're the brick marks. If a pull goes out of bounds without first touching the field or one of your players, you choose where to start: the brick mark nearest the end zone you're defending, or the spot on the central zone closest to where it went out."
- Example: "So the pull sails over the sideline. Raise one arm, call 'brick', and walk to the cross — that's the middle of the field instead of a trapped sideline start. But if it lands in first and then rolls out, there's no choice at all: you take it where it crossed. And the brick only counts if you signalled it before you picked the disc up."
- CTA: "Lesson 47 of 75 — new lesson daily."

## Instagram caption

Those crossed lines in the middle of the field finally make sense.

They are the brick marks, and they matter exactly once: when a pull goes out without ever touching down.

"If the disc contacts the out-of-bounds area without first touching the playing field or an offensive player, the thrower may establish a pivot point either at the brick mark closest to their defending end zone, or at the location on the central zone closest to where the disc went out-of-bounds (Section 11.8). The binding brick option must be signalled before the disc is picked up. It must be signalled by any offensive player fully extending one arm overhead, and they should call “brick”."

So: the brick mark, or the spot nearest where it crossed. Your choice.

The brick is usually better. It puts the disc in the middle instead of on a sideline with a mark already on you.

And the mark is already out there. Nobody paints it for the occasion:

"The brick marks are the intersection of two (2) crossed one (1) metre lines in the central zone, located a distance equal to the length of the end zone away from each goal line, midway between the sidelines."

One at each end. Take the one nearest the end zone you are defending.

Now the part that catches people out. It only applies to a pull that never touched down.

"If the disc initially contacts the playing field and then becomes out-of-bounds without contacting an offensive player, the thrower must establish a pivot point where the disc first crossed the perimeter line, or the nearest location in the central zone if that pivot point would be in their defending end zone."

Landed in, then rolled out? No brick. You start where it crossed.

One more thing, and it is the bit that gets argued about: signal it before you pick the disc up. One arm overhead, and call it, on the walk in.

Lesson 47 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (7.12, 2.5, 7.11). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

those crossed lines in the middle of the field? they finally make sense 🥏

they're the brick marks, and they matter exactly once: when a pull goes out of bounds without ever touching down

"If the disc contacts the out-of-bounds area without first touching the playing field or an offensive player, the thrower may establish a pivot point either at the brick mark closest to their defending end zone, or at the location on the central zone closest to where the disc went out-of-bounds (Section 11.8). The binding brick option must be signalled before the disc is picked up. It must be signalled by any offensive player fully extending one arm overhead, and they should call “brick”."

your choice: the brick mark, or the spot nearest where it crossed

brick is usually better — middle of the field instead of trapped on a sideline

and the mark is already out there:

"The brick marks are the intersection of two (2) crossed one (1) metre lines in the central zone, located a distance equal to the length of the end zone away from each goal line, midway between the sidelines."

one at each end. take the one nearest the end zone you're defending

now the bit people get wrong ↓ this only applies if the pull never touched down

"If the disc initially contacts the playing field and then becomes out-of-bounds without contacting an offensive player, the thrower must establish a pivot point where the disc first crossed the perimeter line, or the nearest location in the central zone if that pivot point would be in their defending end zone."

landed in, then rolled out? no brick. you start where it crossed 🚫

and signal it BEFORE you pick the disc up. one arm overhead, call it, do it on the walk in

lesson 47 of 75

rules from WFDF Rules of Ultimate 2025–2028 (7.12, 2.5, 7.11) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(7.12, 2.5, 7.11).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **DRY-MEASURED 2026-09-14** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are emitted,
  not estimated. This is the first measured draft since 2026-09-08.
- **No deviation from the lesson's `rules` array.** All three carded numbers —
  7.12, 2.5, 7.11 — are in it, and every footer cites only what its own card
  quotes.
- **Preserve the rulebook's own punctuation.** 7.12 ends `they should call
  “brick”.` — curly doubles, before the full stop — and 2.5 carries the
  rulebook's parenthesised numerals, `two (2) crossed one (1) metre lines`. Both
  read oddly and both are correct; they must survive to the PNG unchanged. 7.12
  also carries an internal cross-reference, `(Section 11.8)`, which stays in for
  the same reason.
- **7.12 is the longest rule text carded on any reel so far** — 492 characters,
  12 wrapped lines at 38px, last baseline 904 of 1310. It fits with room, but it
  is a dense card; scene 3's hold is the standard detail hold and has not been
  hand-tuned.
- **Do not add the 18-metre end-zone figure.** 2.5 says "a distance equal to the
  length of the end zone" and that is what ships. The metric dimension lives in
  a rule this reel does not cite.
- **Do not reach for 7.11.1.** The pull that contacts an offensive player before
  going out is reel-46's subject. Keeping it out is what makes 46 and 47 a clean
  pair rather than two overlapping reels.
- Instagram caption **2,079 characters** including hashtags (94.5% of the 2,200
  limit); TikTok 1,907 of 4,000. Both plain text, both scanned clean of
  markdown, both measured in UTF-16 units by `tools/check_caption.py`, which
  exits 0.
- **The first draft of this caption was 2,209 and failed the gate by 9
  characters.** It was trimmed in seven places, all of them prose. Not one word
  of a rule quotation, the attribution line, the hashtag set or the "Lesson 47
  of 75" line was touched — those are load-bearing and they stay.
- **The IG caption is deliberately close to the limit** — three long verbatim
  quotations is the most any reel has carried, and the quotations are the part
  that cannot give. It sits just under the 95% warn line. If anything is added
  to this caption at review, something else has to come out, and it must be
  prose, never a quotation, the attribution line, the hashtags or the lesson
  line.
- Curriculum position: lesson 47 is index 13 of `content/lessons-3.json`, the
  next unused lesson after 46. It covers 2026-09-21, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
