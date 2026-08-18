# Reel 16 — "Travel: the call that doesn't stop play"

**Status:** Pending review
**Script drafted:** 2026-08-18 (daily-reel-render) · **Redrafted:** 2026-08-18 · **Rendered:** —
**Queued:** 2026-08-21 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.2.5, 18.2.5.1, 18.2.5.2, 18.2.6, 18.2.7, 18.2.8, 15.10)
**Source lesson:** `content/lessons-1.json` → `travel`

> **v2 — redrafted 2026-08-18** against Min-Yi's note that the reel taught the
> infraction half of travel and left the violation half as a footnote. The
> 15.5.1 beat is gone (Lesson 22 covers who may call what) and 18.2.8 —
> contested travel — is in. See `script-feedback.md`. v1 is archived as
> `script-and-caption.v1.md`.

---

## Video — `reel16-travel-doesnt-stop-play.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — the standard three-pair shape. Text elements fade in staggered within
each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Travel doesn't stop play. Two things make it stop." · kicker BEGINNER · LESSON 16 / 75 |
| 2 | #1 THE DEFAULT: NOBODY FREEZES | "Reset the pivot, take the paused count, play on." · footer cites 18.2.5 · 18.2.5.1 |
| 3 | Rules detail | Verbatim 18.2.5 + 18.2.5.1 + 18.2.5.2 |
| 4 | #2 STOPPER ONE — YOU THREW IT ANYWAY | "Complete a pass before you've fixed the pivot and it comes back." · footer cites 18.2.6 · 18.2.7 |
| 5 | Rules detail | Verbatim 18.2.6 + 18.2.7 |
| 6 | #3 STOPPER TWO — SOMEBODY CONTESTS | "Disagree with the disc still in your hand and play halts." · footer cites 15.10 · 18.2.8 |
| 7 | Rules detail | Verbatim 15.10 + 18.2.8 |
| 8 | FIELD TIP | "Contesting isn't free — it stops the game. Fix it if you're not sure" |
| 9 | Closing | "Lesson 16 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

The cover headline differs from the calendar row title, which stays
"Travel: the call that doesn't stop play". Same handling as reel-11, where the
cut was retitled but the row was not — `apply_additions.py` keys calendar rows
on date + title, so changing the row title would add a duplicate row rather than
rename the existing one.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Travel doesn't stop play. That's the half everyone learns. Almost nobody learns the two things that do stop it."
- Explanation: "The default first. A travel is an infraction, so when it's called, nothing halts. You go back and establish your pivot where the defender indicates, without delay, and while you're doing that the stall count is paused and you may not throw. Pivot's right, count resumes, game carries on."
- Example: "Now the two exceptions. One — you throw anyway and complete it before fixing the pivot. The defence can call a travel violation, and that does stop play: disc back to you, back to where you stood, restart with a check. Throw it incomplete instead and play just continues, turnover stands. Two — you contest the travel while the disc is still in your hand. Play stops right there. So 'travel never stops play' is half a rule."
- CTA: "Lesson 16 of 75 — new lesson daily."

## Instagram caption

Travel doesn't stop play. That's the half everyone learns. Almost nobody learns the two things that do stop it.

Start with the default, because it is the default. A travel is an infraction, not a violation, and the rulebook says it plainly: after an accepted travel infraction is called, play does not stop. No freeze, no check. You establish your pivot at the correct location — the one the player who called it indicates — and you do it without delay. Meanwhile the stall count is paused and you may not throw until you're back in the right place. Then the count resumes and the game carries on.

**Stopper one: you throw it anyway.** If you complete a pass after the travel but before correcting the pivot, the defensive team may call a travel violation. Play stops. The disc is returned to you, you go back to the location you occupied when the infraction happened, and play restarts with a check. Note the asymmetry — throw an *incomplete* pass in the same situation and nothing is rewound. Play continues and the turnover stands.

**Stopper two: somebody contests.** If you disagree that the travel occurred, or don't think it's a correct call, you may call "Contest". And after a contested travel infraction where you haven't released a pass, play stops. This is the one that catches people out, because it's the same word "travel" producing the opposite outcome — and it's usually the *thrower's* own contest that halts the game they thought couldn't be halted.

So the useful version isn't "travel doesn't stop play". It's: travel doesn't stop play unless somebody throws through it, or somebody disagrees about it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

"travel doesn't stop play" is half a rule 🥏

true by default — reset your pivot, count is paused, carry on. but TWO things do stop it: completing a pass before you've fixed the pivot (defence calls a travel violation, disc comes back with a check), and contesting the call with the disc still in your hand

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Closes the three-reel travel arc.** Lesson 14 was the duty to slow down
  (18.2.1), lesson 15 the running-catch exception (18.2.1.1), and this one is
  the procedure once the call is made. Worth pinning all three in order.
- **v1's 15.5.1 beat was cut, not lost.** "Any defensive player may call a
  travel infraction" is 15.5.1, and Lesson 22 ("Who is allowed to make which
  call") already carries 15.5 and 15.5.1 in its `rules` array. Spending a
  citation card on it here duplicated a later lesson and crowded out 18.2.8.
  15.5.1 stays in this lesson's rules array for the website.
- **18.2.8 was in no lesson at all before this redraft** — it appeared in zero
  `rules` arrays across all 75. Added to lesson 16 in `content/lessons-1.json`
  this run, along with 18.2.5.3.
- **`lessons-1.json` → `travel` now teaches contesting too.** A fourth body
  bullet was added 2026-08-18 so the website lesson explains 18.2.8 rather than
  just citing it. The reel and the lesson are back in sync.
- **The lesson's `quiz` still reinforces the half-rule.** Its question is
  "'Travel' is called against you. What happens to play?" with the `why`
  reading "Travel is an infraction. Play does not stop; the pivot is corrected
  and the stall count is paused meanwhile." True as the default, but it's the
  exact framing this redraft exists to widen. Suggested replacement `why`:
  "Travel is an infraction, so by default play continues and the pivot is
  corrected with the count paused. Two things override that: a completed pass
  thrown before the pivot is fixed, and a contested call — both stop play."
  Not applied; only the body bullet was approved.
- **18.2.5.3 is in the rules array but not on a card.** It's the marker
  courtesy detail (no need to re-say "Stalling"), the least load-bearing clause
  in the lesson, and the reframed reel is about when play stops. Carding it
  would have put four strings on scene 3.
- **15.10 is on the scene-7 card as the lead-in to 18.2.8.** 18.2.8 opens
  "After a contested travel infraction…" and never defines contesting; 15.10
  supplies it. Same parent-supplies-the-stem precedent as reel-14 (18.2.4) and
  reel-15 (18.2.1.1). Both verbatim from `rules.json`.
- The field tip is deliberately not "contest it if you disagree". Contesting
  halts the game, so the honest advice for a beginner who isn't sure is to fix
  the pivot and keep playing — which is also the lesson's own `field` line.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
