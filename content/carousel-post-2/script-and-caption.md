# Carousel 2 — "Seven lessons, one week" (weekly recap)

**Status:** Content pending review
**Script drafted:** 2026-08-11 (daily-reel-render) · **Redrafted:** 2026-08-11 · **Script approved:** 2026-08-11 · **Rendered:** 2026-08-12
**Queued:** 2026-08-13 (see `content/calendar.md`) — posts alongside Reel 8
**Difficulty:** Mixed (never played → intermediate)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text
**Source:** the seven reels posted 2026-08-06 → 2026-08-12 (lessons 1–7)

This is a **weekly recap**, not a topic carousel. It consumes no lesson number
and introduces no new curriculum — the reels already taught this material and
these slides are the week's index back to them. Recap slides cite rule numbers
but carry **no rule text**; there is deliberately nothing on them to paraphrase.

---

## Slides — nine, 1080×1350

Recap window: the first seven lessons, posted 2026-08-06 through 2026-08-12
inclusive. Seven reels fall in it — a full week, and the account's first.

| # | Slide | Content |
|---|---|---|
| 1 | Cover | kicker THIS WEEK · "Seven lessons, one week" · subhead "Everything the daily reels covered, 6–12 August." · SWIPE → |
| 2 | LESSON 1 | "The whole game in one paragraph" · takeaway: "New players freeze after catching. Don't — you have ten seconds, which is longer than it feels. Look up first." · footer 4.1 · 14.1 · 18.2.2 · 13.1 |
| 3 | LESSON 2 | "You can't run with the disc — but you can pivot" · takeaway: "Pick your pivot foot as you catch, then plant it. Deciding late is what causes travels." · footer 18.2.2 · 18.2.3 · 18.2.3.1 |
| 4 | LESSON 3 | "Ten seconds: the stall count" · takeaway: "Count along in your head. If theirs is running faster, 'fast count' is a normal, non-confrontational call." · footer 9.1 · 9.3 · 9.4 · 13.2.2 |
| 5 | LESSON 4 | "Five ways to lose the disc" · takeaway: "The moment a disc hits the ground, sprint to guard someone. Points are lost in the two seconds after a turnover." · footer 13.1 · 13.2 |
| 6 | LESSON 5 | "There are no referees. You are the referee." · takeaway: "Only the player who was fouled can call the foul — not a team-mate on their behalf." · footer 1.1 · 1.2 · 15.4 · 13.3 |
| 7 | LESSON 6 | "The field, and why the lines are out" · takeaway: "Catching near the sideline, look down. Toeing the line is out, not in — the opposite of most sports." · footer 2.1 · 2.2 · 2.3 · 2.4 · 11.1 |
| 8 | LESSON 7 | "The pull: how every point starts" · takeaway: "Raise your hand clearly and early. Half of all pull confusion is a team that never actually signalled." · footer 7.1 · 7.2 · 7.3 · 7.4 · 7.6 |
| 9 | Closing | "That's the first seven. Seven more next Thursday." · Follow @learn.ultimatefrisbee |

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
- Explanation: "The shape of the game, pivoting, the stall count, the five turnovers, self-officiating, the sidelines, and how every point starts."
- Example: "If one of these is still fuzzy, the reel it came from is on the grid — each slide carries its rule numbers so you can look it up yourself."
- CTA: "Lessons 1 to 7 of 75 — new lesson daily."

## Instagram caption

The first seven lessons, all in one place.

What the game actually is. Pivoting without travelling. The ten-second stall count. The five ways possession flips. Why there's nobody with a whistle. And why the sideline is out, not in. Plus how every point starts.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.

## TikTok caption

everything the daily reels covered this week, seven slides 🥏

the shape of the game, pivots, stall counts, turnovers, no refs, sidelines, and the pull

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio

## Hashtags

#UltimateFrisbee #SpiritOfTheGame #WFDFRulesofUltimate #LearnUltimateFrisbee #UltimateFrisbeeTips

---

## Notes

- Recap window is lessons 1–7 (posted 6–12 August) per Min-Yi's review note of
  2026-08-11. That is one day wider on the early side than the standing
  "seven days ending Thursday" rule in `content/DAILY_RENDER_TASK.md`, which
  would have started at lesson 2. Her framing is the account's genuine first
  week, so the recap starts where the curriculum does. Lesson 8 moves to next
  Thursday's recap, which will then cover lessons 8–14.
- Recap slides carry no rule text by design — see `content/CAROUSEL_TEMPLATE.md`.
  If a slide starts growing rule quotes it has drifted into re-teaching.
- Every lesson recapped here has already posted, so no slide is exposed to a
  script still in review — a change from the previous draft, which recapped
  Reel 8 on the same day Reel 8 was queued to go out.
- No growth/reach claims in either caption.
- Once posted, report back the numbers and I'll log them in `content/calendar.md`.
