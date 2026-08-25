## Round 1 — 2026-08-24 — REJECTED
On slide 6, there seems to be a typo without the opening " for the Violation. It currently shows Violation".

## Round 2 — 2026-08-24 — REJECTED
On-screen text. On slide 6, there seems to be a typo without the opening " for the Violation. It currently shows Violation".

Regenerated: 2026-08-25 (daily-reel-render) — covers rounds 1 and 2, which are
the same complaint recorded twice.
Cause: not a typo — the script was right all along. `render_v3.py` line 242
carries the headline as `'Every other breach is a violation, and "Violation" is
a legal call on its own.'`, and the SVG it emitted for scene 6 carried
`&quot;Violation&quot; is a legal`. Both quotes were present right up to the
raster step. ImageMagick 6's internal SVG reader lowers each `<text>` element
into an MVG `text x,y "…"` primitive whose payload is itself double-quoted, and
a double-quote sitting at the *start* of the character data collides with that
opening delimiter and is dropped. Quotes anywhere else in the string are
unaffected — which is why the same word, in quotes, renders correctly in the
body paragraph two lines below, and why nineteen earlier reels never hit this.
It needs a wrap to put a quote first, and scene 6's headline is the first that
ever has: at 66px the wrapper breaks after "and", so line 3 begins `"Violation"`.

One change, no copy touched:

- `render_v3.py` gained `_payload()`, used by `bold()` and `reg()`. When the
  escaped text begins with `&quot;` it wraps the payload in a `<tspan>`, giving
  the reader a child element to lower so the quote is no longer the first thing
  after the delimiter. Everything else emits byte-identical SVG to what has
  shipped, so the fix is a no-op on the back catalogue.
- Five alternatives were rendered side by side before picking this one:
  `&#34;` fails identically (the entity resolves before MVG is built), a
  leading zero-width space works but leaves an invisible character sitting in
  approved copy, and curly quotes work but swap the glyph. The `<tspan>`
  changes neither the characters nor the shapes. **No word of the approved
  script changed.**
- `tools/check_layout.py` now strips `<tspan>` wrappers before measuring, or it
  would count the tag names as glyphs.

Verified: 29.53s, layout 0 problems (scene 6 at max_y 1192 of 1310, max_x 990
of 990), longest sustained dull-orange run 0.20s, 15.1 / 15.2 / 15.3 / 15.6
byte-identical to `rules.json`. v1 archived as
`reel21-foul-infraction-violation.v1.mp4`.
