# Reel 40 — Picks

**Status:** Pending review
**Script drafted:** 2026-09-11 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-14 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.3.1, 18.3.1.1, 18.3.2, 18.3.3)
**Source lesson:** `content/lessons-3.json` → `picks`

Reel 39 said picks restart the count at maximum six and left it there. This is
the call itself: who may make it, when they may wait, and what they actually get
back. The two reels are a pair, and 39 already spent the number, so 40 does not
have to.

---

## Video — `reel40-picks.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38 and 39.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Picks · kicker BEGINNER · LESSON 40 / 75 |
| 2 | #1 WHAT A PICK IS | "Guarding someone, and a third body takes them from you." · footer cites 18.3.1 |
| 3 | Rules detail | Verbatim 18.3.1, one block |
| 4 | #2 THE TWO-SECOND WAIT | "You may hold the call and see whether it cost you." · footer cites 18.3.1.1 |
| 5 | Rules detail | Verbatim 18.3.1.1, one block |
| 6 | #3 WHAT YOU GET BACK | "The position you would have had. Nothing else." · footer cites 18.3.2 · 18.3.3 |
| 7 | Rules detail | Verbatim 18.3.2 + 18.3.3, two blocks |
| 8 | FIELD TIP | "The count comes back at maximum six. Call it when it truly cost you." |
| 9 | Closing | "Lesson 40 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### No departures this reel, and one stem left off

- **18.3 is not carded.** It reads `“Pick” Violations:` — a heading stem, like
  17.1–17.7 in reels 28–34 and 9.5 in reel 39. Nothing under it depends on it
  for meaning: 18.3.1 opens with its own complete subject and the word "Pick"
  appears inside it in the rulebook's own curly quotes. No block lead is needed,
  so this reel makes none of the calls reel 34 and reel 39 had to make.
- **Every rule carded is in the lesson's `rules` array**, and every footer cites
  only what its own card quotes. No rule number appears on screen that the
  lesson did not ask for.
- **18.3.1's exception is quoted whole and must stay whole.** The sentence
  beginning "However it is not a pick…" is the second half of 18.3.1, not a
  separate rule, and it is the half that stops the call being used on every
  collision near the disc. Truncating 18.3.1 at the first full stop would be an
  attribution failure and would also invert the teaching.

### What the three cards do

1. **18.3.1 — the definition, and its exception.** Two conditions, both
   required: you were guarding one particular player, and a different player
   physically prevented you moving with them. Then the carve-out: if your mark
   and the obstructing player were both playing the disc, there is no pick.
2. **18.3.1.1 — the two-second licence.** The call is not reflexive. You are
   explicitly allowed to hold it while you find out whether the obstruction
   mattered, which is the difference between a useful call and a stoppage
   nobody needed.
3. **18.3.2 + 18.3.3 — the remedy, and the shared duty.** 18.3.2 restores a
   position and gives nothing else. 18.3.3 puts the avoidance obligation on
   *all* players, which is the line most beginners have never read — the
   offence is not a passive party to a pick.

**Layout — NOT DRY-MEASURED. Estimates only.**

The render sandbox failed to mount again on 2026-09-11 (three identical Plan9
errors, the same `share "c" which is not mounted` failure as 2026-09-08 through
2026-09-10). `check_layout.py` and `node --check` could not be run. Every number
below is an estimate from the reel-36, reel-38 and reel-39 measurements, not an
emitted measurement, and must be verified at render time:

- Kickers are short. `#1   WHAT A PICK IS` (19 characters), `#2   THE
  TWO-SECOND WAIT` (24) and `#3   WHAT YOU GET BACK` (22) all sit at or below
  reel-39's longest, and well below reel-11's `SIMULTANEOUS MEANS OFFENCE`, the
  widest ever shipped at 873 of 900px. `fit_kicker()` is not expected to engage.
  **Verify** — the hyphen in "TWO-SECOND" is tracked like any other glyph.
- **Scene 3 is the card to watch.** 18.3.1 is a single 57-word block, the
  longest single quotation this reel carries and denser than either of the other
  two detail cards. It is comparable to reel-39's scene 7 (27 + 38 words across
  two blocks) but concentrated in one paragraph, so it will wrap deeper. If it
  crowds the citation footer, `fit_body()` is the remedy — **shrink the type,
  never the quotation.** If it trips the 80% floor, stop and say so.
- Scene 5 is short (24 words) and should land near the emptiest detail card in
  the run. Scene 7's two blocks are 27 and 11 words, also comfortable.
- **Likely `_payload()` cases.** 18.3.1 carries “Pick” in curly quotes
  mid-sentence and 18.3.1.1 carries the same fragment plus "two (2)". Verify in
  the PNGs, not the SVGs — this is the collision that cost reel-21 and
  carousel-post-5 a round.
- Projected duration **30.0s** on the house rhythm, matching reels 30–32, 35,
  36, 38 and 39. `TOTAL = 9`; `content/reel-36/render_v3.py` already has it.

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "A pick needs two things at once. You were guarding one particular
  player, and a different player physically stopped you moving with them. Not
  traffic in general, and not a defender who was covering space rather than a
  person. There is one carve-out: if your mark and the player who blocked you
  were both going for the disc, that is a contest, and there is no pick."
- Scene 4 — "You do not have to call it the instant it happens. The rules give
  the defender up to two seconds to hold the call while they work out whether
  the obstruction is going to affect the play at all. If your mark was cutting
  away from the disc, it cost you nothing, and the cheapest call is the one you
  never make."
- Scene 6 — "Play stops and you move to the position you would have occupied if
  nobody had been in your way. Agreed with the offence, not claimed. You are
  restored, not rewarded: no disc, no yardage, and the stall count comes back at
  maximum six. And the duty to avoid picks is written for all players, not only
  the ones who get to call them."
- Scene 8 (field tip) — "Because the count comes back at maximum six, a pick
  barely dents the offence — which cuts both ways. Calling one that did not cost
  you gains you almost nothing and stops the game for fourteen people. Take the
  two seconds, and call it when it genuinely took your mark away."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-36/render_v3.py` is the newest copy and already has `TOTAL = 9`.

---

## Script (~30s)

- Hook: "You are guarding someone, they cut, and a player you were not guarding steps straight into your path. Your mark is gone. That is a pick."
- Explanation: "It needs two things: you were guarding one particular player, and a different player physically stopped you going with them. If your mark and the player who blocked you were both going for the disc, that is a contest, not a pick. And you do not have to call it instantly — you may wait up to two seconds to see whether it actually mattered."
- Example: "Your mark goes deep, someone drifts out of the stack into your lane, and you lose two steps. Call pick and play stops. You move to where you would have been — restored, not rewarded. You do not get the disc, and the stall count comes back at maximum six, so the offence loses almost nothing. Which is why, if your mark was cutting away from the play anyway, the best call is often no call."
- CTA: "Lesson 40 of 75 — new lesson daily."

## Instagram caption

You are guarding someone. A player you are not guarding steps into your path, and your mark is gone.

That is a pick, and it is your call to make.

"If a defensive player is guarding one offensive player and they are prevented from moving towards/with that player by another player, that defensive player may call “Pick”. However it is not a pick if both the player being guarded and the obstructing player are making a play on the disc at the time of the obstruction."

It is a defensive call. You have to have been guarding someone in particular to be obstructed from following them.

And the exception matters. If the player you were guarding and the player who blocked you were both going for the disc, that is a contest, not an obstruction. No pick.

You also do not have to call it straight away:

"Prior to making the “Pick” call, the defender may delay the call up to two (2) seconds to determine if the obstruction will affect the play."

Two seconds is enough to see whether you lost anything. If your mark was cutting away from the disc, the traffic cost you nothing, and you can let it go.

When you do call it, here is what you get:

"If play has stopped, the obstructed player may move to the agreed position they would have otherwise occupied if the obstruction had not occurred, unless specified otherwise."

You are restored, not rewarded. You move to where you would have been. You do not get the disc, and the stall count comes back at maximum six, so the offence loses almost nothing.

And it is not only the defence's problem:

"All players should take reasonable efforts to avoid the occurrence of picks."

Offence included. Clearing a lane you are not using is part of playing well.

Lesson 40 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (18.3.1, 18.3.1.1, 18.3.2, 18.3.3). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

you're guarding someone. a player you're NOT guarding steps into your path. your mark is gone 🥏

that's a pick — and it's the defence's call

"If a defensive player is guarding one offensive player and they are prevented from moving towards/with that player by another player, that defensive player may call “Pick”. However it is not a pick if both the player being guarded and the obstructing player are making a play on the disc at the time of the obstruction."

→ both of them going for the disc? that's a contest, not a pick

and you don't have to call it instantly:

"Prior to making the “Pick” call, the defender may delay the call up to two (2) seconds to determine if the obstruction will affect the play."

two seconds to see if it actually cost you. mark cutting away anyway? let it go

what you get when you do call it:

"If play has stopped, the obstructed player may move to the agreed position they would have otherwise occupied if the obstruction had not occurred, unless specified otherwise."

restored, not rewarded ← you move to where you'd have been. no disc, and the count comes back at maximum six

and it's not only the defence's job:

"All players should take reasonable efforts to avoid the occurrence of picks."

offence too. clear the lane you're not using

lesson 40 of 75

rules from WFDF Rules of Ultimate 2025–2028 (18.3.1, 18.3.1.1, 18.3.2, 18.3.3) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(18.3.1, 18.3.1.1, 18.3.2, 18.3.3).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the reel-30,
  31, 32, 35, 36, 38 and 39 shape. `TOTAL = 9`, which `reel-36/render_v3.py`
  has.
- **NOT DRY-MEASURED.** The render sandbox failed to mount on 2026-09-11, the
  fourth consecutive day. Every layout number above is an estimate. Verify at
  render time before trusting any of it.
- **No departures.** Every carded rule is in the lesson's `rules` array and
  every footer cites only what its card quotes. 18.3 is a heading stem
  (`“Pick” Violations:`) and is deliberately not carded; nothing beneath it
  needs it for meaning, unlike reel 34's 1.6 or reel 39's 9.6.
- **SCENE 3 IS THE CARD TO WATCH.** 18.3.1 is one 57-word block — the longest
  single quotation in the reel and concentrated in one paragraph rather than
  split across two, so it wraps deeper than reel-39's scene 7. If it crowds the
  citation, let `fit_body()` shrink the type. Never trim the quotation.
- **Do not truncate 18.3.1 at the first full stop.** "However it is not a pick
  if both the player being guarded and the obstructing player are making a play
  on the disc…" is the same rule, and it is the half that keeps the call from
  being used on every collision near the disc.
- **Do not say the offence is punished.** 18.3.2 restores a position and does
  nothing else — no disc, no yardage — and the count comes back at maximum six
  (lesson 39). "Restored, not rewarded" is the spine of the reel.
- Keep the curly quotes in “Pick” — they are the rulebook's — and keep
  "two (2)" exactly as written in 18.3.1.1.
- Instagram caption 1,977 characters including hashtags (90% of the 2,200
  limit, below the 95% warning line); TikTok 1,404 of 4,000. Both plain text,
  no markdown — scanned for bold and italic asterisk markers, backticks,
  markdown links, hash headings and dash bullets. Measured in UTF-16 units on
  2026-09-11 outside the sandbox, since `check_caption.py` could not be run;
  `build_desk.py` re-runs it as a backstop at sync time.
- Curriculum position: lesson 40 is index 5 of `content/lessons-3.json`, the
  next unused lesson after 39. It covers 2026-09-14, the only bare date in the
  tomorrow-through-tomorrow+2 window. No Thursday falls in that window, so no
  recap carousel is due this run; the next is 2026-09-17.
- No growth/reach claims in either caption.
