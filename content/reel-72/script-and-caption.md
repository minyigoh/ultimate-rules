# Reel 72 — "Fixing your shoelace"

**Status:** Pending review
**Script drafted:** 2026-10-09 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-16 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (10.3, 19.3, 3.4)
**Source lesson:** `content/lessons-3.json` → `equipment-fix`

The lesson's hook is two sentences — "You can't stop play for it. You can use a
stoppage that's already happening." — and the cover card keeps both, because the
second half is the part that makes the first half usable. A rule that only said
no would leave you with a lace you are standing on.

**Three cards, each carded alone, in the lesson's `rules` order.** 10.3 is the
permission and its limit, 19.3 is what it costs if the fix takes you off the
field, and 3.4 is the kit that was never legal to begin with. That order is an
escalation — nuisance, substitution, illegal — and it is also the order the
lesson's `rules` array gives.

**This is a nine-scene reel**, the standard three-block shape, same as reels 69
and 70. `TOTAL` is 9 and the projection lands at exactly 30.0s, the house
target.

**What this reel is careful not to claim.** The lesson calls genuinely unsafe
equipment "a technical stoppage", and the lesson's `rules` array carries no
technical-stoppage number — so nothing on a citation card calls it one. 3.4 is
carded for what it actually says: that such kit may not be worn. Likewise 19.3
does not say a player must be substituted for faulty equipment; it says that
*if* one is, the opposition may also substitute one. The copy says exactly that
and no more.

---

## Video — `reel72-fixing-your-shoelace.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Fixing your shoelace" · kicker BEGINNER · LESSON 72 / 75 |
| 2 | #1 WAIT FOR A BREAK | "Borrow a stoppage, don't make one." · footer cites 10.3 |
| 3 | Rules detail | Verbatim 10.3, carded alone |
| 4 | #2 COMING OFF COSTS A SWAP | "The other team gets one too." · footer cites 19.3 |
| 5 | Rules detail | Verbatim 19.3, carded alone |
| 6 | #3 SOME KIT IS NEVER LEGAL | "Dangerous is a different question." · footer cites 3.4 |
| 7 | Rules detail | Verbatim 3.4, carded alone |
| 8 | FIELD TIP | "Double-knot before the game." |
| 9 | Closing | "Lesson 72 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the three cards do

1. **10.3 — the permission and the limit, in one sentence.** Any player may
   briefly extend a stoppage of play to fix faulty equipment, by calling
   "equipment", but active play may not be stopped for this purpose. Both halves
   are load-bearing and people usually remember only one of them.
2. **19.3 — the cost.** It sits in chapter 19, Safety Stoppages, alongside
   injury. If a player is substituted after an injury, or due to illegal or
   faulty equipment, the opposing team may also choose to substitute one player.
   So a kit problem big enough to take someone off changes both line-ups.
3. **3.4 — the kit that is never legal.** Chapter 3, Equipment. Nothing worn
   may reasonably harm the wearer or another player, or impede an opponent's
   ability to play. This is not the fix-it-at-the-next-break case at all, which
   is why it is carded third rather than folded into 10.3.

**Layout — DRY-MEASURED, 2026-10-09.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 WAIT FOR A BREAK` **540.4px** of the 900px column (60.0%),
  `#2 COMING OFF COSTS A SWAP` **763.4px** (84.8%),
  `#3 SOME KIT IS NEVER LEGAL` **731.3px** (81.3%). Cover `BEGINNER`
  **231.1px** at its own 32px; `FIELD TIP` **236.2px**.
- **`#2 COMING OFF COSTS A SWAP` at 763.4px is the widest kicker since
  reel-11's 873px**, and it is 136.6px clear of the column with the guard
  untouched. It is worth knowing that this one is the tight one if the kicker is
  ever edited at the desk — three more tracked characters would start the
  shrink.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090 — the same steady-state geometry as reels 67–71. Bodies are 163,
  163 and 167 characters.
- **The cover title wraps to two lines at the standard 84px** —
  "Fixing your" **452.7px** and "shoelace" **359.6px** of 900. On one line it
  would measure 835.6px, 64px inside the column, so the wrapper's break here is
  the wrapper being conservative rather than a hard constraint.
- Scene 8's tip body is 176 characters over four lines and ends at **962** of the
  1310 floor. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scenes 3, 5 and 7 all reach ink bottom **504** against the 1310
  floor. Carded lengths are 140, 142 and 146 characters, four lines each — the
  most evenly matched set of three the series has carded.
- Citation number lines: `10.3` **42.8px** of 900, `19.3` **42.8px**, `3.4`
  **30.6px**.
- **No `_payload()` case on this reel, which is worth stating because the copy
  contains a quoted call.** Scene 2's body quotes the word "equipment" and 10.3's
  own verbatim text carries curly quotes around it, but no element's text opens
  or closes on a straight double quote — checked across all 34 emitted SVGs,
  **0 occurrences** of the `<tspan>` wrapper. The curly quotes inside 10.3 are
  byte-identical to `rules.json` and are not touched by `esc()`.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.8s raw + transitions; house target ~30s, band 28–33s). Dead on target.
  Durations in `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Any player may briefly extend a stoppage that is already happening to fix faulty equipment, by calling "equipment". What you may not do is stop active play for it."
- Scene 4 — "If a player is substituted because of illegal or faulty equipment, the opposing team may also choose to substitute one player. A kit problem changes both line-ups."
- Scene 6 — "Nothing you wear may reasonably harm you or another player, or impede an opponent's ability to play. That is not a fix-it-later problem. It should not be on the field."
- Scene 8 (field tip) — "It is the whole solution to this rule. A lace tied properly in the warm-up never waits for a stoppage, and never takes you off the field for a swap the other team gets to match."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-71/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list and `TOTAL` differ — verified by diffing the
two files with their `SCENES` blocks removed, which came back differing on the
single line `TOTAL = 7` → `TOTAL = 9` and nothing else. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-72` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You can't stop play to fix your shoelace. But you can use a stoppage that is already happening, and that is the whole rule in one sentence."
- Explanation: "Any player may briefly extend a stoppage of play to fix faulty equipment, by calling "equipment". What you may not do is stop active play for it - a trailing lace or a slipping brace waits until the next natural break. If the problem is bad enough that a player is substituted for illegal or faulty equipment, the opposing team may also choose to substitute one player. And genuinely unsafe kit is a different question entirely: nothing you wear may reasonably harm you or another player, or impede an opponent's ability to play."
- Example: "Your lace comes undone mid-point. You play on. At the next stoppage - a call, a time-out, a goal - you say "equipment" and tie it, briefly. What you do not do is stop live play for it, and what you do not do is spend three more points standing on it."
- CTA: "Lesson 72 of 75 - new lesson daily."

## Instagram caption

You can't stop play to fix your shoelace. You can use a stoppage that is already happening.

One. Wait for a break.

"Any player may briefly extend a stoppage of play to fix faulty equipment (“equipment”), but active play may not be stopped for this purpose."

Any player may briefly extend a stoppage that is already happening to fix faulty equipment, by calling "equipment". What you may not do is stop active play for it. A trailing lace or a slipping brace waits until the next natural break.

Two. Coming off costs a swap.

"If a player is substituted after an injury, or due to illegal or faulty equipment, the opposing team may also choose to substitute one player."

If a player is substituted because of illegal or faulty equipment, the opposing team may also choose to substitute one player. A kit problem changes both line-ups, not just yours.

Three. Some kit is never legal.

"No player may wear items of clothing or equipment that reasonably could harm the wearer or other players, or impede an opponent's ability to play."

Nothing you wear may reasonably harm you or another player, or impede an opponent's ability to play. That is not a fix-it-later problem. It should not be on the field at all.

Field note. Double-knot before the game. It is the whole solution to this rule.

Lesson 72 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (10.3, 19.3, 3.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

fixing your shoelace 🥏

you can't stop play to fix it. you can use a stoppage that is already happening

one. wait for a break

"Any player may briefly extend a stoppage of play to fix faulty equipment (“equipment”), but active play may not be stopped for this purpose."

any player may briefly extend a stoppage that is already happening to fix faulty equipment, by calling "equipment". what you may not do is stop active play for it. a trailing lace waits until the next natural break

two. coming off costs a swap

"If a player is substituted after an injury, or due to illegal or faulty equipment, the opposing team may also choose to substitute one player."

if a player is substituted because of illegal or faulty equipment, the opposing team may also choose to substitute one player. a kit problem changes both line-ups, not just yours

three. some kit is never legal

"No player may wear items of clothing or equipment that reasonably could harm the wearer or other players, or impede an opponent's ability to play."

nothing you wear may reasonably harm you or another player, or impede an opponent's ability to play. that is not a fix-it-later problem - it should not be on the field at all

field note: double-knot before the game. it is the whole solution to this rule

rule text from WFDF Rules of Ultimate 2025–2028 (10.3, 19.3, 3.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(10.3, 19.3, 3.4), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 72 of 75**, `equipment-fix` in `content/lessons-3.json`, tag Game.
  Fills 2026-10-16, the only bare date in the seven-day window (2026-10-10
  through 2026-10-16).
- **All three numbers are the lesson's own `rules` array**, in its order.
  Nothing was added for length and nothing is quoted that the lesson does not
  cite. Chapter 10 for the permission, chapter 19 for the substitution,
  chapter 3 for the kit itself.
- **Nine scenes over three rules** — the standard shape, same as reels 69 and
  70. Projection 30.0s over 34 states, dead on the house target.
- **The reel does not call unsafe equipment a technical stoppage.** The lesson's
  prose does, and no technical-stoppage rule number is in its `rules` array, so
  no citation card says it. 3.4 is carded for what it says: such kit may not be
  worn. Nothing here cites a rule the lesson does not.
- **19.3 is stated conditionally, the way the rule is written.** It does not
  require a substitution for faulty equipment — it says that if a player *is*
  substituted after an injury or for illegal or faulty equipment, the opposing
  team may also choose to substitute one. The slide body, the explanation beat
  and both captions all keep the "if".
- **`#2 COMING OFF COSTS A SWAP` at 763.4px of the 900px column is the widest
  kicker since reel-11's 873px.** `fit_kicker()` still does not engage and it is
  136.6px clear, but it is the one to re-measure if that kicker is edited at the
  desk.
- **Three evenly matched rule cards** at 140, 142 and 146 characters, four lines
  each, all reaching ink bottom 504 of the 1310 floor. No card is near the
  floor and none is so short it leaves the slide empty.
- **The example beat and the lesson's quiz are the same case, deliberately** —
  the quiz asks what you can do when a shoe comes untied in live play (answer:
  wait for the next stoppage, then briefly extend it), and the example walks
  that beat so the "wait" and the "briefly" both land.
- **DRY-MEASURED 2026-10-09** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,549 of
  2,200** UTF-16 units (70.4%, under the 2,090 warn line), TikTok at **1,471 of
  4,000** (hashtags included in both figures, the way `check_caption.py` counts
  them). Projected duration 30.0s over 34 states. `render_v3.py` is committed
  here and is the exact file measured. SVG only; no PNGs, no frames, no cut.
- Zero `_payload()` quote-wrapper cases across all 34 emitted SVGs, despite the
  copy quoting the "equipment" call and 10.3's verbatim text carrying curly
  quotes around it.
- Video still to render — the build run owns that, and only after the script
  clears gate 1.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
