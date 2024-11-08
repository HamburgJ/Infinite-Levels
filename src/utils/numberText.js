import { 
  equationPattern, 
  wordOperatorPattern, 
  operatorDictionary,
  solveEquation as solveForLevel 
} from './mathSolver';
import * as math from 'mathjs';
import { parseComplexNumber } from './complexParser';

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
    'infinite': 'Infinity',
  };
// replacement dictionary are symbols which can be turned into numerical or other symbols inside a larger equation
  export const replacementDictionary = {
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
    'e': Math.E,
    'couple': 2,
    'double': 2,
    'pair': 2,
    'trio': 3,
    'triple': 3,
    'quartet': 4,
    'quadruple': 4,
    'dozen': 12,
    'score': 20,
    'pi': Math.PI,
    'nothing': 0,
  }
  
  // Dictionary for number-sounding words
  export const soundDictionary = {
    'wonton': { word: 'won', value: 1 },
    'fortnight': { word: 'four', value: 4 },
    'wonderful': { word: 'won', value: 1 },
    'toupee': { word: 'two', value: 2 },
    'forest': { word: 'four', value: 4 }
  };
  
  // Roman numeral regex pattern
  const romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
  
  // Complex number pattern
  const complexPattern = /^(-?\d*\.?\d*)([-+])(\d*\.?\d*)?i$/;
  
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
    if (process.env.NODE_ENV === 'test') {
      console.log('\n=== NUMBER TEXT DEBUG ===');
      console.log('Input:', text);
    }
    
    let normalizedText = text.trim().toLowerCase();
    
    if (replacementDictionary.hasOwnProperty(normalizedText)) {
      return replacementDictionary[normalizedText];
    }
    
    // Try parsing as a regular number first
    const numericResult = evaluateExpression(normalizedText);
    if (numericResult !== null && isFinite(numericResult)) {
      return numericResult;
    }

    
    // Then try parsing as complex number
    const complexResult = parseComplexNumber(normalizedText);
    if (complexResult !== null) {
      // Only return complex result if it actually has an imaginary part
      if (complexResult.imag !== 0) {
        return complexResult;
      }
      // If no imaginary part, return just the real part
      return complexResult.real;
    }
    
    // Check if entire string is a Roman numeral
    if (romanPattern.test(normalizedText.toUpperCase())) {
      return parseRomanNumeral(normalizedText);
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
      return extractNumberFromText(withoutPrefix);
    }

    // Replace any Roman numerals in the text with their numeric values
    normalizedText = normalizedText.replace(/\b(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\b/gi, match => {
      return parseRomanNumeral(match);
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
          if (typeof value === 'number') {
            return (-value).toString();
          } else if (typeof value === 'object' && 'real' in value) {
            return { real: -value.real, imag: -value.imag }.toString();
          }
        }
        if (replacementDictionary.hasOwnProperty(baseWord)) {
          return (-replacementDictionary[baseWord]).toString();
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
        return result;
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
              return result;
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
          return result;
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
      return levelDictionary[normalizedText.replace(/\s+/g, '')];
    }
    
    // Check for mathematical expressions
    if (expressionPattern.test(text)) {
      const result = evaluateExpression(text);
      if (result !== null && isFinite(result)) {
        return result;
      }
    }
    
    // Check for number sounds in words
    for (const [word, config] of Object.entries(soundDictionary)) {
      if (word.includes(normalizedText) && normalizedText === config.word) {
        return config.value;
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
    const normalizedText = text.trim().toLowerCase();
    //console.log('isValidNumber checking:', normalizedText);
    
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