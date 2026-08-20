/* Content Desk — data
 *
 * Mirrors the repo's own content files. The daily render task appends to this
 * file as it drafts; edit by hand only to correct it. Either way this file is
 * the dashboard's single source of truth for what exists — a script that isn't
 * here is invisible to the desk and can never be approved.
 *
 *   content/CONTENT_REVIEW.md               the two-gate process and the status
 *                                           vocabulary — the desk uses its words
 *   content/DAILY_RENDER_TASK.md            what the daily task drafts, builds
 *                                           and is forbidden from approving
 *   content/calendar.md                     queue, status, posted dates
 *   content/reel-N/script-and-caption.md    standalone film-ready copy + scenes
 *   content/carousel-post-1/caption.md      carousel captions
 *   social/brand-identity.md                voice, palette, attribution rules
 *
 * content/pending-review/week-1-reels.md is history: scripts are no longer
 * written in weekly batches. The task keeps three days of calendar coverage,
 * drafting in curriculum order, and each draft lands here at review.script
 * 'pending' for approval on the desk.
 *
 * Each post carries two independent review tracks:
 *
 *   review.script   the words        pending | approved | changes | rejected
 *   review.content  the rendered cut awaiting-render | in-review | approved
 *                                    | rerender
 *
 * Those keys map onto CONTENT_REVIEW.md's statuses: awaiting-render is
 * "Script approved", in-review is "Content pending review", approved is
 * "Ready to post", rerender is "Content rejected — regenerate". There is no
 * permanent reject for a cut — per that doc, rejecting one means regenerate.
 *
 * They gate each other in one direction only: nothing renders until the script
 * is approved, and approving a script never implies the cut that comes out of
 * it is any good. `awaiting-render` means the render task hasn't produced a
 * file yet; `in-review` means one exists and is waiting on you.
 *
 * `postedDate` is the baseline for a third, non-review track: whether the post
 * has gone out. It sits beside `review` rather than inside it because it
 * records a date, not an approval, but it syncs the same way the other two do.
 *
 * `review` is what the repo says today. Anything you click in the dashboard is
 * stored separately in localStorage and shown as an override, so the two never
 * get confused — use Export to write your decisions back to the repo.
 */

const ACCOUNT = {
  name: 'Learn Ultimate Frisbee',
  handle: '@learn.ultimatefrisbee',
  bio: 'Everything ultimate frisbee: rules, strategy, mindset, training. One lesson a day, five minutes at a time.',
  attribution: 'WFDF Rules of Ultimate 2025–2028, used under CC BY 4.0',
  cadence: 'Daily. Scripts drafted automatically three days ahead, nothing goes out un-reviewed.'
};

const POSTS = [
  {
    id: 'carousel-post-1',
    date: '2026-08-06',
    title: 'The whole sport in 60 seconds',
    type: 'Carousel',
    typeDetail: '17 slides',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: null,
    duration: null,
    rules: ['2.1', '2.3', '2.4', '2.5', '4.1', '9.3', '13.1', '14.1', '17.x'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'approved', on: '2026-08-06'}
    },
    postedDate: '2026-08-06',
    folder: 'carousel-post-1',
    source: 'content/carousel-post-1/caption.md',
    sourceLesson: null,
    video: null,
    slides: [
      ['01_cover', 'Cover'],
      ['02_the_field', 'The field'],
      ['03_the_field_rules_1', 'Field rules 1'],
      ['04_the_field_rules_2', 'Field rules 2'],
      ['05_the_point', '#1 The point'],
      ['06_the_point_rules', 'Point rules'],
      ['07_the_catch', '#2 The catch'],
      ['08_the_catch_rules', 'Catch rules'],
      ['09_the_clock', '#3 The clock'],
      ['10_the_clock_rules', 'Clock rules'],
      ['11_the_flip', '#4 The flip'],
      ['12_the_flip_rules', 'Flip rules'],
      ['13_the_contact', '#5 The contact'],
      ['14_the_contact_rules', 'Contact rules'],
      ['15_the_difference', '#6 The difference'],
      ['16_the_difference_rules', 'Difference rules'],
      ['17_closing', 'Closing']
    ],
    script: null,
    scenes: null,
    ig: `The whole sport in 60 seconds. Swipe →

If someone's dragged you to a pickup game tonight and you have no idea what's going on, this is everything you need before you show up: the field, scoring, the stall count, turnovers, contact, and why there's no ref.

Rule text quoted from the WFDF Rules of Ultimate 2025–2028. Full rule-by-rule breakdown linked in bio.

Follow @learn.ultimatefrisbee — one rule a day, five minutes at a time.`,
    tiktok: `you got invited to pickup ultimate and have no clue what stalling, the brick, or a turnover means

swipe for the whole sport in 60 seconds 🥏

rules quoted from the WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Attribution to WFDF is in both captions and repeated on every rules-citation slide — keep this on all future posts.',
      'No growth/reach claims made — consistency and a clear angle raise the odds of traction, not guaranteed virality.',
      'This folder is the reference template for future carousels — see content/CAROUSEL_TEMPLATE.md.'
    ]
  },

  {
    id: 'reel-1',
    date: '2026-08-06',
    title: 'The whole game in one paragraph',
    type: 'Reel',
    typeDetail: '1080×1920 · 40.9s · 30fps',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 1,
    duration: '~25s script / 40.9s cut',
    rules: ['4.1', '14.1', '18.2.2', '13.1'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'approved', on: '2026-08-06'}
    },
    postedDate: '2026-08-06',
    folder: 'reel-1',
    source: 'content/reel-1/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json → the-game',
    video: 'reel1-lesson1.mp4',
    slides: null,
    script: {
      hook: 'Before anything else makes sense, you need the shape of the whole game.',
      explanation: `Two teams of seven. Score by catching the disc inside the end zone you're attacking — that's the entire objective. You can't run with it: catch, plant a foot, throw. Any direction is legal, even backwards. Drop it, and the other team picks it up right there and attacks the other way — no whistle, no reset.`,
      example: `New players freeze after catching. Don't — you've got ten seconds, longer than it feels. Look up first.`,
      cta: `That's lesson 1 of 75. New one every day.`
    },
    scenes: [
      ['1', 'Cover', '"The whole game in one paragraph" · kicker NEVER PLAYED BEFORE · LESSON 1 / 75'],
      ['2', '#1 THE OBJECTIVE', '"Two teams. One end zone." · footer cites 4.1 · 14.1'],
      ['3', 'Rules detail', 'Verbatim 4.1, 14.1 + 14.1.1'],
      ['4', '#2 THE THROW', '"Catch, plant, throw." · footer cites 18.2.2'],
      ['5', 'Rules detail', 'Verbatim 18.2.2'],
      ['6', '#3 THE FLIP', `"Drop it and it's theirs." · footer cites 13.1`],
      ['7', 'Rules detail', 'Verbatim 13.1 + 13.1.1 + 13.1.2'],
      ['8', 'FIELD TIP', '"Look up first" — ten seconds is longer than it feels'],
      ['9', 'Closing', '"Lesson 1 of 75." · Follow @learn.ultimatefrisbee']
    ],
    ig: `The whole game in one paragraph, if nobody's explained it to you yet.

Two teams of seven, one objective: catch it in the end zone. No running with the disc — catch, plant, throw. Miss and possession flips instantly, no whistle.

Rule text: WFDF Rules of Ultimate 2025–2028. Full lesson-by-lesson breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day, five minutes at a time.`,
    tiktok: `got invited to pickup ultimate and nobody explained the actual game to you

here's the whole thing in 25 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rule text is pulled programmatically from content/rules.json — never paraphrased on a citation card.',
      'Regenerating: render_v3.py → blend.py → concat_build.py → ffmpeg concat. Change copy there, not in the video.',
      'Once posted, report the numbers back so they can be logged in content/calendar.md.'
    ]
  },

  {
    id: 'reel-2',
    date: '2026-08-07',
    title: `You can't run with the disc — but you can pivot`,
    type: 'Reel',
    typeDetail: '1080×1920 · 30.2s · 30fps',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 2,
    duration: '~25s script / 30.2s cut',
    rules: ['18.2.2', '18.2.3', '18.2.3.1'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'approved', on: '2026-08-07'}
    },
    postedDate: '2026-08-07',
    folder: 'reel-2',
    source: 'content/reel-2/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json → no-running',
    video: 'reel2-you-cant-run-but-you-can-pivot.mp4',
    slides: null,
    script: {
      hook: 'The most misunderstood beginner rule — and the easiest one to get right.',
      explanation: `Once you catch the disc, one foot becomes your pivot. It stays planted until you release the throw. The other foot can go anywhere — step around, lunge wide, reach past a defender. Pivoting isn't a workaround, it's a real skill.`,
      example: `Pick your pivot foot the instant you catch, then commit. Deciding late is what causes travels.`,
      cta: `Lesson 2 of 75 — link in bio.`
    },
    scenes: [
      ['1', 'Cover', `"You can't run — but you can pivot." · kicker NEVER PLAYED BEFORE · LESSON 2 / 75`],
      ['2', '#1 THE PIVOT', '"One foot stays. The other roams." · footer cites 18.2.2'],
      ['3', 'Rules detail', 'Verbatim 18.2.2'],
      ['4', '#2 THE GROUND', `"Down doesn't mean stuck." · footer cites 18.2.3 · 18.2.3.1`],
      ['5', 'Rules detail', 'Verbatim 18.2.3 + 18.2.3.1'],
      ['6', 'FIELD TIP', '"Pick early, commit fully" — pick your pivot foot the instant you catch'],
      ['7', 'Closing', '"Lesson 2 of 75." · Follow @learn.ultimatefrisbee']
    ],
    ig: `You can't run with the disc. You can absolutely move like you're still playing.

One foot plants as your pivot the moment you catch. The other foot goes anywhere — step, lunge, reach. Good throwers cover a lot of ground without that pivot foot ever lifting.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next lesson.`,
    tiktok: `"you can't run with the disc" is true and also not the full story

the pivot foot is doing more work than you think 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rule text pulled programmatically from content/rules.json — never paraphrased on a citation card.',
      'No growth/reach claims in either caption.'
    ]
  },

  {
    id: 'reel-3',
    date: '2026-08-08',
    title: 'Ten seconds: the stall count',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.2s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 3,
    duration: '~25s script / 29.2s cut',
    rules: ['9.1', '9.3', '9.4', '13.2.2'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'in-review', on: '2026-08-08'}
    },
    postedDate: null,
    folder: 'reel-3',
    source: 'content/reel-3/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json → stall-count',
    video: 'reel3-ten-seconds-stall-count.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Ten seconds: the stall count" · kicker BEGINNER · LESSON 3 / 75'],
      ['2', '#1 THE COUNT', '"Stalling one, two, three…" · footer cites 9.1'],
      ['3', 'Rules detail', 'Verbatim 9.1'],
      ['4', '#2 THE STALL-OUT', '"Gone before ten starts." · footer cites 13.2.2'],
      ['5', 'Rules detail', 'Verbatim 13.2.2'],
      ['6', '#3 STAYING LEGAL', '"Drift or swap, it resets." · footer cites 9.3 · 9.4'],
      ['7', 'Rules detail', 'Verbatim 9.3 + 9.4'],
      ['8', 'FIELD TIP', '"Count along, call it" — count along in your head, call "fast count" if it\'s rushed'],
      ['9', 'Closing', '"Lesson 3 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `There's a clock in ultimate that only exists when someone says it out loud.`,
      explanation: `Your defender counts you down: "Stalling one, two, three…" up to ten, each number at least a second apart. If they start saying "ten" before you release, it's a turnover. Gone before the word starts — not before it finishes.`,
      example: `Count along in your head. If their count sounds too fast, just say "fast count" — a normal call, not a confrontation.`,
      cta: `Lesson 3 of 75. Tomorrow: the five ways you can lose the disc.`
    },
    ig: `The stall count only exists because someone's saying it out loud.

Your marker counts to ten, a second apart each number. Release before they start "ten" and you're fine — the wording matters more than people think.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day.`,
    tiktok: `the stall count rule that decides way more games than people realize

it's about when they START saying ten, not when they finish 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-08 by the scheduled reel-render task. Awaiting content review.'
    ]
  },

  {
    id: 'reel-4',
    date: '2026-08-09',
    title: 'Five ways to lose the disc',
    type: 'Reel',
    typeDetail: '1080×1920 · 28.3s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 4,
    duration: '~25s script / 28.3s cut',
    rules: ['13.1', '13.2'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'in-review', on: '2026-08-08'}
    },
    postedDate: null,
    folder: 'reel-4',
    source: 'content/reel-4/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: 'reel4-five-ways-to-lose-the-disc.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Five ways to lose the disc" · kicker BEGINNER · LESSON 4 / 75'],
      ['2', '#1 INSTANT TURNOVERS', '"No whistle. It just flips." · footer cites 13.1'],
      ['3', 'Rules detail', 'Verbatim 13.1 + 13.1.1 + 13.1.2'],
      ['4', '#2 STOPPED TURNOVERS', '"A few flip with a pause first." · footer cites 13.2'],
      ['5', 'Rules detail', 'Verbatim 13.2 + 13.2.2'],
      ['6', 'FIELD TIP', '"Sprint on the turn" — sprint to guard someone the moment the disc hits the ground'],
      ['7', 'Closing', '"Lesson 4 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Know these five and you'll stop being surprised by sudden changes of possession.`,
      explanation: `Possession flips instantly, no stoppage, when: the disc hits the ground, a defender catches it, it goes out of bounds, or the pull is touched then dropped. It also flips — with a stoppage — on the stall-out or a few odd acts, like handing the disc to a teammate.`,
      example: `The moment the disc hits the ground, sprint to guard someone. Points get lost in the two seconds right after a turnover.`,
      cta: `Lesson 4 of 75 — follow for the rest.`
    },
    ig: `Five ways to lose the disc, so you stop being surprised when possession flips.

Most turnovers happen instantly, no whistle: dropped, blocked, out of bounds. A couple happen with a stoppage first, like the stall-out. Know the difference and you'll never be the last one to react.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next one.`,
    tiktok: `disc hits the ground and suddenly everyone's sprinting the other way

here's every way that happens, in 25 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-08 by the scheduled reel-render task. Awaiting content review.',
      'Hook says "five ways" but the explanation lists four instant + stall-out + odd acts — worth a pass to make the count land exactly.'
    ]
  },

  {
    id: 'reel-5',
    date: '2026-08-10',
    title: 'There are no referees. You are the referee.',
    type: 'Reel',
    typeDetail: '1080×1920 · 30.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 5,
    duration: '~25s script / 30.5s cut',
    rules: ['1.1', '1.2', '15.4', '13.3'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'in-review', on: '2026-08-10'}
    },
    postedDate: null,
    folder: 'reel-5',
    source: 'content/reel-5/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: 'reel5-there-are-no-referees-you-are-the-referee.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"There are no referees. You are the referee." · kicker NEVER PLAYED BEFORE · LESSON 5 / 75'],
      ['2', '#1 SELF-OFFICIATED', '"No referees. You make the call." · footer cites 1.1'],
      ['3', 'Rules detail', 'Verbatim 1.1'],
      ['4', '#2 GENTLE BY DESIGN', '"Recreate, don\'t punish." · footer cites 1.2'],
      ['5', 'Rules detail', 'Verbatim 1.2'],
      ['6', '#3 WHO CAN CALL IT', '"Only the player fouled." · footer cites 15.4'],
      ['7', 'Rules detail', 'Verbatim 15.4'],
      ['8', '#4 IF YOU DISAGREE', '"Discuss, or it goes back." · footer cites 13.3'],
      ['9', 'Rules detail', 'Verbatim 13.3'],
      ['10', 'FIELD TIP', '"Call it yourself" — only the player fouled can call the foul'],
      ['11', 'Closing', '"Lesson 5 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: 'This is the one thing that makes ultimate different from every other field sport.',
      explanation: `There are no referees. Every call — including against your own team — is made by the players on the field. The rules assume nobody breaks them on purpose, which is why penalties are gentle: they try to recreate what would've happened anyway, not punish.`,
      example: `Only the player who was fouled can call the foul. You can't call it on a teammate's behalf.`,
      cta: `Lesson 5 of 75 — this one's spirit of the game, not a rule number.`
    },
    ig: `No referees. Every call on the field is made by the players — including against your own team.

That's not a gap in the rules, it's the design. The whole system assumes you'll be honest, and the penalties are built to recreate what would've happened, not to punish.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day.`,
    tiktok: `no refs. players make every call, even against themselves

this is the rule that explains the whole culture of the sport 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-08 by the scheduled reel-render task. Awaiting content review.'
    ]
  },

  {
    id: 'reel-6',
    date: '2026-08-11',
    title: 'The field, and why the lines are out',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 6,
    duration: '~20s script / 29.5s cut',
    rules: ['2.1', '2.2', '2.3', '2.4', '11.1'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'in-review', on: '2026-08-10'}
    },
    postedDate: null,
    folder: 'reel-6',
    source: 'content/reel-6/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: 'reel6-the-field-why-lines-are-out.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"The field, and why the lines are out" · kicker NEVER PLAYED BEFORE · LESSON 6 / 75'],
      ['2', '#1 THE LAYOUT', '"100m long. 37m wide." · footer cites 2.1 · 2.2'],
      ['3', 'Rules detail', 'Verbatim 2.1 + 2.2'],
      ['4', '#2 THE LINES ARE OUT', '"Stand on one, you\'re out." · footer cites 2.3 · 11.1'],
      ['5', 'Rules detail', 'Verbatim 2.3 + 11.1'],
      ['6', '#3 THE GOAL LINE\'S DIFFERENT', '"It belongs to the middle." · footer cites 2.4'],
      ['7', 'Rules detail', 'Verbatim 2.4'],
      ['8', 'FIELD TIP', '"Look down near the line" — toeing the line is out, not in'],
      ['9', 'Closing', '"Lesson 6 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: 'One detail here trips up almost every new player.',
      explanation: `Full field: 100m long, 37m wide, with an 18m end zone at each end. The sidelines and end lines are NOT part of the field — stand on one and you're out. The goal line, though, belongs to the central zone, not the end zone.`,
      example: `Catch near the sideline? Look down. Toeing the line is out — the opposite of most sports.`,
      cta: `Lesson 6 of 75 — link in bio for the full curriculum.`
    },
    ig: `The lines are out. All of them.

Sidelines, end lines — not part of the field. Stand on one and you're out of bounds, which is the opposite of how most sports draw their boundaries. The goal line's different: it belongs to the central zone.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next lesson.`,
    tiktok: `the lines on an ultimate field are OUT, not in, and it trips up everyone once

here's the field layout in 20 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-08 by the scheduled reel-render task. Awaiting content review.',
      'The carousel already has a to-scale field diagram (02_the_field.png) — reuse it rather than redrawing.'
    ]
  },

  {
    id: 'reel-7',
    date: '2026-08-12',
    title: 'The pull: how every point starts',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 7,
    duration: '~25s script / 29.5s cut',
    rules: ['7.1', '7.2', '7.3', '7.4', '7.6'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'in-review', on: '2026-08-10'}
    },
    postedDate: null,
    folder: 'reel-7',
    source: 'content/reel-7/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: 'reel7-the-pull-how-every-point-starts.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"The pull: how every point starts" · kicker BEGINNER · LESSON 7 / 75'],
      ['2', '#1 THE THROW', '"Defence throws it deep." · footer cites 7.1'],
      ['3', 'Rules detail', 'Verbatim 7.1'],
      ['4', '#2 READY, THEN GO', '"A raised hand starts it." · footer cites 7.2 · 7.6'],
      ['5', 'Rules detail', 'Verbatim 7.2 + 7.6'],
      ['6', '#3 STAY BEHIND THE LINE', '"Feet planted till it\'s gone." · footer cites 7.3 · 7.4'],
      ['7', 'Rules detail', 'Verbatim 7.3 + 7.4'],
      ['8', 'FIELD TIP', '"Signal early and clearly" — half of all pull confusion is a missed signal'],
      ['9', 'Closing', '"Lesson 7 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `It's ultimate's kickoff, and it has its own small ritual.`,
      explanation: `Every point starts with the defence throwing the disc the length of the field — the pull. Before it goes, both teams raise a hand to signal ready. Offence keeps a foot on their own goal line, defence stays fully behind theirs, until the disc is released.`,
      example: `Half of all pull confusion is a team that never actually signalled. Raise your hand clearly and early.`,
      cta: `Lesson 7 of 75 — that's week one. New lesson daily.`
    },
    ig: `Every point starts the same way: the pull.

Defence throws it the length of the field. Both teams signal ready with a raised hand first, and nobody moves until the disc actually leaves the puller's hand — not before, not on the run-up.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — that's week one of the daily rules.`,
    tiktok: `ultimate's version of a kickoff, and it has its own tiny ritual

everyone's raising a hand and you had no idea why 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-08 by the scheduled reel-render task. Awaiting content review.',
      'Last of the original week-one batch. Subsequent scripts are drafted automatically, three days of coverage at a time.'
    ]
  },
  {
    id: 'carousel-post-2',
    date: '2026-08-13',
    title: 'Seven lessons, one week',
    type: 'Carousel',
    typeDetail: '1080×1350 · 9 slides',
    pillar: 'Rules',
    difficulty: 'Mixed',
    lesson: null,
    duration: null,
    rules: ['4.1', '14.1', '18.2.2', '13.1', '18.2.3', '18.2.3.1', '9.1', '9.3', '9.4', '13.2.2', '13.2', '1.1', '1.2', '15.4', '13.3', '2.1', '2.2', '2.3', '2.4', '11.1', '7.1', '7.2', '7.3', '7.4', '7.6'],
    review: {
      script:  {status: 'approved', on: '2026-08-11'},
      content: {status: 'in-review', on: '2026-08-12'}
    },
    postedDate: null,
    folder: 'carousel-post-2',
    source: 'content/carousel-post-2/caption.md',
    sourceLesson: 'Weekly recap — no lesson consumed; recaps lessons 1-7',
    video: null,
    slides: [
      ['01_cover', 'Cover — THIS WEEK'],
      ['02_lesson1_whole_game', 'Lesson 1 — The whole game in one paragraph'],
      ['03_lesson2_pivot', 'Lesson 2 — You can\'t run with the disc'],
      ['04_lesson3_stall_count', 'Lesson 3 — Ten seconds: the stall count'],
      ['05_lesson4_turnovers', 'Lesson 4 — Five ways to lose the disc'],
      ['06_lesson5_self_officiating', 'Lesson 5 — There are no referees'],
      ['07_lesson6_the_field', 'Lesson 6 — The field, and why the lines are out'],
      ['08_lesson7_the_pull', 'Lesson 7 — The pull: how every point starts'],
      ['09_closing', 'Closing']
    ],
    scenes: null,
    script: {
      hook: `Seven lessons this week. Here's the whole set in one swipe.`,
      explanation: `The shape of the game, pivoting, the stall count, the five turnovers, self-officiating, the sidelines, and how every point starts.`,
      example: `If one of these is still fuzzy, the reel it came from is on the grid — each slide carries its rule numbers so you can look it up yourself.`,
      cta: `Lessons 1 to 7 of 75 — new lesson daily.`
    },
    ig: `The first seven lessons, all in one place.

What the game actually is. Pivoting without travelling. The ten-second stall count. The five ways possession flips. Why there's nobody with a whistle. And why the sideline is out, not in. Plus how every point starts.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `everything the daily reels covered this week, seven slides 🥏

the shape of the game, pivots, stall counts, turnovers, no refs, sidelines, and the pull

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-12 by the daily task from the approved script. Nine slides at 2250×2812. Awaiting content review.',
      'Redrafted 2026-08-11 against the desk note "Can you recap lessons 1 - 7? Not 2-8"; previous copy archived as content/carousel-post-2/script-and-caption.v1.md.',
      'First weekly recap. Nine slides: cover, one per reel posted 2026-08-06 to 2026-08-12, closing.',
      'Recap slides cite rule numbers but carry no rule text — see content/CAROUSEL_TEMPLATE.md. Nothing on them to paraphrase, by design.',
      'Window was one day wider on the early side than the date-based "seven days ending Thursday" rule in force at the time, so the recap starts where the curriculum does. Lesson 8 moves to next Thursday, which covers 8-14. Now history: that rule was replaced on 2026-08-17 with contiguous blocks of seven lesson numbers, which is what this post was doing all along.'
    ]
  },
  {
    id: 'reel-8',
    date: '2026-08-13',
    title: 'A catch and possession are not the same thing',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Intermediate',
    lesson: 8,
    duration: '~25s script / 29.5s cut',
    rules: ['12.1', '12.1.1', '13.1.1.1'],
    review: {
      script:  {status: 'approved', on: '2026-08-11'},
      content: {status: 'in-review', on: '2026-08-11'}
    },
    postedDate: null,
    folder: 'reel-8',
    source: 'content/reel-8/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Possession)',
    video: 'reel8-a-catch-and-possession-are-not-the-same-thing.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"A catch and possession are not the same thing" · kicker INTERMEDIATE · LESSON 8 / 75'],
      ['2', '#1 THE CATCH', '"Trapped between two body parts." · footer cites 12.1'],
      ['3', 'Rules detail', 'Verbatim 12.1'],
      ['4', '#2 THEN THE LANDING', '"Hold it through the ground." · footer cites 12.1.1'],
      ['5', 'Rules detail', 'Verbatim 12.1.1'],
      ['6', '#3 THE DISC MAY TOUCH GRASS', '"Keep the catch and it\'s still yours." · footer cites 13.1.1.1'],
      ['7', 'Rules detail', 'Verbatim 13.1.1.1'],
      ['8', 'FIELD TIP', '"Squeeze through the landing" — the catch isn\'t finished until you\'ve stopped moving'],
      ['9', 'Closing', '"Lesson 8 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You caught it. That doesn't mean you have it.`,
      explanation: `A catch is one moment: a non-spinning disc trapped between two body parts. Possession is everything after it — keeping hold through the landing, the slide, and any contact that came with the catch.`,
      example: `Dive, catch it, hit the ground, and it pops out — that's a turnover, because possession never happened. But if the disc scrapes the grass and you never lose the catch, play on.`,
      cta: `Lesson 8 of 75 — new lesson daily.`
    },
    ig: `You caught it. That doesn't mean you have it.

A catch is one moment — a non-spinning disc trapped between two body parts. Possession is what comes after: holding on through the landing and everything that comes with it. Dive, catch, hit the ground, pop it out, and it's a turnover. Let the disc scrape the grass without ever losing the catch, and it's still yours.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `the disc touched the ground and it's somehow still your point 🥏

catch and possession are two different things and the gap between them is where the turnovers live

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-11 by the daily task from the approved script. 29.5s, exact CFR via encode.py. Awaiting content review.',
      '13.1.1.1 is a continuation clause reading off 13.1.1. On the citation card it stands alone as written; do not stitch the two into one sentence.'
    ]
  },
  {
    id: 'reel-9',
    date: '2026-08-14',
    title: 'Where your feet have to be',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 9,
    duration: '~25s script / 29.5s cut',
    rules: ['11.3', '11.3.1', '11.3.2', '11.4'],
    review: {
      script:  {status: 'approved', on: '2026-08-11'},
      content: {status: 'in-review', on: '2026-08-12'}
    },
    postedDate: null,
    folder: 'reel-9',
    source: 'content/reel-9/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Possession)',
    video: 'reel9-where-your-feet-have-to-be.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Where your feet have to be" · kicker BEGINNER · LESSON 9 / 75'],
      ['2', '#1 NO TWO FEET IN', '"If you\'re not out, you\'re in." · footer cites 11.3'],
      ['3', 'Rules detail', 'Verbatim 11.3'],
      ['4', '#2 AIRBORNE', '"Your status waits for the landing." · footer cites 11.3.1 · 11.4'],
      ['5', 'Rules detail', 'Verbatim 11.3.1, then 11.4 with 11.4.1 and 11.4.2 beneath it'],
      ['6', '#3 MOMENTUM IS FINE', '"Land in, then drift out." · footer cites 11.3.2'],
      ['7', 'Rules detail', 'Verbatim 11.3.2'],
      ['8', 'FIELD TIP', '"Catch it before your foot lands" — timing beats stretching near the sideline'],
      ['9', 'Closing', '"Lesson 9 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Ultimate has no "two feet in" rule. It has something simpler, and stricter.`,
      explanation: `If any part of you is out-of-bounds when you touch the disc, no catch happened at all. Catch it airborne and your first contact with the ground has to be in-bounds — and the line itself is out.`,
      example: `Land in-bounds, keep the catch, and momentum carrying you over the sideline costs you nothing. You walk back and set your pivot where you crossed the line.`,
      cta: `Lesson 9 of 75 — new lesson daily.`
    },
    ig: `Ultimate has no "two feet in" rule. It has something simpler, and stricter.

If any part of you is out-of-bounds when you touch the disc, there was no catch. Airborne, your first contact with the ground has to be in-bounds — and the line is out, not in. Land clean and keep the catch, though, and momentum carrying you over the sideline costs you nothing: walk back and set your pivot where you crossed.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `no "two feet in" here. one toe on the line and you were never in 🥏

but landing in and then running out? completely fine

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-12 by the daily task from the approved script. 29.5s, exact CFR via encode.py. Awaiting content review.',
      '11.4 is a stem clause — it only reads correctly with 11.4.1 and 11.4.2 beneath it on the same card.',
      'Deliberate callback to Lesson 6 (the field, and why the lines are out).'
    ]
  },

  {
    id: 'reel-10',
    date: '2026-08-15',
    title: "You're allowed to leave the field",
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 10,
    duration: '~28s script / 29.5s cut',
    rules: ['11.6', '11.7', '11.2'],
    review: {
      script:  {status: 'approved', on: '2026-08-12'},
      content: {status: 'in-review', on: '2026-08-13'}
    },
    postedDate: null,
    folder: 'reel-10',
    source: 'content/reel-10/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Possession)',
    video: 'reel10-youre-allowed-to-leave-the-field.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"You\'re allowed to leave the field" · kicker BEGINNER · LESSON 10 / 75'],
      ['2', '#1 THE DISC CAN COME BACK', '"Outside the line isn\'t out yet." · footer cites 11.6 · 11.7'],
      ['3', 'Rules detail', 'Verbatim 11.7'],
      ['4', '#2 WHAT ACTUALLY PUTS IT OUT', '"Ground, or an out-of-bounds receiver." · footer cites 11.6'],
      ['5', 'Rules detail', 'Verbatim 11.6'],
      ['6', '#3 DEFENDERS ARE ALWAYS IN', '"The rule only constrains the offence." · footer cites 11.2'],
      ['7', 'Rules detail', 'Verbatim 11.2'],
      ['8', 'FIELD TIP', '"Chase the ones that look gone"'],
      ['9', 'Closing', '"Lesson 10 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `The disc can fly out and come back. So can you.`,
      explanation: `A throw that curves outside the sideline and back over the field never went out. The disc is only out-of-bounds once it actually touches out-of-bounds ground, or an offensive player who is standing out there. And you're explicitly allowed to run off the field to make a play on it.`,
      example: `One asymmetry worth knowing: defenders are always counted as in-bounds. A defender standing well outside the line can reach in and block the disc, and it's a clean block. The out-of-bounds rules only constrain the offence.`,
      cta: `Lesson 10 of 75 — new lesson daily.`
    },
    ig: `The disc can fly out and come back. So can you.

A throw that curves outside the sideline and back over the field never went out at all — the disc is only out-of-bounds once it touches out-of-bounds ground, or an offensive player standing out there. And you're explicitly allowed to run off the field to make a play on it. What matters is where you are when you touch it.

The asymmetry most new players miss: defensive players are always considered in-bounds. A defender standing outside the sideline can reach in and block the disc, and it counts.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `that throw curving out past the sideline? not out. not yet 🥏

and defenders are always "in-bounds" — they can stand off the field and still block it

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-13 by the daily task: nine scenes, 29.5s, exact CFR via encode.py.',
      'Direct sequel to Lesson 9: that one covered where your feet are, this one covers where the disc is.',
      '11.6 is three sentences long and wraps to nine lines on its detail card — it fits, but there is no room left on that slide.'
    ]
  },

  {
    id: 'reel-11',
    date: '2026-08-16',
    title: 'Caught at the same time? Offence keeps it.',
    type: 'Reel',
    typeDetail: '1080×1920 · 28.3s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 11,
    duration: '~26s script / 28.3s cut (v2, from the approved redraft)',
    rules: ['12.3'],
    review: {
      script:  {status: 'pending', on: '2026-08-15'},
      content: {status: 'in-review', on: '2026-08-16'}
    },
    postedDate: null,
    folder: 'reel-11',
    source: 'content/reel-11/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Possession)',
    video: 'reel11-caught-at-the-same-time.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Caught at the same time? Offence keeps it." · kicker BEGINNER · LESSON 11 / 75'],
      ['2', '#1 SIMULTANEOUS MEANS OFFENCE', `"Both of you have it. It's theirs." · footer cites 12.3`],
      ['3', 'Rules detail', 'Verbatim 12.3'],
      ['4', '#2 NOT A "WHO HAD MORE" CALL', '"There is no percentage to argue about." · footer cites 12.3'],
      ['5', '#3 IT HAS TO BE GENUINE', '"First hands wins. Truly simultaneous is rare." · footer cites 12.3'],
      ['6', 'FIELD TIP', `"Ask 'did you have it first?'"`],
      ['7', 'Closing', '"Lesson 11 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You both came down holding it. Who gets it?`,
      explanation: `The offence. If an offensive and a defensive player catch the disc simultaneously, the offence retains possession. That's the whole rule — one sentence, no subclauses, no judgement about who had more of it.`,
      example: `The word doing the work is "simultaneously". If you got two hands on it first and the defender arrived onto your hands a beat later, that isn't simultaneous — that's your catch, and it was always your catch. The rule only settles the genuine same-instant catch, which happens far less often than it feels in the moment.`,
      cta: `Lesson 11 of 75 — new lesson daily.`
    },
    ig: `You both came down holding it. Who gets it?

The offence. If an offensive and a defensive player catch the disc simultaneously, the offence retains possession — that's the entire rule, one sentence long.

What trips people up is the word "simultaneously". It is not a question of who had more of the disc, or whose grip was better. If you got hands on it first and the defender arrived a beat later, the two catches were never simultaneous — it was your catch. The rule only settles the genuine same-instant catch, which happens far less often than it feels like on the field.

So the honest question on the ground isn't "whose is it?" It's "did you have it first?" Say what you saw, listen to what they saw, and restart quickly.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `you both caught it at the same instant. offence keeps it. that's the whole rule 🥏

but "simultaneously" is doing a lot of work there — if you had hands on it first, the two catches were never simultaneous

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'REDRAFTED 2026-08-15 — back at script review. The rendered cut was sent back with "The word tie can be misleadingly referring to the score". That needs different words, not a different render, so it went back through the first gate: "tie" is gone from the title, the scenes and both captions, replaced with the rulebook word "simultaneously". Round logged in content/reel-11/script-feedback.md; previous copy at script-and-caption.v1.md.',
      'The video below is the SUPERSEDED v1 cut, built 2026-08-14 from the old copy — it still says "tie" on screen. It is left here so you can compare, not for approval. Once these words clear review the next run rebuilds it as reel11-caught-at-the-same-time.mp4 and archives this one as .v1.mp4.',
      'One-rule lesson: 12.3 is a single sentence and the lesson brief cites nothing else, so all three topic scenes foot to the same citation. If the repeated footer reads badly on the rebuild, say so and I will cut to five scenes or add 12.1 as context — I have not added it on my own initiative.',
      'The 2026-08-16 calendar row still reads the old title. Approvals still land (the Worker falls back to matching on date when a title has been tidied up); the cell text is cosmetic drift worth a hand-edit.'
    ]
  },

  {
    id: 'reel-12',
    date: '2026-08-17',
    title: 'What actually counts as a goal',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 12,
    duration: '~29s script / 29.5s cut',
    rules: ['14.1', '14.1.1', '14.1.2', '14.4'],
    review: {
      script:  {status: 'approved', on: '2026-08-14'},
      content: {status: 'in-review', on: '2026-08-15'}
    },
    postedDate: null,
    folder: 'reel-12',
    source: 'content/reel-12/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Scoring)',
    video: 'reel12-what-actually-counts-as-a-goal.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"What actually counts as a goal" · kicker BEGINNER · LESSON 12 / 75'],
      ['2', '#1 A GOAL HAS CONDITIONS', '"Catching it in the end zone is only most of the way there." · footer cites 14.1 · 14.1.1'],
      ['3', 'Rules detail', 'Verbatim 14.1 + 14.1.1'],
      ['4', '#2 ALL OF YOU, NOT SOME OF YOU', '"One foot on the goal line is not a goal." · footer cites 14.1.1'],
      ['5', 'Rules detail', 'Verbatim 14.1.2'],
      ['6', '#3 YOU STILL HAVE TO CATCH IT', '"Bobbling it through the landing means no goal." · footer cites 14.1.2 · 14.4'],
      ['7', 'Rules detail', 'Verbatim 14.4'],
      ['8', 'FIELD TIP', `"Don't celebrate until you've stopped moving"`],
      ['9', 'Closing', '"Lesson 12 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You caught it in the end zone. That might not be a goal yet.`,
      explanation: `A goal needs three things at once. You're in-bounds, the pass was legal, and all of your ground contact is entirely inside the end zone you're attacking. Miss any one of them and it's just a catch.`,
      example: `Say you go up for it and catch it airborne over the line. Now every one of your first points of ground contact has to land entirely in the end zone. One foot in, one foot on the goal line — that's not a goal, because the line isn't the end zone. And you still have to establish possession through the whole landing. Bobble it as you come down and there's nothing to celebrate.`,
      cta: `Lesson 12 of 75 — new lesson daily.`
    },
    ig: `You caught it in the end zone. That might not be a goal yet.

Three things have to be true at the same time: you're in-bounds, the pass was legal, and all of your ground contact is entirely within the end zone you're attacking. Miss one and you've made a catch, not a score.

The one that surprises people is the landing. If you're airborne when you catch it, every one of your first points of ground contact has to be entirely inside the end zone. One foot in and one foot on the goal line is not a goal — the line belongs to the field, not to the end zone.

And the catch still has to hold. You have to establish possession and keep it through all the ground contact related to that catch, exactly as you would anywhere else on the field. Bobble it as you land and there was never a goal to argue about.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `caught it in the end zone ≠ goal 🥏

all of your ground contact has to be inside the zone. one foot on the goal line and it's just a catch — and you still have to hold on through the landing

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-15 by the daily task: nine scenes, 29.5s, exact CFR via encode.py.',
      '14.1 is a stem ("…catches a legal pass and:") that hands off to 14.1.1 and 14.1.2, so scene 3 carries 14.1 and 14.1.1 together or the card ends mid-thought. There is no 14.1.3.',
      'Deliberately not covering 14.3 (caught it past the back of the end zone) — that is Lesson 13, drafted 2026-08-15 for the 18th.'
    ]
  },

  {
    id: 'reel-13',
    date: '2026-08-18',
    title: 'Caught it past the end zone? Walk it back.',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.6s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 13,
    duration: '~29s script / 29.6s cut',
    rules: ['14.3', '11.3.2.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-15'},
      content: {status: 'in-review', on: '2026-08-17'}
    },
    postedDate: null,
    folder: 'reel-13',
    source: 'content/reel-13/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Scoring)',
    video: 'reel13-caught-it-past-the-end-zone.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Caught it past the end zone? Walk it back." · kicker BEGINNER · LESSON 13 / 75'],
      ['2', "#1 IT ISN'T A TURNOVER", '"You keep the disc. You just move it." · footer cites 14.3'],
      ['3', 'Rules detail', 'Verbatim 14.3'],
      ['4', '#2 TO THE NEAREST POINT', '"Not where you caught it. Not where you stopped." · footer cites 14.3'],
      ['5', '#3 IT BEATS THE SIDELINE RULE', '"Out the back? Still the goal line." · footer cites 11.3.2.1'],
      ['6', 'Rules detail', 'Verbatim 11.3.2.1'],
      ['7', 'FIELD TIP', '"Walk out calmly and set your pivot"'],
      ['8', 'Closing', '"Lesson 13 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You're standing in the end zone holding the disc, and it isn't a goal. Now what?`,
      explanation: `Nothing bad has happened. It's not a turnover and you don't get a do-over. You walk to the nearest point on the goal line and set your pivot there. That's the whole procedure.`,
      example: `Two ways you end up here. You catch it just short and your momentum carries you three metres in. Or you go up for it and land with one foot on the goal line — the line isn't the end zone, so no goal. Same answer both times: nearest point on the line, plant your pivot, play on. It even beats the usual rule for leaving the field — drift out over the back endline and you still come back to the goal line, not to the spot where you crossed.`,
      cta: `Lesson 13 of 75 — new lesson daily.`
    },
    ig: `You're standing in the end zone holding the disc, and it isn't a goal. Now what?

Nothing bad has happened. It isn't a turnover and there's no do-over. You walk to the nearest point on the goal line, set your pivot there, and play carries on. That's the entire procedure, and it happens several times a game.

There are two common ways to end up there. You catch it just short of the line and your own momentum carries you in. Or you catch it airborne and land with one foot in and one foot on the goal line — the line belongs to the central zone, not the end zone, so it's a catch and not a score.

It also overrides the rule you'd normally use after leaving the field. Usually you come back on where you crossed the perimeter line; if you drifted out over the back of the end zone you were attacking, you go to the nearest point on the goal line instead. The rulebook writes that exception into the sideline rule itself.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `in the end zone, holding it, and it's not a goal 🥏

not a turnover. not a do-over. walk to the nearest point on the goal line, set your pivot, keep playing

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-17 by the daily task from the approved script. Eight scenes, exact CFR via encode.py; 29.57s. Awaiting content review.',
      'Direct sequel to Lesson 12: that one set out what a goal requires, this one is the "so what happens instead" half.',
      'Two rules, so eight scenes rather than nine — scenes 2 and 4 both foot to 14.3 with one citation card between them, and 11.3.2.1 gets its own card. A third topic block would have meant citing a rule outside this lesson\'s brief.',
      'The lesson\'s field line looks wrong and I did not use it. It says the stall count does not start until the pivot is established — true after a turnover (9.3.1), but this is not a turnover: play stays live and 9.3.2 lets the marker count against the pivot location while you are still walking to it. The field tip carries no stall-count claim. Suggest correcting the field line in content/lessons-1.json; flagging rather than editing, since the lesson JSONs are curriculum.'
    ]
  },

  {
    id: 'reel-14',
    date: '2026-08-19',
    title: 'Slowing down after the catch',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.6s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 14,
    duration: '~29s script / 29.6s cut',
    rules: ['18.2.1', '18.2.4.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-16'},
      content: {status: 'in-review', on: '2026-08-17'}
    },
    postedDate: null,
    folder: 'reel-14',
    source: 'content/reel-14/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Movement)',
    video: 'reel14-slowing-down-after-the-catch.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Slowing down after the catch" · kicker BEGINNER · LESSON 14 / 75'],
      ['2', '#1 AS QUICKLY AS POSSIBLE', `"A sprint doesn't buy extra metres." · footer cites 18.2.1`],
      ['3', 'Rules detail', 'Verbatim 18.2.1'],
      ['4', '#2 AND IN A STRAIGHT LINE', '"You may slow down. You may not curve." · footer cites 18.2.1'],
      ['5', '#3 THE WRONG SPOT IS A TRAVEL', '"Where you stop is where the pivot goes." · footer cites 18.2.4.1'],
      ['6', 'Rules detail', 'Verbatim 18.2.4 + 18.2.4.1'],
      ['7', 'FIELD TIP', '"Decelerate in a straight line"'],
      ['8', 'Closing', '"Lesson 14 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You caught it at a dead sprint. What you do in the next two seconds is a rule.`,
      explanation: `You have to reduce speed as quickly as possible, and you have to do it without changing direction, until you've established your pivot point. Where you come to a stop is where the pivot goes. That's it — two phrases carry the whole thing.`,
      example: `You catch it on a deep cut at full speed. Coasting an extra five metres because you were going fast isn't allowed — you slow as hard as you can. And drifting is the one nobody notices themselves doing: curling that deceleration towards the middle so you finish facing a better throwing angle is changing direction, and it puts your pivot somewhere it shouldn't be. The rulebook lists exactly that — a pivot at an incorrect location, from not slowing as quickly as possible or from changing direction — as a travel infraction.`,
      cta: `Lesson 14 of 75 — new lesson daily.`
    },
    ig: `You caught it at a dead sprint. What you do in the next two seconds is a rule.

After the catch you have to reduce speed as quickly as possible, without changing direction, until you've established a pivot point. Where you come to a stop is where the pivot goes. Two phrases carry the entire rule, and both of them do real work.

"As quickly as possible" means catching at speed doesn't buy you extra metres. You slow as hard as you actually can, not as hard as is convenient for the throw you already have in mind.

"Without changing direction" is the one most people break without realising. Curling your deceleration towards the middle so you finish facing a better angle is a change of direction, and it leaves your pivot somewhere it isn't allowed to be. The rulebook names that case directly: a pivot established at an incorrect location — including by not reducing speed as quickly as possible, or by changing direction after a catch — is listed among the travel infractions.

Nobody is measuring this with a tape. It's on you, which is the whole point.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `caught it at full sprint — the next two seconds are a rule 🥏

slow down as quickly as possible, and do it in a straight line. where you stop is where your pivot goes. curving as you slow is a travel

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-17 by the daily task from the approved script. Eight scenes, exact CFR via encode.py; 29.57s. Awaiting content review.',
      'Two rules, so eight scenes rather than nine — scenes 2 and 4 both foot to 18.2.1 with one citation card between them, and 18.2.4.1 gets its own card.',
      'Scene 6 cites 18.2.4 as the lead-in to 18.2.4.1. 18.2.4 is not in the lesson rules array, but 18.2.4.1 is a sub-clause and a fragment on its own; its parent supplies "A travel infraction occurs if:". Both strings are verbatim from rules.json, which is the point — writing that lead-in in my own words on a citation card would be an attribution failure.',
      'Deliberately stops short of what happens after the call. Travel is called and play does not stop, but that is Lesson 16 (18.2.5) and this lesson is not scoped for it.',
      'Pairs with Lesson 2, which established the pivot; this one is how you legally get to it.'
    ]
  },

  {
    id: 'carousel-post-3',
    date: '2026-08-20',
    title: 'Week two: seven more lessons',
    type: 'Carousel',
    typeDetail: '1080×1350 · 9 slides',
    pillar: 'Rules',
    difficulty: 'Mixed',
    lesson: null,
    rules: ['12.1', '12.1.1', '13.1.1.1', '11.3', '11.3.1', '11.3.2', '11.4', '11.6', '11.7', '11.2', '12.3', '14.1', '14.1.1', '14.1.2', '14.4', '14.3', '11.3.2.1', '18.2.1', '18.2.4.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-17'},
      content: {status: 'in-review', on: '2026-08-19'}
    },
    postedDate: null,
    folder: 'carousel-post-3',
    source: 'content/carousel-post-3/script-and-caption.md',
    sourceLesson: 'Weekly recap — no lesson consumed; recaps lessons 8-14',
    video: null,
    slides: [
      ['01_cover', 'Cover — THIS WEEK'],
      ['02_lesson8_catch_possession', 'Lesson 8 — A catch and possession are not the same thing'],
      ['03_lesson9_feet', 'Lesson 9 — Where your feet have to be'],
      ['04_lesson10_leaving_the_field', "Lesson 10 — You're allowed to leave the field"],
      ['05_lesson11_simultaneous_catch', 'Lesson 11 — Caught at the same time? Offence keeps it.'],
      ['06_lesson12_goals', 'Lesson 12 — What actually counts as a goal'],
      ['07_lesson13_past_the_end_zone', 'Lesson 13 — Caught it past the end zone? Walk it back.'],
      ['08_lesson14_slowing_down', 'Lesson 14 — Slowing down after the catch'],
      ['09_closing', `Closing — "That's fourteen of seventy-five."`]
    ],
    scenes: null,
    script: {
      hook: `Seven more lessons this week. Here's the whole set in one swipe.`,
      explanation: `What a catch actually is, where your feet have to be, leaving the field and coming back, two people catching it at once, what counts as a goal, what to do when you overshoot the end zone, and how to stop legally.`,
      example: `Most of week two is feet and edges — the bits of the game that decide possession without anyone throwing well or badly. Each slide carries its rule numbers so you can look any of it up yourself.`,
      cta: `Lessons 8 to 14 of 75 — new lesson daily.`
    },
    ig: `Week two, all in one place.

What a catch actually is, and why holding it isn't the same as possession. Where your feet have to be near the sideline. How you're allowed to leave the field and come back. What happens when two players catch it at the same time. What actually counts as a goal — and what to do when you end up in the end zone without one. And how to stop legally after catching at a sprint.

Most of this week is feet and edges: the parts of the game that quietly decide possession without anyone throwing well or badly.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `everything the daily reels covered this week, seven slides 🥏

catches, feet, sidelines, simultaneous catches, goals, overshooting the end zone, and stopping legally

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-17 by the daily task. Awaiting script review. Nine slides, cover + lessons 8-14 + closing.',
      'Recap block is lessons 8-14 — the next seven un-recapped lessons in curriculum order, continuing from carousel-post-2 lessons 1-7. Confirmed by Min-Yi on 2026-08-17 and now the documented rule in content/DAILY_RENDER_TASK.md and content/CAROUSEL_TEMPLATE.md, which previously said "the seven days ending that Thursday". That date-based window would have started at lesson 9 here, orphaning lesson 8, and would have put lesson 15 on a slide the same morning its own reel went live.',
      'Slide 7 does not use Lesson 13 field line. That line says the stall count does not start until the pivot is established, which is true after a turnover (9.3.1) but not here — reel-13 already flagged and dropped it. Takeaway drawn from that reel example beat instead, which DAILY_RENDER_TASK.md permits.',
      'Slide 5 uses Reel 11 corrected title, "Caught at the same time? Offence keeps it.", not the calendar original "Tie goes to the offence" — the reel was rebuilt on 2026-08-16 against the desk note that "tie" reads as a scoreline.',
      'Recap slides carry rule numbers but no rule text, by design — see content/CAROUSEL_TEMPLATE.md.'
    ]
  },

  {
    id: 'reel-15',
    date: '2026-08-20',
    title: 'Throwing on the run: the two-contact allowance',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.6s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 15,
    duration: '~29s script / 29.6s cut',
    rules: ['18.2.1.1', '18.2.4.2'],
    review: {
      script:  {status: 'pending', on: '2026-08-17'},
      content: {status: 'in-review', on: '2026-08-19'}
    },
    postedDate: null,
    folder: 'reel-15',
    source: 'content/reel-15/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Movement)',
    video: 'reel15-throwing-on-the-run.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Throwing on the run: the two-contact allowance" · kicker BEGINNER · LESSON 15 / 75'],
      ['2', '#1 NO PIVOT REQUIRED', '"You can catch it and throw it without ever stopping." · footer cites 18.2.1.1'],
      ['3', 'Rules detail', 'Verbatim 18.2.1.1 + 18.2.1.1.1 + 18.2.1.1.2'],
      ['4', '#2 TWO EXTRA CONTACTS, MAX', '"Catch, one, two — and the disc is already gone." · footer cites 18.2.1.1'],
      ['5', "#3 OTHERWISE IT'S A TRAVEL", '"Miss either condition and the allowance is off." · footer cites 18.2.4.2'],
      ['6', 'Rules detail', 'Verbatim 18.2.4 + 18.2.4.2'],
      ['7', 'FIELD TIP', `"Count the contacts, don't estimate them"`],
      ['8', 'Closing', '"Lesson 15 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You're allowed to throw it without ever stopping. There are exactly two conditions.`,
      explanation: `Catch it while you're running or jumping and you may release a pass without slowing down and without establishing a pivot at all. In exchange: you can't change direction or speed up before the release, and you get a maximum of two extra points of ground contact after the catch.`,
      example: `Count them rather than estimating. You catch it in the air, land on your left — that's one — land on your right, that's two, and the disc has to already be gone. A third contact is a travel however smooth it looked. And the direction half does just as much work: catching on the run and cutting inside to open a better lane breaks the allowance even if you release on contact two.`,
      cta: `Lesson 15 of 75 — new lesson daily.`
    },
    ig: `You're allowed to throw it without ever stopping. There are exactly two conditions.

Yesterday's lesson was the default: catch, slow down as fast as you can, plant a pivot. This is the exception written directly underneath it. If you catch the disc while running or jumping, you may release a pass without attempting to reduce speed and without establishing a pivot point at all — provided you meet both conditions the rulebook attaches to it.

First: you don't change direction or increase speed until the pass is released. Second: a maximum of two additional points of contact with the ground after the catch and before you throw.

Two contacts is not "two steps, then a throw". Count them. Catch airborne, land left — one — land right — two — and the disc is already gone. A third contact means the allowance no longer applies, and releasing a pass in breach of it is listed among the travel infractions by number.

The direction condition is the one people lose. Catching on the run and curving inside to open up a better lane breaks the allowance even if you got the throw away inside two contacts.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `you can throw without ever stopping — two conditions 🥏

no change of direction, no speeding up, and a maximum of two ground contacts after the catch. catch, one, two, and it's already gone

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-17 by the daily task. Awaiting script review.',
      'Direct sequel to Lesson 14, which is 18.2.1 — the default obligation to slow down and plant a pivot. 18.2.1.1 is the exception sitting immediately under it in the rulebook.',
      'Two rules, so eight scenes rather than nine — scenes 2 and 4 both foot to 18.2.1.1 with one citation card between them, and 18.2.4.2 gets its own card.',
      'Scene 3 uses the parent-plus-children form: 18.2.1.1 ends on "provided that:" and its two conditions live in 18.2.1.1.1 and 18.2.1.1.2, so the card is incomplete without them. All three strings verbatim from rules.json.',
      'Scene 6 cites 18.2.4 as the lead-in to 18.2.4.2, exactly as reel-14 used it for 18.2.4.1. 18.2.4.2 is a fragment on its own; its parent supplies "A travel infraction occurs if:". Writing that lead-in in my own words on a citation card would be an attribution failure.',
      'The lesson field line is used in half. Its first sentence borrows "continuation offence", which has a specific and different meaning in the rulebook (16.2, play carrying on after a call) and nothing to do with the two-contact allowance. Dropped that sentence, kept the second half. Suggest correcting content/lessons-1.json; flagging rather than editing, since the lesson JSONs are curriculum.',
      'Deliberately stops short of what happens once travel is called — that is Lesson 16 (18.2.5) and it lands the next day.'
    ]
  },

  {
    id: 'reel-16',
    date: '2026-08-21',
    title: `Travel: the call that doesn't stop play`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 16,
    duration: '~29s script / 29.5s cut',
    rules: ['18.2.5', '18.2.5.1', '18.2.5.2', '18.2.6', '18.2.7', '18.2.8', '15.10'],
    review: {
      script:  {status: 'pending', on: '2026-08-18'},
      content: {status: 'in-review', on: '2026-08-20'}
    },
    postedDate: null,
    folder: 'reel-16',
    source: 'content/reel-16/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Calls)',
    video: 'reel16-travel-doesnt-stop-play.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', `"Travel doesn't stop play. Two things make it stop." · kicker BEGINNER · LESSON 16 / 75`],
      ['2', '#1 THE DEFAULT: NOBODY FREEZES', '"Reset the pivot, take the paused count, carry on." · footer cites 18.2.5 · 18.2.5.1 · 18.2.5.2'],
      ['3', 'Rules detail', 'Verbatim 18.2.5 + 18.2.5.1 + 18.2.5.2'],
      ['4', '#2 STOPPER ONE — YOU THREW IT ANYWAY', `"Complete a pass before you've fixed the pivot and it comes back." · footer cites 18.2.6 · 18.2.7`],
      ['5', 'Rules detail', 'Verbatim 18.2.6 + 18.2.7'],
      ['6', '#3 STOPPER TWO — SOMEBODY CONTESTS', '"Disagree with the disc still in your hand and play halts." · footer cites 15.10 · 18.2.8'],
      ['7', 'Rules detail', 'Verbatim 15.10 + 18.2.8'],
      ['8', 'FIELD TIP', '"If you are not sure, fix the pivot and keep playing"'],
      ['9', 'Closing', '"Lesson 16 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Travel doesn't stop play. That's the half everyone learns. Almost nobody learns the two things that do stop it.`,
      explanation: `The default first. A travel is an infraction, so when it's called, nothing halts. You go back and establish your pivot where the defender indicates, without delay, and while you're doing that the stall count is paused and you may not throw. Pivot's right, count resumes, game carries on.`,
      example: `Now the two exceptions. One — you throw anyway and complete it before fixing the pivot. The defence can call a travel violation, and that does stop play: disc back to you, back to where you stood, restart with a check. Throw it incomplete instead and play just continues, turnover stands. Two — you contest the travel while the disc is still in your hand. Play stops right there. So "travel never stops play" is half a rule.`,
      cta: `Lesson 16 of 75 — new lesson daily.`
    },
    ig: `Travel doesn't stop play. That's the half everyone learns. Almost nobody learns the two things that do stop it.

Start with the default, because it is the default. A travel is an infraction, not a violation, and the rulebook says it plainly: after an accepted travel infraction is called, play does not stop. No freeze, no check. You establish your pivot at the correct location — the one the player who called it indicates — and you do it without delay. Meanwhile the stall count is paused and you may not throw until you're back in the right place. Then the count resumes and the game carries on.

Stopper one: you throw it anyway. If you complete a pass after the travel but before correcting the pivot, the defensive team may call a travel violation. Play stops. The disc is returned to you, you go back to the location you occupied when the infraction happened, and play restarts with a check. Note the asymmetry — throw an incomplete pass in the same situation and nothing is rewound. Play continues and the turnover stands.

Stopper two: somebody contests. If you disagree that the travel occurred, or don't think it's a correct call, you may call "Contest". And after a contested travel infraction where you haven't released a pass, play stops. This is the one that catches people out, because it's the same word "travel" producing the opposite outcome — and it's usually the thrower's own contest that halts the game they thought couldn't be halted.

So the useful version isn't "travel doesn't stop play". It's: travel doesn't stop play unless somebody throws through it, or somebody disagrees about it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `"travel doesn't stop play" is half a rule 🥏

true by default — reset your pivot, count is paused, carry on. but TWO things do stop it: completing a pass before you've fixed the pivot (defence calls a travel violation, disc comes back with a check), and contesting the call with the disc still in your hand

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Cut v2 rendered 2026-08-20. Nine scenes, exact CFR via encode.py; 29.50s. The on-screen kickers now match the approved script exactly.',
      'v1 had shortened the scene kickers to fit the 900px text column, because the script-table wordings measure 1044-1156px tracked at 34px. Min-Yi\'s call on 2026-08-20 was to shrink the type instead of the words, so render_v3.py now auto-fits: largest integer size up to 34px that fits, floor at 80% (27px), hard failure below that rather than an overflow. Scene 2 renders at 34px, scene 6 at 29px, scene 4 at 28px. v1 archived as reel16-travel-doesnt-stop-play.v1.mp4.',
      'Redrafted 2026-08-18 (v2 script) against the note that the reel taught the infraction half of travel and left the violation half as a footnote. Script v1 archived as script-and-caption.v1.md; round logged in script-feedback.md.',
      'Two rules stop play after a travel: 18.2.6 (completed pass thrown before the pivot is corrected) and 18.2.8 (contested travel, no pass released). 18.2.8 was in no lesson at all before this redraft — zero rules arrays across all 75.',
      'Cut the 15.5.1 beat from v1. Lesson 22 already carries 15.5 and 15.5.1, so that card duplicated a scheduled lesson and was the cheapest thing to trade for 18.2.8. Reel stays at nine scenes.',
      'Cover headline is now "Travel doesn\'t stop play. Two things make it stop." The calendar row title is unchanged, per the reel-11 precedent — apply_additions keys rows on date + title, so renaming would add a duplicate row.',
      'Scene 7 cites 15.10 as the lead-in to 18.2.8, which opens "After a contested travel infraction..." and never defines contesting. Same parent-supplies-the-stem precedent as reel-14 and reel-15.',
      '18.2.5.3 is in the lesson rules array but not on a card — marker courtesy detail, least load-bearing clause, and carding it would put four strings on scene 3.',
      'lessons-1.json travel now teaches contesting too - a fourth body bullet added 2026-08-18, so the website lesson explains 18.2.8 rather than just citing it.',
      'Open: the lesson quiz still reinforces the half-rule. Its why reads "Travel is an infraction. Play does not stop...", which is the exact framing this redraft widens. A replacement is proposed in script-and-caption.md; not applied, since only the body bullet was approved.',
      'Contested travel closes the arc that lesson 14 (18.2.1) and lesson 15 (18.2.1.1) opened.'
    ]
  },

  {
    id: 'reel-17',
    date: '2026-08-22',
    title: 'Disc space: give the thrower room',
    type: 'Reel',
    typeDetail: '1080×1920 · 28.3s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 17,
    duration: '~29s script / 28.3s cut',
    rules: ['18.1.1.3'],
    review: {
      script:  {status: 'pending', on: '2026-08-19'},
      content: {status: 'in-review', on: '2026-08-20'}
    },
    postedDate: null,
    folder: 'reel-17',
    source: 'content/reel-17/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Marking)',
    video: 'reel17-disc-space.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Disc space: give the thrower room" · kicker BEGINNER · LESSON 17 / 75'],
      ['2', '#1 ONE DISC DIAMETER', '"About 27 cm. Roughly a forearm." · footer cites 18.1.1.3'],
      ['3', 'Rules detail', 'Verbatim 18.1.1 + 18.1.1.3'],
      ['4', '#2 MEASURED TO THE TORSO', `"You can reach. You can't crowd." · footer cites 18.1.1.3`],
      ['5', '#3 UNLESS THEY CLOSED IT', '"If the thrower moved into you, no infraction." · footer cites 18.1.1.3'],
      ['6', 'FIELD TIP', `"Mark at a forearm's distance"`],
      ['7', 'Closing', '"Lesson 17 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `This is the most-called infraction in the sport, and the easiest one to never commit.`,
      explanation: `No part of a defender may be closer than one disc diameter to the thrower's torso. A disc is about 27 centimetres across — so, roughly a forearm. Stand any closer than that and the thrower can call disc space.`,
      example: `Two details do most of the work. First, it's measured to the torso, not to the disc and not to the arms — you're allowed to reach, you're just not allowed to crowd the body. Second, if the gap closed only because the thrower pivoted into you, it isn't an infraction. But that exception is narrow, and it's the marker's job to hold the space, not the thrower's job to protect it.`,
      cta: `Lesson 17 of 75 — new lesson daily.`
    },
    ig: `The most-called infraction in the sport, and the easiest one to never commit.

Disc space. No part of a defender may be closer than one disc diameter to the thrower's torso. A disc is about 27 centimetres across, which is roughly a forearm — hold that much air between you and the person with the disc and you have essentially solved this rule for good.

Two details are where the arguments come from.

It is measured to the torso. Not to the disc, not to your hands, not to the disc's edge. You are allowed to reach — a mark that stretches an arm across the throwing lane is doing its job. What you may not do is bring your body in against theirs.

And it isn't automatic. If the gap closes solely because the thrower moved into you, no infraction occurred — the rulebook says so directly. That covers the standing marker who gets pivoted into. It does not cover drifting in and then blaming the pivot. The onus sits with the marker to hold the space, not with the thrower to defend it.

Sixteen lessons in, this is the first one that's about you when you don't have the disc.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `one disc diameter. about 27 cm. roughly a forearm 🥏

measured to the torso, not the disc — you can reach, you just can't crowd. and if the thrower pivots into you, that one's not on you

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-20 from the approved script. Seven scenes (single-rule lesson), exact CFR via encode.py; 28.33s. 18.1.1 and 18.1.1.3 quoted verbatim from rules.json.',
      'First lesson from content/lessons-2.json — lessons 1-16 exhausted lessons-1.json. The curriculum turns from the thrower\'s obligations to the marker\'s.',
      '"About 27 cm" is the lesson\'s gloss, not the rulebook\'s. 18.1.1.3 says "one disc diameter" and never names a measurement, so the number stays in the script body and captions and never appears on a citation card.',
      'The exception is stated narrowly on purpose: 18.1.1.3 turns on "solely" — a marker who has been closing the gap and then gets pivoted into is not covered.',
      'Scene 3 cards 18.1.1 as the lead-in to 18.1.1.3, the same parent-plus-child pattern reels 14 and 15 used for 18.2.4. Both strings verbatim from rules.json.',
      'Deliberately does not cover the marking count (Lesson 19) or general call procedure (Lesson 21).'
    ]
  },

  {
    id: 'reel-18',
    date: '2026-08-23',
    title: 'Straddle and wrapping',
    type: 'Reel',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 18,
    rules: ['18.1.1.2', '18.1.1.4', '18.1.3'],
    review: {
      script:  {status: 'pending', on: '2026-08-20'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: 'reel-18',
    source: 'content/reel-18/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Marking)',
    video: null,
    slides: null,
    scenes: null,
    script: {
      hook: `Two more ways your mark can be illegal without you ever touching anybody.`,
      explanation: `Straddle first. Draw an imaginary line between your feet. If that line passes within one disc diameter of the thrower's pivot point, that's a straddle — in plain terms, don't stand with their pivot foot between your legs.`,
      example: `Wrapping is the same idea with arms. If a line between your hands or arms comes within a disc diameter of their torso, or any part of you is directly above the pivot point, that's wrapping. And here's the part people miss: neither one stops play. You fix your position, and the count resumes at the last number fully said, minus one.`,
      cta: `Lesson 18 of 75 — new lesson daily.`
    },
    ig: `Two more ways your mark can be illegal without you ever touching anybody.

Straddle. Draw an imaginary line between the marker's feet. If that line comes within one disc diameter of the thrower's pivot point, it's a straddle. The plain-English version: don't stand with their pivot foot between your legs. It's an easy one to commit by accident, because straddling the pivot feels like good, close defence right up until it's called.

Wrapping. The same idea, moved to the arms. If a line between your hands or arms comes within a disc diameter of the thrower's torso, that's wrapping — and so is having any part of your body above their pivot point. A mark can be wide and it can be active. What it can't be is closed around somebody.

Both carry the same "caused solely by movement of the thrower" exception that disc space does, so a marker who is standing still and gets pivoted into hasn't committed anything.

And the bit that catches people: neither of these stops play. They're marking infractions. The marker corrects their position and the stall count resumes at the number last fully uttered before the call, minus one. Not from zero, and not from where it was — one lower. That single-number reset is the whole consequence, which is why it pays to set a legal mark before the count starts rather than argue about it at six.

Together with Lesson 17, that's the full 18.1.1 shape: how far away, where your feet are, where your arms are.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `your mark can be illegal without touching anyone 🥏

straddle = a line between your feet comes within a disc diameter of their pivot point. wrapping = a line between your arms does the same to their torso

neither stops play. fix your position and the count resumes at the last number fully said, minus one

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-20 by the daily task to cover 2026-08-23. Awaiting script review.',
      'Completes the marking-position trio with Lesson 17: disc space (18.1.1.3) is how far away, straddle (18.1.1.2) is where your feet are, wrapping (18.1.1.4) is where your arms are. All three are children of the same 18.1.1 list.',
      '18.1.3 earns its own pair rather than a footnote. It is the only clause here with a consequence attached — the other two describe shapes — and it is the first time the curriculum states the stall-count resume rule for any marking infraction.',
      'The "solely" exception is in the caption but gets no card of its own. 18.1.1.4 carries that sentence in its own text, which scene 5 quotes verbatim; 18.1.1.2 does not carry it, so nothing on screen should imply all three clauses are worded identically.',
      'Scenes 3 and 5 use the parent-plus-child form with 18.1.1 as the stem, the same pattern reel 17 used for 18.1.1.3.',
      'Deliberately does not cover who may call it or what Contest does — Lesson 21 is foul/infraction/violation and Lesson 22 is who calls what.',
      'Next Thursday, 2026-08-27, is due a recap carousel for the next un-recapped block (lessons 15-21). Lesson 21 is not yet drafted and several of the block reels have not posted, so expect a short recap of what has actually posted, or a skip with a note.'
    ]
  }
];
