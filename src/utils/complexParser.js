import { Complex } from './complex';
export const parseComplexNumber = (input) => {
  if (process.env.NODE_ENV === 'test') {
    console.log('\n=== COMPLEX PARSER DEBUG ===');
    console.log('Input:', input);
  }

  if (!input) return null;
  
  // Convert to string and clean up whitespace
  const str = input.toString().toLowerCase().trim();
  
  // Handle pure infinity cases
  if (str === 'infinity') return 'Infinity';
  if (str === '-infinity') return '-Infinity';
  if (str === 'infinityi' || str === 'i*infinity') return 'Infinityi';
  if (str === '-infinityi' || str === '-i*infinity') return '-Infinityi';

  // Handle standard format (a+bi) with infinity
  const complexRegex = /^(-?(?:infinity|\d*\.?\d*))\s*([-+])\s*(-?(?:infinity|\d*\.?\d*))\s*i$/i;
  const match = str.match(complexRegex);
  if (match) {
    const [_, real, sign, imag] = match;
    const realPart = real.toLowerCase() === 'infinity' ? 'Infinity' : real;
    const imagPart = imag?.toLowerCase() === 'infinity' ? 'Infinity' : imag;
    
    // Format special infinity combinations
    if (realPart === 'Infinity' || imagPart === 'Infinity') {
      const realSign = realPart.startsWith('-') ? '-' : '';
      const imagSign = sign === '-' ? '-' : '+';
      if (realPart === 'Infinity' && imagPart === 'Infinity') {
        return `${realSign}Infinity${imagSign}Infinityi`;
      }
      if (realPart === 'Infinity') {
        return `${realSign}Infinity${sign}${imagPart}i`;
      }
      if (imagPart === 'Infinity') {
        return `${realPart}${sign}Infinityi`;
      }
    }

    // Handle regular complex numbers
    return {
      real: parseFloat(realPart),
      imag: parseFloat((sign === '-' ? '-' : '') + (imagPart || '1'))
    };
  }

  // Handle bi+a format with infinity
  const reverseRegex = /^(-?(?:infinity|\d*\.?\d*))\s*i\s*([-+])\s*(-?(?:infinity|\d*\.?\d*))$/i;
  const reverseMatch = str.match(reverseRegex);
  if (reverseMatch) {
    const [_, imag, sign, real] = reverseMatch;
    const realPart = real.toLowerCase() === 'infinity' ? 'Infinity' : real;
    const imagPart = imag?.toLowerCase() === 'infinity' ? 'Infinity' : imag;

    // Format special infinity combinations
    if (realPart === 'Infinity' || imagPart === 'Infinity') {
      const realSign = realPart.startsWith('-') ? '-' : '';
      const imagSign = imagPart.startsWith('-') ? '-' : '';
      if (realPart === 'Infinity' && imagPart === 'Infinity') {
        return `${realSign}Infinity${sign}${imagSign}Infinityi`;
      }
      if (realPart === 'Infinity') {
        return `${realSign}Infinity${sign}${imagPart}i`;
      }
      if (imagPart === 'Infinity') {
        return `${imagSign}Infinityi${sign}${realPart}`;
      }
    }

    return {
      real: parseFloat(real),
      imag: parseFloat(imag || '1')
    };
  }

  // If just a regular number
  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}; 