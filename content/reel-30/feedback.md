## Round 1 — 2026-09-03 — REJECTED
Rejected — no detail given.

## Round 2 — 2026-09-03 — REJECTED
We can box out in ultimate using body. Just not using arms

## Round 3 — 2026-09-03 — REJECTED
On-screen text, Wrong take. We can box out in ultimate using body. Just not using arms

---

## Response — 2026-09-04 (daily-reel-render), covering rounds 1–3

Rounds 1, 2 and 3 are one complaint captured three times — a bare rejection,
then the sentence, then the sentence with the tags typed into the body. The
Worker commits as you type. Addressed once.

Routed to the **script** track, not regenerated. This asks for different
*words*: scene 6's headline says "You cannot box out." and scene 8's field tip
calls boxing out "a habit from another sport". Copy changes go back through the
first gate before anything is rendered. Redraft logged in `script-feedback.md`;
previous copy archived as `script-and-caption.v1.md`.

The note is right on the rule, not just on the practice. 12.9 bans *extended*
arms or legs used to obstruct, and its annotation says arms and legs are not
"extended" during normal running and jumping. 12.5 — already carded on scene 3
of this same reel — entitles a player to occupy any unoccupied position. So
holding a spot with your body is legal; v1's headline was broader than any rule
on screen, and broader than its own slide body.

These rounds stay **open**. They close on the rebuild, once the redraft is
approved on the script gate. The rebuild will change scene 6's headline and
body and scene 8's headline and body; no rules card, rule number or rule text
moves, so scenes 1–5, 7 and 9 will re-render byte-identical. The current cut
will be archived as `reel30-blocking-fouls.v1.mp4` and the new cut keeps the
unsuffixed filename — the title is unchanged.

**Regenerated: 2026-09-04 (daily-reel-render)** — covering rounds 1–3, which
were the same note captured three times.

Cause: the copy asserted a limit broader than any rule on screen. v1's scene 6
headline read "You cannot box out." while its own body two lines below said
"Position is where your body is, not how far you can reach", and the scene 8
field tip framed boxing out as a transplanted basketball habit. 12.9 bans
*extended arms or legs* used to obstruct — its annotation adds that arms and
legs are not "extended" during normal running and jumping — and 12.5, carded on
scene 3 of this same reel, entitles a player to occupy any unoccupied position.
Holding a spot with your body is legal.

What the rebuild changed, all of it copy the account writes itself — no rules
card, rule number or rule text moved:

- Scene 6 headline: "You cannot box out." → "You can box out — just not with
  your arms."
- Scene 6 body, rewritten to name the permission before the limit: "Position is
  where your body is, not how far you can reach. Standing your ground between an
  opponent and the disc is legal — 12.5 already said the space is yours. What
  12.9 bans is using extended arms or legs to obstruct them. Normal running and
  jumping is not extended; an arm across someone's chest is."
- Scene 8 headline: "Boxing out is a habit from another sport." → "Box out with
  your body, not your arms."
- Scene 8 body: "Sealing someone behind an extended arm is basketball defence,
  and 12.9 names it. Holding a legal position with your body is not the same
  thing and is not a foul. Keep your arms in, take the ground with your feet,
  and there is nothing to argue about afterwards."

**Proved rather than asserted:** the v1 copy was re-rendered in parallel and the
two frame sets compared pixel by pixel. Of 34 states, exactly 5 differ — the
three on scene 6 and the two on scene 8. Scenes 1–5, 7 and 9 are
pixel-identical to the cut you rejected. (A byte comparison shows all 34
differing; that is PNG header timestamps, not image content.)

Built on `content/reel-31/render_v3.py`, which carries the 2026-09-02 widening
of `_payload()` — the closing-delimiter case found on carousel-post-5. reel-30's
own copy still had the startswith-only version. It is a no-op here: no line in
this reel ends with a double quote, which the pixel comparison above confirms.

Measured: nine scenes, exact CFR via `encode.py`, 29.50s — identical to v1, as
expected, since no line count moved. Layout check 0 problems with no collisions;
scene 6's kicker still auto-fits to 32px, its body still 33px, both main scenes
at max_y 1192 of 1310 and the field tip at 1062. Longest sustained dull-orange
run 0.20s against a 0.45s threshold. 12.5, 17.4.1 and 12.9 re-verified
character-for-character against `rules.json`.

Like reel-28 v2, this cut does not improve on v1 by any *measurement* — v1 was
clean on all of them. The defect was the words, and the words are what changed.
v1 archived as `reel30-blocking-fouls.v1.mp4`; the new cut keeps the unsuffixed
filename, as the title is unchanged.

