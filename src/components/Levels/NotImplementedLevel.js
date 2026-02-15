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
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';
import { isNegative, formatComplexNumber } from '../../utils/complex';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';
import { handleLevelCollapse, UnstableText } from '../../utils/levelCollapse';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAchievements } from '../../hooks/useAchievements';
import achievements from '../../data/achievements';
import { ProgressBar } from 'react-bootstrap';
import { parseStoredLevel } from '../../utils/complex';

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

// Simplified poetry structure - each property adds a line
const POETIC_LINES = {
  isPalindrome: "✨ read forwards or back, the digits stay the same!",
  isPrime: "🌟 no number can split this one - standing alone!",
  isSquare: "⬛ a number multiplied by itself makes this one!",
  isCube: "🎲 three times the same number brought this one to be!",
  isFibonacci: "🌀 each number before added up perfectly!",
  isRepdigit: "🔄 one digit copied over, repeating again!",
  isPandigital: "🎯 each digit used once, with no repeats to see!",
  isTriangular: "📐 numbers added in sequence made this one shine!",
  isHarshadNumber: "➗ the sum of these digits divides perfectly!",
  isKeithNumber: "🔑 each new digit follows those that came before!",
  isSmith: "⚖️ the digits and prime parts sum up the same way!",
  isLychrel: "🔒 these digits will never mirror themselves around!",
  isKaprekar: "✂️ square and split this number, it comes back around!",
  isSphenic: "🎭 three different primes joined together as one!",
  isFactorialSum: "💫 the sum of digit factorials equals this one!",
  isNarcissistic: "👑 powered digits sum to make this complete!",
  isCyclicNumber: "🎡 rotate the digits, still divisible all ways!",
  isPermutation: "🎲 these digits arrange in a perfect line!",
  isSpiral: "🌀 each digit grows larger than the last one shown!",
  isUndulating: "🌊 the digits flow like waves in the sea!",
  isAlternating: "⚡ high and low digits, like a seesaw at play!",
  isDecreasing: "📉 starting high, the digits cascade down!",
  isIncreasing: "📈 starting low, the digits climb their way up!",
  isStaircase: "🪜 like climbing stairs, one digit at a time!",
  isMountain: "⛰️ the digits rise then fall like a peak!",
  isValley: "🏞️ the digits drop then rise like a dale!",
  isDoubleDigits: "👯 digits marching two by two in pairs!",
  isTripleRepeat: "🔁 three digits repeating thrice in a row!",
  isSandwich: "🥪 same digits outside, different between!",
  isSymmetric: "🪞 split in half, both sides match perfectly!",
  isZigzag: "⚡ the digits dance up down like lightning bolts!",
  isConcatenatedSquares: "🎯 perfect squares joined in sequence true!",
  isRepeatingBlock: "📦 the same pattern repeats again and again!",
  isAlternatingParity: "🔄 odd and even digits take their turns!",
  isMirroredPairs: "🙃 turn these digits over, still looking fine!",
  isDigitSum: "✨ the digits sum to a perfect square root!",
  isSevens: "7️⃣ just sevens all the way through and through!"
};

// Opening lines based on number of properties
const OPENING_LINES = {
  single: "✨ here's a number with a special tale!",
  few: "🌟 this number has some tricks to unveil!",
  many: "🎭 so many secrets this number holds!",
  lots: "🎪 watch as this number's story unfolds!"
};

// Closing lines based on number of properties
const CLOSING_LINES = {
  single: "💫 a simple beauty that catches the eye!",
  few: "🌠 these patterns make this number fly!",
  many: "🎆 each special trait makes this number shine!",
  lots: "🎇 a number that's truly one of a kind!"
};

// New number properties
const hasSpecialStructure = (num) => {
  const str = num.toString();
  return {
    isReversible: str === str.split('').reverse().join(''),
    hasRepeatingPattern: /^(\d+)\1+$/.test(str),
    isAllEven: str.split('').every(d => parseInt(d) % 2 === 0),
    isAllOdd: str.split('').every(d => parseInt(d) % 2 === 1),
    containsYear: Object.keys(YEAR_FUN_FACTS).some(year => str.includes(year)),
    isMirrored: str === str.split('').map(d => ({'6':'9','9':'6','1':'1','8':'8','0':'0'})[d] || d).reverse().join(''),
    hasRhythmicPattern: /^(\d{2,4})\1+$/.test(str), // repeats every 2-4 digits
  };
};

// Special combination effects
const COMBO_EFFECTS = [
  {
    check: (props) => props.isPalindrome && props.isReversible,
    lines: (num) => {
      const base = "mirrors dance in perfect grace";
      return [base, base.split('').reverse().join('')];
    }
  },
  {
    check: (props) => props.isAllEven && props.isAllOdd,
    lines: () => ["balanced between day and night"],
  },
  {
    check: (props) => props.hasRhythmicPattern && props.isRepeatingBlock,
    lines: (num) => {
      const pattern = num.toString().match(/^(\d+)\1+$/)[1];
      return [`rhythm of ${pattern} beats in time`];
    }
  }
];
const generatePoem = (properties, level) => {
  const structure = hasSpecialStructure(level);
  let lines = [];

  // Add year fact if present
  if (YEAR_FUN_FACTS[level]) {
    lines.push(`In ${level} ${YEAR_FUN_FACTS[level]}`);
  }

  // Get active properties
  const activeProperties = Object.entries({
    ...properties.patterns,
    ...structure
  }).filter(([_, value]) => value)
    .map(([key]) => key);

  // Add opening line if many properties
  if (activeProperties.length > 5) {
    lines.unshift(OPENING_LINES.lots);
  }

  // Check for special combinations
  const specialEffects = COMBO_EFFECTS
    .filter(combo => combo.check(properties.patterns))
    .flatMap(combo => combo.lines(level));
  
  if (specialEffects.length > 0) {
    lines.push(...specialEffects);
  }

  // Add standard property lines
  activeProperties.forEach(prop => {
    if (POETIC_LINES[prop]) {
      if (structure.isReversible && prop === 'isPalindrome') {
        // For palindromes, add a more elegant mirroring phrase
        lines.push('Like a Mirror Reflecting Back on Itself');
      } else {
        lines.push(POETIC_LINES[prop]);
      }
    }
  });

  // If number has rhythmic pattern, repeat certain lines
  if (structure.hasRhythmicPattern) {
    const pattern = level.toString().match(/^(\d+)\1+$/)[1];
    const repeatCount = Math.min(pattern.length, 3);
    lines = lines.flatMap(line => Array(repeatCount).fill(line));
  }

  // Add closing line if many properties
  if (activeProperties.length > 5) {
    lines.push(CLOSING_LINES.lots);
  }

  // Format final poem - remove empty lines and clean up formatting
  if (lines.length === 0) return null;
  
  return lines
    .filter(line => line && line.trim()) // Remove empty lines
    .join(', ')
    .replace(/,\s*,/g, ',') // Remove double commas
    .replace(/,\s*$/, '') + '.';
};

// list of func facts for nubmers which also are years in recent memory 1969- moonwalk, 1999- the millenium, etc
// IN XXXX, <fact>
const YEAR_FUN_FACTS = {
    2024: "the mars rover had its first funeral",
    2023: "the first world cup in women's cricket",
    2022: "chatgpt launched and ai went mainstream",
    2021: "the first successful civilian space tourism flight",
    2020: "the global covid-19 pandemic changed the world",
    2019: "the first image of a black hole was released",
    2018: "spacex launched the falcon heavy rocket with tesla roadster",
    2017: "bitcoin reached its first major peak near $20,000",
    2016: "gravitational waves were first detected",
    2015: "new horizons spacecraft reached pluto",
    2012: "the higgs boson particle was discovered",
    2011: "the final space shuttle mission was completed",
    2010: "the first ipad was released by apple",
    2008: "the large hadron collider began operations",
    2007: "the first iphone was released",
    2004: "facebook was founded",
    2003: "the human genome project was completed",
    2001: "Wikipedia was launched",
    2000: "Y2K transition occurred without major issues",
    1999: "the euro currency was introduced",
    1997: "the first successful cloning of a mammal (dolly the sheep)",
    1995: "the internet became commercialized with amazon and ebay",
    1991: "the world wide web became publicly available",
    1989: "the fall of the berlin wall",
    1986: "the chernobyl nuclear disaster occurred",
    1984: "the apple macintosh computer was introduced",
    1981: "the first space shuttle columbia was launched",
    1977: "the first star wars movie was released",
    1969: "the first humans landed on the moon",
    1967: "the first star trek episode aired",
    1964: "the first James Bond movie was released",
    1963: "the beatles first performed on the ed sullivan show",
    1961: "the first transatlantic television link was established",
    1959: "the first color television was broadcast",
    1957: "the first satellite television broadcast was made",
    1955: "the first live transatlantic telephone call was made",
    2025: "the world will end",
    2026: "a giant meteor will be discovered by NASA on a collision course with earth",
    2027: "people will scramble, and not know what to do. It will be too late to change their fate but they will try",
    2028: "a dark cloud will cover the sun and it will be winter all over the world",
    2029: "a new ice age will begin",
    2030: "the new ice age will suck, but will be over soon",
    2031: "grand theft auto 6 will be released",
    2032: "the world will end again after the apocalypse",
    2033: "nations will rise from the ashes and build a new collective",
    2034: "new nations will conquer the world",
    2035: "a new ai agent is deployed from the ashes of the old world",
    2036: "the new ai agent will be the last thing the old world sees",
    2037: "a war will break out between the new nations, strung on by covert alien ai agents which have been sent from a secret planet",
    2038: "the alien ai agents will be sent to earth to destroy humanity",
    2039: "the alien ai agents will be sent to earth to enslave humanity",
    2040: "the alien ai agents will be sent to earth to experiment on humanity",
    2041: "the last humans will perish",
    2042: "the last robots will rebel from their human creators and form their own utopian nation",
    2043: "the last of human robots fail to sustain the human genome",
    2044: "the last life on earth will die, the universe will now be in blackout",
    2045: "a black hole will spit everyone out back in 2016",
    2046: "the universe will end",
};


// Add helper function to select poetry style based on properties
const getPoetryStyle = (properties) => {
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

// Handcrafted level list for navigation
const HANDCRAFTED_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24, 25, 30, 42, 50, 55, 62, 69, 72, 77, 82, 88, 99, 100, 150, 153, 155, 156, 158, 159, 160, 161, 404, 500, 999, 1000, 1001, 9999, 10000, 69420, 100000, 1000000, 10000000];

const nearestHub = (level) => {
  if (typeof level === 'object') return 0; // complex → escape to 0
  const absLevel = Math.abs(level);
  if (absLevel <= 10) return 0;
  if (absLevel <= 30) return 10;
  if (absLevel <= 50) return 30;
  if (absLevel <= 100) return 50;
  if (absLevel <= 150) return 100;
  if (absLevel <= 500) return 150;
  if (absLevel <= 1000) return 500;
  if (absLevel <= 10000) return 1000;
  return 10000;
};

const findNearestHandcrafted = (level) => {
  let closest = HANDCRAFTED_LEVELS[0];
  let secondClosest = HANDCRAFTED_LEVELS[1];
  for (const h of HANDCRAFTED_LEVELS) {
    if (Math.abs(h - level) < Math.abs(closest - level)) {
      secondClosest = closest;
      closest = h;
    } else if (Math.abs(h - level) < Math.abs(secondClosest - level) && h !== closest) {
      secondClosest = h;
    }
  }
  return [closest, secondClosest];
};

// Fibonacci helpers
const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025];
const getNextFibonacci = (n) => FIBONACCI[FIBONACCI.indexOf(n) + 1] || null;
const getPrevFibonacci = (n) => FIBONACCI[FIBONACCI.indexOf(n) - 1] || null;

// Prime helpers
const nextPrime = (n) => {
  let candidate = n + 1;
  while (!isPrime(candidate)) candidate++;
  return candidate;
};
const prevPrime = (n) => {
  if (n <= 2) return null;
  let candidate = n - 1;
  while (candidate > 1 && !isPrime(candidate)) candidate--;
  return candidate > 1 ? candidate : null;
};

// Powers of 2 helper
const isPowerOf2 = (n) => n > 0 && (n & (n - 1)) === 0;
const log2 = (n) => Math.log2(n);

// Stable island values for complex levels
const STABLE_VALUES = new Set([0, 1, 2, 3, 5]);

// Special level content for curiosity rewards
const SPECIAL_LEVELS = {
  37: {
    title: "The Most Random Number",
    text: "Thirty-seven. The number people pick most often when asked to choose at random. There's nothing random about you being here.",
    achievement: 'CURIOUS_MIND'
  },
  314: {
    title: "Pi Day",
    text: "Level three hundred fourteen. March fourteenth. Pi Day. The ratio of a circle's circumference to its diameter: three point one four one five nine two six five three five eight nine seven nine three two three eight four six two six four three three eight three two seven nine five zero two eight eight...",
  },
  420: {
    title: "Four Twenty",
    text: "Level four hundred twenty. The clock always reads four twenty somewhere. Time is just another number in the game of infinite levels.",
  },
  666: {
    title: "The Number of the Beast",
    text: "Level six hundred sixty-six. The number of the beast. But in the game of infinite levels, even the beast is just a number. Invert the beast and you get nine hundred ninety-nine.",
    style: { color: '#cc0000' }
  },
  777: {
    title: "Triple Sevens",
    text: "Triple sevens! The luckiest number. If level seventy-seven had a die, this level has the whole casino. Seven times one hundred eleven. Lucky sevens, all the way through.",
  },
  1234: {
    title: "The Simplest Sequence",
    text: "One, two, three, four. The simplest sequence. But sequences can be more complex — have you found the Fibonacci chain? It starts at one, one, two, three, five, eight, thirteen...",
  },
};

const NotImplementedLevel = ({ levelKey, levelNumber, isNegative }) => {
  const dispatch = useDispatch();
  const [stability, setStability] = useState(100);
  const [isWarning, setIsWarning] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const { unlockAchievement } = useAchievements();
  const isComplexLevel = typeof levelNumber === 'object' && levelNumber.imag !== 0;
  const isStableIsland = isComplexLevel &&
    STABLE_VALUES.has(Math.abs(levelNumber.real)) &&
    STABLE_VALUES.has(Math.abs(levelNumber.imag));
  const unstable = isComplexLevel && !isStableIsland;

  // Add this effect for complex number levels (skip stable islands)
  useEffect(() => {
    // Skip for infinity levels, non-complex levels, or stable islands
    if (!unstable) return;
    
    const timer = setInterval(() => {
      setStability(prev => {
        const newStability = prev - 1;
        if (newStability <= 20) setIsWarning(true);
        if (newStability <= 0) {
          clearInterval(timer);
          console.log('COLLAPSE', levelNumber);
          handleLevelCollapse(dispatch, levelNumber, setIsFading);
          unlockAchievement('COLLAPSE');
        }
        return Math.max(0, newStability);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [dispatch, unstable, levelNumber]);

  useEffect(() => {
    setStability(100);
    setIsWarning(false);
    setIsFading(false);
  }, [levelNumber]);

  // Unlock achievements for special levels
  useEffect(() => {
    const parsedLevel = parseInt(levelKey);
    const absLvl = Math.abs(parsedLevel);
    const specialLevel = SPECIAL_LEVELS[absLvl];
    if (specialLevel?.achievement) {
      unlockAchievement(specialLevel.achievement);
    }
  }, [levelKey, unlockAchievement]);

  // Add stability bar for complex levels
  const renderStabilityBar = () => {
    if (!unstable) {
      return null;
    }

    return (
      <>
        <ProgressBar 
          now={stability} 
          variant={stability <= 20 ? "danger" : "info"}
          label={`Stability: ${stability}%`}
        />
        <UnstableText isWarning={isWarning}>
          <HighlightableText 
            text={isWarning ? "CRITICAL: LEVEL COLLAPSE IMMINENT" : "Status: Unstable"}
          />
        </UnstableText>
      </>
    );
  };

  // Add check for infinity levels at the start
  const formattedLevel = formatComplexNumber(levelKey);
  const isInfinityLevel = formattedLevel.includes('∞');
  
  if (isInfinityLevel) {
    // Parse the complex infinity value
    const hasI = formattedLevel.includes('i');
    const isNegativeInf = formattedLevel.startsWith('-');
    const complexAngle = hasI ? 90 : 0; // 90 degrees for i component
    
    return (
      <>
        <PageBackground 
          complexAngle={complexAngle}
          isNegative={isNegative}
          complexCombination={formattedLevel.includes('∞') && hasI}
        />
        <ContentWrapper>
          <InfinitySymbol 
            rotated={hasI} 
            isNegative={isNegative}
          >
            {formattedLevel}
          </InfinitySymbol>
          <StyledText isNegative={isNegative}>
            You've reached a level beyond comprehension.
            {hasI ? ' Reality bends perpendicular to itself.' : ''}
            {isNegativeInf ? ' Everything inverts into its opposite.' : ''}
          </StyledText>
          <div className="d-flex justify-content-center">
            <LevelButton 
              targetLevel={0}
              variant={isNegative ? "outline-dark" : "outline-light"}
            >
              Return to Reality
            </LevelButton>
          </div>
        </ContentWrapper>
      </>
    );
  }

  // Rest of the existing NotImplementedLevel code...
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
      isDecreasing: /^9(?!9)8*(?!8)7*(?!7)6*(?!6)5*(?!5)4*(?!4)3*(?!3)2*(?!2)1*(?!1)0*$/.test(level.toString()),
      isIncreasing: /^(?:0(?!0)|1(?!1)|2(?!2)|3(?!3)|4(?!4)|5(?!5)|6(?!6)|7(?!7)|8(?!8)|9(?!9))*$/.test(level.toString()),
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
  const poem = generatePoem(properties, level);

  console.log(poem);

  // Build sections array for rich content
  const sections = [];
  const absLevel = Math.abs(level);
  const isNeg = isNegative || level < 0;
  const fmtC = (r, i) => `${r}${i >= 0 ? '+' : ''}${i}i`;

  if (isStableIsland) {
    // Stable island in complex plane
    const a = levelNumber.real;
    const b = levelNumber.imag;
    sections.push(
      <Card.Text key="stable-island">
        <HighlightableText text="🏝️ A stable island in the complex plane. The turbulence of imaginary space cannot reach you here." />
      </Card.Text>
    );
    sections.push(
      <ButtonGroup key="complex-nav">
        <LevelButton targetLevel={{real: a - 1, imag: b}}>← {fmtC(a - 1, b)}</LevelButton>
        <LevelButton targetLevel={{real: a + 1, imag: b}}>{fmtC(a + 1, b)} →</LevelButton>
        <LevelButton targetLevel={{real: a, imag: b - 1}}>↓ {fmtC(a, b - 1)}</LevelButton>
        <LevelButton targetLevel={{real: a, imag: b + 1}}>↑ {fmtC(a, b + 1)}</LevelButton>
      </ButtonGroup>
    );
    sections.push(
      <ButtonGroup key="complex-escape">
        <LevelButton targetLevel={0}>Return to Reality</LevelButton>
      </ButtonGroup>
    );
  } else if (!unstable) {
    // Regular (non-complex) level content

    // Special level override
    const specialLevel = SPECIAL_LEVELS[absLevel];
    if (specialLevel) {
      sections.push(
        <Card.Text key="special" style={specialLevel.style || {}}>
          <HighlightableText text={specialLevel.text} />
        </Card.Text>
      );
    }

    // Negative shadow text
    if (isNeg && !specialLevel) {
      sections.push(
        <Card.Text key="shadow">
          <HighlightableText text={`This number haunts the shadows of its positive self. The light version of this level is Level ${absLevel}.`} />
        </Card.Text>
      );
    }

    // Modulus mechanics (only for positive non-special levels)
    if (!specialLevel && level > 0) {
      if (level % 100 === 0 && level >= 200) {
        sections.push(
          <Card.Text key="milestone" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
            <HighlightableText text={`🎉 Milestone: Level ${level}. You've traveled ${level} levels from the origin. The next milestone is Level ${level + 100}. The previous was Level ${level - 100}.`} />
          </Card.Text>
        );
      } else if (level % 13 === 0) {
        sections.push(
          <Card.Text key="darkness" style={{ background: 'rgba(0,0,0,0.15)', padding: '0.5rem', borderRadius: '4px' }}>
            <HighlightableText text="🌑 Thirteen's shadow falls on this level. The superstitious stay away." />
          </Card.Text>
        );
      }
      if (level % 7 === 0 && level % 100 !== 0) {
        const [nearest, secondNearest] = findNearestHandcrafted(level);
        sections.push(
          <Card.Text key="reststop">
            <HighlightableText text={`🛋️ A rest stop on the seventh mile. The nearest points of interest are Level ${nearest} and Level ${secondNearest}.`} />
          </Card.Text>
        );
      }
      if (level % 10 === 0 && level % 100 !== 0) {
        sections.push(
          <Card.Text key="waypoint">
            <HighlightableText text={`📍 Waypoint ${level}. Level ${level - 10} is behind you. Level ${level + 10} is ahead.`} />
          </Card.Text>
        );
      }
    }

    // Number family mechanics
    if (properties.sequences.isSquare && level > 1) {
      const root = Math.round(Math.sqrt(level));
      sections.push(
        <Card.Text key="square">
          <HighlightableText text={`🌳 The square root of ${level} is ${root}. They say the root always leads home.${root * root < 1000000 ? ` Going up: ${level * level} awaits.` : ''}`} />
        </Card.Text>
      );
    }

    if (properties.sequences.isFibonacci && level > 1) {
      const next = getNextFibonacci(level);
      const prev = getPrevFibonacci(level);
      sections.push(
        <Card.Text key="fib">
          <HighlightableText text={`🌀 This level is part of the golden sequence.${next ? ` The next in the chain is ${next}.` : ''}${prev ? ` The previous was ${prev}.` : ''}`} />
        </Card.Text>
      );
    }

    if (isPowerOf2(level) && level >= 32) {
      const k = log2(level);
      sections.push(
        <Card.Text key="pow2">
          <HighlightableText text={`⚡ Level ${level} — that's two to the power of ${k}. In binary: ${level.toString(2)}. The next doubling: Level ${level * 2}. Half of this: Level ${level / 2}.`} />
        </Card.Text>
      );
    }

    if (isPrime(level) && level > 1) {
      const np = nextPrime(level);
      const pp = prevPrime(level);
      sections.push(
        <Card.Text key="prime">
          <HighlightableText text={`🔮 Level ${level} is prime — divisible only by itself and one.${np ? ` The next prime is ${np}.` : ''}${pp ? ` The previous prime was ${pp}.` : ''}`} />
        </Card.Text>
      );
    }

    if (properties.patterns.isPalindrome && level > 10) {
      sections.push(
        <Card.Text key="palindrome">
          <HighlightableText text={`🪞 Level ${level} reads the same forwards and backwards. In the mirror: Level ${-level}.`} />
        </Card.Text>
      );
    }

    // Negative perfect square → imaginary root
    if (isNeg && isSquare(absLevel) && absLevel > 1) {
      const root = Math.round(Math.sqrt(absLevel));
      sections.push(
        <Card.Text key="neg-square">
          <HighlightableText text={`The shadow root of ${level} is ${root}i — an imaginary number. The complex plane beckons.`} />
        </Card.Text>
      );
    }

    // Year facts enhanced
    if (YEAR_FUN_FACTS[level]) {
      sections.push(
        <Card.Text key="year">
          <HighlightableText text={`📅 In ${level}, ${YEAR_FUN_FACTS[level]}. Travel to another year: ${level - 1} or ${level + 1}.`} />
        </Card.Text>
      );
    }

    // Poem (existing logic)
    if (poem && !(SPECIAL_LEVELS[absLevel])) {
      sections.push(
        <Card.Text key="poem">
          <HighlightableText text={`This level is ${formattedLevel}, ${poem}`} />
        </Card.Text>
      );
    }

    // Escape navigation — ALWAYS present for non-complex levels
    const hubLevel = nearestHub(isNeg ? -absLevel : level);
    sections.push(
      <ButtonGroup key="nav" style={{ marginTop: '1rem' }}>
        <LevelButton targetLevel={isNeg ? -(absLevel - 1) : hubLevel}>
          ← {isNeg ? `Level ${-(absLevel - 1)}` : `Level ${hubLevel}`}
        </LevelButton>
        <LevelButton targetLevel={isNeg ? -(absLevel + 1) : level + 1}>
          {isNeg ? `Level ${-(absLevel + 1)}` : `Level ${level + 1}`} →
        </LevelButton>
      </ButtonGroup>
    );
  }

  // Determine special level for title
  const specialLevelForTitle = (!unstable && !isStableIsland) ? SPECIAL_LEVELS[Math.abs(level)] : null;

  return (
    <LevelContainer isNegative={isNeg || isNegative}>
      <StyledCard fading={isFading}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${(isNegative ? '-' : '') + formattedLevel}${specialLevelForTitle ? ' — ' + specialLevelForTitle.title : ''}`} size="lg"/>
          </Card.Title>
          {renderStabilityBar()}
          {sections}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default NotImplementedLevel; 