import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const NumberInfo = styled.div`
  margin: 1rem 0;
  font-size: 1.1rem;
`;

const NumberEncyclopedia = ({ onClose }) => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(state => state.game.currentLevel);
  const theme = useSelector(state => state.game.theme);

  const getPrimeFactors = (num) => {
    const factors = [];
    let n = Math.abs(num);
    
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }
    
    return factors;
  };

  const getNumberInfo = () => {
    // Handle complex numbers with zero imaginary part as regular numbers
    if (typeof currentLevel === 'object' && 'real' in currentLevel && currentLevel.imag === 0) {
      const realPart = currentLevel.real;
      
      if (Number.isInteger(realPart)) {
        const factors = getPrimeFactors(realPart);
        const isPrime = factors.length === 1;
        
        return `${realPart} is ${isPrime ? 'a prime number' : 'not a prime number'}. 
        ${factors.length > 0 ? `Prime factors: ${factors.join(' × ')}` : ''}`;
      }
    }

    // Handle special constants
    if (currentLevel === Math.PI) {
      return "π - The ratio of a circle's circumference to its diameter. A transcendental number that never ends and never settles into a pattern.";
    }
    if (currentLevel === Math.E) {
      return "e - Euler's number. The base of natural logarithms. It appears naturally in descriptions of growth and decay.";
    }

    // Handle complex numbers
    if (typeof currentLevel === 'object' && 'real' in currentLevel) {
      return `This number exists in the complex plane. It has a real part of ${currentLevel.real} and an imaginary part of ${currentLevel.imag}i. Such numbers often appear in quantum mechanics and electrical engineering.`;
    }

    // Handle infinity cases
    if (String(currentLevel).includes('Infinity')) {
      return "Infinity - A concept representing boundlessness. In mathematics, it's not a number but a concept of endlessness.";
    }

    // Handle regular integers
    if (Number.isInteger(currentLevel)) {
      const factors = getPrimeFactors(currentLevel);
      const isPrime = factors.length === 1;
      
      return `${currentLevel} is ${isPrime ? 'a prime number' : 'not a prime number'}. 
      ${factors.length > 0 ? `Prime factors: ${factors.join(' × ')}` : ''}`;
    }

    return "This number has properties yet to be discovered...";
  };

  const formatLevelTitle = () => {
    if (typeof currentLevel === 'object' && 'real' in currentLevel) {
      return `Level ${currentLevel.real}${currentLevel.imag >= 0 ? '+' : ''}${currentLevel.imag}i`;
    }
    if (currentLevel === Math.PI) {
      return 'Level π';
    }
    if (currentLevel === Math.E) {
      return 'Level e';
    }
    if (String(currentLevel).includes('Infinity')) {
      return 'Level ∞';
    }
    return `Level ${currentLevel}`;
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{formatLevelTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NumberInfo>
          {getNumberInfo()}
        </NumberInfo>
      </Modal.Body>
    </>
  );
};

export default NumberEncyclopedia; 