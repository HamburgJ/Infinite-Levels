const TROLL_STATE_VECTORS = {
  annoyance: {
    why: +15,
    how: +5,
    what: +10,
    impossible: +20
  },
  scientific_interest: {
    why: +10,
    how: +20,
    what: -5,
    impossible: -15
  },
  mockery: {
    why: -10,
    how: -5,
    what: +15,
    impossible: +5
  },
  ego: {
    why: -15,
    how: +5,
    what: -5,
    impossible: -20
  },
  topic_depth: {
    why: +15,
    how: +20,
    what: -10,
    impossible: -5
  }
};

const TROLL_RESPONSES = {
  prefix: {
    high_annoyance: [
      "ARGH, MY HEAD HURTS!",
      "I'LL SMASH YOU WITH MY BRAIN!",
      "YOUR WORDS MAKE MY HEAD ACHE!",
      "STOP MAKING ME THINK!",
      "MY BRAIN IS BOILING!"
    ],
    high_scientific: [
      "Let me think...",
      "My brain tells me...",
      "After careful study...",
      "My research shows...",
      "I calculated that..."
    ],
    high_mockery: [
      "Hah, tiny brain...",
      "Watch this genius...",
      "Your head empty...",
      "So simple minded...",
      "How cute..."
    ],
    high_ego: [
      "My brain is huge!",
      "Witness my genius!",
      "I know everything!",
      "My mind is superior!",
      "Bow to my intellect!"
    ],
    neutral: [
      "Listen up...",
      "Think about it...",
      "Here's the thing...",
      "Let me tell you...",
      "Get this..."
    ]
  },

  subjects: {
    brain: [
      "my head",
      "my brain",
      "my mind",
      "my thoughts",
      "my genius",
      "my intellect",
      "my wisdom",
      "my knowledge",
      "my thinking",
      "my understanding"
    ],
    dimension: [
      "space",
      "time",
      "reality",
      "universe",
      "dimension",
      "existence",
      "cosmos",
      "world",
      "everything",
      "nothing"
    ],
    knowledge: [
      "truth",
      "secret",
      "wisdom",
      "fact",
      "answer",
      "knowledge",
      "idea",
      "thought",
      "theory",
      "solution"
    ]
  },

  verbs: {
    mystical: [
      "sees through",
      "knows about",
      "understands",
      "reveals",
      "shows"
    ],
    scientific: [
      "proves",
      "explains",
      "demonstrates",
      "calculates",
      "measures"
    ],
    aggressive: [
      "crushes",
      "smashes",
      "breaks",
      "destroys",
      "pulverizes"
    ]
  },

  objects: {
    cosmic: [
      "everything",
      "the universe",
      "all existence",
      "reality itself",
      "all dimensions",
      "infinite space",
      "endless time",
      "all possibilities",
      "the cosmos",
      "creation"
    ],
    scientific: [
      "the problem",
      "the solution",
      "the equation",
      "the theory",
      "the proof",
      "the evidence",
      "the result",
      "the calculation",
      "the experiment",
      "the conclusion"
    ],
    mystical: [
      "the truth",
      "the mystery",
      "the secret",
      "the answer",
      "the meaning",
      "the purpose",
      "the wisdom",
      "the knowledge",
      "the understanding",
      "the revelation"
    ]
  }
};

const generateStateVector = () => ({
  annoyance: 50,
  scientific: 50,
  mockery: 50,
  ego: 50,
  topic_depth: 50,
  consistency: 50,
  creativity: 50,
  defensiveness: 30,
  topic_fixation: 70
});

const RESPONSE_VECTORS = {
  "why": {
    annoyance: +15,
    scientific: +5,
    mockery: -10,
    ego: -15,
    topic_depth: +20,
    consistency: -5,
    defensiveness: +25,
    topic_fixation: -15
  },
  "how": {
    annoyance: +5,
    scientific: +20,
    mockery: -5,
    ego: +10,
    topic_depth: +15,
    consistency: +10,
    creativity: -10,
    defensiveness: +15,
    topic_fixation: +5
  },
  "what": {
    annoyance: +10,
    scientific: -5,
    mockery: +15,
    ego: -5,
    topic_depth: -10,
    consistency: 0,
    creativity: +15,
    defensiveness: +10,
    topic_fixation: -5
  },
  "impossible": {
    annoyance: +20,
    scientific: -15,
    mockery: +10,
    ego: -20,
    topic_depth: -5,
    consistency: -15,
    creativity: +20,
    defensiveness: +30,
    topic_fixation: -20
  },
  "interesting": {
    annoyance: -15,
    scientific: +10,
    mockery: -10,
    ego: +5,
    topic_depth: +10,
    consistency: +5,
    creativity: +5,
    defensiveness: -20,
    topic_fixation: -10
  },
  "continue": {
    annoyance: -10,
    scientific: +5,
    mockery: -5,
    ego: +10,
    topic_depth: +15,
    consistency: +10,
    creativity: 0,
    defensiveness: -15,
    topic_fixation: +15
  }
};

const getResponseStyle = (stateVector) => {
  // Default to neutral prefix if no conditions are met
  let prefix = TROLL_RESPONSES.prefix.neutral;
  
  // Add missing prefix states
  if (!TROLL_RESPONSES.prefix.high_defensive) {
    TROLL_RESPONSES.prefix.high_defensive = [
      "DON'T JUDGE ME!",
      "I'M NOT WRONG!",
      "LEAVE ME ALONE!",
      "STOP ATTACKING ME!",
      "YOU DON'T UNDERSTAND!"
    ];
  }

  if (!TROLL_RESPONSES.prefix.calming_down) {
    TROLL_RESPONSES.prefix.calming_down = [
      "Maybe you're right...",
      "I see your point...",
      "That makes sense...",
      "I understand now...",
      "Fair enough..."
    ];
  }

  // Check states in order of priority
  if (stateVector.defensiveness > 75) {
    prefix = TROLL_RESPONSES.prefix.high_defensive;
  } else if (stateVector.annoyance < 30 && stateVector.topic_fixation < 40) {
    prefix = TROLL_RESPONSES.prefix.calming_down;
  } else if (stateVector.annoyance > 75) {
    prefix = TROLL_RESPONSES.prefix.high_annoyance;
  } else if (stateVector.scientific > 75) {
    prefix = TROLL_RESPONSES.prefix.high_scientific;
  } else if (stateVector.mockery > 75) {
    prefix = TROLL_RESPONSES.prefix.high_mockery;
  } else if (stateVector.ego > 75) {
    prefix = TROLL_RESPONSES.prefix.high_ego;
  }

  // Get verb style based on state with default fallback
  let verbs = TROLL_RESPONSES.verbs.mystical;
  if (stateVector.scientific > 65) verbs = TROLL_RESPONSES.verbs.scientific;
  if (stateVector.annoyance > 75) verbs = TROLL_RESPONSES.verbs.aggressive;

  // Get subject category with default fallback
  let subjects = TROLL_RESPONSES.subjects.brain;
  if (stateVector.topic_depth > 70) subjects = TROLL_RESPONSES.subjects.dimension;
  if (stateVector.creativity > 70) subjects = TROLL_RESPONSES.subjects.knowledge;

  // Get object category with default fallback
  let objects = TROLL_RESPONSES.objects.scientific;
  if (stateVector.consistency < 40) objects = TROLL_RESPONSES.objects.mystical;
  if (stateVector.ego > 70) objects = TROLL_RESPONSES.objects.cosmic;

  return { prefix, verbs, subjects, objects };
};

const updateStateVector = (currentVector, response) => {
  const changes = RESPONSE_VECTORS[response];
  const newVector = { ...currentVector };
  
  Object.keys(changes).forEach(key => {
    newVector[key] = Math.max(0, Math.min(100, newVector[key] + changes[key]));
  });

  return newVector;
};

const VALID_RESPONSES = ["why", "how", "what", "impossible", "continue", "interesting"];

const generateResponse = (responseStyle) => {
  const { prefix, verbs, subjects, objects } = responseStyle;
  
  const selectedPrefix = prefix[Math.floor(Math.random() * prefix.length)];
  const selectedVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const selectedSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const selectedObject = objects[Math.floor(Math.random() * objects.length)];

  return `${selectedPrefix} The ${selectedSubject} ${selectedVerb} ${selectedObject}!`;
};

// Export everything as a single object
export {
  TROLL_RESPONSES,
  TROLL_STATE_VECTORS,
  RESPONSE_VECTORS,
  VALID_RESPONSES,
  generateStateVector,
  generateResponse,
  getResponseStyle,
  updateStateVector
};