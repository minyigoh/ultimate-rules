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
posting queue, each post's script and both captions, its media, and the
approvals that move a post along.

### Two approvals, not one

The process of record is `content/CONTENT_REVIEW.md`; the desk is a view onto
it and uses its status vocabulary verbatim, so what the desk shows and what
`content/calendar.md` records are the same words.

Every post carries two independent review tracks, because approving the words
says nothing about whether the cut that came out of the render is any good.

```
1 Script ──approved──> 2 Render ──file exists──> 3 Content ──approved──> Ready ──> Posted
    ^                                                 │
    └────────── changes asked                         └── re-render asked ──> back to 2
```

- **Script approval** — hook, explanation, example, CTA. Approving is what puts
  a post into the render queue; nothing renders off an unapproved script.
- **Content approval** — the rendered reel or carousel. Approve it, or send it
  back with tagged feedback (pacing, on-screen text, rule citation, …) plus a
  note. A send-back returns the post to the render queue **without** touching
  the script approval.

Sending back a cut that has already been posted is allowed — the queue flags it
`alreadyPosted` so a run knows it's a reshoot rather than a first render.

### Two scheduled tasks feed it

Both are prompts of record, version-controlled beside the pipeline they drive:

- **`content/BATCH_DRAFT_TASK.md`** — drafts the next 7 lessons into
  `content/pending-review/` when the queue drops below three days of runway, so
  the pipeline doesn't stall waiting on copy. It drafts; it never approves.
- **`content/DAILY_RENDER_TASK.md`** — renders approved scripts into reels and
  carousels, then commits and pushes them. It renders; it never writes copy.

Neither can move a post through a gate — both gates are yours. A run with
nothing to do makes no git writes at all, so an idle run can't leave a stale
`.git/index.lock` behind and block the next one.

### Handing decisions back to the repo

The desk is a static page. It cannot write to this repo, and a scheduled task
cannot read your browser's `localStorage`. So the desk *produces* the artefacts
and you carry them across. **Export decisions** emits, in the shapes
`CONTENT_REVIEW.md` already defines:

1. the `content/calendar.md` table, with the Status column in that file's own
   vocabulary — it round-trips, so a clean desk reproduces the file byte for byte
2. a `content/<post>/feedback.md` block per rejected cut, in the documented
   `## Round N — DATE — REJECTED` format
3. a diff of what changed against the repo
4. optionally `render-queue.json`, a machine-readable work list — a convenience
   only; `calendar.md` and `feedback.md` remain authoritative

**On "can a re-render happen immediately?"** — not by itself. A daily cron runs
daily; marking a send-back *"regenerate on the next run"* sets
`priority: "next-run"`, which only means it sorts first when a run happens. To
actually get a same-day regeneration you need either a manually triggered run,
or a task that polls more often than once a day. The flag is there so that
whichever you choose, the intent is recorded.

```bash
python social/dashboard/build_desk.py
```

That inlines `data.js` into the page, downscales the carousel PNGs to JPEG and
copies the reel MP4s, and writes `docs/desk/` (~3 MB). Open
`social/dashboard/index.html` directly to work on it locally — that copy reads
media straight out of `content/`.

### Getting approvals into the repo

By default, approvals are held in the browser's `localStorage` and stay on
whichever device you reviewed from — approve on your phone and your laptop
won't know. **Export decisions** prints the calendar table and feedback blocks
for you to apply by hand.

To make that automatic, deploy the sync Worker in
[`social/dashboard/worker/`](social/dashboard/worker/README.md) and set
`SYNC_URL` in `social/dashboard/index.html`. Then every approve/reject — and
every *Mark as posted* — commits straight to `content/calendar.md` and
`content/review-state.json`, and the desk reads that state back on load, so a
decision made on your phone shows up on your PC. The 7 AM render task just
reads `calendar.md` as it always has.

The desk is a public page and can't hold a repo-write credential, which is the
whole reason the Worker exists — it holds the GitHub token, the desk only holds
a passphrase you set once per browser.

If a sync fails (offline, wrong passphrase, Worker not deployed), the decision
stays in `localStorage` and is retried automatically on the next page load —
nothing is lost, and the card shows `● not synced` until it lands.

*Mark as posted* is a third synced track alongside the two approval gates. It
carries a date rather than a note, and it writes both the Status and the Posted
column of `calendar.md`; un-marking clears that column again.

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
