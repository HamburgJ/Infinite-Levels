import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level2025 = () => {
  const currentYear = new Date().getFullYear();
  const isCurrent = currentYear === 2025;
  
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text={isCurrent ? "The Present" : "A Recent Year"} size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text={isCurrent 
              ? "Two thousand and twenty-five. The current year — a number that belongs to right now. But it's also forty-five squared. And the sum of the cubes from one to nine: 1³ + 2³ + 3³ + ... + 9³ = 2025."
              : "Two thousand and twenty-five. A year that's come and gone — but what a number. It's forty-five squared. And the sum of the cubes from one to nine: 1³ + 2³ + 3³ + ... + 9³ = 2025."} />
          </Card.Text>
          <Card.Text>
            <HighlightableText text={isCurrent
              ? "Numbers don't just exist in abstract space. They mark time. They anchor us. Twenty twenty-five is where you are — in the game, and maybe in the world."
              : "Numbers don't just exist in abstract space. They mark time. They anchor us. Twenty twenty-five was a year — and its mathematics will always be beautiful."} />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The square root of this level is forty-five. And forty-five is a triangular number — the sum of one through nine. Patterns inside patterns inside patterns." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1729}>← Level 1729</LevelButton>
            {isCurrent ? null : <LevelButton targetLevel={currentYear}>Level {currentYear}</LevelButton>}
            <LevelButton targetLevel={4096}>Level 4096</LevelButton>
            <LevelButton targetLevel={10000}>Level 10,000 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level2025;
