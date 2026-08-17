# Carousel 3 — "Week two: seven more lessons" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-08-17 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-20 (see `content/calendar.md`) — posts alongside Reel 15
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** the seven reels posted 2026-08-13 → 2026-08-19 (lessons 8–14)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

---

## Slides — nine, 1080×1350

Recap window: lessons 8–14, posted 2026-08-13 through 2026-08-19 inclusive.
This is the window `carousel-post-2/script-feedback.md` committed to when
Min-Yi moved that recap back to lessons 1–7 — see the note at the bottom.

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week two: seven more lessons" · subhead "Everything the daily reels covered, 13–19 August." · SWIPE → |
| 2 | LESSON 8 | "A catch and possession are not the same thing" · takeaway: "On a diving catch, the priority is squeezing through the landing. The catch isn't finished until you've stopped moving." · footer 12.1 · 12.1.1 · 13.1.1.1 |
| 3 | LESSON 9 | "Where your feet have to be" · takeaway: "Sprinting for a disc near the sideline? Catch it before your foot lands, not after." · footer 11.3 · 11.3.1 · 11.3.2 · 11.4 |
| 4 | LESSON 10 | "You're allowed to leave the field" · takeaway: "Chase discs that look like they're drifting out. Curving them back in is a real throw, not an accident." · footer 11.6 · 11.7 · 11.2 |
| 5 | LESSON 11 | "Caught at the same time? Offence keeps it." · takeaway: "If you both come down with it, the honest question is 'did you have it first?' — not 'whose is it?'" · footer 12.3 |
| 6 | LESSON 12 | "What actually counts as a goal" · takeaway: "Don't celebrate until you've stopped moving with the disc still in your hands. That's when the goal is scored." · footer 14.1 · 14.1.1 · 14.1.2 · 14.4 |
| 7 | LESSON 13 | "Caught it past the end zone? Walk it back." · takeaway: "Not a turnover and not a do-over — walk to the nearest point on the goal line and set your pivot there." · footer 14.3 · 11.3.2.1 |
| 8 | LESSON 14 | "Slowing down after the catch" · takeaway: "Decelerate in a straight line. Drifting sideways as you slow is the travel most beginners commit without realising." · footer 18.2.1 · 18.2.4.1 |
| 9 | Closing | "That's fourteen of seventy-five. Seven more next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn from each lesson's `field` line in
`content/lessons-1.json`, with one deliberate exception noted below. No rule
text appears on any slide; the citation footer carries the rule numbers and the
"WFDF Rules of Ultimate 2025–2028" attribution only.

**Rendering:** copy `content/carousel-post-1/make_carousel.py` into
`/tmp/<scratch>/carousel-post-3/` and adapt only the slide content — the visual
system (canvas, palette, header lockup, citation footer, type scale) stays
pixel-identical. SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Seven more lessons this week. Here's the whole set in one swipe."
- Explanation: "What a catch actually is, where your feet have to be, leaving the field and coming back, two people catching it at once, what counts as a goal, what to do when you overshoot the end zone, and how to stop legally."
- Example: "Most of week two is feet and edges — the bits of the game that decide possession without anyone throwing well or badly. Each slide carries its rule numbers so you can look any of it up yourself."
- CTA: "Lessons 8 to 14 of 75 — new lesson daily."

## Instagram caption

Week two, all in one place.

What a catch actually is, and why holding it isn't the same as possession. Where your feet have to be near the sideline. How you're allowed to leave the field and come back. What happens when two players catch it at the same time. What actually counts as a goal — and what to do when you end up in the end zone without one. And how to stop legally after catching at a sprint.

Most of this week is feet and edges: the parts of the game that quietly decide possession without anyone throwing well or badly.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

catches, feet, sidelines, simultaneous catches, goals, overshooting the end zone, and stopping legally

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- **Recap window is lessons 8–14 (posted 13–19 August), not the literal "seven
  days ending Thursday" (14–20 August).** Two reasons, and they agree.
  `carousel-post-2/script-feedback.md` states in writing that lesson 8 "moves
  to next Thursday's recap, which now covers lessons 8–14" — that is this post,
  and starting at lesson 9 would orphan lesson 8 permanently. It also keeps the
  precedent carousel-post-2 set of only recapping reels that have **already
  posted**: lessons 13 and 14 go out on the 18th and 19th, the day before and
  two days before this carousel. The literal window would have put lesson 15 on
  a slide on the same morning its own reel went live.
- **Slide 7's takeaway does not come from Lesson 13's `field` line.** That line
  reads "the stall count doesn't start until you've established the pivot
  point", which is true after a turnover (9.3.1) but not here — play stays
  live, and 9.3.2 lets the marker count against the pivot location while the
  thrower is still walking to it. Reel 13's own notes flagged this and dropped
  the claim; repeating it on a recap slide would reintroduce it. The takeaway
  is drawn from that reel's example beat instead, which
  `content/DAILY_RENDER_TASK.md` explicitly permits. The `field` line in
  `content/lessons-1.json` still wants correcting — flagging, not editing.
- **Slide 5 uses Reel 11's corrected title**, "Caught at the same time? Offence
  keeps it.", not the calendar's original "Tie goes to the offence". The reel
  was rebuilt on 2026-08-16 against the desk note that "tie" reads as a
  scoreline; putting the old title on the recap would walk that back.
- Recap slides carry no rule text by design — see `content/CAROUSEL_TEMPLATE.md`.
  If a slide starts growing rule quotes it has drifted into re-teaching.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
