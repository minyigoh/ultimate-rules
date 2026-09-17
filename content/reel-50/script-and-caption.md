# Reel 50 — "Injury stoppages"

**Status:** Pending review
**Script drafted:** 2026-09-17 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-24 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (19.1.1, 19.1.2, 19.1.3, 19.1.4, 19.1.5, 19.1.6)
**Source lesson:** `content/lessons-3.json` → `injury`

Third reel of the stoppages block, and the first appearance of chapter 19 on the
account. Reel 48 established the seventy-five-second time-out and reel 49 the
penalty for calling one you do not have; this is the other way a live point stops
deliberately. Lessons 51 and 52 (technical stoppages and blood, substitutions)
follow from here and are deliberately not pre-empted: nothing on screen explains
how a substitution works, only that being substituted is one of the two prices
of an injury nobody caused.

---

## Video — `reel50-injury-stoppages.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 43–48. All six rule numbers in the lesson's
`rules` array are carded, two per card.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Injury stoppages" · kicker BEGINNER · LESSON 50 / 75 |
| 2 | #1 ANYONE ON YOUR TEAM | "You don't have to be the one who is hurt." · footer cites 19.1.1 · 19.1.5 |
| 3 | Rules detail | Verbatim 19.1.1, then 19.1.5 |
| 4 | #2 IT COSTS YOU SOMETHING | "No opponent caused it? Sub, or a time-out." · footer cites 19.1.2 · 19.1.3 |
| 5 | Rules detail | Verbatim 19.1.2, then 19.1.3 |
| 6 | #3 THE DISC IS STILL YOURS | "The injury made you drop it? You keep it." · footer cites 19.1.4 · 19.1.6 |
| 7 | Rules detail | Verbatim 19.1.4, then 19.1.6 |
| 8 | FIELD TIP | "Do not stop a disc in mid-flight." |
| 9 | Closing | "Lesson 50 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` via `rt()` —
never paraphrased on a citation card. Every rule number used anywhere in this
post comes from the lesson's own `rules` array, and every card footer cites only
the rules its own card quotes.

### What the three cards do

1. **19.1.1 + 19.1.5 — who calls it, and when it counts.** The call belongs to
   the injured player's own team, not the opposition, and the stoppage is
   treated as having happened at the moment of the injury rather than the moment
   anyone got the word out. Those two belong together: the second is what makes
   a slightly late call harmless.
2. **19.1.2 + 19.1.3 — the price.** An injury an opponent did not cause costs a
   substitution or a time-out; one an opponent did cause costs nothing, and the
   player may stay on. Pairing them is the whole point — the rule is a fork, and
   a card showing one branch would read as the general case.
3. **19.1.4 + 19.1.6 — the disc.** A disc dropped because of the injury stays
   with the thrower; a disc already in the air stays live until it is caught or
   lands. Both answer "what happens to the play", which is the question a
   beginner actually has once somebody is down.

**Nothing here touches substitutions themselves.** 19.1.2 names being
substituted as one of the two options and the reel quotes it verbatim, but how a
substitution is made is lesson 52 and gets its own reel. Do not add a rule
number from chapter 12 at review — it is not in this lesson's `rules` array.

**The field tip is 19.1.6 restated in plain language, deliberately.** `g_tip()`
carries no citation footer, so the tip cannot cite a rule; it is the second half
of card 3 said again as advice, which is why card 3 quotes 19.1.6 rather than
leaving it to the tip alone.

**Layout — DRY-MEASURED, 2026-09-17.** Emitted numbers from
`tools/check_layout.py` and `render_v3.py`'s own auto-fit functions, run against
the finished SVGs in a scratch directory. **SVG only — no PNGs, no frames, no
cut.** The build run owns rendering.

- `tools/check_layout.py` on all nine scenes: **9 scenes checked, 0 problems**,
  exit 0. No margin overflow, no collision. Tallest scene is the cover at
  1210 of the 1310 floor.
- **Kickers all clear at the standard 34px; `fit_kicker()` does not engage.**
  `#1 ANYONE ON YOUR TEAM` 655.7px of the 900px column, `#2 IT COSTS YOU
  SOMETHING` 719.9px, `#3 THE DISC IS STILL YOURS` 708.6px. Cover `BEGINNER`
  231.1px at its own 32px. `FIELD TIP` 236.2px.
- **Bodies all clear at the standard 36px; `fit_body()` does not engage.** All
  three main scenes: 2-line headline, body starts at y=812, four lines, last
  baseline **962** against the `CITE_Y - 60` limit of 1090. Clearance 128px on
  each.
- Scene 8's tip body ends at 1012 of the 1310 floor, 298px clear. `g_tip()`
  carries no citation line, so `BODY_LIMIT` is not its constraint.
- Rules cards have the most room of any scene: last baselines 772 (scene 3),
  722 (scene 5) and 922 (scene 7) against the 1310 floor. Scene 7 is the
  heaviest rule card on the account so far — 19.1.6 is 290 characters, the
  longest single rule this reel quotes — and still finishes 388px clear.
- **This is the second draft of the three main scenes, and the first one
  measured badly.** In v1 the scene 4 and scene 6 headlines wrapped to three
  lines and both bodies then landed on **1090 — the limit exactly, zero
  clearance, one character from `SystemExit`.** That is the reel-49 v1 defect
  repeated. Each headline was cut to two lines and each body from five wrapped
  lines to four, here at the draft gate, which is the only place shortening is
  allowed. Once this is approved the rule is shrink the type, never reword.
- Projected duration **30.0s** from `retime()`/`fit()` (34 states, house target
  ~30s, band 28–33s). Durations in `SCENES` are untouched placeholders — do not
  hand-tune them.

**The four slide bodies**, recorded here so the render is reproducible rather
than re-derived from the beats:

- Scene 2 — "Any player on the injured player's team can call \"Injury\", and so
  can the player who is hurt. The stoppage counts from the moment of the injury,
  not the moment of the call."
- Scene 4 — "If an opponent did not cause it, the injured player must either be
  substituted or charge their own team a time-out. If an opponent did cause it,
  they may simply stay on."
- Scene 6 — "If you had established possession and the injury made you drop the
  disc, you keep it. If the disc was in the air when the call came, play carries
  on until it is caught or lands."
- Scene 8 (field tip) — "Calling it the instant somebody goes down and freezing
  everyone is the instinct, and it is the one thing this rule tells you not to
  do. If the disc is in the air, let the play finish. Then stop."

**`render_v3.py` is committed in this folder and is the exact file the numbers
above were measured from.** It was adapted from `content/reel-46/render_v3.py`,
so it carries the `tracked()` non-breaking-space word-gap fix; only the `SCENES`
list differs. `TOTAL` is 9. Copy `blend.py` and `encode.py` in from reel-46 —
they are generic and unchanged.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
On Windows, `python tools\win_render.py reel-50` — read
`tools/WINDOWS_FALLBACK.md` first.

---

## Script (~30s)

- Hook: "Somebody goes down. Who is allowed to stop the game, and what does stopping it cost you?"
- Explanation: "Anyone on the injured player's team can call \"Injury\", and so can the injured player. The stoppage counts from the moment of the injury, not the moment someone got the word out."
- Example: "Then the price. If an opponent did not cause the injury, that player must either come off or charge their own team a time-out. If an opponent did cause it, they can simply stay on. And the disc is looked after either way — if the injury made them drop it, they keep it. One thing not to do: if the disc is already in the air when the call comes, let the play finish."
- CTA: "Lesson 50 of 75 — new lesson daily."

## Instagram caption

What happens when someone goes down, and what it costs your team.

Somebody rolls an ankle. Play has to stop, and almost nobody on a beginner team knows who is allowed to stop it or what happens after.

Who can call it:

"An injury stoppage, “Injury”, may be called by the injured player, or by any player on the injured player’s team."

Note whose team. The opposition cannot call it for you. And the stoppage counts from the moment of the injury, not the moment somebody got the word out.

Then the cost, which is the part people get wrong:

"If the injury was not caused by an opponent, the player must choose either to be substituted, or to charge their own team with a time-out."

An injury nobody caused is not free. You come off, or your team spends a time-out. If an opponent did cause it, that choice disappears and you may simply stay on.

The disc is looked after:

"If the injured player had established possession of the disc, and the player has dropped the disc due to the injury, that player retains possession of the disc."

And one thing not to do. If the disc is already in the air when the call comes, play carries on until someone catches it or it hits the ground. Freezing everyone mid-flight is the instinct, and it is exactly what the rule tells you not to do. Let the play finish, then stop.

None of this is about being tough. The rule exists so that stopping for an injury is a normal, unembarrassing thing to do, with a known price attached.

Lesson 50 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (19.1.1, 19.1.2, 19.1.3, 19.1.4, 19.1.5, 19.1.6). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

injury stoppages 🥏

somebody rolls an ankle. play has to stop — but who's allowed to stop it, and what does it cost?

who can call it:

"An injury stoppage, “Injury”, may be called by the injured player, or by any player on the injured player’s team."

note whose team. the opposition can't call it for you. and the stoppage counts from the moment of the injury, not the moment someone got the word out

then the cost, the part people get wrong:

"If the injury was not caused by an opponent, the player must choose either to be substituted, or to charge their own team with a time-out."

an injury nobody caused isn't free. you come off, or your team spends a time-out. if an opponent DID cause it, that choice disappears and you can just stay on

the disc is looked after:

"If the injured player had established possession of the disc, and the player has dropped the disc due to the injury, that player retains possession of the disc."

and one thing not to do 🚫 if the disc is already in the air when the call comes, play carries on until someone catches it or it hits the ground. freezing everyone mid-flight is the instinct and it's exactly what the rule says not to do

lesson 50 of 75

rules from WFDF Rules of Ultimate 2025–2028 (19.1.1, 19.1.2, 19.1.3, 19.1.4, 19.1.5, 19.1.6) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028 (19.1.1,
19.1.2, 19.1.3, 19.1.4, 19.1.5, 19.1.6).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three topic/rules pairs.** `TOTAL = 9`. All six rules in the
  lesson's array are carded, two per card.
- **DRY-MEASURED 2026-09-17** — `check_layout.py` exit 0, 9 scenes, 0 problems;
  `check_caption.py` exit 0. Neither auto-fit engages. Numbers above are
  emitted, not estimated. This is the first draft-run dry-measure since
  2026-09-08.
- **"The injured player's team" is load-bearing.** 19.1.1 gives the call to the
  injured player or their own team-mates. The opposition cannot call an injury
  for you, and the copy says "your team" every time for that reason. Do not
  soften it to "anyone" at review.
- **The stoppage rewinds to the injury, not to the call** (19.1.5). That is what
  makes a call that comes a second late harmless, and it is why the caption
  says "not the moment somebody got the word out".
- **The substitute-or-time-out fork only applies when no opponent caused it.**
  19.1.2 and 19.1.3 are two halves of one decision and are carded together for
  that reason. Reading 19.1.2 alone makes every injury sound costly, which is
  the obvious misreading.
- **Do not reach for chapter 12.** How a substitution is actually made is lesson
  52. 19.1.2 names it; this reel does not explain it.
- **Preserve the rulebook's own punctuation.** 19.1.1 carries curly doubles
  around `“Injury”` and a curly apostrophe in `player’s`. All of it must survive
  to the PNG and to the caption unchanged — the caption text was generated from
  `rules.json` rather than retyped, for exactly this reason.
- Instagram caption **1,754 characters** including hashtags (79.7% of the 2,200
  limit, well under the 2,090 warn line); TikTok 1,411 of 4,000. Both plain
  text, both scanned clean of markdown, both measured in UTF-16 units by
  `tools/check_caption.py`, which exits 0.
- Three rules are quoted in full in the captions (19.1.1, 19.1.2, 19.1.4);
  19.1.3, 19.1.5 and 19.1.6 are carded on screen and paraphrased in the caption
  prose, with all six numbers in the attribution line. Quoting all six would
  have put the caption near 2,300.
- Curriculum position: lesson 50 is index 16 of `content/lessons-3.json`, the
  next unused lesson after 49. It covers 2026-09-24, the only bare reel date in
  the tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
