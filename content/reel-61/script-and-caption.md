# Reel 61 — "Stopping a disc that's rolling away"

**Status:** Pending review
**Script drafted:** 2026-09-28 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-05 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (8.4, 8.4.1)
**Source lesson:** `content/lessons-3.json` → `stopping-a-roller`

Back to Turnovers after the Game run of reels 57–60, and the smallest lesson in
a while: two sentences of rulebook, one of which exists only to limit the other.
The account has taught what happens when possession changes and where the disc
is picked up; it has never taught the few seconds before that, while the disc is
still moving and everybody is waiting.

**The lesson is the pair, not either rule alone.** Rule 8.4 is a permission and
reads as though it has no downside — any player may stop a roller. Rule 8.4.1 is
the price, and without it 8.4 would be an invitation to kick the disc toward
your own end. Carded separately and in order, they make the point on their own:
you may do this, and here is why doing it dishonestly gains you nothing.

**Both rules in the lesson's `rules` array are carded, one card each.** No
number is introduced that the array does not carry. This is the two-pair,
seven-scene shape — the same as reel-49 — rather than the three-pair nine-scene
shape of reels 43–48 and 50–60, because the lesson cites two rules and padding
it to three would mean introducing a rule the lesson does not teach.

**"Significantly alters" is the rulebook's own vagueness and it stays vague.**
The rule sets no distance and no test, and the script does not supply one. The
prose says "a long way" and "significantly", never a number of metres — inventing
a threshold would be a paraphrase with extra precision, which is the worst kind.
The quiz in the lesson JSON uses ten metres as an illustration and the script's
example beat does the same, framed as an instance rather than a boundary.

**It is a request, not a penalty.** 8.4.1 says the opposition *may request* that
the pivot be established at the contact point. Nothing is automatic, nothing is
a turnover, and nobody has fouled. Every mention of it in the script is worded
as an ask.

---

## Video — `reel61-stopping-a-roller.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Stopping a disc that's rolling away" · kicker BEGINNER · LESSON 61 / 75 |
| 2 | #1 ANYONE MAY STOP IT | "Either team can halt a roller." · footer cites 8.4 |
| 3 | Rules detail | Verbatim 8.4 |
| 4 | #2 MOVING IT HAS A COST | "Shift it far and the pivot goes back." · footer cites 8.4.1 |
| 5 | Rules detail | Verbatim 8.4.1 |
| 6 | FIELD TIP | "Stop it, then accept the reset." |
| 7 | Closing | "Lesson 61 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rule its own card quotes.

### What the two cards do

1. **8.4 — the permission, and how wide it is.** One sentence. "Any player"
   means either team, which is the part people get wrong: the instinct is that
   touching a live-ish disc must belong to somebody, and it does not.
2. **8.4.1 — the price, and that it is a request.** The opposition *may request*
   the pivot at the contact point. This is what stops 8.4 being exploitable, and
   it is also why stopping a roller honestly costs you nothing.

**Layout — DRY-MEASURED, 2026-09-28.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all seven scenes: **7 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; both main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 ANYONE MAY STOP
  IT` **599.0px** of the 900px column (66.6%), `#2 MOVING IT HAS A COST`
  **642.5px** (71.4%). Both are comfortably inside the 873px high-water mark set
  by reel-11's "SIMULTANEOUS MEANS OFFENCE", and are the two narrowest kickers
  drafted since reel-56. Cover `BEGINNER` **231.1px** at its own 32px.
  `FIELD TIP` **236.2px**.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** Both main
  scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 173 and 164 characters.
- **The cover title wraps to two lines at the standard 84px** — **625.4px** and
  **729.5px** of 900. The cover is still the tallest scene at 1210 because the
  `LESSON 61 / 75` line sits at its fixed y; the collision check is clean.
- Scene 6's tip body wraps to four lines and ends at **962** of the 1310 floor,
  348px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: 8.4.1 is the taller at ink bottom **554** (scene 5) against the
  1310 floor, with **454** (scene 3, 8.4) behind it. 8.4 is 90 characters and
  8.4.1 is 198 — 8.4 is the shortest rule the pipeline has carded.
- Projected duration **28.8s** from `retime()`/`fit()` (27 states, 7 scenes,
  24.05s held + 4.75s transitions; house target ~30s, band 28–33s). Seven-scene
  reels sit at the low end of the band by construction — reel-49, the only other
  one in the recent run, shipped at 28.3s. Durations in `SCENES` are untouched
  placeholders — do not hand-tune them.
- **These are the emitted numbers, not estimates.**

**The three slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Once a disc has hit the ground and is rolling or sliding, any player on either team may try to stop it. It is not interference, and nobody has to stand back and watch it go."
- Scene 4 — "If stopping the disc significantly alters where it ends up, the opposition may ask for the pivot at the spot you touched it. Booting it downfield gains you nothing."
- Scene 6 (field tip) — "Chasing a disc into the next pitch wastes everyone's time, so stopping a roller is a courtesy. If you moved it a long way doing it, expect the pivot to go back and do not argue."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-60/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list and `TOTAL` differ — verified by diffing the
two files with their `SCENES` blocks removed and `TOTAL` normalised. `TOTAL` is
7. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-61` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~29s)

- Hook: "A disc is rolling away across the next pitch and nobody is chasing it, because half the field is not sure whether they are allowed to."
- Explanation: "Any player, on either team, may try to stop a disc that is rolling or sliding after it has hit the ground. That is the whole permission, and it is deliberately wide. The check on it is the next line: if stopping the disc significantly alters where it ends up, the opposition may ask for the pivot point to be set where the disc was contacted."
- Example: "You stop a roller but knock it ten metres closer to your own end zone. It is not a turnover and nobody has fouled — the other team simply asks for the pivot at the spot you touched it, and the ten metres go back."
- CTA: "Lesson 61 of 75 — new lesson daily."

## Instagram caption

A disc skips out of the back of the end zone and keeps rolling toward the car park. Someone jogs over and stops it with a foot. That is in the rulebook, and so is what happens next.

Two short rules cover the whole thing.

First, who is allowed to stop it.

"Any player may attempt to stop a disc from rolling or sliding after it has hit the ground."

Any player. Either team. There is no rule that makes you stand and watch a disc roll away from the pitch, and stopping one is not interference.

Second, what it costs if you move it.

"If, in attempting to stop such a disc, a player significantly alters the disc’s position, the opposition may request that the pivot point be established at the location where the disc was contacted."

That is the balance. You may stop it, but if stopping it shifts the disc a long way, the other team can ask for the pivot at the spot you first touched it. So there is nothing to gain from booting a roller back toward your own end. It just gets reset.

Field note. Stopping a roller is a courtesy and it speeds the game up, so do it. If you moved the disc a long way in the process, expect the pivot to go back and do not argue about it.

Lesson 61 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (8.4, 8.4.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

stopping a disc that's rolling away 🥏

a disc skips out the back and keeps rolling toward the car park. someone jogs over and stops it with a foot. that's in the rulebook, and so is what happens next

two short rules cover the whole thing

first, who is allowed to stop it

"Any player may attempt to stop a disc from rolling or sliding after it has hit the ground."

any player. either team. there's no rule that makes you stand and watch a disc roll away from the pitch, and stopping one isn't interference

second, what it costs if you move it

"If, in attempting to stop such a disc, a player significantly alters the disc’s position, the opposition may request that the pivot point be established at the location where the disc was contacted."

that's the balance. you may stop it, but if stopping it shifts the disc a long way, the other team can ask for the pivot where you first touched it. so there's nothing to gain from booting a roller back toward your own end — it just gets reset

field note: stopping a roller is a courtesy and it speeds the game up, so do it. if you moved it a long way doing it, expect the pivot to go back and don't argue

lesson 61 of 75

rules from WFDF Rules of Ultimate 2025–2028 (8.4, 8.4.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (8.4, 8.4.1).
