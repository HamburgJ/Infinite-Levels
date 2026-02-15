import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level82 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level 82" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="This is level 82." />
            <br/><br/>
            <HighlightableText text="The mathematical constants are levels too. Pi is approximately three point one four. E is approximately two point seven one eight. Phi, the golden ratio, is approximately one point six one eight. Try highlighting any of these." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level82;