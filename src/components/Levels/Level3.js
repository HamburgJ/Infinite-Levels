import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level3 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Dead End" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Nothing here. Just a wall and the way you came."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="...but something has shifted behind you. Go back and look."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level3; 