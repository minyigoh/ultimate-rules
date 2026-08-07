/* Content Desk — data
 *
 * Mirrors the repo's own content files. Regenerate/edit by hand when content
 * changes; this file is the dashboard's single source of truth for what exists.
 *
 *   content/calendar.md                     queue, status, posted dates
 *   content/pending-review/week-1-reels.md  the week-1 batch (scripts + captions)
 *   content/reel-1|2/script-and-caption.md  standalone film-ready copy + scenes
 *   content/carousel-post-1/caption.md      carousel captions
 *   social/brand-identity.md                voice, palette, attribution rules
 *
 * Each post carries two independent review tracks:
 *
 *   review.script   the words        pending | approved | changes | rejected
 *   review.content  the rendered cut awaiting-render | in-review | approved
 *                                    | rerender | rejected
 *
 * They gate each other in one direction only: nothing renders until the script
 * is approved, and approving a script never implies the cut that comes out of
 * it is any good. `awaiting-render` means the render task hasn't produced a
 * file yet; `in-review` means one exists and is waiting on you.
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
  cadence: 'Daily. Written in weekly batches of 7, nothing goes out un-reviewed.'
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
    title: `You can't run — but you can pivot`,
    type: 'Reel',
    typeDetail: '1080×1920 · 30.2s · 30fps',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 2,
    duration: '~25s script / 30.2s cut',
    rules: ['18.2.2', '18.2.3', '18.2.3.1'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'approved', on: '2026-08-06'}
    },
    postedDate: '2026-08-07',
    folder: 'reel-2',
    source: 'content/reel-2/script-and-caption.md',
    sourceLesson: 'content/lessons-1.json → no-running',
    video: 'reel2-you-cant-run-but-you-can-pivot.mp4',
    slides: null,
    flag: 'Date mismatch: content/reel-2/script-and-caption.md says "Queued: 2026-08-08", but content/calendar.md records it as posted 2026-08-07. Calendar treated as authoritative here.',
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
    typeDetail: 'Not yet filmed',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 3,
    duration: '~25s',
    rules: ['9.1', '9.3', '9.4', '13.2.2'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: null,
    source: 'content/pending-review/week-1-reels.md § 3',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: null,
    slides: null,
    script: {
      hook: `There's a clock in ultimate that only exists when someone says it out loud.`,
      explanation: `Your defender counts you down: "Stalling one, two, three…" up to ten, each number at least a second apart. If they start saying "ten" before you release, it's a turnover. Gone before the word starts — not before it finishes.`,
      example: `Count along in your head. If their count sounds too fast, just say "fast count" — a normal call, not a confrontation.`,
      cta: `Lesson 3 of 75. Tomorrow: the five ways you can lose the disc.`
    },
    scenes: null,
    ig: `The stall count only exists because someone's saying it out loud.

Your marker counts to ten, a second apart each number. Release before they start "ten" and you're fine — the wording matters more than people think.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day.`,
    tiktok: `the stall count rule that decides way more games than people realize

it's about when they START saying ten, not when they finish 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'No reel-3/ folder yet — script + captions live in the week-1 batch file. Video still to render.'
    ]
  },

  {
    id: 'reel-4',
    date: '2026-08-09',
    title: 'Five ways to lose the disc',
    type: 'Reel',
    typeDetail: 'Not yet filmed',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 4,
    duration: '~25s',
    rules: ['13.1', '13.2'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: null,
    source: 'content/pending-review/week-1-reels.md § 4',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: null,
    slides: null,
    script: {
      hook: `Know these five and you'll stop being surprised by sudden changes of possession.`,
      explanation: `Possession flips instantly, no stoppage, when: the disc hits the ground, a defender catches it, it goes out of bounds, or the pull is touched then dropped. It also flips — with a stoppage — on the stall-out or a few odd acts, like handing the disc to a teammate.`,
      example: `The moment the disc hits the ground, sprint to guard someone. Points get lost in the two seconds right after a turnover.`,
      cta: `Lesson 4 of 75 — follow for the rest.`
    },
    scenes: null,
    ig: `Five ways to lose the disc, so you stop being surprised when possession flips.

Most turnovers happen instantly, no whistle: dropped, blocked, out of bounds. A couple happen with a stoppage first, like the stall-out. Know the difference and you'll never be the last one to react.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next one.`,
    tiktok: `disc hits the ground and suddenly everyone's sprinting the other way

here's every way that happens, in 25 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'No reel-4/ folder yet — script + captions live in the week-1 batch file. Video still to render.',
      'Hook says "five ways" but the explanation lists four instant + stall-out + odd acts — worth a pass to make the count land exactly.'
    ]
  },

  {
    id: 'reel-5',
    date: '2026-08-10',
    title: 'There are no referees. You are the referee.',
    type: 'Reel',
    typeDetail: 'Not yet filmed',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 5,
    duration: '~25s',
    rules: ['1.1', '1.2', '15.4', '13.3'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: null,
    source: 'content/pending-review/week-1-reels.md § 5',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: null,
    slides: null,
    script: {
      hook: 'This is the one thing that makes ultimate different from every other field sport.',
      explanation: `There are no referees. Every call — including against your own team — is made by the players on the field. The rules assume nobody breaks them on purpose, which is why penalties are gentle: they try to recreate what would've happened anyway, not punish.`,
      example: `Only the player who was fouled can call the foul. You can't call it on a teammate's behalf.`,
      cta: `Lesson 5 of 75 — this one's spirit of the game, not a rule number.`
    },
    scenes: null,
    ig: `No referees. Every call on the field is made by the players — including against your own team.

That's not a gap in the rules, it's the design. The whole system assumes you'll be honest, and the penalties are built to recreate what would've happened, not to punish.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — one rule a day.`,
    tiktok: `no refs. players make every call, even against themselves

this is the rule that explains the whole culture of the sport 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'No reel-5/ folder yet — script + captions live in the week-1 batch file. Video still to render.'
    ]
  },

  {
    id: 'reel-6',
    date: '2026-08-11',
    title: 'The field, and why the lines are out',
    type: 'Reel',
    typeDetail: 'Not yet filmed',
    pillar: 'Rules',
    difficulty: 'Never played',
    lesson: 6,
    duration: '~20s',
    rules: ['2.1', '2.2', '2.3', '2.4', '11.1'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: null,
    source: 'content/pending-review/week-1-reels.md § 6',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: null,
    slides: null,
    script: {
      hook: 'One detail here trips up almost every new player.',
      explanation: `Full field: 100m long, 37m wide, with an 18m end zone at each end. The sidelines and end lines are NOT part of the field — stand on one and you're out. The goal line, though, belongs to the central zone, not the end zone.`,
      example: `Catch near the sideline? Look down. Toeing the line is out — the opposite of most sports.`,
      cta: `Lesson 6 of 75 — link in bio for the full curriculum.`
    },
    scenes: null,
    ig: `The lines are out. All of them.

Sidelines, end lines — not part of the field. Stand on one and you're out of bounds, which is the opposite of how most sports draw their boundaries. The goal line's different: it belongs to the central zone.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee for the next lesson.`,
    tiktok: `the lines on an ultimate field are OUT, not in, and it trips up everyone once

here's the field layout in 20 seconds 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'No reel-6/ folder yet — script + captions live in the week-1 batch file. Video still to render.',
      'The carousel already has a to-scale field diagram (02_the_field.png) — reuse it rather than redrawing.'
    ]
  },

  {
    id: 'reel-7',
    date: '2026-08-12',
    title: 'The pull: how every point starts',
    type: 'Reel',
    typeDetail: 'Not yet filmed',
    pillar: 'Rules',
    difficulty: 'Beginner',
    lesson: 7,
    duration: '~25s',
    rules: ['7.1', '7.2', '7.3', '7.4', '7.6'],
    review: {
      script:  {status: 'approved', on: '2026-08-06'},
      content: {status: 'awaiting-render', on: null}
    },
    postedDate: null,
    folder: null,
    source: 'content/pending-review/week-1-reels.md § 7',
    sourceLesson: 'content/lessons-1.json (tag: Basics)',
    video: null,
    slides: null,
    script: {
      hook: `It's ultimate's kickoff, and it has its own small ritual.`,
      explanation: `Every point starts with the defence throwing the disc the length of the field — the pull. Before it goes, both teams raise a hand to signal ready. Offence keeps a foot on their own goal line, defence stays fully behind theirs, until the disc is released.`,
      example: `Half of all pull confusion is a team that never actually signalled. Raise your hand clearly and early.`,
      cta: `Lesson 7 of 75 — that's week one. New lesson daily.`
    },
    scenes: null,
    ig: `Every point starts the same way: the pull.

Defence throws it the length of the field. Both teams signal ready with a raised hand first, and nobody moves until the disc actually leaves the puller's hand — not before, not on the run-up.

Rule text: WFDF Rules of Ultimate 2025–2028. Full breakdown in bio.

Follow @learn.ultimatefrisbee — that's week one of the daily rules.`,
    tiktok: `ultimate's version of a kickoff, and it has its own tiny ritual

everyone's raising a hand and you had no idea why 🥏

rules from WFDF Rules of Ultimate 2025–2028 — full breakdown in bio`,
    hashtags: ['#UltimateFrisbee', '#SpiritOfTheGame', '#WFDFRulesofUltimate', '#LearnUltimateFrisbee', '#UltimateFrisbeeTips'],
    notes: [
      'No reel-7/ folder yet — script + captions live in the week-1 batch file. Video still to render.',
      'Last of week one — week two batch needs writing before 2026-08-13.'
    ]
  }
];
