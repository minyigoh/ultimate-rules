# Reel 32 — Marking fouls and the "Contact" call

**Status:** Pending review
**Script drafted:** 2026-09-03 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-06 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3)
**Source lesson:** `content/lessons-3.json` → `marking-foul`

Reels 28–31 covered the four fouls that *take something away* and hand it back.
This one is different in kind: it is the foul that comes with a choice. The
same contact can be a foul that stops the game, or an infraction that doesn't —
and the thrower picks. That choice is the whole lesson.

---

## Video — `reel32-marking-fouls-and-contact.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing. The
two-pair shape, same as reels 11, 17, 19, 24 and 29.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Marking fouls and the "Contact" call · kicker BEGINNER · LESSON 32 / 75 |
| 2 | #1 CONTACT, NOT CLOSENESS | "A marker being near you is not a foul." · footer cites 17.6.1, 17.6.1.1, 17.6.1.2 |
| 3 | Rules detail | Verbatim 17.6.1 + 17.6.1.1 + 17.6.1.2 |
| 4 | #2 THE CALL THAT KEEPS PLAY LIVE | "You get to choose whether the game stops." · footer cites 17.6.1.3 |
| 5 | Rules detail | Verbatim 17.6.1.3 |
| 6 | FIELD TIP | "Say it without breaking your stance." |
| 7 | Closing | "Lesson 32 of 75." · Follow @learn.ultimatefrisbee |

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

### The one correction this draft makes to the lesson brief

`lessons-3.json` → `marking-foul` says the stall count "resumes one lower".
**It does not.** 17.6.1.3 says "the marker must resume the stall count at one
(1)", and the annotation repeats it: "If accepted, play does not stop, but the
stall count must be resumed at 1." The script and both captions say *one*. The
lesson JSON's `body[2]` and its quiz `why` line both need the same fix on the
website side — flagged in the run report, not changed here, since this task
does not own the curriculum files.

### What is deliberately left out

- **"The marker has to fix their position"** is true and is in the lesson
  brief, but it is not in 17.6.1.3 — it comes from the marking-infraction
  machinery in 18.1, which is lesson 17's and lesson 19's territory. It stays
  out of the rules cards and out of the body copy, so nothing on screen is
  broader than what is cited.
- **The "minor contact → call disc space instead" branch** is annotation, not
  rule text, and disc space is lesson 17. Mentioning it here would open a rule
  this reel does not card.
- **The thrower-initiated-contact case** (17.6's annotation: moving into a
  legally positioned marker is an offensive foul) is a genuinely useful point
  and is a reel of its own. It is not cited here and must not be smuggled into
  the body copy.

**Layout — dry-rendered and measured 2026-09-03, before drafting was finalised:**

- Both kickers fit at the standard 34px: `#1   CONTACT, NOT CLOSENESS` at 738
  of the 900px column, `#2   THE CALL THAT KEEPS PLAY LIVE` at **896**.
  `fit_kicker()` is not engaged — but 896/900 is the tightest kicker in the run
  to date, past reel-25's 893. **Four pixels of headroom. Any rewording of that
  kicker will shrink the type instead.**
- Both bodies render at the standard 36px, over seven and six lines.
  `fit_body()` is not engaged.
- Both main scenes end at max_y 1192 of 1310. Layout check **0 problems, no
  collisions.**
- Detail cards land at max_y 940 (17.6.1 with both limbs) and 704 (17.6.1.3,
  the longest single rule carded since 13.3 in reel 23) — both against 1310. No
  split, no trimming.
- Projected duration **28.8s** on the house rhythm.
- **The cover title wraps so line 2 begins with a double quote** — `"Contact"
  call` — which is the `_payload()` case. Dry-rendered to PNG and both quotes
  confirmed present in the image, not just the SVG.

**The two slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "A defensive throwing foul is non-minor contact between the thrower
  and a defender who is illegally positioned, or non-minor contact the defender
  initiates before the pass is released. Both players going for the same
  unoccupied space counts too. Proximity on its own does not."
- Scene 4 — "If the contact lands before you release and not during your
  throwing motion, you have two calls. \"Foul\" stops play. \"Contact\" is an
  infraction — uncontested, play does not stop at all, and the marker must
  resume the stall count at one."
- Scene 6 (field tip) — "The whole value of the call is that nothing stops.
  Keep the pivot, keep your eyes downfield, let the count go back to one. It
  cools the moment down too — nobody has to argue about a foul that never
  stopped the game."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-31/render_v3.py` is the newest copy; **set `TOTAL = 7`**, since
the shared default is 9.

---

## Script (~29s)

- Hook: "The marker bumps you before you throw. You can stop the game over it — or you can make the call that keeps you playing."
- Explanation: "First, what counts. A defensive throwing foul is non-minor contact between the thrower and a defender who is illegally positioned, or non-minor contact the defender initiates before the pass is released — including both of you going for the same unoccupied space. A marker who is simply close to you is not fouling you."
- Example: "Now the choice. If that contact lands before you release and not during your throwing motion, you have two calls. Say \"Foul\" and play stops. Say \"Contact\" and it's an infraction instead — uncontested, play doesn't stop at all, and the marker resumes the stall count at one."
- CTA: "Lesson 32 of 75 — new lesson daily."

## Instagram caption

The marker bumps you before you throw. You can stop the game over it — or you can make the call that keeps you playing.

**First, what actually counts as a marking foul.** "A Defensive Throwing Foul occurs when:" — "There is non-minor contact between the thrower and an illegally positioned defensive player (Section 18.1); or" "A defensive player initiates non-minor contact with the thrower, or there is non-minor contact resulting from the thrower and the defender both vying for the same unoccupied position, prior to the thrower releasing the pass."

Read the two limbs together and the shape is clear. It is contact, and it is contact with a position problem behind it. A marker who is merely close to you is not fouling you.

**Then the part almost nobody uses.** "If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

So the same contact gives you two calls. "Foul" stops the game. "Contact" doesn't stop it at all — and the count goes back to one.

That is a rare thing in this rulebook: a call that costs you nothing. You keep your pivot, you keep your eyes downfield, and the stall count you were losing resets. Most players stop the game out of habit when they didn't have to.

Lesson 32 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

marker bumps you before you throw. stop the game over it? or make the call that keeps you playing 🥏

what counts first:

"A Defensive Throwing Foul occurs when:"

"There is non-minor contact between the thrower and an illegally positioned defensive player (Section 18.1); or"

"A defensive player initiates non-minor contact with the thrower, or there is non-minor contact resulting from the thrower and the defender both vying for the same unoccupied position, prior to the thrower releasing the pass."

contact + a position problem. a marker who's just CLOSE isn't fouling you

now the part nobody uses:

"If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

same contact, two calls

"Foul" → game stops
"Contact" → game does NOT stop, count goes back to 1

you keep your pivot. you keep your eyes downfield. the stall count you were losing resets

most people stop the game out of habit when they didn't have to

lesson 32 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(17.6.1, 17.6.1.1, 17.6.1.2, 17.6.1.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes.** Two rule cards, so two topic/rules pairs.
- **The count resumes at one, not "one lower".** See the correction section
  above. If any version of this copy ever says "one lower", it came from the
  lesson JSON and it is wrong against 17.6.1.3.
- **"Prior to the thrower releasing the pass and not during the throwing
  motion" is the hinge.** Contact *during* the throwing motion is a foul and
  only a foul — the "Contact" option is not available. The annotation says so
  explicitly: a "Contact" call made about throwing-motion contact is treated as
  a foul. The script keeps the qualifier in the Example beat for that reason;
  don't trim it for pace.
- **Do not say "Contact" is always the better call.** The lesson brief says
  "usually", and the rule gives the thrower a free choice. There are situations
  — a genuinely disruptive mark, a repeat offender — where stopping play is the
  right call. The reel offers the option, it doesn't prescribe it.
- **Quote handling:** the cover title's second line begins with a double quote,
  which is the `_payload()` case fixed on 2026-08-25 and widened on 2026-09-02.
  Verified in the PNG on the dry render, not just the SVG.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
