# Reel 46 — Don't touch a pull you can't catch

**Status:** Pending review
**Script drafted:** 2026-09-13 (daily-reel-render, draft run) · **Rendered:** —
**Queued:** 2026-09-20 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (7.8, 13.1, 13.1.4, 7.10)
**Source lesson:** `content/lessons-3.json` → `dropped-pull`

First reel of a new block. Reels 42–45 covered the turnover chapter from the
inside — where you pick the disc up, who fetches it, when play is dead. This one
steps back to the moment before all of that: the pull, and the one thing a
beginner does to it that hands over possession for free.

---

## Video — `reel46-dropped-pull.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39, 40, 41, 42, 43, 44
and 45.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Don't touch a pull you can't catch · kicker BEGINNER · LESSON 46 / 75 |
| 2 | #1 TOUCH IT, OWN IT | "Get a hand to the pull and you have accepted the consequences." · footer cites 7.8 |
| 3 | Rules detail | Verbatim 7.8, one block |
| 4 | #2 IT IS A TURNOVER | "Not a technicality — it's on the rulebook's own turnover list." · footer cites 13.1 · 13.1.4 |
| 5 | Rules detail | Verbatim 13.1 as block lead, with 13.1.4 sub-numbered beneath it |
| 6 | #3 LET IT LAND | "Leave it alone and it costs you nothing at all." · footer cites 7.10 |
| 7 | Rules detail | Verbatim 7.10, one block |
| 8 | FIELD TIP | "If you're not certain you'll catch it cleanly, let it land. You lose nothing." |
| 9 | Closing | "Lesson 46 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### FLAGGED: 13.1 is carded but is NOT in the lesson's `rules` array

- **13.1.4 is a fragment.** It reads `during the pull, the offence touches the
  disc before it hits the ground, and subsequently fails to establish possession
  of the disc (a “dropped pull”).` — lower-case "during", no subject, no verb of
  its own. It is item four under 13.1's colon stem, `A turnover that transfers
  possession of the disc from one team to the other occurs when:`, and it does
  not read without it.
- **So 13.1 is carded as the block lead on scene 5**, exactly as reel-45 carded
  8.1 ahead of 8.1.1–8.1.4. The precedent is established; what is new here is
  that **8.1 was in reel-45's `rules` array and 13.1 is not in this one.** Step 1
  says rule numbers come from the lesson's array, so this is a deviation and it
  is deliberate.
- **The alternatives were both worse.** Carding 13.1.4 bare puts an
  ungrammatical sentence fragment on screen. Dropping 13.1.4 entirely leaves an
  array rule uncited and collapses the reel to two pairs and seven scenes, which
  no reel since 29 has used.
- **This is a judgement call, not a rule.** If you'd rather the array stayed
  authoritative, say so at the script gate and the fallback is the seven-scene
  two-pair cut (7.8 and 7.10 only), which needs no new copy — just delete the
  scene 4/5 pair and renumber. The attribution line would then read (7.8, 7.10).
- Every footer cites only what its own card quotes. 13.1 appears in one footer
  because it appears on one card.

### What the three cards do

1. **7.8 — the rule, and the two words that cost possession.** Touch the pull
   before it grounds, fail to establish possession, turnover. "In-bounds or
   out-of-bounds" is inside the rule text itself, which is why the speculative
   tip on a pull already heading out is a real risk rather than a free swat.
2. **13.1 + 13.1.4 — it is a turnover in its own right.** The Turnovers chapter
   lists a dropped pull alongside a drop, a throwaway and a block. Same list,
   same consequence. This is the card that stops a beginner filing it under
   "unlucky" instead of "my fault".
3. **7.10 — the cost of doing nothing, which is zero.** Untouched, landing
   in-bounds and staying there, you establish a pivot wherever it stopped. Even
   in your own end zone, it is still your disc. The asymmetry between cards 1
   and 3 is the entire lesson.

**Layout — NOT DRY-MEASURED in the sandbox. Kickers and captions measured in
the browser.**

Seventh consecutive mount failure, 2026-09-13, same Plan9 `share "c" which is
not mounted` error as 09-08 onwards. `check_layout.py`, `check_caption.py` and
`node --check` could not be run.

- **Kickers**, longest 19 characters: `#1 TOUCH IT, OWN IT`, `#2 IT IS A
  TURNOVER`, `#3 LET IT LAND`. Measured in Chrome against reel-41's recorded
  `#1 CONTACT OFF THE DISC` (654.9px of 900px at 34px Arial Bold) as the
  reference, all three land near 500px, 510px and 370px — roughly 77%, 77% and
  56% of the reference. `fit_kicker()` is not expected to engage anywhere.
  Verify at render time.
- **The body load is light and unevenly spread.** Scene 3 is one block of 34
  words. Scene 5 is two blocks totalling 47 words and carries two number lines.
  Scene 7 is one block of 37 words. All three are lighter than reel-32's
  three-block card, and lighter than reel-45's two three-block cards.
  `fit_body()` is not expected to engage. **Measure, do not assume** — scene 5
  is the only one worth watching.

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "If anyone on your team gets a hand to the pull before it hits the
  ground, and your team then fails to establish possession, that is a turnover.
  It does not matter whether you were in-bounds or out-of-bounds when you
  touched it. That speculative tip on a pull drifting out is a real risk."
- Scene 4 — "This is not a technicality tucked away in the pull chapter. The
  turnover chapter lists a dropped pull in its own right, alongside a drop, a
  throwaway and a block. Same list. Same consequence. It is not bad luck, it is
  a turnover you chose."
- Scene 6 — "Now look at what leaving it alone costs you. Nothing. If the pull
  lands in the field and never goes out, you walk to wherever it stopped and
  establish your pivot there. Even if that is deep in your own end zone, the
  disc is still yours."
- Scene 8 (field tip) — "So the maths is not close. Touching it can lose you
  possession and leaving it cannot. If you are not certain you will catch it
  cleanly, let it land. Nobody has ever been blamed for a pull they let bounce."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
In the cloud build run this works as written. On Windows, `python
tools\win_render.py reel-46` — read `tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-41/render_v3.py` or newer**, never
from reel-36 or earlier; only reels 38 onwards carry the `tracked()` word-gap
fix.

---

## Script (~30s)

- Hook: "The most common free turnover in beginner ultimate happens before anybody has thrown a pass."
- Explanation: "If an offensive player touches the pull before it hits the ground and the offence then fails to establish possession, that's a turnover — a dropped pull. In-bounds or out-of-bounds, it counts the same."
- Example: "So the pull is drifting toward the sideline and you reach up to tip it in. It bounces off your hands. That isn't a nice try, that's the other team's disc. Leave it alone and it lands, and you walk to wherever it stopped and start your point — even if that's deep in your own end zone. Touching it can cost you possession. Leaving it cannot."
- CTA: "Lesson 46 of 75 — new lesson daily."

## Instagram caption

The most common free turnover in beginner ultimate happens before anybody has thrown a pass.

It is the pull. Somebody reaches up, gets a hand to it, and does not catch it.

"If an offensive player, in-bounds or out-of-bounds, touches the disc before it hits the ground, and the offensive team fails to subsequently establish possession, that is a turnover (a “dropped pull”)."

Read that twice, because two words in it cost teams possession every weekend: in-bounds or out-of-bounds.

The speculative tip on a pull that is drifting out anyway is not a free swat. If you touch it and your team does not come down with it, the disc belongs to the other team.

This is not a technicality tucked away in the pull chapter, either. The turnover chapter lists it in its own right:

"A turnover that transfers possession of the disc from one team to the other occurs when:"

"during the pull, the offence touches the disc before it hits the ground, and subsequently fails to establish possession of the disc (a “dropped pull”)."

Same list as a drop, a throwaway or a block. Same consequence.

And here is what you give up by leaving it alone. Nothing.

"If the disc initially contacts the playing field and never becomes out-of-bounds, the thrower must establish a pivot point where the disc stops, even if that pivot point is in their defending end zone."

Let it land, walk to wherever it stopped, start your point. Even deep in your own end zone, it is still your disc.

So the maths is not close. Touching it can lose you possession. Leaving it cannot.

If you are not certain you will catch it cleanly, let it land.

Lesson 46 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (7.8, 13.1, 13.1.4, 7.10). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

the most common free turnover in beginner ultimate happens before anyone throws a pass 🥏

it's the pull. someone reaches up, gets a hand on it, doesn't catch it

"If an offensive player, in-bounds or out-of-bounds, touches the disc before it hits the ground, and the offensive team fails to subsequently establish possession, that is a turnover (a “dropped pull”)."

read that twice ↑ in-bounds OR out-of-bounds

that speculative tip on a pull drifting out anyway? not free. touch it, don't catch it, it's their disc

and it's not some technicality in the pull chapter. the turnover chapter lists it too:

"during the pull, the offence touches the disc before it hits the ground, and subsequently fails to establish possession of the disc (a “dropped pull”)."

same list as a drop or a throwaway 🚫

now what do you give up by leaving it? nothing:

"If the disc initially contacts the playing field and never becomes out-of-bounds, the thrower must establish a pivot point where the disc stops, even if that pivot point is in their defending end zone."

let it land, walk to it, start your point. even in your own end zone it's still yours

touching it can lose you the disc. leaving it can't. not close

not sure you'll catch it cleanly? let it land

lesson 46 of 75

rules from WFDF Rules of Ultimate 2025–2028 (7.8, 13.1, 13.1.4, 7.10) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the WFDF Rules of Ultimate 2025–2028
(7.8, 13.1, 13.1.4, 7.10).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs. `TOTAL = 9`.
- **NOT DRY-MEASURED** — seventh consecutive sandbox mount failure. Caption
  figures were measured in the browser; kicker widths are relative to reel-41's
  recorded reference and body layout is an estimate. Verify at render time.
- **FLAGGED: 13.1 IS CARDED BUT IS NOT IN THE LESSON'S `rules` ARRAY.** 13.1.4
  is a lower-case sentence fragment under 13.1's colon stem and does not read
  without it, so 13.1 goes on scene 5 as the block lead — the same move reel-45
  made with 8.1, except that 8.1 *was* in reel-45's array. Deliberate deviation
  from Step 1's "rule numbers come from that lesson's `rules` array". Fallback if
  you'd rather not: delete the scene 4/5 pair for a seven-scene two-pair cut
  citing 7.8 and 7.10 only. No new copy needed.
- **Preserve the rulebook's own quote marks.** Both 7.8 and 13.1.4 end with
  `(a “dropped pull”).` — curly doubles around the term, inside parentheses,
  before the full stop. That is how `rules.json` has it and it must survive to
  the PNG unchanged. **LIKELY `_payload()` CASE:** 13.1.4 starts lower-case on
  "during", which is unusual for a card and may look like a bug to a reviewer —
  it is not, it is the rulebook's own text.
- **7.8 and 13.1.4 say nearly the same thing, on purpose.** 7.8 is the Pull
  chapter's statement of it; 13.1.4 is the Turnovers chapter listing it as one
  of the ways possession changes hands. Card 2's job is that second framing —
  "this is a real turnover" — not a restatement of card 1. If the two cards read
  as repetition at the script gate, that is the signal to take the seven-scene
  fallback above.
- **Do not overstate 7.10.** It covers a pull that lands in the playing field
  and never goes out. A pull that lands and then rolls out is 7.11 (brick or
  perimeter pivot), which is lesson 47's material and is deliberately not
  mentioned here.
- **Do not say the defence may not touch the pull** — that is 7.7 and is not in
  this lesson. This reel is only about the offence touching it.
- Instagram caption 1,877 characters including hashtags (85.3% of the 2,200
  limit); TikTok 1,363 of 4,000. Both plain text and scanned clean of markdown.
  Measured in UTF-16 units in the browser on 2026-09-13, since
  `check_caption.py` could not be run.
- Curriculum position: lesson 46 is index 12 of `content/lessons-3.json`, the
  next unused lesson after 45. It covers 2026-09-20, the only bare date in the
  tomorrow-through-tomorrow+6 window this run.
- No growth/reach claims in either caption.
