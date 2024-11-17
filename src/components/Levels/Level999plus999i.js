import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import VisitedLevelsDisplay from '../UI/VisitedLevelsDisplay';

const Level82 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Great minds think alike" />
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Welcome to the numberservatory. Observe the numbers of the levels which you have visited in this game. Wrack up a bunch of weird ones and show them off to your friends." />
          </Card.Text>
          <VisitedLevelsDisplay />
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level82;