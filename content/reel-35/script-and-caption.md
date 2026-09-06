# Reel 35 — When a call is made, everybody freezes

**Status:** Pending review
**Script drafted:** 2026-09-06 (daily-reel-render) · **Redrafted:** 2026-09-06 (v2, caption trimmed to fit Instagram's 2,200 limit) · **Rendered:** —
**Queued:** 2026-09-09 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (16.1, 15.7, 10.2.1, 10.2.3)
**Source lesson:** `content/lessons-3.json` → `everybody-freeze`

Reels 28–34 were seven straight lessons on *what* is a foul. This one is the
first on what happens *after* somebody says so — and it opens `lessons-3.json`,
the last and largest of the three lesson files.

The lesson's own hook is blunt: the most-broken rule at beginner level, by a
mile. Not because anyone disputes it, but because nobody is told it. New players
hear "foul", assume the two people arguing will sort it out, and keep playing.

---

## Video — `reel35-everybody-freezes.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31 and 32.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | When a call is made, everybody freezes · kicker BEGINNER · LESSON 35 / 75 |
| 2 | #1 PLAY STOPS INSTANTLY | "Nothing can turn over after a call." · footer cites 16.1 |
| 3 | Rules detail | Verbatim 16.1 |
| 4 | #2 ECHO THE CALL | "A call nobody heard didn't stop play." · footer cites 15.7 |
| 5 | Rules detail | Verbatim 15.7 |
| 6 | #3 GO BACK AND FREEZE | "Back to where you were. Then stop." · footer cites 10.2.1 · 10.2.3 |
| 7 | Rules detail | Verbatim 10.2.1 + 10.2.3, two blocks |
| 8 | FIELD TIP | "Freeze first. Argue after." |
| 9 | Closing | "Lesson 35 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### No stem is carded, and this time none is needed

**10.2 is a heading stem** ("Player positioning after a call (except in the case
of a time-out, and unless specified otherwise):") and is *not* carded. That
matches 17.1–17.7 across reels 28–34: eight reels now, eight stems, none carded.

Reel 34 had to make the opposite call, because 1.6.1 and 1.6.2 are sentence
fragments that mean nothing without 1.6. **10.2.1 and 10.2.3 are not fragments.**
Both are complete sentences, and 10.2.3's "that location" resolves against
10.2.1, which sits directly above it on the same card. So scene 7 renders them
as two ordinary `g_detail` blocks — the reel-29 and reel-32 shape — and nothing
grammatically dependent goes on screen alone.

### The three rules do three different jobs

Worth keeping distinct in the edit, because beginners collapse them into one
vague idea of "stop".

1. **16.1 — the stop itself, and the turnover freeze.** "play stops immediately
   and no turnover is possible". The second half is the part nobody knows. A
   disc that hits the ground after the call did not turn over.
2. **15.7 — the announcement.** The obligation is on *every* player, not the
   caller alone: communicate the stoppage, and echo the call. Plus the
   backdating clause — a discussion with no call counts as a call from the
   moment the discussion started.
3. **10.2.1 + 10.2.3 — position and stillness.** Two separate duties. Go back to
   where you were, *and then* do not move until the check.

### What is deliberately left out

- **16.1's three named exceptions — 15.9, 16.2 and 16.3.** The reel names them
  by number, because the rule does, and says the main one is the next lesson.
  It does not explain any of them. 16.2 is lesson 36 (`continuation`) and 16.3
  is lesson 37 (`"It didn't affect the play"`), both already in
  `lessons-3.json`, and 15.9 is lesson 59.
- **10.2.2**, the after-a-throw positioning case. It is real, it is in the
  lesson's *body* text, and it is **not** in the lesson's `rules` array — so it
  stays off the cards and out of the on-screen copy, the same call reel 34 made
  on 1.6.3 and 1.6.4. It belongs with continuation in lesson 36.
- **The check itself** — 10.6, who checks the disc in and how. Chapter 10's
  restart mechanics are lesson 38 (`the-check`). This reel stops at "until the
  disc is checked in", which is 10.2.3's own phrase.
- **Any remedy detail.** Where the disc ends up after the call is 16.2/16.3 and
  chapter 15. Not opened here.

**Layout — dry-measured 2026-09-06 against `content/reel-33/render_v3.py`:**

- All three kickers fit at the standard 34px, and none is close to the floor:
  `#1   PLAY STOPS INSTANTLY` at 652 of the 900px column, `#2   ECHO THE CALL`
  at 452, `#3   GO BACK AND FREEZE` at 609. `fit_kicker()` never engages.
- All three bodies auto-fit to 33px over seven lines, last baseline 1088 against
  the 1090 limit. `fit_body()` engages on all three and all three clear the
  citation. Deliberately uniform: an earlier draft of scene 4's body ran two
  sentences longer and fitted to 30px, one step off the 29px floor, so it was
  trimmed at draft time rather than shipped at the edge.
- All three main scenes end at max_y 1192 of 1310.
- Detail cards land at max_y 666 (16.1), 866 (15.7) and 802 (the 10.2.1 + 10.2.3
  pair). No split, no trimming.
- Field tip: two headline lines, six body lines, last baseline 1062.
- Cover title wraps to "When a call is" / "made, everybody" / "freezes" at 556,
  686 and 290 of 900px at 84px. Cover kicker `B E G I N N E R` at 231 of 900.
- **One `_payload()` case:** the field tip body has no leading or trailing double
  quote, but scene 4's headline is `A call nobody heard didn't stop play.` —
  apostrophe, not a quote, so no `<tspan>` is needed anywhere in this reel.
  Confirm at render time rather than assuming.
- Projected duration **~29.5s** on the house rhythm, matching reels 30–32.

**The five slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "The instant a call is made, play stops and no turnover is possible.
  Not a drop that happens while people are still talking, not a disc that hits
  the ground because one defender kept covering. The rule names three exceptions
  by number, and the main one — a disc already in the air — is tomorrow's
  lesson."
- Scene 4 — "The rule puts the work on everybody, not just the caller. You stop
  play by visibly or audibly communicating the stoppage, and every player on the
  field should echo the call. On a full pitch the far end cannot hear one voice.
  And if play stops for a discussion with no call at all, a call is deemed made
  when the discussion started."
- Scene 6 — "Where you were when the call was made — not where you were heading.
  Then you stand still until the disc is checked in. Every player, both teams,
  not only the two arguing. Drifting a few metres into a better lane while a
  call is sorted out is the most common beginner error there is, and it is a
  breach of the check in its own right."
- Scene 8 (field tip) — "Stop moving the instant you hear a call, even if you
  are certain it is wrong. You can contest it a second later, from exactly where
  you are standing. Drifting into better position while the call is being sorted
  out turns one disagreement into two."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-33/render_v3.py` is the newest copy; **set `TOTAL = 9`** — it is
currently 7 for reel 33, and 9 is the shared default this reel needs.

---

## Script (~29.5s)

- Hook: "Somebody calls foul, and half the field keeps running. That's not one mistake. That's a second rule broken on top of the first."
- Explanation: "When a call is made, play stops immediately and no turnover is possible. That second half is the part nobody teaches — a disc that hits the ground after the call did not turn over. And stopping play is everybody's job, not just the caller's. You communicate the stoppage, and every player on the field should echo the call, because the far end of a full pitch genuinely cannot hear one voice."
- Example: "Then the bit that gets broken every single game. You go back to where you were when the call was made, and you stand still there until the disc is checked in. Every player, both teams — not just the two people arguing. Drifting three metres into a better lane while the call gets sorted out is a breach in its own right, and it's the fastest way to turn one disagreement into two."
- CTA: "Lesson 35 of 75 — new lesson daily."

## Instagram caption

Somebody calls foul, and half the field keeps running. That's not one mistake — that's a second rule broken on top of the first.

Play stops immediately. "Whenever a foul or violation call is made, or a player attempts to stop play in any way, play stops immediately and no turnover is possible (unless in situations specified in 15.9, 16.2, and 16.3)."

"No turnover is possible" is the half nobody teaches. A disc that hits the ground after the call did not turn over. The rule names three exceptions by number, and the main one — a disc already in the air — is tomorrow's lesson.

Stopping play is everybody's job. "When a foul or violation call is made that stops play, players must stop play by visibly or audibly communicating the stoppage as soon as they are aware of the call and all players should echo calls on the field. If play has stopped for a discussion without any call having been made, a call is deemed to have been made when the discussion started."

Note "all players should echo calls" — not the caller alone. The far end of a full-size pitch cannot hear one voice. And note the second sentence: a discussion with no call still counts as a call, backdated to when it started.

Then the bit that gets broken every single game. "If play stops before a pass is thrown, all players must return to the location they held when the call was made." And: "All players must remain stationary in that location until the disc is checked in."

Two separate duties. Go back — to where you were, not where you were heading. Then stop moving. Every player, both teams.

Drifting a few metres into a better lane while a call is discussed is a breach of the check in its own right.

So: freeze first, argue after. You can contest a call a second later from exactly where you're standing.

Lesson 35 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (16.1, 15.7, 10.2.1, 10.2.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.
## TikTok caption

somebody calls foul and half the field keeps running. that's not one mistake, that's a second rule broken on top of the first 🥏

"Whenever a foul or violation call is made, or a player attempts to stop play in any way, play stops immediately and no turnover is possible (unless in situations specified in 15.9, 16.2, and 16.3)."

"no turnover is possible" ← the half nobody teaches. a disc that hits the ground AFTER the call did not turn over

stopping play is everybody's job:

"When a foul or violation call is made that stops play, players must stop play by visibly or audibly communicating the stoppage as soon as they are aware of the call and all players should echo calls on the field."

"all players should echo calls" — not the caller alone. the far end of a full pitch cannot hear one voice, and a call nobody heard hasn't stopped anything

then the bit that gets broken every single game:

"If play stops before a pass is thrown, all players must return to the location they held when the call was made."
"All players must remain stationary in that location until the disc is checked in."

two duties. go back — where you WERE, not where you were heading. then stop moving. every player, both teams, not just the two arguing

drifting 3m into a better lane while the call gets sorted is a breach of the check in its own right

freeze first. argue after. you can contest it a second later from exactly where you're standing

lesson 35 of 75

rules from WFDF Rules of Ultimate 2025–2028 (16.1, 15.7, 10.2.1, 10.2.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(16.1, 15.7, 10.2.1, 10.2.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the reel-30,
  31 and 32 shape. `TOTAL = 9` is the shared default, but `reel-33/render_v3.py`
  is the newest copy and has it set to 7; change it back.
- **10.2 is a heading stem and is NOT carded.** Unlike reel 34, no fragment
  problem arises: 10.2.1 and 10.2.3 are both complete sentences, and 10.2.3's
  "that location" resolves against 10.2.1 sitting above it on the same card.
  Two ordinary blocks, the reel-29 and reel-32 shape.
- **10.2.2 stays out.** It is in the lesson's body text but not in its `rules`
  array, so nothing on screen or in a caption may state it. It belongs with
  continuation, lesson 36.
- **"No turnover is possible" is the load-bearing clause** and must survive any
  trim. It is the half of 16.1 that beginners have never heard, and it is the
  reason the reel exists rather than being a restatement of "stop when someone
  calls".
- **Do not explain 15.9, 16.2 or 16.3.** The reel names them by number because
  16.1 does, and points at tomorrow's lesson. Explaining them here duplicates
  lessons 36, 37 and 59.
- Scene 4's body was trimmed at draft time from a version that auto-fitted to
  30px — one step off the 29px floor — so all three bodies now sit uniformly at
  33px. Copy was shortened while unapproved, which is the right moment for it;
  once this script is approved the type shrinks and the words do not.
- **Curriculum position check:** lesson 35 is index 0 of
  `content/lessons-3.json`, the next unused lesson after 34. Lessons 1–16 are
  `lessons-1.json`, 17–34 are `lessons-2.json` (both fully on the calendar), and
  the remaining 41 are `lessons-3.json`. 16 + 18 + 41 = 75.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
