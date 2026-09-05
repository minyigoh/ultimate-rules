@echo off
REM ---------------------------------------------------------------------------
REM Recover from a sync.bat run that died at the COMMIT step on a stale
REM HEAD.lock, after step 6 had already drained the additions queue.
REM
REM WHEN YOU NEED THIS: tools\_last_sync.log shows
REM
REM     ===== 4. commit =====
REM     fatal: cannot lock ref 'HEAD': Unable to create '...HEAD.lock'
REM     commit rc=128
REM     ===== 5. pull --rebase =====
REM     error: cannot pull with rebase: Your index contains uncommitted changes.
REM
REM and then step 6 cheerfully reports "queue drained". That combination is
REM NOT the rejected-push case, so rearm_queue.bat's advice at the bottom of
REM the sync log is the wrong recovery to reach for first -- run this instead.
REM
REM What went wrong (2026-09-04/05): git takes .git\HEAD.lock for any update to
REM HEAD. An interrupted git process left a zero-byte one behind. sync.bat's
REM step 1 cleared ORIG_HEAD.lock, index.lock and main.lock but not HEAD.lock,
REM so every subsequent run staged fine and then failed to commit. That is now
REM fixed at all four lock-clearing sites, so this should be a one-off -- but
REM the mess it leaves still has to be cleaned up by hand once.
REM
REM Why the mess needs cleaning rather than just re-running sync.bat: step 6
REM ran even though the commit failed, so calendar.md and review-state.json are
REM sitting STAGED with the additions already folded in. Re-running sync.bat on
REM top of that would commit both files, and those two are the only files the
REM Worker also writes -- a commit containing them conflicts with the desk by
REM construction, which is the exact ordering problem the queue exists to
REM avoid. So: put those two files back to HEAD, re-arm the queue from the
REM carbon copy, and let sync.bat apply them AFTER its pull, as designed.
REM
REM Nothing is lost. content\_pending_additions.applied.json holds the drained
REM batch verbatim, and re-applying is a no-op by design.
REM
REM NO "goto" INSIDE THE REDIRECTION BLOCK -- a label ends the block and the
REM redirection dies with it. Use a flag, same as rearm_queue.bat.
REM
REM Run it by double-clicking. Logs to tools\_last_unstick_head.log.
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion
set REPO=%~dp0..
set LOG=%~dp0_last_unstick_head.log

set GIT=git
where git >nul 2>&1 || set GIT="C:\Program Files\Git\cmd\git.exe"
set PY=python
where python >nul 2>&1 || set PY=py

cd /d "%REPO%"

set OK=1

REM A rebase in progress is a different problem with a different script.
if exist ".git\rebase-merge" goto :midrebase
if exist ".git\rebase-apply" goto :midrebase

> "%LOG%" 2>&1 (
  echo ===== 1. clear the stale lock =====
  if exist ".git\HEAD.lock" (
    del /f /q ".git\HEAD.lock" && echo cleared HEAD.lock
  ) else (
    echo no HEAD.lock present - it may already have been cleared
  )
  if exist ".git\ORIG_HEAD.lock" del /f /q ".git\ORIG_HEAD.lock" && echo cleared ORIG_HEAD.lock
  if exist ".git\index.lock"     del /f /q ".git\index.lock"     && echo cleared index.lock
  if exist ".git\refs\heads\main.lock" del /f /q ".git\refs\heads\main.lock" && echo cleared main.lock
  echo.

  echo ===== 2. state before =====
  %GIT% log --oneline -3
  %GIT% status -sb
  echo.

  echo ===== 3. refuse if a commit is genuinely in flight =====
  REM If HEAD.lock is gone AND the two shared files are clean, there is
  REM nothing half-applied and this script has no work to do.
  %GIT% diff --cached --name-only -- content/calendar.md content/review-state.json > "%TEMP%\_shared.txt"
  for %%A in ("%TEMP%\_shared.txt") do set SZ=%%~zA
  if "!SZ!"=="0" (
    echo neither calendar.md nor review-state.json is staged.
    echo nothing half-applied - skipping the restore, just run sync.bat.
    set OK=0
  ) else (
    echo staged shared files that must go back to HEAD:
    type "%TEMP%\_shared.txt"
  )
  echo.

  echo ===== 4. put the two shared files back to HEAD =====
  if "!OK!"=="1" (
    %GIT% restore --staged --worktree content/calendar.md content/review-state.json
    set RC=!ERRORLEVEL!
    echo restore rc=!RC!
    if !RC! NEQ 0 (
      echo RESTORE FAILED - stopping rather than guessing.
      set OK=0
    ) else (
      echo calendar.md and review-state.json are back at their committed state
    )
  ) else (
    echo skipped
  )
  echo.

  echo ===== 5. re-arm the additions queue =====
  if "!OK!"=="1" (
    if exist "content\_pending_additions.applied.json" (
      %PY% -c "import json,sys; d=json.load(open(r'content/_pending_additions.json',encoding='utf-8')); n=len(d.get('calendar_rows',[]))+len(d.get('review_state',{})); print('pending queue holds',n,'item(s)'); sys.exit(1 if n else 0)"
      if !ERRORLEVEL! NEQ 0 (
        echo queue is NOT empty - leaving it alone rather than clobbering it.
        echo check it by hand before running sync.bat.
        set OK=0
      ) else (
        copy /y "content\_pending_additions.applied.json" "content\_pending_additions.json" >nul
        %PY% -c "import json; d=json.load(open(r'content/_pending_additions.json',encoding='utf-8')); print('re-armed:', len(d.get('calendar_rows',[])), 'calendar row(s),', len(d.get('review_state',{})), 'review-state entr(ies)'); [print('  -',k) for k in d.get('review_state',{})]"
      )
    ) else (
      echo NO ARCHIVE - content\_pending_additions.applied.json is missing.
      echo The drained batch cannot be restored automatically. Send Claude this log.
      set OK=0
    )
  ) else (
    echo skipped
  )
  echo.

  echo ===== 6. state after =====
  %GIT% status -sb
  echo.

  echo ===== 7. what to do next =====
  if "!OK!"=="1" (
    echo   1. double-click tools\sync.bat
    echo      it will now commit WITHOUT calendar.md / review-state.json,
    echo      pull, then apply the re-armed queue on top of what it pulled.
    echo   2. if it stops on a conflict, tools\take_desk_version.bat
    echo UNSTICK_HEAD RESULT: OK - run sync.bat next.
  ) else (
    echo   read the log above before running anything else.
    echo UNSTICK_HEAD RESULT: NOTHING RESTORED - see above.
  )
  echo ===== DONE =====
)

type "%LOG%"
echo.
echo (log written to %LOG%^)
pause
endlocal
goto :eof

:midrebase
echo A rebase is already in progress - this is not the right script.
echo Use tools\finish_rebase.bat, or tools\unstick_rebase.bat if that loops.
pause
endlocal
goto :eof
