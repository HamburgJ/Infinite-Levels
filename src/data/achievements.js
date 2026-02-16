const achievements = {
  FIRST_STEPS: {
    id: 'FIRST_STEPS',
    title: 'First Steps',
    description: 'Your journey has taken you through 5 different worlds. There\'s always more to find.',
    secret: false,
    emoji: '👣'
  },
  LEVEL_5: {
    id: 'LEVEL_5',
    title: 'Explorer',
    description: 'You found your way to level 5. The path ahead grows wider.',
    secret: false,
    emoji: '🌟'
  },
  LEVEL_6: {
    id: 'LEVEL_6',
    title: 'Explorer 2',
    description: 'Reached level 6 — a crossroads with many paths to explore.',
    secret: false,
    emoji: '🌟'
  },
  BACKTRACKER: {
    id: 'BACKTRACKER',
    title: 'Backtracker',
    description: 'Some levels are worth revisiting. You\'ve returned to the same one 5 times now.',
    secret: false,
    emoji: '🔄'
  },
  TUTORIAL_COMPLETE: {
    id: 'TUTORIAL_COMPLETE',
    title: 'Tutorial Master',
    description: 'You\'ve walked from level 0 to level 10 and back. The tutorial is behind you.',
    secret: false,
    emoji: '📚'
  },
  NUMBER_ENTRY: {
    id: 'NUMBER_ENTRY',
    title: 'Digital Explorer',
    description: 'Discovered a way to go anywhere by typing a number. Level 10 holds this power.',
    secret: true,
    revealAfter: ['TUTORIAL_COMPLETE'],
    emoji: '🔢'
  },
  COMPLEX_NUMBERS: {
    id: 'COMPLEX_NUMBERS',
    title: 'Complex Mind',
    description: 'Stepped through a doorway on level 9 into a world of imaginary numbers.',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🌀'
  },
  NEGATIVE_SPACE: {
    id: 'NEGATIVE_SPACE',
    title: 'Down Under',
    description: 'Ventured below level 0 into negative territory. A whole mirrored world exists down there.',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '⬇️'
  },
  MAKING_MY_OWN_PATH: {
    id: 'MAKING_MY_OWN_PATH',
    title: 'Making My Own Path',
    description: 'Numbers in text are doorways. Try it anywhere — even in here. Level 42 awaits.',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🚶‍♂️'
  },
  TEXT_NUMBER: {
    id: 'TEXT_NUMBER',
    title: 'Word Wizard',
    description: 'Words can be numbers too. Found one, two, or three hiding in plain sight.',
    secret: true,
    revealAfter: ['MAKING_MY_OWN_PATH'],
    emoji: '👩‍💻'
  },
  COMPLEX_NOTATION: {
    id: 'COMPLEX_NOTATION',
    title: 'Imaginary Friend',
    description: 'Found a complex number like 1+1i hiding in text. The imaginary world leaks through everywhere.',
    secret: true,
    emoji: '🧠'
  },
  MATHEMATICAL_CONSTANT: {
    id: 'MATHEMATICAL_CONSTANT',
    title: 'Natural Explorer',
    description: 'Discovered the constant e — about 2.718. Nature\'s favorite number has a level too.',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🌱'
  },
  SOUND_ALIKE: {
    id: 'SOUND_ALIKE',
    title: 'Sound Detective',
    description: 'Heard a number hiding in a word. The game listens for more than you\'d expect.',
    secret: true,
    revealAfter: ['TEXT_NUMBER'],
    emoji: '👂'
  },
  ROMAN_NUMERAL: {
    id: 'ROMAN_NUMERAL',
    title: 'Classical Scholar',
    description: 'Decoded a Roman numeral. Even ancient notation can be a doorway here.',
    secret: true,
    revealAfter: ['TEXT_NUMBER'],
    emoji: '👨‍🏫'
  },
  INFINITY_LEVEL_REACHED: {
    id: 'INFINITY_LEVEL_REACHED',
    title: 'Infinity Awaits',
    description: 'Crossed beyond the finite. Infinity has levels — and they have secrets.',
    secret: true,
    revealAfter: ['LEVEL_1M'],
    emoji: '🌐'
  },
  TEN_INFINITY_LEVELS: {
    id: 'TEN_INFINITY_LEVELS',
    title: 'Infinite Journey',
    description: 'Visited 10 different infinity levels. The boundary of mathematics is vast.',
    secret: true,
    revealAfter: ['INFINITY_LEVEL_REACHED'],
    emoji: '🚂'
  },
  NEGATIVE_INFINITY_LEVEL_REACHED: {
    id: 'NEGATIVE_INFINITY_LEVEL_REACHED',
    title: 'Negative Infinity',
    description: 'Found negative infinity. Even the infinite has a shadow below zero.',
    secret: true,
    revealAfter: ['INFINITY_LEVEL_REACHED', 'NEGATIVE_SPACE'],
    emoji: '🌍'
  },
  FLIPPED_REALITY: {
    id: 'FLIPPED_REALITY',
    title: 'Flipped Reality',
    description: 'Used the upside-down text in a negative level as a doorway. Reality bends below level 0.',
    secret: true,
    revealAfter: ['NEGATIVE_SPACE'],
    emoji: '🌌'
  },
  WALLET_FOUND: {
    id: 'WALLET_FOUND',
    title: 'Money Manager',
    description: 'Found the wallet hidden on level 4. It turns coins into shortcuts.',
    secret: true,
    revealAfter: ['LEVEL_5'],
    emoji: '💰'
  },
  WALLET_TRAVEL: {
    id: 'WALLET_TRAVEL',
    title: 'Digital Transaction',
    description: 'Spent some cash from the wallet and traveled somewhere new. Money talks — and moves.',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '💳'
  },
  STACK_TRAVEL: {
    id: 'STACK_TRAVEL',
    title: 'Stack Counter',
    description: 'The money stack counter was a button. Even the numbers in your wallet are doorways.',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '🧮'
  },
  SCALE_TRAVEL: {
    id: 'SCALE_TRAVEL',
    title: 'Weight Watcher',
    description: 'The scale on level 7 shows a number — and that number is a destination.',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '⚖️'
  },
  HINT_EXPLORER: {
    id: 'HINT_EXPLORER',
    title: 'Hint Master',
    description: 'Opened hints in 10 different levels. Curiosity pays off.',
    secret: false,
    emoji: '💡'
  },
  HINT_GOD: {
    id: 'HINT_GOD',
    title: 'Hint God',
    description: 'Opened hints in 100 different levels. You\'ve read the game\'s entire guidebook.',
    secret: true,
    emoji: '💡'
  },
  COIN_TRAVEL: {
    id: 'COIN_TRAVEL',
    title: 'Loose Change',
    description: 'Clicked on loose change and it took you somewhere. Coins on level 7 are full of surprises.',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '💸'
  },
  LEVEL_100: {
    id: 'LEVEL_100',
    title: 'Centurion',
    description: 'Crossed into triple digits — level 100. There\'s something special waiting here.',
    secret: false,
    emoji: '💯'
  },
  LEVEL_1000: {
    id: 'LEVEL_1000',
    title: 'Millennium',
    description: 'Reached level 1000. The view from up here is worth the climb.',
    secret: false,
    revealAfter: ['LEVEL_100'],
    emoji: '🏆'
  },
  LEVEL_1M: {
    id: 'LEVEL_1M',
    title: 'Millionaire',
    description: 'One million. You\'ve reached level 1000000. How far do the levels really go?',
    secret: false,
    revealAfter: ['LEVEL_1000'],
    emoji: '💰'
  },
  LEVEL_1B: {
    id: 'LEVEL_1B',
    title: 'Billionaire',
    description: 'A billion levels deep. Level 1000000000 exists. The scale of this place is staggering.',
    secret: true,
    revealAfter: ['LEVEL_1M'],
    emoji: '💎'
  },
  LEVEL_10B10: {
    id: 'LEVEL_10B10',
    title: 'Astronomical',
    description: 'Ten billion. You\'ve gone further than most would believe possible.',
    secret: true,
    revealAfter: ['LEVEL_1B'],
    emoji: '🌌'
  },
  LEVEL_GOOGOL: {
    id: 'LEVEL_GOOGOL',
    title: 'Do They Go That Far?',
    description: 'Reached a googol — that\'s a 1 followed by 100 zeros. The numbers are beyond comprehension.',
    secret: true,
    revealAfter: ['LEVEL_10B10'],
    emoji: '🌐'
  },
  BUTTON_INVENTORY_TRAVEL: {
    id: 'BUTTON_INVENTORY_TRAVEL',
    title: 'Button Collector',
    description: 'Used a collected button to travel. Things you pick up are more than souvenirs.',
    secret: true,
    emoji: '🔘'
  },
  NUMBER_DESCRIPTION: {
    id: 'NUMBER_DESCRIPTION',
    title: 'Descriptive Numbers',
    description: 'Found a level through a number\'s description. Words are just another way to count.',
    secret: true,
    revealAfter: ['TEXT_NUMBER'],
    emoji: '📝'
  },
  RATIONAL_NUMBER: {
    id: 'RATIONAL_NUMBER',
    title: 'Rational Mind',
    description: 'Visited a level between the integers. There are worlds hiding between whole numbers.',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '➗'
  },
  IRRATIONAL_NUMBER: {
    id: 'IRRATIONAL_NUMBER',
    title: 'Irrational Explorer',
    description: 'Visited a level like π or e. Even numbers that never end have a home here.',
    secret: true,
    revealAfter: ['RATIONAL_NUMBER'],
    emoji: '🌀'
  },
  BETWEEN_THE_LINES: {
    id: 'BETWEEN_THE_LINES',
    title: 'Between the Lines',
    description: 'Discovered the spaces between integers. Level 0.5 is just the beginning.',
    secret: true,
    revealAfter: ['RATIONAL_NUMBER'],
    emoji: '🔍'
  },
  DECIMAL_EXPLORER: {
    id: 'DECIMAL_EXPLORER',
    title: 'Decimal Explorer',
    description: 'Visited 5 different decimal levels. The number line has infinite depth between every integer.',
    secret: true,
    revealAfter: ['BETWEEN_THE_LINES'],
    emoji: '🗺️'
  },
  POINT_TAKEN: {
    id: 'POINT_TAKEN',
    title: 'Point Taken',
    description: 'Used the word "point" to navigate to a decimal. Language and math keep blurring together.',
    secret: true,
    revealAfter: ['BETWEEN_THE_LINES'],
    emoji: '👉'
  },
  CARD_BOX_FOUND: {
    id: 'CARD_BOX_FOUND',
    title: 'Card Collector',
    description: 'Found the card box near level 100. It holds cards — and every card has a number on it.',
    secret: true,
    revealAfter: ['LEVEL_5'],
    emoji: '📦'
  },
  FIRST_CARD_STORED: {
    id: 'FIRST_CARD_STORED',
    title: 'First Addition',
    description: 'Stored your first card in the card box. A collection is beginning.',
    secret: true,
    revealAfter: ['CARD_BOX_FOUND'],
    emoji: '🎴'
  },
  CARD_TRAVEL: {
    id: 'CARD_TRAVEL',
    title: 'Card Trick',
    description: 'Traveled somewhere using a card from your collection. Every card is a ticket.',
    secret: true,
    revealAfter: ['FIRST_CARD_STORED'],
    emoji: '🃏'
  },
  DARK_HOLOGRAPHIC: {
    id: 'DARK_HOLOGRAPHIC',
    title: 'Dark Collector',
    description: 'Found a dark holographic card. Rare and beautiful — check level 10000000 for more.',
    secret: true,
    revealAfter: ['FIRST_CARD_STORED'],
    emoji: '⚫'
  },
  GOLD_SHINY: {
    id: 'GOLD_SHINY',
    title: 'Golden Touch',
    description: 'Found a gold shiny card. It catches the light. There might be more scattered across the levels.',
    secret: true,
    revealAfter: ['FIRST_CARD_STORED'],
    emoji: '✨'
  },
  DIAMOND_CARD: {
    id: 'DIAMOND_CARD',
    title: 'Diamond in the Rough',
    description: 'Found a diamond rarity card. The rarest of the rare. How many are out there?',
    secret: true,
    revealAfter: ['FIRST_CARD_STORED'],
    emoji: '💎'
  },
  FULL_SUIT: {
    id: 'FULL_SUIT',
    title: 'Full House',
    description: 'Collected every card of one suit. The set is complete — are there other suits to find?',
    secret: true,
    revealAfter: ['FIRST_CARD_STORED'],
    emoji: '♠️'
  },
  DIAMOND_FOUND: {
    id: 'DIAMOND_FOUND',
    title: 'Precious Stone',
    description: 'Found the diamond hidden on level 153, behind a shrine. It weighs exactly 3.52 grams.',
    secret: true,
    revealAfter: ['LEVEL_100'],
    emoji: '💎'
  },
  BLACK_HOLE_FOUND: {
    id: 'BLACK_HOLE_FOUND',
    title: 'Event Horizon',
    description: 'Found The Singularity at level 5+5i. Its weight is... infinite.',
    secret: true,
    revealAfter: ['LEVEL_1000'],
    emoji: '⚫'
  },
  BOX_UNLOCKED: {
    id: 'BOX_UNLOCKED',
    title: 'Locksmith',
    description: 'Unlocked a locked box on level 9. The key came from somewhere impossible.',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🔓'
  },
  JESTER_FRIEND: {
    id: 'JESTER_FRIEND',
    title: 'Jester Friend',
    description: 'The Jester keeps appearing — 5 meetings so far. He seems to like prime numbers...',
    secret: false,
    emoji: '🃏'
  },
  JESTER_BUDDY: {
    id: 'JESTER_BUDDY',
    title: 'Jester Buddy',
    description: '10 encounters with the Jester now. He\'s definitely following you.',
    secret: true,
    revealAfter: ['JESTER_FRIEND'],
    emoji: '🎭'
  },
  JESTER_COMPANION: {
    id: 'JESTER_COMPANION',
    title: 'Jester Companion',
    description: '20 meetings with the Jester. He appears on level 8, level 11, and stranger places.',
    secret: true,
    revealAfter: ['JESTER_BUDDY'],
    emoji: '🎪'
  },
  JESTER_CONFIDANT: {
    id: 'JESTER_CONFIDANT',
    title: 'Jester Confidant',
    description: '30 encounters. The Jester is more than a trickster — he\'s leaving a trail.',
    secret: true,
    revealAfter: ['JESTER_COMPANION'],
    emoji: '🎨'
  },
  JESTER_MASTER: {
    id: 'JESTER_MASTER',
    title: 'Jester Master',
    description: '50 meetings with the Jester. You know his patterns well by now.',
    secret: true,
    revealAfter: ['JESTER_CONFIDANT'],
    emoji: '👑'
  },
  JESTER_LEGEND: {
    id: 'JESTER_LEGEND',
    title: 'Jester Legend',
    description: '100 encounters with the Jester. You might know him better than he knows himself.',
    secret: true,
    revealAfter: ['JESTER_MASTER'],
    emoji: '⭐'
  },
  EQUATION_SOLVER: {
    id: 'EQUATION_SOLVER',
    title: 'Equation Master',
    description: 'Solved a math equation hiding in the text. The answer was a destination.',
    secret: true,
    revealAfter: ['MAKING_MY_OWN_PATH'],
    emoji: '📐'
  },
  HINT_TEXT: {
    id: 'HINT_TEXT',
    title: 'Hint Text',
    description: 'Found a level number hidden inside a hint. Even the help system has secrets.',
    secret: true,
    emoji: '💡'
  },
  LEVEL_TEXT: {
    id: 'LEVEL_TEXT',
    title: 'Level-ception',
    description: 'Found a level hiding inside another level\'s name. Levels within levels.',
    secret: true,
    emoji: '🔄'
  },
  TITLE_TEXT: {
    id: 'TITLE_TEXT',
    title: 'Title Text',
    description: 'Found a level hidden in the game\'s title. It was right there all along.',
    secret: true,
    emoji: '🎯'
  },
  CONFIRMATION_TEXT: {
    id: 'CONFIRMATION_TEXT',
    title: 'Confirmation Text',
    description: 'Found a level hidden in a confirmation popup. Nowhere is safe from hidden numbers.',
    secret: true,
    emoji: '✅'
  },
  SETTINGS_TEXT: {
    id: 'SETTINGS_TEXT',
    title: 'Settings Text',
    description: 'Found a level hidden in the settings menu. Even the menus have secrets.',
    secret: true,
    emoji: '⚙️'
  },
  ACHIEVEMENT_TEXT: {
    id: 'ACHIEVEMENT_TEXT',
    title: 'Achievement Text',
    description: 'Found a level hidden in an achievement. Even these words could take you to level 42.',
    secret: true,
    emoji: '🏆'
  },
  MATH_EXPRESSION: {
    id: 'MATH_EXPRESSION',
    title: 'Calculator',
    description: 'Evaluated a math expression to reach a level. The game speaks calculator.',
    secret: true,
    emoji: '🔢'
  },
  NEGATIVE_WORD: {
    id: 'NEGATIVE_WORD',
    title: 'Negative Word',
    description: 'Found a negative number written as a word. "Negative" is just another direction.',
    secret: true,
    emoji: '🔢'
  },
  NEGATIVE_NUMBER_TEXT: {
    id: 'NEGATIVE_NUMBER_TEXT',
    title: 'Negative Number',
    description: 'Found a negative number hiding in text. The numbers below zero are everywhere.',
    secret: true,
    emoji: '🔢'
  },
  STRANGE_PRESENCE: {
    id: 'STRANGE_PRESENCE',
    title: 'Strange Presence',
    description: 'Felt something pass through the level. A temporal anomaly — but what was it?',
    secret: true,
    emoji: '👥'
  },
  COLLAPSE: {
    id: 'COLLAPSE',
    title: 'Collapse',
    description: 'A level became unstable and collapsed around you. Some places can\'t hold together.',
    secret: true,
    emoji: '💥'
  },
  LEVEL_20: {
    id: 'LEVEL_20',
    title: 'Score!',
    description: 'Reached level 20. A wormhole hums nearby — level 30 is calling.',
    secret: false,
    emoji: '🎯'
  },
  CURIOUS_MIND: {
    id: 'CURIOUS_MIND',
    title: 'Curious Mind',
    description: 'Visited level 37 — the most "random" number. Or is it?',
    secret: true,
    revealAfter: ['LEVEL_100'],
    emoji: '🎲'
  },
  DOWN_UNDER: {
    id: 'DOWN_UNDER',
    title: 'Down Under',
    description: 'Found the shadow at level negative 0. Something glinted in the darkness.',
    secret: true,
    revealAfter: ['NEGATIVE_SPACE'],
    emoji: '🕳️'
  },
  PURITY: {
    id: 'PURITY',
    title: 'Pure Heart',
    description: 'Reached the shadow of zero with a pure heart — no achievements to your name. Remarkable.',
    secret: true,
    hidden: true,
    emoji: '✨'
  },
  OVERFLOW: {
    id: 'OVERFLOW',
    title: 'Overflow',
    description: 'Pushed a number to its breaking point. The edges of computation are fragile.',
    secret: true,
    revealAfter: ['LEVEL_100'],
    emoji: '💾'
  },
  PERFECT_VISITOR: {
    id: 'PERFECT_VISITOR',
    title: 'Perfect',
    description: 'Found a perfect number — one that equals the sum of its factors. Level 6 and level 28 know this secret.',
    secret: true,
    revealAfter: ['LEVEL_20'],
    emoji: '💎'
  },
  AMICABLE: {
    id: 'AMICABLE',
    title: 'Amicable',
    description: 'Visited both halves of an amicable pair — two numbers bound together by their factors. Like level 220 and level 284.',
    secret: true,
    revealAfter: ['PERFECT_VISITOR'],
    emoji: '🤝'
  },
  INTO_THE_VOID: {
    id: 'INTO_THE_VOID',
    title: 'Into the Void',
    description: 'Found a level with nothing in it. Empty, quiet, and somehow still here.',
    secret: true,
    revealAfter: ['LEVEL_100'],
    emoji: '🕳️'
  },
  LOST_AND_FOUND: {
    id: 'LOST_AND_FOUND',
    title: 'Lost and Found',
    description: 'Pieced together the Jester\'s trail. Fragments left behind in empty levels tell a story.',
    secret: true,
    revealAfter: ['INTO_THE_VOID'],
    emoji: '🔍'
  },
  DETECTIVE: {
    id: 'DETECTIVE',
    title: 'Detective',
    description: 'Followed the Jester\'s fragments from first to last. The whole story is there if you look.',
    secret: true,
    revealAfter: ['LOST_AND_FOUND'],
    emoji: '🕵️'
  },
  MIRROR_MIRROR: {
    id: 'MIRROR_MIRROR',
    title: 'Mirror, Mirror',
    description: 'Visited both halves of a digit-swapped pair. Like level 12 and level 21 — reflections of each other.',
    secret: true,
    revealAfter: ['LEVEL_100'],
    emoji: '🪞'
  },
  COMPLEX_EXPLORER: {
    id: 'COMPLEX_EXPLORER',
    title: 'Complex Explorer',
    description: 'Visited 10 different complex levels. The imaginary plane stretches out from level 1+1i in every direction.',
    secret: true,
    revealAfter: ['COMPLEX_NUMBERS'],
    emoji: '🧭'
  },
  STABLE_HOPPER: {
    id: 'STABLE_HOPPER',
    title: 'Island Hopper',
    description: 'Visited 15 stable islands in the complex plane. Each one is an oasis in the chaos.',
    secret: true,
    revealAfter: ['COMPLEX_EXPLORER'],
    emoji: '🏝️'
  },
  CARTOGRAPHER: {
    id: 'CARTOGRAPHER',
    title: 'Cartographer',
    description: 'Found all of the Cartographer\'s journal entries scattered across the complex plane.',
    secret: true,
    revealAfter: ['COMPLEX_EXPLORER'],
    emoji: '🗺️'
  },
  PHASE_COMPLETE: {
    id: 'PHASE_COMPLETE',
    title: 'Phase Complete',
    description: 'Assembled all 5 phases of complex understanding. The pattern is complete.',
    secret: true,
    revealAfter: ['COMPLEX_EXPLORER'],
    emoji: '🔮'
  },
  FULL_ROTATION: {
    id: 'FULL_ROTATION',
    title: 'Full Rotation',
    description: 'Walked the unit circle — visited levels 1, i, negative 1, and negative i. A full rotation.',
    secret: true,
    revealAfter: ['COMPLEX_NUMBERS'],
    emoji: '🔄'
  },
  QUADRANT_EXPLORER: {
    id: 'QUADRANT_EXPLORER',
    title: 'Four Corners',
    description: 'Explored all 4 quadrants of the complex plane. The map is taking shape.',
    secret: true,
    revealAfter: ['COMPLEX_EXPLORER'],
    emoji: '🧭'
  },
  SINGULARITY: {
    id: 'SINGULARITY',
    title: 'Event Horizon',
    description: 'Found the Singularity at 5+5i — the heart of the complex plane. It pulls everything toward it.',
    secret: true,
    revealAfter: ['COMPLEX_NUMBERS'],
    emoji: '🕳️'
  },
  NUMBERSERVATORY: {
    id: 'NUMBERSERVATORY',
    title: 'The Numberservatory',
    description: 'Reached the deepest charted point in the complex plane. The observatory at the edge of everything.',
    secret: true,
    revealAfter: ['SINGULARITY'],
    emoji: '🔭'
  },
  COMPLEX_SURVIVOR: {
    id: 'COMPLEX_SURVIVOR',
    title: 'Survivor',
    description: 'Got ejected from 10 collapsing complex levels and survived. Instability is part of the journey.',
    secret: true,
    revealAfter: ['COLLAPSE'],
    emoji: '💪'
  },
  DEEP_DIVER: {
    id: 'DEEP_DIVER',
    title: 'Deep Diver',
    description: 'Ventured into quadrant 3 of the complex plane — the Deep. It\'s darker down there.',
    secret: true,
    revealAfter: ['COMPLEX_NUMBERS'],
    emoji: '🌊'
  },
  PARTY_POOPER: {
    id: 'PARTY_POOPER',
    title: 'Party Pooper',
    description: 'Popped the balloon on level 55. They asked you not to. You did it anyway.',
    secret: true,
    emoji: '🎈'
  },
  FULLY_SWAPPED: {
    id: 'FULLY_SWAPPED',
    title: 'Through the Looking Glass',
    description: 'Visited all six digit-swapped levels. Every mirror has been found — 102, 201, 132, 231, 358, and 853.',
    secret: true,
    revealAfter: ['MIRROR_MIRROR'],
    emoji: '🔀'
  }
};

// Ccomplete all grow game endings
// go to a level from a formula
// go to a non-integer level
// visit a level 10 times
// leave a level 10 times
// find x exits from a level

export default achievements; 