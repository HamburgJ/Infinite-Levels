// Helper functions for number theory calculations
const NumberTheory = {
  getPrimeFactors(n) {
    const factors = [];
    let divisor = 2;
    while (n > 1) {
      while (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      }
      divisor++;
      if (divisor * divisor > n) {
        if (n > 1) factors.push(n);
        break;
      }
    }
    return factors;
  },

  isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  },

  factorial(n) {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },

  rotate(str, positions) {
    const arr = str.split('');
    for (let i = 0; i < positions; i++) {
      arr.push(arr.shift());
    }
    return arr.join('');
  },

  // Sequence checkers
  isTriangular(n) {
    const k = Math.sqrt(2 * n + 0.25) - 0.5;
    return Number.isInteger(k);
  },

  isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
  },

  isCube(n) {
    return Number.isInteger(Math.cbrt(n));
  },

  isFibonacci(n) {
    const isPerfectSquare = x => Number.isInteger(Math.sqrt(x));
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  },

  // Pattern checkers
  isPalindrome(n) {
    const str = n.toString();
    return str === str.split('').reverse().join('');
  },

  isPandigital(n) {
    const str = n.toString();
    const digits = new Set(str.split(''));
    return digits.size === str.length && !digits.has('0');
  },

  // Special number checkers
  isKeithNumber(n) {
    const digits = n.toString().split('').map(Number);
    let seq = [...digits];
    let next = seq.reduce((a, b) => a + b, 0);
    while (next <= n) {
      if (next === n) return true;
      seq.shift();
      seq.push(next);
      next = seq.reduce((a, b) => a + b, 0);
    }
    return false;
  },

  isHarshad(n) {
    const digitSum = n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    return n % digitSum === 0;
  },

  isKaprekar(n) {
    const square = n * n;
    const str = square.toString();
    for (let i = 1; i < str.length; i++) {
      const left = parseInt(str.slice(0, i));
      const right = parseInt(str.slice(i));
      if (right > 0 && left + right === n) return true;
    }
    return false;
  },

  isSmith(n) {
    const isPrime = (n) => {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
          if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    };
    
    const getPrimeFactors = (n) => {
        const factors = [];
        let divisor = 2;
        while (n > 1) {
            while (n % divisor === 0) {
                factors.push(divisor);
                n /= divisor;
            }
            divisor++;
        }
        return factors;
    };
    
    if (isPrime(n)) return false;
    const digitSum = num => num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    const factorSum = getPrimeFactors(n).reduce((a, b) => a + digitSum(b), 0);
    return digitSum(n) === factorSum;
  },

  isLychrel(n, iterations = 50) {
    const isPalindrome = (n) => {
        const str = n.toString();
        return str === str.split('').reverse().join('');
    };
    let num = n;
    for (let i = 0; i < iterations; i++) {
      num += parseInt(num.toString().split('').reverse().join(''));
      if (isPalindrome(num)) return false;
    }
    return true;
  },
  factorial(n) {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },
  isKeith(n) {
    const digits = n.toString().split('').map(Number);
    let seq = [...digits];
    let next = seq.reduce((a, b) => a + b, 0);
    while (next <= n) {
      if (next === n) return true;
      seq.shift();
      seq.push(next);
      next = seq.reduce((a, b) => a + b, 0);
    }
    return false;
  },
};

export default NumberTheory; 