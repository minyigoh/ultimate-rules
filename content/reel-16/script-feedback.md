# Script feedback — reel-16

Rendered-content feedback rounds live in `feedback.md`. This file is script
rounds only.

---

## Round 1 — 2026-08-18 (chat, not the desk)

**Note (Min-Yi):** "Regarding Reel 16, it talks about travel call as an
infraction. What about when a travel call is a violation? Is that covered in any
of the lessons later on as any one out of the 75 lessons? If not, I would love
to have a content just to cover this misunderstanding. A lot of times, people
only understand the first part which travel call as an infraction and play
doesn't stop. People mostly wasn't aware that travel call can be a violation and
play can stop too."

**Audit before redrafting.** Two rules stop play after a travel: 18.2.6
(completed pass thrown before the pivot is corrected → defence may call a travel
violation) and 18.2.8 (contested travel where the thrower has not released a
pass). v1 carried 18.2.6 and 18.2.7 as beat 3 of 3. **18.2.8 appeared in no
lesson at all** — zero `rules` arrays across all 75. Lesson 21 teaches the
foul/infraction/violation taxonomy (15.1–15.3, 15.6) and lesson 35 carries 16.1,
but neither connects back to travel.

**Changed:**

- Rebuilt the spine around the misconception. The reel is now default → stopper
  one → stopper two, rather than procedure with the violation as a tail. Cover
  headline changed to "Travel doesn't stop play. Two things make it stop."
  Calendar row title unchanged, per the reel-11 precedent.
- Cut the 15.5.1 beat (scenes 2–3 of v1). Lesson 22 already carries 15.5 and
  15.5.1, so the card duplicated a scheduled lesson and was the cheapest thing
  to trade for 18.2.8. Kept the reel at nine scenes and inside the time budget.
- Added 18.2.8 with 15.10 as its lead-in on the new scene-7 card, since 18.2.8
  opens "After a contested travel infraction…" and never defines contesting.
- Rewrote hook, explanation, example, and both captions around the two-stopper
  structure. Added the completed/incomplete asymmetry explicitly — it is the
  part of 18.2.6/18.2.7 that does the most work in a real game.
- Field tip changed from "fix it without arguing" to the sharper version now
  that contesting is on screen: contesting stops the game, so fix the pivot if
  you're unsure.
- `content/lessons-1.json` → `travel`: added 18.2.5.3 and 18.2.8 to the rules
  array (approved in chat). Body prose left alone and flagged — it still
  doesn't teach contesting.

**Still at Pending review.** Nothing about this round approves anything; the
script track stays `pending` and the first gate is unchanged.
