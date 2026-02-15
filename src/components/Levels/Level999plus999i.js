import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import VisitedLevelsDisplay from '../UI/VisitedLevelsDisplay';

const Level999plus999i = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="999 + 999i" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText text="You've reached the deepest charted point in the complex plane. Nine hundred ninety nine steps along the real axis and nine hundred ninety nine steps into the imaginary. The numberservatory here tracks every level you've ever visited." />
          </Card.Text>
          <VisitedLevelsDisplay />
          <LevelButton targetLevel={0}>Return to Level 0</LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level999plus999i;