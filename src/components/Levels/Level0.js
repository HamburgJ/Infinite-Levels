import React from 'react';
import { Card } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import LevelLayout from '../UI/LevelLayout';
import { CenteredContainer } from './styles/CommonLevelStyles';
import styled, { keyframes } from 'styled-components';
const diagonalScroll = keyframes`
  0%, 100% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 0 0;
  }
`;

export const Level0Background = styled.div`
  position: fixed;
  inset: 0;
  perspective: 1000px;
  background-image: repeating-linear-gradient(
    -45deg,
    ${props => props.$isNegative ? '#000000' : '#f8f9fa'},
    ${props => props.$isNegative ? '#000000' : '#f8f9fa'} 2rem,
    ${props => props.$isNegative ? '#1a1a1a' : '#e9ecef'} 2rem,
    ${props => props.$isNegative ? '#1a1a1a' : '#e9ecef'} 4rem
  );
  background-size: 200% 200%;
  animation: ${diagonalScroll} 20s ease-in-out infinite;
`;

const Level0 = ({ isNegative }) => {

  return (
    <LevelLayout
      background={<Level0Background $isNegative={isNegative} />}
      title="Infinite Levels!"
      titleAlign="center"
      titleSize="xlarge"
      titleEnhanced
      titleColor="#333"
    >
      <Card.Text>
        <HighlightableText
          text="Infinite Levels! is a puzzle game about exploring an infinite collection of levels."
        />
      </Card.Text>
      <Card.Text>
        <HighlightableText
          text="To proceed to a new level, press the button that displays the level number you want to go to."
        />
      </Card.Text>
      <Card.Text>
        <HighlightableText
          text="Each button will take you to the level it displays. Every level is filled with secrets, and may have multiple ways to proceed, so be sure to explore!"
        />
      </Card.Text>
      <CenteredContainer>
        <LevelButton
          targetLevel={1}
          variant="primary"
        >
          Level 1
        </LevelButton>
      </CenteredContainer>
    </LevelLayout>
  );
};

export default Level0;
