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
      'Window is one day wider on the early side than the standing "seven days ending Thursday" rule, so the recap starts where the curriculum does. Lesson 8 moves to next Thursday, which covers 8-14.'
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
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 13,
    rules: ['14.3', '11.3.2.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-15'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: 'reel-13',
    source: 'content/reel-13/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Scoring)',
    video: null,
    slides: null,
    scenes: null,
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
      'Drafted 2026-08-15 by the daily task. Awaiting script review.',
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
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 14,
    rules: ['18.2.1', '18.2.4.1'],
    review: {
      script:  {status: 'pending', on: '2026-08-16'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: 'reel-14',
    source: 'content/reel-14/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json (tag: Movement)',
    video: null,
    slides: null,
    scenes: null,
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
      'Drafted 2026-08-16 by the daily task. Awaiting script review.',
      'Two rules, so eight scenes rather than nine — scenes 2 and 4 both foot to 18.2.1 with one citation card between them, and 18.2.4.1 gets its own card.',
      'Scene 6 cites 18.2.4 as the lead-in to 18.2.4.1. 18.2.4 is not in the lesson rules array, but 18.2.4.1 is a sub-clause and a fragment on its own; its parent supplies "A travel infraction occurs if:". Both strings are verbatim from rules.json, which is the point — writing that lead-in in my own words on a citation card would be an attribution failure.',
      'Deliberately stops short of what happens after the call. Travel is called and play does not stop, but that is Lesson 16 (18.2.5) and this lesson is not scoped for it.',
      'Pairs with Lesson 2, which established the pivot; this one is how you legally get to it.'
    ]
  }
];
