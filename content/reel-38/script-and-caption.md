# Reel 38 — The check: restarting play

**Status:** Pending review
**Script drafted:** 2026-09-09 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-12 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (10.6.1, 10.6.1.1, 10.6.1.2, 10.6.2, 10.4)
**Source lesson:** `content/lessons-3.json` → `the-check`

Reels 35, 36 and 37 were the chapter-16 run: the freeze, continuation, and the
agreement that overrides both. Every one of them ends the same way — "restart
play with a check" — and none of them said what a check actually is. This reel
does. It is the procedural floor under the three that came before it.

---

## Video — `reel38-the-check.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35 and 36.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | The check: restarting play · kicker BEGINNER · LESSON 38 / 75 |
| 2 | #1 WHO TOUCHES IT IN | "Disc in hand? Somebody has to touch it." · footer cites 10.6.1 · 10.6.1.1 · 10.6.1.2 |
| 3 | Rules detail | Verbatim 10.6.1 as block lead + 10.6.1.1 + 10.6.1.2 |
| 4 | #2 DISC ON THE GROUND | "Nearest defender calls it in." · footer cites 10.6.2 |
| 5 | Rules detail | Verbatim 10.6.2 |
| 6 | #3 CHECK BEFORE THE CHECK | "Two people confirm before anyone touches anything." · footer cites 10.4 |
| 7 | Rules detail | Verbatim 10.4 |
| 8 | FIELD TIP | "Look around before you check it in." |
| 9 | Closing | "Lesson 38 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### No departures — every number on every card is in the lesson's `rules` array

Reel 34 had to card the 1.6 stem, and reel 36 carded 16.2, because in both
cases a sub-item was a fragment that meant nothing alone. Reel 38 has the same
shape and none of the judgement:

- **10.6.1 is a stem *and* it is cited.** It reads "when the thrower has the
  disc:" and cannot stand alone; 10.6.1.1 and 10.6.1.2 hang off it. But 10.6.1
  is in the lesson's own `rules` array, so carding it as the block lead with
  both sub-numbered items beneath is the reel-36 shape with the approval
  question already answered. All three numbers are claimed on the footer and
  all three are quoted.
- **10.6 is a stem and is *not* carded.** "To restart play with a check:" is
  not in the lesson's `rules` array. The frame it supplies is supplied instead
  by the cover title and the scene-2 kicker, which is where it belongs. This
  matches reel 35 holding 10.2 back and reel 36 holding 16.2.4 back.
- **10.6.2 and 10.4 are complete sentences**, so scenes 5 and 7 are one
  ordinary block each — the reel-35 shape.

### What the three cards do

1. **10.6.1 + 10.6.1.1 + 10.6.1.2 — the thrower is holding it.** A defender in
   reach touches the disc. No defender in reach, and the thrower touches it to
   the ground and may call "Disc In" himself. The second limb is the one
   beginners miss: you are not stuck waiting for an opponent who is not coming.
2. **10.6.2 — the disc is on the ground.** Nobody touches anything. The nearest
   defender calls "Disc In", and the call is the restart.
3. **10.4 — before either of those.** The person checking it in and the nearest
   opponent each verify *their own* team-mates are ready and correctly
   positioned. Two people, each responsible for their own side.

### What is deliberately left out

- **10.7 and the violation for moving before the check.** The lesson's own quiz
  turns on it, so the field tip names the consequence in prose — but 10.7 is
  **not** in the lesson's `rules` array, so no card claims it and no footer
  cites it. This is the same call reel 36 made on 16.2.1/16.2.2. If it is a
  step too far, say so and the field tip drops its last sentence; nothing else
  moves.
- **10.5**, the unnecessary-delay case, and **10.2**, the positioning 10.4
  points at. 10.2 was reel 35's material and is named only inside the verbatim
  10.4 text, where it is WFDF's own cross-reference, not ours.
- **What the stall count restarts at.** That is lesson 39, tomorrow's reel, and
  it is not opened here.

**Layout — NOT dry-measured this run.** The sandbox that runs
`render_v3.py` and `tools/check_layout.py` failed to mount on 2026-09-09
(three identical Plan9 mount errors), so unlike every script since reel 30
this one carries estimates rather than emitted measurements. Treat every
number below as a prediction to be confirmed at render time, not a
verification:

- Kickers, estimated against the ~26px/character observed across reels 35–37
  at the standard 34px: `#1   WHO TOUCHES IT IN` ≈ 570 of the 900px column,
  `#2   DISC ON THE GROUND` ≈ 595, `#3   CHECK BEFORE THE CHECK` ≈ 700. All
  three should sit well clear of the 900px column and `fit_kicker()` should
  never engage. The widest kicker ever shipped is reel-11's at 873.
- Bodies: scenes 2 and 6 are seven-line candidates at 36px and will likely
  auto-fit to 33px; scene 4 should hold six lines at 36px. `fit_body()` exists
  for exactly this and needs no help.
- Detail cards: scene 3 carries three blocks and four number lines and is the
  densest card in the reel — the closest precedent is reel-36's scene 7 pair at
  890 of 1310, and scene 3 adds two short blocks on top of that. **This is the
  one measurement that could actually bite.** If it collides with the citation
  footer, split 10.6.1.2 onto its own card and drop the field tip to hold the
  scene count at nine rather than reworking the copy. Scenes 5 and 7 are single
  short blocks and should land near 450–550.
- `check_layout.py` must be run before this is called clean. It has not been.
- Projected duration **30.0s** on the house rhythm, by scene count alone.

**The four slide bodies the reel should be rendered from**, recorded here so
the render is reproducible rather than re-derived from the beats:

- Scene 2 — "Every stoppage in ultimate ends the same way: with a check. If the
  thrower is holding the disc and a defender is within reach, that defender
  touches the disc and play is live again. If nobody is in reach, the thrower
  touches it to the ground and may call it in. You are never stuck waiting for
  an opponent who is not coming."
- Scene 4 — "If the disc is not in anybody's hands, lying where the turnover
  happened, nobody touches anything at all. The defender nearest to it calls
  the disc in, and that call is the restart. It is the defence's to make, and
  the offence does not need to wait for a tap."
- Scene 6 — "Before any of that, two people have a job. The player checking the
  disc in and the nearest opponent each confirm that their own team-mates are
  ready and standing where the rules put them. Their own — not the other
  team's. That is why a check is more than somebody tapping a disc."
- Scene 8 (field tip) — "Actually look around before you check it in. Checking
  in while your own team is still jogging back is how a defence concedes before
  it is set. And an opponent who was still moving when the disc went live is
  something you are allowed to call."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-36/render_v3.py` is the newest copy and already has `TOTAL = 9`.

---

## Script (~30s)

- Hook: "Play stopped. Everybody is standing still. Now what? There is a procedure, it takes about three seconds, and almost nobody has read it."
- Explanation: "Restarting is called a check, and who does what depends on where the disc is. Thrower holding it with a defender in reach: that defender touches the disc. Nobody in reach: the thrower touches it to the ground and calls it in. Disc lying on the ground: the nearest defender calls it in and nobody touches anything."
- Example: "You get fouled, play stops, and your mark is three metres away and walking back. You do not have to stand there holding the disc waiting for them. Touch it to the ground, call it in, and you are live. But before you do — the rule says the person checking it in and the nearest opponent each confirm their own team-mates are ready. Your own team, not theirs. Check it in while your own defence is still jogging back and you have just conceded the restart."
- CTA: "Lesson 38 of 75 — new lesson daily."

## Instagram caption

Play just stopped. Everyone is standing still. Now what?

The restart is called a check, and there are about three seconds of procedure in it that prevent most restart arguments. Who does what depends on where the disc is.

If the thrower is holding it:

"when the thrower has the disc:"

"if there is a defender within reach, the defender must touch the disc."

"if there is not a defender within reach, the thrower must touch the disc to the ground and may call “Disc In”."

So a defender in reach touches the disc. No defender in reach, and you touch it to the ground yourself and call it in. You do not stand there waiting for an opponent who is not coming.

If the disc is on the ground instead:

"when the disc is on the ground, the defender nearest to the disc must call “Disc In”."

Nobody touches anything. The call is the restart, and it belongs to the defence.

And before any of that, one line most people have never read:

"Prior to the check the person checking the disc in, and the nearest opposition player, must verify that their own team-mates are ready, and positioned as per 10.2."

Each of those two people checks their own team. Not the other one's. So "are you ready?" is not a courtesy. It is a rule, and it is why a check is more than somebody tapping a disc.

The practical version: actually look around before you check it in. Checking in while your own team is still jogging back is how a defence concedes before it is set.

Lesson 38 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (10.6.1, 10.6.1.1, 10.6.1.2, 10.6.2, 10.4). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

play just stopped. everyone's standing still. now what? 🥏

the restart is called a check. who does what depends on where the disc is

thrower is holding it:

"when the thrower has the disc:"

"if there is a defender within reach, the defender must touch the disc."

"if there is not a defender within reach, the thrower must touch the disc to the ground and may call “Disc In”."

→ defender in reach taps the disc
→ nobody in reach? you touch it to the ground and call it in yourself. don't wait for an opponent who isn't coming

disc on the ground instead:

"when the disc is on the ground, the defender nearest to the disc must call “Disc In”."

nobody touches anything. the call IS the restart, and it's the defence's to make

and the line nobody reads:

"Prior to the check the person checking the disc in, and the nearest opposition player, must verify that their own team-mates are ready, and positioned as per 10.2."

each of those two checks their OWN team. not the other one's

so look around before you check it in. checking in while your own team is still jogging back is how a defence concedes before it's set

lesson 38 of 75

rules from WFDF Rules of Ultimate 2025–2028 (10.6.1, 10.6.1.1, 10.6.1.2, 10.6.2, 10.4) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(10.6.1, 10.6.1.1, 10.6.1.2, 10.6.2, 10.4).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the reel-30,
  31, 32, 35 and 36 shape. `TOTAL = 9`, which `reel-36/render_v3.py` already has.
- **10.6.1 is carded as a block lead and that is not a departure** — it is in
  the lesson's `rules` array, exactly like reel 36's 16.2 and unlike reel 34's
  1.6. 10.6.1.1 and 10.6.1.2 cannot stand without it.
- **10.6 is not carded.** "To restart play with a check:" is not in the
  lesson's `rules` array, and the cover title already says what the reel is
  about. Nothing on screen is broader than what is cited.
- **10.7 is named in the field tip's prose but never carded or cited.** It is
  the lesson's own quiz answer, so leaving it out entirely would teach the
  procedure without the consequence — but it is not in the `rules` array. Same
  call as reel 36's 16.2.1/16.2.2. If it is too broad, cut the field tip's last
  sentence.
- **"Disc In" is the rulebook's own phrase**, curly quotes included, and is
  quoted as such in 10.6.1.2 and 10.6.2. Do not straighten the quotes and do
  not paraphrase it to "call it in" on a card — that is caption prose, not
  card text.
- **Do not make the thrower's ground-touch optional-sounding.** 10.6.1.2 says
  the thrower *must* touch the disc to the ground and *may* call "Disc In". The
  touch is mandatory; only the call is permissive. Reversing that is the
  misreading this reel exists to prevent.
- **10.4 is two people checking their own sides, not one person checking
  everyone.** Rendering it as "make sure everybody's ready" loses the whole
  point of the rule.
- **LIKELY `_payload()` CASES — verify in the PNGs, not the SVGs.** Both
  verbatim quotations on scene 3's second and third blocks end with a double
  quote character, and the wrapped line containing `“Disc In”.` may end a line
  in either. Scene 2's body has no quotes. This is the collision that cost
  reel-21 and carousel-post-5 a round; check it before shipping.
- Instagram caption measures 1,731 characters including hashtags — 79% of the
  2,200 limit, below the 95% warning line. TikTok 1,251 of 4,000. Both plain
  text, no markdown. Measured on 2026-09-09 in UTF-16 units, the way the
  platforms count, because `tools/check_caption.py` could not be executed this
  run — the sandbox was down. **Re-run `check_caption.py` at sync time**;
  `build_desk.py` runs it as a backstop and will refuse to build on a breach.
- **This script has not been dry-measured for layout.** See the layout section
  above. Every previous script since reel 30 carried emitted measurements; this
  one carries estimates, and scene 3 is the card to watch.
- Curriculum position: lesson 38 is index 3 of `content/lessons-3.json`, the
  next unused lesson after 37. Lessons 1–16 are `lessons-1.json`, 17–34 are
  `lessons-2.json`, 35–75 are `lessons-3.json`.
- No growth/reach claims in either caption.
