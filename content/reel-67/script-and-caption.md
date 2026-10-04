# Reel 67 — "Claiming space legally"

**Status:** Pending review
**Script drafted:** 2026-10-04 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-11 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.5, 12.5.1, 12.4, 12.9)
**Source lesson:** `content/lessons-3.json` → `positioning`

The lesson's own hook is "Where you're allowed to stand, and when you can't move
there.", and the script keeps its shape. All four numbers sit in chapter 12, so
this is one chapter's answer to one question rather than three chapters
converging.

**Three cards, and the first one is a parent with its own sub-rule.** 12.5 is
the permission — any unoccupied position, subject to two conditions. 12.5.1 is
the single restriction that only exists while the disc is in the air, and it is
12.5's own child. 12.4 is the same idea read from the other side: a position you
already hold is defended. 12.9 is the limit on how much space one body may
claim.

**One stem-and-branch card, and it is the plain case.** 12.5.1 opens on
"However" and carded alone would read as a fragment, so it is carded beneath
12.5 using `g_detail`'s tuple form — the same shape reel-14, reel-63, reel-64
and reel-65 used. The difference from reel-65 is that **12.5 is not a stem
carried for legibility: it is a cited rule in its own right**, a complete
sentence, and one of the lesson's four numbers. The rulebook nests 12.5.1 under
it, so the card nests it too. Nothing here is a citation added beyond the
lesson's `rules` array.

**The block order is the lesson's `rules` order, not rule-number order.** The
array is 12.5, 12.5.1, 12.4, 12.9, so the permission comes before the thing that
narrows it and before the mirror-image protection. Leading with 12.4 would open
the reel on a defence before the audience knows what is being defended.

---

## Video — `reel67-claiming-space-legally.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Claiming space legally" · kicker BEGINNER · LESSON 67 / 75 |
| 2 | #1 FREE SPACE IS YOURS | "Stand where nobody is standing." · footer cites 12.5 · 12.5.1 |
| 3 | Rules detail | Verbatim 12.5 with 12.5.1 beneath it |
| 4 | #2 FIRST THERE IS PROTECTED | "A spot you hold is yours to keep." · footer cites 12.4 |
| 5 | Rules detail | Verbatim 12.4, carded alone |
| 6 | #3 NO ARMS, NO LEGS | "Your body, not your wingspan." · footer cites 12.9 |
| 7 | Rules detail | Verbatim 12.9, carded alone |
| 8 | FIELD TIP | "Play the disc, not the lane." |
| 9 | Closing | "Lesson 67 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the three cards do

1. **12.5 + 12.5.1 — the permission and its one in-flight limit.** Any position
   no opponent already holds, so long as you do not initiate contact getting
   there and are not moving recklessly or dangerously. Then: once the disc is
   up, you may not move solely to deny an opponent an unoccupied path to play
   it.
2. **12.4 — the mirror image.** A player in an established position is entitled
   to remain there and must not be contacted. The first clause is the half
   players quote; the second is the half that matters.
3. **12.9 — the wingspan limit.** Extended arms and legs may not be used to
   obstruct an opponent's movement. This is the one that answers "but I got
   there first" when the body did and the arm did not.

**Layout — DRY-MEASURED, 2026-10-04.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 FREE SPACE IS YOURS` **625.5px** of the 900px column (69.5%),
  `#2 FIRST THERE IS PROTECTED` **767.1px** (85.2%),
  `#3 NO ARMS, NO LEGS` **540.4px** (60.0%). Cover `BEGINNER` **231.1px** at its
  own 32px; `FIELD TIP` **222.2px**. #2 is the widest kicker since reel-64's
  814.3px and still inside reel-11's 873px high-water mark.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 172, 161 and 173 characters.
- **Scene 2's body was shortened at the draft gate, and the measurement is why.**
  Its first draft was 178 characters, wrapped to five lines and landed its last
  baseline at **1012** — inside the limit, but 78px of clearance where the other
  two carry 128px. That is the identical figure reel-65 scene 4 produced and was
  reworded for. "in the air" became "up" and "provided" became "as long as",
  taking it to 172 characters and four lines before anything went to the desk.
  Copy is free to give here precisely because it is unapproved; once the desk
  stamps it, the type shrinks instead.
- **The cover title wraps to two lines at the standard 84px** — **616.2px** and
  **261.5px** of 900. Three words, so the wrapper's break is the only sensible
  one and nothing was hand-forced.
- Scene 8's tip body wraps to three lines and ends at **962** of the 1310 floor,
  348px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: **scene 3 is the tallest rules card the pipeline has produced, at
  ink bottom 872** — past reel-65 scene 5's 840 — because 12.5 is the longest
  single rule the series has carded and it carries a branch underneath. Scene 5
  is **504** and scene 7 is **454**, all against the 1310 floor. Carded lengths:
  12.5 is 234 characters, 12.5.1 is 158, 12.4 is 123, 12.9 is 93. **12.5 at 234
  characters is the longest rule text carded in the series**, past 13.2's 124 as
  a stem and reel-66's 13.12.
- Citation number lines: `12.5 · 12.5.1` **160.4px** of 900, `12.4` **50.6px**
  and `12.9` **50.6px** — the two shortest footers the reel series has carried,
  level with each other.
- **No `_payload()` case on this reel.** No element's text opens or closes on a
  double quote, so the `<tspan>` quote wrapper is engaged nowhere — checked
  across all 34 emitted SVGs, 0 cases.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.8s raw + transitions; house target ~30s, band 28–33s). Durations in
  `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0 — the
  measured figures are in the Notes below, in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "You may take any spot an opponent is not already in, as long as you do not initiate contact getting there. Once the disc is up, you may not move purely to block their path."
- Scene 4 — "Being there already is a position the rules defend. A player in an established position may stay in it, and an opponent may not contact them to take it off them."
- Scene 6 — "Occupying space with where you stand is legal. Doing it with an outstretched arm or a trailing leg is not, when what it does is obstruct where an opponent is trying to move."
- Scene 8 (field tip) — "Under a floaty disc, move to where the disc is going, not to where your opponent wants to run. If you are not playing the disc, you are only blocking a path."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-66/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed, which came back byte-identical. `TOTAL` is 9
in both. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-67` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "You are allowed to stand almost anywhere on the field. The rulebook spends four lines on the exceptions, and one of them only applies while the disc is in the air."
- Explanation: "Any position an opponent is not already occupying is yours, provided you do not initiate contact getting there and are not moving recklessly or dangerously. A player already in an established position may stay in it and must not be contacted. The one time that freedom narrows is while the disc is in the air: you may not move solely to stop an opponent taking an unoccupied path to play it."
- Example: "A floaty throw goes up and you slide across your opponent's running lane without ever looking at the disc. You did not touch them, and it is still illegal — you moved to block the route rather than to play the disc."
- CTA: "Lesson 67 of 75 — new lesson daily."

## Instagram caption

Where are you actually allowed to stand? Almost anywhere.

Any patch of field an opponent is not already standing in is yours to take. There are two conditions on getting there.

"Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner."

Reckless has a meaning here, not just a tone: running without looking where you are going for an extended period, or diving in a way that leaves you unable to adjust to an opponent's legal movement.

Once the disc is in the air, one thing is taken away.

"However when the disc is in the air a player may not move in a manner solely to prevent an opponent from taking an unoccupied path to make a play on the disc."

Moving to block the route rather than to play the disc is illegal, and it is the one people get wrong under a floaty throw.

A spot you already hold is protected the other way round.

"A player in an established position is entitled to remain in that position and must not be contacted by an opposing player."

Being there first is a position the rules defend; an opponent may not contact you to move you off it.

And there is a limit on how much space your body can claim.

"Players may not use their extended arms or legs to obstruct the movement of opposing players."

Arms and legs are not considered extended during normal running and jumping, so this is about the deliberate wing, not your stride.

Field note. Under a floaty disc, move to where the disc is going, not to where your opponent wants to run. If you are not playing the disc, you are only blocking a path.

Lesson 67 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (12.5, 12.5.1, 12.4, 12.9). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

claiming space legally 🥏

where are you allowed to stand? almost anywhere an opponent isn't already standing

two conditions on getting there

"Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner."

reckless has a meaning here, not just a tone: running without looking for an extended period, or diving so you can't adjust to an opponent's legal movement

once the disc is in the air, one thing is taken away

"However when the disc is in the air a player may not move in a manner solely to prevent an opponent from taking an unoccupied path to make a play on the disc."

moving to block the route instead of playing the disc is illegal. this is the one people get wrong under a floaty throw

and a spot you already hold is protected

"A player in an established position is entitled to remain in that position and must not be contacted by an opposing player."

being there first is a position the rules defend. an opponent can't contact you to move you off it

there's also a limit on how much space your body claims

"Players may not use their extended arms or legs to obstruct the movement of opposing players."

arms and legs aren't considered extended during normal running and jumping — this is the deliberate wing, not your stride

field note: under a floaty disc, move to where the disc is going, not to where your opponent wants to run

rule text from WFDF Rules of Ultimate 2025–2028 (12.5, 12.5.1, 12.4, 12.9) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(12.5, 12.5.1, 12.4, 12.9), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 67 of 75**, `positioning` in `content/lessons-3.json`, tag Contact.
  Fills 2026-10-11, the only bare date in the seven-day window (2026-10-05
  through 2026-10-11).
- **All four numbers are the lesson's own `rules` array.** Unlike reel-14,
  reel-63, reel-64 and reel-65, no stem was added for legibility — 12.5 is both
  the parent of 12.5.1 and a cited rule in its own right, so the stem-and-branch
  card quotes nothing extra.
- **12.5 is the longest rule text the series has carded**, at 234 characters, and
  scene 3 is correspondingly the tallest rules card at ink bottom 872. Still
  438px clear of the 1310 floor.
- **"Reckless" is defined in `rules.json`, not by this script.** 12.5 carries an
  annotation — running without looking where you are going for an extended
  period, or diving in a way that does not allow you to adjust to an opponent's
  legal movement — and both captions use it. No slide does.
- **"Not considered extended during normal running and jumping" is 12.9's own
  annotation**, also from `rules.json`. It is the clarification that stops the
  rule reading as a ban on having arms, and both captions carry it.
- **DRY-MEASURED 2026-10-04** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0, Instagram caption plus hashtags at **1,972 of
  2,200** UTF-16 units (89.6%, under the 2,090 warn line), TikTok at **1,726 of
  4,000**. `render_v3.py` is committed here and is the exact file measured. SVG
  only; no PNGs, no frames, no cut.
- **The Instagram caption was cut at the draft gate to buy headroom.** The first
  draft measured 2,085 with hashtags — passing, but five units under the 2,090
  warn line and one edit from it. A paragraph restating 12.5's two conditions in
  plain words went, since the verbatim quote directly above already says them.
  Nothing load-bearing was touched: all four rule quotations, the attribution
  line, the fixed hashtag set and the "Lesson 67 of 75" line are intact.
- The lesson's quiz answer and the script's example beat are the same case
  (sliding into a running lane without playing the disc), deliberately — it is
  the one players get wrong, and 12.5.1 is the only rule in the set that is
  conditional on the disc being in the air.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
