# Reel 36 — Continuation: when the disc is already in the air

**Status:** Pending review
**Script drafted:** 2026-09-07 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-10 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (16.2, 16.2.3, 16.2.4.1, 16.2.4.2, 16.2.4.2.1)
**Source lesson:** `content/lessons-3.json` → `continuation`

Reel 35 taught the freeze — a call stops play immediately. This is the
exception 16.1 names by number, and it is the second half of the same idea:
the freeze exists so nobody plays on through a call, and continuation exists
so nobody uses a call to undo a result. Running them on consecutive days is
deliberate; the reel opens by pointing back at yesterday.

---

## Video — `reel36-continuation.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32 and 35.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Continuation: when the disc is already in the air · kicker BEGINNER · LESSON 36 / 75 |
| 2 | #1 PLAY DOESN'T STOP | "A call in the air doesn't freeze the play." · footer cites 16.2 · 16.2.3 |
| 3 | Rules detail | Verbatim 16.2 stem + 16.2.3 |
| 4 | #2 YOUR CATCH, YOUR PLAY | "Catch it anyway and the play stands." · footer cites 16.2.4.1 |
| 5 | Rules detail | Verbatim 16.2.4.1 |
| 6 | #3 OTHERWISE, STOP | "Lose it, and play stops." · footer cites 16.2.4.2 · 16.2.4.2.1 |
| 7 | Rules detail | Verbatim 16.2.4.2 + 16.2.4.2.1, two blocks |
| 8 | FIELD TIP | "Call it, then finish the play." |
| 9 | Closing | "Lesson 36 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### No departures this time — and here is why each call is the easy one

Reel 34 had to card the 1.6 stem because 1.6.1 and 1.6.2 are sentence
fragments. Reel 35 did not have to card 10.2, because 10.2.1 and 10.2.3 are
complete sentences. Reel 36 needs neither judgement:

- **16.2 is a stem *and* it is cited.** It reads "If a foul or violation:" and 16.2.3
  reads "is called or occurs when the disc is in the air," — a fragment that means nothing on its own. But 16.2
  is in the lesson's own `rules` array, so carding it as the block lead with
  16.2.3 beneath is not a departure at all; both numbers are claimed on the
  footer and both are quoted. This is the reel-34 shape with the approval
  question removed.
- **16.2.4 is a stem and is *not* needed.** "Once possession has been
  established:" is not in the lesson's `rules` array, and 16.2.4.1 is a
  complete sentence that stands without it. So scene 5 is one ordinary block,
  the reel-35 shape.
- **16.2.4.2 and 16.2.4.2.1 are both complete sentences**, so scene 7 is two
  ordinary blocks — again the reel-35 shape.

### What the three rules do

1. **16.2 + 16.2.3 — the trigger.** The call happens, the disc is already in
   the air, and nothing is decided yet. This is the exception 16.1 names.
2. **16.2.4.1 — the calling team gets it.** The play stands. The rule also
   offers "Play on", which lets the point continue with no stoppage at all.
3. **16.2.4.2 + 16.2.4.2.1 — the calling team doesn't get it.** Play stops,
   and the disc goes back to the thrower only if the calling team believes
   possession was affected. That belief is the hinge, and it is not automatic.

### What is deliberately left out

- **16.2.1 and 16.2.2** — the other two triggers (called against the thrower
  who then throws; called by the thrower mid-throw). Real, and **not** in the
  lesson's `rules` array, so they stay off the cards. Scene 2's body names them
  in prose because they are the same trigger clause the reel is citing, but no
  card claims them and no footer cites them. If that is a step too far, say so
  and scene 2's body drops to the in-the-air case alone.
- **16.3 and "it didn't affect the play"** — the agreement rule. That is lesson
  37, tomorrow's reel, and it is not opened here.
- **10.2.2**, the after-a-throw positioning case that reel 35 held back. It
  belongs with this lesson conceptually, but it is not in *this* lesson's
  `rules` array either, so it stays out of both. Nothing on screen is broader
  than what is cited.
- **The check itself** — 10.6. Lesson 38.

**Layout — dry-measured 2026-09-07 against `content/reel-35/render_v3.py`
with `TOTAL = 9`, by rendering the SVGs and running `tools/check_layout.py`:**

- All three kickers fit at the standard 34px and none is near the floor:
  `#1   PLAY DOESN'T STOP` at 564 of the 900px column, `#2   YOUR CATCH, YOUR
  PLAY` at 690, `#3   OTHERWISE, STOP` at 516. `fit_kicker()` never engages.
- Bodies: scene 2 auto-fits to 33px over seven lines (last baseline 1088,
  limit 1090); scenes 4 and 6 stay at the standard 36px over six lines (1062
  and 984). `fit_body()` engages on scene 2 only.
- All three main scenes end at max_y 1192 of 1310.
- Detail cards land at max_y 522 (the 16.2 + 16.2.3 stem card, the emptiest in
  the run), 604 (16.2.4.1) and 890 (the 16.2.4.2 + 16.2.4.2.1 pair). No split,
  no trimming.
- Field tip: one headline line, five body lines at 36px, last baseline 1012.
  Cover title wraps to "Continuation: when" / "the disc is already" / "in the
  air" at 784, 728 and 350 of 900px at 84px. Cover kicker
  `B E G I N N E R` at 231 of 900. Closing 900.
- **No `_payload()` case anywhere.** Scene 4's body contains "Play on" but the
  quotes fall mid-line, and no wrapped line in any scene starts or ends with a
  double quote. Confirmed against the emitted SVGs, not assumed — but re-check
  at render time, since a one-character copy edit can move a wrap.
- `check_layout.py`: 9 scenes, 0 problems, no collisions.
- Projected duration **30.0s** on the house rhythm, matching reels 30–32 and 35.

**The four slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "Yesterday's rule stops play the instant somebody calls. This is
  its main exception. If the call is made against the thrower who then throws,
  or by the thrower mid-throw, or while the disc is already in the air, nothing
  is decided yet. The outcome is settled once possession has been established."
- Scene 4 — "If the team that called it gains or retains possession as a result
  of the pass, the play stands. You do not get to rewind to a call you no longer
  need. The caller can even say \"Play on\" as soon as possible, and then nothing
  stops at all."
- Scene 6 — "If the calling team does not gain or retain possession as a result
  of the pass, play must be stopped. Then one question decides where the disc
  goes. If the calling team believes the breach affected possession, the disc is
  returned to the thrower for a check."
- Scene 8 (field tip) — "Stopping to argue mid-flight is how teams lose discs.
  Make the call, keep running, catch it. The rule is written so a call cannot
  cancel an outcome you did not like, and so it cannot cost you one you earned."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-35/render_v3.py` is the newest copy and already has `TOTAL = 9`.

---

## Script (~30s)

- Hook: "You called it — and the disc is already in the air. Do not stop. This is the one time the rulebook wants you to keep playing."
- Explanation: "A call normally stops play instantly. Not this one. If the call comes while the disc is in the air, nothing is decided yet — the outcome is settled once possession has been established. So you finish the play, and then you look at who got it."
- Example: "You call foul, the disc is up, and your team-mate catches it anyway. The play stands. You don't get to rewind to a call you no longer need, and if you shout 'Play on' fast enough, nothing stops at all. But if your team doesn't come down with it, play stops — and the disc goes back to the thrower only if you believe the breach actually affected possession. That belief is the hinge. It is not automatic."
- CTA: "Lesson 36 of 75 — new lesson daily."

## Instagram caption

You called it. The disc is already in the air. Don't stop — the rules want you to finish the play.

Yesterday's lesson was the freeze: a call stops play immediately. This is its main exception, and it exists so that a call can't be used to cancel an outcome.

The trigger. "If a foul or violation:" — "is called or occurs when the disc is in the air,"

So the call lands, the disc keeps flying, and nothing is settled until somebody has it.

Then it splits, and which way depends on one thing: who ended up with the disc.

"If the team that called the foul or violation gains or retains possession as a result of the pass, the play stands. Play can continue without a stoppage if the player who made the foul or violation call makes a “Play on” call as soon as possible."

Your team caught it anyway. You don't get to rewind to a call you no longer need — and if the caller says "Play on" quickly enough, nothing stops at all.

The other way: "If the team that called the foul or violation does not gain or retain possession as a result of the pass, play must be stopped."

Then the question that decides where the disc goes. "If the team that called the foul or violation believes that possession has been affected by the foul or violation, the disc will be returned to the thrower for a check (unless the specific rule says otherwise)."

Not automatic. It turns on whether the breach actually affected possession, and the calling team has to believe it did.

The practical version: make your call, then play it out as if you hadn't. Stopping to argue mid-flight is how teams lose discs they'd already won.

Lesson 36 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (16.2, 16.2.3, 16.2.4.1, 16.2.4.2, 16.2.4.2.1). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.
## TikTok caption

you called it. the disc is already in the air. don't stop 🥏

yesterday: a call stops play instantly. today: the exception that stops calls being used to cancel bad outcomes

"If a foul or violation:" → "is called or occurs when the disc is in the air,"

nothing is settled until somebody has the disc

then it splits on one thing — who ended up with it:

"If the team that called the foul or violation gains or retains possession as a result of the pass, the play stands. Play can continue without a stoppage if the player who made the foul or violation call makes a “Play on” call as soon as possible."

your team caught it anyway? no rewind. you don't get to go back to a call you no longer need

"If the team that called the foul or violation does not gain or retain possession as a result of the pass, play must be stopped."

and then:

"If the team that called the foul or violation believes that possession has been affected by the foul or violation, the disc will be returned to the thrower for a check (unless the specific rule says otherwise)."

not automatic ← it turns on whether the breach actually affected possession

make your call, then play it out as if you hadn't. stopping to argue mid-flight is how teams lose discs they'd already won

lesson 36 of 75

rules from WFDF Rules of Ultimate 2025–2028 (16.2, 16.2.3, 16.2.4.1, 16.2.4.2, 16.2.4.2.1) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(16.2, 16.2.3, 16.2.4.1, 16.2.4.2, 16.2.4.2.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the reel-30,
  31, 32 and 35 shape. `TOTAL = 9`, which `reel-35/render_v3.py` already has.
- **16.2 is carded as a block lead and that is not a departure** — it is in the
  lesson's `rules` array, unlike reel 34's 1.6. 16.2.3 is a fragment and cannot
  stand alone, so the stem goes above it, exactly as `g_detail` already does.
- **16.2.1 and 16.2.2 are named in scene 2's prose but never carded or cited.**
  They are the other two limbs of the same trigger and they are not in the
  lesson's `rules` array. If that is too broad, cut scene 2's body back to the
  in-the-air case; the layout has headroom either way.
- **"Play on" is the rule's own phrase**, from 16.2.4.1, and is quoted as such.
  It is not a separate rule and no footer cites it.
- **Do not make the return-to-thrower automatic.** 16.2.4.2.1 turns on the
  calling team *believing* possession was affected. Rendering it as "you always
  get the disc back" is the misreading this reel exists to prevent, and it
  contradicts the lesson's own quiz answer.
- **Do not explain 16.3.** "It didn't affect the play" is lesson 37 and runs
  tomorrow; naming it here duplicates that reel.
- Instagram caption measures 1,891 characters including hashtags — 86% of the
  2,200 limit, below the 95% warning line. TikTok 1,487 of 4,000. Both plain
  text, no markdown. `tools/check_caption.py` exits 0.
- Curriculum position: lesson 36 is index 1 of `content/lessons-3.json`, the
  next unused lesson after 35. Lessons 1–16 are `lessons-1.json`, 17–34 are
  `lessons-2.json`, 35–75 are `lessons-3.json`.
- No growth/reach claims in either caption.
