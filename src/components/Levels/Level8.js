import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import Jester from '../Characters/Jester';

const Level8 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText size="medium" text="Numbers Are Everywhere"/></Card.Title>
          <Jester currentLevel="8" />
          <Card.Text>
            <HighlightableText text="Every number you see — in text, on coins, in descriptions — is a doorway. Try clicking them."/>
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={7}>Level 7</LevelButton>
            <LevelButton targetLevel={9}>Level 9</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level8; 