import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

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
          <Card.Text>
            <HighlightableText text="Now that you know Roman numerals... C is one hundred. But first, ninety-nine has a puzzle worth solving." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="And between the whole numbers? The spaces hide secrets too. Try level zero point five — or level three point one four. The word 'point' turns any decimal into a door." />
          </Card.Text>
          <LevelButton targetLevel={99}>Level XCIX</LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level50;