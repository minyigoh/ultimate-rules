# Reel 32 — Marking fouls and the "Contact" call

**Status:** Content pending review
**Script drafted:** 2026-09-03 · **Redrafted:** 2026-09-04 · **Script approved:** 2026-09-03 (desk) · **Rendered:** 2026-09-04 (daily-reel-render)
**Queued:** 2026-09-06 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.1, 15.2, 17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3)
**Source lesson:** `content/lessons-2.json` → `marking-foul`

v1 framed this as "the same contact gives you two calls", which reads as though
"Contact" and "Foul" are two different things that happened. Min-Yi's note on
the desk is exactly right: the contact **is** the foul, and an infraction is a
different category of breach. This redraft answers that head-on instead of
sliding past it, and adds one topic pair carding **15.1** and **15.2** — the two
definitions reel 21 already taught — so the reel says out loud what the reader
is going to ask.

The short version: the breach is a foul. The **call** is the thrower's choice,
and choosing "Contact" borrows the infraction remedy — play doesn't stop — for
a foul you'd rather not stop the game over.

---

## Video — `reel32-marking-fouls-and-contact.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 25–28, 30 and 31. v1 was seven scenes and two
pairs; the new pair is the definitions one.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Marking fouls and the "Contact" call · kicker BEGINNER · LESSON 32 / 75 |
| 2 | #1 CONTACT, NOT CLOSENESS | "A marker being near you is not a foul." · footer cites 17.6.1, 17.6.1.1, 17.6.1.2 |
| 3 | Rules detail | Verbatim 17.6.1 + 17.6.1.1 + 17.6.1.2 |
| 4 | #2 STILL A FOUL, DIFFERENT CALL | Headline: "Contact" is not a different event. · footer cites 15.1, 15.2 |
| 5 | Rules detail | Verbatim 15.1 + 15.2 |
| 6 | #3 YOU CHOOSE IF PLAY STOPS | Headline: Foul stops the game. "Contact" doesn't. · footer cites 17.6.1.3 |
| 7 | Rules detail | Verbatim 17.6.1.3 |
| 8 | FIELD TIP | "Say it without breaking your stance." |
| 9 | Closing | "Lesson 32 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**17.6 is a heading stem** ("Defensive Throwing (Marking) Fouls:") and is *not*
carded — the same call as 17.2 in reel 28, 17.3 in reel 29, 17.4 in reel 30 and
17.5 in reel 31.

**17.6.1 is a stem that ends in a colon and needs both its limbs on the same
card.** "A Defensive Throwing Foul occurs when:" is not a sentence on its own;
17.6.1.1 and 17.6.1.2 are the two ways it finishes. Same handling as 17.5.1 in
reel 31, 12.7 in reel 26 and 1.3 in reels 23 and 27.

**17.6.1.1 ends "; or"** and 17.6.1.2 ends with a full stop. That is what the
source prints and what `rules.json` holds. Do not tidy either — the card is a
quotation.

**15.1 and 15.2 are carded as two separate blocks**, each with its own rule
header, because they are two independent definitions rather than a stem and its
limbs. Both were already carded in reel 21, so the wording on screen will be
familiar to anyone who watched it.

### The correction the v2 redraft is built on

Min-Yi, on the desk: *"Isn't contact part of a foul call? Infraction is
infraction right?"*

Both halves are correct, and v1's framing invited the question:

- **Contact is what a foul is.** 15.1: "A breach of the rules due to non-minor contact between two or more opposing players is a foul." So the marker's bump is a
  foul the moment it happens. Nothing the thrower says changes that.
- **An infraction is a different category.** 15.2: "A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play." It is defined by
  *what kind of breach* it is, not by who calls it.

So how can a foul be called as an infraction? Because 17.6.1.3 does not
reclassify the breach — it gives the thrower a **choice of remedy**: "If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

The words "may choose to call a contact infraction" are the whole hinge. A
Defensive Throwing Foul *occurred* — the rule says so in its own first clause.
The thrower may elect to handle it the way infractions are handled, which means
play carries on. v2 says that in the hook, cards the two definitions in the
middle pair, and only then offers the choice.

### The one correction this draft makes to the lesson brief

`lessons-2.json` → `marking-foul` says the stall count "resumes one lower".
**It does not.** 17.6.1.3 says "the marker must resume the stall count at one
(1)", and the annotation repeats it: "If accepted, play does not stop, but the
stall count must be resumed at 1." The script and both captions say *one*. The
lesson JSON's `body[2]` and its quiz `why` line (and option 1, "the count drops
by one") all need the same fix on the website side — flagged in the run report,
not changed here, since this task does not own the curriculum files.

This is also *why* 18.1.3 stays off the cards. A generic marking infraction
resumes at "the number last fully uttered before the call, minus one (1)"; a
contact infraction resumes at one. The contact infraction has its own remedy,
which is another reason not to describe it as simply "a marking infraction".

### What is deliberately left out

- **18.1 and the marking-infraction machinery.** The redraft says "handled the
  way an infraction is handled" and stops there. It does not cite 18.1.3 and
  does not say the marker has to fix their position — true, but it comes from
  18.1, which is lessons 17 and 19.
- **The minor-contact / disc-space branch** is annotation, not rule text, and
  disc space is lesson 17.
- **The thrower-initiated-contact case** (17.6's annotation) is lesson 33,
  which posts the following day. Not smuggled in here.

**Layout — dry-measured 2026-09-04 against `content/reel-31/render_v3.py`:**

- All three kickers fit at the standard 34px: `#1   CONTACT, NOT CLOSENESS` at
  738 of the 900px column, `#2   STILL A FOUL, DIFFERENT CALL` at 854, and
  `#3   YOU CHOOSE IF PLAY STOPS` at 772. `fit_kicker()` is **not** engaged.
  v1's `#2   THE CALL THAT KEEPS PLAY LIVE` measured 896/900 — four pixels of
  headroom, the tightest in the run; the redraft retires it, which removes that
  risk rather than adding one.
- Bodies auto-fit to 34px (scene 2, six lines), 33px (scene 4, seven lines) and
  36px (scene 6, six lines). `fit_body()` engages on the first two and holds
  every last baseline clear of the citation.
- All three main scenes end at max_y 1192 of 1310.
- Detail cards land at max_y 940 (17.6.1 with both limbs), 740 (15.1 + 15.2)
  and 704 (17.6.1.3) — all against 1310. No split, no trimming.
- Projected duration **~30s** on the house rhythm, the standard nine-scene
  shape.
- **One `_payload()` case, not two.** Scene 4's headline begins with a double
  quote and emits through `_payload()` as a `<tspan>`. The cover title was
  expected to be a second case, but it wraps to `Marking fouls and` /
  `the "Contact" call` — line 2 starts with "the", so both of its quotes are
  mid-string and were never at risk.

**Measured at render, 2026-09-04.** Every prediction above held exactly:

- Duration **29.53s** against a 30.0s projection, exact CFR via `encode.py`.
- Layout check **0 problems, no collisions**: main scenes at max_y 1192, 1192
  and 1192 of 1310; detail cards at 940, 740 and 704; field tip 1062; cover
  1210; closing 900. All nine max_x at 990 of 990.
- Kickers rendered at 34, 34 and 34px — `fit_kicker()` never engaged. Bodies
  auto-fit to 34, 33 and 36px, exactly the dry-measured sizes.
- `check_dull.py`: longest sustained dull-orange run **0.20s** (6 frames) in
  band y=520–578, against a 0.45s threshold. PASS.
- All six rule texts verified character-for-character against `rules.json` in
  the emitted SVG.
- Scene 4's opening double quote confirmed **in the PNG**, not just the SVG:
  the two quote strokes measure 12px wide and 20px tall at x=93–104 and
  107–118, above a 46×51px "C" — a dropped quote would have left the "C" first.
- One cosmetic note: on the scene 3 card, 17.6.1.2's "non-minor" wraps across a
  line as `non-` / `minor`. `textwrap` breaks on existing hyphens by default.
  No character is added or removed and the quotation is intact; flagged only
  because it is the first time a rule card in this run has broken a hyphenated
  word.

**The three slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "A defensive throwing foul is non-minor contact between the thrower
  and a defender who is illegally positioned, or non-minor contact the defender
  initiates before the pass is released. Both players going for the same
  unoccupied space counts too. Proximity on its own does not."
- Scene 4 — "The rulebook defines a foul as non-minor contact, and an
  infraction as a marking or travel breach that does not stop play. The bump is
  a foul under the first definition. What the rule gives you is not a
  reclassification — it is the choice to handle that foul the way an infraction
  is handled, so the game keeps going."
- Scene 6 — "If the contact lands before you release and not during your
  throwing motion, you have two calls. \"Foul\" stops play. \"Contact\" takes the
  infraction route — uncontested, play does not stop at all, and the marker
  must resume the stall count at one."
- Scene 8 (field tip) — "The whole value of the call is that nothing stops.
  Keep the pivot, keep your eyes downfield, let the count go back to one. It
  cools the moment down too — nobody has to argue about a foul that never
  stopped the game."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-31/render_v3.py` is the newest copy; `TOTAL = 9` is the shared
default, so leave it alone this time — v1's seven-scene note no longer applies.

---

## Script (~30s)

- Hook: "The marker bumps you before you throw. That is a foul — and you still don't have to stop the game over it."
- Explanation: "First, what counts. A defensive throwing foul is non-minor contact between the thrower and a defender who is illegally positioned, or non-minor contact the defender initiates before the pass is released — including both of you going for the same unoccupied space. A marker who is merely close to you is not fouling you. And that contact really is a foul: the rulebook defines a foul as non-minor contact between opposing players. Saying \"Contact\" does not turn it into something else."
- Example: "What it changes is the remedy. An infraction, in this rulebook, is a marking or travel breach — and infractions don't stop play. So if the contact lands before you release and not during your throwing motion, the choice is yours. Say \"Foul\" and play stops. Say \"Contact\" and, uncontested, play doesn't stop at all — the marker just resumes the stall count at one."
- CTA: "Lesson 32 of 75 — new lesson daily."

## Instagram caption

The marker bumps you before you throw. That is a foul — and you still don't have to stop the game over it.

**First, what actually counts as a marking foul.** "A Defensive Throwing Foul occurs when:" — "There is non-minor contact between the thrower and an illegally positioned defensive player (Section 18.1); or" "A defensive player initiates non-minor contact with the thrower, or there is non-minor contact resulting from the thrower and the defender both vying for the same unoccupied position, prior to the thrower releasing the pass."

Read the two limbs together and the shape is clear. It is contact, and it is contact with a position problem behind it. A marker who is merely close to you is not fouling you.

**Now the part that confuses people, and it should.** If contact is what makes something a foul, how can you call it an infraction? Look at the two definitions the rulebook gives:

"A breach of the rules due to non-minor contact between two or more opposing players is a foul."

"A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."

By the first one, the bump is a foul. Full stop. Nothing you say afterwards changes what happened.

**So what does the call change?** The remedy, not the event: "If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

"May choose to call a contact infraction" is the hinge. A Defensive Throwing Foul occurred — the rule says so in its own opening clause. What you are choosing is whether to handle it the way fouls are handled, which stops the game, or the way infractions are handled, which doesn't.

"Foul" stops play. "Contact" doesn't stop it at all, and the count goes back to one.

That is a rare thing in this rulebook: a call that costs you nothing. You keep your pivot, you keep your eyes downfield, and the stall count you were losing resets. Plenty of players stop the game out of habit when they didn't have to.

One limit worth knowing: the choice only exists for contact *before* the release and *not* during your throwing motion. Contact during the throwing motion is a foul and only a foul.

Lesson 32 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

marker bumps you before you throw. that IS a foul — and you still don't have to stop the game over it 🥏

what counts first:

"A Defensive Throwing Foul occurs when:"

"There is non-minor contact between the thrower and an illegally positioned defensive player (Section 18.1); or"

"A defensive player initiates non-minor contact with the thrower, or there is non-minor contact resulting from the thrower and the defender both vying for the same unoccupied position, prior to the thrower releasing the pass."

contact + a position problem. a marker who's just CLOSE isn't fouling you

now the bit that trips everyone up. if contact is what makes it a foul, how is it an infraction?

"A breach of the rules due to non-minor contact between two or more opposing players is a foul."

"A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."

by the first one the bump is a foul. that part is settled

here's what the call actually changes:

"If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

"may choose to call a contact infraction" — you're picking the remedy, not renaming what happened

"Foul" → game stops
"Contact" → game does NOT stop, count goes back to 1

you keep your pivot. you keep your eyes downfield. the stall count you were losing resets

only works for contact BEFORE the release and NOT during the throwing motion. during the motion it's a foul, full stop

lesson 32 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(15.1, 15.2, 17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three rule cards.** v1 was seven; the new middle pair carries
  15.1 and 15.2. `TOTAL = 9` is the shared default in `render_v3.py`.
- **The count resumes at one, not "one lower".** See the correction section
  above. If any version of this copy ever says "one lower", it came from the
  lesson JSON and it is wrong against 17.6.1.3.
- **"Prior to the thrower releasing the pass and not during the throwing
  motion" is the hinge.** Contact *during* the throwing motion is a foul and
  only a foul — the "Contact" option is not available. The annotation says so
  explicitly: a "Contact" call made about throwing-motion contact is treated as
  a foul. It stays in the Example beat and in both captions; don't trim it.
- **Do not say "Contact" is always the better call.** The rule gives the
  thrower a free choice, and a genuinely disruptive mark or a repeat offender
  is a reason to stop play. The reel offers the option, it doesn't prescribe it.
- 18.1.3's "minus one (1)" restart is deliberately off every card — a contact
  infraction has its own remedy under 17.6.1.3 and resumes at one.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
