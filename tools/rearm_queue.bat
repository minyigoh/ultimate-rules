@echo off
REM ---------------------------------------------------------------------------
REM Put the last drained batch of additions back on the queue.
REM
REM WHEN YOU NEED THIS: sync.bat or finish_rebase.bat got all the way to the
REM push and the push was REJECTED ("fetch first" / non-fast-forward). That
REM means the Worker committed a desk decision in the window between the pull
REM and the push.
REM
REM Why that is awkward: apply_additions.py runs after the pull and writes
REM review-state.json, and the script that called it then commits that file. So
REM a rejected push leaves a local commit containing review-state.json -- the
REM one file that conflicts with the desk by construction -- while the queue
REM that could regenerate it has already been drained. On 2026-09-01 the
REM reel-29 and reel-30 render flips had to be reconstructed by hand.
REM
REM The recovery is: re-arm here, run sync.bat, and when it stops on the
REM review-state.json conflict run take_desk_version.bat. The desk's copy wins,
REM the queue replays the flips on top of it, and nothing is lost.
REM
REM Re-applying is a no-op by design -- an already-flipped track logs "nothing
REM to do" -- so running this when you did not need it costs nothing.
REM
REM NO "goto" INSIDE THE REDIRECTION BLOCK. A label inside a parenthesised
REM block ends the block, so the "> LOG" redirection dies with it and the rest
REM of the output goes to a console that closes. Same class of batch trap as
REM the %ERRORLEVEL% one documented in sync.bat. Use a flag instead.
REM
REM Run it by double-clicking. Logs to tools\_last_rearm.log.
REM ---------------------------------------------------------------------------
setlocal enabledelayedexpansion
set REPO=%~dp0..
set LOG=%~dp0_last_rearm.log

set PY=python
where python >nul 2>&1 || set PY=py

cd /d "%REPO%"

set PENDING=content\_pending_additions.json
set APPLIED=content\_pending_additions.applied.json
set OK=0

> "%LOG%" 2>&1 (
  echo ===== 1. is there anything to restore? =====
  if exist "%APPLIED%" (
    echo found %APPLIED%
    set OK=1
  ) else (
    echo NO ARCHIVE - %APPLIED% does not exist.
    echo Either apply_additions.py has not run since this feature was added,
    echo or there was never anything queued. Nothing to do.
  )
  echo.

  echo ===== 2. refuse to clobber a queue that already has work in it =====
  REM If the pending queue is non-empty, a later run has queued new additions
  REM and restoring over them would silently drop that work. Stop instead.
  if "!OK!"=="1" (
    %PY% -c "import json,sys; d=json.load(open(r'content/_pending_additions.json',encoding='utf-8')); n=len(d.get('calendar_rows',[]))+len(d.get('review_state',{})); print('pending queue holds',n,'item(s)'); sys.exit(1 if n else 0)"
    if !ERRORLEVEL! NEQ 0 (
      echo.
      echo REFUSING - the pending queue is not empty.
      echo Restoring would overwrite additions queued since the drain.
      echo Merge them by hand, or send Claude this log.
      set OK=0
    ) else (
      echo pending queue is empty - safe to restore
    )
  ) else (
    echo skipped - nothing to restore
  )
  echo.

  echo ===== 3. restore =====
  if "!OK!"=="1" (
    copy /y "%APPLIED%" "%PENDING%" >nul
    echo restored %APPLIED% -^> %PENDING%
    %PY% -c "import json; d=json.load(open(r'content/_pending_additions.json',encoding='utf-8')); print('re-armed:', len(d.get('calendar_rows',[])), 'calendar row(s),', len(d.get('review_state',{})), 'review-state entr(ies)'); [print('  -',k) for k in d.get('review_state',{})]"
  ) else (
    echo skipped
  )
  echo.

  echo ===== 4. what to do next =====
  if "!OK!"=="1" (
    echo   1. double-click tools\sync.bat
    echo   2. if it stops on a conflict in content\review-state.json,
    echo      double-click tools\take_desk_version.bat
  ) else (
    echo   nothing was changed.
  )
  echo.
  if "!OK!"=="1" (
    echo REARM RESULT: OK - queue restored, run sync.bat next.
  ) else (
    echo REARM RESULT: NOTHING DONE - see above.
  )
  echo ===== DONE =====
)

type "%LOG%"
echo.
echo (log written to %LOG%^)
pause
