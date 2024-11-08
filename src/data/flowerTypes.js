const flowerTypes = {
  rose: {
    stages: {
      0: '🌰',  // acorn/seed
      2: '🌱',  // sprout
      4: '🌿',  // leaves
      6: '🥀',  // closed bud
      8: '🌹',  // rose
      10: '💮', // white flower
      12: '🏵️', // rosette
    },
    messages: {
      0: "A tiny rose seed dreams of beauty...",
      2: "The first tender shoot emerges.",
      4: "Thorny leaves unfold to protect the growing bud.",
      6: "A delicate rosebud forms, still closed tight.",
      8: "The rose opens its petals to the world.",
      10: "The rose takes on an ethereal glow.",
      12: "The rose transforms into pure perfection!"
    },
    weights: {
      0: 0.1,  // seed
      2: 0.3,  // sprout
      4: 0.8,  // leaves
      6: 1.2,  // bud
      8: 1.5,  // rose
      10: 1.0, // ethereal (lighter)
      12: 0.5  // magical (very light)
    },
    finalLevel: 15
  },
  sunflower: {
    stages: {
      0: '🥜',    // peanut/seed
      2: '☘️',    // shamrock (early leaves)
      4: '🌾',    // tall stalk
      6: '🌻',    // sunflower
      8: '🔆',    // bright sun with rays
    },
    messages: {
      0: "A sunflower seed dreams of touching the sky.",
      2: "The first leaves spread wide to catch the light.",
      4: "The stalk grows tall and strong.",
      6: "A bright sunflower head turns to follow the sun.",
      8: "The sunflower radiates with the power of the sun!"
    },
    weights: {
      0: 0.2,  // seed
      2: 0.5,  // leaves
      4: 1.5,  // stalk
      6: 2.0,  // full sunflower
      8: 1.0   // radiant (lighter due to magic)
    },
    finalLevel: 20
  },
  lotus: {
    stages: {
      0: '🫘',    // beans (lotus seeds)
      2: '💧',    // water drop
      4: '🌊',    // wave (growing in water)
      6: '☘️',    // floating pad
      8: '🪷',    // lotus bud
      10: '🎋',   // bamboo (enlightenment)
    },
    messages: {
      0: "A lotus seed rests in the sacred mud.",
      2: "The seed awakens in the waters.",
      4: "Life stirs beneath the rippling surface.",
      6: "A perfect lotus pad floats serenely.",
      8: "The lotus bud rises above the water.",
      10: "The lotus achieves transcendent beauty!"
    },
    weights: {
      0: 0.15,  // seed
      2: 0.1,   // water drop (very light)
      4: 0.3,   // wave
      6: 0.8,   // pad
      8: 1.2,   // bud
      10: 0.5   // enlightened (lighter)
    },
    finalLevel: 25
  }
};

export default flowerTypes; 