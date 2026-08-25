# Carousel post 4 — "Week three: how to mark, and what to call" (weekly recap)

**Status:** Content pending review
**Script approved:** 2026-08-24 · **Rendered:** 2026-08-25 · **Content approved:** —
**Queued:** 2026-08-27 (see `content/calendar.md`) — posts alongside Reel 22
**Slides:** 9 (`01_cover.png` → `09_closing.png`)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text

Recap block: lessons 15–21, the third contiguous block of seven, following
carousel-post-3's lessons 8–14 and carousel-post-2's lessons 1–7.

---

## Instagram caption

Week three, all in one place — and this week was almost entirely about the mark.

Catching at a sprint and releasing inside two contacts. What travel actually is, and why calling it doesn't stop play. Disc space. Straddling and wrapping. Fast count. Double team and the three-metre rule. And then, on Wednesday, the vocabulary underneath all of it: foul, infraction, violation, and which of the three lets play carry on.

Weeks one and two were about the disc and your feet. This week is about the person standing a forearm away from you, and the four specific things they aren't allowed to do — every one of which you're allowed to say out loud.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

---

## TikTok caption (photo carousel variant)

everything the daily reels covered this week, seven slides 🥏

two-contact throws, travel, disc space, straddle + wrapping, fast count, double team, and foul vs infraction vs violation

basically: what your marker can't do, and what to call it

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

---

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Slide index

| # | File | Content |
|---|---|---|
| 1 | `01_cover.png` | THIS WEEK · "Week three: how to mark, and what to call" · "Everything the daily reels covered, 20–26 August." · SWIPE → |
| 2 | `02_lesson15_two_contact_allowance.png` | Lesson 15 — Throwing on the run: the two-contact allowance · 18.2.1.1 · 18.2.4.2 |
| 3 | `03_lesson16_travel.png` | Lesson 16 — Travel: the call that doesn't stop play · 18.2.5 · 18.2.6 · 18.2.7 · 18.2.8 |
| 4 | `04_lesson17_disc_space.png` | Lesson 17 — Disc space: give the thrower room · 18.1.1.3 |
| 5 | `05_lesson18_straddle_and_wrapping.png` | Lesson 18 — Straddle and wrapping · 18.1.1.2 · 18.1.1.4 · 18.1.3 |
| 6 | `06_lesson19_fast_count.png` | Lesson 19 — Fast count · 18.1.1.1 · 18.1.4 · 18.1.4.4 |
| 7 | `07_lesson20_double_team.png` | Lesson 20 — Double team: the three-metre rule · 18.1.1.5 · 18.1.1.5.1 · 18.1.1.5.2 |
| 8 | `08_lesson21_foul_infraction_violation.png` | Lesson 21 — Foul, infraction, violation — what's the difference? · 15.1 · 15.2 · 15.3 · 15.6 |
| 9 | `09_closing.png` | "That's twenty-one of seventy-five." · Seven more next Thursday · Follow @learn.ultimatefrisbee |

---

## Notes

- Attribution to WFDF is in both captions and in the citation footer on all
  seven recap slides.
- Recap slides carry rule **numbers only**, no rule text — by design, per
  `content/CAROUSEL_TEMPLATE.md`. There is deliberately nothing on them to
  paraphrase; the reels already did the teaching.
- **Block is lessons 15–21, by lesson number, not by date**, continuing straight
  on from carousel-post-3's 8–14.
- **Two of the seven reels had not posted when this was rendered.** Lesson 20 is
  "Ready to post" for today, 2026-08-25; lesson 21 was rejected on 2026-08-24
  over a rendering defect, was regenerated this morning, and now sits at
  "Content pending review" for 2026-08-26. Both are ahead of this carousel's
  27 August date, so the block as approved still holds. **If either slips past
  the 27th**, drop that lesson's slide, retitle the cover to "This week's six
  lessons", and roll the lesson into next week's block — the rest of the
  carousel stands without it, and nothing is lost because blocks run by lesson
  number.
- **The cover title renders at 84px rather than the usual 96px.** "mark, and
  what to call" measures 1003px at 96 against a 900px column. Same rule as the
  reel pipeline's `fit_kicker()` and `fit_body()`: shrink the type, never the
  approved words. Line height scales with it (108 → 95).
- **Slides 3 and 7 have trimmed footers.** Lesson 16's `rules` array carries
  eight numbers; the four on the slide are the parent rules the reel actually
  carded, with the children sitting under them. Slide 7 drops 15.5.1 because it
  is lesson 22's subject, not lesson 20's takeaway.
- **Slide 8 is the hinge into next week.** Everything stops except travel and
  the marking calls — and Reel 22, posting the same day, is about who owns each
  of those calls.
- `make_carousel.py` reuses `carousel-post-3/make_carousel.py`'s helpers,
  constants, `rule_slide()`, `header()` and layout verbatim; only the slide
  content and the cover's two type sizes differ. Rendered at 2250×2812 via
  `convert -background "#0F1712" in.svg -resize 2250x2812! out.png`.
- Layout checked with `tools/check_layout.py`: 9 slides, 0 problems, no ink
  collisions with the citation footer.
- No growth/reach claims made in either caption.
- Edit directly in this file, then approve the render from the Content Desk.
