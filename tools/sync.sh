#!/bin/sh
# POSIX sibling of tools/sync.bat, for builds that run somewhere other than
# Min-Yi's Windows machine (the cloud render routine).
#
# Same nine steps, same order, same staging patterns, and the same rule that
# made the batch file what it is: check every return code. On 2026-08-11 a pull
# died with rc=128, nothing checked it, the run sailed on and pushed into a
# remote it had never merged. Every step below reports its rc and the script
# stops rather than pushing into a tree it does not understand.
#
# The ordering is load-bearing and is explained in DAILY_RENDER_TASK.md Step 8:
# stage and commit first, THEN pull, THEN apply the queued additions on top of
# the merged tree, THEN commit those, THEN push. The commit this run makes
# contains neither calendar.md nor review-state.json, so the pull cannot
# conflict on the two files the desk also writes.
set -u

cd "$(dirname "$0")/.." || exit 1
LOG="tools/_last_sync.log"
: > "$LOG"
say() { printf '%s\n' "$*" | tee -a "$LOG"; }

say "===== 1. clear stale locks ====="
for lock in .git/HEAD.lock .git/ORIG_HEAD.lock .git/index.lock .git/refs/heads/main.lock; do
    [ -e "$lock" ] && rm -f "$lock" && say "cleared $(basename "$lock")"
done

# A fresh clone can land detached at refs/heads/main, which commits fine and
# then pushes nothing. Get onto the branch before anything else.
branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo HEAD)
if [ "$branch" != "main" ]; then
    say "HEAD was at '$branch'; checking out main"
    git checkout -B main --track origin/main >>"$LOG" 2>&1 || git checkout main >>"$LOG" 2>&1
fi
say ""

say "===== 2. rebuild desk ====="
python3 social/dashboard/build_desk.py >>"$LOG" 2>&1
say "build_desk rc=$?"
say ""

say "===== 3. stage explicit paths only ====="
# One pattern per add, exactly as in sync.bat: a pathspec matching nothing is a
# fatal error that would otherwise take every later pattern on the same line
# down with it. Here each is independent and a miss is reported, not fatal.
add() {
    if git add "$@" 2>>"$LOG"; then :; else say "  (no match: $*)"; fi
}
add "content/*.md" content/review-state.json content/_pending_additions.json social/dashboard/data.js
add "content/lessons-*.json"
add "content/reel-*/script-and-caption*.md"
add "content/reel-*/*.mp4"
add "content/reel-*/*.py"
add "content/reel-*/feedback.md"
add "content/reel-*/script-feedback.md"
add "content/carousel-post-*/script-and-caption*.md"
add "content/carousel-post-*/caption.md"
add "content/carousel-post-*/*.png"
add "content/carousel-post-*/*.svg"
add "content/carousel-post-*/*.py"
add "content/carousel-post-*/script-feedback.md"
add docs/desk tools/sync.bat tools/sync.sh tools/finish_rebase.bat tools/apply_additions.py .gitignore
add "tools/*.py"
add "tools/*.md"
say ""

say "===== 4. commit ====="
COMMITTED=0
if git diff --cached --quiet; then
    say "nothing staged - skipping commit"
else
    if [ -f _commit_msg.txt ]; then
        git commit -F _commit_msg.txt >>"$LOG" 2>&1
    else
        git commit -m "content pipeline sync" >>"$LOG" 2>&1
    fi
    rc=$?
    say "commit rc=$rc"
    [ "$rc" -eq 0 ] && COMMITTED=1
fi
say ""

say "===== 5. pull --rebase ====="
git pull --rebase origin main >>"$LOG" 2>&1
rc=$?
say "pull rc=$rc"
if [ "$rc" -ne 0 ]; then
    say ""
    say "PULL FAILED - stopping before the push."
    say "The queue has NOT been drained, so nothing is lost. Resolve by hand:"
    say "anything that already existed takes the remote version, anything this"
    say "run newly created stays local. Then re-run this script."
    say "===== ABORTED ====="
    exit 1
fi
say ""

say "===== 6. apply queued additions ====="
python3 tools/apply_additions.py >>"$LOG" 2>&1
rc=$?
say "apply_additions rc=$rc"
if [ "$rc" -ne 0 ]; then
    say "apply_additions failed - stopping before the push."
    say "===== ABORTED ====="
    exit 1
fi
say ""

say "===== 7. commit the additions ====="
git add content/review-state.json content/calendar.md content/_pending_additions.json \
        content/_pending_additions.applied.json 2>>"$LOG"
if git diff --cached --quiet; then
    say "no additions to commit"
else
    git commit -m "apply queued calendar and review-state additions" >>"$LOG" 2>&1
    say "additions commit rc=$?"
fi
say ""

say "===== 8. push ====="
git push origin main >>"$LOG" 2>&1
rc=$?
say "push rc=$rc"
if [ "$rc" -ne 0 ]; then
    say ""
    say "PUSH FAILED - nothing reached GitHub or the desk."
    say "The queue was drained in step 6 onto a commit that cannot land."
    say "Re-arm it with tools/rearm_queue.bat (or restore"
    say "content/_pending_additions.json from its .applied.json copy) before retrying."
    say "===== ABORTED ====="
    exit 1
fi
say ""

say "===== 9. final state ====="
git log --oneline -3 | tee -a "$LOG"
git status -sb | tee -a "$LOG"
[ "$COMMITTED" -eq 1 ] && [ -f _commit_msg.txt ] && rm -f _commit_msg.txt
say ""
say "SYNC RESULT: OK - main is pushed and the desk is current."
say "===== DONE ====="
