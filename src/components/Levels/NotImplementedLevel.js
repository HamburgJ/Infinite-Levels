import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import NumberTheory from './helpers/NumberTheory';
import { formatComplexNumber } from '../../utils/complex';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';
import { handleLevelCollapse, UnstableText } from '../../utils/levelCollapse';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAchievements } from '../../hooks/useAchievements';
import { ProgressBar } from 'react-bootstrap';
import { CompassReading } from '../Items/CollectableCompass';

// ─── Styled Components ──────────────────────────────────────────────────────
const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem 0;
`;

// ─── Wonder Styled Components ───────────────────────────────────────────────

const breathe = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.02); }
`;

const drift = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const echoFade = keyframes`
  0% { opacity: 0.8; transform: scale(1) translateX(0); }
  100% { opacity: 0; transform: scale(1.5) translateX(20px); }
`;

const convergeSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const WonderText = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.$color || 'inherit'};
  ${props => props.$glow && css`
    text-shadow: 0 0 20px ${props.$glow}, 0 0 40px ${props.$glow}22;
  `}
`;

const AtmosphereCard = styled.div`
  background: ${props => props.$bg || 'transparent'};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 0.5rem 0;
  ${props => props.$border && css`border: 1px solid ${props.$border};`}
  animation: ${breathe} 4s ease-in-out infinite;
`;

const BigSymbol = styled.div`
  font-size: ${props => props.$size || '3rem'};
  text-align: center;
  margin: 1rem 0;
  animation: ${drift} ${props => props.$speed || '3s'} ease-in-out infinite;
  ${props => props.$glow && css`
    text-shadow: 0 0 30px ${props.$glow}, 0 0 60px ${props.$glow}44;
  `}
`;

const EchoContainer = styled.div`
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  padding: 2rem 0;
`;

const EchoLayer = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => 0.3 - props.$i * 0.06};
  font-size: ${props => 2.5 + props.$i * 0.5}rem;
  color: ${props => props.$color || '#888'};
  filter: blur(${props => props.$i * 1.5}px);
  pointer-events: none;
`;

const MountainBar = styled.div`
  display: inline-block;
  width: ${props => props.$width || '12px'};
  height: ${props => props.$height}px;
  background: ${props => props.$color || 'linear-gradient(to top, #4a90d9, #7cb3f0)'};
  border-radius: 3px 3px 0 0;
  margin: 0 2px;
  transition: height 0.5s ease;
  vertical-align: bottom;
`;

const MountainContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 80px;
  margin: 1rem 0;
  padding: 0 1rem;
`;

const TriangleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$color || '#e8a838'};
  display: inline-block;
  margin: 2px;
  opacity: 0;
  animation: ${keyframes`to { opacity: 1; }`} 0.3s ease forwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

const TriangleRow = styled.div`
  text-align: center;
  line-height: 0;
`;

const VoidOverlay = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,${props => Math.min(props.$depth * 0.02, 0.3)}) 100%);
    pointer-events: none;
    border-radius: 12px;
  }
`;

const ConvergeRing = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${props => props.$color || '#e8a838'};
  border-top-color: transparent;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${convergeSpin} ${props => props.$speed || '3s'} linear infinite;
  opacity: ${props => props.$opacity || 0.6};
`;

// ─── NumberTheory Destructuring ─────────────────────────────────────────────
const { isSquare, isFibonacci, isPalindrome, isPrime, isTriangular, isHarshad, isCube, isKaprekar, isLychrel } = NumberTheory;

// ─── Helpers ────────────────────────────────────────────────────────────────

// Repdigit detection (111, 222, 5555, etc.)
const isRepdigit = (n) => {
  const s = n.toString();
  return s.length >= 2 && s.split('').every(c => c === s[0]);
};
const getRepdigitInfo = (n) => {
  const s = n.toString();
  return { digit: parseInt(s[0]), count: s.length };
};

// Perfect number check (sum of proper divisors = number)
const isPerfectNumber = (n) => {
  if (n < 6) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { sum += i; if (i !== n / i) sum += n / i; }
  }
  return sum === n;
};

// Narcissistic / Armstrong number check
const isNarcissistic = (n) => {
  const digits = n.toString().split('').map(Number);
  const power = digits.length;
  if (power < 3) return false;
  return digits.reduce((sum, d) => sum + Math.pow(d, power), 0) === n;
};

// Twin prime check
const isTwinPrime = (n) => isPrime(n) && (isPrime(n - 2) || isPrime(n + 2));
const getTwinPrimePair = (n) => {
  if (isPrime(n - 2)) return [n - 2, n];
  if (isPrime(n + 2)) return [n, n + 2];
  return null;
};

// Triangular number index: T(k) = k*(k+1)/2 → k
const triangularIndex = (n) => Math.round((-1 + Math.sqrt(1 + 8 * n)) / 2);

// Distance from nearest handcrafted level (for void detection)
const distFromHandcrafted = (level) => {
  let min = Infinity;
  for (const h of HANDCRAFTED_LEVELS) {
    const d = Math.abs(h - Math.abs(level));
    if (d < min) min = d;
  }
  return min;
};

// Kaprekar's routine iterations to 6174
const kaprekarSteps = (n) => {
  let num = n;
  const steps = [num];
  for (let i = 0; i < 10; i++) {
    const digits = num.toString().padStart(4, '0').split('').map(Number);
    const desc = parseInt(digits.sort((a, b) => b - a).join(''));
    const asc = parseInt(digits.sort((a, b) => a - b).join(''));
    num = desc - asc;
    steps.push(num);
    if (num === 6174 || num === 0) break;
  }
  return steps;
};

// Abundant/deficient check
const divisorSum = (n) => {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { sum += i; if (i !== n / i) sum += n / i; }
  }
  return sum;
};

// Fibonacci sequence and navigation
const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025];
const getNextFibonacci = (n) => FIBONACCI[FIBONACCI.indexOf(n) + 1] || null;
const getPrevFibonacci = (n) => FIBONACCI[FIBONACCI.indexOf(n) - 1] || null;

// Prime navigation
const nextPrime = (n) => { let c = n + 1; while (!isPrime(c)) c++; return c; };
const prevPrime = (n) => { if (n <= 2) return null; let c = n - 1; while (c > 1 && !isPrime(c)) c--; return c > 1 ? c : null; };

// Powers of 2
const isPowerOf2 = (n) => n > 0 && (n & (n - 1)) === 0;

// Stable island values for complex levels
const STABLE_VALUES = new Set([0, 1, 2, 3, 5]);

// ─── Complex Plane Helpers ──────────────────────────────────────────────────

// Get which quadrant a complex number is in (1-4), or 0 for axes
const getQuadrant = (complex) => {
  if (!complex || typeof complex !== 'object') return 0;
  const r = complex.real;
  const i = complex.imag;
  if (r > 0 && i > 0) return 1;  // Bright Plane
  if (r < 0 && i > 0) return 2;  // Mirror Coast
  if (r < 0 && i < 0) return 3;  // The Deep
  if (r > 0 && i < 0) return 4;  // The Undertow
  return 0; // on an axis
};

const QUADRANT_NAMES = {
  1: 'The Bright Plane',
  2: 'The Mirror Coast',
  3: 'The Deep',
  4: 'The Undertow'
};

const QUADRANT_PREFIXES = {
  1: '',
  2: 'The reflections here are unsettled. ',
  3: 'The darkness is thicker here. ',
  4: 'Something pulls downward. '
};

// Collapse timer duration (in ticks of 100ms each → value of 100 = 10sec)
const getCollapseRate = (complex) => {
  const q = getQuadrant(complex);
  // Near singularity (manhattan dist ≤ 2 from 5+5i)
  const singDist = Math.abs(complex.real - 5) + Math.abs(complex.imag - 5);
  if (singDist <= 2) return 2;  // 5 seconds
  if (q === 3) return 1.43;     // ~7 seconds
  return 1;                      // 10 seconds (default)
};

// Check if a+bi is a Gaussian prime
const isGaussianPrime = (a, b) => {
  if (a === 0 && b === 0) return false;
  const norm = a * a + b * b;
  if (norm < 2) return false;
  // Check if norm is prime
  if (norm < 4) return true;
  if (norm % 2 === 0 || norm % 3 === 0) return false;
  for (let k = 5; k * k <= norm; k += 6) {
    if (norm % k === 0 || norm % (k + 2) === 0) return false;
  }
  return true;
};

// Handcrafted level list for nearest-landmark navigation
const HANDCRAFTED_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 30, 33, 34, 37, 40, 42, 44, 50, 51, 52, 55, 60, 62, 64, 66, 69, 72, 75, 77, 81, 82, 86, 88, 89, 90, 95, 97, 98, 99, 100, 101, 123, 128, 144, 150, 153, 155, 156, 158, 159, 160, 161, 200, 233, 256, 365, 377, 404, 500, 512, 610, 987, 999, 1000, 1001, 1024, 9999, 10000, 69420, 100000, 1000000, 10000000];

const nearestHub = (level) => {
  if (typeof level === 'object') return 0;
  const a = Math.abs(level);
  if (a <= 10) return 0;
  if (a <= 30) return 10;
  if (a <= 50) return 30;
  if (a <= 100) return 50;
  if (a <= 150) return 100;
  if (a <= 500) return 150;
  if (a <= 1000) return 500;
  if (a <= 10000) return 1000;
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

// ─── Year Facts ─────────────────────────────────────────────────────────────
const YEAR_FUN_FACTS = {
  2024: "the Voyager 1 spacecraft resumed sending data after months of garbled signals",
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
  1964: "the Civil Rights Act was signed into law",
  1963: "Martin Luther King Jr. delivered the I Have a Dream speech",
  1961: "the first transatlantic television link was established",
  1959: "the first color television was broadcast",
  1957: "the first satellite television broadcast was made",
  1955: "the first live transatlantic telephone call was made",
  2025: "nobody can agree on what year the future actually started",
  2026: "the first permanent lunar base will be under construction",
  2027: "the last analog TV signal will be officially shut down",
  2028: "the LA Olympics will be hosted for the third time",
  2029: "the asteroid Apophis will make its close flyby of Earth",
  2030: "the UN's sustainable development goals deadline will arrive",
  2031: "the first crewed mission to Mars is being planned",
  2032: "the Brisbane Olympics will be held",
  2033: "most new buildings will generate more energy than they consume",
  2034: "the global population is projected to peak",
  2035: "the EU aims for full carbon neutrality",
  2036: "the unix timestamp will still be fine for another two years",
  2037: "the oldest millennials will turn fifty-six",
  2038: "the thirty-two-bit unix timestamp will overflow on January nineteenth",
  2039: "the centennial of the start of World War II",
  2040: "most predictions about this year will have been wrong",
  2041: "the Voyager probes will still be drifting outward, long past their last signal",
  2042: "the answer to life, the universe, and everything finally has its own year",
  2043: "the hundredth anniversary of the first electronic computer",
  2044: "a total solar eclipse will cross the United States again",
  2045: "the Singularity, according to Ray Kurzweil",
  2046: "the centennial of ENIAC, the first general-purpose computer",
};

// ─── Curiosity Reward Levels ────────────────────────────────────────────────
const SPECIAL_LEVELS = {
  37: {
    title: "The Most Random Number",
    text: "Ask anyone to pick a random number and they'll whisper thirty-seven. Something about it feels… chosen. There's nothing random about you being here.",
    achievement: 'CURIOUS_MIND',
    mood: 'mystery',
  },
  73: {
    title: "Sheldon's Number",
    text: "Seventy-three. The twenty-first prime. Its mirror, thirty-seven, is the twelfth prime. Its mirror, twenty-one, is the product of multiplying seven and three. In binary, it's a palindrome: 1001001. Some numbers are just showing off.",
    mood: 'clever',
  },
  314: {
    title: "Pi Day",
    text: "March fourteenth. Pi Day. The circle's secret, carved into the calendar. three point one four one five nine two six five three five eight nine seven nine three… The digits never repeat. The circle never closes.",
    mood: 'cosmic',
  },
  420: {
    title: "Four Twenty",
    text: "The clock always reads four twenty somewhere. A number with a reputation it never asked for. But here, all numbers are equal.",
    mood: 'chill',
  },
  496: {
    title: "The Third Perfection",
    text: "Four hundred ninety-six. The third perfect number. One plus two plus four plus eight plus sixteen plus thirty-one plus sixty-two plus one-twenty-four plus two-forty-eight. Every part returns to the whole. Perfection is rare — the next is eight thousand one hundred twenty-eight.",
    mood: 'sacred',
  },
  666: {
    title: "The Number of the Beast",
    text: "Six hundred sixty-six. The number of the beast. Invert it and you get nine hundred ninety-nine — one short of a thousand. One short of freedom.",
    style: { color: '#cc0000' },
    mood: 'dark',
  },
  777: {
    title: "Triple Sevens",
    text: "Seven times one hundred eleven. Three sevens in a row. The slot machine lights up. You probably can't cash it in, but it still feels good.",
    mood: 'lucky',
  },
  1234: {
    title: "The Simplest Sequence",
    text: "One, two, three, four. The first thing you ever counted. The sequence that teaches every child that numbers go somewhere. But where? Have you followed the Fibonacci chain? It starts the same way…",
    mood: 'wonder',
  },
  1729: {
    title: "The Hardy-Ramanujan Number",
    text: "A taxicab pulled up to the hospital. Hardy apologized for bringing a dull number. Ramanujan smiled — the smallest sum of two cubes in two different ways. One cubed plus twelve cubed. Nine cubed plus ten cubed. Genius sees patterns in everything, even taxi license plates.",
    mood: 'sacred',
  },
  2048: {
    title: "The Game",
    text: "Two to the eleventh power. A number so famous it became a game. Slide, combine, double, reach. In binary: a one followed by eleven zeros. Clean. Perfect. Addictive.",
    mood: 'clever',
  },
  3141: {
    title: "Pi Times a Thousand",
    text: "Pi, magnified. Three thousand one hundred forty-one. The first four digits of pi, scaled up by a thousand. But the real thing lives between the integers — you can't walk there from here.",
    mood: 'cosmic',
  },
  6174: {
    title: "Kaprekar's Constant",
    text: "Take any four-digit number. Sort its digits descending, then ascending. Subtract. Repeat. No matter where you start, you will arrive here. Six thousand one hundred seventy-four. The number all paths converge to. You cannot escape the constant.",
    mood: 'cosmic',
  },
  8128: {
    title: "The Fourth Perfection",
    text: "Eight thousand one hundred twenty-eight. The fourth perfect number. Only four exist below ten thousand. The next is thirty-three million. They get rare fast.",
    mood: 'sacred',
  },
  9801: {
    title: "The Reciprocal Mirror",
    text: "One divided by nine thousand eight hundred one equals zero point zero zero zero one zero two zero three zero four zero five… The decimal expansion counts: 00, 01, 02, 03, all the way to 99. A number that contains all numbers.",
    mood: 'wonder',
  },
  12345: {
    title: "The Long Count",
    text: "One, two, three, four, five. You climbed twelve thousand three hundred forty-five levels just to count on one hand. The simplest sequence, stretched across the infinite.",
    mood: 'wonder',
  },
  65536: {
    title: "Two to the Sixteenth",
    text: "Sixty-five thousand five hundred thirty-six. The boundary of the unsigned sixteen-bit integer. Beyond here, old computers forget how to count. You've reached the edge of a very small world.",
    mood: 'clever',
  },
};

// ─── Archetype System ───────────────────────────────────────────────────────
// Pick ONE identity per level. Highest priority wins. Secondary properties stay hidden.

const classifyArchetype = (level, absLevel) => {
  // 1. Year — historical/future timeline (1955–2046)
  if (YEAR_FUN_FACTS[absLevel]) {
    return { type: 'year', year: absLevel, fact: YEAR_FUN_FACTS[absLevel] };
  }

  // 2. Curiosity — handpicked interesting numbers
  if (SPECIAL_LEVELS[absLevel]) {
    return { type: 'curiosity', data: SPECIAL_LEVELS[absLevel] };
  }

  // 3. Repdigit — hall of echoes (111, 222, 5555, etc.)
  if (isRepdigit(absLevel)) {
    return { type: 'repdigit', ...getRepdigitInfo(absLevel) };
  }

  // 4. Perfect number — sacred ground (6, 28, 496, 8128)
  if (isPerfectNumber(absLevel)) {
    return { type: 'perfect' };
  }

  // 5. Narcissistic / Armstrong — self-referential magic
  if (isNarcissistic(absLevel)) {
    return { type: 'narcissistic' };
  }

  // 6. Fibonacci — golden sequence chain
  if (isFibonacci(absLevel) && absLevel > 1) {
    return {
      type: 'fibonacci',
      next: getNextFibonacci(absLevel),
      prev: getPrevFibonacci(absLevel),
    };
  }

  // 7. Power of 2 — binary doubling (≥32 to avoid overlap with small handcrafted levels)
  if (isPowerOf2(absLevel) && absLevel >= 32) {
    return {
      type: 'power2',
      exponent: Math.log2(absLevel),
      binary: absLevel.toString(2),
    };
  }

  // 8. Perfect Square — root portal network (≥4)
  if (isSquare(absLevel) && absLevel >= 4) {
    return {
      type: 'square',
      root: Math.round(Math.sqrt(absLevel)),
    };
  }

  // 9. Perfect Cube — volumetric (≥27)
  if (isCube(absLevel) && absLevel >= 27) {
    return {
      type: 'cube',
      root: Math.round(Math.cbrt(absLevel)),
    };
  }

  // 10. Twin Prime — cosmic pair
  if (isTwinPrime(absLevel) && absLevel > 2) {
    const pair = getTwinPrimePair(absLevel);
    return {
      type: 'twinPrime',
      pair,
      twin: pair[0] === absLevel ? pair[1] : pair[0],
    };
  }

  // 11. Prime — lonely sentinel
  if (isPrime(absLevel) && absLevel > 1) {
    return {
      type: 'prime',
      next: nextPrime(absLevel),
      prev: prevPrime(absLevel),
    };
  }

  // 12. Triangular — staircase of sums
  if (isTriangular(absLevel) && absLevel >= 10) {
    const k = triangularIndex(absLevel);
    return { type: 'triangular', index: k };
  }

  // 13. Harshad — self-divisible harmony
  if (isHarshad(absLevel) && absLevel >= 100) {
    const dSum = absLevel.toString().split('').reduce((s, d) => s + parseInt(d), 0);
    return { type: 'harshad', digitSum: dSum };
  }

  // 14. Palindrome — mirror landscape
  if (isPalindrome(absLevel) && absLevel > 10) {
    const digits = absLevel.toString().split('').map(Number);
    return { type: 'palindrome', digits };
  }

  // 15. Milestone — multiples of 100, ≥200
  if (absLevel % 100 === 0 && absLevel >= 200) {
    return { type: 'milestone' };
  }

  // 16. Darkness — multiples of 13
  if (absLevel % 13 === 0 && absLevel > 0) {
    return { type: 'darkness' };
  }

  // 17. Void — deep wilderness (far from all handcrafted levels)
  const dist = distFromHandcrafted(level);
  if (dist > 50) {
    return { type: 'void', distance: dist };
  }

  // 18. Rest Stop — multiples of 7
  if (absLevel % 7 === 0 && absLevel > 0) {
    return { type: 'rest' };
  }

  // 19. Waypoint — multiples of 10
  if (absLevel % 10 === 0 && absLevel > 0) {
    return { type: 'waypoint' };
  }

  // 20. Ordinary — everything else
  return { type: 'ordinary' };
};

// ─── Archetype Renderers ────────────────────────────────────────────────────
// Each returns { text, nav, title?, style?, visual? }
// visual: optional JSX for atmospheric effects rendered before text

const renderArchetype = (archetype, level, absLevel, isNeg) => {
  const fwd = isNeg ? -(absLevel + 1) : level + 1;
  const back = isNeg ? -(absLevel - 1) : nearestHub(level);
  const backLabel = isNeg ? `Level ${-(absLevel - 1)}` : `Level ${nearestHub(level)}`;
  const fwdLabel = isNeg ? `Level ${-(absLevel + 1)}` : `Level ${level + 1}`;
  const sign = isNeg ? -1 : 1;

  switch (archetype.type) {
    case 'year': {
      const prev = absLevel - 1;
      const next = absLevel + 1;
      return {
        text: `📅 In ${archetype.year}, ${archetype.fact}.`,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={isNeg ? -prev : prev}>← {isNeg ? -prev : prev}</LevelButton>
            <LevelButton targetLevel={isNeg ? -next : next}>{isNeg ? -next : next} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'curiosity': {
      const mood = archetype.data.mood || 'mystery';
      const moodColors = {
        mystery: { bg: 'rgba(88, 28, 135, 0.08)', border: 'rgba(139, 92, 246, 0.3)', glow: '#a78bfa' },
        cosmic: { bg: 'rgba(30, 58, 138, 0.08)', border: 'rgba(96, 165, 250, 0.3)', glow: '#60a5fa' },
        sacred: { bg: 'rgba(161, 98, 7, 0.08)', border: 'rgba(251, 191, 36, 0.3)', glow: '#fbbf24' },
        dark: { bg: 'rgba(127, 29, 29, 0.08)', border: 'rgba(248, 113, 113, 0.3)', glow: '#f87171' },
        lucky: { bg: 'rgba(21, 128, 61, 0.08)', border: 'rgba(74, 222, 128, 0.3)', glow: '#4ade80' },
        clever: { bg: 'rgba(30, 64, 175, 0.08)', border: 'rgba(147, 197, 253, 0.3)', glow: '#93c5fd' },
        wonder: { bg: 'rgba(124, 58, 237, 0.08)', border: 'rgba(196, 181, 253, 0.3)', glow: '#c4b5fd' },
        chill: { bg: 'rgba(13, 148, 136, 0.08)', border: 'rgba(94, 234, 212, 0.3)', glow: '#5eead4' },
      };
      const c = moodColors[mood] || moodColors.mystery;
      return {
        title: archetype.data.title,
        text: archetype.data.text,
        style: archetype.data.style || {},
        visual: (
          <AtmosphereCard $bg={c.bg} $border={c.border}>
            <BigSymbol $glow={c.glow} $size="2.5rem" $speed="4s">✦</BigSymbol>
          </AtmosphereCard>
        ),
        nav: (
          <ButtonGroup key="nav" style={{ marginTop: '1rem' }}>
            <LevelButton targetLevel={back}>← {backLabel}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'repdigit': {
      const d = archetype.digit;
      const c = archetype.count;
      const echoText = d.toString();
      const echoPhrases = [
        `${echoText} echoes ${c} times.`,
        `A hall of mirrors, and every reflection is ${echoText}.`,
        `The same digit, ${c} times over. Nothing to decode — just repetition.`,
      ];
      const phrase = echoPhrases[d % echoPhrases.length];
      return {
        title: `The Echo Chamber`,
        text: phrase,
        visual: (
          <EchoContainer>
            <BigSymbol $size="3rem" $glow="rgba(168, 85, 247, 0.6)">{absLevel}</BigSymbol>
            {Array.from({ length: 4 }, (_, i) => (
              <EchoLayer key={i} $i={i + 1}>{absLevel}</EchoLayer>
            ))}
          </EchoContainer>
        ),
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * (absLevel - 1)}>← {sign * (absLevel - 1)}</LevelButton>
            <LevelButton targetLevel={sign * (absLevel + 1)}>{sign * (absLevel + 1)} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'perfect': {
      const perfects = [6, 28, 496, 8128];
      const idx = perfects.indexOf(absLevel);
      const ordinal = ['first', 'second', 'third', 'fourth'][idx] || '';
      const nextPerf = perfects[idx + 1] || null;
      const prevPerf = idx > 0 ? perfects[idx - 1] : null;
      return {
        title: `Sacred Ground`,
        text: `The ${ordinal} perfect number. Equal to the sum of every part of itself. ${absLevel} is complete — needing nothing, lacking nothing.${nextPerf ? ` The next perfection waits at ${nextPerf.toLocaleString()}.` : ''}`,
        style: { color: '#d4a017' },
        visual: (
          <AtmosphereCard $bg="rgba(161, 98, 7, 0.06)" $border="rgba(251, 191, 36, 0.25)">
            <BigSymbol $glow="rgba(251, 191, 36, 0.7)" $size="3.5rem" $speed="6s">✦</BigSymbol>
          </AtmosphereCard>
        ),
        nav: (
          <ButtonGroup key="nav">
            {prevPerf && <LevelButton targetLevel={sign * prevPerf}>← {sign * prevPerf}</LevelButton>}
            {nextPerf && <LevelButton targetLevel={sign * nextPerf}>{sign * nextPerf} →</LevelButton>}
            {!nextPerf && <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>}
          </ButtonGroup>
        ),
      };
    }

    case 'narcissistic': {
      const digits = absLevel.toString().split('').map(Number);
      const power = digits.length;
      const equation = digits.map(d => `${d}^${power}`).join(' + ');
      return {
        title: `Self-Portrait`,
        text: `A narcissistic number. ${equation} = ${absLevel}. Raise each digit to the power of the digit count and the sum rebuilds the original. Self-contained.`,
        visual: (
          <AtmosphereCard $bg="rgba(124, 58, 237, 0.06)" $border="rgba(196, 181, 253, 0.3)">
            <BigSymbol $glow="rgba(167, 139, 250, 0.5)" $size="2.5rem" $speed="5s">∞</BigSymbol>
          </AtmosphereCard>
        ),
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={back}>← {backLabel}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'fibonacci': {
      const navButtons = [];
      if (archetype.prev) {
        navButtons.push(
          <LevelButton key="prev" targetLevel={sign * archetype.prev}>
            ← {sign * archetype.prev}
          </LevelButton>
        );
      }
      if (archetype.next) {
        navButtons.push(
          <LevelButton key="next" targetLevel={sign * archetype.next}>
            {sign * archetype.next} →
          </LevelButton>
        );
      }
      const fibPoetry = [
        `Part of the golden spiral. Each number is the sum of the two before it.`,
        `The Fibonacci sequence passes through here.`,
        `Add the two behind you and you get what's ahead. The sequence continues.`,
      ];
      return {
        title: 'The Golden Chain',
        text: `🌀 ${fibPoetry[absLevel % fibPoetry.length]}`,
        visual: (
          <AtmosphereCard $bg="rgba(161, 98, 7, 0.04)" $border="rgba(251, 191, 36, 0.15)">
            <BigSymbol $glow="rgba(251, 191, 36, 0.4)" $size="2rem" $speed="8s">φ</BigSymbol>
          </AtmosphereCard>
        ),
        nav: <ButtonGroup key="nav">{navButtons}</ButtonGroup>,
      };
    }

    case 'power2': {
      const half = absLevel / 2;
      const double = absLevel * 2;
      return {
        title: 'Binary Beacon',
        text: `⚡ Two to the ${archetype.exponent}. In binary: ${archetype.binary}. A single one followed by zeros. Each step doubles the last.`,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * half}>← ÷2 = {sign * half}</LevelButton>
            <LevelButton targetLevel={sign * double}>×2 = {sign * double} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'square': {
      const root = archetype.root;
      const squared = absLevel * absLevel;
      const canGoUp = squared < 1000000;
      const navButtons = [
        <LevelButton key="root" targetLevel={sign * root}>
          ← √ = {sign * root}
        </LevelButton>
      ];
      if (canGoUp) {
        navButtons.push(
          <LevelButton key="up" targetLevel={sign * squared}>
            {sign * squared} = {absLevel}² →
          </LevelButton>
        );
      } else {
        navButtons.push(
          <LevelButton key="fwd" targetLevel={fwd}>{fwdLabel} →</LevelButton>
        );
      }
      return {
        title: 'Root Portal',
        text: `🌳 ${root} × ${root} = ${absLevel}. A perfect square. Take the root to go down, or square it to go up.`,
        nav: <ButtonGroup key="nav">{navButtons}</ButtonGroup>,
      };
    }

    case 'cube': {
      const root = archetype.root;
      return {
        title: 'The Solid Form',
        text: `🧊 ${root} × ${root} × ${root} = ${absLevel}. A perfect cube.`,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * root}>← ∛ = {sign * root}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'twinPrime': {
      const twin = archetype.twin;
      return {
        title: 'Binary Stars',
        text: `🌟 A twin prime — ${archetype.pair[0]} and ${archetype.pair[1]}, only two apart. Primes that come in pairs. Whether twin primes go on forever is still an open question.`,
        visual: (
          <AtmosphereCard $bg="rgba(30, 58, 138, 0.05)" $border="rgba(96, 165, 250, 0.2)">
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
              <BigSymbol $glow="rgba(96, 165, 250, 0.5)" $size="1.8rem" $speed="5s">{archetype.pair[0]}</BigSymbol>
              <span style={{ opacity: 0.3, fontSize: '1.2rem' }}>⟷</span>
              <BigSymbol $glow="rgba(96, 165, 250, 0.5)" $size="1.8rem" $speed="7s">{archetype.pair[1]}</BigSymbol>
            </div>
          </AtmosphereCard>
        ),
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * twin}>← Twin: {sign * twin}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'prime': {
      const navButtons = [];
      if (archetype.prev) {
        navButtons.push(
          <LevelButton key="prev" targetLevel={sign * archetype.prev}>
            ← {sign * archetype.prev}
          </LevelButton>
        );
      }
      if (archetype.next) {
        navButtons.push(
          <LevelButton key="next" targetLevel={sign * archetype.next}>
            {sign * archetype.next} →
          </LevelButton>
        );
      }
      const primePoetry = [
        `Indivisible. Only two factors: one and itself.`,
        `A prime. Every integer is built from numbers like this.`,
        `Only two factors: one and itself. The building blocks of every other number.`,
      ];
      return {
        text: `🔮 ${primePoetry[absLevel % primePoetry.length]}`,
        nav: <ButtonGroup key="nav">{navButtons}</ButtonGroup>,
      };
    }

    case 'triangular': {
      const k = archetype.index;
      // Build visual triangle
      const maxRows = Math.min(k, 8);
      const startRow = Math.max(1, k - maxRows + 1);
      const triangleVisual = (
        <div style={{ margin: '0.5rem 0' }}>
          {Array.from({ length: maxRows }, (_, i) => {
            const row = startRow + i;
            return (
              <TriangleRow key={row}>
                {Array.from({ length: row }, (_, j) => (
                  <TriangleDot key={j} $delay={`${(i * 0.1) + (j * 0.05)}s`} />
                ))}
              </TriangleRow>
            );
          })}
        </div>
      );
      return {
        title: 'The Staircase',
        text: `🔺 The ${k}th triangular number. Stack one, then two, then three… all the way to ${k}. The sum of every step you've climbed.`,
        visual: triangleVisual,
        nav: (
          <ButtonGroup key="nav">
            {k > 1 && <LevelButton targetLevel={sign * ((k - 1) * k / 2)}>← T({k - 1}) = {sign * ((k - 1) * k / 2)}</LevelButton>}
            <LevelButton targetLevel={sign * ((k + 1) * (k + 2) / 2)}>T({k + 1}) = {sign * ((k + 1) * (k + 2) / 2)} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'harshad': {
      return {
        text: `✨ A Harshad number — divisible by the sum of its own digits (${archetype.digitSum}). ${absLevel} ÷ ${archetype.digitSum} = ${absLevel / archetype.digitSum}. "Harshad" means "great joy" in Sanskrit.`,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={back}>← {backLabel}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'palindrome': {
      const digits = archetype.digits;
      // Build mountain visualization
      const maxH = Math.max(...digits);
      return {
        title: 'The Mirror Landscape',
        text: `🪞 Read it forwards or backwards — same number either way.`,
        visual: (
          <MountainContainer>
            {digits.map((d, i) => (
              <MountainBar
                key={i}
                $height={`${(d / Math.max(maxH, 1)) * 48 + 4}px`}
                $width={`${Math.max(24, Math.floor(180 / digits.length))}px`}
                $color={`hsl(${220 + i * (60 / digits.length)}, 50%, ${55 + d * 3}%)`}
              />
            ))}
          </MountainContainer>
        ),
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={-absLevel}>← Mirror: Level {-absLevel}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'milestone': {
      const prev100 = absLevel - 100;
      const next100 = absLevel + 100;
      const p10 = [100, 1000, 10000, 100000, 1000000, 10000000];
      const nextP10 = p10.find(p => p > absLevel) || null;
      const milestoneHint = nextP10 ? ` The next charted outpost is Level ${nextP10.toLocaleString()}.` : '';
      return {
        text: `🎉 Milestone. You've traveled ${absLevel.toLocaleString()} levels from the origin.${milestoneHint}`,
        style: { fontSize: '1.1em', fontWeight: 'bold' },
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * prev100}>← {sign * prev100}</LevelButton>
            <LevelButton targetLevel={sign * next100}>{sign * next100} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'darkness': {
      const [nearest, secondNearest] = findNearestHandcrafted(absLevel);
      const darkPhrases = [
        `Thirteen's shadow falls here. The superstitious stay away.`,
        `A dark frequency hums at multiples of thirteen.`,
        `The thirteenth hour. The thirteenth floor. Another multiple of the unlucky number.`,
      ];
      return {
        text: `🌑 ${darkPhrases[absLevel % darkPhrases.length]}`,
        style: { background: 'rgba(0,0,0,0.15)', padding: '0.5rem', borderRadius: '4px' },
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * nearest}>← Level {sign * nearest}</LevelButton>
            <LevelButton targetLevel={sign * secondNearest}>Level {sign * secondNearest} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'void': {
      const dist = archetype.distance;
      const depth = Math.min(dist / 200, 1); // 0→1 as distance grows
      const voidPhrases = [
        `You are ${dist} levels from the nearest landmark. Not much out here.`,
        `Nothing is catalogued this far out. You're off the edge of the map.`,
        `Unvisited. Not empty — just overlooked.`,
        `Far from anything named. Far from anything charted. Just a number.`,
      ];
      const [nearest] = findNearestHandcrafted(absLevel);
      return {
        title: dist > 150 ? 'Deep Wilderness' : 'The Outskirts',
        text: `🌌 ${voidPhrases[absLevel % voidPhrases.length]}`,
        visual: <VoidOverlay $depth={depth} />,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * nearest}>← Nearest landmark: {sign * nearest}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'rest': {
      const [nearest, secondNearest] = findNearestHandcrafted(absLevel);
      return {
        text: `🛋️ Divisible by seven. A rest stop between landmarks.`,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * nearest}>← Level {sign * nearest}</LevelButton>
            <LevelButton targetLevel={sign * secondNearest}>Level {sign * secondNearest} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'waypoint': {
      const prev10 = absLevel - 10;
      const next10 = absLevel + 10;
      return {
        text: `📍 Waypoint ${isNeg ? -absLevel : absLevel}. A round number.`,
        nav: (
          <ButtonGroup key="nav">
            <LevelButton targetLevel={sign * prev10}>← {sign * prev10}</LevelButton>
            <LevelButton targetLevel={sign * next10}>{sign * next10} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'ordinary':
    default: {
      // Even ordinary levels get a little something
      const ds = divisorSum(absLevel);
      const abundant = ds > absLevel;
      const deficient = ds < absLevel;
      let flavor = null;
      if (absLevel > 20 && abundant) {
        flavor = `Its divisors add up to ${ds} — more than itself. An abundant number.`;
      } else if (absLevel > 20 && deficient) {
        flavor = `Its divisors add up to ${ds} — less than itself. A deficient number.`;
      }
      return {
        text: flavor ? <WonderText>{flavor}</WonderText> : null,
        nav: (
          <ButtonGroup key="nav" style={{ marginTop: '0.5rem' }}>
            <LevelButton targetLevel={back}>← {backLabel}</LevelButton>
            <LevelButton targetLevel={fwd}>{fwdLabel} →</LevelButton>
          </ButtonGroup>
        ),
      };
    }
  }
};

// ─── Decimal Archetype System ───────────────────────────────────────────────
// Mirrors the integer archetype system. One identity per decimal level.

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const findSimpleFraction = (x, maxDenom = 12) => {
  for (let q = 2; q <= maxDenom; q++) {
    const p = Math.round(x * q);
    if (p > 0 && Math.abs(p / q - x) < 0.0001) {
      const g = gcd(p, q);
      return { p: p / g, q: q / g };
    }
  }
  return null;
};

const isTerminatingFraction = (q) => {
  let n = q;
  while (n % 2 === 0) n /= 2;
  while (n % 5 === 0) n /= 5;
  return n === 1;
};

const FAMOUS_CONSTANTS = [
  { name: 'π', value: Math.PI, level: 3.14159 },
  { name: 'e', value: Math.E, level: 2.718 },
  { name: 'φ (the golden ratio)', value: (1 + Math.sqrt(5)) / 2, level: 1.618 },
  { name: '√2', value: Math.sqrt(2), level: 1.414 },
  { name: '√3', value: Math.sqrt(3), level: null },
  { name: '√5', value: Math.sqrt(5), level: null },
  { name: 'ln(2)', value: Math.log(2), level: null },
  { name: 'τ (tau)', value: Math.PI * 2, level: null },
];

const HANDCRAFTED_DECIMAL_LIST = [0.5, 0.25, 0.75, 0.333, 0.666, 0.999, 0.1, 0.2, 0.125, 1.5, 2.5, 3.14159, 2.718, 1.618, 1.414, 3.52, 0.007];

const classifyDecimalArchetype = (absLevel) => {
  // 1. Decimal dust — microscopic numbers near zero
  if (absLevel > 0 && absLevel < 0.005) {
    return { type: 'decimalDust' };
  }

  // 2. Near-integer — within 0.015 of a whole number (not zero)
  const nearest = Math.round(absLevel);
  if (nearest > 0 && Math.abs(absLevel - nearest) < 0.015) {
    return { type: 'nearInteger', target: nearest, above: absLevel > nearest };
  }

  // 3. Fraction analysis first (so 5/7 beats "near ln(2)")
  const wholePart = Math.floor(absLevel);
  const fracPart = absLevel - wholePart;

  if (fracPart > 0.001) {
    const frac = findSimpleFraction(fracPart);
    if (frac) {
      // Pure reciprocal (1/n) for numbers between 0 and 1
      if (frac.p === 1 && frac.q >= 2 && wholePart === 0) {
        return { type: 'reciprocal', denom: frac.q, repeating: !isTerminatingFraction(frac.q) };
      }
      // Simple fraction (p/q)
      return {
        type: 'simpleFraction',
        p: frac.p, q: frac.q,
        whole: wholePart,
        repeating: !isTerminatingFraction(frac.q)
      };
    }
  }

  // 4. Near a famous constant (checked after fractions so clean fractions win)
  for (const c of FAMOUS_CONSTANTS) {
    if (Math.abs(absLevel - c.value) < c.value * 0.05) {
      return { type: 'nearConstant', constant: c };
    }
  }

  // 5. Ordinary decimal — no special classification
  return { type: 'ordinaryDecimal' };
};

const FRACTION_FAMILY_FLAVOR = {
  3: 'The thirds — each one a decimal that never ends, never resolves. THREE repeating forever, or SIX.',
  5: (p) => `That\'s ${p * 20} percent. Fifths are percentages in disguise — the fraction your math teacher preferred and your tax return demands.`,
  6: 'The sixths — halfway between thirds and halves. A family that borrows from both sides.',
  7: 'The sevenths — the wildest simple fraction family. SIX digits repeat forever: ONE FOUR TWO EIGHT FIVE SEVEN, shuffled in every seventh but never changing.',
  8: 'The eighths — musician\'s fractions. Every eighth note is half a quarter beat. Conductors count in eighths without knowing it.',
  9: 'The ninths — each one repeats a single digit forever. ONE NINTH is ZERO POINT ONE ONE ONE repeating. The pattern is obvious once you see it.',
  10: (p) => `${p} out of TEN. Decimal\'s home turf — the fraction that needs no conversion.`,
  11: 'The elevenths — each one repeats a TWO-digit pattern forever. Hidden symmetry.',
  12: 'The twelfths — clock fractions. Each twelfth is FIVE minutes of an hour, one number on the face.',
};

const renderDecimalArchetype = (archetype, level, absLevel, isNeg) => {
  const floor = Math.floor(absLevel);
  const ceil = floor + 1;

  switch (archetype.type) {
    case 'decimalDust': {
      const magnitude = -Math.floor(Math.log10(absLevel));
      const unitNames = { 2: 'hundredths', 3: 'thousandths', 4: 'ten-thousandths', 5: 'hundred-thousandths', 6: 'millionths' };
      const unitName = unitNames[Math.min(magnitude, 6)] || 'thousandths';
      const scaled = (absLevel * Math.pow(10, magnitude)).toFixed(1);
      return {
        text: `🔬 ${scaled} ${unitName} of a whole number. Calculators round this away. Spreadsheets ignore it. But it's a real point on the number line, and you found it.`,
        nav: (
          <>
            <ButtonGroup key="dust-nav">
              <LevelButton targetLevel={0}>Level ZERO</LevelButton>
              <LevelButton targetLevel={0.1}>Level ZERO POINT ONE</LevelButton>
            </ButtonGroup>
            <ButtonGroup key="dust-hub">
              <LevelButton targetLevel={0.5}>Level 0.5 (Decimal Hub)</LevelButton>
              <LevelButton targetLevel={0.007}>Level 0.007</LevelButton>
            </ButtonGroup>
          </>
        ),
      };
    }

    case 'nearInteger': {
      const t = archetype.target;
      const dir = archetype.above ? 'above' : 'below';
      const gap = Math.abs(absLevel - t);
      const gapStr = gap.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
      const metaphor = archetype.above
        ? 'A hair over the line.'
        : 'Almost there. Close enough for rounding — but not for math.';
      return {
        text: `🎯 Just ${gapStr} ${dir} ${isNeg ? -t : t}. ${metaphor} Rounding would say you're there. But rounding is lying, and decimals remember the difference.`,
        nav: (
          <ButtonGroup key="near-nav">
            <LevelButton targetLevel={isNeg ? -t : t}>Level {isNeg ? -t : t}</LevelButton>
            <LevelButton targetLevel={isNeg ? -(t - 1) : t - 1}>Level {isNeg ? -(t - 1) : t - 1}</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5 (Decimal Hub)</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'nearConstant': {
      const c = archetype.constant;
      const diff = Math.abs(absLevel - c.value);
      const dir = absLevel > c.value ? 'above' : 'below';
      const hasCraftedLevel = c.level !== null;
      return {
        text: `📐 Near ${c.name} — off by ${diff.toFixed(4)}. Just ${dir} the real value (${c.value.toFixed(5)}...).${hasCraftedLevel ? ` The actual ${c.name} is at Level ${c.level}.` : ''}`,
        nav: (
          <ButtonGroup key="const-nav">
            {hasCraftedLevel && <LevelButton targetLevel={c.level}>Level {c.name}</LevelButton>}
            <LevelButton targetLevel={isNeg ? -floor : floor}>Level {isNeg ? -floor : floor}</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5 (Decimal Hub)</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'reciprocal': {
      const n = archetype.denom;
      const repInfo = archetype.repeating
        ? `The digits repeat forever — ${n} doesn't divide cleanly into powers of TEN.`
        : `A clean, terminating decimal. ${n} plays nicely with the base-TEN system.`;
      return {
        text: `🔄 One divided by ${n}. The reciprocal. Multiply this level by ${n} and you land exactly on one. ${repInfo}`,
        nav: (
          <ButtonGroup key="recip-nav">
            <LevelButton targetLevel={isNeg ? -n : n}>Level {isNeg ? -n : n} (the denominator)</LevelButton>
            <LevelButton targetLevel={1}>Level ONE</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5 (Decimal Hub)</LevelButton>
          </ButtonGroup>
        ),
      };
    }

    case 'simpleFraction': {
      const { p, q, whole } = archetype;
      // Get family-specific flavor text
      const flavorEntry = FRACTION_FAMILY_FLAVOR[q];
      let flavor = '';
      if (typeof flavorEntry === 'function') {
        flavor = ' ' + flavorEntry(p);
      } else if (typeof flavorEntry === 'string') {
        flavor = ' ' + flavorEntry;
      } else {
        flavor = ` ${p} parts out of ${q}. Not one of the famous families, but a legitimate fraction all the same.`;
      }

      const repTag = archetype.repeating ? ' ♾️ The digits repeat forever.' : '';
      const wholeInfo = whole > 0
        ? `${whole} and ${p}/${q}. The integer part is Level ${isNeg ? -whole : whole}, but the fraction keeps you stranded between the whole numbers.`
        : `${p}/${q}.`;

      return {
        text: `🍰 ${wholeInfo}${flavor}${repTag}`,
        nav: (
          <>
            <ButtonGroup key="frac-nav">
              <LevelButton targetLevel={isNeg ? -floor : floor}>← Level {isNeg ? -floor : floor}</LevelButton>
              <LevelButton targetLevel={isNeg ? -ceil : ceil}>Level {isNeg ? -ceil : ceil} →</LevelButton>
            </ButtonGroup>
            <ButtonGroup key="frac-hub">
              {q <= 8 && <LevelButton targetLevel={isNeg ? -q : q}>Level {isNeg ? -q : q} (denominator)</LevelButton>}
              <LevelButton targetLevel={0.5}>Level 0.5 (Decimal Hub)</LevelButton>
            </ButtonGroup>
          </>
        ),
      };
    }

    case 'ordinaryDecimal':
    default: {
      const nearestHandcrafted = [...HANDCRAFTED_DECIMAL_LIST].sort(
        (a, b) => Math.abs(a - absLevel) - Math.abs(b - absLevel)
      )[0];
      return {
        text: `📍 Between ${isNeg ? -ceil : floor} and ${isNeg ? -floor : ceil}. Not a famous fraction, not a known constant — just a point on the number line. There are infinitely many decimals between any two integers, and this is one of them.`,
        nav: (
          <>
            <ButtonGroup key="ord-nav">
              <LevelButton targetLevel={isNeg ? -floor : floor}>← Level {isNeg ? -floor : floor}</LevelButton>
              <LevelButton targetLevel={isNeg ? -ceil : ceil}>Level {isNeg ? -ceil : ceil} →</LevelButton>
            </ButtonGroup>
            <ButtonGroup key="ord-landmark">
              <LevelButton targetLevel={nearestHandcrafted}>Level {nearestHandcrafted}</LevelButton>
              <LevelButton targetLevel={0.5}>Level 0.5 (Decimal Hub)</LevelButton>
            </ButtonGroup>
          </>
        ),
      };
    }
  }
};

// ─── Component ──────────────────────────────────────────────────────────────

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

  // Collapse timer for unstable complex levels
  const collapseRate = isComplexLevel ? getCollapseRate(levelNumber) : 1;
  useEffect(() => {
    if (!unstable) return;
    const timer = setInterval(() => {
      setStability(prev => {
        const next = prev - collapseRate;
        if (next <= 20) setIsWarning(true);
        if (next <= 0) {
          clearInterval(timer);
          handleLevelCollapse(dispatch, levelNumber, setIsFading);
          unlockAchievement('COLLAPSE');
          // Track collapse count for COMPLEX_SURVIVOR achievement
          const collapseCount = parseInt(localStorage.getItem('complexCollapseCount') || '0') + 1;
          localStorage.setItem('complexCollapseCount', collapseCount.toString());
          if (collapseCount >= 10) {
            unlockAchievement('COMPLEX_SURVIVOR');
          }
        }
        return Math.max(0, next);
      });
    }, 100);
    return () => clearInterval(timer);
  }, [dispatch, unstable, levelNumber]);

  useEffect(() => {
    setStability(100);
    setIsWarning(false);
    setIsFading(false);
  }, [levelNumber]);

  // Unlock achievements for curiosity reward levels
  useEffect(() => {
    const parsedLevel = parseInt(levelKey);
    const absLvl = Math.abs(parsedLevel);
    if (SPECIAL_LEVELS[absLvl]?.achievement) {
      unlockAchievement(SPECIAL_LEVELS[absLvl].achievement);
    }
  }, [levelKey, unlockAchievement]);

  // ─── Infinity Levels ────────────────────────────────────────────────────
  const formattedLevel = formatComplexNumber(levelKey);
  const isInfinityLevel = formattedLevel.includes('∞');

  if (isInfinityLevel) {
    const hasI = formattedLevel.includes('i');
    const isNegativeInf = formattedLevel.startsWith('-');
    return (
      <>
        <PageBackground
          complexAngle={hasI ? 90 : 0}
          isNegative={isNegative}
          complexCombination={formattedLevel.includes('∞') && hasI}
        />
        <ContentWrapper>
          <InfinitySymbol rotated={hasI} isNegative={isNegative}>
            {formattedLevel}
          </InfinitySymbol>
          <StyledText isNegative={isNegative}>
            You've reached a level beyond comprehension.
            {hasI ? ' Reality bends perpendicular to itself.' : ''}
            {isNegativeInf ? ' Everything inverts into its opposite.' : ''}
          </StyledText>
          <div className="d-flex justify-content-center">
            <LevelButton targetLevel={0} variant={isNegative ? "outline-dark" : "outline-light"}>
              Return to Reality
            </LevelButton>
          </div>
        </ContentWrapper>
      </>
    );
  }

  // ─── Build Sections ─────────────────────────────────────────────────────
  const level = parseFloat(levelKey);
  const isDecimal = !Number.isInteger(level) && isFinite(level);
  const absLevel = Math.abs(isDecimal ? level : parseInt(levelKey));
  const isNeg = isNegative || level < 0;
  const sections = [];
  let archetypeRendered = null;
  const fmtC = (r, i) => `${r}${i >= 0 ? '+' : ''}${i}i`;

  if (isStableIsland) {
    // ─── Complex Stable Island ────────────────────────────────────────────
    const a = levelNumber.real;
    const b = levelNumber.imag;
    const q = getQuadrant(levelNumber);
    const qPrefix = QUADRANT_PREFIXES[q] || '';
    const gaussianPrime = isGaussianPrime(a, b);
    const isDiagonal = Math.abs(a) === Math.abs(b);
    const isAxisAdj = a === 0 || b === 0;
    const magnitude = Math.sqrt(a * a + b * b).toFixed(1);

    // Build island text based on position characteristics
    let islandText = `🏖️ ${qPrefix}A stable island in the complex plane. The turbulence of imaginary space cannot reach you here.`;
    if (a === 0 && b === 0) {
      islandText = '🏖️ The origin of the complex plane. Real meets imaginary here. The x-axis stretches left and right. The y-axis stretches up and down. And every point is a level.';
    } else if (isDiagonal && q === 1) {
      islandText = `🏖️ ${a} and ${b}. The diagonal — equal parts real and imaginary. Balanced between dimensions. ${magnitude} steps from the origin.`;
    } else if (isAxisAdj && b !== 0 && a === 0) {
      islandText = `🏖️ ${qPrefix}A point on the imaginary axis. Pure imagination, no real component. ${Math.abs(b)} steps above ${b > 0 ? '' : 'below '}the real number line.`;
    } else if (isAxisAdj && a !== 0 && b === 0) {
      islandText = `🏖️ A point on the real axis extended into the complex plane. ${Math.abs(a)} steps along reality.`;
    } else if (q === 2) {
      islandText = `🏖️ ${qPrefix}A stable island in the Mirror Coast. The reflection of ${Math.abs(a)}+${Math.abs(b)}i. Same distance from the origin, but on the wrong side.`;
    } else if (q === 3) {
      islandText = `🏖️ ${qPrefix}A stable island in the Deep. Both coordinates negative. ${magnitude} steps from the origin, in the direction nobody looks.`;
    } else if (q === 4) {
      islandText = `🏖️ ${qPrefix}A stable island in the Undertow. The imaginary component pulls downward. The real axis is above you.`;
    } else {
      // Q1 off-diagonal with no special case
      islandText = `🏖️ A stable island at (${a}, ${b}). ${magnitude} steps from the origin.`;
    }

    sections.push(
      <Card.Text key="stable">
        <HighlightableText text={islandText} />
      </Card.Text>
    );

    if (gaussianPrime) {
      sections.push(
        <Card.Text key="gaussian" style={{ fontStyle: 'italic', color: '#b4a0ff' }}>
          <HighlightableText text={`🔮 A Gaussian prime — indivisible in two dimensions. The norm ${a * a + b * b} is prime.`} />
        </Card.Text>
      );
    }

    // Signal flash for deep complex levels
    if (Math.abs(a) > 10 && Math.abs(b) > 10) {
      sections.push(
        <Card.Text key="signal" style={{ fontStyle: 'italic', opacity: 0.7 }}>
          <HighlightableText text="📡 Deep in the complex plane, a faint signal repeats: nine-nine-nine... nine-nine-nine..." />
        </Card.Text>
      );
    }

    // Diagonal breadcrumb toward 999+999i
    if (a === b && a > 5) {
      sections.push(
        <Card.Text key="diagonal-hint" style={{ fontStyle: 'italic', opacity: 0.6 }}>
          <HighlightableText text={`The diagonal continues. ${999 - a} more steps to the Singularity.`} />
        </Card.Text>
      );
    }

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
  } else if (isDecimal) {
    // ─── Decimal Archetype System ─────────────────────────────────────────
    const decArchetype = classifyDecimalArchetype(Math.abs(level));
    const decRendered = renderDecimalArchetype(decArchetype, level, Math.abs(level), isNeg);

    if (isNeg) {
      sections.push(
        <Card.Text key="decimal-shadow">
          <HighlightableText text={`The negative side of ${Math.abs(level)}. Between integers and below zero.`} />
        </Card.Text>
      );
    }

    sections.push(
      <Card.Text key="decimal-text" style={decRendered.style || {}}>
        <HighlightableText text={decRendered.text} />
      </Card.Text>
    );
    sections.push(decRendered.nav);
  } else if (!unstable) {
    // ─── Archetype System (one identity per level) ────────────────────────
    const archetype = classifyArchetype(level, absLevel);
    archetypeRendered = renderArchetype(archetype, level, absLevel, isNeg);
    const rendered = archetypeRendered;

    // Negative shadow prefix (except curiosity levels which have their own voice)
    if (isNeg && archetype.type !== 'curiosity') {
      sections.push(
        <Card.Text key="shadow">
          <HighlightableText text={`The negative side of Level ${absLevel}.`} />
        </Card.Text>
      );
    }

    // Negative perfect square → imaginary root hint
    if (isNeg && isSquare(absLevel) && absLevel > 1) {
      const root = Math.round(Math.sqrt(absLevel));
      sections.push(
        <Card.Text key="neg-square">
          <HighlightableText text={`The shadow root of ${level} is ${root}i — an imaginary number.`} />
        </Card.Text>
      );
    }

    // Archetype visual (atmospheric effects — rendered before text)
    if (rendered.visual) {
      sections.push(
        <div key="archetype-visual" style={{ margin: '0.5rem 0' }}>
          {rendered.visual}
        </div>
      );
    }

    // Archetype text (the ONE voice for this level)
    if (rendered.text) {
      sections.push(
        <Card.Text key="archetype-text" style={rendered.style || {}}>
          {typeof rendered.text === 'string' ? <HighlightableText text={rendered.text} /> : rendered.text}
        </Card.Text>
      );
    }

    // Archetype navigation (comes FROM the identity, not generic)
    sections.push(rendered.nav);
  }

  // ─── Title ──────────────────────────────────────────────────────────────
  const titleSuffix = archetypeRendered?.title ? ` — ${archetypeRendered.title}` : '';

  return (
    <LevelContainer isNegative={isNeg || isNegative}>
      <StyledCard fading={isFading}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${(isNegative ? '-' : '') + formattedLevel}${titleSuffix}`} size="lg" />
          </Card.Title>
          {unstable && (
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
              {typeof levelNumber === 'object' && levelNumber.imag !== undefined && (
                <CompassReading levelNumber={levelNumber} />
              )}
            </>
          )}
          {sections}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default NotImplementedLevel;