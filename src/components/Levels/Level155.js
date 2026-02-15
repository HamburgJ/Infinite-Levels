import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level155 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Quiet" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Not every level has something to say. Some just exist — a number in the line, a pause between landmarks. Level one hundred fifty-three is nearby, and it's hiding something behind a shrine."
            />
          </Card.Text>
          <CenteredContainer>
                <LevelButton targetLevel={153}>Level 153</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level155;