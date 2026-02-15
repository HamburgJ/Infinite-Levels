import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level158 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Passing Through" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="One hundred fifty-eight. Not every number is special — but every number is a place. You were here. That's enough."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={156}>Level 156</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level158;