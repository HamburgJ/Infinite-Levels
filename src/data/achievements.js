const achievements = {
  LEVEL_5: {
    id: 'LEVEL_5',
    title: 'Explorer',
    description: 'Made it to level 5',
    secret: false,
    emoji: '🌟'
  },
  LEVEL_6: {
    id: 'LEVEL_6',
    title: 'Explorer 2',
    description: 'Made it to level 6',
    secret: false,
    emoji: '🌟'
  },
  BACKTRACKER: {
    id: 'BACKTRACKER',
    title: 'Backtracker',
    description: 'Visited a level at least 5 times',
    secret: false,
    emoji: '🔄'
  },
  TUTORIAL_COMPLETE: {
    id: 'TUTORIAL_COMPLETE',
    title: 'Tutorial Master',
    description: 'Completed all tutorial levels (0-10)',
    secret: false,
    emoji: '📚'
  },
  NUMBER_ENTRY: {
    id: 'NUMBER_ENTRY',
    title: 'Digital Explorer',
    description: 'Discovered the number entry system',
    secret: true,
    revealAfter: ['TUTORIAL_COMPLETE'],
    emoji: '🔢'
  },
  COMPLEX_NUMBERS: {
    id: 'COMPLEX_NUMBERS',
    title: 'Complex Mind',
    description: 'Entered the complex plane',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🌀'
  },
  NEGATIVE_SPACE: {
    id: 'NEGATIVE_SPACE',
    title: 'Down Under',
    description: 'Ventured into negative numbers',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '⬇️'
  },
  MAKING_MY_OWN_PATH: {
    id: 'MAKING_MY_OWN_PATH',
    title: 'Making My Own Path',
    description: 'Created a way to a level using a number in text',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🚶‍♂️'
  },
  TEXT_NUMBER: {
    id: 'TEXT_NUMBER',
    title: 'Word Wizard',
    description: 'Found a number written as text (one, two, three...)',
    secret: true,
    revealAfter: ['MAKING_MY_OWN_PATH'],
    emoji: '👩‍💻'
  },
  COMPLEX_NOTATION: {
    id: 'COMPLEX_NOTATION',
    title: 'Imaginary Friend',
    description: 'Found a complex number in text',
    secret: true,
    revealAfter: ['COMPLEX_NUMBERS'],
    emoji: '🧠'
  },
  MATHEMATICAL_CONSTANT: {
    id: 'MATHEMATICAL_CONSTANT',
    title: 'Natural Explorer',
    description: 'Discovered the mathematical constant e',
    secret: true,
    revealAfter: ['NUMBER_ENTRY'],
    emoji: '🌱'
  },
  SOUND_ALIKE: {
    id: 'SOUND_ALIKE',
    title: 'Sound Detective',
    description: 'Found a sound-alike number in text',
    secret: true,
    revealAfter: ['TEXT_NUMBER'],
    emoji: '👂'
  },
  ROMAN_NUMERAL: {
    id: 'ROMAN_NUMERAL',
    title: 'Classical Scholar',
    description: 'Decoded a Roman numeral',
    secret: true,
    revealAfter: ['TEXT_NUMBER'],
    emoji: '👨‍🏫'
  },
  INFINITY_LEVEL_REACHED: {
    id: 'INFINITY_LEVEL_REACHED',
    title: 'Infinity Awaits',
    description: 'Reached a level with Infinity in its name',
    secret: true,
    revealAfter: ['LEVEL_1M'],
    emoji: '🌐'
  },
  TEN_INFINITY_LEVELS: {
    id: 'TEN_INFINITY_LEVELS',
    title: 'Infinite Journey',
    description: 'Successfully reached 10 Infinity levels',
    secret: true,
    revealAfter: ['INFINITY_LEVEL_REACHED'],
    emoji: '🚂'
  },
  NEGATIVE_INFINITY_LEVEL_REACHED: {
    id: 'NEGATIVE_INFINITY_LEVEL_REACHED',
    title: 'Negative Infinity',
    description: 'Reached a level with Negative Infinity in its name',
    secret: true,
    revealAfter: ['INFINITY_LEVEL_REACHED', 'NEGATIVE_SPACE'],
    emoji: '🌍'
  },
  FLIPPED_REALITY: {
    id: 'FLIPPED_REALITY',
    title: 'Flipped Reality',
    description: 'Reach a level using the flipped text in a negative level',
    secret: true,
    revealAfter: ['NEGATIVE_SPACE'],
    emoji: '🌌'
  },
  WALLET_FOUND: {
    id: 'WALLET_FOUND',
    title: 'Money Manager',
    description: 'Found and collected the wallet',
    secret: true,
    revealAfter: ['LEVEL_5'],
    emoji: '💰'
  },
  WALLET_TRAVEL: {
    id: 'WALLET_TRAVEL',
    title: 'Digital Transaction',
    description: 'Traveled to a level using money from your wallet... Handy!',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '💳'
  },
  STACK_TRAVEL: {
    id: 'STACK_TRAVEL',
    title: 'Stack Counter',
    description: 'Traveled to a level by clicking a money stack counter',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '🧮'
  },
  SCALE_TRAVEL: {
    id: 'SCALE_TRAVEL',
    title: 'Weight Watcher',
    description: 'Traveled to a level by clicking the scale display',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '⚖️'
  },
  HINT_EXPLORER: {
    id: 'HINT_EXPLORER',
    title: 'Hint Master',
    description: 'Opened hints in 10 different levels',
    secret: false,
    emoji: '💡'
  },
  COIN_TRAVEL: {
    id: 'COIN_TRAVEL',
    title: 'Loose Change',
    description: 'Traveled to a level by clicking on loose money',
    secret: true,
    revealAfter: ['WALLET_FOUND'],
    emoji: '💸'
  },
  LEVEL_100: {
    id: 'LEVEL_100',
    title: 'Centurion',
    description: 'Reached level 100 or higher',
    secret: false,
    emoji: '💯'
  },
  LEVEL_1000: {
    id: 'LEVEL_1000',
    title: 'Millennium',
    description: 'Reached level 1000 or higher',
    secret: false,
    revealAfter: ['LEVEL_100'],
    emoji: '🏆'
  },
  LEVEL_1M: {
    id: 'LEVEL_1M',
    title: 'Millionaire',
    description: 'Reached level 1,000,000 or higher',
    secret: false,
    revealAfter: ['LEVEL_1000'],
    emoji: '💰'
  },
  LEVEL_1B: {
    id: 'LEVEL_1B',
    title: 'Billionaire',
    description: 'Reached level 1,000,000,000 or higher',
    secret: true,
    revealAfter: ['LEVEL_1M'],
    emoji: '💎'
  },
  LEVEL_10B10: {
    id: 'LEVEL_10B10',
    title: 'Astronomical',
    description: 'Reached level 10,000,000,000 or higher',
    secret: true,
    revealAfter: ['LEVEL_1B'],
    emoji: '🌌'
  },
  LEVEL_GOOGOL: {
    id: 'LEVEL_GOOGOL',
    title: 'Do They Go That Far?',
    description: 'Reached level 10^100 or higher',
    secret: true,
    revealAfter: ['LEVEL_10B10'],
    emoji: '🌐'
  },
  BUTTON_INVENTORY_TRAVEL: {
    id: 'BUTTON_INVENTORY_TRAVEL',
    title: 'Button Collector',
    description: 'Traveled to a level using a collected button',
    secret: true,
    emoji: '🔘'
  },
};

// Ccomplete all grow game endings
// go to a level from a formula
// go to a non-integer level
// visit a level 10 times
// leave a level 10 times
// find x exits from a level

export default achievements; 