# Reel 63 — "Choosing ends at the start"

**Status:** Pending review
**Script drafted:** 2026-09-30 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-07 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (6.1, 6.1.1, 6.1.2, 6.2, 6.3)
**Source lesson:** `content/lessons-3.json` → `start-of-game`

Chapter 6 opens the game. Three rules, five numbers, and the whole of it is the
pre-pull conversation that most players have had a hundred times without ever
reading what it is supposed to settle. The lesson's own hook is "the coin flip,
formalised", and the script keeps that framing.

**Five rules, three cards, because 6.1 is a stem and not a sentence.** 6.1 ends
in a colon; 6.1.1 and 6.1.2 are its two branches. Carding them apart would put a
fragment on one slide and two orphaned clauses on another, so scene 3 carries
6.1 with both sub-items indented beneath it — the first time this pipeline has
carded a stem-plus-branches rule, and the reason `g_detail`'s tuple form exists.
6.2 and 6.3 are each a standalone sentence and get a card each. Every number in
the lesson's `rules` array is carded, and no number is introduced that the array
does not carry.

**The rule never names a method, and the script does not either.** 6.1 says
"fairly determine". A disc flip is the convention and the script calls it that;
saying the rules require a flip would be a paraphrase that invents a specificity
the rule deliberately leaves open.

**One choice each, not one choice in total.** This is the part players get wrong,
so it is its own topic block rather than a clause inside the first. 6.2 gives the
other team the remaining choice, which is why winning the flip does not hand you
both the receive and the ends.

**6.3 switches both selections, not just the ends.** "After every goal, you
switch ends" (lesson 61, posted 2026-09-28) covers the between-goals swap; this
is the half-time one, and it moves who pulls as well.

---

## Video — `reel63-choosing-ends-at-the-start.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Choosing ends at the start" · kicker BEGINNER · LESSON 63 / 75 |
| 2 | #1 SOMEBODY CHOOSES FIRST | "Two teams decide it fairly." · footer cites 6.1 · 6.1.1 · 6.1.2 |
| 3 | Rules detail | Verbatim 6.1 with 6.1.1 and 6.1.2 beneath it |
| 4 | #2 ONE CHOICE EACH | "The other team takes what's left." · footer cites 6.2 |
| 5 | Rules detail | Verbatim 6.2 |
| 6 | #3 BOTH SWITCH AT HALF | "Half time flips both choices." · footer cites 6.3 |
| 7 | Rules detail | Verbatim 6.3 |
| 8 | FIELD TIP | "Look at the flags before you choose." |
| 9 | Closing | "Lesson 63 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes.

### What the three cards do

1. **6.1 + 6.1.1 + 6.1.2 — the stem and its two branches.** One card, because
   6.1 alone is a fragment. The sub-numbers render as their own orange labels
   above their clauses, so the colon's two branches read as branches.
2. **6.2 — the half players forget.** One sentence, and it is what stops the
   flip winner taking both choices.
3. **6.3 — both selections switch.** Not just the ends: the pull moves too.

**Layout — DRY-MEASURED, 2026-09-30.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`): `#1 SOMEBODY CHOOSES
  FIRST` **750.2px** of the 900px column (83.4%), `#2 ONE CHOICE EACH`
  **519.6px** (57.7%), `#3 BOTH SWITCH AT HALF` **631.0px** (70.1%). All three
  inside the 873px high-water mark set by reel-11's "SIMULTANEOUS MEANS
  OFFENCE"; #1 is the widest kicker since. Cover `BEGINNER` **231.1px** at its
  own 32px. `FIELD TIP` **236.2px**.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 167, 164 and 165 characters. Scene 2's first draft
  ran 173 characters and wrapped to five lines — clean at **1012** with 78px
  clearance, but trimmed to four for the same margin as the other two.
- **The cover title wraps to two lines at the standard 84px** — **704.7px** and
  **331.4px** of 900. The cover is the tallest scene at 1210 because the
  `LESSON 63 / 75` line sits at its fixed y; the collision check is clean.
- Scene 8's tip body wraps to four lines and ends at **962** of the 1310 floor,
  348px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: the three-item card (scene 3) is much the taller at ink bottom
  **690** — a new high for a rules card, past reel-62's 640 — with scenes 5 and
  7 both at **404**, all against the 1310 floor. Carded lengths: 6.1 is 82
  characters, 6.1.1 is 48, 6.1.2 is 42 and 6.3 is 71. **6.2 is 45 characters and
  takes the shortest-carded record**, from reel-62's 3.1 at 56.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, 9 scenes,
  23.8s raw + transitions; house target ~30s, band 28–33s). Durations in
  `SCENES` are untouched placeholders — do not hand-tune them.
- **Captions measured, not estimated.** `tools/check_caption.py` exits 0:
  Instagram **1473 of 2,200** including hashtags (67.0%, well under the 2,090
  warn line), TikTok **1427 of 4,000**. Both plain text, no markdown, counted
  in UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "The rules do not say how. Representatives of the two teams fairly determine which of them chooses first, and a disc flip is the usual way rather than the required one."
- Scene 4 — "The team with first choice picks one thing: whether to receive or throw the initial pull, or which end zone to defend. The other team is given the remaining choice."
- Scene 6 — "At the start of the second half, both of those initial selections are switched. The team that received the first pull throws the second one, and the ends change too."
- Scene 8 (field tip) — "In heavy wind the end you defend is often worth more than receiving the pull. Check which way it is blowing while the representatives are still walking out."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-62/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed, which came back byte-identical. `TOTAL` is 9
in both. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-63` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Two captains walk out to flip a disc, and neither of them is completely sure what they are flipping for."
- Explanation: "Representatives of the two teams fairly determine which team chooses first. That team picks one of two things: whether to receive or throw the initial pull, or which end zone it will initially defend. The other team is given the remaining choice. At the start of the second half, both of those initial selections are switched."
- Example: "You win the flip and choose to receive. That is your whole choice — the other team now picks which end it defends. At half time you will be throwing the pull, and you will have swapped ends."
- CTA: "Lesson 63 of 75 — new lesson daily."

## Instagram caption

Somebody says "we'll flip for it" and somebody else says "flip for what, exactly". Chapter six answers that in three short lines.

First, who chooses.

"Representatives of the two teams fairly determine which team first chooses either:"

"whether to receive or throw the initial pull; or"

"which end zone they will initially defend."

Note what the rule does not say. It never names a method. A disc flip is the convention, not the requirement, and what the rule asks is that the two teams fairly determine it between them.

Second, what the other team gets.

"The other team is given the remaining choice."

So it is one choice each, not one choice in total. Win the flip and take the receive, and the other team picks the ends. Take the ends instead, and they pick who receives.

Third, half time.

"At the start of the second half, these initial selections are switched."

Both selections, not only the ends. The team that received the first pull throws the second one, and the ends change as well.

Field note. In heavy wind the end you defend is often worth more than receiving the pull. Look at the flags while the representatives are still walking out, so the decision is made before you get there.

Lesson 63 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (6.1, 6.1.1, 6.1.2, 6.2, 6.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

choosing ends at the start 🥏

somebody says "we'll flip for it" and somebody else says "flip for what, exactly". chapter six answers that in three short lines

first, who chooses

"Representatives of the two teams fairly determine which team first chooses either:"

"whether to receive or throw the initial pull; or"

"which end zone they will initially defend."

note what the rule doesn't say — it never names a method. a disc flip is the convention, not the requirement. what the rule asks is that the two teams fairly determine it between them

second, what the other team gets

"The other team is given the remaining choice."

so it's one choice each, not one choice in total. win the flip and take the receive, and the other team picks the ends. take the ends instead and they pick who receives

third, half time

"At the start of the second half, these initial selections are switched."

both selections, not only the ends. the team that received the first pull throws the second one, and the ends change as well

field note: in heavy wind the end you defend is often worth more than receiving the pull. look at the flags while the reps are still walking out, so the decision is made before you get there

lesson 63 of 75

rules from WFDF Rules of Ultimate 2025–2028 (6.1, 6.1.1, 6.1.2, 6.2, 6.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (6.1, 6.1.1, 6.1.2, 6.2, 6.3).
