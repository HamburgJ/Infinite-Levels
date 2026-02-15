import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level150 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="One Hundred Fifty" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Recognize this weight? Your wallet weighs exactly one hundred fifty grams — empty. But wallets aren't meant to stay empty. Fill yours with coins and the weight changes. And every weight is a level."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="How heavy can you make it? The answer might take you somewhere you didn't expect. Try putting exactly two cents in and see where the Scale sends you."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={7}>Back to Level 7</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level150;