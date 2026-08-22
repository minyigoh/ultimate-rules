# Reel 20 — "Double team: the three-metre rule"

**Status:** Pending review
**Script drafted:** 2026-08-22 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-25 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (18.1.1.5, 18.1.1.5.1, 18.1.1.5.2, 15.5.1)
**Source lesson:** `content/lessons-2.json` → `double-team`

Fourth lesson from `lessons-2.json` and the last of the four-lesson marking
block. Lessons 17–19 were all about the one defender allowed near the thrower:
where their body may be, and what their mouth is doing. This one is about the
second defender who shouldn't be there at all — and it's the first lesson in
the curriculum where the answer depends on what a player somewhere else on the
field is doing.

---

## Video — `reel20-double-team.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16 and 18.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Double team: the three-metre rule" · kicker BEGINNER · LESSON 20 / 75 |
| 2 | #1 INSIDE THREE METRES | "A second defender that close to the pivot is illegal." · footer cites 18.1.1.5 |
| 3 | Rules detail | Verbatim 18.1.1 + 18.1.1.5 |
| 4 | #2 THE ZONE EXCEPTION | "Unless they're actually guarding somebody else." · footer cites 18.1.1.5.1, 18.1.1.5.2 |
| 5 | Rules detail | Verbatim 18.1.1.5 + 18.1.1.5.1 + 18.1.1.5.2 |
| 6 | #3 ANYONE CAN CALL IT | "Any offensive player, not just the thrower." · footer cites 15.5.1 |
| 7 | Rules detail | Verbatim 15.5 + 15.5.1 |
| 8 | FIELD TIP | "In a zone, watch for the poacher who isn't guarding anyone" |
| 9 | Closing | "Lesson 20 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 3 uses the parent-plus-child form
`('18.1.1', [rt('18.1.1'), ('18.1.1.5', rt('18.1.1.5'))])`, the same stem reels
17, 18 and 19 used: "Marking infractions include the following:" is what makes
each child a rule rather than a definition floating free.

Scene 5 re-states 18.1.1.5 as its own stem before its two children, because
18.1.1.5.1 and 18.1.1.5.2 both begin mid-thought — "The defender guarding
another offensive player…", "Merely running across this area…" — and neither
names the three-metre zone it is carving out of. Reel 18 set the precedent for
repeating a stem across two cards. The cost is that 18.1.1.5's sentence appears
twice in the reel; the alternative is a card whose subject is off-screen.

Scene 7 carries 15.5 as the stem for the same reason: 15.5.1 opens with
"However", and on its own it reads as though double team were the only
infraction anyone can call. 15.5 is not in the lesson's `rules` array, and is
on the card only as the sentence 15.5.1 is contradicting — the same treatment
18.1.1 gets on scenes 3 and 5.

**Kickers:** all three at 18–19 characters, comfortably inside the 900px
column at the standard 34px. None engages `fit_kicker()`'s shrink, let alone
its 27px floor.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Two defenders on the thrower is illegal. But the exception carries all the weight, and it's the reason zone defence exists."
- Explanation: "Any defender who isn't the marker, standing within three metres of the thrower's pivot point, is a double team. Three metres is about ten feet. It doesn't matter whether they're doing anything with their hands — the position on its own is the infraction."
- Example: "Unless they're also guarding another offensive player. Then they can stand right there, and they're allowed to reach for the throw, as long as they keep guarding that other player. And simply running through the area on your way somewhere isn't a double team either. One more thing most people don't know: any offensive player can make this call. Not just the thrower."
- CTA: "Lesson 20 of 75 — new lesson daily."

## Instagram caption

Two defenders on the thrower is illegal. But the exception carries all the weight, and it's the reason zone defence is legal at all.

**The rule itself is a distance.** Any defensive player other than the marker who comes within three metres of the thrower's pivot point — about ten feet — without also guarding another offensive player is double teaming. Note what's missing from that sentence: nothing about hands, nothing about intent, nothing about whether they're trying to block the throw. The position is the infraction on its own.

**The exception is where the sport actually lives.** A defender who is genuinely guarding someone else may stand in that zone, and may attempt to stop the pass, provided they keep guarding that other player. Every zone defence you've ever seen depends on this clause. And merely running across the area — clearing through, chasing a cutter, getting somewhere — is explicitly not a double team.

**Which makes this a judgement about someone else.** Almost every other marking call is about the marker in front of you. This one asks a question about a player behind you: is that second defender guarding anyone? If the answer is no, it's a double team no matter how still they're standing.

**And unusually, you don't have to be the thrower to say so.** In general only the thrower may claim an infraction, but double team is one of two carve-outs — any offensive player can call it. So if you're a cutter watching a poacher drift in with nobody to cover, that call is yours to make. It's a marking infraction, so nothing stops: the defender backs out, the count resumes one lower, and the point carries on.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

second defender standing on your thrower? that's a double team 🥏

within three metres of the pivot, not guarding anyone else = illegal. doesn't matter what their hands are doing

BUT if they are guarding someone else they can stand there and even go for the block. that's why zone defence is legal

and any offensive player can call it — you don't have to be the thrower

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule groups — the definition, the two carve-outs, and
  who may call it — so three pairs, same shape as reels 16 and 18.
- **The count-minus-one behaviour is not carded.** Double team sits in the
  18.1.1 list, so 18.1.3 applies and the count resumes one lower, but 18.1.3
  is not in this lesson's `rules` array and reel 18 carded it two days ago. It
  stays in the caption's closing paragraph, where it needs no citation chip.
- **"About ten feet" is a gloss, not a quotation.** The rule says three metres
  and the card says three metres; the spoken line adds the imperial
  approximation only because the reel is watched, not measured.
- **15.5 appears on scene 7 as a stem only.** The lesson sources 15.5.1; 15.5
  is the sentence it begins by contradicting, and without it the card implies
  the wrong general rule. Same treatment 18.1.1 gets.
- **The second carve-out (15.5.1's travel half) is deliberately left alone.**
  15.5.1 also lets any defensive player call a travel — that text is on the
  card because it's verbatim, but the script doesn't chase it. Travel was
  lesson 16 and re-explaining who may call it here would pull the reel in two
  directions.
- **Closes out the marking block.** Lessons 17–20 are the four marking
  lessons; lesson 21 moves to foul / infraction / violation, which is where
  the general shape of calls gets explained properly. This reel introduces the
  "any offensive player" carve-out as a fact, not as a theory of calls.
- No growth/reach claims in either caption.
- **Thursday 2026-08-27 is still due a recap carousel** for the next
  un-recapped block, lessons 15–21. As of this draft, lessons 15 and 16 have
  posted; 17 posts today, 18–20 are queued and 21 is not drafted. Expect a
  short recap of what has actually posted by then, or a skip with a note, per
  Step 1.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
