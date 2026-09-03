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
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 18,
    duration: '~29s script / 29.5s cut',
    rules: ['18.1.1.2', '18.1.1.4', '18.1.3'],
    review: {
      script:  {status: 'pending', on: '2026-08-20'},
      content: {status: 'in-review', on: '2026-08-22'}
    },
    postedDate: null,
    folder: 'reel-18',
    source: 'content/reel-18/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Marking)',
    video: 'reel18-straddle-and-wrapping.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Straddle and wrapping" · kicker BEGINNER · LESSON 18 / 75'],
      ['2', '#1 STRADDLE: THE FEET', `"Don't stand with their pivot foot between your legs." · footer cites 18.1.1.2`],
      ['3', 'Rules detail', 'Verbatim 18.1.1 + 18.1.1.2'],
      ['4', '#2 WRAPPING: THE ARMS', '"Wide is fine. Around them is not." · footer cites 18.1.1.4'],
      ['5', 'Rules detail', 'Verbatim 18.1.1 + 18.1.1.4'],
      ['6', '#3 THE COUNT DROPS ONE', `"Play doesn't stop. Fix your position and count from lower." · footer cites 18.1.3`],
      ['7', 'Rules detail', 'Verbatim 18.1.3'],
      ['8', 'FIELD TIP', '"Feet outside their stance, arms wide but not enveloping"'],
      ['9', 'Closing', '"Lesson 18 of 75." · Follow @learn.ultimatefrisbee']
    ],
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
      'Re-rendered 2026-08-22 against the rejection "The WFDF reference is blocking the content". The citation sits at a fixed y, so a six-line body on scene 2 landed on top of it — 17px of ink overlap, while every element stayed inside the margins, which is why v1 measured clean. render_v3.py now auto-fits the body paragraph the way it already auto-fits the kicker: scene 2 renders at 31px over five lines, scene 4 at 35px, scene 6 unchanged at 36px. No word of the approved script changed. 29.50s, longest dull-orange run 0.20s.',
      'tools/check_layout.py now measures collisions on real ink boxes as well as margins. Silent across reels 8-17 except reel-15 scene 2, which shipped with the same defect at a smaller overlap — already posted, flagged for information only.',
      'Drafted 2026-08-20 by the daily task to cover 2026-08-23; first rendered 2026-08-21. Nine scenes, exact CFR via encode.py, 29.50s.',
      'Completes the marking-position trio with Lesson 17: disc space (18.1.1.3) is how far away, straddle (18.1.1.2) is where your feet are, wrapping (18.1.1.4) is where your arms are. All three are children of the same 18.1.1 list.',
      '18.1.3 earns its own pair rather than a footnote. It is the only clause here with a consequence attached — the other two describe shapes — and it is the first time the curriculum states the stall-count resume rule for any marking infraction.',
      'The "solely" exception is in the caption but gets no card of its own. 18.1.1.4 carries that sentence in its own text, which scene 5 quotes verbatim; 18.1.1.2 does not carry it, so nothing on screen should imply all three clauses are worded identically.',
      'Scenes 3 and 5 use the parent-plus-child form with 18.1.1 as the stem, the same pattern reel 17 used for 18.1.1.3.',
      'Deliberately does not cover who may call it or what Contest does — Lesson 21 is foul/infraction/violation and Lesson 22 is who calls what.',
      'Next Thursday, 2026-08-27, is due a recap carousel for the next un-recapped block (lessons 15-21). Lesson 21 is not yet drafted and several of the block reels have not posted, so expect a short recap of what has actually posted, or a skip with a note.'
    ]
  },

  {
    id: 'reel-19',
    date: '2026-08-24',
    title: 'Fast count',
    type: 'Reel',
    typeDetail: '1080×1920 · 28.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 19,
    duration: '~28s script / 28.5s cut',
    rules: ['18.1.1.1', '18.1.4', '18.1.4.4'],
    review: {
      script:  {status: 'pending', on: '2026-08-21'},
      content: {status: 'in-review', on: '2026-08-22'}
    },
    postedDate: null,
    folder: 'reel-19',
    source: 'content/reel-19/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Marking)',
    video: 'reel19-fast-count.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Fast count" · kicker BEGINNER · LESSON 19 / 75'],
      ['2', '#1 FIVE WAYS TO COUNT WRONG', '"Too quick is only one of them." · footer cites 18.1.1.1'],
      ['3', 'Rules detail', 'Verbatim 18.1.1.1 + all five children'],
      ['4', '#2 IF IT KEEPS HAPPENING, ESCALATE', '"A pattern of repeats can be called as a marking violation instead." · footer cites 18.1.4, 18.1.4.4'],
      ['5', 'Rules detail', 'Verbatim 18.1.4 + 18.1.4.4'],
      ['6', 'FIELD TIP', `"Calling fast count isn't rude. It's the mechanism."`],
      ['7', 'Closing', '"Lesson 19 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Under pressure, almost every marker counts too fast. That is a rule, and you are allowed to say so.`,
      explanation: `A fast count isn't only counting too quickly. The rulebook lists five ways to get it wrong: counting in under one-second intervals, starting or continuing the count illegally, not saying "Stalling", not starting from the correct number, and not reducing the count when required. Any one of them is a fast count.`,
      example: `So you call it, and the count gets fixed. But say the same marker keeps racing anyway. You are not stuck making that call forever — where it is a pattern rather than a one-off, the rules let you call a marking violation instead, and a violation stops play.`,
      cta: `Lesson 19 of 75 — new lesson daily.`
    },
    ig: `Under pressure, almost every marker counts too fast. That's a rule, and you're allowed to say so.

It isn't only about speed. The rulebook lists five separate ways a count goes wrong: counting in under one-second intervals, starting or continuing the count illegally, failing to say "Stalling", starting from the wrong number, and failing to reduce or reset the count when required. Any one of them is a fast count. The last two are the ones people never think to call, because they don't feel like speed — a marker who picks the count back up at seven when it should be five hasn't rushed anything, and has still committed the same infraction.

The call itself is cheap. A fast count is a marking infraction, so nothing stops. You say "fast count", the marker corrects the number, and the point carries on around you.

And if it keeps happening, you have somewhere to go. You aren't stuck making the same call every stall. Where the problem is a pattern of repeated marking infractions rather than a single miscount, the rules let you call a marking violation instead — and a violation does stop play. That's a deliberate ladder: the light call first, the heavy one when the light one isn't working.

Worth saying plainly: making this call isn't rude, and it isn't a complaint. It's the designed mechanism. Markers genuinely cannot hear their own tempo — under pressure, at a real stall count, almost nobody can. The call exists because the sport assumes you'll make it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `your marker is counting too fast. say something 🥏

five ways to count wrong: under one-second intervals, starting the count illegally, not saying "stalling", starting from the wrong number, not reducing the count when required

call "fast count" and play carries on. if it's a pattern, call a marking violation instead — that one stops play

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-21, rendered 2026-08-22. Seven scenes, exact CFR via encode.py; 28.53s. 18.1.1.1 with all five children, and 18.1.4 + 18.1.4.4, quoted verbatim from rules.json.',
      'Scene 4 renders its body at 29px, the 80% floor of fit_body(). Its headline runs to four lines at 66px, which pushes the paragraph down far enough that nothing larger clears the citation. It fits and it is legible, but it is the tightest body in the catalogue — worth an eye on review. The alternative was rewording an approved headline, which is not something the pipeline does.',
      'Seven scenes, not nine. The lesson cites two rule groups, so it gets two topic/rules pairs — the same shape as reels 11 and 17. Padding to three would mean either a card without a citation or a citation the lesson\'s rules array does not carry.',
      'Scene 3 uses 18.1.1.1 itself as the stem rather than 18.1.1, because 18.1.1.1\'s own text ("Fast Count" – the marker:) is the sentence its five children complete. Reels 17 and 18 stemmed from 18.1.1 because their clauses were siblings of this one, not children of it.',
      'Five children on one card is the densest rules slide drawn so far. A layout dry-run measures it at 1144 of the 1310px budget, with no kicker engaging the auto-fit floor.',
      'The reset behaviour is deliberately not carded. "Play does not stop and the count resumes one lower" is 18.1.3, which reel 18 carded yesterday and which this lesson\'s rules array does not list. It stays in the spoken script, caption and field tip, where it needs no citation chip.',
      '18.1.4 is quoted with only its 18.1.4.4 child, matching the lesson\'s rules array. The stem lists four triggers and the caption refers to them in general terms, so nothing on screen claims a number the lesson did not source.',
      'First escalation lesson in the curriculum — the infraction to violation ladder appears here for the first time. Introduced as a mechanism, not explained in full: Lesson 21 is foul/infraction/violation and Lesson 22 is who may call what.',
      'Thursday 2026-08-27 is due a recap carousel for lessons 15-21. Lessons 20 and 21 are not drafted and lessons 18-19 have not posted, so that block will not be complete; expect a short recap of what has posted, or a skip with a note.'
    ]
  },

  {
    id: 'reel-20',
    date: '2026-08-25',
    title: 'Double team: the three-metre rule',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 20,
    duration: '~29s script / 29.5s cut',
    rules: ['18.1.1.5', '18.1.1.5.1', '18.1.1.5.2', '15.5.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-22'},
      content: {status: 'in-review', on: '2026-08-22'}
    },
    postedDate: null,
    folder: 'reel-20',
    source: 'content/reel-20/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Marking)',
    video: 'reel20-double-team.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Double team: the three-metre rule" · kicker BEGINNER · LESSON 20 / 75'],
      ['2', '#1 INSIDE THREE METRES', '"A second defender that close to the pivot is illegal." · footer cites 18.1.1.5'],
      ['3', 'Rules detail', 'Verbatim 18.1.1 + 18.1.1.5'],
      ['4', '#2 THE ZONE EXCEPTION', `"Unless they're actually guarding somebody else." · footer cites 18.1.1.5.1, 18.1.1.5.2`],
      ['5', 'Rules detail', 'Verbatim 18.1.1.5 + 18.1.1.5.1 + 18.1.1.5.2'],
      ['6', '#3 ANYONE CAN CALL IT', '"Any offensive player, not just the thrower." · footer cites 15.5.1'],
      ['7', 'Rules detail', 'Verbatim 15.5 + 15.5.1'],
      ['8', 'FIELD TIP', `"In a zone, watch for the poacher who isn't guarding anyone"`],
      ['9', 'Closing', '"Lesson 20 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Two defenders on the thrower is illegal. But the exception carries all the weight, and it's the reason zone defence exists.`,
      explanation: `Any defender who isn't the marker, standing within three metres of the thrower's pivot point, is a double team. Three metres is about ten feet. It doesn't matter whether they're doing anything with their hands — the position on its own is the infraction.`,
      example: `Unless they're also guarding another offensive player. Then they can stand right there, and they're allowed to reach for the throw, as long as they keep guarding that other player. And simply running through the area on your way somewhere isn't a double team either. One more thing most people don't know: any offensive player can make this call. Not just the thrower.`,
      cta: `Lesson 20 of 75 — new lesson daily.`
    },
    ig: `Two defenders on the thrower is illegal. But the exception carries all the weight, and it's the reason zone defence is legal at all.

The rule itself is a distance. Any defensive player other than the marker who comes within three metres of the thrower's pivot point — about ten feet — without also guarding another offensive player is double teaming. Note what's missing from that sentence: nothing about hands, nothing about intent, nothing about whether they're trying to block the throw. The position is the infraction on its own.

The exception is where the sport actually lives. A defender who is genuinely guarding someone else may stand in that zone, and may attempt to stop the pass, provided they keep guarding that other player. Every zone defence you've ever seen depends on this clause. And merely running across the area — clearing through, chasing a cutter, getting somewhere — is explicitly not a double team.

Which makes this a judgement about someone else. Almost every other marking call is about the marker in front of you. This one asks a question about a player behind you: is that second defender guarding anyone? If the answer is no, it's a double team no matter how still they're standing.

And unusually, you don't have to be the thrower to say so. In general only the thrower may claim an infraction, but double team is one of two carve-outs — any offensive player can call it. So if you're a cutter watching a poacher drift in with nobody to cover, that call is yours to make. It's a marking infraction, so nothing stops: the defender backs out, the count resumes one lower, and the point carries on.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `second defender standing on your thrower? that's a double team 🥏

within three metres of the pivot, not guarding anyone else = illegal. doesn't matter what their hands are doing

BUT if they are guarding someone else they can stand there and even go for the block. that's why zone defence is legal

and any offensive player can call it — you don't have to be the thrower

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted and rendered 2026-08-22. Nine scenes, exact CFR via encode.py; 29.50s. 18.1.1 + 18.1.1.5, 18.1.1.5 + 18.1.1.5.1 + 18.1.1.5.2, and 15.5 + 15.5.1 quoted verbatim from rules.json. Bodies auto-fit at 32px, 34px and 36px; all three kickers at the standard 34px.',
      'Nine scenes. Three rule groups — the definition, the two carve-outs, and who may call it — so three topic/rules pairs, the same shape as reels 16 and 18.',
      'Scene 5 re-states 18.1.1.5 as its own stem before its two children, because 18.1.1.5.1 and 18.1.1.5.2 both begin mid-thought and neither names the three-metre zone it is carving out of. Reel 18 set the precedent for repeating a stem across two cards.',
      'Scene 7 carries 15.5 as a stem only. 15.5.1 opens with "However", and alone it reads as though double team were the only infraction anyone can call. 15.5 is not in the lesson rules array and is on the card purely as the sentence 15.5.1 contradicts — the same treatment 18.1.1 gets.',
      'The count-minus-one behaviour is not carded. 18.1.3 applies but is not in this lesson rules array and reel 18 carded it two days ago; it stays in the caption, where it needs no citation chip.',
      '"About ten feet" is a spoken gloss, not a quotation. The rule says three metres and the card says three metres.',
      'The travel half of 15.5.1 is on the card because the text is verbatim, but the script does not chase it. Travel was lesson 16 and re-explaining who may call it here would pull the reel in two directions.',
      'Layout dry-run of all nine scenes: clean, densest slide 1192 of the 1310px budget; all three kickers render at the standard 34px with no auto-fit shrink. Projected duration 30.0s.',
      'Closes out the marking block (lessons 17-20). Lesson 21 moves to foul / infraction / violation, which is where the general shape of calls gets explained properly.',
      'Thursday 2026-08-27 is still due a recap carousel for the next un-recapped block, lessons 15-21. As of this draft lessons 15-16 have posted, 17 posts today, 18-20 are queued and 21 is not drafted; expect a short recap of what has posted, or a skip with a note.'
    ]
  },

  {
    id: 'reel-21',
    date: '2026-08-26',
    title: `Foul, infraction, violation — what's the difference?`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 21,
    duration: '~29s script / 29.5s cut',
    rules: ['15.1', '15.2', '15.3', '15.6'],
    review: {
      script:  {status: 'pending', on: '2026-08-23'},
      content: {status: 'in-review', on: '2026-08-25'}
    },
    postedDate: null,
    folder: 'reel-21',
    source: 'content/reel-21/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Calls)',
    video: 'reel21-foul-infraction-violation.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', `"Foul, infraction, violation — what's the difference?" · kicker BEGINNER · LESSON 21 / 75`],
      ['2', '#1 A FOUL IS CONTACT', `"If nobody touched anybody, it isn't a foul." · footer cites 15.1`],
      ['3', 'Rules detail', 'Verbatim 15.1'],
      ['4', '#2 PLAY KEEPS GOING', `"Infractions are marking and travel breaches — and they don't stop play." · footer cites 15.2`],
      ['5', 'Rules detail', 'Verbatim 15.2'],
      ['6', '#3 EVERYTHING ELSE', `"Every other breach is a violation, and \"Violation\" is a legal call on its own." · footer cites 15.3, 15.6`],
      ['7', 'Rules detail', 'Verbatim 15.3 + 15.6'],
      ['8', 'FIELD TIP', `"Hear a call you don't recognise? Stop — unless it was travel or a marking call"`],
      ['9', 'Closing', '"Lesson 21 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Foul, infraction, violation. Three words that get used as if they mean the same thing, and one of them is the reason play sometimes doesn't stop.`,
      explanation: `A foul is contact — non-minor contact between players on opposing teams. An infraction is narrower than most people assume: marking breaches and travel, and nothing else. A violation is every other breach of the rules.`,
      example: `The difference you feel on the field is what happens next. Infractions don't stop play — the rulebook says so in the same sentence that defines them. Someone calls travel, the disc keeps moving. A foul or a violation stops everything until it's sorted out. And if you can see something is wrong but can't name it, any opposing player can just call "Violation" — that's a legitimate call by itself.`,
      cta: `Lesson 21 of 75 — new lesson daily.`
    },
    ig: `Foul, infraction, violation. Three words used as if they're interchangeable, and one of them is the reason play sometimes doesn't stop.

A foul is contact. Specifically, a breach caused by non-minor contact between two or more opposing players. That's the whole definition. Contact between teammates isn't a foul. Something unfair that nobody touched anybody over isn't a foul either — it's one of the other two.

An infraction is much narrower than people assume. It is a marking breach or a travel breach. That's it, and that short list is doing a lot of work, because the same sentence that defines an infraction also says infractions do not stop play. This is why "travel" gets shouted and the disc keeps moving, and why a fast count or a disc space call is fixed on the fly instead of resetting the point.

A violation is everything else. Every other breach of the rules falls here — and any opposing player may claim one, by naming it or simply by calling "Violation".

Which makes that last part the most useful thing in this lesson. You don't need the right word to make a correct call. If you can see a breach and can't name it, "Violation" is a legal call in itself. Knowing the vocabulary is worth having; not knowing it is not a reason to say nothing.

The one to memorise: everything stops except marking calls and travel.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `foul, infraction, violation — not the same thing 🥏

foul = non-minor contact between opposing players

infraction = marking breach or travel. ONLY those two. and infractions don't stop play

violation = every other breach. any opposing player can call it

can't name what you just saw? "Violation" is a legal call on its own

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'v2 rendered 2026-08-25 against the 2026-08-24 rejection: "On slide 6, there seems to be a typo without the opening \" for the Violation." It was not a typo — the script and the SVG both carried both quotes. ImageMagick 6 lowers each <text> element into an MVG text primitive whose payload is itself double-quoted, and a double-quote at the start of the character data collides with that opening delimiter and is dropped. Slide 6 line 3 is the first line in 21 reels to begin with one. render_v3.py gained _payload(), which wraps a payload starting with &quot; in a <tspan>; every other element emits byte-identical SVG. No word of the approved script changed. 29.53s, layout 0 problems, dull-orange run 0.20s. v1 archived as reel21-foul-infraction-violation.v1.mp4.',
      'Drafted 2026-08-23, script approved same day, rendered 2026-08-24. Nine scenes, exact CFR via encode.py; 29.53s. Layout clean at max_y 1210 of 1310 with no collisions; longest sustained dull-orange run 0.20s against a 0.45s threshold. All three kickers at the standard 34px; bodies auto-fit at 35, 36 and 35px. No word of the approved script was changed to make anything fit.',
      'Planned as nine scenes, the standard three-pair shape (reels 16, 18, 20): cover, three explainer/rules-card pairs for foul, infraction and violation, a field tip, and the closing card.',
      'Scenes 3 and 5 are single-rule cards. 15.1 and 15.2 are each one complete sentence with their own subject, so neither needs the parent stem the 18.1.1 children required on reels 17-20. Scene 7 carries 15.3 and 15.6 together because 15.3 is a definition with no consequence attached and 15.6 is the sentence that gives it one.',
      '"Fouls and violations stop play" is the lesson framing and is not a single quotable sentence. What the rulebook states outright is the negative: 15.2 says infractions do not stop play. 15.7 then describes how players must communicate a stoppage "when a foul or violation call is made that stops play". The reel teaches the asymmetry but only 15.2 half of it is carded — no citation card claims more than the text it quotes. 15.7 is not in the lesson rules array and stays uncarded.',
      '15.4 and 15.5 are deliberately absent. Who may claim a foul and who may claim an infraction are lesson 22 subject matter. 15.6 appears here only because it is what gives 15.3 its consequence, and because the "or Violation" clause is the lesson practical payoff.',
      'Correction to the draft note: 15.1 does have a child, 15.1.1 (intentional minor contact is a violation, not a foul). It is simply not in the lesson rules array, so it stays uncarded — a deliberate omission, not an absence. 15.2, 15.3 and 15.6 are genuinely leaf rules, so scene 3 cards 15.1 alone.',
      'Kickers are 18-20 characters each, well inside the 900px column at the standard 34px. Nothing here engages fit_kicker().',
      'First lesson of the calls block. Lessons 17-20 taught four specific marking breaches; this one explains the vocabulary those breaches belong to, and is the prerequisite for lesson 22 (who is allowed to make which call).',
      'Thursday 2026-08-27 recap covers the full block, lessons 15-21, drafted 2026-08-24 as carousel-post-4. The prediction in this draft (a short 15-20 recap) was wrong: it read "already posted" as of the drafting date, but the test that matters is the carousel own post date. Reels 19, 20 and 21 are queued 24, 25 and 26 August, all ahead of the 27th, and carousel-post-3 was drafted the same way — it shipped lessons 8-14 while reel 14 was still a day from posting.'
    ]
  },
  {
    id: 'carousel-post-4',
    date: '2026-08-27',
    title: 'Week three: how to mark, and what to call',
    type: 'Carousel',
    typeDetail: '1080×1350 · 9 slides',
    pillar: 'Rules',
    difficulty: 'Mixed',
    lesson: null,
    rules: ['18.2.1.1', '18.2.4.2', '18.2.5', '18.2.6', '18.2.7', '18.2.8', '18.1.1.3', '18.1.1.2', '18.1.1.4', '18.1.3', '18.1.1.1', '18.1.4', '18.1.4.4', '18.1.1.5', '18.1.1.5.1', '18.1.1.5.2', '15.1', '15.2', '15.3', '15.6'],
    review: {
      script:  {status: 'pending', on: '2026-08-24'},
      content: {status: 'in-review', on: '2026-08-25'}
    },
    postedDate: null,
    folder: 'carousel-post-4',
    source: 'content/carousel-post-4/script-and-caption.md',
    sourceLesson: 'Weekly recap — no lesson consumed; recaps lessons 15-21',
    video: null,
    slides: [
      ['01_cover', 'Cover — THIS WEEK'],
      ['02_lesson15_two_contact_allowance', 'Lesson 15 — Throwing on the run: the two-contact allowance'],
      ['03_lesson16_travel', "Lesson 16 — Travel: the call that doesn't stop play"],
      ['04_lesson17_disc_space', 'Lesson 17 — Disc space: give the thrower room'],
      ['05_lesson18_straddle_and_wrapping', 'Lesson 18 — Straddle and wrapping'],
      ['06_lesson19_fast_count', 'Lesson 19 — Fast count'],
      ['07_lesson20_double_team', 'Lesson 20 — Double team: the three-metre rule'],
      ['08_lesson21_foul_infraction_violation', "Lesson 21 — Foul, infraction, violation — what's the difference?"],
      ['09_closing', `Closing — "That's twenty-one of seventy-five."`]
    ],
    scenes: null,
    script: {
      hook: `Seven more lessons. This week was almost entirely about the mark.`,
      explanation: `Catching and throwing inside two contacts, what travel actually is and why it doesn't stop play, disc space, straddling and wrapping, fast count, double team — and then the vocabulary for saying any of it out loud.`,
      example: `Weeks one and two were about the disc and your feet. This week is about the person standing in front of you, and the four things they're not allowed to do. Each slide carries its rule numbers so you can look any of it up yourself.`,
      cta: `Lessons 15 to 21 of 75 — new lesson daily.`
    },
    ig: `Week three, all in one place — and this week was almost entirely about the mark.

Catching at a sprint and releasing inside two contacts. What travel actually is, and why calling it doesn't stop play. Disc space. Straddling and wrapping. Fast count. Double team and the three-metre rule. And then, on Wednesday, the vocabulary underneath all of it: foul, infraction, violation, and which of the three lets play carry on.

Weeks one and two were about the disc and your feet. This week is about the person standing a forearm away from you, and the four specific things they aren't allowed to do — every one of which you're allowed to say out loud.

Each slide carries its rule numbers — so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `everything the daily reels covered this week, seven slides 🥏

two-contact throws, travel, disc space, straddle + wrapping, fast count, double team, and foul vs infraction vs violation

basically: what your marker can't do, and what to call it

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-24, script approved 2026-08-24, rendered 2026-08-25. Nine slides at 2250x2812, rule numbers only, no rule text. Layout checked with tools/check_layout.py: 0 problems, no ink collisions with the citation footer. make_carousel.py reuses carousel-post-3 helpers, constants, rule_slide(), header() and layout verbatim.',
      'The cover title renders at 84px rather than the usual 96px, with line height scaled 108 to 95. "mark, and what to call" measures 1003px at 96 against a 900px column. Same rule as fit_kicker() and fit_body() in the reel pipeline: shrink the type, never the approved words.',
      'Slide index: 01_cover (THIS WEEK), one slide per lesson 15-21, then 09_closing. Full index with takeaways and citation footers is in content/carousel-post-4/caption.md.',
      'Recap block is lessons 15-21, the third contiguous block of seven, continuing straight on from carousel-post-3 lessons 8-14. Blocks run by lesson number, not by date.',
      'Two of the seven reels had not posted when this was rendered. Lesson 20 is Ready to post for 2026-08-25; lesson 21 was rejected 2026-08-24 over a rendering defect, was regenerated 2026-08-25 and now sits at Content pending review for 2026-08-26. Both are ahead of this carousel 27 August date, so the block as approved still holds — the same way carousel-post-3 was rendered while reel 14 was still a day from posting. If either slips past the 27th, drop that slide, retitle the cover to "This week six lessons" and roll the lesson into next week block; blocks run by lesson number so nothing is lost.',
      'Slide 3 footer is trimmed. Lesson 16 rules array carries eight numbers; the four on the slide (18.2.5, 18.2.6, 18.2.7, 18.2.8) are the parent rules the reel actually carded. Slide 7 is trimmed the same way — 15.5.1 is dropped there because it is lesson 22 subject matter, not lesson 20 takeaway.',
      'Recap slides carry rule numbers but no rule text, by design — see content/CAROUSEL_TEMPLATE.md.'
    ]
  },
  {
    id: 'reel-22',
    date: '2026-08-27',
    title: 'Who is allowed to make which call',
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 22,
    duration: '~29s script / 29.5s cut',
    rules: ['15.4', '15.5', '15.5.1', '15.6', '1.10'],
    review: {
      script:  {status: 'pending', on: '2026-08-24'},
      content: {status: 'in-review', on: '2026-08-25'}
    },
    postedDate: null,
    folder: 'reel-22',
    source: 'content/reel-22/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Calls)',
    video: 'reel22-who-calls-what.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Who is allowed to make which call" · kicker BEGINNER · LESSON 22 / 75'],
      ['2', '#1 ONLY THE PLAYER FOULED', '"Nobody else on your team can call it for you." · footer cites 15.4'],
      ['3', 'Rules detail', 'Verbatim 15.4'],
      ['4', '#2 THE THROWER, MOSTLY', `"Infractions are the thrower's — with exactly two carve-outs." · footer cites 15.5, 15.5.1`],
      ['5', 'Rules detail', 'Verbatim 15.5 + 15.5.1'],
      ['6', '#3 VIOLATIONS ARE OPEN', '"Any opposing player, and then the people who saw it." · footer cites 15.6, 1.10'],
      ['7', 'Rules detail', 'Verbatim 15.6 + 1.10'],
      ['8', 'FIELD TIP', '"Watching from the sideline? You have no calls."'],
      ['9', 'Closing', '"Lesson 22 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Calling something that isn't yours to call causes more trouble than the breach you were trying to fix.`,
      explanation: `Fouls belong to the player who was fouled, and to nobody else. Infractions belong to the thrower — with exactly two carve-outs: any offensive player may call a double team, and any defensive player may call a travel. Violations are the open category: any opposing player may claim one.`,
      example: `So when you're cutting and you watch the marker hack your thrower's arm, there is nothing for you to call. That feels unhelpful and it is still the rule. The two exceptions are the tell — a double team happens behind the thrower, and a travel happens to the thrower's own feet, which are the two things they are worst placed to judge. And once a call is made, the discussion belongs to the players directly involved plus whoever had the best perspective. That is how the sideline helps without making calls.`,
      cta: `Lesson 22 of 75 — new lesson daily.`
    },
    ig: `Calling something that isn't yours to call causes more trouble than the breach you were trying to fix.

Fouls belong to the player who was fouled. Only they may claim it. You can be certain of what you saw, you can be right, and it is still not your call. This is the one that surprises people most, and it is also the least negotiable.

Infractions belong to the thrower — the marking calls and travel. With exactly two carve-outs, and the carve-outs tell you why they exist. Any offensive player may call a double team, because a double team usually forms behind the thrower's shoulder. Any defensive player may call a travel, because the thrower is the last person able to referee their own feet.

Violations are the open category. Any opposing player may claim one, by naming it or simply by calling "Violation".

And then there's the part after the call. The rulebook says calls should be discussed by the players directly involved and by the players who had the best perspective. So "best perspective" is a real category, not a courtesy — it's how a teammate who saw the whole thing contributes without owning the call.

Which resolves the sideline question: you have no calls. You have perspective, and you offer it when you're asked. That's a smaller job than it sounds and it settles more disagreements than any call does.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `who gets to call what 🥏

fouls → only the player who was fouled. not you. even if you're right

infractions → the thrower only. two exceptions: ANY offensive player can call double team, ANY defensive player can call travel

violations → any opposing player

after the call → discussed by the players involved + whoever had the best perspective

on the sideline? you have no calls. you have perspective, and you give it when asked

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-24, script approved 2026-08-24, rendered 2026-08-25. Nine scenes, exact CFR via encode.py; 29.53s. Layout clean with no collisions; longest sustained dull-orange run 0.20s against a 0.45s threshold. All three kickers at the standard 34px and all three bodies at the standard 36px — nothing engaged fit_kicker() or fit_body(). 15.4, 15.5, 15.5.1, 15.6 and 1.10 pulled programmatically from rules.json and byte-identical to it.',
      'Nine scenes, the standard three-pair shape (reels 16, 18, 20, 21): cover, three explainer/rules-card pairs for fouls, infractions and violations, a field tip, and the closing card.',
      'Scene 5 is a parent-plus-child card: 15.5 states the general rule and 15.5.1 is the "however" carrying the two exceptions, so they have to appear together or the card says something the rulebook does not. Scene 7 carries two rules from different chapters — 15.6 for who may claim a violation, 1.10 for who may discuss one once it exists.',
      '15.6 appears here for the second time, after reel 21 scene 7. Not a repeat of the same point: reel 21 carded it to give 15.3 a consequence, here it is carded for its subject, which is who may claim one. Same sentence, different half doing the work.',
      '1.10 is the only rule in this lesson from outside chapter 15, and it is deliberately on the same card as 15.6 rather than folded into the field tip. It answers the question the first three rules leave open — a call has an owner, but a discussion has a wider cast — and it is the rule the field tip stands on, so it should be quoted rather than paraphrased.',
      'The two exceptions are the lesson, not a footnote. 15.5.1 is the sentence most beginners have never read, and both halves of it are useful on the field in a way the general rule is not.',
      'Double team was taught in lesson 20 and travel in lesson 16, so neither needs re-teaching — this reel cites them only as call ownership. Do not let scene 4 drift into re-explaining the three-metre rule.',
      'Direct sequel to lesson 21: that one gave you the three words, this one says who owns each of them.'
    ]
  },
  {
    id: 'reel-23',
    date: '2026-08-28',
    title: `"Contest" — disagreeing properly`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 23,
    duration: '~29s script / 29.5s cut',
    rules: ['15.10', '13.3', '1.3', '1.3.4'],
    review: {
      script:  {status: 'pending', on: '2026-08-25'},
      content: {status: 'in-review', on: '2026-08-27'}
    },
    postedDate: null,
    folder: 'reel-23',
    source: 'content/reel-23/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Calls)',
    video: 'reel23-contest.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', '"Contest" — disagreeing properly · kicker BEGINNER · LESSON 23 / 75'],
      ['2', '#1 SAY THE WORD', `"If you don't think it happened, you say \\"Contest\\"." · footer cites 15.10`],
      ['3', 'Rules detail', 'Verbatim 15.10'],
      ['4', '#2 NOBODY GAINS', `"Can't agree? The disc goes back, and neither version wins." · footer cites 13.3`],
      ['5', 'Rules detail', 'Verbatim 13.3'],
      ['6', '#3 EXPLAIN, BRIEFLY', '"Your whole job in the discussion is one clear sentence." · footer cites 1.3, 1.3.4'],
      ['7', 'Rules detail', 'Verbatim 1.3 + 1.3.4'],
      ['8', 'FIELD TIP', '"Have your one sentence ready before you open your mouth."'],
      ['9', 'Closing', '"Lesson 23 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Disagreement is built into the rules. There's a word for it, and there's machinery behind the word.`,
      explanation: `If someone calls a breach against you and you don't think it happened, you say "Contest". Play stops and you talk about it. If you still can't agree — or nobody can work out what actually happened — the disc goes back to the last undisputed thrower and play restarts with a check.`,
      example: `So contesting costs the caller nothing and gains you nothing. That's the whole design. A contest isn't you calling someone a liar, it's the sport's way of recording that two people saw the same two seconds differently, and then getting on with the point. What the rulebook does ask of you is that you explain your viewpoint clearly and briefly — which in practice means having one sentence ready about what you actually saw, before you start talking.`,
      cta: `Lesson 23 of 75 — new lesson daily.`
    },
    ig: `Disagreement is built into the rules. There's a word for it, and there's machinery behind the word.

Someone calls a breach against you and you don't think it happened. You say "Contest". Play stops, and the two of you talk about it. That's it — that's the whole mechanism, and it's available to you every single time.

Here's the part that makes it safe to use. If, after discussion, you can't agree, or it just isn't clear what happened, the disc goes back to the last non-disputed thrower and play restarts with a check. Not the caller's version. Not yours. Nobody gains.

Which is why contesting isn't hostile. It's not an accusation and it's not a challenge to anyone's honesty. It's the sport's way of recording "we saw that differently" and then getting on with the point. A game where nobody ever contests isn't a game with better spirit — it's a game where people are conceding calls they don't actually agree with.

The rulebook does ask something of you in return. Among the things players must do when they're acting as referees: explain their viewpoint clearly and briefly. Clearly, and briefly. Both halves are the rule.

So have your sentence ready before you start talking. "I saw your pivot foot lift while the disc was still in your hand" is a contest. "That definitely wasn't a travel" is a mood.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `how to disagree, properly 🥏

someone calls something on you and you don't think it happened → say "Contest". play stops, you talk

still can't agree? disc goes back to the last undisputed thrower. nobody gains. that's the whole design

so contesting isn't hostile. it's the sport recording "we saw it differently"

your one duty: explain your viewpoint clearly AND briefly. it's in the rules

have the sentence ready first. "your pivot foot lifted while the disc was in your hand" > "that wasn't a travel"

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-25, script approved 2026-08-26, rendered 2026-08-27. Nine scenes, exact CFR via encode.py; 29.50s. Layout check 0 problems and no collisions; longest sustained dull-orange run 0.20s against a 0.45s threshold. All three kickers at the standard 34px and all three bodies at the standard 36px — nothing engaged fit_kicker() or fit_body(). 15.10, 13.3, 1.3 and 1.3.4 pulled programmatically from rules.json and byte-identical to it.',
      'Nine scenes, the standard three-pair shape: cover, then pairs for 15.10 (the word itself), 13.3 (the default outcome) and 1.3 + 1.3.4 (the duty to explain), a field tip, and the closing card.',
      'The leading-quote fix held. Slide 1 line 1 and slide 2 line 3 both begin with a double quote and both emitted through _payload() as <tspan>, so "Contest" renders with both quotes. This is the first asset where the reel-21 fix was actually exercised on a cover title.',
      '13.3 carded whole at 38px wraps to eight lines and lands at max_y 704 of 1310 — no split needed, and no trimming of the text.',
      'Scene 7 is a parent-plus-child card. 1.3.4 reads "explain their viewpoint clearly and briefly;" — a fragment grammatically dependent on 1.3 ("Players must:"). Carded alone it would be unreadable, so 1.3 goes above it, exactly as 15.5 carries 15.5.1 on reel 22. 1.3 is the only rule number here not in the lesson rules array, and it is there for grammar, not for extra content.',
      'The cover title starts with a double quote — a first for this pipeline, and the exact case that got reel 21 rejected on 2026-08-24. render_v3.py _payload() now handles it; check slide 1 renders as "Contest" and not Contest" before submitting.',
      '13.3 is quoted whole and is the longest single rule text this pipeline has carded — four sentences. fit_body() does not apply to a g_detail card, which wraps at 38px with no auto-fit, so run tools/check_layout.py before encoding. If 13.3 overflows, split it across two reveal groups in the same g_detail block rather than trimming the text.',
      '13.3 is a turnovers rule doing general work: it is the only place the rulebook states the last-undisputed-thrower default in full, which is why it is carded here rather than a chapter-15 rule. Scene 4 should stay general and not drift into re-teaching turnovers (lesson 4).',
      '15.10 gives the right to contest to the player the call was made against, mirroring lesson 22 ownership rules. Do not let scene 2 imply anyone may contest.',
      'Retraction is lesson 24, not this one. 15.11 is deliberately absent — "Changing your mind is a rule, not a weakness" is the next lesson and needs the room.',
      'Closes the three-lesson calls run: 21 was the vocabulary, 22 was ownership, 23 is the disagreement procedure.'
    ]
  },
  {
    id: 'reel-24',
    date: '2026-08-29',
    title: `Changing your mind is a rule, not a weakness`,
    type: 'Reel',
    typeDetail: '1080×1920 · 28.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 24,
    duration: '~28s script / 28.5s cut',
    rules: ['15.11', '1.5', '1.5.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-26'},
      content: {status: 'in-review', on: '2026-08-27'}
    },
    postedDate: null,
    folder: 'reel-24',
    source: 'content/reel-24/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Spirit)',
    video: 'reel24-retracted.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Changing your mind is a rule, not a weakness · kicker BEGINNER · LESSON 24 / 75'],
      ['2', '#1 SAY THE WORD', `"Realise your call was wrong? Say \\"Retracted\\"." · footer cites 15.11`],
      ['3', 'Rules detail', 'Verbatim 15.11'],
      ['4', `#2 IT'S ON THE LIST`, '"The rulebook names it as an example of good Spirit." · footer cites 1.5, 1.5.1'],
      ['5', 'Rules detail', 'Verbatim 1.5 + 1.5.1'],
      ['6', 'FIELD TIP', `"\\"Retracted, my bad\\" takes two seconds and settles more than arguing does."`],
      ['7', 'Closing', '"Lesson 24 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `There is a formal, written-down way to say "actually, you're right". It takes one word.`,
      explanation: `If you make a call and then work out that you were wrong — bad angle, or a team-mate had a better view — you say "Retracted". Play then resumes as if the breach had been caused by you, the person who made the call. So it isn't free. You give something up to take it back.`,
      example: `That cost is deliberate, and it's small. In WFDF's own worked example, a marker who retracts a foul call against the thrower hands the stall count back to "Stalling one". A couple of seconds of count, in exchange for not standing on a call you don't believe. And the rulebook doesn't treat this as a climb-down: retracting a call you no longer believe is listed, by name, as an example of good Spirit.`,
      cta: `Lesson 24 of 75 — new lesson daily.`
    },
    ig: `There is a formal, written-down way to say "actually, you're right". It takes one word.

You make a call. Then you realise you were wrong. Bad angle, or a team-mate saw it better, or you just replayed it in your head and it doesn't hold up. The rulebook has a word waiting for you: "Retracted".

It is not free, and that's the point. Play resumes as if the breach had been caused by you — the player who made the call. WFDF's own annotation works the example: a marker calls a foul on the thrower, then retracts it, and the count comes back at "Stalling one". You pay a little to take it back. Small enough to always be worth it.

Then the part people miss. Retracting a call you no longer believe in isn't merely tolerated. It sits in the rulebook's short list of examples of good Spirit — the same list as checking in with an opponent after a contentious interaction. Changing your mind is not a hole in your game. It's named, in writing, as playing well.

Nobody has ever thought less of a player for saying "retracted, my bad". People think plenty about the player who defends a call they stopped believing in two minutes ago.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `there's a rule for saying "actually, you're right" 🥏

made a call, then realised you were wrong? say "Retracted". one word

it's not free — play resumes as if YOU caused the breach. marker retracts a foul → count comes back at "Stalling one"

small price. always worth paying

and it's not a climb-down: retracting a call you no longer believe is literally listed in the rules as an example of good Spirit

"retracted, my bad" costs you two seconds

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-26, script approved 2026-08-26, rendered 2026-08-27. Seven scenes, exact CFR via encode.py; 28.53s. Layout check 0 problems and no collisions; longest sustained dull-orange run 0.20s against a 0.45s threshold. Both kickers at the standard 34px and all bodies at the standard 36px — nothing engaged fit_kicker() or fit_body(). 15.11, 1.5 and 1.5.1 pulled programmatically from rules.json and byte-identical to it, including the mismatched curly quotes in 15.11.',
      'Seven scenes, the two-pair shape used by reels 11, 17 and 19: cover, then pairs for 15.11 (the mechanism) and 1.5 + 1.5.1 (why it is good Spirit), a field tip, and the closing card.',
      'Two elements begin with a double quote and both went through _payload() as <tspan>: the cover hook line ending "actually, you\'re right". and the field-tip headline "Retracted, my bad".',
      'Scene 5 is a parent-plus-child card. 1.5.1 reads "retracting a call when you no longer believe the call was correct;" — a fragment grammatically dependent on 1.5 ("The following actions are some examples of good Spirit:"). Carded alone it is unreadable, so 1.5 goes above it, exactly as 1.3 carries 1.3.4 on reel 23. 1.5 is the only rule number here not in the lesson rules array, and it is there for grammar, not for extra content.',
      '15.11 in rules.json is written as “Retracted“ — an opening curly quote on both sides, not a matched pair. That is the source text and therefore what goes on the card; do not correct it. The quote is mid-sentence, so the _payload() leading-quote fix from reel 21 is not engaged.',
      'The stall-count detail is annotation, not rule text: it comes from the 15.11 ann block in rules.json. It belongs in the script and captions, attributed as WFDF’s worked example, never on a rules card. 9.5.1 and 9.5.2 are deliberately not cited on screen — what the stall count restarts at is lesson 29.',
      'Retraction counts as an accepted breach by the retracting player, so the restart number depends on whether they were defending or attacking. The captions work only the marker case, the one WFDF annotates. Scene 4 should not generalise past it.',
      'Closes the calls run: 21 vocabulary, 22 ownership, 23 contesting, 24 retracting.'
    ]
  },
  {
    id: 'reel-25',
    date: '2026-08-30',
    title: `The duty to avoid contact`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 25,
    duration: '~29s script / 29.5s cut',
    rules: ['12.6', '12.6.1', '12.6.2', '12.6.3'],
    review: {
      script:  {status: 'pending', on: '2026-08-27'},
      content: {status: 'in-review', on: '2026-08-28'}
    },
    postedDate: null,
    folder: 'reel-25',
    source: 'content/reel-25/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Contact)',
    video: 'reel25-avoid-contact.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'The duty to avoid contact · kicker BEGINNER · LESSON 25 / 75'],
      ['2', '#1 NO JUSTIFICATION', '"The rulebook does not leave you a situation where contact is fine." · footer cites 12.6'],
      ['3', 'Rules detail', 'Verbatim 12.6'],
      ['4', '#2 THE EXCUSE, NAMED', `"\\"I was going for the disc\\" is written down, and rejected." · footer cites 12.6.1`],
      ['5', 'Rules detail', 'Verbatim 12.6.1'],
      ['6', '#3 BEFORE YOU LEAVE THE GROUND', `"Not sure you'll get there legally? Then you have to adjust." · footer cites 12.6.2, 12.6.3`],
      ['7', 'Rules detail', 'Verbatim 12.6.2 + 12.6.3'],
      ['8', 'FIELD TIP', `"Bid hard, but into space you're sure is empty."`],
      ['9', 'Closing', '"Lesson 25 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `"I was going for the disc" is not a defence. The rulebook names that exact excuse and rejects it.`,
      explanation: `Every player must attempt to avoid initiating contact, and the rules say flatly that there is no situation where a player may justify initiating contact. That includes contact with someone standing still, and contact with where they were obviously about to be, given the speed and direction they were already moving.`,
      example: `So the duty runs before the bid, not after it. Before you dive, leap or jump away from your position, you have to be reasonably certain you won't initiate contact. And if you're not reasonably certain you'll get to the disc legally before an opponent who is moving legally, you're required to adjust — and the rulebook adds that if you do adjust, the result of the play still stands. You don't lose anything by pulling out of a bid you weren't sure of.`,
      cta: `Lesson 25 of 75 — new lesson daily.`
    },
    ig: `"I was going for the disc" is not a defence. The rulebook names that exact excuse and rejects it.

Start with how absolute the sentence is. All players must attempt to avoid initiating contact, and there is no situation where a player may justify initiating contact. Not "except when", not "unless". The rules almost never talk like that, and here they do.

It covers more than the person in front of you. You have to avoid initiating contact with a stationary opponent — and also with an opponent's expected position, based on the speed and direction they had already established. Where they obviously were about to be counts as where they are.

Then the duty moves earlier than most people put it. Before you dive, leap or jump away from your position, you must be reasonably certain you won't initiate contact. The decision point is on the ground, before you leave it — not in the air, working out whose fault the collision was.

And here's the part that makes it easy to obey. If you're not reasonably certain you can make a legal play at the disc before an opponent who's moving legally, you must adjust to avoid initiating contact — and if you make that adjustment, the result of the play still stands. Pulling out of a bid you weren't sure of costs you nothing under the rules.

Which is what makes a non-contact sport playable at full speed. Bid hard. Bid into space you're sure is empty.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `"I was going for the disc" is not a defence 🥏

the rulebook literally names that excuse and rejects it

the sentence has no escape hatch: there is NO situation where a player may justify initiating contact

and it covers where someone was about to be, not just where they're standing — expected position, based on established speed and direction

before you dive, leap or jump: you must be reasonably certain you won't initiate contact. the decision is on the ground

not sure you'll get there legally first? you must adjust. and if you adjust, the result of the play still stands

bid hard. into space you're sure is empty

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-28: nine scenes, exact CFR via encode.py, 29.53s. Layout check 0 problems with no collisions; longest sustained dull-orange run 0.20s.',
      'Nine scenes, the standard three-pair shape: cover, then pairs for 12.6 (the absolute duty), 12.6.1 (the named excuse) and 12.6.2 + 12.6.3 (before you leave the ground), a field tip, and the closing card.',
      'The scene 6 kicker BEFORE YOU LEAVE THE GROUND fits at the standard 34px after all — 893px of the 900px column, the widest kicker shipped so far, past reel-11\'s 873px. fit_kicker() was not engaged and no wording changed. Scene 2\'s body auto-fits one step down to 35px; scenes 4 and 6 stay at 36px.',
      'Scene 7 carries two sibling rules rather than a parent and child. 12.6.2 is the pre-condition and 12.6.3 is the duty that follows when it is not met; carded alone, 12.6.2 reads as a rule with no consequence. Both are full sentences, so this is a content pairing, not a grammar rescue like 1.3 + 1.3.4 on reel 23.',
      'All four rule numbers come from the lesson rules array — nothing extra is cited on screen.',
      'Opens the contact run: 25 is the duty itself, 26 is who initiated it, 27 is the minor-contact carve-out. Scene 2 should stay at the level of the general duty and not start naming foul types.',
      '12.6 has a substantial ann block defining "making a play on the disc", "minor contact" and "affected the play". None of it goes on a card — cards quote text only. Minor contact is lesson 27 and "affected the play" is lesson 37, so both are deliberately left alone.',
      '12.6.3 final clause is the reassurance and must not be cut: "If that adjustment is made, the result of the play still stands." Without it the rule reads as a penalty for caution, which is the opposite of its purpose.'
    ]
  },
  {
    id: 'reel-26',
    date: '2026-08-31',
    title: `Who initiated the contact?`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 26,
    duration: '~29s script / 29.5s cut',
    rules: ['12.7', '12.7.1', '12.7.2', '12.7.3', '12.4'],
    review: {
      script:  {status: 'pending', on: '2026-08-28'},
      content: {status: 'in-review', on: '2026-08-29'}
    },
    postedDate: null,
    folder: 'reel-26',
    source: 'content/reel-26/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Contact)',
    video: 'reel26-who-initiated.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Who initiated the contact? · kicker BEGINNER · LESSON 26 / 75'],
      ['2', '#1 THEY WERE ALREADY THERE', '"The initiator is usually just whoever arrived second." · footer cites 12.7, 12.7.1, 12.4'],
      ['3', 'Rules detail', 'Verbatim 12.7 + 12.7.1, then 12.4'],
      ['4', '#2 OR WHOEVER CHANGED PATH', '"You can also initiate contact without arriving late at all." · footer cites 12.7, 12.7.2'],
      ['5', 'Rules detail', 'Verbatim 12.7 + 12.7.2'],
      ['6', '#3 IF NOBODY CAN TELL', `"Genuinely unclear, and someone laid out? It's theirs." · footer cites 12.7.3`],
      ['7', 'Rules detail', 'Verbatim 12.7.3'],
      ['8', 'FIELD TIP', `"Ask \\"where were you when I got there?\\""`],
      ['9', 'Closing', '"Lesson 26 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Every foul argument is really one question: who got there first? The rulebook actually answers it.`,
      explanation: `The player who initiates contact is defined, not debated. Limb one: the player who arrived at the point of contact after the opponent had already established a legitimate position there — and that opponent can be standing still or moving. A player in an established position is entitled to stay in it and must not be contacted.`,
      example: `Limb two catches the other case, where you were there in time but changed your line: the player who adjusted their movements in a way that created unavoidable contact with an opponent who was moving legally, taking everyone's established position, speed and direction into account. And if it is genuinely unclear which of you initiated it, and one of you dived, leapt or jumped away from their position — that player is deemed to have initiated the contact. The person who left the ground carries the risk.`,
      cta: `Lesson 26 of 75 — new lesson daily.`
    },
    ig: `Every foul argument is really one question: who got there first? The rulebook actually answers it.

Limb one — you arrived second. The initiator is the player who arrived at the point of contact after the opponent had already established a legitimate position there. That opponent can be stationary or moving; "they were running too" doesn't undo an established position. And a player in an established position is entitled to remain in it, and must not be contacted by an opponent.

Limb two — you were there in time, but you changed your line. The initiator is also the player who adjusted their movements in a way that created unavoidable contact with an opponent moving legally, taking into account every player's established position, speed and direction. You can be first to the spot and still be the one who caused it.

And the tiebreaker, which settles more arguments than either limb. If it is unclear which player initiated contact and one of them dived, leapt or jumped away from their position, that player is deemed to have initiated it. Leaving the ground is a choice, and the rules put the uncertainty on the player who made it.

Notice what none of this asks about: intent. Nobody has to have meant it. The question is position, speed and direction — things two people can usually reconstruct together in about fifteen seconds.

So the useful sentence isn't "you fouled me". It's "where were you when I got there?"

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `every foul argument is really one question: who got there first 🥏

and the rulebook answers it instead of leaving it to whoever argues hardest

limb 1 — you arrived at the point of contact after they'd already established a legitimate position. stationary or moving, both count

limb 2 — you got there in time but adjusted your movement in a way that made contact unavoidable with someone moving legally

the tiebreaker: genuinely unclear who initiated it, and one of you dived, leapt or jumped away from their position? that player is deemed to have initiated it

nobody asks about intent. it's position, speed, direction

so don't say "you fouled me". say "where were you when I got there?"

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-29 by the daily task: nine scenes, exact CFR via encode.py, 29.53s. Layout check 0 problems with no collisions; longest sustained dull-orange run 0.20s.',
      'Nine scenes, the standard three-pair shape: cover, then pairs for 12.7 + 12.7.1 with 12.4 (they were already there), 12.7 + 12.7.2 (or whoever changed path) and 12.7.3 (the tiebreaker), a field tip, and the closing card.',
      '12.7 is a stem ending in a colon, not a sentence, so it appears on both rule cards carrying a different limb each time. Same parent-repeated shape as 18.1.1 on reel 18; here it is a grammar requirement, since 12.7.1 alone starts mid-clause.',
      '12.4 rides on scene 3 as a second block rather than taking a pair of its own. 12.7.1 turns on the opponent having established a legitimate position, and 12.4 is the rule saying what that position entitles you to.',
      'All five rule numbers come from the lesson rules array — nothing extra is cited on screen.',
      'Do not let "initiated" slide into "at fault". 12.7 defines who initiated contact; whether it is a foul is the next few lessons. The word foul appears once in the hook and nowhere else in the spoken script.',
      'Intent is deliberately absent from the video — nothing in 12.7 mentions it. It gets one line in the Instagram caption because it is the commonest wrong assumption about this rule, but it is a caption beat, not a card.',
      'Scene 3 is the densest card in the reel and measured max_y 1008 of 1310 — comfortably under the estimate, so 12.4 stayed on it and no rule text was split or trimmed.',
      'All three kickers and all three bodies rendered at the standard sizes — neither fit_kicker() nor fit_body() was engaged. No element begins with a double quote, so _payload() is a no-op here.'
    ]
  },
  {
    id: 'reel-27',
    date: '2026-09-01',
    title: `Not every touch is a foul`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 27,
    duration: '~29s script / 29.5s cut',
    rules: ['12.8', '15.1', '1.3.10'],
    review: {
      script:  {status: 'pending', on: '2026-08-29'},
      content: {status: 'in-review', on: '2026-08-31'}
    },
    postedDate: null,
    folder: 'reel-27',
    source: 'content/reel-27/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Contact)',
    video: 'reel27-not-every-touch.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Not every touch is a foul · kicker BEGINNER · LESSON 27 / 75'],
      ['2', '#1 THE TOLERANCE IS DELIBERATE', '"Two people going to one point will sometimes touch." · footer cites 12.8'],
      ['3', 'Rules detail', 'Verbatim 12.8'],
      ['4', '#2 A FOUL NEEDS MORE THAN CONTACT', '"The word doing the work is \'non-minor\'." · footer cites 15.1'],
      ['5', 'Rules detail', 'Verbatim 15.1'],
      ['6', '#3 DID IT ACTUALLY CHANGE ANYTHING?', '"The call has a threshold, and it isn\'t \'I felt that\'." · footer cites 1.3, 1.3.10'],
      ['7', 'Rules detail', 'Verbatim 1.3 + 1.3.10'],
      ['8', 'FIELD TIP', '"If it didn\'t change what happened and nobody\'s hurt, let it go."'],
      ['9', 'Closing', '"Lesson 27 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You brushed arms going for the same disc. That's not a foul, and the rulebook says so in one sentence.`,
      explanation: `Some minor contact may occur as two or more players move towards a single point simultaneously. Minor contact should be minimized — but it is not considered a foul. That is written down as a rule, not offered as a courtesy. The tolerance is deliberate, because two people running hard to one spot is the sport working correctly, not breaking.`,
      example: `So what makes it a foul? One word. A breach of the rules due to non-minor contact between opposing players is a foul. Non-minor. Brushing shoulders on the way to a disc you caught cleanly anyway does not clear that bar. And there is a second filter on top: only make a call where the breach is significant enough to make a difference to the outcome of the action, or where a player's safety is at risk. Those are the two gates — did it change what happened, or did it put someone at risk?`,
      cta: `Lesson 27 of 75 — new lesson daily.`
    },
    ig: `You brushed arms going for the same disc. That's not a foul, and the rulebook says so in one sentence.

The tolerance is written in on purpose. Some minor contact may occur as two or more players move towards a single point simultaneously. Minor contact should be minimized — but it is not considered a foul. That is a rule, not a courtesy someone is extending to you. Two people running hard to the same spot is the sport working correctly.

What turns contact into a foul is one word: non-minor. A breach of the rules due to non-minor contact between two or more opposing players is a foul. So "there was contact" is never the whole argument — it's the start of one. If you brushed shoulders and caught it cleanly anyway, nothing crossed that line.

And there's a second gate, from the Spirit rules. Only make a call where the breach is significant enough to make a difference to the outcome of the action, or where a player's safety is at risk. Two questions, then: did it change what happened, and is anyone hurt? If both answers are no, there's nothing to call.

This is the balance the previous two lessons were building toward. You must try to avoid contact (12.6), and the rules define who initiated it when it happens (12.7) — but they also refuse to turn every incidental touch into a stoppage. Consistently over-calling is itself a Spirit breach, and it's the fastest way to make a game unpleasant for everyone on it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `you brushed arms going for the same disc. not a foul 🥏

and it's not a favour someone's doing you — it's written down

"Some minor contact may occur as two or more players move towards a single point simultaneously. Minor contact should be minimized but is not considered a foul."

what makes it a foul is one word: NON-MINOR. a breach due to non-minor contact between opposing players is a foul

so "there was contact" isn't the argument. it's the start of one

second gate, from the spirit rules: only make a call where the breach is significant enough to change the outcome of the action, or where someone's safety is at risk

two questions. did it change what happened? is anyone hurt? both no = nothing to call

over-calling is itself a spirit breach

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-08-31 by the daily task. Nine scenes, exact CFR via encode.py; 29.50s. Layout check 0 problems with no collisions; longest sustained dull-orange run 0.23s against a 0.45s threshold.',
      'Scene 4 kicker auto-fits to 31px and scene 6 to 30px — fit_kicker() engaged exactly where the script predicted it would. Bodies render at 32, 36 and 32px. No word of the approved script was changed to make anything fit.',
      'Planned as nine scenes, the standard three-pair shape: cover, then pairs for 12.8 (the tolerance is deliberate), 15.1 (a foul needs non-minor contact) and 1.3 + 1.3.10 (did it actually change anything), a field tip, and the closing card.',
      '1.3 is a stem ending "Players must:" and 1.3.10 begins lowercase, so carded alone the limb is a fragment with no subject. Scene 7 carries both, exactly as reel 23 did with 1.3 + 1.3.4. The lesson rules array lists 1.3.10; 1.3 is on screen only as the grammar its own child requires.',
      'Closes the setup for the contact run: 25 is the duty, 26 is who initiated it, 27 is the carve-out. Lessons 28-31 are the named foul types, so scene 4 must stay on the definition and not start listing them.',
      'Do not soften "minimized" into "avoided". The rule says minor contact should be minimized and separately that it is not a foul — two different claims, and the reel needs both or it reads as "contact is fine", the opposite of lesson 25. The -z- spelling is the rulebook own; keep it wherever the rule wording is reproduced.',
      'Watch the scene 6 kicker, #3 DID IT ACTUALLY CHANGE ANYTHING? — long for the 900px column and the most likely yet to engage fit_kicker(). Let the type shrink; never reword it to fit.',
      '1.3.10 carries a curly apostrophe in "player’s" — that is what rules.json holds and rt() will emit it. Do not normalise it to a straight quote.'
    ]
  },
  {
    id: 'reel-28',
    date: '2026-09-02',
    title: `Receiving fouls`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 28,
    duration: '~29s script / 29.5s cut',
    rules: ['17.2.1', '17.2.1.1', '17.2.2', '15.8'],
    review: {
      script:  {status: 'pending', on: '2026-09-01'},
      content: {status: 'in-review', on: '2026-09-02'}
    },
    postedDate: null,
    folder: 'reel-28',
    source: 'content/reel-28/script-and-caption.md',
    sourceLesson: 'content/lessons-3.json (tag: Fouls)',
    video: 'reel28-receiving-fouls.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Receiving fouls · kicker BEGINNER · LESSON 28 / 75'],
      ['2', '#1 BEFORE, WHILE OR JUST AFTER', '"A receiving foul is contact on the play for the disc." · footer cites 17.2.1, 17.2.1.1'],
      ['3', 'Rules detail', 'Verbatim 17.2.1 + 17.2.1.1'],
      ['4', '#2 EVEN IN THE END ZONE', '"The reward is the disc, exactly where it happened." · footer cites 17.2.2'],
      ['5', 'Rules detail', 'Verbatim 17.2.2'],
      ['6', '#3 CALL IT IMMEDIATELY', '"A foul called late is a different situation entirely." · footer cites 15.8'],
      ['7', 'Rules detail', 'Verbatim 15.8'],
      ['8', 'FIELD TIP', '"Call it at the moment of contact — shout and signal."'],
      ['9', 'Closing', '"Lesson 28 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Two of you go up for the same disc and there's contact. This is the foul you'll meet first, and it has the biggest reward in the rulebook.`,
      explanation: `A receiving foul occurs when a player initiates non-minor contact with an opponent before, while, or directly after either player makes a play on the disc. So it isn't contact in general — it's contact on the play, inside that window. And there's a limit at the other end: contact with an opponent's arms or hands after the disc has been caught is not a sufficient basis for a foul, though it should still be avoided.`,
      example: `Here's why it matters. After an accepted receiving foul the fouled player gains possession at the location of the breach, even if that location is in an end zone. Not back to the thrower — the disc, where the contact happened, and play restarts with a check. But you only get that if you call it in time: calls must be made immediately after the breach is recognised. And make the call so it lands — the word and the hand signal together, because half the field will not hear you.`,
      cta: `Lesson 28 of 75 — new lesson daily.`
    },
    ig: `Two of you go up for the same disc and there's contact. This is the foul you'll meet first, and it has the biggest reward in the rulebook.

A receiving foul is contact on the play, not contact in general. A Receiving Foul occurs when a player initiates non-minor contact with an opponent before, while, or directly after, either player makes a play on the disc. That window — before, while, or directly after — is doing real work. Bumping someone in the stack on the far side of the field is a different rule.

And it stops at the catch. Contact with an opponent’s arms or hands, that occurs after the disc has been caught, or after the opponent can no longer make a play on the disc, is not a sufficient basis for a foul, but should be avoided. So the follow-through where your hand grazes their forearm as they bring it in isn't the call. Don't do it — but don't call it either.

The reward is why this one matters. After an accepted receiving foul the fouled player gains possession at the location of the breach, even if that location is in an end zone, and play restarts with a check. Read that again: in an end zone. Not a reset to the thrower — the disc, where the contact happened. If it's contested, the disc goes back to the thrower.

All of which depends on making the call in time. Calls must be made immediately after the breach is recognised. Not after you've watched where the disc landed, and not after you've decided whether you'd have caught it. The moment you feel it.

And make it land. In practice a call is two things at once: you say the word, and you throw the hand signal for it. Players downfield will not hear you over a windy sideline, but they can see your arms — and once they see it, they echo it, and the whole field stops together.

Lesson 28 of 75. Next up: what happens when contact knocks a disc out of hands that had already caught it.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `two of you go up for the same disc. there's contact. this is the foul you'll meet first 🥏

"A Receiving Foul occurs when a player initiates non-minor contact with an opponent before, while, or directly after, either player makes a play on the disc."

before, while, or directly after. it's contact ON THE PLAY, not contact in general

and it stops at the catch — contact with an opponent’s arms or hands after the disc has been caught "is not a sufficient basis for a foul, but should be avoided"

so the graze on the follow-through? don't do it. don't call it either

now the reward, and this is the part people don't know:

"the fouled player gains possession at the location of the breach, even if that location is in an end zone, and play restarts with a check"

IN AN END ZONE. not back to the thrower. the disc, right where it happened

contested instead? disc goes back to the thrower

one catch: "Calls must be made immediately after the breach is recognised." the moment you feel it — not after you've seen where the disc landed

and make it land: say the word AND throw the hand signal. downfield players won't hear you in wind, but they'll see your arms — then they echo it and everyone stops together

lesson 28 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'REBUILT 2026-09-02 from the v2 redraft — v2 cut is on disk, content pending review, v1 archived as reel28-receiving-fouls.v1.mp4. READ BEFORE APPROVING: the script track still carries its 2026-08-30 approved stamp, which predates the redraft. The beats and captions here ARE the redraft, so read them and click Approve on the script track to re-stamp it against the words actually there. Do not click Request changes merely to park it — the next run would rewrite the redraft rather than protect it.',
      'REDRAFT v2, 2026-09-01 — after a content-track note ("Out loud may not be appropriate. We use hand signals in ultimate frisbee."). Scene 6 kicker SAY IT IMMEDIATELY -> CALL IT IMMEDIATELY; scene 8 field tip now "shout and signal"; both captions updated. No rule number, rules card, lesson number or hashtag changed — 15.7 and 15.13 back the note but belong to lesson 73, so nothing new is cited. See content/reel-28/script-feedback.md.',
      'One thing the 09-01 redraft missed, fixed at rebuild on 09-02: scene 6 body opened "All of that depends on saying it in time" — the same voice-only framing, on the slide right before the tip that corrects it. Now "depends on making the call in time", matching the phrase the redraft had already changed in the Instagram caption. Nothing else moved.',
      'Rendered v2 2026-09-02. Nine scenes, exact CFR via encode.py; 29.50s. Layout check 0 problems with no collisions; longest sustained dull-orange run 0.20s against a 0.45s threshold. All three kickers at the standard 34px, bodies at 34, 31 and 35px — the edits changed no line counts, so every measurement matches v1. This rebuild does not improve on v1 by any metric; the defect was the words.',
      'All three kickers render at the standard 34px — scene 2 measured well inside the 900px column, so fit_kicker() never engaged. Bodies at 34, 31 and 35px. Scene 3 is the densest card at max_y 922 of 1310 and scene 5 at 804, so 17.2.2 was carded whole with no split and no trimming.',
      'Planned as nine scenes, the standard three-pair shape: cover, then pairs for 17.2.1 + 17.2.1.1 (what a receiving foul is, and where it stops), 17.2.2 (possession at the spot, even in an end zone) and 15.8 (call it immediately), a field tip, and the closing card.',
      '17.2 is a heading stem ("Receiving Fouls:") and is deliberately NOT carded. Unlike 1.3 in reel 27 or 12.7 in reel 26, its child stands alone as a complete sentence, so the stem would only look like a fourth citation.',
      'Layout measured before drafting: widest kicker is scene 2 at 858 of 900px (standard 34px, under reel-25 893px record); scene 2 body auto-fits to 33px over five lines, last baseline 1074 against the 1090 limit; scenes 4 and 6 stay at 36px. Neither floor is engaged.',
      'First of the four named foul types — 28 receiving, 29 strip, 30 blocking, 31 force-out. Scene 4 stays on this foul remedy and must not start comparing it to the strip, which is lesson 29 whole point.',
      'Keep "non-minor" — it is the hinge back to lesson 27 and the rulebook own word. Do not simplify it to "hard" or "real" contact where the rule is being reproduced.',
      '17.2.1.1 carries a curly apostrophe in "opponent’s" and a trailing parenthetical, "(excluding contact related to Section 17.1 and 17.3)", which is part of the rule. Do not normalise the apostrophe and do not trim the parenthetical to save a line — shrink the type instead.',
      '17.2.2 middle sentence about 14.3 and the pivot point is on the card but not in the voiceover, deliberately: the card quotes the rule whole because that is what a citation is, while the script stays on the part a beginner needs. Do not cut it from the card to make the two match.',
      'The field tip must not cite a rule number. Late calls are handled under 15.9, which is not in this lesson rules array, so the tip stays practical rather than introducing a fourth citation on a slide with no citation footer.'
    ]
  },
  {
    id: 'reel-29',
    date: '2026-09-03',
    title: `Strip fouls`,
    type: 'Reel',
    typeDetail: '1080×1920 · 28.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 29,
    duration: '~29s script / 28.5s cut',
    rules: ['17.3.1', '17.3.2'],
    review: {
      script:  {status: 'pending', on: '2026-08-31'},
      content: {status: 'in-review', on: '2026-09-01'}
    },
    postedDate: null,
    folder: 'reel-29',
    source: 'content/reel-29/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Fouls)',
    video: 'reel29-strip-fouls.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Strip fouls · kicker BEGINNER · LESSON 29 / 75'],
      ['2', '#1 YOU HAD IT, AND IT CAME OUT', '"A strip is a foul that costs you a catch you\'d already made." · footer cites 17.3.1'],
      ['3', 'Rules detail', 'Verbatim 17.3.1'],
      ['4', '#2 IF IT WOULD HAVE BEEN A GOAL', '"You get the goal, not the disc." · footer cites 17.3.2'],
      ['5', 'Rules detail', 'Verbatim 17.3.2'],
      ['6', 'FIELD TIP', '"Say \"strip\", not just \"foul\"."'],
      ['7', 'Closing', '"Lesson 29 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You caught it. Contact knocked it out of your hands. That is a specific foul with a specific name, and it is not the same as being fouled on the catch.`,
      explanation: `A strip foul occurs when an opponent fouls a player and that causes the player to drop a disc they caught, or to lose possession of the disc. The key word is caught. Lesson 28's receiving foul is contact that stops you completing the catch. A strip is contact that takes away a catch you had already completed — the disc was yours, and the foul is why it isn't any more.`,
      example: `Which is why the reward is different. If the reception would have otherwise been a goal, and the foul is accepted, a goal is awarded. Not the disc on the goal line. The goal. Because you had already caught it in the end zone, and the only reason you're not celebrating is the contact. Anywhere else on the field, it resolves like any other receiving foul — you keep it where it happened, and play restarts with a check.`,
      cta: `Lesson 29 of 75 — new lesson daily.`
    },
    ig: `You caught it. Contact knocked it out of your hands. That's a specific foul with a specific name, and it isn't the same as being fouled on the catch.

The word doing the work is "caught". A Strip Foul occurs when an opponent fouls a player and that causes the player to drop a disc they caught or to lose possession of the disc. Yesterday's receiving foul is contact that stops you completing a catch. A strip is contact that takes away a catch you had already completed. The disc was yours, and the foul is the reason it isn't any more.

And that's why the reward is bigger. If the reception would have otherwise been a goal, and the foul is accepted, a goal is awarded. Not possession on the goal line — the goal. You had already caught it in the end zone; the only thing standing between you and a point on the board was contact that shouldn't have happened.

Anywhere else on the field, it resolves the ordinary way. You keep possession where it happened, and play restarts with a check — the same remedy lesson 28 covered.

Worth being precise about the name when you call it. "Foul" and "strip" lead to different outcomes, and the person you're calling it on can't agree to something they haven't understood.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `you caught it. contact knocked it out. that's not the same foul as being hit on the catch 🥏

it has its own name: STRIP

"A Strip Foul occurs when an opponent fouls a player and that causes the player to drop a disc they caught or to lose possession of the disc."

the word doing the work is CAUGHT

receiving foul = contact stops you completing the catch
strip = contact takes away a catch you'd already completed

and the reward is bigger:

"If the reception would have otherwise been a goal, and the foul is accepted, a goal is awarded."

not the disc on the goal line. the GOAL. you'd already caught it in the end zone

anywhere else on the field? possession where it happened, restart with a check — same as lesson 28

so say "strip", not just "foul". different words, different outcome

lesson 29 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-08-31 by the daily task. Awaiting script review. Video not yet rendered — nothing renders until the script clears the first gate.',
      'Planned as seven scenes, the two-pair shape used by reels 11, 13, 14, 17, 19 and 24: cover, then pairs for 17.3.1 (what a strip is) and 17.3.2 (the goal is awarded), a field tip, and the closing card. The lesson cites two rules, so two pairs.',
      '17.3 is a heading stem ("Strip Fouls:") and is deliberately NOT carded — same call as 17.2 in reel 28. Its child stands alone as a complete sentence, so the stem would only look like a third citation.',
      'The non-goal remedy is spoken but not carded. When the catch would not have been a goal, what applies is lesson 28 ordinary receiving-foul remedy in 17.2.2, which is NOT in this lesson rules array. Scene 4 may refer back to lesson 28 in plain English, but 17.2.2 must not appear in a footer or on a card.',
      'The whole lesson hinges on one word: caught. Scene 2 has to land that the catch was already complete, because that single fact separates this from lesson 28 and justifies the bigger remedy in scene 4.',
      'Do not let scene 4 imply the goal is the only outcome. 17.3.2 is conditional — "if the reception would have otherwise been a goal" — and most strips happen mid-field and resolve like any other receiving foul.',
      'Both rule texts are short (139 and 95 characters), so scenes 3 and 5 are the least crowded detail cards in the recent run. Keep the scene bodies to roughly 200-230 characters: two bodies this week hit the 29px fit_body() floor at ~275 characters before being tightened.'
    ]
  },
  {
    id: 'carousel-post-5',
    date: '2026-09-03',
    title: 'Week four: contact, and who decides',
    type: 'Carousel',
    pillar: 'Rules',
    difficulty: 'Mixed',
    lesson: null,
    rules: ['15.4', '15.5', '15.5.1', '15.6', '1.10', '15.10', '13.3', '1.3.4', '15.11', '1.5.1', '12.6', '12.6.1', '12.6.2', '12.6.3', '12.7', '12.7.1', '12.7.2', '12.7.3', '12.4', '12.8', '15.1', '1.3.10'],
    typeDetail: '2250×2812 · 8 slides',
    review: {
      script:  {status: 'pending', on: '2026-09-01'},
      content: {status: 'in-review', on: '2026-09-02'}
    },
    postedDate: null,
    folder: 'carousel-post-5',
    source: 'content/carousel-post-5/script-and-caption.md',
    sourceLesson: 'Weekly recap — no lesson consumed; recaps lessons 22-27',
    video: null,
    slides: [
      ['01_cover', 'Cover — THIS WEEK'],
      ['02_lesson22_who_calls_what', 'Lesson 22 — Who is allowed to make which call'],
      ['03_lesson23_contest', 'Lesson 23 — "Contest" — disagreeing properly'],
      ['04_lesson24_retracted', 'Lesson 24 — Changing your mind is a rule, not a weakness'],
      ['05_lesson25_avoid_contact', 'Lesson 25 — The duty to avoid contact'],
      ['06_lesson26_who_initiated', 'Lesson 26 — Who initiated the contact?'],
      ['07_lesson27_not_every_touch', 'Lesson 27 — Not every touch is a foul'],
      ['08_closing', 'Closing — "That\'s twenty-seven of seventy-five."']
    ],
    scenes: [
      ['1', 'Cover', 'kicker THIS WEEK · "Week four: contact, and who decides" · subhead "This week\'s six lessons — everything the daily reels covered, 27 August – 1 September." · SWIPE →'],
      ['2', 'LESSON 22', '"Who is allowed to make which call" · footer 15.4 · 15.5 · 15.5.1 · 15.6 · 1.10'],
      ['3', 'LESSON 23', '"Contest" — disagreeing properly · footer 15.10 · 13.3 · 1.3.4'],
      ['4', 'LESSON 24', '"Changing your mind is a rule, not a weakness" · footer 15.11 · 1.5.1'],
      ['5', 'LESSON 25', '"The duty to avoid contact" · footer 12.6 · 12.6.1 · 12.6.2 · 12.6.3'],
      ['6', 'LESSON 26', '"Who initiated the contact?" · footer 12.7 · 12.7.1 · 12.7.2 · 12.7.3 · 12.4'],
      ['7', 'LESSON 27', '"Not every touch is a foul" · footer 12.8 · 15.1 · 1.3.10'],
      ['8', 'Closing', '"That\'s twenty-seven of seventy-five. More next Thursday." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Six lessons this week. This was the week the game stopped being about the disc and started being about each other.`,
      explanation: `Who's allowed to make which call, and why the sideline isn't. How to contest properly. How to retract. Then the contact framework in three parts: the duty to avoid it, who's deemed to have initiated it, and the tolerance the rules build in on purpose.`,
      example: `That last one surprises people. Minor contact is not a foul — the rulebook says so in a single sentence, and it's what lets two players run hard at the same spot without the game stopping every time. Each slide carries its rule numbers so you can look any of it up yourself.`,
      cta: `Lessons 22 to 27 of 75 — new lesson daily.`
    },
    ig: `Week four, all in one place — and this was the week the game stopped being about the disc and started being about each other.

Who is actually allowed to make a call, and why the sideline isn't. How to contest properly, and what to have ready when you do. The formal word for "actually, you're right".

Then the contact framework in three parts: the duty to avoid it, the rulebook's own definition of who initiated it, and the tolerance built in on purpose — because minor contact is not a foul, and the rules say so in one sentence.

Weeks one to three were the disc, your feet, and your marker. This week is the part of ultimate that has no referee to fall back on: two people who disagree, working out what happened between them. All of it is written down, which is the point.

Six lessons rather than the usual seven — the named foul types start next week, and they'll be recapped together where they belong.

Each slide carries its rule numbers, so you can check any of it against the rulebook rather than taking our word for it.

Rule numbers: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `everything the daily reels covered this week, six slides 🥏

who can make which call · how to contest · how to retract · the duty to avoid contact · who initiated it · why minor contact isn't a foul

basically: the week where the sport stops being about the disc and starts being about the other person

no referees. it's all written down instead

six this week instead of seven — the named foul types start next week and get recapped together

rule numbers from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'BUILT 2026-09-02 from the v2 redraft — eight slides, content pending review. READ BEFORE APPROVING: the script approval stamped at 21:40 on 09-01 was against v1 (lessons 22-28, nine slides); the redraft landed in the push at 21:46, six minutes later. These slides are the redraft. Everything that changed is visible on them — the cover says six, there is no lesson-28 slide, the counter reads n / 8, the closing says twenty-seven. If the words are right, click Approve on the script track to re-stamp it against what is actually there.',
      'REDRAFT v2, 2026-09-01 — block cut from lessons 22-28 to 22-27, nine slides to eight. See content/carousel-post-5/script-feedback.md.',
      'Why the cut: v1 attached a condition to the 22-28 block — "if any of those three reels slips past 09-03, cut this carousel back to the lessons that actually went out". Reel 28 was rejected on the content track on 08-31, is back at the script gate, and cannot be approved, rebuilt, content-approved and posted before 09-03. Lesson 28 reel has not posted, so lesson 28 is not eligible.',
      'Carousel-post-6 block is 28-34, NOT 29-35. Lesson 28 rolls forward; blocks stay contiguous and nothing is recapped twice. This is the easiest thing to get wrong next Thursday.',
      'TOTAL is 8, not 9 — first recap that is not nine slides. The n / TOTAL header counter, the slide filenames and the closing slide number all key off it.',
      'The cover states the short block on its face: "This week\'s six lessons". Per the recap rule, a short block says its own size rather than quietly looking like a full one.',
      'No rule text on any slide. Rule numbers only, in the standard citation footer. If a slide starts to want a quotation, it is re-teaching — cut it back to the takeaway.',
      'Takeaways are the lessons field lines from content/lessons-2.json, unedited. Three carry internal double quotes and one is a quotation in full; keep them exactly and let the type shrink if a line runs long.',
      'Quote handling: make_carousel.py carries the _payload() tspan wrapper, and rendering it surfaced a NEW defect — a double quote at the END of a line is dropped too, not just one at the start. Slide 3 wrapped to a last line of `hand."` and rendered `hand.` _payload() now wraps on startswith OR endswith. Verified in the PNGs, not just the SVGs. Two already-posted reels shipped with this: reel-11 and reel-26, both on their field tip.',
      'The closing slide count is 27, and it says "More next Thursday" rather than "Seven more" — next week block is 28-34 and the number should not be promised in advance.'
    ]
  },
  {
    id: 'reel-30',
    date: '2026-09-04',
    title: `Blocking fouls`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 30,
    duration: '~29.5s script / 29.5s cut',
    rules: ['12.5', '17.4.1', '12.9'],
    review: {
      script:  {status: 'pending', on: '2026-09-01'},
      content: {status: 'in-review', on: '2026-09-01'}
    },
    postedDate: null,
    folder: 'reel-30',
    source: 'content/reel-30/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Fouls)',
    video: 'reel30-blocking-fouls.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Blocking fouls · kicker BEGINNER · LESSON 30 / 75'],
      ['2', '#1 EMPTY SPACE IS YOURS TO TAKE', '"Two conditions come attached." · footer cites 12.5'],
      ['3', 'Rules detail', 'Verbatim 12.5'],
      ['4', '#2 NOT A SPACE THEY CAN\'T AVOID', '"First by a fraction still isn\'t first." · footer cites 17.4.1'],
      ['5', 'Rules detail', 'Verbatim 17.4.1'],
      ['6', '#3 ARMS AND LEGS ARE NOT POSITION', '"You cannot box out." · footer cites 12.9'],
      ['7', 'Rules detail', 'Verbatim 12.9'],
      ['8', 'FIELD TIP', '"Boxing out is a habit from another sport."'],
      ['9', 'Closing', '"Lesson 30 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You got to the spot first, they ran into you, and you think that settles it. It doesn't. Being there first is not the test.`,
      explanation: `Start with what you are allowed. Every player is entitled to occupy any position on the field not occupied by any opposing player — provided they do not initiate contact taking it, and are not moving in a reckless or dangerously aggressive manner. So the space is genuinely yours. The limit is what the space costs the other player. A blocking foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account that opponent's expected position based on their established speed and direction.`,
      example: `Expected position is the whole thing. A cutter at full speed has already committed to the next few metres. Step into that line at the last instant and it doesn't matter that you technically arrived a fraction earlier — they could not have avoided you, so it's your foul. And the same logic covers your limbs: players may not use their extended arms or legs to obstruct the movement of opposing players. Normal running and jumping isn't extended. Putting an arm out to hold someone off a cut is.`,
      cta: `Lesson 30 of 75 — new lesson daily.`
    },
    ig: `You got to the spot first. They ran into you. You think that settles it — and it doesn't, because being there first is not the test.

Start with what you're allowed. "Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner." So the space really is yours to take. Two conditions, both about how you take it.

The limit is what the space costs the other player. "A Blocking Foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account the opponents expected position based on their established speed and direction, and non-minor contact results. This is to be treated as either a receiving foul or an indirect foul, whichever is applicable."

That last sentence points at machinery we haven't covered yet — indirect fouls get their own lesson. Ignore it for now and stay on the first half.

Expected position is the part people skip. A cutter at full speed has already committed to the next few metres — that ground is spoken for by where they are going, not by where they are. Step into it at the last instant and arriving a fraction earlier doesn't save you. They could not have avoided you. That's the foul.

And it covers your limbs, not just your feet. "Players may not use their extended arms or legs to obstruct the movement of opposing players." Normal running and jumping isn't "extended". An arm across someone's chest to hold them off a cut is.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `"i was there first" is not the defence you think it is 🥏

what you ARE allowed:

"Every player is entitled to occupy any position on the field not occupied by any opposing player, provided that they do not initiate contact in taking such a position, and are not moving in a reckless or dangerously aggressive manner."

the space is yours. two conditions on how you take it

the limit:

"A Blocking Foul occurs when a player takes a position that an opponent moving in a legal manner will be unable to avoid, taking into account the opponents expected position based on their established speed and direction, and non-minor contact results. This is to be treated as either a receiving foul or an indirect foul, whichever is applicable."

(that last line is machinery for a later lesson — stay on the first half)

EXPECTED POSITION is the bit everyone skips

a cutter at full speed has already committed to the next few metres. that ground is spoken for

step into it at the last instant? arriving a fraction earlier doesn't save you. they couldn't avoid you

and it's not just your feet:

"Players may not use their extended arms or legs to obstruct the movement of opposing players."

normal running and jumping isn't "extended". an arm across someone's chest is

boxing out is a basketball habit. here it's just illegal

lesson 30 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-09-01 by the daily task. Awaiting script review. Video not yet rendered — nothing renders until the script clears the first gate.',
      'Planned as nine scenes, the three-pair shape used by reels 20-23 and 25-28: cover, then pairs for 12.5 (the space is yours), 17.4.1 (the space that is not) and 12.9 (arms and legs), a field tip, and the closing card.',
      'Order is 12.5 -> 17.4.1 -> 12.9, NOT the lessons array order. The reel has to grant the permission before it draws the limit; leading with 17.4.1 makes the whole thing sound like defence is illegal.',
      '17.4 is a heading stem ("Blocking Fouls:") and is deliberately NOT carded — same call as 17.2 in reel 28 and 17.3 in reel 29.',
      'Do not import 17.4 annotation. The "if a tree suddenly materialized in this space" test is the richest annotation in the chapter and it is commentary, not rule text. Scene 4 explains expected position in plain English because 17.4.1 states it; the tree stays out.',
      '17.4.1 requires non-minor contact, the same qualifier lesson 27 taught. The card carries it verbatim; the spoken script must not imply any contact at all makes it a block.',
      'The remedy is deferred, not stated. 17.4.1 ends "treated as either a receiving foul or an indirect foul, whichever is applicable" and indirect fouls have not been taught yet. Card it, do not explain it.',
      '17.4.1 carries "opponents" with no apostrophe. That is what rules.json holds, so it stays that way on the card and in both block quotes. The spoken script is not a quotation and reads "that opponent\'s expected position".',
      'Measured before drafting: scene 2 kicker 887 of 900px at the standard 34px (second-widest drafted, behind reel-25 893px), scene 4 at 871px, scene 6 engages fit_kicker() at 32px. All three bodies fit at 36px. Detail cards end at max_y 716, 866 and 566 of 1310 — 17.4.1 cards whole at 346 characters with no split.'
    ]
  },
  {
    id: 'reel-31',
    date: '2026-09-05',
    title: `Force-out fouls`,
    type: 'Reel',
    typeDetail: '1080×1920 · 29.5s · 30fps',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 31,
    duration: '~30s script / 29.5s cut',
    rules: ['17.5.1', '17.5.1.1', '17.5.1.2', '17.5.2', '17.5.3'],
    review: {
      script:  {status: 'pending', on: '2026-09-02'},
      content: {status: 'in-review', on: '2026-09-03'}
    },
    postedDate: null,
    folder: 'reel-31',
    source: 'content/reel-31/script-and-caption.md',
    sourceLesson: 'content/lessons-3.json (tag: Fouls)',
    video: 'reel31-force-out-fouls.mp4',
    slides: null,
    scenes: [
      ['1', 'Cover', 'Force-out fouls · kicker BEGINNER · LESSON 31 / 75'],
      ['2', '#1 THE CONTACT MOVED YOU', '"The foul has to be what put you there." · footer cites 17.5.1, 17.5.1.1, 17.5.1.2'],
      ['3', 'Rules detail', 'Verbatim 17.5.1 + 17.5.1.1 + 17.5.1.2'],
      ['4', "#2 IN THE END ZONE, IT'S A GOAL", '"If it would have been a goal, it is a goal." · footer cites 17.5.2'],
      ['5', 'Rules detail', 'Verbatim 17.5.2'],
      ['6', '#3 CONTESTED SPLITS TWO WAYS', '"Contested? It depends where you ended up." · footer cites 17.5.3'],
      ['7', 'Rules detail', 'Verbatim 17.5.3'],
      ['8', 'FIELD TIP', '"If you were going out anyway, it\'s just out."'],
      ['9', 'Closing', '"Lesson 31 of 75." · Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `You catch it a step inside the line, a defender bumps you, and your feet land out. Was that just out — or was it a foul that owes you something?`,
      explanation: `It's a force-out if the contact is what moved you. A force-out foul occurs when a receiver is in the process of establishing possession, and is fouled by a defensive player before establishing it, and the contact caused the receiver to catch the disc out-of-bounds instead of in-bounds, or in the central zone instead of their attacking end zone. Two ways to be moved: across the sideline, or short of the end zone.`,
      example: `And the remedy matches. If you would have caught the disc in your attacking end zone, it is a goal — not the disc at the line, the point. If the call is contested, it splits on where you actually ended up: if you became out-of-bounds, the disc goes back to the thrower; otherwise it stays with you.`,
      cta: `Lesson 31 of 75 — new lesson daily.`
    },
    ig: `You catch it a step inside the line, a defender bumps you, and your feet land out. Was that just out — or was it a foul that owes you something?

**The test is whether the contact moved you.** "A Force-out Foul occurs when a receiver is in the process of establishing possession of the disc, and is fouled by a defensive player before subsequently establishing possession, and the contact caused the receiver:" — and then two ways to be moved: "to catch the disc out-of-bounds instead of in-bounds; or" "to catch the disc in the central zone instead of their attacking end zone."

Read those two together and the shape of the rule is clear. It isn't about contact near a line. It's about contact that changed which side of a line you finished on.

**The remedy gives back what the contact took.** "If the receiver would have caught the disc in their attacking end zone, it is a goal;" Not the disc at the goal line. The point.

**And if it's contested, the outcome splits.** "If the force-out foul is contested, the disc is returned to the thrower if the receiver became out-of-bounds, otherwise the disc stays with the receiver." So a contested force-out where you went out is a reset; a contested one where you stayed in leaves the disc with you.

That's the fourth and last of the named foul types — receiving, strip, blocking, force-out. Each one names a specific thing contact can take away, and each one hands it back.

Lesson 31 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `you catch it inside the line, get bumped, land out. just out? or a foul that owes you something 🥏

the test is whether the contact MOVED you:

"A Force-out Foul occurs when a receiver is in the process of establishing possession of the disc, and is fouled by a defensive player before subsequently establishing possession, and the contact caused the receiver:"

two ways to be moved —

"to catch the disc out-of-bounds instead of in-bounds; or"

"to catch the disc in the central zone instead of their attacking end zone."

so it's not about contact near a line. it's about contact that changed which side of the line you finished on

the reward:

"If the receiver would have caught the disc in their attacking end zone, it is a goal;"

not the disc at the line. THE POINT

contested? it splits:

"If the force-out foul is contested, the disc is returned to the thrower if the receiver became out-of-bounds, otherwise the disc stays with the receiver."

went out → back to the thrower. stayed in → it's yours

that's all four named foul types now: receiving, strip, blocking, force-out

lesson 31 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Rendered 2026-09-03 from the approved script. Nine scenes, exact CFR via encode.py, 29.50s against a 30.0s projection.',
      'Every layout prediction in the approved script held: kickers at 712, 834 and 826 of the 900px column, all at the standard 34px; all three main scenes at max_y 1192 of 1310; detail cards at 940, 404 and 504. One deviation — scene 6 body wraps to five lines, not the four predicted, still at 36px with fit_body() unengaged. Layout check 0 problems with no collisions; longest sustained dull-orange run 0.20s against a 0.45s threshold.',
      'Last of the four named foul types: 28 receiving, 29 strip, 30 blocking, 31 force-out. Nine scenes, the three-pair shape.',
      '17.5 is a heading stem ("Force-out Fouls:") and is deliberately NOT carded — same call as 17.2, 17.3 and 17.4 in reels 28, 29 and 30.',
      '17.5.1 is a stem ending in a colon and needs both limbs on the same card. "…and the contact caused the receiver:" is not a sentence on its own; 17.5.1.1 and 17.5.1.2 are the two ways it finishes. Same handling as 12.7 in reel 26 and 1.3 in reels 23 and 27.',
      '17.5.2 ends with a semicolon. That is what rules.json holds and what the source prints, so it stays — the card is a quotation, not prose.',
      '"In the process of establishing possession" is the hinge and must not be simplified. The foul has to land BEFORE possession is established; once it is established and contact knocks the disc out, that is lesson 29 strip. The two lessons sit either side of the same instant.',
      'Do not say "if you were going out anyway it is still a foul" — it is the opposite, and it is the whole point of the field tip. The contact has to have caused the different outcome.',
      'Dry-rendered and measured 2026-09-02 before the draft was finalised: all three kickers fit at the standard 34px (712, 834 and 826 of the 900px column) and all three bodies at 36px, so neither fit_kicker() nor fit_body() engages. All three main scenes end at max_y 1192 of 1310. Detail cards land at 940, 404 and 504. Layout check 0 problems with no collisions. Projected 30.0s.',
      'No leading or trailing double quotes anywhere in this reel copy, so the _payload() case does not arise. Start the build from content/reel-28/render_v3.py — it is the newest copy and carries the widened helper.',
      'content/scenes.json carries a force-out diagram used by the website chapter. Reels have no diagram scene and this one does not introduce it; noted so it is not a surprise later.'
    ]
  },
  {
    id: 'reel-32',
    date: '2026-09-06',
    title: `Marking fouls and the "Contact" call`,
    type: 'Reel',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 32,
    duration: '~30s script',
    rules: ['15.1', '15.2', '17.6.1', '17.6.1.1', '17.6.1.2', '17.6.1.3'],
    review: {
      script:  {status: 'pending', on: '2026-09-04'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: 'reel-32',
    source: 'content/reel-32/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Fouls)',
    video: null,
    slides: null,
    scenes: [
      ['1', 'Cover', 'Marking fouls and the "Contact" call \u00b7 kicker BEGINNER \u00b7 LESSON 32 / 75'],
      ['2', '#1 CONTACT, NOT CLOSENESS', '"A marker being near you is not a foul." \u00b7 footer cites 17.6.1, 17.6.1.1, 17.6.1.2'],
      ['3', 'Rules detail', 'Verbatim 17.6.1 + 17.6.1.1 + 17.6.1.2'],
      ['4', '#2 STILL A FOUL, DIFFERENT CALL', '"\u201cContact\u201d is not a different event." \u00b7 footer cites 15.1, 15.2'],
      ['5', 'Rules detail', 'Verbatim 15.1 + 15.2'],
      ['6', '#3 YOU CHOOSE IF PLAY STOPS', '"Foul stops the game. \u201cContact\u201d doesn\u2019t." \u00b7 footer cites 17.6.1.3'],
      ['7', 'Rules detail', 'Verbatim 17.6.1.3'],
      ['8', 'FIELD TIP', '"Say it without breaking your stance."'],
      ['9', 'Closing', '"Lesson 32 of 75." \u00b7 Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `The marker bumps you before you throw. That is a foul \u2014 and you still don't have to stop the game over it.`,
      explanation: `First, what counts. A defensive throwing foul is non-minor contact between the thrower and a defender who is illegally positioned, or non-minor contact the defender initiates before the pass is released \u2014 including both of you going for the same unoccupied space. A marker who is merely close to you is not fouling you. And that contact really is a foul: the rulebook defines a foul as non-minor contact between opposing players. Saying "Contact" does not turn it into something else.`,
      example: `What it changes is the remedy. An infraction, in this rulebook, is a marking or travel breach \u2014 and infractions don't stop play. So if the contact lands before you release and not during your throwing motion, the choice is yours. Say "Foul" and play stops. Say "Contact" and, uncontested, play doesn't stop at all \u2014 the marker just resumes the stall count at one.`,
      cta: `Lesson 32 of 75 \u2014 new lesson daily.`
    },
    ig: `The marker bumps you before you throw. That is a foul — and you still don't have to stop the game over it.

**First, what actually counts as a marking foul.** "A Defensive Throwing Foul occurs when:" — "There is non-minor contact between the thrower and an illegally positioned defensive player (Section 18.1); or" "A defensive player initiates non-minor contact with the thrower, or there is non-minor contact resulting from the thrower and the defender both vying for the same unoccupied position, prior to the thrower releasing the pass."

Read the two limbs together and the shape is clear. It is contact, and it is contact with a position problem behind it. A marker who is merely close to you is not fouling you.

**Now the part that confuses people, and it should.** If contact is what makes something a foul, how can you call it an infraction? Look at the two definitions the rulebook gives:

"A breach of the rules due to non-minor contact between two or more opposing players is a foul."

"A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."

By the first one, the bump is a foul. Full stop. Nothing you say afterwards changes what happened.

**So what does the call change?** The remedy, not the event: "If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

"May choose to call a contact infraction" is the hinge. A Defensive Throwing Foul occurred — the rule says so in its own opening clause. What you are choosing is whether to handle it the way fouls are handled, which stops the game, or the way infractions are handled, which doesn't.

"Foul" stops play. "Contact" doesn't stop it at all, and the count goes back to one.

That is a rare thing in this rulebook: a call that costs you nothing. You keep your pivot, you keep your eyes downfield, and the stall count you were losing resets. Plenty of players stop the game out of habit when they didn't have to.

One limit worth knowing: the choice only exists for contact *before* the release and *not* during your throwing motion. Contact during the throwing motion is a foul and only a foul.

Lesson 32 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `marker bumps you before you throw. that IS a foul — and you still don't have to stop the game over it 🥏

what counts first:

"A Defensive Throwing Foul occurs when:"

"There is non-minor contact between the thrower and an illegally positioned defensive player (Section 18.1); or"

"A defensive player initiates non-minor contact with the thrower, or there is non-minor contact resulting from the thrower and the defender both vying for the same unoccupied position, prior to the thrower releasing the pass."

contact + a position problem. a marker who's just CLOSE isn't fouling you

now the bit that trips everyone up. if contact is what makes it a foul, how is it an infraction?

"A breach of the rules due to non-minor contact between two or more opposing players is a foul."

"A breach of the rules regarding a Marking or Travel breach is an infraction. Infractions do not stop play."

by the first one the bump is a foul. that part is settled

here's what the call actually changes:

"If a Defensive Throwing Foul occurs prior to the thrower releasing the pass and not during the throwing motion, the thrower may choose to call a contact infraction, by calling “Contact”. After a contact infraction that is not contested, play does not stop and the marker must resume the stall count at one (1)."

"may choose to call a contact infraction" — you're picking the remedy, not renaming what happened

"Foul" → game stops
"Contact" → game does NOT stop, count goes back to 1

you keep your pivot. you keep your eyes downfield. the stall count you were losing resets

only works for contact BEFORE the release and NOT during the throwing motion. during the motion it's a foul, full stop

lesson 32 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'REDRAFT v2, 2026-09-04, answering the desk note "Isn\'t contact part of a foul call? Infraction is infraction right?". Read it and, if it lands, click Approve so the stamp is against these words. Do NOT click Request changes just to park it \u2014 the next daily run rewrites anything sitting at changes and would replace this version before you read it. v1 archived as content/reel-32/script-and-caption.v1.md; the round is written up in content/reel-32/script-feedback.md.',
      'Both halves of the note are right, and v1 invited them. 15.1 defines a foul as non-minor contact, so the bump IS a foul; 15.2 defines an infraction by the kind of breach it is. 17.6.1.3 does not reclassify anything \u2014 it offers the thrower a choice of REMEDY for a foul its own opening clause says has occurred. v2 says that outright instead of "the same contact gives you two calls".',
      'Nine scenes now, the standard three-pair shape (v1 was seven). The new middle pair cards 15.1 and 15.2 as two separate blocks \u2014 two independent definitions, not a stem and its limbs. Both were already carded in reel 21. TOTAL = 9 is the shared default, so leave it alone.',
      'CORRECTION TO THE LESSON BRIEF: lessons-2.json (marking-foul) says the stall count "resumes one lower". It does not. 17.6.1.3 says "the marker must resume the stall count at one (1)". body[2], the quiz "why" line and quiz option 1 all carry the error and need fixing on the website side \u2014 flagged, not changed here.',
      '18.1.3 is deliberately off every card. A generic marking infraction resumes at "the number last fully uttered before the call, minus one (1)"; a contact infraction resumes at one. Its own remedy, which is a further reason not to call it simply "a marking infraction".',
      '17.6 is a heading stem ("Defensive Throwing (Marking) Fouls:") and is NOT carded \u2014 same call as 17.2-17.5 in reels 28-31. 17.6.1 is a stem ending in a colon and needs both limbs on the same card.',
      '"Prior to the thrower releasing the pass and not during the throwing motion" is the hinge and stays in the Example beat and both captions. Contact DURING the throwing motion is a foul and only a foul.',
      'Do not say "Contact" is always the better call. The rule gives the thrower a free choice; the reel offers the option rather than prescribing it.',
      'Dry-measured 2026-09-04 against content/reel-31/render_v3.py: all three kickers at the standard 34px (738, 854, 772 of the 900px column), bodies auto-fit to 34, 33 and 36px, all three main scenes end at max_y 1192 of 1310, detail cards at 940, 740 and 704. Projected ~30s.',
      'The redraft retires v1\'s #2 kicker "THE CALL THAT KEEPS PLAY LIVE", which measured 896 of 900px \u2014 four pixels of headroom, the tightest in the run. The replacement is 772.',
      'Two _payload() cases: the cover title wraps so line 2 begins with a double quote ("Contact" call), and scene 4\'s headline begins with one. Confirm both in the PNG at render time, not just the SVG.'
    ]
  },
  {
    id: 'reel-33',
    date: '2026-09-07',
    title: `Fouls committed by the thrower`,
    type: 'Reel',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 33,
    duration: '~29s script',
    rules: ['17.7.1', '17.7.2'],
    review: {
      script:  {status: 'pending', on: '2026-09-04'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: 'reel-33',
    source: 'content/reel-33/script-and-caption.md',
    sourceLesson: 'content/lessons-2.json (tag: Fouls)',
    video: null,
    slides: null,
    scenes: [
      ['1', 'Cover', 'Fouls committed by the thrower \u00b7 kicker BEGINNER \u00b7 LESSON 33 / 75'],
      ['2', '#1 SOLELY RESPONSIBLE', '"You can foul the mark, too." \u00b7 footer cites 17.7.1'],
      ['3', 'Rules detail', 'Verbatim 17.7.1'],
      ['4', '#2 AFTER THE RELEASE', '"Your follow through is not a foul." \u00b7 footer cites 17.7.2'],
      ['5', 'Rules detail', 'Verbatim 17.7.2'],
      ['6', 'FIELD TIP', '"Pivot around the mark, not through it."'],
      ['7', 'Closing', '"Lesson 33 of 75." \u00b7 Follow @learn.ultimatefrisbee']
    ],
    script: {
      hook: `Everyone learns to call fouls on the mark. Almost nobody learns the one you can commit yourself.`,
      explanation: `An offensive throwing foul is the marking foul in reverse. It happens when the thrower is solely responsible for initiating non-minor contact with a defender who is in a legal position. Both halves matter. Solely responsible \u2014 not just involved. And legally positioned \u2014 because if the marker was straddling you or crowding the disc, the contact is theirs, not yours.`,
      example: `The one everyone worries about is the follow through, and the rules are explicit: contact during your follow through is not a sufficient basis for a foul. Read the rest of the sentence though \u2014 it should be avoided anyway. Not a foul is not the same as go ahead. If you're catching the mark on every throw, that's contact you can take out of your game.`,
      cta: `Lesson 33 of 75 \u2014 new lesson daily.`
    },
    ig: `Everyone learns to call fouls on the mark. Almost nobody learns the one you can commit yourself.

**The whole rule is one sentence.** "An Offensive Throwing Foul occurs when the thrower is solely responsible for initiating non-minor contact with a defensive player who is in a legal position."

Two conditions, and both have to hold.

**"Solely responsible."** Not "was involved in", not "moved first". If the contact is shared, this rule isn't the one you're looking at.

**"In a legal position."** This is the hinge. If the marker was illegally positioned, you're in the defensive throwing foul instead — that was yesterday's lesson — and the foul belongs to them. The two rules are the same collision seen from opposite ends, and the defender's position is what decides which one applies.

**Then the rule everybody wants to hear, with the half they skip.** "Contact occurring during the thrower's follow through is not a sufficient basis for a foul, but should be avoided."

"Not a sufficient basis for a foul" is a permission. "But should be avoided" is the rulebook declining to call it fine. Both clauses are in the same sentence for a reason.

So: pivot around the mark, not through it. If you're initiating contact to open your throwing window, that's the foul — the mark doesn't have to move for you. And if your follow through is catching an arm every single throw, nobody can call it, but it's still contact you could take out of your game.

Lesson 33 of 75.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one lesson a day.`,
    tiktok: `everyone learns to call fouls on the mark. almost nobody learns the one YOU can commit 🥏

the whole rule is one sentence:

"An Offensive Throwing Foul occurs when the thrower is solely responsible for initiating non-minor contact with a defensive player who is in a legal position."

two conditions, both have to hold

"solely responsible" → not "was involved". shared contact isn't this rule

"in a legal position" → the hinge. if the marker was illegally positioned it's THEIR foul, not yours. same collision, opposite ends

now the one everyone wants to hear:

"Contact occurring during the thrower's follow through is not a sufficient basis for a foul, but should be avoided."

read the whole sentence. "not a sufficient basis for a foul" = permission. "but should be avoided" = the rulebook declining to call it fine

pivot AROUND the mark, not through it. if you're initiating contact to open your throwing window, that's the foul — the mark doesn't have to move for you

lesson 33 of 75

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'Drafted 2026-09-04 by the daily task. Awaiting script review. Video not yet rendered \u2014 nothing renders until the script clears the first gate.',
      'Seven scenes, the two-pair shape (same as reels 11, 17, 19, 24 and 29). Two rule cards, so two topic/rules pairs. Set TOTAL = 7 in render_v3.py; the shared default is 9.',
      '17.7 is a heading stem ("Offensive Throwing (Thrower) Fouls:") and is NOT carded \u2014 six reels now (17.2-17.7), six stems, none carded. Neither 17.7.1 nor 17.7.2 is a stem, so each is carded whole.',
      '"Solely responsible" and "in a legal position" are the two load-bearing conditions and both are in the body copy. The second is why this reel sits directly after reel 32: the two rules are the same collision seen from opposite ends, and the defender\'s position decides which applies.',
      '17.7.2\'s second clause is not optional copy. "But should be avoided" ships on the card because it is part of the quoted sentence, and in the body and both captions because dropping it turns a narrow allowance into a licence.',
      'Do not name straddle, disc space or wrapping on screen \u2014 they are 18.1 and belong to lessons 17-19. The reel uses the rule\'s own phrase, "in a legal position". (The Explanation beat mentions straddling once as spoken example; keep it out of the slide bodies and cards.)',
      "17.6's annotation on the thrower moving into a stationary legal marker, and on intentional contact being a Spirit breach, is a good gloss but is annotation rather than rule text. Off the cards, out of the body copy.",
      'The remedy \u2014 what happens after the call \u2014 is chapters 10 and 16, lessons 35 and 38. Not opened here.',
      'Dry-measured 2026-09-04 against content/reel-31/render_v3.py: both kickers at the standard 34px (612 and 572 of the 900px column), bodies auto-fit to 33 and 35px, both main scenes end at max_y 1192 of 1310, field tip at 1012, detail cards at 554 and 454 \u2014 the emptiest pair in the run. Projected ~28.5s.',
      'No _payload() case anywhere in this reel: no element starts or ends with a double quote.'
    ]
  }
];
