# Lesson counter Worker

The counter on the site — *"lessons answered on this page, by everyone who has
used it"* — is one integer held in a Cloudflare Durable Object. This is the
whole backend.

```
GET  /   ->  {"total": 12847}
POST /   ->  {"total": 12848}      body: {"lesson":"stall-count-basics"}
```

Until this is deployed and its URL is set in the page, the counter band never
appears and the site makes no network calls at all — exactly as it behaved
before the counter existed.

## Deploy

Needs Node and a Cloudflare account. Durable Objects work on the free Workers
plan as long as the class is SQLite-backed, which is what `wrangler.toml`
declares.

```bash
npx wrangler deploy
```

from this folder. The first deploy prints the URL, of the form
`https://luf-lesson-counter.<your-subdomain>.workers.dev`.

Then set it in [`src/template.html`](../../src/template.html) — search for
`COUNTER_URL` — and rebuild:

```bash
python build.py
```

Check it end to end before pushing:

```bash
curl https://luf-lesson-counter.<your-subdomain>.workers.dev
```

## What it stores

One number. That is the entire persisted state.

The lesson id in the POST body is parsed only so that a malformed request is
rejected instead of counted, then discarded. The visitor's IP address is read
from `CF-Connecting-IP`, kept in memory to cap one address at 60 increments an
hour, and never written to storage. There are no cookies, no identifiers, and
nothing to correlate.

Over the limit, the Worker returns the true total and quietly declines to move
it, rather than returning an error — a visitor who hits it has done nothing
they need to be told about.

## Why a Durable Object and not KV

A single KV key takes about one write a second and reads can serve a value up
to a minute stale. For a counter that means dropped increments and a number
that looks frozen right after you added to it. A Durable Object is a single
consistent actor: every increment is exact, and the next reader sees it.

## Honesty of the number

The page adds one the first time you answer a given lesson, remembering which
ones it has already counted in `localStorage`. Clear your browser storage and
your own lessons can be counted again; the rate limit is what stops that being
interesting to anyone. It is a scoreboard, not an analytics figure — treat it
as the former.
