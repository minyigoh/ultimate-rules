# Carousel 2 — "Seven lessons, one week" (weekly recap)

**Status:** Pending review
**Script drafted:** 2026-08-11 (daily-reel-render) · **Rendered:** —
**Queued:** 2026-08-13 (see `content/calendar.md`) — posts alongside Reel 8
**Difficulty:** Mixed (never played → intermediate)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** the seven reels posted 2026-08-07 → 2026-08-13 (lessons 2–8)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

---

## Slides — nine, 1080×1350

Recap window: the seven days ending Thursday 2026-08-13, so post dates
2026-08-07 through 2026-08-13 inclusive. Seven reels fall in it — a full week.

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Seven lessons, one week" · subhead "Everything the daily reels covered, 7–13 August." · SWIPE → |
| 2 | LESSON 2 | "You can't run with the disc — but you can pivot" · takeaway: "Pick your pivot foot as you catch, then plant it. Deciding late is what causes travels." · footer 18.2.2 · 18.2.3 · 18.2.3.1 |
| 3 | LESSON 3 | "Ten seconds: the stall count" · takeaway: "Count along in your head. If theirs is running faster, 'fast count' is a normal, non-confrontational call." · footer 9.1 · 9.3 · 9.4 · 13.2.2 |
| 4 | LESSON 4 | "Five ways to lose the disc" · takeaway: "The moment a disc hits the ground, sprint to guard someone. Points are lost in the two seconds after a turnover." · footer 13.1 · 13.2 |
| 5 | LESSON 5 | "There are no referees. You are the referee." · takeaway: "Only the player who was fouled can call the foul — not a team-mate on their behalf." · footer 1.1 · 1.2 · 15.4 · 13.3 |
| 6 | LESSON 6 | "The field, and why the lines are out" · takeaway: "Catching near the sideline, look down. Toeing the line is out, not in — the opposite of most sports." · footer 2.1 · 2.2 · 2.3 · 2.4 · 11.1 |
| 7 | LESSON 7 | "The pull: how every point starts" · takeaway: "Raise your hand clearly and early. Half of all pull confusion is a team that never actually signalled." · footer 7.1 · 7.2 · 7.3 · 7.4 · 7.6 |
| 8 | LESSON 8 | "A catch and possession are not the same thing" · takeaway: "On a diving catch, squeeze through the landing. The catch isn't finished until you've stopped moving." · footer 12.1 · 12.1.1 · 13.1.1.1 |
| 9 | Closing | "That's week two. Seven more next Thursday." · Follow @learn.ultimatefrisbee |

Takeaways are drawn from each lesson's `field` line in
`content/lessons-1.json` — the reels' own closing advice, condensed. No rule
text appears on any slide; the citation footer carries the rule numbers and the
"WFDF Rules of Ultimate 2025–2028" attribution only.

**Rendering:** copy `content/carousel-post-1/make_carousel.py` into
`/tmp/work/carousel-post-2/` and adapt only the slide content — the visual
system (canvas, palette, header lockup, citation footer, type scale) stays
pixel-identical. SVG→PNG via
`convert -background "#0F1712" in.svg -resize 2250x2812! out.png`. Save as
`NN_description.png`.

---

## Script (~30s, if cut as a video variant)

- Hook: "Seven lessons this week. Here's the whole set in one swipe."
- Explanation: "Pivoting, the stall count, the five turnovers, self-officiating, the sidelines, the pull, and the gap between a catch and possession."
- Example: "If one of these is still fuzzy, the reel it came from is on the grid — each slide carries its rule numbers so you can look it up yourself."
- CTA: "Lessons 2 to 8 of 75 — new lesson daily."

## Instagram caption

Week two, all seven lessons in one place.

Pivoting without travelling. The ten-second stall count. The five ways possession flips. Why there's nobody with a whistle. Why the sideline is out, not in. How every point starts. And the difference between catching the disc and actually having it.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

pivots, stall counts, turnovers, no refs, sidelines, the pull, and the catch-vs-possession one that gets everybody

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Slide 8 recaps Reel 8, which is queued for the same day (2026-08-13) and whose
  script is itself at Pending review. If Reel 8's script changes topic or gets
  rejected, slide 8 has to be redrawn to match whatever fills that date.
- Recap slides carry no rule text by design — see `content/CAROUSEL_TEMPLATE.md`.
  If a slide starts growing rule quotes it has drifted into re-teaching.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
