# Learn Ultimate Frisbee

A beginner's guide to the rules of ultimate frisbee: every rule in plain English,
one short lesson a day, and a search bar that understands what new players
actually type ("how long can I hold it?", "stepped on the line", "got a d").

Built as a single self-contained page — no build step to view it, no network
calls, no tracking. Everything you learn is stored in your own browser.

## What's in it

- **Today's rule** — one lesson a day from a 75-lesson curriculum ordered by
  difficulty, with a quick-check question. Streak and progress persist locally.
  Miss a day and nothing is lost; you pick up where you were.
- **Sixty-second intro** — the whole sport in six cards, including a live
  stall-count demo so ten seconds is something you feel rather than read.
- **Common questions** — the moments that confuse everyone in their first games.
- **The full rulebook** — all 368 rules across 20 chapters, with the official
  WFDF annotations under the rules they explain.
- **Glossary** — all 40 defined terms.
- **Search** — over lessons, questions, rules and definitions at once, with
  beginner-phrasing synonyms, frequency weighting and keyboard navigation
  (`/` or `Ctrl/Cmd-K` to open).

## Layout

```
content/
  rules.json        parsed rule text, chapters, annotations, definitions
  lessons-1..3.json the daily curriculum (authored)
  extras.json       intro cards, common questions, search synonyms
src/
  template.html     the page: markup, styles, and all behaviour
  parse.py          regenerates content/rules.json from a urules.org dump
build.py            inlines the data into a single page -> docs/
social/
  brand-identity.md voice, palette, attribution rules for the social account
  dashboard/        the content desk (source) -> docs/desk/
docs/               the built site (this is what GitHub Pages serves)
docs/desk/          the built content desk
```

## Content desk

`social/dashboard/` is a private-ish dashboard for the social account: the
posting queue, each post's script and both captions, its media, and an approval
control for signing content off.

```bash
python social/dashboard/build_desk.py
```

That inlines `data.js` into the page, downscales the carousel PNGs to JPEG and
copies the reel MP4s, and writes `docs/desk/` (~3 MB). Open
`social/dashboard/index.html` directly to work on it locally — that copy reads
media straight out of `content/`.

Approvals and review notes are held in the browser's `localStorage`, never in
the build, so they stay on whichever device you reviewed from. **Export
decisions** prints them as a markdown table shaped like `content/calendar.md`,
which is how a decision becomes permanent — the desk deliberately can't write to
the repo itself.

Two things worth knowing before you rely on it:

- **A GitHub Pages site is public**, including from a private repo. Anything in
  `docs/desk/` — unposted scripts, captions, draft media — is readable by anyone
  with the link, and lands in git history. The page carries `noindex` so it
  shouldn't be searchable, but that's obscurity, not access control.
- `data.js` is maintained by hand against the files listed in its header. It
  doesn't parse `content/calendar.md`, so the two can drift.

## Building

Requires Python 3, no packages.

```bash
python build.py
```

`docs/index.html` is fully self-contained — open it directly, or serve `docs/`.
`build.py` fails the build if a lesson references a rule number that doesn't
exist, if two lessons share an id, or if a quiz's correct index is out of range.

To refresh the rule text against a newer edition, re-download
`https://urules.org/all.html`, run `src/parse.py` beside it, and copy the
resulting `rules.json` into `content/`.

## Hosting

`docs/` is a static site. On GitHub Pages, set **Settings → Pages → Source** to
*Deploy from a branch*, branch `main`, folder `/docs`.

The service worker only registers over HTTPS, so once the page has been opened
online it keeps working offline — which is the point, since pitches rarely have
signal. Bumping the build changes the cache version and clients pick it up.

## Credits and licence

The rule text and official annotations are the **WFDF Rules of Ultimate
2025–2028** by the [World Flying Disc Federation](https://rules.wfdf.sport),
used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), sourced
from [urules.org](https://urules.org/).

The plain-English lessons, common questions and quiz items here are written to
explain those rules and are **not** part of the official text. Where anything
here disagrees with the official rules, the official rules win.
