import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import TextButton from '../UI/TextButton';
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
            <HighlightableText text="Every number you see — on coins, in descriptions, even in words — is a doorway."/>
          </Card.Text>
          <Card.Text>
            The Jester grins: "There are <TextButton targetLevel={9}>nine</TextButton> doors in this room. Most people only find two."
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