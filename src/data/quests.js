/**
 * Quest chain definitions for the Quest Tracker.
 * 
 * Each quest defines an ordered series of waypoints (levels).
 * The tracker computes progress by checking which waypoints are
 * present in the player's visitedLevels array.
 * 
 * Quests surface as a section inside the AchievementsModal so
 * they feel like a natural extension of the achievement system
 * rather than a bolted-on feature.
 */

const quests = {
  FIBONACCI_CHAIN: {
    id: 'FIBONACCI_CHAIN',
    title: 'The Fibonacci Spiral',
    emoji: '🌀',
    description: 'Follow the golden chain — each number is the sum of the two before it.',
    waypoints: [
      { level: '21+0i', label: 'Level 21' },
      { level: '34+0i', label: 'Level 34' },
      { level: '55+0i', label: 'Level 55' },
      { level: '89+0i', label: 'Level 89' },
      { level: '144+0i', label: 'Level 144' },
      { level: '233+0i', label: 'Level 233' },
      { level: '377+0i', label: 'Level 377' },
      { level: '610+0i', label: 'Level 610' },
      { level: '987+0i', label: 'Level 987' },
      { level: '1.618+0i', label: 'Level φ (1.618)' },
    ],
    // Quest becomes visible once the player visits any waypoint
    revealThreshold: 1,
    completionAchievement: null,
  },

  POWERS_OF_TWO: {
    id: 'POWERS_OF_TWO',
    title: 'Binary Highway',
    emoji: '💾',
    description: 'Double each step. The power-of-two chain reaches beyond imagination.',
    waypoints: [
      { level: '64+0i', label: 'Level 64' },
      { level: '128+0i', label: 'Level 128' },
      { level: '256+0i', label: 'Level 256' },
      { level: '512+0i', label: 'Level 512' },
      { level: '1024+0i', label: 'Level 1024' },
    ],
    revealThreshold: 1,
    completionAchievement: null,
  },

  NINES_CHAIN: {
    id: 'NINES_CHAIN',
    title: 'The Nines',
    emoji: '9️⃣',
    description: 'Operators and nines — each step adds complexity.',
    waypoints: [
      { level: '99+0i', label: 'Level 99' },
      { level: '999+0i', label: 'Level 999' },
      { level: '9999+0i', label: 'Level 9999' },
    ],
    revealThreshold: 1,
    completionAchievement: null,
  },

  LOST_CONTENT: {
    id: 'LOST_CONTENT',
    title: 'The Jester\'s Trail',
    emoji: '🃏',
    description: 'The Jester stole content from five levels and scattered the pieces.',
    waypoints: [
      { level: '203+0i', label: 'Fragment 1 — Level 203' },
      { level: '418+0i', label: 'Fragment 2 — Level 418' },
      { level: '703+0i', label: 'Fragment 3 — Level 703' },
      { level: '847+0i', label: 'Fragment 4 — Level 847' },
      { level: '1009+0i', label: 'Fragment 5 — Level 1009' },
    ],
    revealThreshold: 1,
    completionAchievement: 'DETECTIVE',
  },

  KEY_QUEST: {
    id: 'KEY_QUEST',
    title: 'The Key & The Lock',
    emoji: '🔑',
    description: 'A key hides in the shadow of zero. A lock waits on level nine.',
    waypoints: [
      { level: '-0+0i', label: 'Level -0 — Find the Key' },
      { level: '9+0i', label: 'Level 9 — Open the Lock' },
    ],
    revealThreshold: 1,
    completionAchievement: 'BOX_UNLOCKED',
  },

  PERFECT_NUMBERS: {
    id: 'PERFECT_NUMBERS',
    title: 'Perfection',
    emoji: '💎',
    description: 'Numbers equal to the sum of their factors. Rare and beautiful.',
    waypoints: [
      { level: '6+0i', label: 'Level 6' },
      { level: '28+0i', label: 'Level 28' },
      { level: '496+0i', label: 'Level 496' },
      { level: '8128+0i', label: 'Level 8128' },
    ],
    revealThreshold: 1,
    completionAchievement: 'PERFECT_VISITOR',
  },

  CARD_COLLECTION: {
    id: 'CARD_COLLECTION',
    title: 'Card Collector',
    emoji: '🃏',
    description: 'Playing cards are scattered across every dimension. Find them all.',
    // This quest uses card counts instead of waypoints
    waypoints: [],
    revealThreshold: 0,
    isCardQuest: true,
    completionAchievement: 'FULL_SUIT',
  },

  CARTOGRAPHER: {
    id: 'CARTOGRAPHER',
    title: 'The Cartographer\'s Journal',
    emoji: '🗺️',
    description: 'Follow the trail of someone who explored the complex plane before you.',
    waypoints: [
      { level: '2+1i', label: '2+1i — The Camp' },
      { level: '3+1i', label: '3+1i — The Archive' },
      { level: '3+3i', label: '3+3i — The Midpoint' },
      { level: '5+3i', label: '5+3i — The Frontier' },
      { level: '999+999i', label: '999+999i — The Numberservatory' },
    ],
    revealThreshold: 1,
    completionAchievement: 'CARTOGRAPHER',
  },

  DECIMAL_REALM: {
    id: 'DECIMAL_REALM',
    title: 'Between the Integers',
    emoji: '🔍',
    description: 'An infinite universe hides between the whole numbers.',
    waypoints: [
      { level: '0.5+0i', label: 'Level 0.5 — Half' },
      { level: '0.333+0i', label: 'Level 0.333 — One Third' },
      { level: '0.999+0i', label: 'Level 0.999 — Almost One' },
      { level: '3.14159+0i', label: 'Level π' },
      { level: '2.718+0i', label: 'Level e' },
      { level: '1.618+0i', label: 'Level φ' },
      { level: '1.414+0i', label: 'Level √2' },
    ],
    revealThreshold: 1,
    completionAchievement: 'DECIMAL_EXPLORER',
  },

  POWER_OF_TEN: {
    id: 'POWER_OF_TEN',
    title: 'The Long Road',
    emoji: '🛤️',
    description: 'The power-of-ten highway stretches to the horizon and beyond.',
    waypoints: [
      { level: '100+0i', label: 'Level 100' },
      { level: '1000+0i', label: 'Level 1,000' },
      { level: '10000+0i', label: 'Level 10,000' },
      { level: '100000+0i', label: 'Level 100,000' },
      { level: '1000000+0i', label: 'Level 1,000,000' },
      { level: '10000000+0i', label: 'Level 10,000,000' },
    ],
    revealThreshold: 1,
    completionAchievement: 'LEVEL_1M',
  },

  COMPLEX_EXPLORATION: {
    id: 'COMPLEX_EXPLORATION',
    title: 'The Complex Plane',
    emoji: '🧭',
    description: 'Thirty-six stable islands form a grid in the imaginary dimension.',
    waypoints: [
      { level: '0+1i', label: 'Level i — The Gateway' },
      { level: '1+1i', label: '1+1i — Bright Plane' },
      { level: '5+5i', label: '5+5i — The Singularity' },
      { level: '-1+1i', label: '-1+1i — Mirror Coast' },
      { level: '1-1i', label: '1-1i — The Undertow' },
      { level: '-1-1i', label: '-1-1i — The Deep' },
    ],
    revealThreshold: 1,
    completionAchievement: 'QUADRANT_EXPLORER',
  },
};

export default quests;
