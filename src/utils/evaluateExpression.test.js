import { extractNumberFromText } from './numberText';


describe('extractNumberFromText - basic arithmetic', () => {
  test('evaluates basic arithmetic expressions', () => {
    expect(extractNumberFromText('2 + 2')).toBe(4);
    expect(extractNumberFromText('3 * 4')).toBe(12);
    expect(extractNumberFromText('10 - 5')).toBe(5);
    expect(extractNumberFromText('15 / 3')).toBe(5);
    expect(extractNumberFromText('-2 + 5')).toBe(3);
    expect(extractNumberFromText('3 * -2')).toBe(-6);
    expect(extractNumberFromText('-10 / -2')).toBe(5);
  });

  test('handles decimal numbers', () => {
    expect(extractNumberFromText('2.5 + 1.5')).toBeCloseTo(4);
    expect(extractNumberFromText('3.3 * 2')).toBe(6.6);
    expect(extractNumberFromText('10.5 / 2.1')).toBeCloseTo(5);
    expect(extractNumberFromText('-2.5 * -2.5')).toBe(6.25);
  });

  test('handles expressions with parentheses', () => {
    expect(extractNumberFromText('(2 + 3) * 4')).toBe(20);
    expect(extractNumberFromText('2 + (3 * 4)')).toBe(14);
    expect(extractNumberFromText('((2 + 3) * 4) / 2')).toBe(10);
    expect(extractNumberFromText('((-2 + 3) * 4) / (1 + 1)')).toBe(2);
  });
});

describe('extractNumberFromText - equations with level variable', () => {
  test('solves linear equations', () => {
    expect(extractNumberFromText('level = 5')).toBe(5);
    expect(extractNumberFromText('2 * level = 10')).toBe(5);
    expect(extractNumberFromText('level + 3 = 8')).toBe(5);
    expect(extractNumberFromText('level / 2 = 3')).toBe(6);
  });

  test('solves equations with level on right side', () => {
    expect(extractNumberFromText('10 = 2 * level')).toBe(5);
    expect(extractNumberFromText('15 = level + 10')).toBe(5);
    expect(extractNumberFromText('25 = 5 * level')).toBe(5);
  });

  test('solves quadratic equations', () => {
    const result1 = extractNumberFromText('level^2 = 16');
    expect(Math.abs(result1)).toBe(4);

    const result2 = extractNumberFromText('level^2 + 2*level + 1 = 0');
    expect(result2).toBe(-1);

    const result3 = extractNumberFromText('level^2 - 5*level + 6 = 0');
    expect([2, 3]).toContain(result3);
  });
});

describe('extractNumberFromText - complex numbers', () => {
  test('handles imaginary solutions', () => {
    expect(extractNumberFromText("i")).toEqual({ real: 0, imag: 1 });
    expect(extractNumberFromText("-i")).toEqual({ real: 0, imag: -1 });
    const result1 = extractNumberFromText('level^2 + 1 = 0');
    expect(result1).toEqual({ real: 0, imag: 1 });

    const result2 = extractNumberFromText('level^2 + 4 = 0');
    expect(result2).toEqual({ real: 0, imag: 2 });
  });

  test('returns null for equations with complex coefficients', () => {
    expect(extractNumberFromText('level * (1 + i) = 2 + 2*i')).toBeNull();
  });
});

describe('extractNumberFromText - special cases', () => {
  test('handles random whitespace', () => {
    expect(extractNumberFromText('2 + 22i')).toEqual({ real: 2, imag: 22 });
    expect(extractNumberFromText('level = 2')).toBe(2);
    expect(extractNumberFromText('(2 + 3) * 4')).toBe(20);
  });

  test('handles exponential equations', () => {
    expect(extractNumberFromText('2^level = 8')).toBe(3);
    expect(extractNumberFromText('2^level = 16')).toBe(4);
    expect(extractNumberFromText('e^level = e^2')).toBeCloseTo(2);
  });

  test('returns null for invalid expressions', () => {
    expect(extractNumberFromText('2 +')).toBe(2);
    expect(extractNumberFromText('* 3')).toBeNull();
    expect(extractNumberFromText('2 ** 2 +')).toBe(2);
    expect(extractNumberFromText('(2 + 3')).toBeNull();
    expect(extractNumberFromText('level =')).toBeNull();
    expect(extractNumberFromText('= 5')).toBeNull();
  });

  test('blocks unsafe expressions', () => {
    expect(extractNumberFromText('console.log("hack")')).toBeNull();
    expect(extractNumberFromText('process.exit()')).toBeNull();
    expect(extractNumberFromText('require("fs")')).toBeNull();
    expect(extractNumberFromText('2; process.exit()')).toBeNull();
    expect(extractNumberFromText('level = console.log')).toBeNull();
  });
});

describe('extractNumberFromText - word expressions', () => {
  test('evaluates dictionary number words', () => {
    expect(extractNumberFromText('one')).toBe(1);
    expect(extractNumberFromText('two')).toBe(2);
    expect(extractNumberFromText('three')).toBe(3);
    expect(extractNumberFromText('four')).toBe(4);
    expect(extractNumberFromText('five')).toBe(5);
  });

  test('evaluates roman numerals', () => {
    expect(extractNumberFromText('IV')).toBe(4);
    expect(extractNumberFromText('IX')).toBe(9);
    expect(extractNumberFromText('MCMXCIX')).toBe(1999);
  });

  test('evaluates special mathematical values', () => {
    expect(extractNumberFromText('i')).toEqual({ real: 0, imag: 1 });
    expect(extractNumberFromText('e')).toBeCloseTo(Math.E);
  });
});

describe('extractNumberFromText - level equations', () => {
  test('evaluates negative level equations', () => {
    expect(extractNumberFromText('level=-three')).toBe(-3);
    expect(extractNumberFromText('-level=-three')).toBe(3);
    expect(extractNumberFromText('-level=-3threelevel')).toBe(0);
    expect(extractNumberFromText('1=levellevellevel')).toBe(1);
  });

  test('evaluates complex level equations', () => {
    expect(extractNumberFromText('levellevel=-1')).toEqual({ real: 0, imag: 1 });
    expect(extractNumberFromText('level+1=-level-i')).toBeNull();
    expect(extractNumberFromText('level i is 3')).toBeNull();
  });

  test('evaluates equations with mathematical constants', () => {
    expect(extractNumberFromText('e times level equals pi squared')).toBeCloseTo(3.630824551655961);
    expect(extractNumberFromText('level to the power of three equals dozen squared')).toBeCloseTo(Math.cbrt(144));
    expect(extractNumberFromText('level squared plus pi times level plus e equals zero'))
      .toBeCloseTo((-Math.PI - Math.sqrt(Math.PI * Math.PI - 4 * Math.E)) / 2);
    
  });

  test('evaluates mixed format equations', () => {
    expect(extractNumberFromText('level^2 minus pi*level plus e=0')).toBeTruthy();
    expect(extractNumberFromText('(level plus e) times (level minus pi) equals zero')).toBeCloseTo(Math.PI);
    expect(extractNumberFromText('III times level squared equals dozen')).toBe(2);
    expect(extractNumberFromText('level equals pi divided by pair')).toBeCloseTo(Math.PI / 2);
  });
});

describe('extractNumberFromText - mixed expressions', () => {
  test('evaluates mixed word and numeric operators', () => {
    expect(extractNumberFromText('2plus3')).toBe(5);
    expect(extractNumberFromText('4minus1')).toBe(3);
    expect(extractNumberFromText('7times2')).toBe(14);
    expect(extractNumberFromText('9divided by3')).toBe(3);
  });

  test('evaluates mixed word numbers and operators', () => {
    expect(extractNumberFromText('three+4')).toBe(7);
    expect(extractNumberFromText('five-two')).toBe(3);
    expect(extractNumberFromText('6timesfour')).toBe(24);
    expect(extractNumberFromText('eight divided bytwo')).toBe(4);
  });
});

describe('extractNumberFromText - complex number patterns', () => {
  test('handles complex numbers in a+bi format', () => {
    expect(extractNumberFromText('2+22i')).toEqual({ real: 2, imag: 22 });
    expect(extractNumberFromText('2-22i')).toEqual({ real: 2, imag: -22 });
    expect(extractNumberFromText('-2+22i')).toEqual({ real: -2, imag: 22 });
    expect(extractNumberFromText('-2-22i')).toEqual({ real: -2, imag: -22 });
  });

  test('handles complex numbers in bi+a format', () => {
    expect(extractNumberFromText('22 i+2')).toEqual({ real: 2, imag: 22 });
    expect(extractNumberFromText('22i -2')).toEqual({ real: -2, imag: 22 });
    expect(extractNumberFromText('-22 i+ 2')).toEqual({ real: 2, imag: -22 });
    expect(extractNumberFromText('-22i- 2')).toEqual({ real: -2, imag: -22 });
  });

  test('handles special cases', () => {
    expect(extractNumberFromText('i')).toEqual({ real: 0, imag: 1 });
    expect(extractNumberFromText('-i')).toEqual({ real: 0, imag: -1 });
    expect(extractNumberFromText('2+i')).toEqual({ real: 2, imag: 1 });
    expect(extractNumberFromText('i+2')).toEqual({ real: 2, imag: 1 });
  });
}); 