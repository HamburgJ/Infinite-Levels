import { Complex } from './complex';
export const parseComplexNumber = (input) => {
  if (process.env.NODE_ENV === 'test') {
    console.log('\n=== COMPLEX PARSER DEBUG ===');
    console.log('Input:', input);
  }

  if (!input) return null;
  
  // If already a complex number object, return as is
  if (typeof input === 'object' && 'real' in input && 'imag' in input) {
    if (process.env.NODE_ENV === 'test') {
      console.log('Already complex object:', input);
    }
    return input;
  }

  // Convert to string and clean up whitespace
  const str = input.toString().trim();
  if (process.env.NODE_ENV === 'test') {
    console.log('Normalized string:', str);
  }
  
  // Only allow these characters in the input: digits, decimal point, i, +, -, *, whitespace
  if (!/^[\d\s.i+*-]+$/.test(str)) {
    if (process.env.NODE_ENV === 'test') {
      console.log('Invalid characters detected, returning null');
    }
    return null;
  }

  // Handle pure imaginary unit
  if (str === 'i') return { real: 0, imag: 1 };
  if (str === '-i') return { real: 0, imag: -1 };

  // Handle nerdamer style (a*i)
  if (str.includes('*i')) {
    if (process.env.NODE_ENV === 'test') {
      console.log('Parsing nerdamer style:', str);
    }
    const num = parseFloat(str.replace('*i', '')) || 1;
    return { real: 0, imag: num };
  }

  // Handle standard format (a+bi)
  // Match a+bi format (with optional whitespace)
  const complexRegex = /^(-?\d*\.?\d*)\s*([+-])\s*(\d*\.?\d*)?i$/;
  // Match bi+a format (with optional whitespace)
  const reverseRegex = /^(-?\d*\.?\d*)?i\s*([+-])\s*(-?\d*\.?\d*)$/;
  
  // Try a+bi format first
  const match = str.match(complexRegex);
  if (match) {
    if (process.env.NODE_ENV === 'test') {
      console.log('Matched a+bi format:', match);
    }
    const [_, real, sign, imag] = match;
    return {
      real: parseFloat(real || '0'),
      imag: parseFloat((sign || '+') + (imag || '1'))
    };
  }

  // Try bi+a format
  const reverseMatch = str.match(reverseRegex);
  if (reverseMatch) {
    if (process.env.NODE_ENV === 'test') {
      console.log('Matched bi+a format:', reverseMatch);
    }
    const [_, imag, sign, real] = reverseMatch;
    return {
      real: parseFloat(real || '0'), 
      imag: parseFloat(imag || '1')
    };
  }

  // If just a regular number
  if (process.env.NODE_ENV === 'test') {
    console.log('Attempting to parse as regular number:', str);
  }
  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}; 