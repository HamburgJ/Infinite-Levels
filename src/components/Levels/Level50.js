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
            <HighlightableText text="This is level 50. Big massive L. Roman numeral L. That's a good way to get here. Find an L." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level50;