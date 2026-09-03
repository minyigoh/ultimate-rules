# Reel 33 — Fouls committed by the thrower

**Status:** Pending review
**Script drafted:** 2026-09-04 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-07 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.7.1, 17.7.2)
**Source lesson:** `content/lessons-2.json` → `thrower-foul`

Reels 28–32 covered fouls done *to* the offence. This one turns the camera
around: the thrower can foul too, and the rule that says so is one sentence
long with a single load-bearing phrase in it — "solely responsible". The second
rule is the release valve: your follow through is not a foul.

---

## Video — `reel33-thrower-fouls.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing. The
two-pair shape, same as reels 11, 17, 19, 24 and 29.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Fouls committed by the thrower · kicker BEGINNER · LESSON 33 / 75 |
| 2 | #1 SOLELY RESPONSIBLE | "You can foul the mark, too." · footer cites 17.7.1 |
| 3 | Rules detail | Verbatim 17.7.1 |
| 4 | #2 AFTER THE RELEASE | "Your follow through is not a foul." · footer cites 17.7.2 |
| 5 | Rules detail | Verbatim 17.7.2 |
| 6 | FIELD TIP | "Pivot around the mark, not through it." |
| 7 | Closing | "Lesson 33 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**17.7 is a heading stem** ("Offensive Throwing (Thrower) Fouls:") and is *not*
carded — the same call as 17.2 in reel 28, 17.3 in reel 29, 17.4 in reel 30,
17.5 in reel 31 and 17.6 in reel 32. Six reels, six stems, none carded.

**Neither 17.7.1 nor 17.7.2 is a stem**, so each gets its own card whole. They
are the two shortest rule cards since reel 29's — max_y 554 and 454 of 1310.

### The load-bearing phrase

17.7.1: "An Offensive Throwing Foul occurs when the thrower is solely responsible for initiating non-minor contact with a defensive player who is in a legal position."

Two conditions, both of which have to hold:

1. **The thrower is solely responsible for initiating the contact.** Not "was
   involved in", not "moved first" — solely responsible.
2. **The defender is in a legal position.** If the marker was illegally
   positioned, you are in 17.6.1.1's territory, which is yesterday's reel, and
   the foul is theirs.

That second condition is why this reel sits directly after the marking-foul
reel and not anywhere else in the run. The two rules are the same event seen
from opposite ends, and the thing that decides which one applies is the
defender's position.

17.7.2 is the counterweight: "Contact occurring during the thrower's follow through is not a sufficient basis for a foul, but should be avoided."

Read the whole sentence. "Not a sufficient basis for a foul" is a permission;
"but should be avoided" is the rulebook declining to call it fine. The reel
keeps both clauses in the body copy and in both captions, because dropping the
second half turns a narrow allowance into a licence.

### What is deliberately left out

- **17.6's annotation** — "if the thrower moves into a space the marker has
  already occupied … this is a foul by the thrower", and the extra on
  *intentional* contact being a Spirit breach. It is a genuinely good gloss on
  17.7.1 and it is annotation, not rule text. It stays off the cards and out of
  the body copy; nothing on screen is broader than what is cited.
- **Straddle, disc space and wrapping by name.** Those are 18.1 and belong to
  lessons 17, 18 and 19. The reel says "in a legal position", which is the
  rule's own phrase, and leaves the enumeration alone.
- **Any remedy detail.** What happens after the call — the check, the disc
  going back — is chapters 10 and 16, and lessons 35 and 38. Not opened here.

**Layout — dry-measured 2026-09-04 against `content/reel-31/render_v3.py`:**

- Both kickers fit at the standard 34px: `#1   SOLELY RESPONSIBLE` at 612 of
  the 900px column and `#2   AFTER THE RELEASE` at 572. `fit_kicker()` is not
  engaged, and neither is close to it.
- Bodies auto-fit to 33px (scene 2, seven lines) and 35px (scene 4, six lines);
  `fit_body()` engages on both and both clear the citation.
- Both main scenes end at max_y 1192 of 1310. The field tip ends at 1012.
- Detail cards land at max_y 554 (17.7.1) and 454 (17.7.2) against 1310 — the
  emptiest pair in the run. No split, no trimming.
- Cover title wraps to "Fouls committed by" / "the thrower" at 793 and 457 of
  900px at 84px. No `_payload()` case anywhere in this reel — no element starts
  or ends with a double quote.
- Projected duration **~28.5s** on the house rhythm, matching the other
  seven-scene reels.

**The three slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "An offensive throwing foul is the marking foul in reverse. You
  initiate the non-minor contact, and the defender is in a legal position when
  you do. Both halves have to be true — \"solely responsible\" is doing real work
  in that sentence. If the defender was not legally positioned, this is not the
  rule."
- Scene 4 — "Contact during the thrower's follow through is specifically not a
  sufficient basis for a foul. The rule says that, and then asks you to avoid it
  anyway. Not a foul is not the same as go ahead — if you catch the mark on
  every throw, that is contact you can take out of your game."
- Scene 6 (field tip) — "If you are initiating contact to make your throwing
  window, that is the foul — the mark does not have to move for you. Watch where
  your follow through lands too. It is not a foul, but it is still contact."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-31/render_v3.py` is the newest copy; **set `TOTAL = 7`**, since
the shared default is 9.

---

## Script (~29s)

- Hook: "Everyone learns to call fouls on the mark. Almost nobody learns the one you can commit yourself."
- Explanation: "An offensive throwing foul is the marking foul in reverse. It happens when the thrower is solely responsible for initiating non-minor contact with a defender who is in a legal position. Both halves matter. Solely responsible — not just involved. And legally positioned — because if the marker was straddling you or crowding the disc, the contact is theirs, not yours."
- Example: "The one everyone worries about is the follow through, and the rules are explicit: contact during your follow through is not a sufficient basis for a foul. Read the rest of the sentence though — it should be avoided anyway. Not a foul is not the same as go ahead. If you're catching the mark on every throw, that's contact you can take out of your game."
- CTA: "Lesson 33 of 75 — new lesson daily."

## Instagram caption

Everyone learns to call fouls on the mark. Almost nobody learns the one you can commit yourself.

**The whole rule is one sentence.** "An Offensive Throwing Foul occurs when the thrower is solely responsible for initiating non-minor contact with a defensive player who is in a legal position."

Two conditions, and both have to hold.

**"Solely responsible."** Not "was involved in", not "moved first". If the contact is shared, this rule isn't the one you're looking at.

**"In a legal position."** This is the hinge. If the marker was illegally positioned, you're in the defensive throwing foul instead — that was yesterday's lesson — and the foul belongs to them. The two rules are the same collision seen from opposite ends, and the defender's position is what decides which one applies.

**Then the rule everybody wants to hear, with the half they skip.** "Contact occurring during the thrower's follow through is not a sufficient basis for a foul, but should be avoided."

"Not a sufficient basis for a foul" is a permission. "But should be avoided" is the rulebook declining to call it fine. Both clauses are in the same sentence for a reason.

So: pivot around the mark, not through it. If you're initiating contact to open your throwing window, that's the foul — the mark doesn't have to move for you. And if your follow through is catching an arm every single throw, nobody can call it, but it's still contact you could take out of your game.

Lesson 33 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everyone learns to call fouls on the mark. almost nobody learns the one YOU can commit 🥏

the whole rule is one sentence:

"An Offensive Throwing Foul occurs when the thrower is solely responsible for initiating non-minor contact with a defensive player who is in a legal position."

two conditions, both have to hold

"solely responsible" → not "was involved". shared contact isn't this rule

"in a legal position" → the hinge. if the marker was illegally positioned it's THEIR foul, not yours. same collision, opposite ends

now the one everyone wants to hear:

"Contact occurring during the thrower's follow through is not a sufficient basis for a foul, but should be avoided."

read the whole sentence. "not a sufficient basis for a foul" = permission. "but should be avoided" = the rulebook declining to call it fine

pivot AROUND the mark, not through it. if you're initiating contact to open your throwing window, that's the foul — the mark doesn't have to move for you

lesson 33 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(17.7.1, 17.7.2).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes.** Two rule cards, so two topic/rules pairs. Set `TOTAL = 7`
  in `render_v3.py`; the shared default is 9.
- **17.7.2's second clause is not optional copy.** "But should be avoided" ships
  on the card because it is part of the quoted sentence, and it ships in the
  body copy and both captions because dropping it turns a narrow allowance into
  a licence.
- **Do not name straddle, disc space or wrapping.** They are 18.1 and belong to
  lessons 17–19. The reel uses the rule's own phrase, "in a legal position".
- 17.6's annotation on the thrower moving into a stationary legal marker, and
  on intentional contact being a Spirit breach, is a good gloss but is
  annotation rather than rule text. Off the cards, out of the body copy.
- The remedy — what happens after the call — is chapters 10 and 16, lessons 35
  and 38. Not opened here.
- **Curriculum position check:** lesson 33 in `content/lessons-2.json`, the next
  unused lesson after 32 in array order. Lessons 1–32 are all on the calendar.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
