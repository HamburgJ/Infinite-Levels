import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const sparkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const DiamondIcon = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
  
  &::after {
    content: '💎';
    animation: ${sparkle} 2s ease-in-out infinite;
    display: inline-block;
  }
`;

const WeightDisplay = styled.div`
  font-family: monospace;
  font-size: 1.5rem;
  text-align: center;
  color: #5dade2;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(93, 173, 226, 0.1);
  border-radius: 8px;
`;

const LevelDiamondWeight = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 3.52 — The Diamond's Weight" size="medium" />
          </Card.Title>

          <DiamondIcon />
          <WeightDisplay>3.52g</WeightDisplay>

          <Card.Text>
            <HighlightableText text="THREE POINT FIVE TWO. Not pi. Not e. Not phi. Not a famous constant. Just the weight of a diamond, measured in grams." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="You might ask: what's the POINT? Literally — what IS a decimal POINT? It's the tiniest mark. A dot. A speck. And yet it changes everything. Move the POINT ONE place to the right and THREE POINT FIVE TWO becomes THIRTY-FIVE POINT TWO. Move it to the left and it becomes ZERO POINT THREE FIVE TWO." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="The POINT is: precision matters. In diamonds, in numbers, in life. You found this level through the Scale — through careful measurement. That's the lesson of the decimal realm: pay attention to the details. The universe hides its best secrets in the spaces after the decimal POINT." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={7}>Level 7 (Scale)</LevelButton>
            <LevelButton targetLevel={3.14159}>Level π</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelDiamondWeight;
