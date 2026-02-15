import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const HalfBar = styled.div`
  width: 80%;
  height: 8px;
  background: linear-gradient(to right, #4a90d9 50%, #e0e0e0 50%);
  border-radius: 4px;
  margin: 1.5rem auto;
  position: relative;
  
  &::after {
    content: '½';
    position: absolute;
    left: 50%;
    top: -24px;
    transform: translateX(-50%);
    font-size: 1.2rem;
    color: #4a90d9;
    font-weight: bold;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const LevelHalf = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.5 — Half" size="medium" />
          </Card.Title>

          <HalfBar />

          <Card.Text>
            <HighlightableText text="Welcome to the HALF-way POINT." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Between zero and one, in the crack between whole numbers, lies a world most players never see. They're too busy reaching for the next integer to notice what's been hiding in the spaces between." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Think about it: the word HALF appears everywhere. Better HALF. HALF-hearted. The glass is HALF full. And yet — half of what? HALF is always relative. Half of one hundred is fifty. Half of ten is five. Half of one is... here." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="You're standing on a FRACTION of reality. Get used to it. This is the first of many stops between the whole numbers. Try exploring what a QUARTER looks like. Or THREE QUARTERS. The spaces between are wider than you think." />
          </Card.Text>

          <Card.Text style={{ fontStyle: 'italic', color: '#888' }}>
            <HighlightableText text="Hint: words like half, quarter, and one third are all navigable. So is zero point one." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.25}>Level 0.25</LevelButton>
            <LevelButton targetLevel={0.75}>Level 0.75</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
            <LevelButton targetLevel={0.1}>Level 0.1</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelHalf;
