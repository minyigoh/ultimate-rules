# Carousel 6 — "Week five: six fouls and the freeze" (weekly recap)

**Status:** Pending review — redraft v2, block widened from 28–32 to 29–35
(see `script-feedback.md`)
**Script drafted:** 2026-09-07 · **Redrafted:** 2026-09-08 (daily-reel-render)
**Rendered:** —
**Queued:** 2026-09-10 (see `content/calendar.md`) — posts alongside Reel 36
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 29–35 (reels posted 2026-09-03 → 2026-09-09)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 29–35**, seven lessons, set from the desk on 2026-09-07:

> It shouldn't just cover 5 lessons. It should cover 7 lessons from Thursday
> all the way to Wednesday - Reel 29 to 35.

Reel 29 posted Thursday 2026-09-03 and reel 35 posts Wednesday 2026-09-09, the
day before this deck. So by the time it goes out, all seven reels have run.

### One thing to decide before approving: lesson 28

v1 of this deck ran 28–32. Widening the far end to 35 also moved the near end
from 28 to 29, and **lesson 28 ("Receiving fouls", posted 2026-09-02) now has
no recap.** carousel-post-5 stopped at 27 because 28's reel had not gone out
yet; this deck starts at 29. Nothing between them covers it.

That is a real gap, not a rounding error — the block rule exists so every
lesson is recapped exactly once. Three ways out, in order of how little they
cost:

1. **carousel-post-7 opens with lesson 28**, then runs 36–41. Still seven
   slides, still one recap per lesson, and the only oddity is one out-of-order
   entry on next Thursday's deck. **This is the recommendation.**
2. **This deck runs 28–35**, eight lessons, ten slides. Honours the block rule
   exactly but is one more than the seven asked for, and the cover would have
   to say eight.
3. **Leave 28 un-recapped.** Cheapest, and nobody will notice, but the
   "every lesson exactly once" promise stops being true from here on.

Nothing on these slides depends on which is chosen — say the word at the script
gate and 1 or 2 is a small edit.

---

## Slides — nine, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week five: six fouls and the freeze" · subhead "This week's seven lessons — everything the daily reels covered, 3–9 September." · SWIPE → |
| 2 | LESSON 29 | "Strip fouls" · takeaway: "Say \"strip\" specifically rather than just \"foul\" — the consequence is different and it saves a conversation." · footer 17.3.1 · 17.3.2 |
| 3 | LESSON 30 | "Blocking fouls" · takeaway: "Boxing out with your arms is a habit from other sports and is explicitly illegal here." · footer 17.4.1 · 12.9 · 12.5 |
| 4 | LESSON 31 | "Force-out fouls" · takeaway: "Only call force-out if the contact actually changed where you landed. If you were going out anyway, it's just out." · footer 17.5.1 · 17.5.1.1 · 17.5.1.2 · 17.5.2 · 17.5.3 |
| 5 | LESSON 32 | "Marking fouls and the \"Contact\" call" · takeaway: "Learn to say \"Contact!\" without breaking your stance. It keeps the offence moving and de-escalates the moment." · footer 17.6.1 · 17.6.1.1 · 17.6.1.2 · 17.6.1.3 |
| 6 | LESSON 33 | "Fouls committed by the thrower" · takeaway: "Pivot around the mark, not through it. If you're initiating contact to create your throwing window, that's the foul." · footer 17.7.1 · 17.7.2 |
| 7 | LESSON 34 | "Dangerous play" · takeaway: "If a play frightened you, say so at the time. \"That felt dangerous\" is a legitimate and important thing to raise." · footer 17.1.1 · 1.6.1 · 1.6.2 |
| 8 | LESSON 35 | "When a call is made, everybody freezes" · takeaway: "Stop moving the instant you hear a call, even if you think it's wrong. Drifting into better position during a stoppage is a violation of the check." · footer 16.1 · 15.7 · 10.2.1 · 10.2.3 |
| 9 | Closing | "That's thirty-five of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn verbatim from each lesson's `field` line — `lessons-2.json`
for 29–34, `lessons-3.json` for 35 — and every footer is that lesson's `rules`
array unchanged. No rule text appears on any slide.

**`TOTAL` is 9**, back to a full block after carousel-post-5's eight and this
deck's own seven-slide v1. The header's `n / TOTAL` counter, the filenames and
the closing slide number all key off the constant.

### Why the title changed

"Week five: five kinds of foul" was accurate for a 28–32 block. At 29–35 the
deck is six foul types (strip, blocking, force-out, marking, thrower,
dangerous) plus one rule that is not a foul at all — the freeze. "Six fouls and
the freeze" says that on its face, and the seventh slide is not smuggled in
under a heading that excludes it.

**The calendar row still reads `carousel-post-6 — "Week five: five kinds of
foul"`.** This run cannot write `calendar.md` (Step 7), and a queued row with
the new title would insert a *second* row for 09-10 rather than rename the
first, because rows key on date + title. The Worker matches rows on the folder
name as well as the title, so desk decisions will still patch the right row —
this is cosmetic. Tidy the title by hand if it bothers you.

**Layout — dry-measured 2026-09-08 from this folder's `make_carousel.py`
with `TOTAL = 9`, by emitting the SVGs and running `tools/check_layout.py`:**

- Cover at the standard 96px: "Week five: six fouls" measures 889 of the 900px
  column, the same tightness carousel-post-5's cover shipped at. **Line one has
  11px spare — it cannot be lengthened in review.** Line two, "and the freeze",
  is 646 and has room.
- All seven takeaways render at the standard 36px. `fit_body()` never engages
  and no slide comes near the citation.
- Every lesson slide ends at max_y 1192 of 1310, cover 1210, closing 900, all
  nine at max_x 990 of 990. `check_layout.py`: 9 scenes, 0 problems, no
  collisions.
- The longest footer is lesson 31's five numbers at 549 of 900px, unchanged
  from v1 — still the widest citation line in any recap.
- Closing headline "That's thirty-five" at 696 and "of seventy-five." at 655 of
  900px at 90px.
- **Three `_payload()` cases**, all handled by the `<tspan>` wrapper carried
  over from carousel-post-5: slide 2's takeaway wraps to a line beginning
  `"foul" — the consequence is different and it`, slide 5's title wraps to a
  second line beginning `"Contact" call`, and slide 7's takeaway wraps to a line
  beginning `"That felt dangerous" is a legitimate and`. All three are the
  startswith/endswith collision. **Verify all three quotes survive in the PNGs,
  not just the SVGs.**

**At render time, flip three fields in `social/dashboard/data.js`.** While this
deck is unrendered it carries `slides: null`, `scenes: null` and no
`typeDetail`, because `build_desk.py`'s `check_slides()` verifies every slide
stem against a file on disk and fails the whole build if one is missing. The
first draft of this entry named all seven PNGs before they existed, which broke
`sync.bat` at step 2 on 2026-09-07. Set all three once the PNGs are actually
there.

**Rendering:** `content/carousel-post-6/make_carousel.py` is this folder's own
copy, already measured — copy it into a scratch directory outside the repo and
run it there rather than re-deriving the layout. SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Seven lessons this week. Six of them were the word foul, and the rulebook does not think it is one word."
- Explanation: "Chapter seventeen is a list. Strip, blocking, force-out, marking, thrower, dangerous — each with its own definition and its own consequence. A strip and a force-out do not resolve the same way, which is why the name matters more than the volume."
- Example: "Blocking is the one that surprises people. You are entitled to any unoccupied space and you can box out with your body — what you cannot do is put your arms out to obstruct. And the seventh lesson isn't a foul at all: the moment anybody calls anything, everybody freezes, where they were rather than where they were heading."
- CTA: "Lessons 29 to 35 of 75 — new lesson daily."

## Instagram caption

Week five, all in one place — six kinds of foul, and then the rule that stops play.

Chapter 17 of the rulebook doesn't contain a foul. It contains a list of them, and each one has its own definition and its own consequence.

Strip fouls. Contact that knocks the disc out of a catch you had already completed. Say "strip" rather than just "foul"; the remedy is different.

Blocking fouls. You are entitled to any unoccupied space, and you can box out with your body. What you cannot do is put your arms out to obstruct.

Force-out fouls. Contact that changed where you landed. If you were going out anyway, it is just out.

Marking fouls and the "Contact" call. Non-minor contact from the mark is a foul — and you get a choice about whether the game stops for it.

Fouls committed by the thrower. Pivot around the mark, not through it. Initiating contact to open your own throwing window is the foul throwers forget exists.

Dangerous play. The one that needs no contact at all. If a play frightened you, say so at the time.

Then the odd one out, and the reason the rest of them work: when a call is made, everybody freezes. You stop where you were, not where you were heading, and you stay there until the disc is checked in.

The through-line: naming the right foul is not pedantry. Different fouls resolve differently, and "foul!" on its own makes everybody stop and work out which conversation they are having.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

That's thirty-five of seventy-five.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

six kinds of foul, then the rule that stops play

strip · blocking · force-out · marking · thrower · dangerous

chapter 17 isn't one rule. it's a list, and each foul has its own definition and its own consequence

strip → say "strip", not "foul". different remedy
blocking → box out with your body, not your arms
force-out → only if the contact changed where you landed
marking → non-minor contact, and you choose whether play stops
thrower → pivot around the mark, not through it
dangerous → no contact required. if it scared you, say so

then the odd one out: when a call is made, everybody freezes. where you were, not where you were heading

naming the right foul isn't pedantry. it's the difference between a five-second conversation and a five-minute one

that's thirty-five of seventy-five

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- **Block is lessons 29–35**, set from the desk. **Carousel-post-7 therefore
  starts at lesson 36**, block 36–42 — unless lesson 28 is folded in as the
  opening slide, which is the recommendation above.
- **Lesson 28 is currently un-recapped.** Read the section at the top before
  approving; this is the one decision this deck needs.
- **Seven lesson slides, nine slides total.** `TOTAL = 9`.
- **The cover no longer states a count on its face** — it doesn't need to, at a
  full block of seven. The subhead says seven and the date range says 3–9
  September.
- **The closing count is thirty-five**, the last lesson in the block. Lesson 36
  posts the same morning as this deck, which is why the count stops where it
  does.
- **No rule text on any slide.** Rule numbers only, in the standard citation
  footer. If a slide starts to want a quotation, it is re-teaching — cut it back
  to the takeaway.
- **Takeaways are the lessons' `field` lines, unedited.** Three carry internal
  double quotes. Keep them exactly, and let the type shrink if a line runs long
  rather than trimming the words.
- **Six of the seven are chapter-17 foul types, in the rulebook's own order**
  (17.1 dangerous play is carded last rather than first, because that is the
  order the reels ran, not the order the chapter numbers). The seventh, lesson
  35, is chapter 16 and is deliberately framed as a change of subject rather
  than a seventh foul.
- Instagram caption measures 1,796 characters including hashtags — 82% of the
  2,200 limit, below the 95% warning line. TikTok 1,034 of 4,000. Both plain
  text, no markdown. `tools/check_caption.py` exits 0.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
