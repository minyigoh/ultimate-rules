# Reel 65 — "No boosting, no props"

**Status:** Pending review
**Script drafted:** 2026-10-02 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-09 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (12.10, 13.2, 13.2.6, 13.2.7, 13.7, 13.7.4)
**Source lesson:** `content/lessons-3.json` → `assisted-catch`

The lesson's own hook is "Yes, someone had to write this down", and the script
keeps it. One sentence in chapter 12 bans both halves — lifting a team-mate and
using an object — and chapters 13 supply the consequence and the restart spot.

**Three cards, three chapters' worth of one idea.** 12.10 is the prohibition and
applies to everyone on the field. 13.2.6 and 13.2.7 are the turnover entries and
apply only to the offence. 13.7.4 is the restart location, which is the part
players get wrong even when they know the rest.

**Two stems carried for legibility, as on reel-64.** 13.2 ends in a colon and
13.2.6 / 13.2.7 are two of its branches; 13.7 ends in a colon and 13.7.4 is one
of its branches. Carded alone those branches open mid-sentence in lower case
("an offensive player intentionally assists…", "the offensive player was
located…") and read as fragments, so each card carries its stem with the
sub-numbers indented beneath it — `g_detail`'s tuple form, the same shape
reel-14, reel-63 and reel-64 used. **12.10 is carded alone**: it is depth 2 and a
complete sentence, so it needs no stem.

The lesson's `rules` array is 12.10, 13.2.6, 13.2.7 and 13.7.4. **13.2 and 13.7
are stems, not new citations** — both quoted verbatim from `rules.json` like
everything else. Every card footer cites only what its own card quotes.

**Scene 5 is the first card in the series to carry a stem plus two branches.**
13.2.6 and 13.2.7 are a matched pair in the same list, and splitting them across
two topic blocks would have made two slides that say the same thing twice. The
block form is already supported — `g_detail` takes a list of items and renders a
tuple as an indented sub-number — it had just never been given two.

---

## Video — `reel65-no-boosting-no-props.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "No boosting, no props" · kicker BEGINNER · LESSON 65 / 75 |
| 2 | #1 NO LIFTING, NO GADGETS | "You cannot help a team-mate up." · footer cites 12.10 |
| 3 | Rules detail | Verbatim 12.10, carded alone |
| 4 | #2 THE OFFENCE LOSES IT | "Doing it costs you the disc." · footer cites 13.2 · 13.2.6 · 13.2.7 |
| 5 | Rules detail | Verbatim 13.2 with 13.2.6 and 13.2.7 beneath it |
| 6 | #3 WHERE PLAY RESTARTS | "Back at the player who was helped." · footer cites 13.7 · 13.7.4 |
| 7 | Rules detail | Verbatim 13.7 with 13.7.4 beneath it |
| 8 | FIELD TIP | "Well-meant still counts." |
| 9 | Closing | "Lesson 65 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card.

### What the three cards do

1. **12.10 — the prohibition.** One sentence, both halves, everybody on the
   field. No physically assisting another player's movement; no equipment or
   object used to assist in contacting the disc.
2. **13.2 + 13.2.6 + 13.2.7 — the turnover.** The same two acts, listed as
   turnovers, and listed only for *offensive* players. 13.2.6 is the lift,
   13.2.7 is the prop.
3. **13.7 + 13.7.4 — the restart.** Where the offensive player was, not where
   the disc came down. The one that costs real metres.

**Layout — DRY-MEASURED, 2026-10-02.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; all three main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 NO LIFTING, NO GADGETS` **704.8px** of the 900px column (78.3%),
  `#2 THE OFFENCE LOSES IT` **650.0px** (72.2%),
  `#3 WHERE PLAY RESTARTS` **655.6px** (72.8%). Cover `BEGINNER` **231.1px** at
  its own 32px; `FIELD TIP` **236.2px**. Comfortably inside reel-64's #2 at
  814.3px and reel-11's 873px high-water mark.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** All three
  main scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090. Bodies are 173, 175 and 173 characters.
- **Scene 4's body was shortened at the draft gate, and the measurement is why.**
  Its first draft was 185 characters, wrapped to five lines and landed its last
  baseline at **1012** — inside the limit, but 78px of clearance against the
  128px the other two carry. It was reworded to 175 characters and four lines
  before anything went to the desk. Copy is free to give here precisely because
  it is unapproved; once the desk stamps it, the type shrinks instead.
- **The cover title wraps to two lines at the standard 84px** — **639.2px** and
  **233.3px** of 900. The second line is one word, the least even-weighted cover
  since reel-63; the full string measures ~895px of real ink, so it would just
  fit on one line, but `wrap_lines()` is character-count based and breaks it.
  Left as the wrapper emits it rather than hand-forced, and the collision check
  is clean.
- Scene 8's tip body wraps to three lines and ends at **884** of the 1310 floor,
  426px clear. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: **scene 5 is the tallest rules card the pipeline has produced, at
  ink bottom 840** — past reel-64's 722 — because it is the first to carry a stem
  plus two branches. Scene 7 is **572** and scene 3 is **504**, all against the
  1310 floor. Carded lengths: 12.10 is 136 characters, 13.2 is 124, 13.2.6 is 84,
  13.2.7 is 85, 13.7 is 49, 13.7.4 is 70. **13.7 at 49 characters is the second
  shortest stem carded**, behind reel-64's 18.2.4 at 30.
- Citation number lines: `12.10` **65.0px** of 900 — the shortest footer the reel
  series has carried — `13.2 · 13.2.6 · 13.2.7` **270.1px**, and
  `13.7 · 13.7.4` **160.4px**.
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

- Scene 2 — "One sentence covers both halves. You may not physically assist another player's movement, and you may not use an item of equipment or an object to help you contact the disc."
- Scene 4 — "When an offensive player is the one assisting, the rulebook lists it as a turnover. It has two entries: boosting a team-mate to catch a pass, and using an object to catch one."
- Scene 6 — "The turnover location is not where the disc lands and not where the throw came from. It is where the offensive player was, which is usually further back than anyone expects."
- Scene 8 (field tip) — "Helping hands are the common case, not the silly one. If you would lift a team-mate to reach a high disc, or push off one to jump higher, do not."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-64/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; only the `SCENES` list differs — verified by diffing the two files
with their `SCENES` blocks removed, which came back byte-identical. `TOTAL` is 9
in both. Copy `blend.py` and `encode.py` in from reel-46 — they are generic and
unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-65` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "There is a rule in the book that says you may not lift a team-mate into the air to catch a disc, and it is there because people tried it."
- Explanation: "One sentence bans both halves: no physically assisting another player's movement, and no using equipment or an object to help you contact the disc. When an offensive player does either one, the turnover list has an entry for it — one for assisting a team-mate's movement to catch a pass, one for using an object to catch a pass."
- Example: "A team-mate boosts you up and you take a high pass. It is not a great catch, it is a turnover, and play restarts where you were standing when they lifted you — not where the disc came down."
- CTA: "Lesson 65 of 75 — new lesson daily."

## Instagram caption

Somebody had to write this one down. You may not boost a team-mate into the air to catch a disc, and you may not use an object to help you catch one.

The prohibition is one sentence, and it applies to everybody on the field.

"No player may physically assist the movement of another player, nor use an item of equipment or object to assist in contacting the disc."

Both halves at once: the helping hand and the piece of kit.

If the offence does it, the disc is gone.

"A turnover that transfers possession of the disc from one team to the other, and results in a stoppage of play, occurs when:"

"an offensive player intentionally assists a team-mate’s movement to catch a pass; or"

"an offensive player uses an item of equipment or object to assist in catching a pass."

Two separate entries, one for the lift and one for the prop. Pushing off a team-mate to jump higher is the lift, in practice.

Those two entries are offence-only. A defender who does the same thing commits a violation rather than handing over a turnover, and the intended receiver is awarded possession.

And play restarts further back than people expect.

"After a turnover, the turnover location is where:"

"the offensive player was located, in the case of 13.2.6 and 13.2.7; or"

Not where the disc came down, and not where the throw was released. Where the offensive player who was helped was standing.

Field note. Helping hands are the common case here, not the silly one. If you would lift a team-mate to reach a high disc, or push off one to get higher, do not.

Lesson 65 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (12.10, 13.2, 13.2.6, 13.2.7, 13.7, 13.7.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

no boosting, no props 🥏

yes, someone had to write this down. you can't lift a team-mate to catch a high one, and you can't use an object to help you catch it

the prohibition is one sentence, and it applies to everybody

"No player may physically assist the movement of another player, nor use an item of equipment or object to assist in contacting the disc."

if the offence does it, the disc is gone

"A turnover that transfers possession of the disc from one team to the other, and results in a stoppage of play, occurs when:"

"an offensive player intentionally assists a team-mate’s movement to catch a pass; or"

"an offensive player uses an item of equipment or object to assist in catching a pass."

two separate entries — one for the lift, one for the prop. pushing off a team-mate to jump higher is the lift, in practice

those entries are offence-only. a defender doing the same thing is a violation instead, and the intended receiver gets the disc

and it restarts further back than people expect

"After a turnover, the turnover location is where:"

"the offensive player was located, in the case of 13.2.6 and 13.2.7; or"

not where the disc came down, not where the throw went from. where the offensive player who was helped was standing

field note: helping hands are the common case here, not the silly one. if you'd lift a team-mate to reach a high disc, don't

rule text from WFDF Rules of Ultimate 2025–2028 (12.10, 13.2, 13.2.6, 13.2.7, 13.7, 13.7.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(12.10, 13.2, 13.2.6, 13.2.7, 13.7, 13.7.4), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 65 of 75**, `assisted-catch` in `content/lessons-3.json`, tag
  Turnovers. Fills 2026-10-09, the only bare date in the seven-day window
  (2026-10-03 through 2026-10-09).
- **13.2 and 13.7 are stems carried for legibility**, not citations added to the
  lesson's `rules` array. Precedent: reel-14, reel-63 and reel-64 all carded a
  stem above its branches for the same reason. All six numbers are quoted
  verbatim from `rules.json`.
- **Scene 5 is the first stem-plus-two-branches card in the series.** 13.2.6 and
  13.2.7 are a matched pair in one list; splitting them over two topic blocks
  would have duplicated the slide. `g_detail` already supported it.
- **The offence-only distinction is 12.10's own annotation, not an added rule.**
  `rules.json` records that a defender who assists a team-mate's movement or uses
  equipment commits a violation, with possession awarded to the intended
  receiver, rather than conceding a turnover. Both captions say so; no slide
  does.
- **"Pushing off a team-mate to jump higher" is 13.2.6's annotation**, also from
  `rules.json`. It is the practical form of the rule and is the phrasing both
  captions use.
- **DRY-MEASURED 2026-10-02** — `check_layout.py` 9 scenes, 0 problems, exit 0;
  `check_caption.py` exit 0. `render_v3.py` is committed here and is the exact
  file measured. SVG only; no PNGs, no frames, no cut. This is the first draft
  run since 2026-09-08 able to run the layout guard at all — the old local
  sandbox could not — so these are emitted numbers rather than estimates.
- Scene 5 at ink bottom 840 is a new tallest-rules-card high for the pipeline,
  past reel-64's 722, and still 470px clear of the 1310 floor.
- The lesson's quiz answer and the script's example beat are the same case (a
  boost makes the catch a turnover, not a great catch), deliberately — it is the
  one players get wrong.
- No growth/reach claims in either caption.
