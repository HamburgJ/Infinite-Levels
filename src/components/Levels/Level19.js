import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level19 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level Nineteen" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="This is level nineteen. Level nineteen is a testament to the ability of a level to be vacant of anything. Nothing to see here. Not even a way out. Or is there?" />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level19;