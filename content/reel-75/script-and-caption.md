# Reel 75 — "When the normal remedy isn't enough"

**Status:** Pending review
**Script drafted:** 2026-10-12 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-10-19 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (1.2, 1.2.1)
**Source lesson:** `content/lessons-3.json` → `egregious`

**This is the last lesson in the curriculum.** Lesson 75 of 75, and with it the
75-lesson course is complete. Nothing in this script says what follows, because
nothing has been decided — see the note at the bottom, which is the one thing in
this file that needs an answer rather than a read.

The lesson is the rulebook's release valve, and the reel is built as the two
halves of that idea in the order the rulebook puts them: 1.2 is the normal
remedy, 1.2.1 is the exception to it. Naming the normal case first is what makes
the exception legible — "even one that isn't in the rules" means nothing until
you know what the rules would otherwise have done.

**Two cards, two rule numbers, so this is a seven-scene reel.** `TOTAL` is 7,
the two-block shape fourteen reels already use — 2, 4, 11, 17, 19, 24, 29, 33,
34, 37, 49, 61, 68 and 71. The lesson's `rules` array holds exactly two numbers and both are carded;
nothing outside the array is quoted anywhere.

**Card order is rulebook order, not array order.** The array reads
`["1.2.1", "1.2"]`; the cards run 1.2 then 1.2.1, which is how `rules.json`
orders them and how the lesson's own `body` argues it. Same call reel-74 made in
grouping six numbers the way the rulebook groups them — the array fixes *which*
numbers may be quoted, not the sequence they are read in.

**What this reel is careful not to claim.** It never says a captain can award
whatever they like: 1.2.1 is a *discussion between captains*, and both the slide
body and the field tip say so. It does not present the end-zone goal as a rule —
it is the rulebook's own annotated example, so the script carries it in the
example beat and in the caption's prose, never on a citation card. And it does
not soften 1.2 into "breaking the rules is fine": the rule's premise is that
nobody breaks them intentionally, which is exactly why the deliberate case needs
its own clause.

---

## Video — `reel75-when-the-normal-remedy-isnt-enough.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "When the normal remedy isn't enough" · kicker BEGINNER · LESSON 75 / 75 |
| 2 | #1 THE NORMAL REMEDY | "Most breaches just get rewound." · footer cites 1.2 |
| 3 | Rules detail | Verbatim 1.2, carded alone |
| 4 | #2 THE RELEASE VALVE | "Deliberate is a different case." · footer cites 1.2.1 |
| 5 | Rules detail | Verbatim 1.2.1, carded alone |
| 6 | FIELD TIP | "This is rare on purpose." |
| 7 | Closing | "Lesson 75 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` — never
paraphrased on a citation card. Verified after emission: the 38px cream runs in
both card SVGs reassemble to the exact `rules.json` strings.

### What the two cards do

1. **1.2 — the normal remedy, and why there is one.** "It is trusted that no
   player will intentionally break the rules; thus there are no harsh penalties
   for inadvertent breaches, but rather a method for resuming play in a manner
   which simulates what would most likely have occurred had there been no
   breach." Seven wrapped lines, carded alone. This is the rule the whole reel
   is measured against, and it has to land before the exception means anything.
2. **1.2.1 — the exception, in the rulebook's own words.** "If there is a
   deliberate or egregious breach of the rules or Spirit of the Game, the
   captains should discuss this and determine an appropriate outcome, even if
   that outcome is not in accordance with a specific rule." Six wrapped lines,
   carded alone. The slide body adds what "egregious" means, which the lesson
   takes from this rule's annotation; the card quotes only the rule.

**1.2.1's annotation is not quoted.** `rules.json` carries a long `ann` block on
1.2.1 — the egregious-breach definition, four worked examples and the cheating
note — and none of it is rule text. The lesson paraphrases the definition in its
own `body`, so the slide and the caption use the lesson's wording for it and the
citation card stays verbatim rule only. The rule applied is Step 1's and it
needs no precedent: what goes on a card is `RULE[num]["text"]` and nothing
else.

**Layout — DRY-MEASURED, 2026-10-12.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory outside the repo. **SVG only — no PNGs,
no frames, no cut.** The build run owns rendering.

- `tools/check_layout.py` on all seven scenes: **7 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  **1210** of the 1310 floor; both main scenes sit at **1192**.
- **Kickers clear at the standard 34px; `fit_kicker()` does not engage.**
  Measured on the real label (`#N` + NBSP×3 + `tracked()`):
  `#1 THE NORMAL REMEDY` **598.9px** of the 900px column (66.5%),
  `#2 THE RELEASE VALVE` **578.2px** (64.2%). Cover `BEGINNER` **231.1px** at
  its own 32px; `FIELD TIP` **236.2px**. Both main kickers are ~274px short of
  reel-11's 873px high-water mark, so a desk edit has room.
- **Bodies clear at the standard 36px; `fit_body()` does not engage.** Both main
  scenes take a 2-line headline, start their body at y=812 and wrap to four
  lines: last baseline **962**, clearance **128px** against the `CITE_Y - 60`
  limit of 1090 — identical to the geometry reel-74 measured yesterday, which is
  what a 2-line headline plus a 4-line body always gives. Bodies are 165 and 147
  characters.
- **The cover title sets on two lines at the standard 84px** — "When the normal"
  **681.4px** of 900, "remedy isn't enough" **818.1px**. No shrink. That is the
  fourth-widest cover line in the catalogue — reel-53's "The shape of a game"
  holds the high-water mark at 830.9px — and it clears the column by 81.9px.
- Scene 6's tip body is 146 characters over four lines and ends at **884** of
  the 1310 floor. `g_tip()` carries no citation line, so `BODY_LIMIT` is not its
  constraint.
- Rules cards: scene 3 reaches ink bottom **654** (1.2, 253 characters over
  seven wrapped lines, widest line 760.5px) and scene 5 **604** (1.2.1, 215
  characters over six lines, widest 714.2px). Both well inside the floor, and
  both the only block on their card.
- Citation number lines on the `g_main` footers: `1.2` **36.1px** of 900,
  `1.2.1` **57.8px**. The narrowest footers in the series — this lesson cites
  two numbers where reel-74 cited six.
- **Zero `_payload()` cases across all 27 emitted SVGs.** No element's text opens
  or closes on a straight double quote, so no `<tspan>` wrapper is emitted
  anywhere — counted in the SVGs themselves. Neither 1.2 nor 1.2.1 contains a
  quote mark of any kind, and the cover's only apostrophe is mid-word.
- Projected duration **28.8s** from `retime()`/`fit()` (27 states, 7 scenes,
  24.05s raw + transitions; house target ~30s, band 28–33s). Two blocks rather
  than three put it at the low end of the band — `fit()` clamps at k=1.5 and
  cannot stretch the holds any further, which is the clamp doing its job rather
  than a reel to pad. Inside the band, so nothing is dropped and nothing is
  hand-tuned. Durations in `SCENES` are untouched placeholders.
- **Captions measured, not estimated.** The figures are in the Notes below, in
  UTF-16 units.
- **These are the emitted numbers, not estimates.**

**The three slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "The rules assume nobody cheats, so there are no harsh penalties for an inadvertent breach. Play resumes in a way that simulates what would most likely have happened."
- Scene 4 — "If a breach is deliberate or egregious, the captains discuss it and determine an appropriate outcome - even one that no specific rule provides for."
- Scene 6 (field tip) — "It exists for the cases where applying the normal rule would reward cheating. It is a captains' conversation, not a call you can make on your own."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was copied from `content/reel-74/render_v3.py`, so
it carries the `tracked()` non-breaking-space word-gap fix and the `_payload`
quote fix; **only the `SCENES` list and `TOTAL` differ** — 7 here against 9
there, since this reel runs two blocks and that one ran three. Verified by
diffing the two files with their `SCENES` blocks removed and `TOTAL`
normalised, which came back with **zero differing lines**. Copy `blend.py` and
`encode.py` in from reel-46 — they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-75` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~29s)

- Hook: "The rules have a release valve for genuinely bad behaviour. Most people never need it."
- Explanation: "Normally there is no punishment for breaking a rule. The rulebook trusts that nobody breaks one on purpose, so instead of a penalty you get a method for resuming play that simulates what would most likely have happened without the breach. Deliberate is a different case. If a breach of the rules or of Spirit is deliberate or egregious, the captains should discuss it and determine an appropriate outcome - even one that is not in accordance with a specific rule. Egregious means a breach you would not normally expect in a game of ultimate, or one with no reasonable justification in the rules."
- Example: "A defender commits a dangerous foul on a receiver who is about to catch a goal. The normal remedy gives that receiver the disc at the spot of the foul, which rewards the foul. The captains can agree the goal stands instead. That is the valve, and it is two captains talking, not one player deciding."
- CTA: "Lesson 75 of 75 - the last lesson in the course."

## Instagram caption

The rules have a release valve for genuinely bad behaviour. Most people never need it.

One. The normal remedy.

"It is trusted that no player will intentionally break the rules; thus there are no harsh penalties for inadvertent breaches, but rather a method for resuming play in a manner which simulates what would most likely have occurred had there been no breach."

The rules assume nobody cheats, so there are no harsh penalties for an inadvertent breach. Play resumes in a way that simulates what would most likely have happened.

Two. The release valve.

"If there is a deliberate or egregious breach of the rules or Spirit of the Game, the captains should discuss this and determine an appropriate outcome, even if that outcome is not in accordance with a specific rule."

If a breach is deliberate or egregious, the captains discuss it and determine an appropriate outcome - even one that no specific rule provides for. Egregious means a breach you would not normally expect in a game of ultimate, or one with no reasonable justification in the rules.

Worked through. A defender commits a dangerous foul on a receiver about to catch a goal. The normal remedy hands that receiver the disc at the spot, which rewards the foul. The captains can agree the goal stands instead.

Field note. This is rare on purpose. It exists for the cases where applying the normal rule would reward cheating, and it is a captains' conversation, not a call you can make on your own.

Lesson 75 of 75 - the last lesson in the course.

Rule text: WFDF Rules of Ultimate 2025–2028 (1.2, 1.2.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee

## TikTok caption

when the normal remedy isn't enough 🥏

the rules have a release valve for genuinely bad behaviour. most people never need it

one. the normal remedy

"It is trusted that no player will intentionally break the rules; thus there are no harsh penalties for inadvertent breaches, but rather a method for resuming play in a manner which simulates what would most likely have occurred had there been no breach."

the rules assume nobody cheats, so there are no harsh penalties for an inadvertent breach. play resumes in a way that simulates what would most likely have happened

two. the release valve

"If there is a deliberate or egregious breach of the rules or Spirit of the Game, the captains should discuss this and determine an appropriate outcome, even if that outcome is not in accordance with a specific rule."

if a breach is deliberate or egregious, the captains discuss it and determine an appropriate outcome - even one that no specific rule provides for. egregious means a breach you would not normally expect in a game of ultimate

worked through: a defender commits a dangerous foul on a receiver about to catch a goal. the normal remedy hands that receiver the disc at the spot, which rewards the foul. the captains can agree the goal stands instead

field note: this is rare on purpose. it exists for the cases where applying the normal rule would reward cheating, and it is a captains' conversation, not a call you can make on your own

lesson 75 of 75 - the last lesson in the course

rule text from WFDF Rules of Ultimate 2025–2028 (1.2, 1.2.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(1.2, 1.2.1), pulled from `content/rules.json` rather than typed.

---

## Notes

- **Lesson 75 of 75**, `egregious` in `content/lessons-3.json`, tag Spirit.
  Fills 2026-10-19, the only bare date in the seven-day window (2026-10-13
  through 2026-10-19).
- **THE CURRICULUM IS NOW EXHAUSTED, AND THIS NEEDS A DECISION FROM THE DESK.**
  This is the last of the 75 lessons in `lessons-1.json`, `-2` and `-3`. Every
  one of the 75 now carries a calendar row. From **2026-10-20** there is no next
  lesson to draft, so the seven-day coverage target in Step 1 cannot be met —
  not because anything failed, but because the course is finished. reel-73
  raised this on 2026-10-10 and reel-74 on 2026-10-11; it binds tomorrow.
  The draft run will not answer it by inventing curriculum: rule text only ever
  comes from `rules.json`, and new *lessons* are not this run's to write.
  Options, for the desk to choose between, not for this run to pick: a second
  pass at a different depth, a rules-by-chapter series over the parts of
  `rules.json` no lesson cites, a Q&A or quiz format off the `quiz` fields
  already in the lesson JSON, or simply a lower posting cadence. Until one is
  chosen the calendar will drain at one row a day from 2026-10-20.
- **The daily-cadence sign-off is a related question, flagged not answered.**
  Every caption to date ends "Follow @learn.ultimatefrisbee — one lesson a day",
  and `g_closing()` renders "One rule a day, five minutes at a time" on the
  final slide of every reel. On the *last* lesson that line promises something
  the curriculum cannot currently keep. This caption therefore ends with the
  bare follow line and no cadence claim, and the CTA beat reads "the last lesson
  in the course" rather than "new lesson daily" — a close variant of the house
  CTA, and the only honest one here. `g_closing()` is a shared constant and has
  **not** been touched; whether the closing slide's line needs to change is a
  desk decision, not a draft-run edit.
- **Two cards, both numbers in the lesson's `rules` array, carded in rulebook
  order.** 1.2 before 1.2.1 because the exception is unreadable without the
  normal case. Seven scenes, which is the established two-block shape.
- **1.2.1's annotation block is not quoted anywhere.** The egregious definition
  and the end-zone example both come from that annotation, which is not rule
  text, so they appear in the lesson's own wording in the slide body, the
  explanation beat and the caption prose — never on a citation card. Both cards
  reassemble byte-identically to `rules.json`.
- **The example beat is the rulebook's own worked case**, in the lesson's
  wording: a dangerous foul on a receiver about to score, where the normal
  remedy would reward the foul. It closes on the thing beginners get wrong about
  this rule — it is two captains talking, not one player deciding.
- **DRY-MEASURED 2026-10-12** — `check_layout.py` 7 scenes, 0 problems, exit 0;
  Instagram caption plus hashtags **1,733 of 2,200** UTF-16 units (78.8%, under
  the 2,090 warn line), TikTok **1,684 of 4,000** (hashtags included in both
  figures, the way `check_caption.py` counts them). Projected duration 28.8s
  over 27 states. `render_v3.py` is committed here and is the exact file
  measured. SVG only; no PNGs, no frames, no cut.
- Video still to render — the build run owns that, and only after the script
  clears gate 1.
- Captions are plain text, no markdown.
- No growth/reach claims in either caption.
