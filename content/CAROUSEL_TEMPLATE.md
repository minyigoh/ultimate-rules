# Carousel post template

`carousel-post-1/` is the reference template for future Instagram carousel posts
(and the visual system to reuse for reels graphics). Copy
`carousel-post-1/make_carousel.py` into a new `carousel-post-N/` folder and
adapt the topics, rules and any diagrams rather than designing from scratch.

Carousels are built by the same `daily-reel-render` scheduled job as reels,
and go through the same rendered-content review gate before they're postable
— see `content/CONTENT_REVIEW.md`.

*Settled on 2026-08-06 after a few rounds of revision — see git history on this
file's folder for the iteration.*

There are two carousel shapes. The **topic carousel** below is the original
(carousel-post-1). The **weekly recap** further down runs every Thursday and
reuses the identical visual system with a different slide sequence.

## Structure — topic carousel

1. **Cover slide** — kicker (e.g. "NEVER PLAYED BEFORE"), a big two-line
   headline, a one-sentence subhead, "SWIPE →".
2. **Context/diagram slides** (optional) — e.g. the field-layout slide, with a
   to-scale SVG diagram. These are *not* numbered — the cover's "six things"
   count only covers the numbered topic slides below.
3. **Numbered topic slides** — `#1 THE POINT`, `#2 THE CATCH`, … each paired
   with its own rules-citation detail slide quoting the exact WFDF rule text
   (never paraphrased — attribution integrity matters).
4. **Rules-detail slide(s)** — if a topic's citations are too long/numerous for
   one card (roughly more than ~3 short rules), split across multiple detail
   slides rather than shrinking type or cramming. See the field slide's two
   rules-detail cards (2.1+2.3, then 2.4+2.5) for the pattern.
5. **Closing slide** — short wrap-up line + "Follow @learn.ultimatefrisbee".

## Structure — weekly recap carousel

Posts every Thursday alongside that day's reel, recapping the next seven
lessons in curriculum order that no earlier recap has covered and whose reels
have already posted. Recaps run in contiguous blocks — 1–7, then 8–14, then
15–21 — so every lesson is recapped exactly once. Nine slides for a full block.

**The window is lesson numbers, not dates.** An earlier version of this file
said "the seven days ending that Thursday"; that drifts when a post date slips
and orphans any lesson landing in the seam. Corrected 2026-08-17.

1. **Cover slide** — kicker "THIS WEEK", headline naming the block (e.g.
   "Seven lessons, one week"), one-sentence subhead, "SWIPE →". If the block
   held fewer than seven lessons, the cover says the real number.
2. **Seven recap slides**, one per lesson, in curriculum order. Each carries
   the lesson number ("LESSON 8"), the reel's title as the headline, its
   one-line takeaway as the body, and that lesson's rule numbers in the
   standard citation footer.
3. **Closing slide** — wrap-up line + "Follow @learn.ultimatefrisbee".

**A recap slide is not a rules card.** It cites rule numbers but carries no
rule text, so there is nothing on it to paraphrase — which is the point. If a
recap slide is growing rule quotes, it has drifted into re-teaching; cut back
to the takeaway and let the reel do the work. The "WFDF Rules of Ultimate
2025–2028" attribution still appears in the footer and the caption.

The recap does **not** consume a lesson number and never introduces curriculum
the block's reels didn't already cover. If fewer than seven eligible lessons
are available, recap what's there — the next block picks up where this one
stopped, so nothing is lost. If fewer than three, skip that week's recap
rather than padding it.

## Visual system

- Canvas: 1080×1350, dark theme — `#0F1712` background, `#E24A12` orange
  accent, `#F1F3EE` cream text. Font: Liberation Sans throughout.
- Header lockup: mini ring logo + **"Learn Ultimate Frisbee"** in bold mixed
  case (matches the profile logo — never all-caps) + slide counter "N / TOTAL".
- Kickers, headlines and citation labels are bold. Long rule-quote paragraphs
  are regular weight — bolding a whole paragraph reads as shouting.
- Citation footer: "WFDF Rules of Ultimate 2025–2028" then the rule numbers
  below it, both at the same font size (26px).

## Rendering

Pull rule text verbatim from `content/rules.json`. The sandbox has no
cairosvg/rsvg-convert — convert SVG→PNG with ImageMagick's librsvg delegate:

```
convert -background "#0F1712" in.svg -resize <2.083x>! out.png
```

(2.083x the SVG viewBox — e.g. 2250×2812 for a 1080×1350 canvas.)

## Handle

`@learn.ultimatefrisbee`
