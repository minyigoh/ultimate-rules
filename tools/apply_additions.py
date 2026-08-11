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
it twice and the second run is a no-op. It only ever ADDS -- an existing
calendar row or review-state key is left exactly as the desk left it, because
the desk is the authority on anything it has already seen.

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


def apply_review(entries):
    """Add new post keys. Never modify a key the desk already owns."""
    if not entries:
        log("review-state: no entries queued")
        return 0

    with open(REVIEW, encoding="utf-8") as f:
        state = json.load(f)

    added = 0
    for post_id, entry in entries.items():
        if post_id in state:
            log("review-state: already present, leaving desk's copy - %s" % post_id)
            continue
        state[post_id] = entry
        added += 1
        log("review-state: + %s (script=%s)" % (
            post_id, entry.get("script", {}).get("status", "?")))

    if added and not DRY:
        with open(REVIEW, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2, ensure_ascii=False)
            f.write("\n")
    return added


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
    n_rev = apply_review(entries)

    if DRY:
        log("DRY RUN - no files written (%d calendar rows, %d review entries)"
            % (n_cal, n_rev))
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
    log("applied %d calendar row(s), %d review-state entr(ies); queue drained"
        % (n_cal, n_rev))


if __name__ == "__main__":
    main()
