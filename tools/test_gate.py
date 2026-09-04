"""Assert the render gate in tools/apply_additions.py, against a scratch tree.

Covers the 2026-09-04 breach directly: a script approved against v1, redrafted
to v2, and rendered from v2 must NOT reach the content gate. Run it after
touching apply_additions.py.

    python tools/test_gate.py
"""
import json, os, shutil, subprocess, sys, tempfile

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fails = []

def run(state, additions):
    d = tempfile.mkdtemp()
    os.makedirs(os.path.join(d, 'content')); os.makedirs(os.path.join(d, 'tools'))
    shutil.copy(os.path.join(REPO, 'tools', 'apply_additions.py'), os.path.join(d, 'tools'))
    json.dump(state, open(os.path.join(d, 'content', 'review-state.json'), 'w'))
    json.dump(additions, open(os.path.join(d, 'content', '_pending_additions.json'), 'w'))
    open(os.path.join(d, 'content', 'calendar.md'), 'w').write(
        "| Date | Post | Type | Status | Posted | Performance |\n"
        "|---|---|---|---|---|---|\n"
        "| 2026-09-04 | Blocking fouls | Reel | Script approved | — | — |\n")
    out = subprocess.run([sys.executable, os.path.join(d, 'tools', 'apply_additions.py')],
                         capture_output=True, text=True)
    final = json.load(open(os.path.join(d, 'content', 'review-state.json')))
    shutil.rmtree(d)
    return out.stdout + out.stderr, final

def check(name, cond, detail=''):
    print(('  ok  ' if cond else '  FAIL') + '  ' + name + (('  -- ' + detail) if not cond and detail else ''))
    if not cond: fails.append(name)

APPROVED_V1 = {'x': {'scriptRev': 1,
                     'script': {'status': 'approved', 'rev': 1, 'note': '', 'tags': []},
                     'content': {'status': 'awaiting-render', 'note': '', 'tags': []}}}

print('\n1. render from the version that was approved -> allowed')
log, st = run(APPROVED_V1, {'review_state': {'x': {
    'builtFromScriptRev': 1,
    'content': {'status': 'in-review', 'note': '', 'tags': []},
    'revisions': [{'v': 1, 'file': 'a.mp4', 'builtFromScriptRev': 1}]}}})
check('flips to in-review', st['x']['content']['status'] == 'in-review', log)

print('\n2. reel-32: redraft to v2, render from v2, approval belongs to v1 -> REFUSED')
log, st = run(APPROVED_V1, {'review_state': {'x': {
    'scriptRev': 2,
    'scriptRevisions': [{'v': 2, 'file': 's.v2.md', 'changed': 'redraft'}],
    'builtFromScriptRev': 2,
    'content': {'status': 'in-review', 'note': '', 'tags': []},
    'revisions': [{'v': 1, 'file': 'a.mp4', 'builtFromScriptRev': 2}]}}})
check('flip refused', st['x']['content']['status'] == 'awaiting-render', log)
check('refusal is explained', 'REFUSING the render flip' in log and 'approved v1' in log, log)
check('scriptRev still bumped', st['x']['scriptRev'] == 2, log)
check('script status untouched', st['x']['script']['status'] == 'approved', log)
check('draft logged', len(st['x'].get('scriptRevisions', [])) == 1, log)

print('\n3. rev-less legacy approval + a redraft in the same run -> REFUSED')
legacy = {'x': {'script': {'status': 'approved', 'note': '', 'tags': []},
                'content': {'status': 'awaiting-render', 'note': '', 'tags': []}}}
log, st = run(legacy, {'review_state': {'x': {
    'scriptRev': 2, 'builtFromScriptRev': 2,
    'content': {'status': 'in-review', 'note': '', 'tags': []}}}})
check('legacy approval reads as v1, not the bumped v2',
      st['x']['content']['status'] == 'awaiting-render', log)

print('\n4. script not approved at all -> REFUSED')
log, st = run({'x': {'scriptRev': 1, 'script': {'status': 'pending', 'note': '', 'tags': []},
                     'content': {'status': 'awaiting-render', 'note': '', 'tags': []}}},
              {'review_state': {'x': {'builtFromScriptRev': 1,
                                      'content': {'status': 'in-review', 'note': '', 'tags': []}}}})
check('flip refused', st['x']['content']['status'] == 'awaiting-render', log)
check('says why', 'not approved' in log, log)

print('\n5. the task still cannot write an approval, or roll a version back')
log, st = run(APPROVED_V1, {'review_state': {'x': {
    'scriptRev': 0,
    'script': {'status': 'approved', 'rev': 9},
    'content': {'status': 'approved', 'note': '', 'tags': []}}}})
check('content approval refused', st['x']['content']['status'] == 'awaiting-render', log)
check('script rev not rolled back', st['x']['scriptRev'] == 1, log)
check('script rev not forged', st['x']['script']['rev'] == 1, log)

print('\n6. rebuild after a send-back: rerender -> in-review, from the approved rev')
sent_back = {'x': {'scriptRev': 2,
                   'script': {'status': 'approved', 'rev': 2, 'note': '', 'tags': []},
                   'content': {'status': 'rerender', 'rev': 1, 'note': 'wrong words', 'tags': []},
                   'revisions': [{'v': 1, 'file': 'a.mp4'}]}}
log, st = run(sent_back, {'review_state': {'x': {
    'builtFromScriptRev': 2,
    'content': {'status': 'in-review', 'note': '', 'tags': []},
    'revisions': [{'v': 2, 'file': 'a.mp4', 'builtFromScriptRev': 2}]}}})
check('flips', st['x']['content']['status'] == 'in-review', log)
check('two revisions', len(st['x']['revisions']) == 2, log)

print('\n7. idempotent: same payload twice is a no-op')
log2, st2 = run(st, {'review_state': {'x': {
    'builtFromScriptRev': 2,
    'content': {'status': 'in-review', 'note': '', 'tags': []},
    'revisions': [{'v': 2, 'file': 'a.mp4', 'builtFromScriptRev': 2}]}}})
check('no duplicate revision', len(st2['x']['revisions']) == 2, log2)

print('\n%d failure(s)' % len(fails))
sys.exit(1 if fails else 0)
