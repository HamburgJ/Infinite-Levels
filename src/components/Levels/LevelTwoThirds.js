import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 5px rgba(204, 0, 0, 0.3); }
  50% { text-shadow: 0 0 15px rgba(204, 0, 0, 0.6); }
`;

const SinisterDigits = styled.div`
  font-family: monospace;
  font-size: 2rem;
  text-align: center;
  color: #cc4444;
  margin: 1rem 0;
  animation: ${glow} 3s ease-in-out infinite;
`;

const LevelTwoThirds = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.666... — Two Thirds" size="medium" />
          </Card.Title>

          <SinisterDigits>0.666666666...</SinisterDigits>

          <Card.Text>
            <HighlightableText text="TWO THIRDS. Zero point six six six... repeating." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Yes, it looks like SIX SIX SIX. No, it's not the devil's number. That would be Level SIX HUNDRED AND SIXTY-SIX — a completely different address. This is just a fraction doing its best. Not everything that repeats is sinister." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="...Though you have to admit, the resemblance is a LITTLE on the nose." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="You're TWO THIRDS of the way from ZERO to ONE now. ONE more THIRD and you'd be home. But adding THIRDS in decimal is... complicated. Zero point three three three plus zero point three three three plus zero point three three three equals... what, exactly?" />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="There's only ONE way to find out. Visit ZERO POINT NINE NINE NINE." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.333}>Level 0.333</LevelButton>
            <LevelButton targetLevel={0.999}>Level 0.999</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={666}>Level 666</LevelButton>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelTwoThirds;
