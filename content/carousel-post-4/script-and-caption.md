# Carousel 4 — "Week three: how to mark, and what to call" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-08-24 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-27 (see `content/calendar.md`) — posts alongside Reel 22
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 15–21 (reels queued 2026-08-20 → 2026-08-26)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 15–21**, the third contiguous block of seven, following
carousel-post-3's lessons 8–14 and carousel-post-2's lessons 1–7. Blocks run by
lesson number, not by date, per Min-Yi's confirmation of 2026-08-17.

---

## Slides — nine, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week three: how to mark, and what to call" · subhead "Everything the daily reels covered, 20–26 August." · SWIPE → |
| 2 | LESSON 15 | "Throwing on the run: the two-contact allowance" · takeaway: "Catch at a sprint and release inside two ground contacts and you haven't travelled. It's a skill worth drilling, not a loophole." · footer 18.2.1.1 · 18.2.4.2 |
| 3 | LESSON 16 | "Travel: the call that doesn't stop play" · takeaway: "Any defensive player may call travel, not just the marker. Fix the pivot without arguing and you lose almost nothing." · footer 18.2.5 · 18.2.6 · 18.2.7 · 18.2.8 |
| 4 | LESSON 17 | "Disc space: give the thrower room" · takeaway: "Mark at a forearm's distance and you will essentially never be called for this." · footer 18.1.1.3 |
| 5 | LESSON 18 | "Straddle and wrapping" · takeaway: "Feet outside the thrower's stance, arms wide but not enveloping. That's a legal, effective mark." · footer 18.1.1.2 · 18.1.1.4 · 18.1.3 |
| 6 | LESSON 19 | "Fast count" · takeaway: "Calling fast count isn't rude — it's the designed mechanism. Markers genuinely can't hear their own tempo." · footer 18.1.1.1 · 18.1.4 · 18.1.4.4 |
| 7 | LESSON 20 | "Double team: the three-metre rule" · takeaway: "In a zone, if a poacher drifts in and isn't guarding anyone, call it. That's the offence's main protection against a crowded mark." · footer 18.1.1.5 · 18.1.1.5.1 · 18.1.1.5.2 |
| 8 | LESSON 21 | "Foul, infraction, violation — what's the difference?" · takeaway: "Hear a call you don't recognise? Stop — unless it was travel or a marking call, which never stop play." · footer 15.1 · 15.2 · 15.3 · 15.6 |
| 9 | Closing | "That's twenty-one of seventy-five. Seven more next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn from each lesson's `field` line in
`content/lessons-2.json`. No rule text appears on any slide; the citation
footer carries the rule numbers and the "WFDF Rules of Ultimate 2025–2028"
attribution only.

**Rendering:** copy `content/carousel-post-1/make_carousel.py` into
`/tmp/<scratch>/carousel-post-4/` and adapt only the slide content — the visual
system (canvas, palette, header lockup, citation footer, type scale) stays
pixel-identical. SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Seven more lessons. This week was almost entirely about the mark."
- Explanation: "Catching and throwing inside two contacts, what travel actually is and why it doesn't stop play, disc space, straddling and wrapping, fast count, double team — and then the vocabulary for saying any of it out loud."
- Example: "Weeks one and two were about the disc and your feet. This week is about the person standing in front of you, and the four things they're not allowed to do. Each slide carries its rule numbers so you can look any of it up yourself."
- CTA: "Lessons 15 to 21 of 75 — new lesson daily."

## Instagram caption

Week three, all in one place — and this week was almost entirely about the mark.

Catching at a sprint and releasing inside two contacts. What travel actually is, and why calling it doesn't stop play. Disc space. Straddling and wrapping. Fast count. Double team and the three-metre rule. And then, on Wednesday, the vocabulary underneath all of it: foul, infraction, violation, and which of the three lets play carry on.

Weeks one and two were about the disc and your feet. This week is about the person standing a forearm away from you, and the four specific things they aren't allowed to do — every one of which you're allowed to say out loud.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

two-contact throws, travel, disc space, straddle + wrapping, fast count, double team, and foul vs infraction vs violation

basically: what your marker can't do, and what to call it

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- **Block is lessons 15–21**, continuing straight on from carousel-post-3's
  8–14. Blocks of seven by lesson number; nothing skipped, nothing recapped
  twice.
- **Three of the seven reels had not posted when this was drafted.** Lessons 15
  through 18 are posted; 19, 20 and 21 are queued 24, 25 and 26 August — all
  ahead of this carousel's 27 August date. This matches how carousel-post-3 was
  drafted (it shipped lessons 8–14 while reel 14 was still a day from posting).
  **The dependency is real, though:** reel 21 is at "Content pending review" as
  of this draft. If it slips past the 27th, drop slide 8, retitle the cover to
  "This week's six lessons" and roll lesson 21 into the next block — the rest of
  the carousel stands without it.
- **Slide 3's footer is trimmed.** Lesson 16's `rules` array carries eight
  numbers; the four on the slide (18.2.5, 18.2.6, 18.2.7, 18.2.8) are the parent
  rules the reel actually carded, and the children sit under them. Slide 7 is
  trimmed the same way — 15.5.1 is dropped there because it is lesson 22's
  subject, not lesson 20's takeaway.
- **Slide 8's takeaway is the whole of lesson 21 in one line**, and it is the
  one to read twice: everything stops except travel and the marking calls. It
  is also the hinge into next week, which is about who owns which call.
- Recap slides carry no rule text by design — see `content/CAROUSEL_TEMPLATE.md`.
  If a slide starts growing rule quotes it has drifted into re-teaching.
- Attribution to WFDF is in both captions and in the citation footer on all
  seven recap slides.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
