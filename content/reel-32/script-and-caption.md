# Reel 32 — Marking fouls and the "Contact" call

**Status:** Cut v2 approved; script redrafted to v4 (caption length only) — re-approve the script track
**Script drafted:** 2026-09-03 · **Redrafted:** 2026-09-04 (v2), 2026-09-05 (v3), 2026-09-06 (v4, caption trimmed to fit Instagram's 2,200 limit — no on-screen text changed) · **Rendered:** 2026-09-06 (cut v2, from script v3; v1 archived)
**Queued:** 2026-09-06 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.1, 15.2, 17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3, 18.1.1.2)
**Source lesson:** `content/lessons-2.json` → `marking-foul`

v2 got the first half right — the contact is a foul — and then blurred the
second half. It said the thrower gets "the choice to handle that foul the way an
infraction is handled", carded 15.2 next to it, and left the viewer to conclude
that "Contact" belongs to the infraction family. Min-Yi's note says it doesn't,
and she is right: **the infractions are a named, closed list, and Contact is not
on it.**

v3 says that on the card instead of implying the opposite.

---

## Video — `reel32-marking-fouls-and-contact.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. Same
three-pair shape as v2; scenes 1–3 and 6–9 are unchanged copy. **Scenes 4 and 5
are the redraft.**

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Marking fouls and the "Contact" call · kicker BEGINNER · LESSON 32 / 75 |
| 2 | #1 CONTACT, NOT CLOSENESS | "A marker being near you is not a foul." · footer cites 17.6.1, 17.6.1.1, 17.6.1.2 |
| 3 | Rules detail | Verbatim 17.6.1 + 17.6.1.1 + 17.6.1.2 |
| 4 | **#2 A FOUL, NOT AN INFRACTION** | Headline: "Contact is a foul, not an infraction." · footer cites 15.1, 15.2, 18.1.1.2 |
| 5 | **Rules detail** | Verbatim 15.1 + 15.2 + 18.1.1.2 |
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

**15.1, 15.2 and 18.1.1.2 are carded as three separate blocks**, each with its
own rule header, because they are three independent statements rather than a
stem and its limbs.

### The correction v3 is built on

Min-Yi, on the desk, 2026-09-05:

> Can you double check the rules? Contact doesn't fall under infraction right?
> Infractions are straddle, wrapping.

Checked, and she is right on both counts:

- **The marking infractions are a closed list.** 18.1.1 introduces it and
  18.1.1.1–18.1.1.6 name every member: **fast count, straddle, disc space,
  wrapping, double team, vision.** Nothing else is on it. "Contact" is not.
- **The categories are defined by the kind of breach, not by the call.** 15.1:
  "A breach of the rules due to non-minor contact between two or more opposing players is a foul." 15.2:
  "A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."
  A marker's bump is contact between opposing players, so it is a foul. It is
  neither a Marking breach in the 18.1 sense nor a Travel breach, so it is not
  an infraction.

**The one thing that has to stay honest, because it is on screen.** 17.6.1.3
does use the word: "the thrower may choose to call a contact infraction, by
calling 'Contact'". The card quotes that sentence, so v3 cannot pretend the
phrase isn't there. What v3 does instead is put it where it belongs — the phrase
names a **call defined inside the fouls chapter**, not a member of the Section
18.1 list. Two things separate it from the real infractions:

1. **It isn't enumerated.** 18.1.1 lists six; "Contact" is not among them.
2. **It has its own remedy.** A contact infraction resumes the stall count at
   one (17.6.1.3). Every marking infraction on the 18.1.1 list resumes at the
   number last fully uttered, minus one (18.1.3). Different restart, different
   home chapter.

The one thing it *does* share with an infraction is the only thing the reel
claims: uncontested, play does not stop.

### What changed from v2

- **Scene 4's kicker:** `#2   STILL A FOUL, DIFFERENT CALL` → `#2   A FOUL, NOT
  AN INFRACTION`. 854px → 780px of the 900px column.
- **Scene 4's headline:** `"Contact" is not a different event.` → `Contact is a
  foul, not an infraction.` The old headline answered the *previous* note and
  said nothing about the category question. It also retires the last
  `_payload()` case in the reel — nothing on screen now starts with a quote
  except one wrapped line on scene 6, which the renderer already handles.
- **Scene 4's body** is rewritten end to end. It now names the six marking
  infractions and states plainly that Contact is not one of them, instead of
  v2's "the choice to handle that foul the way an infraction is handled", which
  is the sentence the note was aimed at.
- **Scene 5 gains a third block, 18.1.1.2 (Straddle)** — one of Min-Yi's own
  two examples, carded as the concrete proof of what an infraction actually is.
  Wrapping (18.1.1.4) was measured as a fourth block and overflows the card at
  1562 of 1310px, so straddle carries the point alone and the body names the
  rest.
- **Scene 6's body** now quotes the "contact infraction" phrase directly and
  says where it lives, rather than describing the call as taking "the infraction
  route".
- **Both captions** are rewritten across the same three points.

What did **not** change: the lesson number, the topic, the field tip, the
closing, scenes 1–3, the hook, and the hashtag and attribution blocks. 17.6.1,
17.6.1.1, 17.6.1.2, 17.6.1.3, 15.1 and 15.2 are all still cited; 18.1.1.2 is the
only addition.

### On naming straddle, disc space, wrapping, fast count, double team and vision

Reels normally leave the 18.1 enumeration alone — it belongs to lessons 17–19.
Here it is the answer to the note, and every one of those lessons has already
posted: disc space 2026-08-22, straddle and wrapping 08-23, fast count 08-24,
double team 08-25. So naming them is a callback to material the audience has
already been taught, not new curriculum smuggled in. Only 18.1.1.2 is carded;
the other five are named in body prose, which is written copy rather than
quoted rule text.

### What is still deliberately left out

- **18.1.3's "minus one (1)" restart.** It is the sharpest evidence that a
  contact infraction is its own animal, and it stays off every card and out of
  the body copy — 18.1's remedy machinery is lessons 17 and 19, and the reel
  already makes the point from the enumeration alone. It is recorded here and
  in the notes so nobody re-derives it.
- **The minor-contact / disc-space branch** is annotation, not rule text, and
  disc space is lesson 17.
- **The thrower-initiated-contact case** (17.6's annotation) is lesson 33,
  which posts the following day. Not smuggled in here.

**Layout — dry-measured 2026-09-05 against `content/reel-31/render_v3.py`:**

- All three kickers fit at the standard 34px: `#1   CONTACT, NOT CLOSENESS` at
  738 of the 900px column, `#2   A FOUL, NOT AN INFRACTION` at 780, and
  `#3   YOU CHOOSE IF PLAY STOPS` at 772. `fit_kicker()` is **not** engaged on
  any of them.
- Bodies auto-fit to 34px (scene 2, six lines, last baseline 1047), 36px
  (scene 4, six lines, 1062) and 33px (scene 6, six lines, 1042), all against
  the 1090 limit. Scene 4 now sits at the *standard* 36px — v2's rewrite of it
  was the tightest body in the reel at 33px over seven lines.
- Both untouched main scenes end at max_y 1192 of 1310, as measured on the v1
  cut; scene 4's new body ends higher, at 1062.
- Detail cards land at max_y 940 (17.6.1 with both limbs, unchanged), **1026**
  (15.1 + 15.2 + 18.1.1.2, up from 740 for the two-block v2 card) and 704
  (17.6.1.3) — all against 1310. No split, no trimming.
- Scene 5's duration list grows to four entries for the extra block:
  `[0.3, 1.7, 1.7, 2.0]`. `retime()` rewrites the two middle holds to
  `HOLD["detail"] * 0.7` as it does on every multi-block card, so leave the
  placeholders alone.
- Projected duration **~30s** on the house rhythm — one state more than v2's
  29.53s, absorbed by `fit()`'s k clamp. Confirm the printed projection at
  render and drop nothing unless it exceeds 33s.
- **One `_payload()` case, on scene 6.** The body wraps so that its last line
  begins `"Contact" does not, and the count restarts at one.` — a leading double
  quote, which emits as a `<tspan>`. Scene 4's headline no longer starts with a
  quote, so that case is gone; the cover title wraps to `Marking fouls and` /
  `the "Contact" call`, both quotes mid-string, and was never at risk.

**Not rendered.** The v1 cut in this folder was built from script v2 and its
scenes 4 and 5 no longer match this file. Per `content/DAILY_RENDER_TASK.md`, a
redraft has to clear the script gate before it is built, so the rebuild waits
for approval of v3.

---

## Script (~30s)

- Hook: "The marker bumps you before you throw. That is a foul — and you still don't have to stop the game over it."
- Explanation: "First, what counts. A defensive throwing foul is non-minor contact between the thrower and a defender who is illegally positioned, or non-minor contact the defender initiates before the pass is released — including both of you going for the same unoccupied space. A marker who is merely close to you is not fouling you."
- Example: "Now, the word people trip on. The infractions are a fixed list — fast count, straddle, disc space, wrapping, double team, vision — and contact is not on it. A foul is defined by contact; an infraction is defined by being a marking or travel breach. So the bump is a foul. The rule does let you say \"a contact infraction\" — but that phrase lives in the fouls chapter and carries its own remedy. If the contact lands before you release and not during your throwing motion, you pick: \"Foul\" stops play, \"Contact\" doesn't, and the count restarts at one."
- CTA: "Lesson 32 of 75 — new lesson daily."

## Instagram caption

The marker bumps you before you throw. That is a foul — and you still don't have to stop the game over it.

**First, what counts.** A Defensive Throwing Foul is non-minor contact with an illegally positioned defender, or contact the defender initiates before you release.

**Now the part everybody gets backwards — including this account's first draft.** "Contact" is not an infraction.

The infractions are a named, closed list: fast count, straddle, disc space, wrapping, double team, vision. That is all of them. Contact is not on it, and nothing you say puts it there. From the definitions:

"A breach of the rules due to non-minor contact between two or more opposing players is a foul."

"A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."

A bump is contact between opposing players: a foul by the first. It is not a Marking or Travel breach, so not an infraction by the second.

**So why does the rule say "a contact infraction"?** Because it does: "If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

Look where that sentence lives: chapter 17, Fouls. It names a **call**, not a seventh entry on the marking list — and it carries its own remedy, the count restarting at one.

**A choice of remedy, not a change of category.** "Foul" stops play. "Contact" doesn't stop it at all — you keep your pivot, and the stall count resets.

One limit: the choice only exists for contact *before* the release and *not* during your throwing motion. Contact during it is a foul and only a foul.

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

now the bit everyone gets backwards: **"Contact" is not an infraction**

the infractions are a closed list. fast count, straddle, disc space, wrapping, double team, vision. that's all six. contact isn't on it

the definitions say why:

"A breach of the rules due to non-minor contact between two or more opposing players is a foul."

"A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."

bump = contact between opposing players = foul. not a marking breach, not a travel breach, so not an infraction

here's one of the actual six so you can see the difference:

"“Straddle” – a line between a defensive player’s feet comes within one disc diameter of the thrower’s pivot point."

that's positioning. a bump isn't

so why does the rule say "a contact infraction"? because it does:

"If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

look where that sentence lives → chapter 17, FOULS. it's the name of a call, not a 7th entry on the marking list. it isn't enumerated in 18.1.1, and it has its own remedy (count back to 1)

what it borrows is the one bit you care about: uncontested, play does NOT stop

"Foul" → game stops
"Contact" → game does NOT stop, count goes back to 1

you keep your pivot. you keep your eyes downfield

only works for contact BEFORE the release and NOT during the throwing motion. during the motion it's a foul, full stop

lesson 32 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(15.1, 15.2, 17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3, 18.1.1.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes, three rule cards.** `TOTAL = 9` is the shared default in
  `render_v3.py`. Scene 5's block list grows to three and its duration list to
  four entries.
- **"Contact" is not one of the marking infractions.** 18.1.1.1–18.1.1.6 name
  all six: fast count, straddle, disc space, wrapping, double team, vision. If
  any future version of this copy implies Contact is a seventh, it is wrong.
- **But the phrase "a contact infraction" is in the rulebook**, in 17.6.1.3,
  and it is on the card. Don't write around it — place it. It names a call
  defined in the fouls chapter.
- 18.1.3's "minus one (1)" restart is deliberately off every card and out of
  the body copy. It is the cleanest proof that a contact infraction is its own
  thing — it restarts at one where the listed infractions restart at minus one
  — but 18.1's remedies are lessons 17 and 19. Kept in the caption only as the
  plain contrast, without the rule number.
- **The count resumes at one, not "one lower".** `lessons-2.json` →
  `marking-foul` still says "resumes one lower" in `body[2]`, in its quiz `why`
  line, and in quiz option 1. 17.6.1.3 says "resume the stall count at one (1)"
  and the annotation repeats it. **The lesson JSON is wrong and needs fixing on
  the website side** — flagged in the run report on 2026-09-04 and again on
  2026-09-05; this task does not own the curriculum files.
- **"Prior to the thrower releasing the pass and not during the throwing
  motion" is the hinge.** Contact *during* the throwing motion is a foul and
  only a foul — the "Contact" option is not available. The annotation says so
  explicitly. It stays in the Example beat and in both captions; don't trim it.
- **Do not say "Contact" is always the better call.** The rule gives the
  thrower a free choice, and a genuinely disruptive mark or a repeat offender
  is a reason to stop play. The reel offers the option, it doesn't prescribe it.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
