# Carousel 6 — "Week five: five kinds of foul" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-09-07 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-09-10 (see `content/calendar.md`) — posts alongside Reel 36
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 28–32 (reels posted 2026-09-02 → 2026-09-06)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 28–32**, five lessons, following carousel-post-5's
22–27, carousel-post-4's 15–21, carousel-post-3's 8–14 and carousel-post-2's
1–7. Blocks run by lesson number, not by date, per Min-Yi's confirmation of
2026-08-17.

### Why five and not the 28–34 that carousel-post-5 forecast

carousel-post-5's notes say "carousel-post-6 starts at lesson 28" — that part
holds. What has changed is the far end of the block. As of this drafting run
(2026-09-07), lessons 28–32 have posted; **lesson 33 is "Ready to post" and has
not gone out, and lesson 34's cut is only reaching the content gate today.** A
lesson is eligible for a recap only once its reel has actually posted, so 33
and 34 are not in this block.

**This is the same call carousel-post-5 made about lesson 28, and nothing is
lost by it.** 33 and 34 open carousel-post-7, whose block becomes 33–39 — a
full seven, and a clean one. Every lesson is still recapped exactly once.

**If you would rather this deck ran 28–34, say so at the script gate.** By the
time it posts on 09-10, reels 33, 34 and 35 will all have gone out, so a 28–34
block would not point at anything unseen on the day. It is a nine-slide redraft
and the layout has room; the only cost is that carousel-post-7's block then
starts at 35 instead of 33. Request changes with a note and it comes back that
way. Left alone, the strict reading stands, because that is what the rule in
`content/DAILY_RENDER_TASK.md` Step 1 says and what carousel-post-5 did.

---

## Slides — seven, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week five: five kinds of foul" · subhead "This week's five lessons — everything the daily reels covered, 2–6 September." · SWIPE → |
| 2 | LESSON 28 | "Receiving fouls" · takeaway: "Call it immediately, at the moment of contact. Late foul calls are treated very differently." · footer 17.2.1 · 17.2.1.1 · 17.2.2 · 15.8 |
| 3 | LESSON 29 | "Strip fouls" · takeaway: "Say \"strip\" specifically rather than just \"foul\" — the consequence is different and it saves a conversation." · footer 17.3.1 · 17.3.2 |
| 4 | LESSON 30 | "Blocking fouls" · takeaway: "Boxing out with your arms is a habit from other sports and is explicitly illegal here." · footer 17.4.1 · 12.9 · 12.5 |
| 5 | LESSON 31 | "Force-out fouls" · takeaway: "Only call force-out if the contact actually changed where you landed. If you were going out anyway, it's just out." · footer 17.5.1 · 17.5.1.1 · 17.5.1.2 · 17.5.2 · 17.5.3 |
| 6 | LESSON 32 | "Marking fouls and the \"Contact\" call" · takeaway: "Learn to say \"Contact!\" without breaking your stance. It keeps the offence moving and de-escalates the moment." · footer 17.6.1 · 17.6.1.1 · 17.6.1.2 · 17.6.1.3 |
| 7 | Closing | "That's thirty-two of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn verbatim from each lesson's `field` line in
`content/lessons-2.json`, and every footer is that lesson's `rules` array
unchanged. No rule text appears on any slide.

**`TOTAL` is 7.** Recaps have now been 9, 9, 9, 8 and 7 slides; the header's
`n / TOTAL` counter, the filenames and the closing slide number all key off the
constant, so it moves with the slide count. Nothing else in the visual system
changes.

**Layout — dry-measured 2026-09-07 from `content/carousel-post-5/make_carousel.py`
with `TOTAL = 7`, by emitting the SVGs and running `tools/check_layout.py`:**

- Cover at the standard 96px: "Week five: five" measures 665 of the 900px
  column and "kinds of foul" 571. Comfortable, unlike carousel-post-5's 889.
- All five takeaways render at the standard 36px over two or three lines.
  `fit_body()` never engages, and no slide is near the citation.
- Every lesson slide ends at max_y 1192 of 1310, cover 1210, closing 900, all
  seven at max_x 990 of 990. `check_layout.py`: 7 slides, 0 problems, no
  collisions.
- The longest footer is lesson 31's five numbers at 549 of 900px — the widest
  citation line in any recap so far, and still well inside.
- Closing headline "That's thirty-two" at 696 and "of seventy-five." at 655 of
  900px at 90px.
- **Two `_payload()` cases**, both handled by the `<tspan>` wrapper already in
  carousel-post-5's script: slide 6's title wraps to a second line beginning
  `"Contact" call`, and slide 3's takeaway wraps to a line ending `"foul" — the
  consequence is different and it`. Both are the startswith/endswith collision.
  **Verify both quotes survive in the PNGs, not just the SVGs.**

**Rendering:** copy `content/carousel-post-5/make_carousel.py` into a scratch
directory outside the repo and adapt only the slide content — the visual system
(canvas, palette, header lockup, citation footer, type scale) stays
pixel-identical. SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Five lessons this week, and all five were the same word. Foul. The rulebook does not think it is one word."
- Explanation: "Chapter seventeen is a list. Receiving, strip, blocking, force-out, marking — each with its own definition and its own consequence. A receiving foul and a strip foul do not resolve the same way, which is why the name matters."
- Example: "Blocking is the one that surprises people. You are entitled to any unoccupied space and you can box out with your body — what you cannot do is put your arms out to obstruct. That is a narrower rule than most people assume in either direction. Each slide carries its rule numbers so you can look any of it up yourself."
- CTA: "Lessons 28 to 32 of 75 — new lesson daily."

## Instagram caption

Week five, all in one place — the week we stopped saying "foul" and started naming which one.

Chapter 17 of the rulebook doesn't contain a foul. It contains a list of them, and each one has its own definition and its own consequence. Five of them here.

Receiving fouls. Contact around a play on the disc — and the reason to call it at the moment it happens rather than three seconds later.

Strip fouls. When contact knocks the disc out of a catch you had already completed. Say "strip" rather than just "foul"; the consequence is different.

Blocking fouls. You are entitled to any unoccupied space, and you can box out with your body. What you cannot do is put your arms out to obstruct.

Force-out fouls. Contact that changed where you landed. If you were going out anyway, it is just out.

Marking fouls and the "Contact" call. Non-minor contact from the mark is a foul — and you get a choice about whether the game stops for it.

The through-line: naming the right one is not pedantry. Different fouls resolve differently, and "foul!" on its own makes everybody stop and work out which conversation they are having.

Five lessons this week rather than seven. Thrower fouls and dangerous play are recapped with next Thursday's block — the blocks run by lesson number, so nothing is skipped and nothing is counted twice.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, five slides 🥏

the week we stopped saying "foul" and started naming which one

receiving · strip · blocking · force-out · marking

chapter 17 isn't one rule. it's a list, and each foul has its own definition and its own consequence

strip → say "strip", not "foul". different remedy
blocking → box out with your body, not your arms
force-out → only if the contact changed where you landed
marking → non-minor contact, and you choose whether play stops

naming the right one isn't pedantry. it's the difference between a five-second conversation and a five-minute one

five this week instead of seven — thrower fouls and dangerous play get recapped with next Thursday's block. blocks run by lesson number, nothing skipped

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- **Block is lessons 28–32**, continuing straight on from carousel-post-5's
  22–27. **Carousel-post-7 therefore starts at lesson 33**, and its block is
  33–39 — write that down, it is the easiest thing in the pipeline to get wrong
  next week.
- **Five slides of lessons, seven slides total.** `TOTAL = 7`.
- **The cover states five on its face**, per the recap rule for a short block.
- **The closing count is thirty-two, not thirty-five.** A recap consumes no
  lesson number, and the count names the last lesson *in the block*, exactly as
  carousel-post-5 said twenty-seven while lesson 28 had already posted. By
  09-10, lessons 33–35 will have gone out; if that reads oddly to you, the
  cleaner fix is the 28–34 redraft offered above rather than moving the number
  on its own.
- **No rule text on any slide.** Rule numbers only, in the standard citation
  footer. If a slide starts to want a quotation, it is re-teaching — cut it back
  to the takeaway.
- **The theme is unusually tight.** All five are named foul types from chapter
  17, in the rulebook's own order. That is why the cover can be a count rather
  than a topic sentence, and why "five kinds of foul" is literal rather than
  a framing.
- **Takeaways are the lessons' `field` lines, unedited.** Two carry internal
  double quotes. Keep them exactly, and let the type shrink if a line runs long
  rather than trimming the words.
- Instagram caption measures 1,669 characters including hashtags — 76% of the
  2,200 limit. TikTok 942 of 4,000. Both plain text, no markdown.
  `tools/check_caption.py` exits 0.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
