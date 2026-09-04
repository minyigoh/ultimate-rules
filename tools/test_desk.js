/* Assert the Content Desk's decision logic against the real repo state.
 *
 * Loads social/dashboard/index.html's own script in node, with just enough DOM
 * to let it boot, and feeds it content/review-state.json exactly as the fetch
 * would. So these assertions run the shipping code, not a copy of it.
 *
 * Covers the 2026-09-04 failures: an approval left lit over words that had been
 * redrafted underneath it, and a cut built from a script that was never
 * approved. Run after touching index.html or review-state.json.
 *
 *     node tools/test_desk.js
 */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.dirname(__dirname);
const html = fs.readFileSync(path.join(ROOT, 'social/dashboard/index.html'), 'utf8');
const dataJs = fs.readFileSync(path.join(ROOT, 'social/dashboard/data.js'), 'utf8');
const review = fs.readFileSync(path.join(ROOT, 'content/review-state.json'), 'utf8');
const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);

// Enough of a DOM that top-level boot code doesn't throw. Nothing here is
// asserted on -- the assertions are all on pure functions.
const el = new Proxy({}, {
  get(t, k){
    if (k === 'querySelectorAll') return () => [];
    if (k === 'querySelector' || k === 'closest') return () => el;
    if (k === 'addEventListener' || k === 'removeEventListener') return () => {};
    if (k === 'classList') return {add(){}, remove(){}, contains(){return false}};
    if (k === 'dataset' || k === 'style') return {};
    if (['scrollIntoView','focus','click','appendChild','remove','select','setAttribute'].includes(k)) return () => {};
    if (['textContent','innerHTML','value'].includes(k)) return '';
    if (k === Symbol.toPrimitive) return () => '[el]';
    return undefined;
  },
  set(){ return true; }
});
const store = {};
const ctx = {
  console: {log(){}, info(){}, warn(){}, error(){}},
  document: {querySelector: () => el, querySelectorAll: () => [], getElementById: () => el,
             createElement: () => el, body: el, documentElement: el, addEventListener(){}, execCommand(){}},
  window: {addEventListener(){}, scrollTo(){}, matchMedia: () => ({matches:false, addEventListener(){}}),
           innerWidth: 1400, scrollY: 0, location: {href:'file:///x/'}},
  localStorage: {getItem: k => (k in store ? store[k] : null), setItem(k,v){store[k]=v}, removeItem(k){delete store[k]}},
  navigator: {clipboard: {writeText: async()=>{}}},
  history: {state:null, pushState(){}, back(){}},
  location: {href:'file:///x/'},
  fetch: async () => { throw new Error('no network in the harness'); },
  setTimeout, clearTimeout, setInterval, clearInterval, Date, JSON, Math, URL,
  AbortController, TextDecoder
};
ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(dataJs, ctx);
for (const b of blocks) vm.runInContext(b, ctx);
// `const` and `function` at the top of a vm script are lexical and never land
// on the context object, so ask the script itself for them.
const NAMES = ['POSTS','scriptRevOf','contentRevOf','staleScript','staleContent','effScript',
  'effContent','sMetaOf','cMetaOf','needOf','scriptStatus','contentStatus','stageOf',
  'calendarStatus','renderQueue','historyOf','builtFromUnapprovedScript','postedOn',
  'tracksHTML','needBarHTML'];
Object.assign(ctx, vm.runInContext('({' + NAMES.map(n => n+':'+n).join(',') + '})', ctx));
vm.runInContext('remoteState = ' + JSON.stringify(JSON.parse(review)) + ';', ctx);

const P = ctx.POSTS, by = id => P.find(p => p.id === id);
let fails = 0;
const ck = (n, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) fails++;
  console.log((ok ? '  ok    ' : '  FAIL  ') + n + ' -> ' + JSON.stringify(got) +
              (ok ? '' : '   want ' + JSON.stringify(want)));
};

console.log('\nreel-32 — approved against v1, redrafted to v2, rendered from v2');
const r32 = by('reel-32');
ck('the approval is withdrawn', ctx.staleScript(r32), true);
ck('nothing gates on it any more', ctx.effScript(r32), 'pending');
ck('the pill says so', ctx.sMetaOf(r32).label, 'Redrafted — review again');
ck('the ask is on her, on the script', [ctx.needOf(r32).who, ctx.needOf(r32).on], ['you','script']);
ck('it is out of the render queue', ctx.renderQueue().some(x => x.post.id === 'reel-32'), false);
ck('the orphan cut is named', ctx.builtFromUnapprovedScript(r32), 2);
ck('and said out loud on the card', ctx.tracksHTML(r32).includes('words you never approved'), true);

console.log('\nreel-30 — approved AFTER its redraft, new cut waiting');
const r30 = by('reel-30');
ck('script v2, not stale', [ctx.scriptRevOf(r30), ctx.staleScript(r30)], [2, false]);
ck('cut v2, not stale', [ctx.contentRevOf(r30), ctx.staleContent(r30)], [2, false]);
ck('the ask is on the cut', [ctx.needOf(r30).who, ctx.needOf(r30).on], ['you','content']);
ck('history kept on both tracks',
   [ctx.historyOf(r30,'script').length, ctx.historyOf(r30,'content').length], [2, 2]);
ck('the rejection is still readable',
   ctx.historyOf(r30,'content').some(r => r.note.includes('box out')), true);
ck('no false orphan warning', ctx.builtFromUnapprovedScript(r30), null);

console.log('\nthe rest of the board');
ck('reel-33 is a fresh draft', ctx.needOf(by('reel-33')).short, 'Read script');
ck('reel-31 is postable', ctx.needOf(by('reel-31')).short, 'Post it');
ck('reel-29 posted but still flagged', ctx.needOf(by('reel-29')).short, 'Clear flag');

console.log('\nnothing already shipped was disturbed');
const shipped = P.filter(p => ctx.postedOn(p));
ck('none went stale', shipped.filter(p => ctx.staleScript(p) || ctx.staleContent(p)).length, 0);
ck('only reel-29 asks for anything',
   shipped.filter(p => ctx.needOf(p).who === 'you').map(p => p.id), ['reel-29']);

console.log('\nevery post renders clean markup');
const broken = P.filter(p => /undefined|\[object Object\]|NaN/.test(ctx.tracksHTML(p) + ctx.needBarHTML(p)));
ck('no template holes', broken.map(p => p.id), []);

console.log(fails ? '\n' + fails + ' FAILURE(S)\n' : '\nall assertions passed\n');
process.exit(fails ? 1 : 0);
