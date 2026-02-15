import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const PrimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  margin: 1rem 0;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;

const NumberCell = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: ${props => props.isPrime ? 'bold' : 'normal'};
  background: ${props => {
    if (props.isTarget) return 'rgba(231, 76, 60, 0.3)';
    if (props.isPrime && props.revealed) return 'rgba(52, 152, 219, 0.2)';
    if (props.isPrime && !props.revealed) return 'rgba(0,0,0,0.03)';
    return 'rgba(0,0,0,0.03)';
  }};
  color: ${props => {
    if (props.isTarget) return '#c0392b';
    if (props.isPrime && props.revealed) return '#2980b9';
    return '#ccc';
  }};
  border: 1px solid ${props => props.isTarget ? '#e74c3c' : props.isPrime && props.revealed ? '#3498db' : '#eee'};
  border-radius: 3px;
  cursor: ${props => props.isPrime ? 'pointer' : 'default'};
  transition: all 0.2s ease;
`;

const primes = new Set([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);

const Level97 = () => {
  const [revealed, setRevealed] = useState(new Set([97]));

  const handleClick = (n) => {
    if (primes.has(n)) {
      setRevealed(prev => new Set([...prev, n]));
    }
  };

  const revealAll = () => setRevealed(new Set(primes));

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Last Prime" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Ninety-seven. The last prime under one hundred. Can you find the other twenty-four? Click the grid." />
          </Card.Text>

          <PrimeGrid>
            {Array.from({ length: 100 }, (_, i) => i + 1).map(n => (
              <NumberCell
                key={n}
                isPrime={primes.has(n)}
                isTarget={n === 97}
                revealed={revealed.has(n)}
                onClick={() => handleClick(n)}
              >
                {n}
              </NumberCell>
            ))}
          </PrimeGrid>

          <Card.Text style={{ textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
            Found: {revealed.size} / 25 primes
            {revealed.size < 25 && (
              <span onClick={revealAll} style={{ marginLeft: '1rem', color: '#3498db', cursor: 'pointer', fontSize: '0.75rem' }}>
                (reveal all)
              </span>
            )}
          </Card.Text>

          <Card.Text>
            <HighlightableText text="They get rarer as numbers grow — but they never stop. The next prime is one hundred and one. The prime highway stretches to infinity." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={89}>← Eighty-Nine</LevelButton>
            <LevelButton targetLevel={99}>Ninety-Nine →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level97;
