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
            <HighlightableText text="Level 3" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Some levels look empty. That doesn't mean they are."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level3; 