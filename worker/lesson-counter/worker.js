/*
 * Shared lesson counter — Cloudflare Worker
 *
 * One number, shared by everyone who has ever opened the site: how many
 * lessons have been answered in total. The page reads it on load and adds one
 * the first time you answer a lesson's quick check.
 *
 *   GET  /   -> {"total": 12847}
 *   POST /   -> {"total": 12848}   body: {"lesson":"<lesson id>"}
 *
 * A Durable Object holds the count rather than KV, for two reasons: KV caps a
 * single key at roughly one write a second and reads can lag a minute behind,
 * which for a live counter means both lost increments and a number that looks
 * stuck. A Durable Object is one consistent actor — every increment is exact
 * and immediately visible.
 *
 * Nothing that identifies a visitor is stored. The lesson id in the body is
 * read and discarded; the IP address never leaves memory and is only used to
 * stop one browser from adding ten thousand. What lands in storage is a single
 * integer.
 *
 * See README.md in this folder for the deploy steps.
 */

/* the browser sends no custom headers and Content-Type stays text/plain, so
   every request is a simple CORS request and a +1 costs one round trip */
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...CORS }
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (request.method !== 'GET' && request.method !== 'POST') {
      return json({ error: 'GET or POST only' }, 405);
    }
    // a single named object: one counter, one actor, globally consistent
    const id = env.COUNTER.idFromName('lessons');
    return env.COUNTER.get(id).fetch(request);
  }
};

/* one increment per lesson per browser is the honest number, and the page
   already enforces that in localStorage. This is the backstop for someone
   holding down a request in a loop — generous enough that a real visitor
   working through a backlog of lessons never meets it. */
const LIMIT = 60;
const WINDOW_MS = 60 * 60 * 1000;

export class Counter {
  constructor(ctx) {
    this.ctx = ctx;
    this.total = 0;
    this.seen = new Map();   // ip -> {n, until}; memory only, never persisted
    // no request is served until the stored count is loaded
    ctx.blockConcurrencyWhile(async () => {
      this.total = (await ctx.storage.get('total')) || 0;
    });
  }

  allowed(ip) {
    if (!ip) return true;
    const now = Date.now();
    // the map only ever grows otherwise, and a Durable Object can live for days
    if (this.seen.size > 5000) {
      for (const [k, v] of this.seen) if (v.until < now) this.seen.delete(k);
    }
    const hit = this.seen.get(ip);
    if (!hit || hit.until < now) { this.seen.set(ip, { n: 1, until: now + WINDOW_MS }); return true; }
    if (hit.n >= LIMIT) return false;
    hit.n++;
    return true;
  }

  async fetch(request) {
    if (request.method === 'GET') return json({ total: this.total });

    // The body is read first and unconditionally. A Worker may not leave a
    // request stream unread once it has answered — returning early from the
    // rate-limit branch below without draining it kills the isolate. Reading
    // it also means a malformed body is rejected rather than counted; nothing
    // in it is kept either way.
    try {
      const raw = await request.text();
      if (raw) {
        const body = JSON.parse(raw);
        if (typeof body !== 'object' || body === null) return json({ error: 'bad body' }, 400);
      }
    } catch (e) {
      return json({ error: 'bad body' }, 400);
    }

    if (!this.allowed(request.headers.get('CF-Connecting-IP'))) {
      // not an error worth showing anyone: hand back the true number and
      // simply decline to move it
      return json({ total: this.total });
    }

    this.total++;
    await this.ctx.storage.put('total', this.total);
    return json({ total: this.total });
  }
}
