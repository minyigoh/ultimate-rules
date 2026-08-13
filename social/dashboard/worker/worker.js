/*
 * Content Desk sync proxy — Cloudflare Worker
 *
 * Single job: take a decision from the desk — a script approval, a content
 * approval, or a mark-as-posted — and commit it to the repo, atomically,
 * across:
 *   - content/calendar.md         the human-readable queue (Status and Posted)
 *   - content/review-state.json   structured state the desk reads back on load,
 *                                  so a decision made on one device shows up
 *                                  on another
 * and, when a rendered cut is sent back for a re-render, appends a round to:
 *   - content/<folder>/feedback.md
 *
 * The desk is a public page and can never hold a credential able to write to
 * the repo — this Worker is the only thing that does, via secrets set in the
 * Cloudflare dashboard (Settings -> Variables and Secrets), never in this
 * file and never sent to the desk:
 *
 *   GITHUB_TOKEN     fine-grained PAT scoped to Contents: read/write on
 *                    minyigoh/ultimate-rules only — nothing else
 *   DESK_PASSPHRASE  a shared passphrase the desk sends with every request,
 *                    since this endpoint is reachable by anyone with the URL
 *
 * See README.md in this folder for the deploy steps.
 */

const OWNER = 'minyigoh';
const REPO = 'ultimate-rules';
const BRANCH = 'main';
const API = 'https://api.github.com';

const CALENDAR_PATH = 'content/calendar.md';
const STATE_PATH = 'content/review-state.json';

function withCORS(resp) {
  // The passphrase is the real gate, not origin — allowing any origin keeps
  // local dev (file://, localhost) working without a second CORS config.
  resp.headers.set('Access-Control-Allow-Origin', '*');
  resp.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  resp.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return resp;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return withCORS(new Response(null, {status: 204}));
    if (request.method === 'GET') return withCORS(Response.json({ok: true, service: 'luf-content-desk-sync'}));
    if (request.method !== 'POST') return withCORS(new Response('POST only', {status: 405}));

    let body;
    try { body = await request.json(); }
    catch { return withCORS(new Response('Bad JSON body', {status: 400})); }

    if (!env.DESK_PASSPHRASE || body.passphrase !== env.DESK_PASSPHRASE) {
      return withCORS(new Response('Wrong passphrase', {status: 401}));
    }

    const {postId, postDate, postTitle, folder, track: trackName, status, note, tags, calendarLabel, postedDate} = body;
    if (!postId || !postDate || !postTitle || !trackName || !status || !calendarLabel) {
      return withCORS(new Response('Missing required field', {status: 400}));
    }
    if (trackName !== 'script' && trackName !== 'content' && trackName !== 'posted') {
      return withCORS(new Response('track must be "script", "content" or "posted"', {status: 400}));
    }

    try {
      const gh = ghClient(env.GITHUB_TOKEN);
      const writes = [];

      // 1. review-state.json — the structured file the desk reads back on load.
      const stateFile = await gh.getFile(STATE_PATH).catch(() => null);
      const state = stateFile ? JSON.parse(stateFile.text) : {};
      state[postId] = state[postId] || {};
      // The posted track carries a date where the review tracks carry a note
      // and tags; storing empty ones would just be noise the desk ignores.
      state[postId][trackName] = trackName === 'posted'
        ? {status, date: postedDate || null, updatedAt: new Date().toISOString()}
        : {status, note: note || '', tags: tags || [], updatedAt: new Date().toISOString()};
      writes.push({path: STATE_PATH, content: JSON.stringify(state, null, 2) + '\n'});

      // 2. calendar.md — patch just this one row's Status (and Posted, if set).
      const calFile = await gh.getFile(CALENDAR_PATH);
      writes.push({
        path: CALENDAR_PATH,
        content: patchCalendarRow(calFile.text, {
          date: postDate, title: postTitle, folder,
          statusLabel: calendarLabel, postedDate,
          clearPosted: trackName === 'posted'
        })
      });

      // 3. A content rejection also logs a feedback round, in the format
      // content/CONTENT_REVIEW.md documents.
      if (trackName === 'content' && status === 'rerender' && folder) {
        const fbPath = `content/${folder}/feedback.md`;
        const fbFile = await gh.getFile(fbPath).catch(() => null);
        const existing = fbFile ? fbFile.text : '';
        const round = (existing.match(/^## Round \d+/gm) || []).length + 1;
        // The desk sends its own calendar date; this Worker runs on UTC edge
        // nodes, so deriving it here would date a round to the wrong day for
        // any reviewer east of Greenwich. Fall back only if it's absent.
        const today = body.localDate || new Date().toISOString().slice(0, 10);
        const bodyText = [tags && tags.length ? tags.join(', ') + '.' : '', note || '']
          .filter(Boolean).join(' ') || 'Rejected — no detail given.';
        const block = `## Round ${round} — ${today} — REJECTED\n${bodyText}\n`;
        writes.push({path: fbPath, content: existing ? existing.trimEnd() + '\n\n' + block : block});
      }

      const commitSha = await gh.commitFiles(writes, `desk: ${postTitle} — ${trackName} -> ${status}`);
      return withCORS(Response.json({ok: true, commit: commitSha}));
    } catch (err) {
      return withCORS(new Response('Sync failed: ' + err.message, {status: 502}));
    }
  }
};

function patchCalendarRow(md, {date, title, folder, statusLabel, postedDate, clearPosted}) {
  const lines = md.split('\n');
  const row = findCalendarRow(lines, date, title, folder);
  // ['', date, post, type, status, posted, performance, '']
  const cells = row.cells;
  cells[4] = statusLabel;
  // An approval only ever fills the Posted column in passing, so it must not
  // blank it. Un-marking from the desk is the one case that has to.
  if (postedDate) cells[5] = postedDate;
  else if (clearPosted) cells[5] = '—';
  lines[row.i] = '| ' + cells.slice(1, 7).join(' | ') + ' |';
  return lines.join('\n');
}

/* Two posts can share a queue date — the launch day had a carousel and a reel
   both on 2026-08-06 — so the date alone does not identify a row. The Post
   column carries the title (the carousel prefixes its folder), which makes
   date + post the real key. Either half alone is accepted as a fallback when
   it is unambiguous, so a calendar hand-edited out of step with data.js (a
   post moved to a new date, or a title tidied up) still patches instead of
   failing. Beyond that, refuse to guess. */
function findCalendarRow(lines, date, title, folder) {
  const rows = [];
  lines.forEach((l, i) => {
    if (!l.startsWith('| ')) return;
    const cells = l.split('|').map(c => c.trim());
    // Skips the header and the |---| separator: only a queued row leads with a date.
    if (cells.length !== 8 || !/^\d{4}-\d{2}-\d{2}$/.test(cells[1])) return;
    rows.push({i, cells});
  });

  const identifies = cell => (!!folder && cell.includes(folder)) || (!!title && cell.includes(title));
  const byDate = rows.filter(r => r.cells[1] === date);
  const byPost = rows.filter(r => identifies(r.cells[2]));
  const both   = byDate.filter(r => byPost.includes(r));

  for (const candidates of [both, byPost, byDate]) {
    if (candidates.length === 1) return candidates[0];
  }
  throw new Error(
    `Could not identify a unique calendar row for "${title}" (${date}) — ` +
    `${both.length} matched on date and post, ${byPost.length} on post, ${byDate.length} on date`
  );
}

function ghClient(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    'User-Agent': 'luf-content-desk-worker',
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28'
  };

  async function api(path, opts = {}) {
    const res = await fetch(API + path, {...opts, headers: {...headers, ...(opts.headers || {})}});
    if (!res.ok) throw new Error(`GitHub ${path} -> ${res.status}: ${await res.text()}`);
    return res.status === 204 ? null : res.json();
  }

  return {
    async getFile(path) {
      const data = await api(`/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${BRANCH}`);
      return {sha: data.sha, text: decodeBase64(data.content)};
    },

    // Atomic multi-file commit via the Git Data API: blobs -> tree -> commit ->
    // move the branch ref. Avoids calendar.md and review-state.json ever
    // disagreeing because one write landed and the other didn't.
    async commitFiles(files, message) {
      const ref = await api(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
      const headSha = ref.object.sha;
      const headCommit = await api(`/repos/${OWNER}/${REPO}/git/commits/${headSha}`);

      const treeEntries = [];
      for (const f of files) {
        const blob = await api(`/repos/${OWNER}/${REPO}/git/blobs`, {
          method: 'POST',
          body: JSON.stringify({content: f.content, encoding: 'utf-8'})
        });
        treeEntries.push({path: f.path, mode: '100644', type: 'blob', sha: blob.sha});
      }

      const tree = await api(`/repos/${OWNER}/${REPO}/git/trees`, {
        method: 'POST',
        body: JSON.stringify({base_tree: headCommit.tree.sha, tree: treeEntries})
      });

      const commit = await api(`/repos/${OWNER}/${REPO}/git/commits`, {
        method: 'POST',
        body: JSON.stringify({message, tree: tree.sha, parents: [headSha]})
      });

      await api(`/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
        method: 'PATCH',
        body: JSON.stringify({sha: commit.sha, force: false})
      });

      return commit.sha;
    }
  };
}

function decodeBase64(b64) {
  const bin = atob(b64.replace(/\n/g, ''));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder('utf-8').decode(bytes);
}
