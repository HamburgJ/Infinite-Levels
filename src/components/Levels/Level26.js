import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level26 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 26</Card.Title>
          <Card.Text>
            <HighlightableText text="This is level 26." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level26;