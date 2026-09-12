# Reel 41 — Indirect fouls

**Status:** Pending review
**Script drafted:** 2026-09-12 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-15 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.8.1, 17.8.1.1, 17.8.2)
**Source lesson:** `content/lessons-3.json` → `indirect-foul`

Reel 40 was the pick — traffic that stops you following your mark. This is the
other half of the off-disc pair: contact that is a genuine foul but happens
where the disc is not. Same two-second licence, same restore-the-position
remedy, different rule chapter. Running them back to back is deliberate; the
two calls get confused constantly and the difference is worth one reel.

---

## Video — `reel41-indirect-fouls.mp4` (1080×1920, 30fps)

Nine scenes — cover, three topic/rules-detail pairs, field tip, closing. The
three-pair shape, same as reels 30, 31, 32, 35, 36, 38, 39 and 40.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Indirect fouls · kicker BEGINNER · LESSON 41 / 75 |
| 2 | #1 CONTACT OFF THE DISC | "A real foul, in a place the disc never reached." · footer cites 17.8.1 |
| 3 | Rules detail | Verbatim 17.8.1, one block |
| 4 | #2 THE TWO-SECOND WAIT | "You are allowed to find out whether it mattered." · footer cites 17.8.1.1 |
| 5 | Rules detail | Verbatim 17.8.1.1, one block |
| 6 | #3 MAKE UP THE GROUND | "You get the position back. That is the whole remedy." · footer cites 17.8.2 |
| 7 | Rules detail | Verbatim 17.8.2, one block |
| 8 | FIELD TIP | "Most off-disc contact resolves itself. Call it when it stopped you getting somewhere." |
| 9 | Closing | "Lesson 41 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

### No departures, and one stem left off

- **17.8 is not carded.** It reads `Indirect Fouls:` — a heading stem, exactly
  like 18.3's `“Pick” Violations:` in reel 40 and 9.5 in reel 39. 17.8.1 opens
  with its own complete subject ("An Indirect Foul occurs when…") and defines
  the term itself, so nothing beneath the stem needs it for meaning. No block
  lead, so this reel makes none of the calls reels 34 and 39 had to make.
- **Every rule carded is in the lesson's `rules` array**, and every footer
  cites only what its own card quotes. Three rules, three cards, three footers.
- **17.8.1 is one sentence and is quoted whole.** Its qualifier — "does not
  directly affect an attempt to make a play on the disc" — is the entire
  boundary between this call and an ordinary receiving foul. Truncating it
  would invert the teaching.

### What the three cards do

1. **17.8.1 — the definition, and the two conditions inside it.** Non-minor
   contact, between a receiver and a defender, that does not directly affect an
   attempt to play the disc. Both halves matter: minor contact is not a foul at
   all (reel 31), and contact that *does* affect a play on the disc is an
   ordinary receiving foul (reel 32), not this.
2. **17.8.1.1 — the two-second licence.** Word for word the same allowance the
   pick call gets, and for the same reason: most off-disc contact turns out not
   to have cost anybody anything.
3. **17.8.2 — the remedy, and how small it is.** The fouled player makes up the
   positional disadvantage. No disc, no yardage, no stall reset. This is the
   line that stops the call being worth angling for.

**Layout — NOT DRY-MEASURED in the sandbox. Kickers measured in the browser.**

The workspace sandbox failed to mount again on 2026-09-12 — the fifth
consecutive day, same `share "c" which is not mounted` Plan9 error as 09-08
through 09-11. `check_layout.py`, `check_caption.py` and `node --check` could
not be run.

Two of those numbers are not estimates this time. Kicker widths and caption
lengths were measured directly in headless Chrome — the same renderer
`tools/win_render.py` uses on Windows, and the same UTF-16 counting the
platforms use — rather than extrapolated from earlier reels:

- **Kickers, measured at 34px in Arial Bold** (the metric-compatible substitute
  `win_render.py` uses for Liberation Sans), against the 900px column:
  `#1 CONTACT OFF THE DISC` 654.9px (72.8%), `#2 THE TWO-SECOND WAIT` 643.5px
  (71.5%), `#3 MAKE UP THE GROUND` 618.4px (68.7%). All three sit well inside
  the column and `fit_kicker()` will not engage. For reference, the same
  measurement puts reel-11's `SIMULTANEOUS MEANS OFFENCE` — the widest ever
  shipped — at 806.6px. **Note the two measurement bases do not agree:** the
  shipped figure for that kicker is documented as 873px from PIL against
  Liberation Sans Bold, against 806.6px from Chrome against Arial Bold, an 8%
  spread. The reel-41 kickers clear the column on either basis, but the
  discrepancy is worth resolving the next time the sandbox is up, because
  `fit_kicker()`'s floor logic assumes the two agree.
- **These are the fixed kickers.** They include the word gaps that `tracked()`
  was losing until this run — see the render note below. Measured collapsed
  (the old behaviour) they are 579.3, 586.8 and 542.8px.
- **Body copy is not measured.** All four slide bodies are shorter than
  reel-40's scene 2 and none of the three rule quotations exceeds 30 words —
  17.8.1 is 28, 17.8.1.1 is 25, 17.8.2 is 17. Every detail card in this reel is
  lighter than reel-40's scene 3, the card that run flagged to watch, and
  lighter than reel-39's scene 7. `fit_body()` is not expected to engage.
  **Verify at render time anyway** — this is an estimate, not a measurement.

**The four slide bodies the estimates above assume**, recorded here so the
render is reproducible rather than re-derived from the beats:

- Scene 2 — "Two players collide in the stack. The disc is on the other side of
  the field and nobody near the contact was going for it. That is still a foul,
  and it has its own name. It needs the contact to be non-minor, and it needs
  the contact to be away from the play — if it affected somebody's attempt on
  the disc, it is an ordinary receiving foul instead."
- Scene 4 — "You do not have to call it the moment it happens. You get up to
  two seconds to work out whether the contact is going to affect the play at
  all. Word for word the same allowance a pick gets, for the same reason: most
  contact away from the disc turns out to have cost nobody anything."
- Scene 6 — "If the call stands, the fouled player makes up whatever position
  the contact cost them, and play restarts with a check. That is the entire
  remedy. No disc, no yardage, no change to the stall count. You are put back
  where you were going, which is also why there is nothing here worth angling
  for."
- Scene 8 (field tip) — "Most off-disc contact resolves itself and needs no
  call at all. Take the two seconds. If you got up, carried on, and arrived
  where you were going anyway, let it go. Call it when the contact actually
  stopped you getting somewhere."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back. On Windows, while the
sandbox is down, `python tools\win_render.py reel-41` does the same thing —
read `tools/WINDOWS_FALLBACK.md` first.

**Take the render script from `content/reel-39/render_v3.py`, not from an older
reel.** It is the first copy with the `tracked()` word-gap fix (see below).
Copying reel-36's or any earlier version would reintroduce the defect reel-38
was rejected for.

---

## Script (~30s)

- Hook: "Someone crashes into you in the stack. The disc is on the far side of the field. Nobody near you was going for it. Is that a foul?"
- Explanation: "It is, and it has its own name — an indirect foul. Two conditions: the contact has to be non-minor, and it has to be away from the play. If it affected somebody's attempt on the disc, it is an ordinary receiving foul instead. And like a pick, you do not have to call it instantly — you get two seconds to see whether it actually mattered."
- Example: "You get bumped hard cutting through the stack, you stumble, and the disc goes to the other side of the field. Two seconds later you are back on your feet and exactly where you meant to be. It cost you nothing, so there is nothing to call. But if that bump is why you arrived two steps late, call it — and all you get is those two steps back. No disc, no yardage, no stall reset."
- CTA: "Lesson 41 of 75 — new lesson daily."

## Instagram caption

Someone crashes into you in the stack. The disc is on the far side of the field. Is that a foul?

Yes. It has its own name and its own remedy.

"An Indirect Foul occurs when there is non-minor contact between a receiver and a defensive player that does not directly affect an attempt to make a play on the disc."

Two conditions. The contact has to be non-minor, and it has to be away from the play. Shoulders bumping as you both go up for the disc is an ordinary foul. Getting flattened in the stack while the disc goes somewhere else is an indirect foul.

Like a pick, you do not have to call it the instant it happens:

"Prior to making the “Indirect Foul” call, the player may delay the call up to two (2) seconds to determine if the breach will affect the play."

Two seconds to find out whether it cost you anything. Most off-disc contact costs you nothing, and the cheapest call is still the one you never make.

And when it did cost you, this is the whole remedy:

"If the foul is accepted the fouled player may make up any positional disadvantage caused by the foul."

That is it. No disc, no yardage, no stall reset. You get back the ground the contact took off you, everyone checks in, and play goes on. Same principle as a pick: restored, not rewarded.

Lesson 41 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (17.8.1, 17.8.1.1, 17.8.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

someone crashes into you in the stack. the disc is on the far side of the field 🥏

still a foul. it has its own name

"An Indirect Foul occurs when there is non-minor contact between a receiver and a defensive player that does not directly affect an attempt to make a play on the disc."

→ non-minor contact, away from the play. if it affected a play on the disc it's an ordinary receiving foul instead

and like a pick, you don't have to call it instantly:

"Prior to making the “Indirect Foul” call, the player may delay the call up to two (2) seconds to determine if the breach will affect the play."

two seconds to find out whether it cost you anything

here's the whole remedy:

"If the foul is accepted the fouled player may make up any positional disadvantage caused by the foul."

you make up the ground you lost ← no disc, no yardage, no stall reset. restored, not rewarded

lesson 41 of 75

rules from WFDF Rules of Ultimate 2025–2028 (17.8.1, 17.8.1.1, 17.8.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(17.8.1, 17.8.1.1, 17.8.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rule cards, so three topic/rules pairs — the reel-30,
  31, 32, 35, 36, 38, 39 and 40 shape. `TOTAL = 9`.
- **Use `content/reel-39/render_v3.py` as the source copy.** Reels 38 and 39
  both carry the `tracked()` fix as of this run; nothing older does.
- **NOT DRY-MEASURED in the sandbox** — fifth consecutive mount failure. Kicker
  widths and caption lengths were measured in headless Chrome instead, which is
  the renderer `win_render.py` actually uses, so those two are real numbers.
  Body-copy layout is still an estimate and must be verified at render time.
- **No departures.** Every carded rule is in the lesson's `rules` array and
  every footer cites only what its card quotes. 17.8 is a heading stem
  (`Indirect Fouls:`) and is deliberately not carded.
- **Do not conflate this with a receiving foul.** The whole distinction is the
  clause "does not directly affect an attempt to make a play on the disc". If
  the contact affected a play on the disc, reel 32 covers it, not this.
- **Do not overstate the remedy.** 17.8.2 gives back position and nothing else
   — no disc, no yardage, and the stall count is untouched. "Restored, not
  rewarded" carries over from reel 40 on purpose; the two calls share a shape.
- Keep the curly quotes in “Indirect Foul” — they are the rulebook's — and keep
  "two (2)" exactly as written in 17.8.1.1.
- Instagram caption 1,528 characters including hashtags (69.5% of the 2,200
  limit, comfortably below the 95% warning line); TikTok 997 of 4,000. Both
  plain text and scanned clean of markdown — no bold or italic asterisk
  markers, backticks, markdown links, hash headings or dash bullets. Measured
  in UTF-16 units in the browser on 2026-09-12, since `check_caption.py` could
  not be run; `build_desk.py` re-runs it as a backstop at sync time.
- Curriculum position: lesson 41 is index 6 of `content/lessons-3.json`, the
  next unused lesson after 40. It covers 2026-09-15, the only bare date in the
  tomorrow-through-tomorrow+2 window (09-13 and 09-14 are already queued as
  reels 39 and 40). No Thursday falls in that window, so no recap carousel is
  due this run; the next is 2026-09-17, and carousel-post-7 opens block 33–39.
- No growth/reach claims in either caption.
