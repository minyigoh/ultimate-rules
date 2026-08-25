# Reel 23 — "Contest" — disagreeing properly

**Status:** Pending review
**Script drafted:** 2026-08-25 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-28 (see `content/calendar.md`)
**Difficulty:** Beginner
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 (15.10, 13.3, 1.3, 1.3.4)
**Source lesson:** `content/lessons-2.json` → `contest`

The third of the calls run. Lesson 21 gave you the three words, lesson 22 said
who owns each of them, and this one is what happens when the person on the
other end doesn't agree. It is the lesson that makes the previous two safe to
use: if disagreeing had no procedure, nobody would risk making a call at all.

---

## Video — `reel23-contest.mp4` (1080×1920, 30fps)

Nine scenes, alternating plain-English explainer with verbatim WFDF
rule-citation cards — the standard three-pair shape, same as reels 16, 18, 20,
21 and 22.

| # | Scene | Content |
|---|---|---|
| 1 | Cover | "Contest" — disagreeing properly · kicker BEGINNER · LESSON 23 / 75 |
| 2 | #1 SAY THE WORD | "If you don't think it happened, you say \"Contest\"." · footer cites 15.10 |
| 3 | Rules detail | Verbatim 15.10 |
| 4 | #2 NOBODY GAINS | "Can't agree? The disc goes back, and neither version wins." · footer cites 13.3 |
| 5 | Rules detail | Verbatim 13.3 |
| 6 | #3 EXPLAIN, BRIEFLY | "Your whole job in the discussion is one clear sentence." · footer cites 1.3, 1.3.4 |
| 7 | Rules detail | Verbatim 1.3 + 1.3.4 |
| 8 | FIELD TIP | "Have your one sentence ready before you open your mouth." |
| 9 | Closing | "Lesson 23 of 75." · Follow @learn.ultimatefrisbee |

Rule text is pulled programmatically from `content/rules.json` — never
paraphrased on a citation card.

Scene 7 is a parent-plus-child card. 1.3.4 reads "explain their viewpoint
clearly and briefly;" — a sentence fragment that is grammatically dependent on
1.3's stem, "Players should be mindful of the fact that they are acting as
referees in any arbitration between teams. Players must:". Carded alone it
would be unreadable, so 1.3 goes above it, exactly as 15.5 carries 15.5.1 on
reel 22. **1.3 is the only rule number here not in the lesson's `rules`
array**, and it is there for grammar, not for extra content.

**Kickers:** 12–16 characters each, comfortably inside the 900px column at the
standard 34px. Nothing here should engage `fit_kicker()`.

**The cover title starts with a double quote**, which is a first for this
pipeline and the reason reel 21 had to be regenerated on 2026-08-25 — see
`content/reel-21/feedback.md`. `render_v3.py`'s `_payload()` now wraps any
payload beginning with `&quot;` in a `<tspan>` so ImageMagick stops swallowing
it. Check slide 1 renders as `"Contest"` and not `Contest"` before submitting.

**Rendering:** `render_v3.py` → `blend.py` → `python3 encode.py <out.mp4> slow`.
`render_v3.py` reuses the exact helpers, constants and coordinates from
`content/carousel-post-1/make_carousel.py`, letterboxed from 1080×1350 into
1080×1920. Change copy there, not in the video.

---

## Script (~29s)

- Hook: "Disagreement is built into the rules. There's a word for it, and there's machinery behind the word."
- Explanation: "If someone calls a breach against you and you don't think it happened, you say 'Contest'. Play stops and you talk about it. If you still can't agree — or nobody can work out what actually happened — the disc goes back to the last undisputed thrower and play restarts with a check."
- Example: "So contesting costs the caller nothing and gains you nothing. That's the whole design. A contest isn't you calling someone a liar, it's the sport's way of recording that two people saw the same two seconds differently, and then getting on with the point. What the rulebook does ask of you is that you explain your viewpoint clearly and briefly — which in practice means having one sentence ready about what you actually saw, before you start talking."
- CTA: "Lesson 23 of 75 — new lesson daily."

## Instagram caption

Disagreement is built into the rules. There's a word for it, and there's machinery behind the word.

**Someone calls a breach against you and you don't think it happened.** You say "Contest". Play stops, and the two of you talk about it. That's it — that's the whole mechanism, and it's available to you every single time.

**Here's the part that makes it safe to use.** If, after discussion, you can't agree, or it just isn't clear what happened, the disc goes back to the last non-disputed thrower and play restarts with a check. Not the caller's version. Not yours. Nobody gains.

**Which is why contesting isn't hostile.** It's not an accusation and it's not a challenge to anyone's honesty. It's the sport's way of recording "we saw that differently" and then getting on with the point. A game where nobody ever contests isn't a game with better spirit — it's a game where people are conceding calls they don't actually agree with.

**The rulebook does ask something of you in return.** Among the things players *must* do when they're acting as referees: explain their viewpoint clearly and briefly. Clearly, and briefly. Both halves are the rule.

So have your sentence ready before you start talking. "I saw your pivot foot lift while the disc was still in your hand" is a contest. "That definitely wasn't a travel" is a mood.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

how to disagree, properly 🥏

someone calls something on you and you don't think it happened → say "Contest". play stops, you talk

still can't agree? disc goes back to the last undisputed thrower. nobody gains. that's the whole design

so contesting isn't hostile. it's the sport recording "we saw it differently"

your one duty: explain your viewpoint clearly AND briefly. it's in the rules

have the sentence ready first. "your pivot foot lifted while the disc was in your hand" > "that wasn't a travel"

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Film/edit against the brand visual spec in `social/brand-identity.md` (dark
  `#0F1712` bg, `#E24A12` accent for hook + rule chips, one clean sans-serif).
- **Nine scenes.** Three rules, so three topic/rules pairs — the same shape as
  reels 16, 18, 20, 21 and 22.
- **This closes the three-lesson calls run.** 21 was the vocabulary, 22 was
  ownership, 23 is the disagreement procedure. Worth cross-referencing in the
  caption if any of the three are still getting comments.
- **13.3 is quoted whole and it is long** — four sentences, the longest single
  rule text this pipeline has carded. `fit_body()` doesn't apply to a
  `g_detail` card, which wraps at 38px with no auto-fit, so **check
  `tools/check_layout.py` before encoding**; if 13.3 overflows, split it across
  two reveal groups in the same `g_detail` block rather than trimming the text.
- **13.3 is a turnovers rule doing general work.** It is the only place the
  rulebook states the last-undisputed-thrower default in full, which is why it
  is carded here rather than a chapter-15 rule. Scene 4's headline should stay
  general and not drift into re-teaching turnovers (lesson 4).
- **15.10 says "the player against whom the call has been made"** — so the
  right to contest belongs to the person the call was made against, mirroring
  lesson 22's ownership rules. Don't let scene 2 imply anyone may contest.
- **Retraction is lesson 24, not this one.** 15.11 is deliberately absent —
  "Changing your mind is a rule, not a weakness" is the next lesson and needs
  the room.
- **The field tip is the lesson's own `field` line**, kept nearly verbatim:
  "Be ready to say the objective evidence for your view in one sentence."
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
