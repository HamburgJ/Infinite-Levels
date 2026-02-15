import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpiralContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 1.5rem auto;
  position: relative;
  animation: ${spin} 30s linear infinite;
`;

const SpiralArc = styled.div`
  position: absolute;
  border: 2px solid #d4a017;
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  
  &:nth-child(1) { width: 100%; height: 100%; top: 0; left: 0; }
  &:nth-child(2) { width: 61.8%; height: 61.8%; top: 19.1%; left: 19.1%; }
  &:nth-child(3) { width: 38.2%; height: 38.2%; top: 30.9%; left: 30.9%; }
  &:nth-child(4) { width: 23.6%; height: 23.6%; top: 38.2%; left: 38.2%; }
  &:nth-child(5) { width: 14.6%; height: 14.6%; top: 42.7%; left: 42.7%; }
`;

const PhiSymbol = styled.div`
  font-size: 2.5rem;
  text-align: center;
  color: #d4a017;
  font-weight: bold;
  font-family: serif;
  margin: 0.5rem 0;
`;

const DigitsContainer = styled.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: #d4a017;
  text-align: center;
  word-break: break-all;
  line-height: 1.6;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(212, 160, 23, 0.05);
  border-radius: 8px;
`;

const LevelPhi = () => {
  return (
    <LevelContainer>
      <StyledCard style={{ borderColor: 'rgba(212, 160, 23, 0.3)' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 1.618... — Beauty" size="medium" />
          </Card.Title>

          <SpiralContainer>
            <SpiralArc />
            <SpiralArc />
            <SpiralArc />
            <SpiralArc />
            <SpiralArc />
          </SpiralContainer>

          <PhiSymbol>φ</PhiSymbol>

          <Card.Text>
            <HighlightableText text="Phi. The golden ratio." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="ONE plus the square root of FIVE, divided by TWO. That's all it takes to define what some call the most beautiful number in mathematics." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="They say it appears in sunflowers, seashells, the Parthenon, the Mona Lisa. They say it's the mathematical formula for beauty itself. They say a lot of things. What's actually TRUE is this: take any TWO consecutive Fibonacci numbers. Divide the larger by the smaller. The further you go in the sequence, the closer you get to this number — ONE POINT SIX ONE EIGHT ZERO THREE THREE NINE..." />
          </Card.Text>

          <DigitsContainer>
            1.61803398874989484820458683436563811772030917980576...
          </DigitsContainer>

          <Card.Text>
            <HighlightableText text="...but you never quite arrive. The Fibonacci sequence approaches phi but never reaches it. An infinite chase toward an irrational ideal." />
          </Card.Text>

          <Card.Text style={{ fontStyle: 'italic', color: '#d4a017' }}>
            <HighlightableText text="Beauty, it turns out, is irrational." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={2.718}>Level e</LevelButton>
            <LevelButton targetLevel={1.414}>Level √2</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={82}>Level 82 (Constants)</LevelButton>
            <LevelButton targetLevel={89}>Fibonacci (89)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelPhi;
