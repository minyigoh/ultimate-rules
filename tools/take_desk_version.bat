@echo off
REM ---------------------------------------------------------------------------
REM Resolve a rebase conflict in content/review-state.json (or calendar.md) by
REM taking the Content Desk's version, then hand off to finish_rebase.bat.
REM
REM WHY THIS EXISTS: the resolution rule is "anything that already existed takes
REM the remote/desk version", and the git command for that is inverted in a way
REM that reliably catches people out --
REM
REM   During "git pull --rebase", git checks out origin/main FIRST and replays
REM   your local commits on top of it. So while a rebase is in progress:
REM       --ours   = origin/main  = what the Content Desk decided   <-- want this
REM       --theirs = the local commit currently being replayed
REM   That is the opposite of a normal merge. Getting it backwards silently
REM   throws away your approvals, so this is a script rather than something to
REM   type from memory.
REM
REM   Verified on 2026-08-13: --ours had reel-8 and carousel-post-2 at posted,
REM   --theirs still had them at in-review. Taking --theirs would have rolled
REM   back two posts that had already gone out.
REM
REM   Nothing is lost by discarding the local side: everything real in it (the
REM   reel-8/9/10 and carousel-post-2 revision histories, the reel-9 and reel-10
REM   render flips) is re-queued in content/_pending_additions.json, and
REM   apply_additions.py replays it onto the merged tree in the next step.
REM
REM SAFETY: only review-state.json and calendar.md are ever resolved this way --
REM the two files the Desk owns. Anything else conflicting means this run's own
REM new work is involved, where the LOCAL side must win instead. The script
REM stops rather than guess. Send Claude the log if that happens.
REM
REM Run it by double-clicking. Logs to tools\_last_resolve.log.
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion
set REPO=%~dp0..
set LOG=%~dp0_last_resolve.log

set GIT=git
where git >nul 2>&1 || set GIT="C:\Program Files\Git\cmd\git.exe"

cd /d "%REPO%"
set STOP=0

> "%LOG%" 2>&1 (
  echo ===== 1. clear stale locks =====
  REM HEAD.lock added 2026-09-05 -- see the note in sync.bat step 1.
  if exist ".git\HEAD.lock"  del /f /q ".git\HEAD.lock"  && echo cleared HEAD.lock
  if exist ".git\index.lock" del /f /q ".git\index.lock" && echo cleared index.lock
  echo.

  echo ===== 2. is a rebase actually in progress =====
  set REBASING=0
  if exist ".git\rebase-merge" set REBASING=1
  if exist ".git\rebase-apply" set REBASING=1
  echo rebase in progress: !REBASING!
  if "!REBASING!"=="0" (
    echo.
    echo Nothing to resolve - this repo is not mid-rebase.
    echo If sync.bat reported a conflict, it has already been dealt with;
    echo if it reported PUSH FAILED instead, just run sync.bat again.
    set STOP=1
  )
  echo.

  if "!STOP!"=="0" (
    echo ===== 3. conflicted files =====
    %GIT% diff --name-only --diff-filter=U
    echo.

    echo ===== 4. refuse anything this script does not own =====
    for /f "delims=" %%F in ('%GIT% diff --name-only --diff-filter=U') do (
      if /i not "%%F"=="content/review-state.json" if /i not "%%F"=="content/calendar.md" (
        echo UNEXPECTED CONFLICT: %%F
        set STOP=1
      )
    )
    if "!STOP!"=="1" (
      echo.
      echo Stopping without changing anything. This script only resolves the two
      echo files the Desk owns. The file above is one where the local version may
      echo be the correct one, and that is a judgement call. Send Claude this log.
    ) else (
      echo only Desk-owned files conflicted - safe to proceed
    )
    echo.
  )

  if "!STOP!"=="0" (
    echo ===== 5. take the Desk version =====
    for /f "delims=" %%F in ('%GIT% diff --name-only --diff-filter=U') do (
      echo taking origin/main version of %%F
      %GIT% checkout --ours -- "%%F"
      echo   checkout rc=!ERRORLEVEL!
      %GIT% add "%%F"
      echo   add rc=!ERRORLEVEL!
    )
    echo.

    echo ===== 6. stage other tracked edits so --continue is not refused =====
    REM "git rebase --continue" aborts if ANY tracked file is modified but
    REM unstaged, even one unrelated to the conflict. On 2026-08-13 that was
    REM tools\sync.bat. "-u" only ever stages files git already tracks, so it
    REM cannot sweep in the ~1,800 untracked v4/ render frames.
    %GIT% add -u
    echo add -u rc=!ERRORLEVEL!
    %GIT% diff --cached --stat
    echo.

    echo ===== 7. unmerged paths remaining - should be none =====
    %GIT% diff --name-only --diff-filter=U
    echo.

    echo ===== 8. no conflict markers left behind =====
    findstr /s /m /c:"<<<<<<<" "content\*.md" "content\*.json" "social\dashboard\data.js"
    echo (no filenames listed above = clean^)
    echo.

    echo ===== 9. next step =====
    echo Resolved. Now double-click tools\finish_rebase.bat, then open
    echo tools\_last_finish.log and confirm "push rc=0".
  )
  echo ===== DONE =====
)

endlocal
goto :eof
