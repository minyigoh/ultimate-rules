#!/usr/bin/env python3
"""Merge the daily task's queued additions into calendar.md and review-state.json.

Why this exists
---------------
content/calendar.md and content/review-state.json are the only two files that
BOTH the daily task and the Cloudflare Worker write. The task runs in a sandbox
with no network: it reads an authoritative snapshot over web_fetch at the start
of its run, then writes files at the end. Every desk decision Min-Yi makes in
between lands on main first, so if the task rewrites those two files from its
own stale snapshot, the push conflicts by construction. That is exactly what
happened on 2026-08-11.

So the task no longer touches either file. It appends what it wants to
content/_pending_additions.json, and this script -- run by sync.bat AFTER the
pull, against the freshly merged tree -- folds those additions in. The task's
commit never contains calendar.md or review-state.json, so there is nothing to
conflict.

Idempotent by design: a calendar row is keyed on (date, post title) and a
review-state entry on its post id, both matching the Worker's own keying. Run
it twice and the second run is a no-op. An existing calendar row is left exactly
as the desk left it, because the desk is the authority on anything it has
already seen.

The one exception: the render flip (added 2026-08-12)
-----------------------------------------------------
Add-only was too strict for exactly one case. A post gets its review-state key
when its SCRIPT is drafted, so by the time the task renders it the key already
exists -- and the `content: awaiting-render -> in-review` flip had nowhere to
land. It was skipped every run and then lost when the queue drained. Since the
desk's `baseline()` reads review-state.json in preference to data.js, the post
kept showing "Not yet rendered" with its finished media sitting right below it,
and never entered the content-review queue. reel-8, reel-9 and carousel-post-2
were all stuck this way on 2026-08-12.

So this script now applies exactly two content-track transitions to an existing
key -- `awaiting-render -> in-review` and `rerender -> in-review` -- plus new
entries in `revisions`. Both transitions mean the same thing: a cut now exists,
go look at it. Neither is an approval, and that is enforced below rather than
left to convention:

  - the script track of an existing key is NEVER touched
  - `approved` and `rerender` are never writable as a content status
  - the `posted` track is never touched
  - a brand-new key carrying an `approved` status anywhere is refused outright,
    because a post that has never been seen cannot already have been approved

Everything else about an existing entry -- notes, tags, timestamps on tracks
this script did not change -- is left exactly as the desk wrote it.

Usage:  python tools/apply_additions.py [--dry-run]
Exit:   0 on success (including nothing to do), 1 on a malformed additions file.
"""

import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
ADDITIONS = os.path.join(REPO, "content", "_pending_additions.json")
CALENDAR = os.path.join(REPO, "content", "calendar.md")
REVIEW = os.path.join(REPO, "content", "review-state.json")

DRY = "--dry-run" in sys.argv

# A calendar row: | date | post | type | status | posted | performance |
ROW = re.compile(r"^\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*(.+?)\s*\|")

# The only content-track transitions this script will apply to a key the desk
# already owns. Both say "a cut exists now"; neither is a judgement on it.
RENDER_FLIP = {
    ("awaiting-render", "in-review"),   # first render of an approved script
    ("rerender", "in-review"),          # rebuild after a rejected cut
}

# Statuses this script must never write, on either track, ever. Approving is
# Min-Yi's, from the desk, via the Worker.
NEVER_WRITE = {"approved", "rerender", "rejected", "posted"}


def log(msg):
    print(msg)


def load_additions():
    if not os.path.exists(ADDITIONS):
        log("no content/_pending_additions.json - nothing to apply")
        return None
    try:
        with open(ADDITIONS, encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        log("FATAL: _pending_additions.json is not valid JSON: %s" % e)
        sys.exit(1)
    if not isinstance(data, dict):
        log("FATAL: _pending_additions.json must be a JSON object")
        sys.exit(1)
    return data


def apply_calendar(rows):
    """Insert rows into the markdown table, in date order, skipping duplicates."""
    if not rows:
        log("calendar: no rows queued")
        return 0

    with open(CALENDAR, encoding="utf-8") as f:
        lines = f.read().split("\n")

    # Locate the table body: contiguous rows starting with "| 20" (a date).
    idx = [i for i, ln in enumerate(lines) if ROW.match(ln)]
    if not idx:
        log("FATAL: no dated rows found in calendar.md - refusing to guess")
        sys.exit(1)
    first, last = idx[0], idx[-1]

    existing = set()
    for i in idx:
        m = ROW.match(lines[i])
        existing.add((m.group(1), m.group(2).strip()))

    body = lines[first:last + 1]
    added = 0
    for r in rows:
        date = r["date"]
        post = r["post"].strip()
        if (date, post) in existing:
            log("calendar: already present, skipping - %s | %s" % (date, post))
            continue
        line = "| %s | %s | %s | %s | %s | %s |" % (
            date, post, r.get("type", "Reel"), r.get("status", "Pending review"),
            r.get("posted", "—"), r.get("performance", "—"))
        # Insert after the last row whose date is <= this one, keeping date order.
        pos = len(body)
        for i, ln in enumerate(body):
            m = ROW.match(ln)
            if m and m.group(1) > date:
                pos = i
                break
        body.insert(pos, line)
        existing.add((date, post))
        added += 1
        log("calendar: + %s | %s [%s]" % (date, post, r.get("status", "Pending review")))

    if added and not DRY:
        out = lines[:first] + body + lines[last + 1:]
        with open(CALENDAR, "w", encoding="utf-8") as f:
            f.write("\n".join(out))
    return added


def merge_revisions(existing, incoming):
    """Append revision entries not already recorded, keeping newest last.

    Keyed on (v, file) -- the same cut re-queued by a retried sync must not
    produce a duplicate row in the desk's revision history.
    """
    if not incoming:
        return existing, 0
    out = list(existing or [])
    seen = {(r.get("v"), r.get("file")) for r in out}
    n = 0
    for r in incoming:
        key = (r.get("v"), r.get("file"))
        if key in seen:
            continue
        out.append(r)
        seen.add(key)
        n += 1
    return out, n


def merge_existing(post_id, current, entry):
    """Apply the render flip (and any new revisions) to a key the desk owns.

    Returns (changed, [messages]). Refuses anything that is not one of the two
    transitions in RENDER_FLIP, and never touches the script or posted tracks.
    """
    msgs = []
    changed = False

    incoming_content = entry.get("content") or {}
    want = incoming_content.get("status")
    have = (current.get("content") or {}).get("status")

    if want in NEVER_WRITE:
        msgs.append("refusing to write content=%s - only the desk sets that" % want)
    elif want and want == have:
        msgs.append("content already %s - nothing to do" % have)
    elif want and (have, want) in RENDER_FLIP:
        # Carry the incoming track wholesale: it is the task's own record of the
        # render, and the desk has written nothing here yet beyond the status.
        current["content"] = incoming_content
        changed = True
        msgs.append("content %s -> %s (render flip)" % (have, want))
    elif want:
        msgs.append("content %s -> %s is not an allowed transition - left alone"
                    % (have, want))

    revs, n_new = merge_revisions(current.get("revisions"), entry.get("revisions"))
    if n_new:
        current["revisions"] = revs
        changed = True
        msgs.append("+%d revision(s)" % n_new)

    # Anything else the task queued for an existing key is informational only.
    for track in ("script", "posted"):
        if track in entry:
            mine = entry[track].get("status")
            theirs = (current.get(track) or {}).get("status")
            if mine != theirs:
                msgs.append("ignoring queued %s=%s (desk says %s) - not this "
                            "script's to change" % (track, mine, theirs))

    return changed, msgs


def apply_review(entries):
    """Add new post keys, and apply the render flip to existing ones.

    See the module docstring for why this is not purely add-only any more.
    """
    if not entries:
        log("review-state: no entries queued")
        return 0, 0

    with open(REVIEW, encoding="utf-8") as f:
        state = json.load(f)

    added = updated = 0
    for post_id, entry in entries.items():
        if post_id in state:
            changed, msgs = merge_existing(post_id, state[post_id], entry)
            for m in msgs:
                log("review-state: %s - %s" % (post_id, m))
            if changed:
                updated += 1
            continue

        # A post the desk has never seen cannot already carry a decision.
        bad = [t for t in ("script", "content", "posted")
               if (entry.get(t) or {}).get("status") in NEVER_WRITE]
        if bad:
            log("review-state: REFUSED to add %s - new key carries %s on %s; a "
                "post that has never been reviewed cannot already be decided"
                % (post_id, NEVER_WRITE & {(entry.get(t) or {}).get("status")
                                           for t in bad}, ", ".join(bad)))
            continue

        state[post_id] = entry
        added += 1
        log("review-state: + %s (script=%s)" % (
            post_id, entry.get("script", {}).get("status", "?")))

    if (added or updated) and not DRY:
        with open(REVIEW, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2, ensure_ascii=False)
            f.write("\n")
    return added, updated


def main():
    data = load_additions()
    if data is None:
        return

    rows = data.get("calendar_rows", [])
    entries = data.get("review_state", {})
    if not rows and not entries:
        log("additions file is empty - nothing to apply")
        return

    log("applying additions queued by %s at %s" % (
        data.get("by", "?"), data.get("generated", "?")))
    n_cal = apply_calendar(rows)
    n_rev, n_upd = apply_review(entries)

    if DRY:
        log("DRY RUN - no files written (%d calendar rows, %d new review "
            "entries, %d updated)" % (n_cal, n_rev, n_upd))
        return

    # Drain the queue so a re-run cannot double-apply and the diff stays honest.
    # Keep _readme -- it is the only place the contract is written down for
    # whoever opens this file next.
    drained = {"calendar_rows": [], "review_state": {},
               "generated": None, "by": None}
    if "_readme" in data:
        drained = {"_readme": data["_readme"], **drained}
    with open(ADDITIONS, "w", encoding="utf-8") as f:
        json.dump(drained, f, indent=2, ensure_ascii=False)
        f.write("\n")
    log("applied %d calendar row(s), %d new review-state entr(ies), "
        "%d updated; queue drained" % (n_cal, n_rev, n_upd))


if __name__ == "__main__":
    main()
