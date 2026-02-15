import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level2 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="You Found It!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="This game isn't linear. You'll need to backtrack, revisit, and look at old places with new eyes."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="The hint system in the menu above is part of the game — not a cheat code. Every level has a unique hint that might help you see what you're missing."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="And here's a secret: in this game, even the words themselves can be interactive. Keep that in mind."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Take a look at the hint on Level 3 and use it to find a way forward."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Back to level 1</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level2; 