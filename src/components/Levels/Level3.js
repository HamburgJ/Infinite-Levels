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
              text="No way forward here. But something has changed on Level 1 — go back and look."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level3; 