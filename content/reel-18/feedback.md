## Round 1 — 2026-08-22 — REJECTED
On-screen text. The WFDF reference is blocking the content. Please check
Regenerated: 2026-08-22 (daily-reel-render)
Cause: collision, not a colour or timing problem. The "WFDF Rules of Ultimate
2025–2028" citation sits at a fixed y (H-200 = 1150). On scene 2 the body
paragraph wrapped to six lines at 36px, putting its last baseline at 1140 —
nine pixels above a citation whose caps start at 1131 — so the two overlapped
by 17px of ink. Every element was still inside the card, which is why the
margin check passed and v1 reported "clean at 1192 of 1310px".

Two changes, no copy touched:

- `render_v3.py` gained `fit_body()`, the body-paragraph twin of
  `fit_kicker()`. It picks the largest integer size ≤ 36px whose wrapped block
  clears the citation (last baseline ≤ 1090, the tightest that has shipped
  clean, on reels 12 and 16), scaling line height with it, floor 80% (29px),
  `SystemExit` below that rather than a quiet collision. Scene 2 now renders at
  31px over five lines and scene 4 at 35px over six; scene 6 is untouched at
  36px. **No word of the approved script changed.**
- `tools/check_layout.py` now measures collisions as well as margins, on real
  ink boxes. Re-run over reels 8–17 it is silent on every approved cut except
  reel-15 scene 2, which shipped with the same defect at a smaller overlap
  (9.7px vertical, 218px horizontal) — worth a look if it bothers you, but it
  is already posted.

Verified: 29.50s, longest sustained dull-orange run 0.20s, layout 0 problems,
all four rule texts byte-identical to `rules.json`. v1 archived as
`reel18-straddle-and-wrapping.v1.mp4`.
