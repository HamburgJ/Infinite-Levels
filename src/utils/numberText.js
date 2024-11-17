import { 
  equationPattern, 
  wordOperatorPattern, 
  operatorDictionary,
  solveEquation as solveForLevel 
} from './mathSolver';
import * as math from 'mathjs';
import { parseComplexNumber } from './complexParser';
import achievements from '../data/achievements';

// levels which can be parsed directly into a level but cannot be used in equations
export const levelDictionary = {
    'i': { real: 0, imag: 1 },
    'infinity': 'Infinity',
    '-infinity': '-Infinity',
    'infinityi': 'Infinityi',
    '-infinityi': '-Infinityi',
    'infinity-infinityi': 'Infinity-Infinityi',
    '-infinity-infinityi': '-Infinity-Infinityi',
    'infinity+infinityi': 'Infinity+Infinityi',
    '-infinity+infinityi': '-Infinity+Infinityi',
    'infinity -infinityi': 'Infinity-Infinityi',
    '-infinity -infinityi': '-Infinity-Infinityi',
    'infinity +infinityi': 'Infinity+Infinityi',
    '-infinity +infinityi': '-Infinity+Infinityi',
    'infinity- infinityi': 'Infinity-Infinityi',
    '-infinity- infinityi': '-Infinity-Infinityi',
    'infinity+ infinityi': 'Infinity+Infinityi',
    '-infinity+ infinityi': '-Infinity+Infinityi',
    'infinity - infinityi': 'Infinity-Infinityi',
    '-infinity - infinityi': '-Infinity-Infinityi',
    'infinity + infinityi': 'Infinity+Infinityi',
    '-infinity + infinityi': '-Infinity+Infinityi',
    'infinite': 'Infinity',
    'largest number': 'Infinity',
    'smallest number': '-Infinity',
    'aleph null': 'Infinity',
    'aleph one': 'Infinity',
    'aleph two': 'Infinity',
    'aleph three': 'Infinity',
    'aleph four': 'Infinity',
    'aleph five': 'Infinity',
    'aleph six': 'Infinity',
    'aleph seven': 'Infinity',
    'cardinality of the set of natural numbers': 'Infinity',
    'cardinality of the set of real numbers': 'Infinity',
    'imaginary unit': 'i',
    'imaginary number': 'i',
    'imaginary': 'i',
    'infinity+i': 'Infinity+1i',
    'infinity-i': 'Infinity-1i',
    'i+infinity': '1+Infinityi',
    '-i+infinity': '-1+Infinityi',
  };
// replacement dictionary are symbols which can be turned into numerical or other symbols inside a larger equation
  export const replacementDictionary = {
    "number-word":{
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
      'eleven': 11,
      'twelve': 12,
      'thirteen': 13,
      'fourteen': 14,
      'fifteen': 15,
      'sixteen': 16,
      'seventeen': 17,
      'eighteen': 18,
      'nineteen': 19,
      'twenty': 20, 
      'twenty one': 21,
      'twenty two': 22,
      'twenty three': 23,
      'twenty four': 24,
      'twenty five': 25,
      'twenty six': 26,
      'twenty seven': 27,
      'twenty eight': 28,
      'twenty nine': 29,
      'thirty': 30,
      'thirty one': 31,
      'thirty two': 32,
      'thirty three': 33,
      'thirty four': 34,
      'thirty five': 35,
      'thirty six': 36,
      'thirty seven': 37,
      'thirty eight': 38,
      'thirty nine': 39,
      'forty': 40,
      'forty one': 41,
      'forty two': 42,
      'forty three': 43,
      'forty four': 44,
      'forty five': 45,
      'forty six': 46,
      'forty seven': 47,
      'forty eight': 48,
      'forty nine': 49,
      'fifty': 50,
      'fifty one': 51,
      'fifty two': 52,
      'fifty three': 53,
      'fifty four': 54,
      'fifty five': 55,
      'fifty six': 56,
      'fifty seven': 57,
      'fifty eight': 58,
      'fifty nine': 59,
      'sixty': 60,
      'sixty one': 61,
      'sixty two': 62,
      'sixty three': 63,
      'sixty four': 64,
      'sixty five': 65,
      'sixty six': 66,
      'sixty seven': 67,
      'sixty eight': 68,
      'sixty nine': 69,
      'seventy': 70,
      'seventy one': 71,
      'seventy two': 72,
      'seventy three': 73,
      'seventy four': 74,
      'seventy five': 75,
      'seventy six': 76,
      'seventy seven': 77,
      'seventy eight': 78,
      'seventy nine': 79,
      'eighty': 80,
      'eighty one': 81,
      'eighty two': 82,
      'eighty three': 83,
      'eighty four': 84,
      'eighty five': 85,
      'eighty six': 86,
      'eighty seven': 87,
      'eighty eight': 88,
      'eighty nine': 89,
      'ninety': 90,
      'ninety one': 91,
      'ninety two': 92,
      'ninety three': 93,
      'ninety four': 94,
      'ninety five': 95,
      'ninety six': 96,
      'ninety seven': 97,
      'ninety eight': 98,
      'ninety nine': 99,
      'hundred': 100,
      'thousand': 1000,
      'million': 1e6,
      'billion': 1e9,
      'trillion': 1e12,
      'quadrillion': 1e15,
      'quintillion': 1e18,
      'sextillion': 1e21,
      'septillion': 1e24,
      'octillion': 1e27,
      'nonillion': 1e30,
      'decillion': 1e33,
      'undecillion': 1e36,
      'duodecillion': 1e39,
      'tredecillion': 1e42,
      'quattuordecillion': 1e45,
      'quindecillion': 1e48,
      'sexdecillion': 1e51,
      'septendecillion': 1e54,
      'octodecillion': 1e57,
      'novemdecillion': 1e60,
      'vigintillion': 1e63,
      'googol': 1e100,
      'centillion': 1e303,
      'millillion': 'Infinity',
      'millinillion': 'Infinity',
    },
    "irrational":{
      // constants
      'pi': Math.PI,
      'e': Math.E,
      'c': 299792458,
      'g': 6.67430e-11,
      'phi': Math.sqrt(5) + 1 / 2,
      'the golden ratio': Math.sqrt(5) + 1 / 2,
      'tau': 2 * Math.PI,
      'eulers number': Math.E,

    },

    // words which represent numbers
    "interpretive-meaning":{
    'o': 0,
    'zilch': 0,
    'nada': 0,
    'nil': 0,
    'nothingness': 0,
    'nothing': 0,
      'couple': 2,
      'double': 2,
      'pair': 2,
      'trio': 3,
      'triple': 3,
      'quartet': 4,
      'quadruple': 4,
      'quintuple': 5,
      'sextuple': 6,
      'septuple': 7,
      'octuple': 8,
      'nonuple': 9,
      'decuple': 10,
      'dozen': 12,
      'score': 20,
      'first': 1,
      'second': 2,
      'third': 3,
      'fourth': 4,
      'fifth': 5,
      'sixth': 6,
      'seventh': 7,
      'eighth': 8,
      'ninth': 9,
      'tenth': 10,
      'eleventh': 11,
      'twelfth': 12,
      'thirteenth': 13,
      'fourteenth': 14,
      'fifteenth': 15,
      'sixteenth': 16,
      'seventeenth': 17,
      'eighteenth': 18,
      'nineteenth': 19,
      'twentieth': 20,
      'twenty-first': 21,
      'twenty-second': 22,
      'twenty-third': 23,
      'twenty-fourth': 24,
      'twenty-fifth': 25,
      'twenty-sixth': 26,
      'twenty-seventh': 27,
      'twenty-eighth': 28,
      'twenty-ninth': 29,
      'thirtieth': 30,
      'thirty-first': 31,
      'thirty-second': 32,
      'thirty-third': 33,
      'thirty-fourth': 34,
      'thirty-fifth': 35,
      'thirty-sixth': 36,
      'thirty-seventh': 37,
    },

    // even more abstract number, which are described implicitly
    "abstract-description":{
      'atoms in the universe': 1e80,
      'number of grains of sand on earth': 1e18,
      'radius of earth': 6.371e6,
      'speed of light': 299792458,
      'gravitational constant': 6.67430e-11,
      'mass of the moon': 7.34767309e22,
      'mass of the sun': 1.989e30,
      'distance to the moon': 3.844e8,
      'distance to the sun': 1.496e11,
      'speed of sound': 343,
      'speed of sound in water': 1482,
      'speed of sound in steel': 5960,
      'speed of sound in air': 343,
      'speed of sound in vacuum': 0,
      'speed of light in vacuum': 299792458,
      'even prime': 2, 
      'smallest prime': 2,
      'cardinality of the empty set': 0
    }
 
  };
  
  export const soundDictionary = {
    'wonton': { word: 'won', value: 1 },
    'fortnight': { word: 'four', value: 4 },
    'wonderful': { word: 'won', value: 1 },
    'toupee': { word: 'tou', value: 2 },
    'forest': { word: 'four', value: 4 },
    'taiwan': { word: 'wan', value: 1 },
    'swan': { word: 'wan', value: 1 },
    'won': { word: 'won', value: 1 },
    'too': { word: 'too', value: 2 },
    'to': { word: 'to', value: 2 },
    'tooth': { word: 'too', value: 2 },
    'tune': { word: 'tu', value: 2 },
    'tuba': { word: 'tu', value: 2 },
    'tuna': { word: 'tu', value: 2 },
    'tube': { word: 'tu', value: 2 },
    'free': { word: 'free', value: 3 },
    'freedom': { word: 'free', value: 3 },
    'freak': { word: 'frea', value: 3 },
    'for': { word: 'for', value: 4 },
    'forehead': { word: 'for', value: 4 },
    'before': { word: 'fore', value: 4 },
    'forge': { word: 'for', value: 4 },
    'forage': { word: 'for', value: 4 },
    'forethought': { word: 'fore', value: 4 },
    'fortune': { word: 'for', value: 4 },
    'fortitude': { word: 'for', value: 4 },
    'formal': { word: 'for', value: 4 },
    'formality': { word: 'for', value: 4 },
    'form': { word: 'for', value: 4 },
    'forth': { word: 'for', value: 4 },
    'forthright': { word: 'for', value: 4 },
    'fortress': { word: 'for', value: 4 },
    'forerunner': { word: 'fore', value: 4 },
    'forefather': { word: 'fore', value: 4 },
    'forebears': { word: 'fore', value: 4 },
    'forebear': { word: 'fore', value: 4 },
    'foreboding': { word: 'fore', value: 4 },
    'forebode': { word: 'fore', value: 4 },
    'foregone': { word: 'fore', value: 4 },
    'forego': { word: 'fore', value: 4 },
    'forgoes': { word: 'for', value: 4 },
    'foretold': { word: 'fore', value: 4 },
    'forget': { word: 'for', value: 4 },
    'foretell': { word: 'fore', value: 4 },
    'euphoria': { word: 'for', value: 4 },
    'euphoric': { word: 'for', value: 4 },
    'euphorically': { word: 'for', value: 4 },
    'euphoriant': { word: 'for', value: 4 },
    'metaphor': { word: 'for', value: 4 },
    'metaphorically': { word: 'for', value: 4 },
    'metaphorise': { word: 'for', value: 4 },
    'metaphorize': { word: 'for', value: 4 },
    'metaphorized': { word: 'for', value: 4 },
    'metaphorizing': { word: 'for', value: 4 },
    'metaphorizes': { word: 'for', value: 4 },
    'wait': { word: 'ait', value: 8 },
    'waitress': { word: 'ait', value: 8 },
    'waiter': { word: 'ait', value: 8 },
    'waiters': { word: 'ait', value: 8 },
    'waiting': { word: 'ait', value: 8 },
    'blatent': { word: 'ate', value: 8 },
    'ate': { word: 'ate', value: 8 },
    'concentrate': { word: 'ate', value: 8 },
    'rebate': { word: 'ate', value: 8 },
    'probate': { word: 'ate', value: 8 },
    'meditate': { word: 'ate', value: 8 },
    'formulate': { word: 'ate', value: 8 },
    'nein': { word: 'nein', value: 9 },
    'mountain': { word: 'tain', value: 10 },
    'certain': { word: 'tain', value: 10 },
    'boston': { word: 'ton', value: 10 },
    'skeleton': { word: 'ton', value: 10 }
  };
  
  // Roman numeral regex pattern
  const romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
  
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  
  const parseRomanNumeral = (text) => {
    let result = 0;
    let prev = 0;
    
    for (let i = text.length - 1; i >= 0; i--) {
      const current = romanValues[text[i].toUpperCase()];
      if (current >= prev) {
        result += current;
      } else {
        result -= current;
      }
      prev = current;
    }
    
    return result;
  };
  
  
  // Add mathematical expression pattern
  const expressionPattern = /^[-+*/\d\s().]+$/;
  
  // Helper function to safely evaluate mathematical expressions
  const evaluateExpression = (expr) => {
    // Replace ^ with ** for JavaScript exponentiation
    const sanitizedExpr = expr.replace(/\^/g, '**');
    
    try {
      // Allow decimal points in the regex pattern
      if (!/^[-+*/().\d\s**]+$/.test(sanitizedExpr)) {
        return null;
      }
      return Function(`"use strict"; return (${sanitizedExpr})`)();
    } catch (e) {
      return null;
    }
  };
  
  // Add this helper function at the top with the other constants
  const preprocessText = (text) => {
    // First ensure spaces around mathematical symbols
    let processed = text
      .replace(/([+\-*/^=])/g, ' $1 ')
      .trim();
    
    // Split into words and process each
    const words = processed.split(/\s+/);
    const expandedWords = words.map(word => splitCompoundWords(word));
    
    // Flatten the array and join with spaces
    return expandedWords.flat().join(' ');
  };
  
  /**
   * Extracts a numeric value from text, handling both numeric strings and word representations
   * @param {string} text - The text to parse
   * @returns {number|object|null} The parsed number, complex number object, or null if invalid
   */
  export const extractNumberFromText = (text) => {
    // Early return if text is empty or only whitespace
    if (!text || !text.trim()) {
      return null;
    }

    let normalizedText = text.trim().toLowerCase();
    
    if (process.env.NODE_ENV === 'test') {
      console.log('\n=== NUMBER TEXT DEBUG ===');
      console.log('Input:', text);
    }
    
    if (replacementDictionary.hasOwnProperty(normalizedText)) {
      return {
        value: replacementDictionary[normalizedText],
        achievement: achievements.MAKING_MY_OWN_PATH
      };
    }
    
    // Try parsing as a regular number first
    const numericResult = evaluateExpression(normalizedText);
    if (numericResult !== null && isFinite(numericResult)) {
      return {
        value: numericResult,
        achievement: achievements.MAKING_MY_OWN_PATH
      };
    }

    
    // Then try parsing as complex number
    const complexResult = parseComplexNumber(normalizedText);
    console.log('complexResult:', complexResult);
    if (complexResult !== null) {
      // Only return complex result if it actually has an imaginary part
      if (typeof complexResult === 'object' && complexResult.imag !== 0) {
        return {
          value: complexResult,
          achievement: achievements.COMPLEX_NOTATION
        };
      }
      // If no imaginary part, no complex achievement
      return {
        value: complexResult,
        achievement: achievements.MAKING_MY_OWN_PATH
      };
    }
    
    // Check if entire string is a Roman numeral
    if (romanPattern.test(normalizedText.toUpperCase())) {
      return {
        value: parseRomanNumeral(normalizedText),
        achievement: achievements.ROMAN_NUMERAL
      };
    }
    
    // Parse for "LEVEL ___", which counts the thing following level as a number IF theres no equals in the text. 
    // First check if it matches LEVEL ____, then check if it has any = or things that parse to = from the operator dictionary
    // if it passes, call extractNumberFromText on the match, however to prevent infinite loops, remove the match from the text
    // since it's recursive, we will also check that level is only in the text ONCE if it matches

    const levelMatch = normalizedText.match(/level[^=]+/i);
    const noMoreThanOneLevel = normalizedText.split('level').length === 2;
    const containsEquals = normalizedText.includes('=') || 
      Object.entries(operatorDictionary).some(([word, op]) => 
        op === '=' && normalizedText.includes(word)
      );
    console.log('normalizedText:', normalizedText);
    console.log('levelMatch:', levelMatch);
    console.log('noMoreThanOneLevel:', noMoreThanOneLevel);
    console.log('containsEquals:', containsEquals);
    if (levelMatch && noMoreThanOneLevel && !containsEquals) {
      const withoutPrefix = normalizedText.replace("level", "");
      return {
        value: extractNumberFromText(withoutPrefix).value,
        achievement: achievements.MAKING_MY_OWN_PATH
      };
    }

    // Replace any Roman numerals in the text with their numeric values
    normalizedText = normalizedText.replace(/\b(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\b/gi, match => {
      return {
        value: parseRomanNumeral(match),
        achievement: achievements.ROMAN_NUMERAL
      };
    });

    
    
    // Step 1: Preprocess text to handle negative numbers with words
    let processedText = preprocessText(text);
    if (process.env.NODE_ENV === 'test') {
      console.log('After preprocessing:', processedText);
    }
    
    // Step 2: Normalize case and whitespace
    normalizedText = processedText.trim().toLowerCase();
    if (process.env.NODE_ENV === 'test') {
      console.log('After normalization:', normalizedText);
    }
    
    // Step 3: Handle negative word numbers
    const words = normalizedText.split(/\s+/).map(word => {
      if (process.env.NODE_ENV === 'test') {
        console.log('Processing word:', word);
      }
      
      if (word.startsWith('-')) {
        const baseWord = word.substring(1);
        // Check both dictionaries for negative words
        if (levelDictionary.hasOwnProperty(baseWord)) {
          const value = levelDictionary[baseWord];
          const hasComplexNotation = baseWord.includes('i') && 
            /[0-9+\-*/()]+i/.test(baseWord) &&
            !['i', 'infinity', 'infinite', 'imaginary'].includes(baseWord);

          if (typeof value === 'number') {
            return {
              value: (-value).toString(),
              achievement: achievements.MAKING_MY_OWN_PATH
            };
          } else if (typeof value === 'object' && 'real' in value) {
            return {
              value: { real: -value.real, imag: -value.imag },
              achievement: hasComplexNotation ? achievements.COMPLEX_NOTATION : achievements.MAKING_MY_OWN_PATH
            };
          }
        }
        if (replacementDictionary.hasOwnProperty(baseWord)) {
          return {
            value: (-replacementDictionary[baseWord]).toString(),
            achievement: achievements.MAKING_MY_OWN_PATH
          };
        }
      }
      return word;
    });
    
    normalizedText = words.join(' ');
    if (process.env.NODE_ENV === 'test') {
      console.log('After word processing:', normalizedText);
    }
    
    // Check for equations containing "level"
    if (normalizedText.includes('level') && normalizedText.includes('=')) {
      if (process.env.NODE_ENV === 'test') {
        console.log('Found level equation pattern');
      }
      const result = solveForLevel(normalizedText);
      if (process.env.NODE_ENV === 'test') {
        console.log('Level equation solution:', result);
      }
      if (result !== null) {
        return {
          value: result,
          achievement: achievements.MAKING_MY_OWN_PATH
        };
      }
    }
    
    // Check for word-based mathematical expressions
    if (normalizedText.match(wordOperatorPattern)) {
      if (process.env.NODE_ENV === 'test') {
        console.log('Found word operator pattern');
      }
      const expression = normalizedText
        .replace(wordOperatorPattern, match => {
          const operator = operatorDictionary[match.toLowerCase()];
          if (process.env.NODE_ENV === 'test') {
            console.log('Converting operator:', match, 'to:', operator);
          }
          return operator;
        })
        .replace(/\b[a-z]+\b/gi, match => {
          const value = replacementDictionary[match.toLowerCase()];
          if (process.env.NODE_ENV === 'test') {
            console.log('Converting word:', match, 'to:', value || match);
          }
          return typeof value === 'number' ? value : match;
        });
       
        // Check for equations containing "level"
        if (expression.includes('level') && expression.includes('=')) {
            if (process.env.NODE_ENV === 'test') {
              console.log('Found level equation pattern');
            }
            const result = solveForLevel(expression);
            if (process.env.NODE_ENV === 'test') {
              console.log('Level equation solution:', result);
            }
            if (result !== null) {
              return {
                value: result,
                achievement: achievements.MAKING_MY_OWN_PATH
              };
            }
          }
      if (process.env.NODE_ENV === 'test') {
        console.log('Final expression:', expression);
      }
      
      try {
        if (/^[-+*/\d\s()]+$/.test(expression)) {
          const result = Function(`"use strict"; return (${expression})`)();
          if (process.env.NODE_ENV === 'test') {
            console.log('Expression evaluation result:', result);
          }
          return {
            value: result,
            achievement: achievements.MAKING_MY_OWN_PATH
          };
        }
      } catch (e) {
        if (process.env.NODE_ENV === 'test') {
          console.warn('Expression evaluation failed:', e.message);
        }
        return null;
      }
    }
    
    // Check dictionary first (highest priority)
    if (levelDictionary.hasOwnProperty(normalizedText.replace(/\s+/g, ''))) {
      const value = levelDictionary[normalizedText.replace(/\s+/g, '')];
      // Only award COMPLEX_NOTATION if the value has an imaginary component
      const achievement = (typeof value === 'object' && 'imag' in value && value.imag !== 0)
        ? achievements.COMPLEX_NOTATION 
        : achievements.MAKING_MY_OWN_PATH;
      return {
        value,
        achievement
      };
    }

    // Check for complex numbers
    const complexValue = parseComplexNumber(normalizedText);
    if (complexValue !== null) {
      // Only award COMPLEX_NOTATION if there's an actual imaginary component
      const hasImaginaryPart = typeof complexValue === 'object' && 
                              'imag' in complexValue && 
                              complexValue.imag !== 0;
      
      return {
        value: complexValue,
        achievement: hasImaginaryPart ? achievements.COMPLEX_NOTATION : achievements.MAKING_MY_OWN_PATH
      };
    }

    // Check for mathematical expressions
    if (expressionPattern.test(text)) {
      const result = solveForLevel(text);
      if (result !== null) {
        return {
          value: result,
          achievement: achievements.EQUATION_SOLVER
        };
      }
    }

    // Check for number sounds in words
    for (const [word, config] of Object.entries(soundDictionary)) {
      if (word.includes(normalizedText) && normalizedText === config.word) {
        return {
          value: config.value,
          achievement: achievements.SOUND_ALIKE
        };
      }
    }

    // Check for word numbers and other dictionary types
    for (const [dictType, dict] of Object.entries(replacementDictionary)) {
      if (dict.hasOwnProperty(normalizedText)) {
        const achievementMap = {
          'number-word': achievements.TEXT_NUMBER,
          'interpretive-meaning': achievements.TEXT_NUMBER,
          'abstract-description': achievements.NUMBER_DESCRIPTION
        };
        
        return {
          value: dict[normalizedText],
          achievement: achievementMap[dictType] || achievements.MAKING_MY_OWN_PATH
        };
      }
    }

    return null;
  };
  
  // Remove expressionPattern and add this new function
  const isValidMathExpression = (text) => {
    try {
      const normalized = text.toLowerCase().replace(/\s+/g, '');
      // Try to parse with mathjs - if it works, it's valid
      math.parse(normalized);
      const result = math.evaluate(normalized);
      return result !== undefined && result !== null;
    } catch {
      return false;
    }
  };
  
  /**
   * Checks if the given text represents a valid number (either numeric or word form)
   * @param {string} text - The text to validate
   * @returns {boolean} True if the text represents a valid number
   */
  export const isValidNumber = (text) => {
    // Early return if text is empty or only whitespace
    if (!text || !text.trim()) {
      return false;
    }

    const normalizedText = text.trim().toLowerCase();
    
    // Check equation pattern first
    if (equationPattern.test(normalizedText)) {
      //console.log('isValidNumber: equation pattern matched');
      return true; // If it matches the equation pattern, consider it valid
    }
    
    // Check for word-based mathematical expressions
    if (normalizedText.match(wordOperatorPattern)) {
      //console.log('isValidNumber: word operator pattern matched');
      const expression = normalizedText
        .replace(wordOperatorPattern, match => operatorDictionary[match.toLowerCase()])
        .replace(/\b[a-z]+\b/gi, match => {
          const value = levelDictionary[match.toLowerCase()];
          return typeof value === 'number' ? value : match;
        });
      //console.log('isValidNumber: processed expression:', expression);
      
      // If the expression contains 'level', it's valid
      if (expression.includes('level')) {
        return true;
      }
      
      // Otherwise check if it's a valid mathematical expression
      try {
        if (/^[-+*/\d\s()]+$/.test(expression)) {
          return true;
        }
      } catch (e) {
        console.warn('isValidNumber: expression evaluation failed:', e);
        return false;
      }
    }
    
    return (
      levelDictionary.hasOwnProperty(normalizedText.replace(/\s+/g, '')) ||
      isValidMathExpression(normalizedText) ||
      /^-?\d*\.?\d+$/.test(normalizedText) ||
      romanPattern.test(normalizedText) ||
      Object.entries(soundDictionary).some(([word, config]) => 
        word.includes(normalizedText) && normalizedText === config.word
      )
    );
  };
  
  // Add this line after the parseRomanNumeral function definition
  export { parseRomanNumeral };
  
  // Add this function after the preprocessText function
  const splitCompoundWords = (text) => {
    // Get all possible keywords that could be part of a compound word
    const allKeywords = [
      ...Object.keys(replacementDictionary),
      ...Object.keys(levelDictionary),
      ...Object.keys(operatorDictionary),
      'level'
    ];
    
    // Sort keywords by length (longest first) to handle overlapping matches
    const sortedKeywords = allKeywords.sort((a, b) => b.length - a.length);
    
    let words = text.split(/\s+/);
    let result = [];
    
    for (let word of words) {
      let foundMatch = false;
      
      // Try each keyword
      for (let keyword of sortedKeywords) {
        const index = word.toLowerCase().indexOf(keyword.toLowerCase());
        if (index !== -1) {
          // Split the word at the keyword
          const before = word.slice(0, index);
          const after = word.slice(index + keyword.length);
          
          // Only add non-empty parts
          if (before) result.push(before);
          result.push(keyword);
          if (after) {
            // Recursively process the remaining part
            const afterParts = splitCompoundWords(after);
            result.push(...afterParts);
          }
          foundMatch = true;
          break;
        }
      }
      
      // If no keyword was found in the word, add it as is
      if (!foundMatch) {
        result.push(word);
      }
    }
    
    return result;
  };