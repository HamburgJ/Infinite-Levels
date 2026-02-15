/**
 * Level Metadata Registry
 * 
 * Parallel tracking system for per-level metadata. Keyed by the same string
 * identifiers used in LevelRouter's LEVELS dict (e.g., '42', '3.14159', '1+3i').
 * 
 * Each entry can contain:
 * - title: Display name of the level
 * - category: 'tutorial' | 'milestone' | 'special' | 'procedural' | 'complex' | 'negative' | 'decimal'
 * - discoveries: Array of things discoverable on this level
 * - leadsTo: Array of level IDs this level has navigation links to
 * - items: Array of items found on this level
 * - mechanics: Array of mechanics taught or used on this level
 * - npcs: Array of NPCs present on this level
 * - shrine: { requiredCount, teaserText } if the level has a shrine
 * - hints: Array of hint strings about the level
 * - description: Brief description of the level
 * 
 * `leadsFrom` is computed dynamically by invertLeadsTo().
 * 
 * Usage:
 *   import { getLevelMeta, getLeadsFrom, getAllShrines } from '../data/levelMetadata';
 *   const meta = getLevelMeta('9');
 *   const incomingLinks = getLeadsFrom('9');
 */

const levelMetadata = {
  // ==========================================
  // TUTORIAL LEVELS (0–10)
  // ==========================================
  '0': {
    title: 'Infinite Levels!',
    category: 'tutorial',
    description: 'The starting screen. A single button begins the journey.',
    discoveries: ['buttons exist'],
    leadsTo: ['1'],
    items: [],
    mechanics: ['button navigation'],
    npcs: [],
    hints: ['This is where it all begins.'],
  },
  '1': {
    title: 'Welcome to Level 1',
    category: 'tutorial',
    description: 'Hidden buttons inside accordion sections teach exploration.',
    discoveries: ['buttons can be hidden', 'accordion sections'],
    leadsTo: ['2', '3'],
    items: [],
    mechanics: ['accordion reveal'],
    npcs: [],
    hints: ['Click around — not everything is visible at first.'],
  },
  '2': {
    title: 'You Found It!',
    category: 'tutorial',
    description: 'Teaches backtracking and the hint system.',
    discoveries: ['hints exist', 'backtracking is possible'],
    leadsTo: ['0', '1'],
    items: [],
    mechanics: ['hints', 'backtracking'],
    npcs: [],
    hints: ['Hints are always free. Use them often.'],
  },
  '3': {
    title: 'Another One!',
    category: 'tutorial',
    description: 'Barren-looking level with hidden content via hints.',
    discoveries: ['barren levels have secrets'],
    leadsTo: ['0', '1'],
    items: [],
    mechanics: ['hint-driven exploration'],
    npcs: [],
    hints: ['Some levels look empty but aren\'t.'],
  },
  '4': {
    title: 'A Strange Shrine',
    category: 'tutorial',
    description: 'First achievement shrine encounter. Wallet is hidden behind a nested shrine.',
    discoveries: ['achievement shrines', 'wallet'],
    leadsTo: ['2', '5', '7', '10'],
    items: ['wallet'],
    mechanics: ['achievement gating'],
    npcs: [],
    shrine: { requiredCount: 3, inner: { requiredCount: 5 }, teaserText: 'A shrine within a shrine. Something valuable waits inside.' },
    hints: ['Come back with more achievements to see what\'s inside.'],
  },
  '5': {
    title: 'Achievement unlocked!',
    category: 'tutorial',
    description: 'Visiting this level unlocks the Explorer achievement.',
    discoveries: ['visiting levels earns achievements'],
    leadsTo: ['6'],
    items: [],
    mechanics: ['achievement unlocking'],
    npcs: [],
    hints: ['Your first milestone achievement.'],
  },
  '6': {
    title: 'Achievement unlocked! Again!',
    category: 'tutorial',
    description: 'Second achievement milestone. Hub-like level with many exits.',
    discoveries: ['achievements can scale', 'hub navigation'],
    leadsTo: ['2', '3', '4', '5', '7'],
    items: [],
    mechanics: ['hub navigation'],
    npcs: [],
    hints: ['A crossroads with many paths.'],
  },
  '7': {
    title: 'Everything Is a Button',
    category: 'tutorial',
    description: 'Teaches coins as buttons, right-click to collect, and introduces the Scale.',
    discoveries: ['coins are buttons', 'right-click collects', 'scale exists'],
    leadsTo: ['4', '8'],
    items: ['coins (5¢, 1¢, 1¢)'],
    mechanics: ['coin navigation', 'coin collection', 'scale'],
    npcs: [],
    hints: ['Left-click a coin to travel. Right-click to collect it into your wallet.'],
  },
  '8': {
    title: 'Numbers Are Everywhere',
    category: 'tutorial',
    description: 'Shrine teaches that numbers in text are navigable (HighlightableText). First Jester encounter.',
    discoveries: ['text-is-buttons (HighlightableText)', 'jester exists'],
    leadsTo: ['0', '1', '2', '3', '4', '5', '6', '7'],
    items: [],
    mechanics: ['HighlightableText'],
    npcs: ['jester'],
    shrine: { requiredCount: 4, teaserText: 'A secret about how this game really works.' },
    hints: ['The shrine here reveals the game\'s deepest mechanic.'],
  },
  '9': {
    title: 'Secrets',
    category: 'tutorial',
    description: 'LockedBox with complex plane map. Shrine with hint about negative zero. Jester appears.',
    discoveries: ['locked boxes', 'complex plane exists', 'negative zero'],
    leadsTo: ['3'],
    items: ['locked box contents (complex plane map)'],
    mechanics: ['locked box', 'key finding'],
    npcs: ['jester'],
    shrine: { requiredCount: 10, teaserText: 'A box. A lock. A mystery that spans dimensions.' },
    hints: ['The key is at the shadow of zero — negative zero.'],
  },
  '10': {
    title: 'Graduation',
    category: 'tutorial',
    description: 'NumberEntry unlocked behind shrine. ChangeMachine. Tutorial summary.',
    discoveries: ['number entry system', 'change machine'],
    leadsTo: ['0', '11'],
    items: [],
    mechanics: ['number entry', 'change machine'],
    npcs: [],
    shrine: { requiredCount: 9, teaserText: 'Go anywhere. Type any number.' },
    hints: ['Type any number to travel directly there.'],
  },

  // ==========================================
  // POST-TUTORIAL (11–99)
  // ==========================================
  '11': {
    title: 'The Open Road',
    category: 'milestone',
    description: 'First post-tutorial level. Jester appears. Mentions Level 14 and negative numbers.',
    discoveries: ['negative numbers hinted'],
    leadsTo: ['10', '12'],
    items: [],
    mechanics: [],
    npcs: ['jester'],
    hints: ['The Jester mentions interesting things. Listen carefully.'],
  },
  '20': {
    title: 'Level Wormhole',
    category: 'milestone',
    description: 'Unlocks Score! achievement. Wormhole visual leads to Level 30.',
    discoveries: ['wormhole travel'],
    leadsTo: ['30'],
    items: [],
    mechanics: ['wormhole'],
    npcs: [],
    hints: ['Step through the wormhole.'],
  },
  '30': {
    title: 'The Outpost',
    category: 'milestone',
    description: 'Waypoint hub. Links to complex plane, negative numbers, and decimal levels.',
    discoveries: ['complex plane door', 'decimal levels exist'],
    leadsTo: ['0', '10', 'i', '-30', '42', '0.5', '82'],
    items: [],
    mechanics: ['hub navigation'],
    npcs: [],
    hints: ['A crossroads to many dimensions. Level i enters the complex plane.'],
  },
  '37': {
    title: 'The Random Number',
    category: 'special',
    description: 'The most "random" number. Triggers Curious Mind achievement.',
    discoveries: ['random number trivia'],
    leadsTo: [],
    items: [],
    mechanics: [],
    npcs: [],
    hints: ['Why is 37 the most "random" number?'],
  },
  '40': {
    title: 'The Threshold',
    category: 'milestone',
    description: 'Shrine reveals that a LevelButton weighs 42 grams (Scale hint).',
    discoveries: ['items have weight', 'scale secrets'],
    leadsTo: ['42', '30'],
    items: [],
    mechanics: ['weight system'],
    npcs: [],
    shrine: { requiredCount: 12, teaserText: 'A revelation about weight and numbers.' },
    hints: ['Put things on the Scale. The weight is a number. Numbers are doorways.'],
  },
  '42': {
    title: 'The Answer',
    category: 'special',
    description: 'The Answer to Life, the Universe, and Everything.',
    discoveries: [],
    leadsTo: [],
    items: [],
    mechanics: [],
    npcs: [],
    hints: ['The answer to the ultimate question.'],
  },
  '52': {
    title: 'The Card Counter',
    category: 'special',
    description: 'References the Card Box. Hints about cards being past Level 100.',
    discoveries: ['card box hinted'],
    leadsTo: [],
    items: [],
    mechanics: [],
    npcs: [],
    hints: ['Keep climbing past one hundred.'],
  },

  // ==========================================
  // MILESTONE LEVELS (100+)
  // ==========================================
  '100': {
    title: 'One Hundred',
    category: 'milestone',
    description: 'Major milestone. Card Box behind shrine. ChangeMachine. References many destinations.',
    discoveries: ['card box', 'wallet weight puzzle (level 150)', 'diamond shrine (level 153)'],
    leadsTo: ['20', '10', '0', '150', '82', '0.5', '153', '1000'],
    items: ['card box'],
    mechanics: ['card collection', 'change machine'],
    npcs: [],
    shrine: { requiredCount: 20, teaserText: 'A collection awaits. Cards, numbers, and journeys.' },
    hints: ['The Card Box stores cards. Stored cards have weight.'],
  },
  '150': {
    title: 'One Hundred Fifty',
    category: 'special',
    description: 'Wallet weight puzzle. Empty wallet weighs 150g.',
    discoveries: ['wallet weight = 150g', 'filling wallet changes its weight'],
    leadsTo: ['7'],
    items: [],
    mechanics: ['weight puzzle'],
    npcs: [],
    hints: ['Fill the wallet with coins. Use the Scale. The weight is your destination.'],
  },
  '153': {
    title: 'The Shrine at One Fifty-Three',
    category: 'milestone',
    description: 'Diamond hidden behind a shrine. Diamond weighs 3.52 grams.',
    discoveries: ['diamond', 'diamond weight = 3.52g'],
    leadsTo: ['150'],
    items: ['diamond'],
    mechanics: ['weight discovery'],
    npcs: [],
    shrine: { requiredCount: 25, teaserText: 'Something precious is hidden here. It has weight.' },
    hints: ['The diamond weighs 3.52 grams. That\'s a level number.'],
  },
  '160': {
    title: 'The Jester\'s Trap',
    category: 'special',
    description: 'Animated Jester trap. Gives the Joker card.',
    discoveries: ['joker card'],
    leadsTo: ['0'],
    items: ['joker card (special suit)'],
    mechanics: ['card collection'],
    npcs: ['jester'],
    hints: ['The Jester has a gift — if you can escape.'],
  },
  '200': {
    title: 'Two Hundred',
    category: 'milestone',
    description: 'Crossroads referencing wallet weight puzzle and Card Box shrine.',
    discoveries: [],
    leadsTo: ['100', '256', '233', '300'],
    items: [],
    mechanics: [],
    npcs: [],
    hints: ['A waypoint between milestones.'],
  },
  '207': {
    title: 'Double-O Seven',
    category: 'special',
    description: 'Spy-themed level with a shrine containing a hidden bonus.',
    discoveries: ['spy theme'],
    leadsTo: [],
    items: [],
    mechanics: [],
    npcs: [],
    shrine: { requiredCount: 15, teaserText: 'A hidden bonus for the worthy agent.' },
    hints: ['The name is the clue. 207 = double-o-seven.'],
  },

  // ==========================================
  // HIGH NUMBER MILESTONES (1000+)
  // ==========================================
  '1000': {
    title: 'A Thousand Words',
    category: 'milestone',
    description: 'Ace of Clubs card behind shrine. ChangeMachine.',
    discoveries: ['ace of clubs'],
    leadsTo: ['10000'],
    items: ['ace of clubs card'],
    mechanics: ['change machine', 'card collection'],
    npcs: [],
    shrine: { requiredCount: 30, teaserText: 'A rare card waits for a true collector.' },
    hints: ['A card from a very exclusive deck.'],
  },
  '10000': {
    title: 'Ten Thousand',
    category: 'milestone',
    description: '10 of Diamonds card behind shrine.',
    discoveries: ['10 of diamonds'],
    leadsTo: ['100000'],
    items: ['10 of diamonds card'],
    mechanics: ['card collection'],
    npcs: [],
    shrine: { requiredCount: 30, teaserText: 'Another card for the collection. The deck grows.' },
    hints: ['The number line goes on. And on.'],
  },
  '100000': {
    title: 'One Hundred Thousand',
    category: 'milestone',
    description: '5 of Clubs card behind shrine. Hints about the complex plane.',
    discoveries: ['5 of clubs', 'complex plane reminder'],
    leadsTo: ['1000000'],
    items: ['5 of clubs card'],
    mechanics: ['change machine', 'card collection'],
    npcs: [],
    shrine: { requiredCount: 20, teaserText: 'A card and a hint about dimensions you haven\'t explored.' },
    hints: ['Level 30 has a door to the complex plane.'],
  },
  '1000000': {
    title: 'One Million',
    category: 'milestone',
    description: 'King of Hearts card behind shrine. Mentions Jester roams primes.',
    discoveries: ['king of hearts', 'jester roams primes'],
    leadsTo: ['10000000'],
    items: ['king of hearts card'],
    mechanics: ['change machine', 'card collection'],
    npcs: [],
    shrine: { requiredCount: 20, teaserText: 'The Jester\'s favorite card. He left it here for a reason.' },
    hints: ['The Jester roams the prime numbers. Keep that in mind.'],
  },
  '10000000': {
    title: 'Ten Million',
    category: 'milestone',
    description: 'Ace of Void (dark-holographic) behind shrine. Points to 5+5i Singularity.',
    discoveries: ['ace of void', 'singularity location (5+5i)'],
    leadsTo: ['0'],
    items: ['ace of void card (dark-holographic)'],
    mechanics: ['change machine', 'card collection'],
    npcs: [],
    shrine: { requiredCount: 20, teaserText: 'A card from beyond the deck. Dark and holographic.' },
    hints: ['The Singularity at 5+5i holds the key to infinity.'],
  },

  // ==========================================
  // NEGATIVE LEVELS
  // ==========================================
  '-0': {
    title: 'The Shadow of Zero',
    category: 'negative',
    description: 'Contains a key. Purity Shrine (only opens with 0 achievements).',
    discoveries: ['key', 'purity shrine concept'],
    leadsTo: ['1'],
    items: ['key'],
    mechanics: ['purity shrine (max achievements gate)'],
    npcs: [],
    hints: ['The shadow of zero. Something glints in the darkness.'],
  },
  '-42': {
    title: 'The Shadow of the Answer',
    category: 'negative',
    description: 'Contains Ace of Diamonds card.',
    discoveries: ['ace of diamonds'],
    leadsTo: ['-0', '42'],
    items: ['ace of diamonds card'],
    mechanics: ['card collection'],
    npcs: [],
    hints: ['Even the Answer has a shadow.'],
  },

  // ==========================================
  // COMPLEX PLANE
  // ==========================================
  'i': {
    title: 'The Imaginary Unit',
    category: 'complex',
    description: 'Level i — the pure imaginary number.',
    discoveries: ['complex plane navigation'],
    leadsTo: [],
    items: [],
    mechanics: ['complex navigation'],
    npcs: [],
    hints: ['The square root of negative one has a level.'],
  },
  '1+1i': {
    title: 'The First Island',
    category: 'complex',
    description: 'First stable island in the complex plane.',
    discoveries: ['stable islands', 'complex exploration'],
    leadsTo: [],
    items: [],
    mechanics: ['complex navigation', 'stability'],
    npcs: [],
    hints: ['The beginning of the imaginary journey.'],
  },
  '-1+1i': {
    title: 'The Mirror Coast',
    category: 'complex',
    description: 'Second quadrant of the complex plane.',
    discoveries: ['quadrant 2'],
    leadsTo: ['1+1i', '-1-1i', 'i', '0'],
    items: [],
    mechanics: ['complex navigation'],
    npcs: [],
    hints: ['The complex plane has four quadrants. Explore them all.'],
  },
  '5+5i': {
    title: 'The Singularity',
    category: 'complex',
    description: 'The Singularity — a black hole with infinite weight. Central location of the complex plane.',
    discoveries: ['singularity', 'infinite weight', 'scale to infinity'],
    leadsTo: ['3+5i', '5+3i', '3+3i', '1+1i', '0'],
    items: ['black hole (The Singularity)'],
    mechanics: ['infinite weight', 'scale navigation'],
    npcs: [],
    hints: ['Place the Singularity on the Scale. Where does infinity take you?'],
  },

  // ==========================================
  // DECIMAL LEVELS
  // ==========================================
  '0.5': {
    title: 'Between Zero and One',
    category: 'decimal',
    description: 'The space between integers. Decimal exploration begins.',
    discoveries: ['decimal levels exist'],
    leadsTo: [],
    items: [],
    mechanics: ['decimal navigation'],
    npcs: [],
    hints: ['There are infinite levels between every integer.'],
  },
  '3.52': {
    title: 'The Diamond\'s Weight',
    category: 'decimal',
    description: 'Reached by putting the diamond on the Scale.',
    discoveries: ['diamond weight destination'],
    leadsTo: [],
    items: [],
    mechanics: ['scale navigation', 'weight puzzle'],
    npcs: [],
    hints: ['The diamond weighs 3.52 grams. This is that level.'],
  },
};


// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get metadata for a specific level.
 * @param {string} levelId - The level identifier (same format as LevelRouter keys)
 * @returns {object|null} The metadata object, or null if not found
 */
export function getLevelMeta(levelId) {
  return levelMetadata[String(levelId)] || null;
}

/**
 * Compute reverse navigation: which levels lead TO the given level.
 * @param {string} targetLevel - The level to find incoming links for
 * @returns {string[]} Array of level IDs that have leadsTo pointing to targetLevel
 */
export function getLeadsFrom(targetLevel) {
  const target = String(targetLevel);
  return Object.entries(levelMetadata)
    .filter(([_, meta]) => meta.leadsTo && meta.leadsTo.includes(target))
    .map(([id]) => id);
}

/**
 * Get all levels that have shrines.
 * @returns {Array<{level: string, requiredCount: number, teaserText: string}>}
 */
export function getAllShrines() {
  return Object.entries(levelMetadata)
    .filter(([_, meta]) => meta.shrine)
    .map(([level, meta]) => ({
      level,
      ...meta.shrine,
      title: meta.title,
    }));
}

/**
 * Get all levels in a category.
 * @param {string} category - The category to filter by
 * @returns {Array<{level: string, ...metadata}>}
 */
export function getLevelsByCategory(category) {
  return Object.entries(levelMetadata)
    .filter(([_, meta]) => meta.category === category)
    .map(([level, meta]) => ({ level, ...meta }));
}

/**
 * Get all items and which levels they're found on.
 * @returns {Array<{item: string, level: string, levelTitle: string}>}
 */
export function getItemLocations() {
  const locations = [];
  Object.entries(levelMetadata).forEach(([level, meta]) => {
    if (meta.items && meta.items.length > 0) {
      meta.items.forEach(item => {
        locations.push({ item, level, levelTitle: meta.title });
      });
    }
  });
  return locations;
}

/**
 * Get all mechanics and which levels teach them.
 * @returns {Object<string, string[]>} Map of mechanic name → array of level IDs
 */
export function getMechanicLocations() {
  const mechanics = {};
  Object.entries(levelMetadata).forEach(([level, meta]) => {
    if (meta.mechanics) {
      meta.mechanics.forEach(mechanic => {
        if (!mechanics[mechanic]) mechanics[mechanic] = [];
        mechanics[mechanic].push(level);
      });
    }
  });
  return mechanics;
}

/**
 * Get all NPC locations.
 * @returns {Object<string, string[]>} Map of NPC name → array of level IDs
 */
export function getNPCLocations() {
  const npcs = {};
  Object.entries(levelMetadata).forEach(([level, meta]) => {
    if (meta.npcs && meta.npcs.length > 0) {
      meta.npcs.forEach(npc => {
        if (!npcs[npc]) npcs[npc] = [];
        npcs[npc].push(level);
      });
    }
  });
  return npcs;
}

/**
 * Get the full navigation graph as adjacency list.
 * @returns {Object<string, string[]>} Map of level ID → array of destination level IDs
 */
export function getNavigationGraph() {
  const graph = {};
  Object.entries(levelMetadata).forEach(([level, meta]) => {
    graph[level] = meta.leadsTo || [];
  });
  return graph;
}

/**
 * Get all levels that have been catalogued.
 * @returns {string[]}
 */
export function getCatalogued() {
  return Object.keys(levelMetadata);
}

export default levelMetadata;
