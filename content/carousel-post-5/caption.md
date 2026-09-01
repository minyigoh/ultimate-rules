# Carousel post 5 — "Week four: contact, and who decides" (weekly recap)

**Status:** Content pending review
**Script approved:** 2026-09-01 · **Redrafted:** 2026-09-01 · **Rendered:** 2026-09-02 · **Content approved:** —
**Queued:** 2026-09-03 (see `content/calendar.md`) — posts alongside Reel 29
**Slides:** 8 (`01_cover.png` → `08_closing.png`)
**Rules quoted from:** WFDF Rules of Ultimate 2025–2028 — rule numbers cited, no rule text

Recap block: lessons 22–27, the fourth block, following carousel-post-4's
lessons 15–21, carousel-post-3's 8–14 and carousel-post-2's 1–7.

**Six lessons, not seven, and eight slides rather than nine.** Lesson 28's reel
was rejected on the content track and has not posted, and a lesson is only
eligible for a recap once its reel has actually gone out. Lesson 28 is not
lost — it opens **carousel-post-6, whose block is 28–34**, not 29–35.

> **Read this before approving.** The script stamped `approved` on the desk at
> 21:40 on 2026-09-01 was v1, which planned lessons 22–28 across nine slides.
> The redraft that cut the block to 22–27 landed in the push six minutes later,
> at 21:46. These slides are built from the **redraft**, so the words on them
> are newer than the approval stamp. Everything that changed is visible on the
> slides themselves — the cover says six, there is no lesson-28 slide, the
> counter reads `n / 8`, and the closing says twenty-seven.

---

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

## Attribution

Rule numbers cited from the **WFDF Rules of Ultimate 2025–2028**. No rule text
appears on any slide — recap slides carry the lesson's takeaway and its rule
numbers only.

---

## Render notes — 2026-09-02

- **Eight slides at 2250×2812**, built from `make_carousel.py`, which reuses
  carousel-post-4's layout code as-is. Only `TOTAL` (9 → 8), the cover, the
  closing and the `recaps` list differ.
- **Takeaways are the lessons' `field` lines byte-identical**, checked
  programmatically against `content/lessons-2.json` before rendering, along
  with every rule number against each lesson's `rules` array. All six passed.
- **Layout check: 0 problems, no collisions.** Six lesson slides all end at
  max_y 1192 of 1310, the cover at 1210, the closing at 900.
- **The cover is back to the standard 96px.** "Week four: contact," measures
  889 of the 900px column, so unlike carousel-post-4 it did not need shrinking.
  There is no room to lengthen that line in review.
- **`fit_body()` never engaged.** All six takeaways render at the standard 36px.

### A rendering defect found and fixed here

Slide 3's takeaway wraps so its last line is `hand."`, and **the closing quote
did not render** — correct in the SVG, missing in the PNG. This is the reel-21
leading-quote bug at the other end of the string: ImageMagick 6 lowers each
`<text>` into an MVG `text x,y "..."` primitive, and a double quote adjacent to
*either* delimiter is swallowed. Measured on 2026-09-02:

| payload | result |
|---|---|
| `hand."` | trailing quote dropped |
| `"Contest" x` | leading quote dropped (the known reel-21 case) |
| `"a b."` | **both** dropped |
| `say "hi" now` | fine |
| any of the above wrapped in `<tspan>` | all quotes survive |

`_payload()` was wrapping only when the text *starts* with a quote. It now
wraps on `startswith` **or** `endswith`. Fixed here and in
`content/reel-28/render_v3.py`; every other element still emits byte-identical
SVG, so the change is a no-op except where a quote actually sits at an edge.

**Two already-posted reels shipped with this defect** and are listed in the run
report: reel-11 (field tip, `first?"`) and reel-26 (field tip,
`I got there?"`). All 30 reels and carousels 1–4 were scanned; nothing else is
affected.

---

## Notes

- **Carousel-post-6's block is 28–34.** This is the easiest thing in the
  pipeline to get wrong next Thursday.
- Once posted, report back the numbers and I'll log them in
  `content/calendar.md`.
