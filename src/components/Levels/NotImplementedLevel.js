import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCoinBill from '../Items/CollectableCoinBill';
import CollectableBlackHole from '../Items/CollectableBlackHole';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import Scale from '../Storage/Scale';
import NumberTheory from './helpers/NumberTheory';

// Styled components for better organization
const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem 0;
`;

const TextGroup = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

// Connector phrases to make text flow better
const CONNECTORS = {
  sequence: [
    'Moreover,',
    'Additionally,',
    'Interestingly,',
    'As if that weren\'t enough,',
    'In another mathematical twist,',
    'Curiously,',
    'Perhaps most intriguingly,',
    'And as fate would have it,',
    'By mathematical coincidence,',
    'In a delightful turn,',
  ],
  special: [
    'But what makes this level truly special is that',
    'The real magic happens because',
    'The mathematical beauty intensifies as',
    'Hidden within these digits,',
    'Look closer and you\'ll find',
  ]
};

// Add these helper functions at the top
const getPatternDescription = (pattern) => {
  const descriptions = {
    isPalindrome: "it reads the same forwards and backwards",
    isPandigital: "it contains each digit exactly once",
    isRepdigit: "all its digits are the same",
    isUndulating: "its digits follow a wave-like pattern",
    isAlternating: "its digits alternate in a perfect sequence",
    isDecreasing: "its digits strictly decrease from left to right",
    isIncreasing: "its digits strictly increase from left to right",
    isStaircase: "its digits form ascending or descending steps",
    isMountain: "its digits rise and then fall",
    isValley: "its digits fall and then rise",
    isDoubleDigits: "each digit appears exactly twice in succession",
    isTripleRepeat: "a three-digit pattern repeats throughout",
    isSandwich: "the same digit appears at both ends",
    isSymmetric: "it has perfect mirror symmetry",
    isZigzag: "each digit alternates between higher and lower",
    isConcatenatedSquares: "it's made up of perfect squares joined together",
    isRepeatingBlock: "a block of digits repeats throughout",
    isAlternatingParity: "even and odd digits take turns",
    isMirroredPairs: "its digits form upside-down pairs",
    isDigitSum: "the sum of its digits equals its square root",
    // New pattern descriptions
    isSpiral: "its digits spiral inward numerically",
    isPerfectSquareDigits: "all its digits are perfect squares",
    isFactorialSum: "it equals the sum of the factorials of its digits",
    isBouncyNumber: "its digits neither increase nor decrease monotonically",
    isPermutation: "its digits form a permutation of consecutive numbers",
    isCyclicNumber: "all its rotations are multiples of the number",
    isNarcissistic: "it equals the sum of its digits raised to their length",
    isKeithNumber: "each digit follows the Fibonacci-like sequence",
    isHarshadNumber: "it's divisible by the sum of its digits",
    isSphenic: "it's the product of exactly three distinct primes"
  };
  return descriptions[pattern] || "it follows a unique numerical pattern";
};

const getSpecialDescription = (special) => {
  const descriptions = {
    isKaprekar: "it has the fascinating Kaprekar property",
    isKeith: "it follows the Keith number sequence",
    isSmith: "the sum of its digits equals the sum of its prime factors' digits",
    isLychrel: "it resists becoming a palindrome through reversal and addition"
  };
  return descriptions[special] || "it has a special mathematical property";
};

// Add ItemContainer styled component
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

// Then destructure the needed functions from NumberTheory
const {
  getPrimeFactors,
  isTriangular,
  isSquare,
  isCube,
  isFibonacci,
  isPalindrome,
  isPandigital,
  factorial,
  rotate,
  isKeithNumber,
  isPrime,
  isHarshad,
  isKaprekar,
  isKeith,
  isSmith,
  isLychrel
} = NumberTheory;

// Add new poetic patterns
const POETIC_PATTERNS = {
  limerick: {
    openings: [
      { text: "There once was a number so fine,", syllables: 8 },
      { text: "A numerical friend of mine,", syllables: 8 },
      { text: "In base ten it shows,", syllables: 5 },
      { text: "And everyone knows,", syllables: 5 },
      { text: "Its properties truly divine.", syllables: 8 }
    ],
    properties: {
      palindrome: [
        { text: "There once was a symmetric sight,", syllables: 8 },
        { text: "That read the same day and night,", syllables: 8 },
        { text: "From left or from right,", syllables: 5 },
        { text: "A numeric delight,", syllables: 5 },
        { text: "This palindrome's perfectly bright.", syllables: 8 }
      ],
      prime: [
        { text: "A number both lonely and prime,", syllables: 8 },
        { text: "Divisible just at its prime,", syllables: 8 },
        { text: "No factors in sight,", syllables: 5 },
        { text: "It stands in its might,", syllables: 5 },
        { text: "Defying division sublime.", syllables: 8 }
      ],
      isSquare: [
        { text: "A number that's perfectly square,", syllables: 8 },
        { text: "Its roots are beyond compare,", syllables: 8 },
        { text: "In perfect array,", syllables: 5 },
        { text: "It stands in display,", syllables: 5 },
        { text: "A square with a beauty so rare.", syllables: 8 }
      ],
      isCube: [
        { text: "A cube with dimensions so neat,", syllables: 8 },
        { text: "Its volume is quite a feat,", syllables: 8 },
        { text: "In three dimensions,", syllables: 5 },
        { text: "It draws attentions,", syllables: 5 },
        { text: "A cube that none can defeat.", syllables: 8 }
      ],
      isFibonacci: [
        { text: "In sequence of golden design,", syllables: 8 },
        { text: "Each number adds up to align,", syllables: 8 },
        { text: "In nature's own way,", syllables: 5 },
        { text: "It leads the array,", syllables: 5 },
        { text: "Fibonacci's pattern divine.", syllables: 8 }
      ],
      isRepdigit: [
        { text: "A number of sameness divine,", syllables: 8 },
        { text: "Where digits in harmony shine,", syllables: 8 },
        { text: "Each one just the same,", syllables: 5 },
        { text: "A numerical game,", syllables: 5 },
        { text: "Repeating in perfect design.", syllables: 8 }
      ],
      isUndulating: [
        { text: "A wave-like numerical sight,", syllables: 8 },
        { text: "Alternating day into night,", syllables: 8 },
        { text: "Up down it does flow,", syllables: 5 },
        { text: "A rhythmical show,", syllables: 5 },
        { text: "In patterns that dance with delight.", syllables: 8 }
      ],
      isConcatenatedSquares: [
        { text: "A number of squares in a line,", syllables: 8 },
        { text: "Perfect squares that perfectly shine,", syllables: 8 },
        { text: "Each joined to the next,", syllables: 5 },
        { text: "In numerical text,", syllables: 5 },
        { text: "Creating a pattern divine.", syllables: 8 }
      ],
      isRepeatingBlock: [
        { text: "A pattern that cycles around,", syllables: 8 },
        { text: "In blocks that repeatedly sound,", syllables: 8 },
        { text: "The same digits flow,", syllables: 5 },
        { text: "Again and they go,", syllables: 5 },
        { text: "Till harmony's perfectly found.", syllables: 8 }
      ],
      isAlternatingParity: [
        { text: "The odds and the evens combine,", syllables: 8 },
        { text: "In alternating design,", syllables: 8 },
        { text: "They take turns to show,", syllables: 5 },
        { text: "As back and forth go,", syllables: 5 },
        { text: "In patterns that endlessly shine.", syllables: 8 }
      ],
      isMirroredPairs: [
        { text: "When flipped upside down in the air,", syllables: 8 },
        { text: "The digits still read just as fair,", syllables: 8 },
        { text: "Each pair holds its place,", syllables: 5 },
        { text: "With mirrored grace,", syllables: 5 },
        { text: "A symmetry beyond compare.", syllables: 8 }
      ],
      isDigitSum: [
        { text: "The sum of its digits so neat,", syllables: 8 },
        { text: "Makes square root precisely complete,", syllables: 8 },
        { text: "Add them up right,", syllables: 5 },
        { text: "The root comes to light,", syllables: 5 },
        { text: "A mathematical special treat.", syllables: 8 }
      ],
      isSpiral: [
        { text: "A spiral of digits ascends,", syllables: 8 },
        { text: "Each greater than what came before,", syllables: 8 },
        { text: "They wind round and round,", syllables: 5 },
        { text: "Till pattern is found,", syllables: 5 },
        { text: "In numerical spiral lore.", syllables: 8 }
      ],
      isPerfectSquareDigits: [
        { text: "With digits all perfectly square,", syllables: 8 },
        { text: "Zero, one, four, and nine there,", syllables: 8 },
        { text: "No others appear,", syllables: 5 },
        { text: "The pattern is clear,", syllables: 5 },
        { text: "A number beyond all compare.", syllables: 8 }
      ],
      isFactorialSum: [
        { text: "The sum of factorial might,", syllables: 8 },
        { text: "Equals the number outright,", syllables: 8 },
        { text: "Each digit we take,", syllables: 5 },
        { text: "Factorial make,", syllables: 5 },
        { text: "The sum brings the answer to light.", syllables: 8 }
      ],
      isBouncyNumber: [
        { text: "A number that bounces with flair,", syllables: 8 },
        { text: "Where digits in harmony shine,", syllables: 8 },
        { text: "Each one just the same,", syllables: 5 },
        { text: "A numerical game,", syllables: 5 },
        { text: "Repeating in perfect design.", syllables: 8 }
      ],
      isPermutation: [
        { text: "Each digit appears just one time,", syllables: 8 },
        { text: "In permutation sublime,", syllables: 8 },
        { text: "No repeats to see,", syllables: 5 },
        { text: "Just digits set free,", syllables: 5 },
        { text: "In mathematical paradigm.", syllables: 8 }
      ],
      isCyclicNumber: [
        { text: "When rotated round and around,", syllables: 8 },
        { text: "Each version's a multiple sound,", syllables: 8 },
        { text: "The digits rotate,", syllables: 5 },
        { text: "Yet still relate,", syllables: 5 },
        { text: "A cyclic perfection is found.", syllables: 8 }
      ],
      isNarcissistic: [
        { text: "Each digit raised up to its height,", syllables: 8 },
        { text: "When summed makes the number just right,", syllables: 8 },
        { text: "Narcissistic way,", syllables: 5 },
        { text: "The digits display,", syllables: 5 },
        { text: "A power that shines pure and bright.", syllables: 8 }
      ],
      isKeithNumber: [
        { text: "A sequence that starts with each part,", syllables: 8 },
        { text: "Like Fibonacci, but with art,", syllables: 8 },
        { text: "The digits combine,", syllables: 5 },
        { text: "In sequence divine,", syllables: 5 },
        { text: "Till Keith's special number they chart.", syllables: 8 }
      ],
      isHarshadNumber: [
        { text: "When digits are added with care,", syllables: 8 },
        { text: "Their sum divides number so fair,", syllables: 8 },
        { text: "A Harshad delight,", syllables: 5 },
        { text: "Division just right,", syllables: 5 },
        { text: "Mathematical joy to declare.", syllables: 8 }
      ],
      isSphenic: [
        { text: "Three primes when multiplied with skill,", syllables: 8 },
        { text: "A sphenic number they fulfill,", syllables: 8 },
        { text: "Distinct factors three,", syllables: 5 },
        { text: "Combined perfectly,", syllables: 5 },
        { text: "A product that fits nature's will.", syllables: 8 }
      ],
      isSevens: [
        { text: "The slots are all lined up with care,", syllables: 8 },
        { text: "MAX WIN flashing everywhere,", syllables: 8 },
        { text: "Lucky sevens shine,", syllables: 5 },
        { text: "The jackpot's mine!", syllables: 5 },
        { text: "Fortune smiles beyond compare!", syllables: 8 }
      ]
    }
  },
  
  quatrain: {
    properties: {
      isPalindrome: [
        "A number that reads the same way,",
        "From front to back, it will stay,",
        "A palindrome true,",
        "In symmetry's view."
      ],
      isPrime: [
        "A number that stands all alone,",
        "With factors that are its own,",
        "Prime in its might,",
        "A solitary sight."
      ],
      isSquare: [
        "A perfect square number today,",
        "When multiplied by itself fair,",
        "Shows patterns that seem to display,",
        "Mathematical beauty rare."
      ],
      isCube: [
        "A cube with its volume so grand,",
        "In three dimensions it will stand,",
        "A number so neat,",
        "Its form is complete."
      ],
      isFibonacci: [
        "In sequence of golden design,",
        "Each number adds up to show,",
        "How nature's own patterns align,",
        "In mathematical flow."
      ],
      isRepdigit: [
        "Digits all the same,",
        "A number with no shame,",
        "Repdigit's delight,",
        "In uniform sight."
      ],
      isPandigital: [
        "All digits appear just once,",
        "A pandigital dance,",
        "In perfect array,",
        "Numbers in display."
      ],
      isTriangular: [
        "Numbers that form a triangle,",
        "In layers they do entangle,",
        "Stacked in a row,",
        "In a perfect flow."
      ],
      isHarshadNumber: [
        "Divisible by its sum,",
        "A Harshad number's rule,",
        "Digits add up,",
        "In a mathematical school."
      ],
      isKeith: [
        "Following a path unique,",
        "Each digit adds up to show,", 
        "A sequence so mystique,",
        "As Keith numbers grow."
      ],
      isSmith: [
        "Prime factors' sum aligns,",
        "With digits adding true,",
        "A Smith number shines,",
        "In mathematical view."
      ],
      isLychrel: [
        "Resisting palindrome's call,",
        "No matter how we try,",
        "This number stands tall,",
        "As reversals fly."
      ],
      isKaprekar: [
        "Square it and split with care,",
        "Add the parts to see,",
        "The original there,",
        "Kaprekar's decree."
      ],
      isUndulating: [
        "Like waves in the sea,",
        "Numbers rise and fall with grace,",
        "A pattern so free,",
        "In numerical space."
      ],
      isAlternating: [
        "Back and forth it goes,",
        "Alternating digits dance,",
        "Each number shows,",
        "A rhythmic romance."
      ],
      isDecreasing: [
        "From highest to low,",
        "The digits gently descend,",
        "Like mountain snow,",
        "To valley they tend."
      ],
      isIncreasing: [
        "From small steps to high,",
        "Each digit rises with grace,",
        "To touch the sky,",
        "In numbered space."
      ],
      isStaircase: [
        "Step by step we climb,",
        "Through numerical display,",
        "A pattern sublime,",
        "In ordered array."
      ],
      isMountain: [
        "Rising to its peak,",
        "Then falling down with grace now,",
        "Mountain numbers speak,",
        "Of heights somehow."
      ],
      isValley: [
        "Down into the deep,",
        "Then rising up once again,",
        "Valley numbers keep,",
        "Their pattern plain."
      ],
      isDoubleDigits: [
        "Pairs of digits dance,",
        "In perfect symmetry here,",
        "Taking their chance,",
        "To twice appear."
      ],
      isTripleRepeat: [
        "Three by three they go,",
        "Repeating their dance in time,",
        "A rhythmic flow,",
        "In numeric rhyme."
      ],
      isSandwich: [
        "Same digits embrace,",
        "The numbers held in between,",
        "With matching grace,",
        "A sight unseen."
      ],
      isSymmetric: [
        "Mirror images play,",
        "In perfect harmony here,",
        "Each digit's way,",
        "Is crystal clear."
      ],
      isZigzag: [
        "Up and down it goes,",
        "Like lightning in the night sky,",
        "Each digit alternates between higher and lower,",
        "A pattern so unique,",
        "In numerical space."
      ],
      isSevens: [
        "The slots are all lined up with care,",
        "MAX WIN flashing everywhere,",
        "Lucky sevens shine,",
        "The jackpot's mine!",
        "Fortune smiles beyond compare!"
      ]
    }
  },
  
  haiku: {
    properties: {
      isPalindrome: [
        "Reads the same both ways,",
        "Symmetry in numbers shown,",
        "Palindrome's delight."
      ],
      isPrime: [
        "Indivisible,",
        "Standing alone in its might,",
        "Prime number divine."
      ],
      isSquare: [
        "Perfectly squared form,",
        "Roots that balance and align,",
        "Mathematics pure."
      ],
      isCube: [
        "Volume in three forms,",
        "Cube's dimensions stand alone,",
        "Geometric grace."
      ],
      isFibonacci: [
        "Golden sequence flows,",
        "Nature's pattern in numbers,",
        "Fibonacci's grace."
      ],
      isRepdigit: [
        "Uniform digits,",
        "A number of repetition,",
        "Repdigit's beauty."
      ],
      isPandigital: [
        "Every digit seen,",
        "Pandigital perfection,",
        "Numbers complete all."
      ],
      isTriangular: [
        "Stacked in perfect rows,",
        "Triangular numbers rise,",
        "Mathematics' gift."
      ],
      isHarshadNumber: [
        "Digits add to sum,",
        "Divisible by itself,",
        "Harshad number's charm."
      ],
      isKeithNumber: [
        "Keith's sequence unfolds",
        "Like Fibonacci but new",
        "Pattern grows untold"
      ],
      isSmith: [
        "Prime factors combine", 
        "Digit sums equal the whole",
        "Smith's numbers align"
      ],
      isLychrel: [
        "Resists palindrome",
        "No matter how we reverse",
        "Lychrel stands alone"
      ],
      isKaprekar: [
        "Square it then divide",
        "Parts sum to original",
        "Kaprekar's pride"
      ],
      isSphenic: [
        "Three primes multiply",
        "Product shows their union true",
        "Sphenic numbers fly"
      ],
      isFactorialSum: [
        "Each digit transformed",
        "Factorials add to whole",
        "Pattern performed"
      ],
      isNarcissistic: [
        "Powers of digits",
        "Sum to make the number whole",
        "Self-love exquisite"
      ],
      isCyclicNumber: [
        "Rotate digits round",
        "Each new number multiplies",
        "Cycles are profound"
      ],
      isPermutation: [
        "Each digit unique",
        "Arranged in perfect order",
        "Pattern mystique"
      ],
      isSpiral: [
        "Inward digits wind",
        "Growing larger as they turn",
        "Spiral unconfined"
      ],
      isUndulating: [
        "Waves of digits flow",
        "Rising falling endlessly", 
        "Pattern shows below"
      ],
      isAlternating: [
        "Back and forth they dance",
        "Alternating digits play",
        "In rhythmic romance"
      ],
      isDecreasing: [
        "High to low they fall",
        "Each digit smaller than last",
        "Nature's gentle call"
      ],
      isIncreasing: [
        "Step by step they climb",
        "Each digit greater than last",
        "Mountains in their prime"
      ],
      isStaircase: [
        "Steps of numbers rise",
        "Climbing higher, digit by",
        "Digit to the skies"
      ],
      isMountain: [
        "Rising to the peak",
        "Then descending gracefully",
        "Mountain numbers speak"
      ],
      isValley: [
        "Down to depths below",
        "Then ascending gracefully",
        "Valley numbers flow"
      ],
      isDoubleDigits: [
        "Pairs of digits dance",
        "Each one showing twice its face",
        "Perfect circumstance"
      ],
      isTripleRepeat: [
        "Three by three they move",
        "Pattern repeating always",
        "Rhythm finds its groove"
      ],
      isSandwich: [
        "Same ends embrace all",
        "Different centers held between",
        "Answer nature's call"
      ],
      isSymmetric: [
        "Mirror images",
        "Perfect symmetry displayed",
        "In numbered stages"
      ],
      isZigzag: [
        "Up and down they go",
        "Like lightning across the sky",
        "Nature's rhythmic flow"
      ],
      isConcatenatedSquares: [
        "Perfect squares combine",
        "Joining forces one by one",
        "New numbers align"
      ],
      isRepeatingBlock: [
        "Patterns duplicate",
        "Like echoes in number form",
        "Beauty recreate"
      ],
      isAlternatingParity: [
        "Odd and even dance",
        "Taking turns in perfect time",
        "Balanced circumstance"
      ],
      isMirroredPairs: [
        "Upside down they turn",
        "Yet still read true and clear now",
        "Wisdom we can learn"
      ],
      isDigitSum: [
        "Add the digits up",
        "Square root emerges complete",
        "Perfect numbers cup"
      ],
      isSpiral: [
        "Spinning round and up",
        "Each digit greater than last",
        "Till the spiral stops"
      ],
      isPerfectSquareDigits: [
        "Square numbers alone",
        "Make up this special sequence",
        "Beauty is shown whole"
      ],
      isFactorialSum: [
        "Factorials add",
        "To equal their source number",
        "Nature's gentle call"
      ],
      isSevens: [
        "The slots are all lined up with care,",
        "MAX WIN flashing everywhere,",
        "Lucky sevens shine,",
        "The jackpot's mine!",
        "Fortune smiles beyond compare!"
      ]
    }
  }
};

// list of func facts for nubmers which also are years in recent memory 1969- moonwalk, 1999- the millenium, etc
const YEAR_FUN_FACTS = {
    2024: "Was the last year that the date and month were the same",
    2023: "Was the year of the first World Cup in women's cricket",
    2022: "Saw ChatGPT launch and AI go mainstream",
    2021: "Had the first successful civilian space tourism flight",
    2020: "Global COVID-19 pandemic changed the world",
    2019: "First image of a black hole was released",
    2018: "SpaceX launched Falcon Heavy rocket with Tesla Roadster",
    2017: "Bitcoin reached its first major peak near $20,000",
    2016: "Gravitational waves were first detected",
    2015: "New Horizons spacecraft reached Pluto",
    2012: "Higgs boson particle was discovered",
    2011: "Final Space Shuttle mission was completed",
    2010: "First iPad was released by Apple",
    2008: "Large Hadron Collider began operations",
    2007: "First iPhone was released",
    2004: "Facebook was founded",
    2003: "Human Genome Project was completed",
    2001: "Wikipedia was launched",
    2000: "Y2K transition occurred without major issues",
    1999: "The Euro currency was introduced",
    1997: "First successful cloning of a mammal (Dolly the sheep)",
    1995: "Internet became commercialized with Amazon and eBay",
    1991: "World Wide Web became publicly available",
    1989: "Fall of the Berlin Wall",
    1986: "Chernobyl nuclear disaster occurred",
    1984: "Apple Macintosh computer was introduced",
    1981: "First space shuttle Columbia was launched",
    1977: "First Star Wars movie was released",
    1969: "First humans landed on the Moon"
};


// Add helper function to select poetry style based on properties
const getPoetryStyle = (properties) => {
    return 'limerick';
  // Determine most interesting property to highlight
  const keyProperties = Object.entries(properties)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  // Select poetry style based on number of properties or specific combinations
  if (keyProperties.length >= 4) {
    return 'limerick';
  } else if (keyProperties.length >= 2) {
    return 'quatrain';
  }
  return 'haiku';
};

const NotImplementedLevel = ({ levelKey }) => {

    const level = parseInt(levelKey);
  // Helper function to get random connector
  const getConnector = (type = 'sequence') => {
    const options = CONNECTORS[type];
    return options[Math.floor(Math.random() * options.length)];
  };

  // Group related properties together
  const properties = {
    primeFactors: getPrimeFactors(level),
    sequences: {
      isTriangular: isTriangular(level),
      isSquare: isSquare(level),
      isCube: isCube(level),
      isFibonacci: isFibonacci(level),
    },
    patterns: {
      isPalindrome: isPalindrome(level),
      isPandigital: isPandigital(level),
      isRepdigit: /^(\d)\1+$/.test(level.toString()),
      isUndulating: /^(\d)(\d)(?:\1\2)+$/.test(level.toString()),
      isAlternating: /^(\d)(?!\1)(\d)(?:\1\2)*$/.test(level.toString()),
      isDecreasing: /^9*8*7*6*5*4*3*2*1*0*$/.test(level.toString()),
      isIncreasing: /^0*1*2*3*4*5*6*7*8*9*$/.test(level.toString()),
      isStaircase: /^(\d)(\1*)(?!\1)\d?(\2*)(?!\1|\2)\d?(\3*)$/.test(level.toString()),
      isMountain: /^(\d+)(?!\1)(\d+)(?!\1|\2)(\d+)$/.test(level.toString()) && 
                  level.toString().split('').every((d, i, arr) => 
                    i === 0 || i === arr.length - 1 || 
                    (i <= arr.length/2 && parseInt(d) >= parseInt(arr[i-1])) ||
                    (i > arr.length/2 && parseInt(d) <= parseInt(arr[i-1]))),
      isValley: /^(\d+)(?!\1)(\d+)(?!\1|\2)(\d+)$/.test(level.toString()) && 
                level.toString().split('').every((d, i, arr) => 
                  i === 0 || i === arr.length - 1 || 
                  (i <= arr.length/2 && parseInt(d) <= parseInt(arr[i-1])) ||
                  (i > arr.length/2 && parseInt(d) >= parseInt(arr[i-1]))),
      isDoubleDigits: /^(\d)\1(\d)\2(\d)\3$/.test(level.toString()),
      isTripleRepeat: /^(\d{3})\1+$/.test(level.toString()),
      isSandwich: /^(\d)(\d)+\1$/.test(level.toString()),
      isSymmetric: /^(\d)(\d)?(\d)?(\d)?\4\3\2\1$/.test(level.toString()),
      isZigzag: /^(\d)(?!\1)(\d)(?:\2(?!\1)(\d)(?:\1(?!\2)\d)*)*$/.test(level.toString()),
      isConcatenatedSquares: /^(0|1|4|9|16|25|36|49|64|81)+$/.test(level.toString()),
      isRepeatingBlock: /^(\d+)\1+$/.test(level.toString()),
      isAlternatingParity: /^([02468][13579])+$|^([13579][02468])+$/.test(level.toString()),
      isMirroredPairs: /^([16][16]|[18][18]|[19][16]|[68][89]|[89][98]|[69][96])+$/.test(level.toString()),
      isDigitSum: level.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b)) === Math.sqrt(level),
      // New patterns (20 more)
      isSpiral: /^(\d)(\d)?(\d)?(\d)?(\d)?(\d)?(\d)?(\d)?(\d)?$/.test(level.toString()) && 
                level.toString().split('').every((d, i, arr) => i === 0 || parseInt(d) > parseInt(arr[i-1])),
      isPerfectSquareDigits: /^[0149]+$/.test(level.toString()),
      isFactorialSum: level === level.toString().split('').reduce((sum, d) => sum + factorial(parseInt(d)), 0),
      isBouncyNumber: !/^9*8*7*6*5*4*3*2*1*0*$|^0*1*2*3*4*5*6*7*8*9*$/.test(level.toString()),
      isPermutation: /^(?!.*(.).*\1)[0-9]+$/.test(level.toString()),
      isCyclicNumber: Array.from({length: level.toString().length}, (_, i) => 
        rotate(level.toString(), i)).every(n => parseInt(n) % level === 0),
      isNarcissistic: level === level.toString().split('').reduce((sum, d) => 
        sum + Math.pow(parseInt(d), level.toString().length), 0),
      isKeithNumber: isKeithNumber(level),
      isHarshadNumber: level % level.toString().split('').reduce((sum, d) => sum + parseInt(d), 0) === 0,
      isSphenic: isPrime(level) && level.toString().length === 3,
      isSevens: /^7+$/.test(level.toString()),
      // ... add more patterns here
    },
    divisibility: {
      isHarshad: isHarshad(level),
      isDivisibleBy5: level % 5 === 0,
      isSuperior: level % 100 === 0 && level > 1000,
    },
    special: {
      isKaprekar: isKaprekar(level),
      isKeith: isKeith(level),
      isSmith: isSmith(level),
      isLychrel: isLychrel(level),
    }
  };

  // Add poetry selection
  const poetryStyle = getPoetryStyle(properties.patterns);
  const poem = selectPoem(poetryStyle, properties);

  console.log(poem);
  
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${level}`} size="lg"/>
          </Card.Title>

          {properties.primeFactors.length > 1 && (
            <>
              <TextGroup>
                <HighlightableText 
                  text={`Your path can be found by follwing the path of the primes: ${properties.primeFactors.join(' × ')}`} 
                />
              </TextGroup>
              <ButtonGroup>
                {properties.primeFactors.map(factor => (
                  <LevelButton key={factor} targetLevel={factor}>
                    {`Level ${factor}`}
                  </LevelButton>
                ))}
              </ButtonGroup>
            </>
          )}

          {/* Sequence properties */}
          {Object.entries(properties.sequences).some(([_, value]) => value) && (
            <TextGroup>
              {Object.entries(properties.sequences)
                .filter(([_, value]) => value)
                .map(([key], index) => (
                  <HighlightableText
                    key={key}
                    text={`${index === 0 ? getConnector('special') : getConnector()} this level is ${key.slice(2).toLowerCase()}`}
                  />
                ))}
            </TextGroup>
          )}

          {/* Pattern properties */}
          {Object.entries(properties.patterns).some(([_, value]) => value) && (
            <TextGroup>
              {Object.entries(properties.patterns)
                .filter(([_, value]) => value)
                .map(([key], index) => (
                  <HighlightableText
                    key={key}
                    text={`${index === 0 ? getConnector('special') : getConnector()} ${getPatternDescription(key)}`}
                  />
                ))}
            </TextGroup>
          )}

          {/* Special numbers section */}
          {Object.entries(properties.special).some(([_, value]) => value) && (
            <TextGroup>
              {Object.entries(properties.special)
                .filter(([_, value]) => value)
                .map(([key], index) => (
                  <HighlightableText
                    key={key}
                    text={`${index === 0 ? getConnector('special') : getConnector()} ${getSpecialDescription(key)}`}
                  />
                ))}
            </TextGroup>
          )}

          {/* Add appropriate items based on properties */}
          <ItemContainer>
            {properties.patterns.isPalindrome && <ChangeMachineButton />}
            {properties.divisibility.isDivisibleBy5 && (
              <CollectableCoinBill value={5} id={`level-${level}-nickel`} />
            )}
            {level > 1e100 && <CollectableBlackHole />}
            {(properties.sequences.isSquare || properties.sequences.isCube) && <Scale />}
          </ItemContainer>

          {/* Add poetry section */}
          {poem && <TextGroup>
            <HighlightableText
              text={poem}
              style={{ fontStyle: 'italic' }}
            />
          </TextGroup>}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

// Helper function to select appropriate poem
const selectPoem = (style, properties) => {
  const patterns = POETIC_PATTERNS[style];
  
  // Get all matching properties
  const matchingPatternProperties = Object.entries(properties.patterns)
    .filter(([_, value]) => value)
    .map(([key]) => key);
  
  // For 768, we should prioritize the most distinctive property
  const priorityOrder = [
    'isPandigital',    // contains each digit exactly once
    'isValley',        // digits fall then rise
    'isPermutation',   // digits form a permutation
    'isBouncyNumber'   // neither increasing nor decreasing
  ];

  // Find the first matching property that has a poem
  const mainProperty = priorityOrder.find(prop => 
    matchingPatternProperties.includes(prop) && 
    patterns?.properties[prop]
  );

  if (!mainProperty || !patterns?.properties[mainProperty]) return null;

  switch(style) {
    case 'limerick':
      return patterns.properties[mainProperty]?.map(line => line.text).join('\n');
    case 'quatrain':
      return patterns.properties[mainProperty]?.join('\n');
    case 'haiku':
      return patterns.properties[mainProperty]?.join('\n');
    default:
      return null;
  }
};

export default NotImplementedLevel; 