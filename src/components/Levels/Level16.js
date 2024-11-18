import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level16 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="This is level 16." size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="This is level 16."/>
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level16;