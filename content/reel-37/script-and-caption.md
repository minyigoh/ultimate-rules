# Reel 37 — "It didn't affect the play"

**Status:** Pending review
**Script drafted:** 2026-09-08 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-11 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (16.3, 16.3.1, 16.3.2)
**Source lesson:** `content/lessons-3.json` → `didnt-affect`

Reel 35 taught the freeze, reel 36 the exception to it. This closes the set:
the rule that lets both teams agree a call changed nothing and get on with the
game. It is the third of three consecutive days on chapter 16, and the only one
of the three that overrides the rest of the book on its face.

---

## Video — `reel37-didnt-affect-the-play.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing. The
two-pair shape, same as reel 34.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "It didn't affect the play" · kicker BEGINNER · LESSON 37 / 75 |
| 2 | #1 BOTH TEAMS AGREE | "Changed nothing? Then it stands." · footer cites 16.3 |
| 3 | Rules detail | Verbatim 16.3 |
| 4 | #2 GOAL, OR RESET | "The goal stays. Otherwise, check it in." · footer cites 16.3.1 · 16.3.2 |
| 5 | Rules detail | Verbatim 16.3.1 + 16.3.2, two blocks |
| 6 | FIELD TIP | "Ask the question out loud." |
| 7 | Closing | "Lesson 37 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### No departures, and no stem to card

All three rules are complete sentences that stand on their own, so every card
is an ordinary block — the reel-35 shape, with none of the judgement calls
reels 34 and 36 needed.

- **16.3 is not a stem.** It is the whole rule in one sentence, and it carries
  its own second sentence about not being superseded.
- **16.3.1 and 16.3.2 are complete sentences**, so scene 5 is two ordinary
  blocks. 16.3.1 is the shortest rule this account has ever carded (ten words),
  which is why the two are paired on one card rather than given a scene each.

### What the two cards do

1. **16.3 — the agreement.** Two conditions and one result. The players
   *involved*, from *both* teams, agree the event or call did not affect the
   outcome; the play stands. Then the sentence that makes this unusual: it is
   not superseded by any other rule.
2. **16.3.1 + 16.3.2 — what happens next.** A goal stays a goal. Otherwise
   affected players may make up positional disadvantage and play restarts with
   a check.

### What is deliberately left out

- **Who counts as "involved".** The rules do not define it here, and inventing
  a definition would be putting words in WFDF's mouth. The reel says "the
  players involved" and leaves it there.
- **The check itself — 10.6.** Named on card 2 because 16.3.2 uses the word,
  but never explained. That is lesson 38.
- **16.2 and continuation.** Yesterday's reel. Scene 2's body says the rule
  applies "regardless of when the call came" because 16.3 says exactly that,
  but it does not re-teach continuation.
- **Any suggestion that one player can invoke this.** It takes agreement, and
  the most common misuse of this rule is one person announcing it. Scene 2's
  headline and body both say "both teams".

**Layout — dry-measured 2026-09-08 against `content/reel-35/render_v3.py`
with `TOTAL = 7`, by rendering the SVGs and running `tools/check_layout.py`:**

- Both kickers fit at the standard 34px with room to spare: `#1   BOTH TEAMS
  AGREE` at 558 of the 900px column, `#2   GOAL, OR RESET` at 477.
  `fit_kicker()` never engages.
- Bodies: scene 2 auto-fits to 33px over seven lines; scene 4 stays at the
  standard 36px over six lines. `fit_body()` engages on scene 2 only.
- Both main scenes end at max_y 1192 of 1310.
- Detail cards land at max_y 554 (16.3) and 740 (16.3.1 + 16.3.2). No split, no
  trimming.
- Field tip: one headline line, six body lines at 36px, last baseline 1062.
  Cover title wraps to `"It didn't affect` / `the play"` at 84px. Cover kicker
  `B E G I N N E R` at 231 of 900. Closing 900.
- **Three `_payload()` cases**, all handled by the `<tspan>` wrapper already in
  `reel-35/render_v3.py`: both cover title lines (the first begins with a
  double quote, the second ends with one) and the field tip's first wrapped
  line, `"Did that affect it?" — "No, play on." That`. Confirmed present in the
  emitted SVGs — **verify all three survive in the PNGs at render time**, since
  this is the collision that cost reel-21 and carousel-post-5 a round.
- `check_layout.py`: 7 scenes, 0 problems, no collisions.
- Projected duration **30.0s** on the house rhythm.

**The three slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "If the players involved from both teams agree that the event or
  the call did not affect the outcome, the play stands. The rulebook then says
  something it says almost nowhere else: this rule is not superseded by any
  other rule. It does not matter when the call came, or whether the call was
  correct."
- Scene 4 — "If the play resulted in a goal, the goal stands. If it did not,
  the affected players may make up any positional disadvantage the event or
  call caused, and play restarts with a check. Nobody rewinds thirty seconds of
  good play to settle something that changed nothing."
- Scene 6 (field tip) — "\"Did that affect it?\" — \"No, play on.\" That
  exchange should be the most common conversation you have on the field. It
  settles more disputes than being right does, and when the answer really is
  no, agreeing costs you nothing."

Cover hook — "A rule that outranks every other rule in the book — including the
one you just used to make your call."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back. Start from
`content/reel-36/render_v3.py` and set `TOTAL = 7`.

---

## Script (~30s)

- Hook: "There is one rule in the book that outranks every other rule in the book. It is four lines long, and most people never use it."
- Explanation: "If the players involved from both teams agree that the event or the call didn't affect the outcome, the play stands. The rulebook then says it plainly: this rule is not superseded by any other rule. It doesn't matter when the call came, and it doesn't matter whether the call was right."
- Example: "You call travel. The pass went up anyway and your team-mate caught it, and everybody involved can see the travel made no difference. Say so, and the play stands. If it had been a goal, the goal stands. If it wasn't, anyone who lost ground because of the call gets it back, and you restart with a check. Nobody rewinds thirty seconds of good play to settle something that changed nothing. Two things to watch: it takes agreement from both teams, not one person deciding, and it cuts both ways — you can use it to keep a goal, and to give one up."
- CTA: "Lesson 37 of 75 — new lesson daily."

## Instagram caption

There is one rule in the book that outranks every other rule in the book. It is four lines long, and most people never use it.

Somebody calls travel. The pass went up anyway, your team-mate caught it, and everybody involved can see the travel made no difference to any of it. What now?

"Regardless of when any call is made, if the players involved from both teams agree that the event or call did not affect the outcome, the play stands. This rule is not superseded by any other rule."

Read that second sentence again. The rulebook almost never talks about itself like that. Agreement between the players involved beats the rest of the book — it does not matter when the call came, and it does not matter whether the call was correct.

Then two lines for what happens next.

"If the play resulted in a goal, the goal stands."

"If the play did not result in a goal the affected players may make up any positional disadvantage caused by the event or call and restart play with a check."

So a goal stays a goal. Otherwise anyone who lost ground because of the event or the call gets it back, and play restarts with a check. Nobody rewinds thirty seconds of good play to settle something that changed nothing.

Two things worth noticing. It takes agreement from the players involved on both teams — one person announcing it did not matter is not this rule. And it cuts both ways: you can use it to keep a goal you scored, and to give one up.

The practical version is a question you say out loud. "Did that affect it?" — "No, play on." That exchange should be the most common conversation you have on the field.

Lesson 37 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (16.3, 16.3.1, 16.3.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

one rule in the book outranks every other rule in the book 🥏

it's four lines long and most people never use it

"Regardless of when any call is made, if the players involved from both teams agree that the event or call did not affect the outcome, the play stands. This rule is not superseded by any other rule."

read that second sentence again. the rulebook almost never talks about itself like that

then what happens next:

"If the play resulted in a goal, the goal stands."

"If the play did not result in a goal the affected players may make up any positional disadvantage caused by the event or call and restart play with a check."

goal stays a goal. otherwise anyone who lost ground gets it back and you check it in

two catches:
→ it takes agreement from BOTH teams. one person deciding it didn't matter isn't this rule
→ it cuts both ways. keep a goal, or give one up

the practical version is a question you say out loud. "Did that affect it?" — "No, play on."

lesson 37 of 75

rules from WFDF Rules of Ultimate 2025–2028 (16.3, 16.3.1, 16.3.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(16.3, 16.3.1, 16.3.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes.** Two rule cards, so two topic/rules pairs — the reel-34
  shape. `TOTAL = 7`.
- **No stem is carded and none needs to be.** All three rules are complete
  sentences. This is the first reel in four days with no stem judgement to
  make.
- **16.3.1 and 16.3.2 share one card.** 16.3.1 is ten words; on its own it
  would be the emptiest card the account has shipped. Paired, the card measures
  740 of 1310.
- **Do not let one player invoke this.** The rule needs the players involved
  from both teams to agree. "It didn't affect the play" said by the person who
  benefits is not an application of 16.3, and it is the misuse the reel is
  written against.
- **Do not explain the check.** 16.3.2 names it; lesson 38 teaches it.
- **Do not define "involved".** The rulebook does not, here, and neither does
  the reel.
- Instagram caption measures 1,872 characters including hashtags — 85% of the
  2,200 limit, below the 95% warning line. TikTok 1,181 of 4,000. Both plain
  text, no markdown. `tools/check_caption.py` exits 0.
- Curriculum position: lesson 37 is index 2 of `content/lessons-3.json`, the
  next unused lesson after 36. Lessons 1–16 are `lessons-1.json`, 17–34 are
  `lessons-2.json`, 35–75 are `lessons-3.json`.
- No growth/reach claims in either caption.
