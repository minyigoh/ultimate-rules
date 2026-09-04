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

  - the script track's STATUS of an existing key is NEVER touched
  - `approved` and `rerender` are never writable as a content status
  - the `posted` track is never touched
  - a brand-new key carrying an `approved` status anywhere is refused outright,
    because a post that has never been seen cannot already have been approved

The second exception: script versions and the render gate (added 2026-09-04)
---------------------------------------------------------------------------
The task must never write an approval, and it doesn't. But it also had no way
to say "these are different words now", and that gap is what broke on
2026-09-04. reel-32's script was approved at 07:23 against v1, the task
redrafted it at 07:26, and rendered from the redraft at 07:44 -- while the desk
went on showing "Script approved" for words nobody had read. The approval never
moved because nothing could move it.

So the task now writes two more things on an existing key, neither of which is
a status:

  - `scriptRev`, an integer it bumps every time it redrafts
  - `scriptRevisions`, the same shape as `revisions` but for drafts

Bumping a version can only ever WITHDRAW trust -- the desk treats a decision
stamped below the current rev as stale and asks for it again -- so this is safe
for the task to write in a way that writing a status never is.

And the gate goes the other way too. A render entry must declare
`builtFromScriptRev`, and the flip to `in-review` is refused unless that matches
the version the desk actually approved. A cut built from unapproved words does
not reach the content gate at all.

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
# Carbon copy of whatever was last drained, so a rejected push is recoverable.
# See the "Draining is not the end of the story" note above main().
APPLIED = os.path.join(REPO, "content", "_pending_additions.applied.json")
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


def approved_script_rev(current):
    """The script version the desk actually signed off, or None if unapproved.

    Mirrors the desk's own `revOf()`: a decision written before versions were
    stamped carries no `rev` and is read as judging whatever is current, because
    nothing else can be inferred and thirty already-shipped posts must not all
    reopen. Every decision made after 2026-09-04 carries an explicit rev.
    """
    s = current.get("script") or {}
    if s.get("status") != "approved":
        return None
    rev = s.get("rev")
    return rev if isinstance(rev, int) else current.get("scriptRev", 1)


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

    # Read the approved version BEFORE any bump below lands. A rev-less approval
    # falls back to the current scriptRev, so reading it after the bump would
    # quietly re-point an old approval at the new words -- which is the precise
    # thing this gate exists to catch. The approval on file was made against the
    # state as it stood when this run started.
    ok_rev = approved_script_rev(current)

    # Script VERSION (never status). Bumping it withdraws an approval stamped
    # against the old words; it can never grant one.
    inc_rev = entry.get("scriptRev")
    if isinstance(inc_rev, int):
        cur_rev = current.get("scriptRev", 1)
        if inc_rev > cur_rev:
            current["scriptRev"] = inc_rev
            changed = True
            msgs.append("scriptRev %s -> %s (redraft; any approval below v%s is "
                        "now stale on the desk)" % (cur_rev, inc_rev, inc_rev))
        elif inc_rev < cur_rev:
            msgs.append("refusing scriptRev %s - already at v%s, versions only go up"
                        % (inc_rev, cur_rev))

    sdrafts, n_drafts = merge_revisions(current.get("scriptRevisions"),
                                        entry.get("scriptRevisions"))
    if n_drafts:
        current["scriptRevisions"] = sdrafts
        changed = True
        msgs.append("+%d script draft(s)" % n_drafts)

    incoming_content = entry.get("content") or {}
    want = incoming_content.get("status")
    have = (current.get("content") or {}).get("status")

    # The render gate. A cut built from words the desk never approved must not
    # reach the content track -- that is the reel-32 breach, and refusing here
    # is the only place it can be caught, since the task cannot be trusted to
    # police itself and the desk sees the flip only after it has landed.
    built = entry.get("builtFromScriptRev")
    gate_msg = None
    if want == "in-review":
        if ok_rev is None:
            gate_msg = ("REFUSING the render flip - script is %s, not approved. A "
                        "cut whose words were never signed off does not reach the "
                        "content gate." % ((current.get("script") or {}).get("status")))
        elif built is None:
            msgs.append("no builtFromScriptRev declared - allowed against approved "
                        "script v%s, but the task should be declaring it "
                        "(see content/DAILY_RENDER_TASK.md)" % ok_rev)
        elif built != ok_rev:
            gate_msg = ("REFUSING the render flip - built from script v%s but the "
                        "desk approved v%s. Re-approve on the desk, then re-render."
                        % (built, ok_rev))

    if gate_msg:
        msgs.append(gate_msg)
    elif want in NEVER_WRITE:
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
    # `script` here means its STATUS: the version fields above are separate and
    # deliberately writable.
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


# Draining is not the end of the story
# ------------------------------------
# This script runs AFTER the pull and BEFORE the push, and it writes
# review-state.json. So between it finishing and the push landing there is a
# window in which the Worker can commit a desk decision and make the push
# non-fast-forward. When that happens the operator is left holding a local
# commit that contains review-state.json -- the one file that conflicts with
# the desk by construction -- and a queue that has already been drained.
#
# That is exactly what happened on 2026-09-01: the push was rejected because
# two script approvals landed at 13:40Z, and the reel-29/reel-30 render flips
# had to be reconstructed by hand from the run's own report before sync could
# be retried. Nothing was lost that time only because the report happened to
# still be on screen.
#
# So the drained payload is copied to _pending_additions.applied.json rather
# than simply deleted. tools\rearm_queue.bat copies it back. Re-applying is a
# no-op by design (an already-flipped track logs "nothing to do"), so re-arming
# after a rejected push is always safe, and re-arming after a SUCCESSFUL push
# is merely pointless rather than harmful.
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

    # Carbon copy FIRST, so a crash between the two writes loses nothing.
    with open(APPLIED, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    with open(ADDITIONS, "w", encoding="utf-8") as f:
        json.dump(drained, f, indent=2, ensure_ascii=False)
        f.write("\n")
    log("applied %d calendar row(s), %d new review-state entr(ies), "
        "%d updated; queue drained" % (n_cal, n_rev, n_upd))
    log("drained copy kept at content/_pending_additions.applied.json - "
        "if the push is rejected, run tools\\rearm_queue.bat before retrying")


if __name__ == "__main__":
    main()
