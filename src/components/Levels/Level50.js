import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level50 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="L" size="xl"/></Card.Title>
          <Card.Text>
            <HighlightableText text="L. Fifty in the language of Rome. But L is just the beginning." />
            <br/><br/>
            <HighlightableText text="I is one. V is five. X is ten. L is fifty. C is one hundred. D is five hundred. M is one thousand. Find these letters in any text throughout the game, and they'll carry you to new levels." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level50;