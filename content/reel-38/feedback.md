## Round 1 — 2026-09-11 — REJECTED (cut v1)
On-screen text. The header text in orange doesn’t have proper spacing e.g. #1WHOTOUCHESITIN should read #1 WHO TOUCHES IT IN

Regenerated: 2026-09-12 (win_render on Windows, sandbox down a fifth day)
Cause: tracked() joined letters with a plain space, so a word boundary was a collapsible run of whitespace and rendered identically to a letter boundary. Joined with U+00A0 instead. Copy unchanged; cut v1 kept as reel38-the-check.v1.mp4.
