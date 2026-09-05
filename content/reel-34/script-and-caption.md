# Reel 34 — Dangerous play

**Status:** Pending review
**Script drafted:** 2026-09-05 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-08 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (17.1.1, 1.6.1, 1.6.2)
**Source lesson:** `content/lessons-2.json` → `dangerous-play`

This closes the seven-reel fouls run (28–34) and it is the one that does not
behave like the others. Every foul rule in reels 28–33 turns on contact:
who initiated it, when it happened, whether it was minor. 17.1.1 removes that
requirement entirely — the action is the offence, whether or not it lands.
It is also the only lesson in the run that is cited from two different
chapters, because dangerous play is a foul *and* a named Spirit violation.

---

## Video — `reel34-dangerous-play.mp4` (1080×1920, 30fps)

Seven scenes — cover, two topic/rules-detail pairs, field tip, closing. The
two-pair shape, same as reels 11, 17, 19, 24, 29 and 33.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | Dangerous play · kicker BEGINNER · LESSON 34 / 75 |
| 2 | #1 NO CONTACT REQUIRED | "A dangerous bid is a foul even if it misses." · footer cites 17.1.1 |
| 3 | Rules detail | Verbatim 17.1.1 |
| 4 | #2 A SPIRIT VIOLATION TOO | "It's a Spirit violation too." · footer cites 1.6.1 · 1.6.2 |
| 5 | Rules detail | Verbatim 1.6 stem + 1.6.1 + 1.6.2 |
| 6 | FIELD TIP | "If a play frightened you, say so at the time." |
| 7 | Closing | "Lesson 34 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

**17.1 is a heading stem** ("Dangerous Play:") and is *not* carded — the same
call as 17.2 in reel 28, 17.3 in reel 29, 17.4 in reel 30, 17.5 in reel 31,
17.6 in reel 32 and 17.7 in reel 33. Seven reels, seven stems, none carded.

### The one deliberate departure: 1.6 *is* carded

**This is new and it needs approving on purpose.** Every previous stem in this
run was a bare label — "Receiving Fouls:", "Strip Fouls:" — that adds nothing
a reader cannot get from the rule number. 1.6 is different:

> 1.6 — "The following actions are clear violations of the Spirit of the Game and must be avoided:"
> 1.6.1 — "dangerous play and aggressive behaviour;"
> 1.6.2 — "intentional fouling or other intentional rule breaches;"

1.6.1 and 1.6.2 are sentence *fragments*. They are grammatically dependent on
1.6 and mean nothing without it — a card reading only "dangerous play and
aggressive behaviour;" is not a quotation, it is a phrase. So scene 5 renders
1.6's text as the block lead with 1.6.1 and 1.6.2 as sub-numbered items
beneath it. That is `g_detail`'s existing shape, identical to how reel 32
scene 3 carded 17.6.1 with 17.6.1.1 and 17.6.1.2, so it needs no new code:

```python
('spirit_r', g_detail(5, [('1.6', [rt('1.6'), ('1.6.1', rt('1.6.1')),
                                   ('1.6.2', rt('1.6.2'))])]), [0.3, 2.0]),
```

The **footer on scene 4 still cites 1.6.1 · 1.6.2**, matching the lesson's
`rules` array. 1.6 appears as the detail card's block header only, because the
renderer prints one per block — it is the stem being shown, not a third rule
being claimed.

If this call is wrong, the alternative is to drop the Spirit half of the reel
entirely rather than card a fragment on its own. Say so and it comes out.

### What 17.1.1 actually does

Three sentences, all three load-bearing:

1. **"regardless of whether or when contact occurs."** This is the whole
   lesson. Reels 28–33 all needed contact; this one does not. A reckless bid
   through a stationary group is dangerous play whether it connects or not,
   and the call does not get weaker because everyone got lucky.
2. **"This rule is not superseded by any other foul rule."** No other foul
   rule can be used to argue it away.
3. **"the most relevant foul from Section 17."** The remedy is not a new one —
   an accepted dangerous play call resolves as whichever Section 17 foul fits.

### What is deliberately left out

- **1.6.3 and 1.6.4** — taunting and disrespectful celebration. Real, listed,
  and not in this lesson's `rules` array. The lesson's own body sentence names
  taunting; the script does not, so that nothing on screen or in a caption is
  broader than what is cited.
- **Any Section 17 remedy detail.** Which foul an accepted call resolves to,
  and what happens next, is reels 35 and 38's territory. The reel says "the
  most relevant foul from Section 17", which is the rule's own phrase.
- **1.11 and the Spirit-scoring machinery.** Not opened here.
- **The word "injury" as a threshold.** The rule is *risk* of injury. An
  outcome-based reading is precisely the misreading this reel exists to fix.

**Layout — dry-measured 2026-09-05 against `content/reel-32/render_v3.py`
with `TOTAL = 7`:**

- Both kickers fit at the standard 34px: `#1   NO CONTACT REQUIRED` at 649 of
  the 900px column and `#2   A SPIRIT VIOLATION TOO` at 680.
  `fit_kicker()` is not engaged on either.
- Bodies auto-fit to 31px (scene 2, seven lines, last baseline 1070) and 34px
  (scene 4, six lines, 1047). `fit_body()` engages on both; the limit is 1090.
- Field tip ends at 1012. Cover title "Dangerous play" is a single line at
  630 of 900px at 84px, the shortest title in the run.
- Detail cards land at max_y 854 (17.1.1, the longest single rule carded since
  reel 30) and 740 (the 1.6 block, three items) against 1310. No split, no
  trimming.
- **One `_payload()` case:** the field tip body opens with `"That felt
  dangerous"`, so its first wrapped line starts with a double quote. That is
  the reel-21 collision and the `<tspan>` wrap handles it — confirm the opening
  quote is present in the **PNG**, not just the SVG.
- Projected duration **~28.9s** on the house rhythm, `k` clamped at 1.5, the
  same as the other seven-scene reels.

**The three slide bodies the measurements above were taken against**, recorded
here so the render is reproducible rather than re-derived from the beats:

- Scene 2 — "Dangerous play is judged on the action, not on what it happened to
  hit. Reckless disregard for other players' safety, a significant risk of
  injury, or dangerously aggressive behaviour is a foul regardless of whether
  contact occurs, or when. The rule is not superseded by any other foul rule,
  and the remedy is the most relevant foul in the fouls section."
- Scene 4 — "Chapter one lists a handful of actions as clear violations of the
  Spirit of the Game that must be avoided. Dangerous play and aggressive
  behaviour is the first of them, alongside intentional fouling. It is not just
  a foul when it happens — it is behaviour you are asked to avoid."
- Scene 6 (field tip) — "\"That felt dangerous\" is a legitimate and important
  thing to raise, and it does not have to be an accusation. Say it while
  everyone still remembers the play. A bid nobody mentions is a bid that gets
  repeated."

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
Copy the three scripts and `rules.json` into a scratch directory outside the
repo, build there, and copy only the finished `.mp4` back.
`content/reel-32/render_v3.py` is the newest copy; **set `TOTAL = 7`**, since
the shared default is 9.

---

## Script (~29s)

- Hook: "Every foul we've covered this week needed contact. This one doesn't. You can foul somebody you never touched."
- Explanation: "Dangerous play is judged on the action, not the outcome. Reckless disregard for someone's safety, a significant risk of injury, or dangerously aggressive behaviour is a foul regardless of whether contact occurs — or when. And the rule says it is not superseded by any other foul rule, so nobody gets to argue it away with a different one."
- Example: "A defender lays out through a stationary group of players and touches nobody. Clean, by the standards of every other foul rule this week. Still dangerous play — because it was the bid that was reckless, not the collision, and there didn't need to be a collision. The rulebook also lists dangerous play in chapter one, as a clear violation of the Spirit of the Game that must be avoided, right alongside intentional fouling."
- CTA: "Lesson 34 of 75 — new lesson daily."

## Instagram caption

Every foul we've covered this week needed contact. This one doesn't. You can foul somebody you never touched.

**The rule.** "Actions demonstrating reckless disregard for the safety of fellow players, or posing significant risk of injury to fellow players, or other dangerously aggressive behaviours, are considered dangerous play and must be treated as a foul, regardless of whether or when contact occurs. This rule is not superseded by any other foul rule. If the dangerous play call is accepted, this must be treated as the most relevant foul from Section 17."

**"Regardless of whether or when contact occurs."** That clause is the whole lesson. It's judged on the action, not on what the action happened to hit.

So: a defender lays out through a stationary group and touches nobody. By the standards of every other foul rule — receiving, strip, blocking, force-out, marking, thrower — that's clean. It's still dangerous play. The bid was reckless. The collision not happening was luck, and luck isn't a defence.

**"Not superseded by any other foul rule."** Nobody gets to argue it away with a different rule. And if the call is accepted, it resolves as the most relevant foul from Section 17 — the remedy is ordinary, the threshold is not.

**It's also in chapter one.** "The following actions are clear violations of the Spirit of the Game and must be avoided:" — and first on that list, "dangerous play and aggressive behaviour;", sitting alongside "intentional fouling or other intentional rule breaches;".

That's unusual. Most of what we cover lives in one place in the book. This lives in two, and the chapter-one entry is not decoration — it means the rulebook is asking you to keep the action out of your game, not just to call it when it appears.

If a play frightened you, say so at the time. "That felt dangerous" is a legitimate and important thing to raise, and it doesn't have to be an accusation.

Lesson 34 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028 (17.1.1, 1.6.1, 1.6.2). Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

every foul this week needed contact. this one doesn't. you can foul somebody you never touched 🥏

"Actions demonstrating reckless disregard for the safety of fellow players, or posing significant risk of injury to fellow players, or other dangerously aggressive behaviours, are considered dangerous play and must be treated as a foul, regardless of whether or when contact occurs."

"regardless of whether or when contact occurs" ← the whole lesson

judged on the ACTION. not on what the action happened to hit

defender lays out through a stationary group and touches nobody. clean under every other foul rule we've done. still dangerous play — the bid was reckless, and the miss was luck

"This rule is not superseded by any other foul rule." nobody argues it away with a different one

and it's in chapter one too:

"The following actions are clear violations of the Spirit of the Game and must be avoided:" → "dangerous play and aggressive behaviour;"

first on the list. same list as "intentional fouling or other intentional rule breaches;"

if a play frightened you, say so at the time. "that felt dangerous" is a legitimate thing to raise and it isn't an accusation

lesson 34 of 75

rules from WFDF Rules of Ultimate 2025–2028 (17.1.1, 1.6.1, 1.6.2) — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

## Attribution

Rule text quoted verbatim from the **WFDF Rules of Ultimate 2025–2028**
(1.6, 1.6.1, 1.6.2, 17.1.1).

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Seven scenes.** Two rule cards, so two topic/rules pairs. Set `TOTAL = 7`
  in `render_v3.py`; the shared default is 9.
- **The 1.6 stem is carded, and that is a departure.** See the section above.
  1.6.1 and 1.6.2 are sentence fragments and cannot stand alone on a card. If
  the call is rejected, drop scenes 4 and 5 and the reel becomes a one-pair
  17.1.1 reel — do not card a fragment by itself.
- **17.1 is a heading stem and is NOT carded** — seven reels now (17.1–17.7),
  seven stems, none carded.
- **Do not turn "risk of injury" into "injury".** The rule is about risk and
  recklessness. An outcome-based reading is the exact misreading the reel is
  correcting, and it would also contradict the quiz answer in the lesson JSON.
- **1.6.3 (taunting) and 1.6.4 are not cited** and stay out of the copy, even
  though the lesson's body sentence mentions taunting. Nothing on screen or in
  a caption is broader than the cited rules.
- The field tip body opens with a double quote — the `_payload()` `<tspan>`
  case. Check the rendered **PNG**, not the SVG.
- Dry-measured 2026-09-05 against `content/reel-32/render_v3.py`: kickers at
  the standard 34px (649 and 680 of 900px), bodies auto-fit to 31 and 34px,
  main scenes end at 1070 and 1047 against a 1090 limit, field tip 1012,
  detail cards 854 and 740 of 1310. Projected ~28.9s.
- This is the last lesson in `content/lessons-2.json`. Lesson 35
  (`everybody-freeze`) opens `lessons-3.json`, which holds the remaining 41.
