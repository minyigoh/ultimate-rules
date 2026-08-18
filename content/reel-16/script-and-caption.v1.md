# Reel 16 — "Travel: the call that doesn't stop play"

**Status:** Pending review
**Script drafted:** 2026-08-18 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-21 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.5.1, 18.2.5, 18.2.5.1, 18.2.5.2, 18.2.6, 18.2.7)
**Source lesson:** `content/lessons-1.json` → `travel`

---

## Video — `reel16-travel-doesnt-stop-play.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF rule-citation
cards — the standard three-pair shape. Text elements fade in staggered within
each scene; scenes crossfade.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Travel: the call that doesn't stop play" · kicker BEGINNER · LESSON 16 / 75 |
| 2 | #1 ANY DEFENDER CALLS IT, AND PLAY CARRIES ON | "Nobody stops. Nobody checks the disc in." · footer cites 15.5.1 · 18.2.5 |
| 3 | Rules detail | Verbatim 15.5 + 15.5.1 + 18.2.5 |
| 4 | #2 FIX THE PIVOT — THE COUNT IS PAUSED | "You may not throw until you're back in the right place." · footer cites 18.2.5.1 · 18.2.5.2 |
| 5 | Rules detail | Verbatim 18.2.5.1 + 18.2.5.2 + 18.2.5.3 |
| 6 | #3 THROW BEFORE YOU FIX IT AND IT COMES BACK | "A completed pass is the one that costs you." · footer cites 18.2.6 · 18.2.7 |
| 7 | Rules detail | Verbatim 18.2.6 + 18.2.7 |
| 8 | FIELD TIP | "Fix it without arguing — it costs you almost nothing" |
| 9 | Closing | "Lesson 16 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 3 uses the parent-plus-child form for 15.5. 15.5.1 opens on "However any
offensive player may call a double team, and any defensive player may call a
travel infraction." — the "However" is answering 15.5's "In general only the
thrower may claim an infraction", so the clause is a fragment without its
parent. Same precedent as reel-14 (18.2.4 → 18.2.4.1) and reel-15 (18.2.1.1 →
its two children). Both strings verbatim from `rules.json`.

Scene 5 carries 18.2.5.3 alongside the two lesson-listed clauses. It is not in
this lesson's `rules` array, but the lesson body explicitly teaches its content
("the marker resumes counting — and doesn't need to say 'Stalling' again"), and
that sentence has to come off the card verbatim rather than out of my mouth.

**Regenerating:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Someone calls travel on you. Here's the part almost everyone gets wrong — nothing stops."
- Explanation: "A travel is an infraction, not a violation, and infractions don't stop play. You go back and establish your pivot where the defender indicates, without delay. While you're doing that the stall count is paused and you may not throw. Once the pivot's right, the marker picks the count back up — and doesn't have to say 'Stalling' first."
- Example: "So you catch it, drift a step, and a defender calls travel. Nobody freezes, nobody checks it in. You reset the pivot, the count resumes, you play on. But if you throw a completed pass before you've corrected it, the defence can call a travel violation — and that one does stop play. The disc comes back to you, you return to where you were, and you restart with a check. Throw an incomplete pass instead and play simply continues; the turnover stands."
- CTA: "Lesson 16 of 75 — new lesson daily."

## Instagram caption

Someone calls travel on you. Here's the part almost everyone gets wrong — nothing stops.

A travel is an infraction, not a violation, and infractions do not stop play. The rulebook says it in one line: after an accepted travel infraction is called, play does not stop. No freeze, no check, no restart. The game is still running while you sort it out.

What you owe is the pivot. You establish it at the correct location, the one the player who called it indicates, and you do it without delay — and so do they. Meanwhile the stall count is paused and you may not throw until you're back in the right place. Once you are, the marker resumes the count, and does not need to say "Stalling" before picking it up again.

The expensive mistake is throwing anyway. If you complete a pass after the travel but before correcting the pivot, the defence may call a travel violation — and that one does stop play. The disc comes back to you, you return to where you were standing when the infraction happened, and play restarts with a check. Throw an incomplete pass in the same situation and nothing is rewound: play continues and the turnover stands.

Worth knowing who can say it: any defensive player may call a travel infraction, not only the marker.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

"travel!" — and then nothing stops 🥏

it's an infraction, not a violation. reset your pivot, count is paused while you do it, then play carries on. throw a completed pass before you fix it and the disc comes back with a check

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Closes the three-reel travel arc.** Lesson 14 was the default duty to slow
  down (18.2.1), lesson 15 the running-catch exception (18.2.1.1), and this one
  is the procedure once the call is actually made (18.2.5–18.2.7). Reel-15's
  notes deliberately held this material back for today. Worth pinning all three
  in order.
- **Six rules in the lesson array — the most of any lesson so far.** They pair
  cleanly into three cards (15.5.1 / 18.2.5.1 + 18.2.5.2 / 18.2.6 + 18.2.7), so
  this stays at the standard nine scenes rather than growing to eleven. If the
  timing projection lands above ~33s, drop the scene 6/7 pair rather than
  touching any constant — but the 18.2.6 material is the most useful thing in
  the lesson, so prefer trimming the scene-2 headline copy first.
- **18.2.5.3 is on the scene-5 card but not in the lesson's `rules` array.**
  The lesson body teaches its content directly, so it has to be quoted rather
  than paraphrased. Suggest adding it to `content/lessons-1.json` → `travel`;
  flagging rather than editing, since the lesson JSONs are curriculum.
- **Contested travel (18.2.8) is deliberately out of scope.** Play *does* stop
  on a contested travel where no pass was released, which cuts against this
  reel's whole hook, and squeezing the exception in would blunt the lesson.
  Contesting properly is Lesson 23 (15.10) and it belongs there.
- The example beat leans on the lesson's own `field` line — any defender may
  call it, and fixing it without arguing costs you almost nothing.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
