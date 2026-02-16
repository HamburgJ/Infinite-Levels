import { levelDictionary, replacementDictionary, extractNumberFromText } from './numberText';
import { parseComplexNumber } from './complexParser';

// Dictionary for word-to-operator conversion
export const operatorDictionary = {
  'plus': '+',
  'add': '+',
  'added to': '+',
  'sum': '+',
  'minus': '-',
  'subtract': '-',
  'less': '-',
  'times': '*',
  'multiply': '*',
  'multiplied by': '*',
  'divided by': '/',
  'divide': '/',
  'over': '/',
  'to the power of': '^',
  'to th e power of': '^',
  'power': '^',
  'squared': '^2',
  'cubed': '^3',
  'point': '.',
  'equals': '=',
  'is': '=',
  'gives': '=',
  'makes': '='
};

let nerdamer = null;

const loadNerdamer = () => {
  if (!nerdamer) {
    // Use require instead of dynamic import for synchronous loading
    nerdamer = require('nerdamer');
    require('nerdamer/all');
  }
  return nerdamer;
};

// The most important function - evaluateExpression
export const evaluateExpression = (text) => {
  const nerdamer = loadNerdamer();
  return nerdamer(text).evaluate().text('decimals');
};


// Regular expressions for parsing
export const equationPattern = /^.*=.*level.*$|^.*level.*=.*$/i;
export const wordOperatorPattern = new RegExp(`\\b(${Object.keys(operatorDictionary).join('|')})\\b`, 'gi');

// Convert text to mathematical expression
const normalizeExpression = (text) => {
  let normalized = text.toLowerCase();
  
  // First, protect multi-word operators by replacing them with unique tokens
  const multiWordOperators = Object.entries(operatorDictionary)
    .filter(([phrase]) => phrase.includes(' '))
    .sort((a, b) => b[0].length - a[0].length); // Sort by length descending
    
  multiWordOperators.forEach(([phrase, symbol], index) => {
    const token = `__OP${index}__`;
    const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPhrase, 'gi');
    normalized = normalized.replace(regex, token);
  });
  
  // Then protect mathematical constants
  const constants = ['e', 'pi'];
  constants.forEach(constant => {
    const regex = new RegExp(`\\b${constant}\\b`, 'gi');
    normalized = normalized.replace(regex, `__${constant}__`);
  });
  
  // Split and process remaining single words
  let words = normalized.split(/\s+/);
  words = words.map(word => {
    // Restore multi-word operators
    if (word.startsWith('__OP')) {
      const index = parseInt(word.match(/\d+/)[0]);
      return multiWordOperators[index][1];
    }
    
    // Restore protected constants
    if (word.startsWith('__') && word.endsWith('__')) {
      const constant = word.slice(2, -2);
      if (replacementDictionary.hasOwnProperty(constant)) {
        return replacementDictionary[constant].toString();
      }
    }
    
    // Check single-word operator dictionary
    if (operatorDictionary.hasOwnProperty(word)) {
      return operatorDictionary[word];
    }
    
    // Check replacement dictionary
    if (replacementDictionary.hasOwnProperty(word)) {
      return replacementDictionary[word].toString();
    }
    
    return word;
  });
  
  // Post-process: join decimal point sequences
  // Converts patterns like ["3", ".", "1", "4"] into ["3.14"]
  const joined = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '.' && i > 0 && i < words.length - 1) {
      // Check if the previous token is a number and next token(s) are numbers
      const prev = joined[joined.length - 1];
      if (/^\d+(\.\d+)?$/.test(prev)) {
        // Collect all digit tokens after the decimal point
        let decimals = '';
        let j = i + 1;
        while (j < words.length && /^\d+$/.test(words[j])) {
          decimals += words[j];
          j++;
        }
        if (decimals) {
          // Replace the previous number with the decimal version
          joined[joined.length - 1] = prev + '.' + decimals;
          i = j - 1; // Skip consumed tokens
          continue;
        }
      }
    }
    joined.push(words[i]);
  }
  
  return joined.join(' ');
};

export const solveEquation = (text) => {
  try {
    const normalized = normalizeExpression(text);
    const nerdamer = loadNerdamer();
    
    if (normalized.includes('level')) {
      let equation = normalized.replace(/level/g, 'x');
      equation = equation.replace(/\be\b/g, Math.E.toString());
      
      try {
        const solutions = nerdamer(`solve(${equation}, x)`);
        const solutionStr = solutions.toString().replace(/[\[\]]/g, '').split(',')[0];
        // if there is division, perform it on the numbers before and after it using regex
        // Handle division in solution string
        const divisionMatch = solutionStr.match(/^([-\d.]+)\s*\/\s*([-\d.]+)$/);
        if (divisionMatch) {
          const divisionResult = parseFloat(divisionMatch[1]) / parseFloat(divisionMatch[2]);
          if (!isNaN(divisionResult)) {
            return divisionResult;
          }
        }
        // Use our unified complex parser for all cases
        return parseComplexNumber(solutionStr);
        
      } catch (e) {
        return null;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

// Validate if expression can be solved
export const isValidMathExpression = (text) => {
  try {
    const normalized = normalizeExpression(text);
    const nerdamer = loadNerdamer();
    nerdamer(normalized);
    return true;
  } catch {
    return false;
  }
};

// Get all possible solutions including complex
export const getAllSolutions = (text) => {
  const normalized = normalizeExpression(text);
  try {
    const nerdamer = loadNerdamer();
    const solutions = nerdamer.solve(normalized, 'x');
    return solutions.evaluate().text('decimals')
      .replace(/[\[\]]/g, '').split(',')
      .map(sol => {
        const value = parseFloat(sol);
        return { real: value, imag: 0 };
      })
      .filter(sol => !isNaN(sol.real) && isFinite(sol.real));
  } catch {
    return [];
  }
};
