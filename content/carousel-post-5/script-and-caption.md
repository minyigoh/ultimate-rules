# Carousel 5 — "Week four: contact, and who decides" (weekly recap)

**Status:** Pending review — redraft v2, block cut from 22–28 to 22–27
(see `script-feedback.md`)
**Script drafted:** 2026-08-31 · **Redrafted:** 2026-09-01 (daily-reel-render)
**Rendered:** —
**Queued:** 2026-09-03 (see `content/calendar.md`) — posts alongside Reel 29
**Difficulty:** Mixed (beginner)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** lessons 22–27 (reels posted 2026-08-27 → 2026-09-01)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

**Recap block: lessons 22–27**, six lessons, following carousel-post-4's 15–21,
carousel-post-3's 8–14 and carousel-post-2's 1–7. Blocks run by lesson number,
not by date, per Min-Yi's confirmation of 2026-08-17.

**Why six and not seven.** v1 of this script planned 22–28 and attached a
condition to it: *"If any of those three reels slips past 09-03, this carousel
is wrong and should be cut back to the lessons that actually went out."* That
condition has fired. Reel 28 was rejected on the content track on 08-31 and the
note asks for different words, so it is back at the script gate this run and
cannot be approved, rebuilt, content-approved and posted before this carousel
goes out on 09-03. Lesson 28's reel has not posted, so lesson 28 is not
eligible, and a recap slide claiming otherwise would point at a reel nobody has
seen.

**Nothing is lost.** Lesson 28 rolls into **carousel-post-6, whose block is
28–34** rather than 29–35. Blocks stay contiguous, every lesson is recapped
exactly once, and the cover says six so the count is honest on its face.

---

## Slides — eight, 1080×1350

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Week four: contact, and who decides" · subhead "This week's six lessons — everything the daily reels covered, 27 August – 1 September." · SWIPE → |
| 2 | LESSON 22 | "Who is allowed to make which call" · takeaway: "Watching from the sideline? You have no calls. You can offer perspective if asked, and that's genuinely valuable." · footer 15.4 · 15.5 · 15.5.1 · 15.6 · 1.10 |
| 3 | LESSON 23 | "\"Contest\" — disagreeing properly" · takeaway: "Be ready to say the objective evidence for your view in one sentence: \"I saw your pivot foot lift while the disc was still in your hand.\"" · footer 15.10 · 13.3 · 1.3.4 |
| 4 | LESSON 24 | "Changing your mind is a rule, not a weakness" · takeaway: "\"Retracted, my bad\" takes two seconds and resolves more disputes than any amount of arguing." · footer 15.11 · 1.5.1 |
| 5 | LESSON 25 | "The duty to avoid contact" · takeaway: "This is what makes a non-contact sport playable at speed. Bid hard, but into space you're sure is empty." · footer 12.6 · 12.6.1 · 12.6.2 · 12.6.3 |
| 6 | LESSON 26 | "Who initiated the contact?" · takeaway: "Instead of \"you fouled me\", try \"where were you when I got there?\" It's the actual question." · footer 12.7 · 12.7.1 · 12.7.2 · 12.7.3 · 12.4 |
| 7 | LESSON 27 | "Not every touch is a foul" · takeaway: "If it didn't change what happened and nobody's hurt, let it go. Consistently over-calling is itself a Spirit breach." · footer 12.8 · 15.1 · 1.3.10 |
| 8 | Closing | "That's twenty-seven of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn verbatim from each lesson's `field` line in
`content/lessons-2.json`. No rule text appears on any slide; the citation
footer carries the rule numbers and the "WFDF Rules of Ultimate 2025–2028"
attribution only.

**`TOTAL` is 8, not 9.** The header's `n / TOTAL` counter, the slide filenames
and the closing slide number all follow. This is the first recap that isn't
nine slides, so it is the first place that constant has ever had to move —
check it rather than assuming.

**Five slides begin a line with a double quote** (3 in its title, and 3, 4 and
6 in their takeaways). That is the reel-21 leading-quote case: ImageMagick 6
swallows a double quote that lands first in a `<text>` element's character
data. The carousel script needs `_payload()` / the `<tspan>` wrapper from
`content/reel-26/render_v3.py` if `make_carousel.py` does not already carry it
— check before rendering, and verify the quotes survive in the PNGs, not just
the SVGs.

**Rendering:** copy `content/carousel-post-4/make_carousel.py` into a scratch
directory outside the repo and adapt only the slide content — the visual system
(canvas, palette, header lockup, citation footer, type scale) stays
pixel-identical. SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Six lessons this week. This was the week the game stopped being about the disc and started being about each other."
- Explanation: "Who's allowed to make which call, and why the sideline isn't. How to contest properly. How to retract. Then the contact framework in three parts: the duty to avoid it, who's deemed to have initiated it, and the tolerance the rules build in on purpose."
- Example: "That last one surprises people. Minor contact is not a foul — the rulebook says so in a single sentence, and it's what lets two players run hard at the same spot without the game stopping every time. Each slide carries its rule numbers so you can look any of it up yourself."
- CTA: "Lessons 22 to 27 of 75 — new lesson daily."

## Instagram caption

Week four, all in one place — and this was the week the game stopped being about the disc and started being about each other.

Who is actually allowed to make a call, and why the sideline isn't. How to contest properly, and what to have ready when you do. The formal word for "actually, you're right".

Then the contact framework in three parts: the duty to avoid it, the rulebook's own definition of who initiated it, and the tolerance built in on purpose — because minor contact is not a foul, and the rules say so in one sentence.

Weeks one to three were the disc, your feet, and your marker. This week is the part of ultimate that has no referee to fall back on: two people who disagree, working out what happened between them. All of it is written down, which is the point.

Six lessons rather than the usual seven — the named foul types start next week, and they'll be recapped together where they belong.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, six slides 🥏

who can make which call · how to contest · how to retract · the duty to avoid contact · who initiated it · why minor contact isn't a foul

basically: the week where the sport stops being about the disc and starts being about the other person

no referees. it's all written down instead

six this week instead of seven — the named foul types start next week and get recapped together

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- **Block is lessons 22–27**, continuing straight on from carousel-post-4's
  15–21. Nothing skipped, nothing recapped twice. **Carousel-post-6 starts at
  lesson 28**, not 29 — that is the whole point of cutting this one back, and
  it is the easiest thing in the pipeline to get wrong next week.
- **Six slides of lessons, eight slides total.** Every previous recap has been
  nine. The `n / TOTAL` header counter and the closing slide number both key
  off that, so `TOTAL` has to change with the slide count.
- **The cover says six out loud.** Per the recap rule, a short block states its
  own size rather than quietly looking like a full one.
- **No rule text on any slide.** Rule numbers only, in the standard citation
  footer. If a slide starts to want a quotation, it is re-teaching — cut it back
  to the takeaway.
- **The theme survived the cut, and got tighter.** 22–24 are the call
  machinery; 25–27 are the contact framework. Lesson 28 was the one item in the
  original block that sat outside that arc, so the cover and closing now read as
  one thing rather than six plus an appendix.
- **Takeaways are the lessons' `field` lines, unedited.** Three carry internal
  double quotes and one is a quotation in full; keep them exactly, and let the
  type shrink if a line runs long rather than trimming the words.
- **The closing slide's count is 27.** A recap consumes no lesson number — reel
  29 is queued the same day and is the week's *new* lesson, not part of this
  block. The closing says "More next Thursday" rather than "Seven more", since
  next week's block is 28–34 and this one no longer sets that expectation.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
