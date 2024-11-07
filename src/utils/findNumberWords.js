import { levelDictionary, soundDictionary, parseRomanNumeral } from './numberText';

/**
 * Finds all number words in a given text, including:
 * - Written numbers (one, two, etc.)
 * - Number-containing words (wonton -> won -> 1)
 * - Roman numerals
 * - Complex number expressions
 * - Regular numbers
 * 
 * @param {string} text - The input text to search
 * @returns {Array<{word: string, value: number|object, type: string}>} Array of found number words
 */
export const findNumberWords = (text) => {
  const results = [];
  const words = text.toLowerCase().split(/\s+/);
  
  // Regular number pattern
  const numberPattern = /^-?\d*\.?\d+$/;
  
  // Complex number pattern (referenced from numberText.js)
  const complexPattern = /^(-?\d*\.?\d*)([-+])(\d*\.?\d*)?i$/;
  
  // Roman numeral pattern (referenced from numberText.js)
  const romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

  for (const word of words) {
    // Check dictionary words
    if (levelDictionary.hasOwnProperty(word)) {
      results.push({
        word,
        value: levelDictionary[word],
        type: 'dictionary'
      });
      continue;
    }

    // Check number sounds in words
    for (const [fullWord, config] of Object.entries(soundDictionary)) {
      if (fullWord.includes(word) && word === config.word) {
        results.push({
          word,
          value: config.value,
          type: 'sound',
          context: fullWord
        });
        break;
      }
    }

    // Check for regular numbers
    if (numberPattern.test(word)) {
      results.push({
        word,
        value: parseFloat(word),
        type: 'numeric'
      });
      continue;
    }

    // Check for complex numbers
    if (complexPattern.test(word)) {
      const match = word.match(complexPattern);
      const real = parseFloat(match[1]) || 0;
      const sign = match[2];
      const imag = match[3] ? parseFloat(match[3]) : 1;
      
      results.push({
        word,
        value: {
          real,
          imag: sign === '+' ? imag : -imag
        },
        type: 'complex'
      });
      continue;
    }

    // Check for Roman numerals
    if (romanPattern.test(word)) {
      results.push({
        word,
        value: parseRomanNumeral(word),
        type: 'roman'
      });
    }
  }

  return results;
}; 