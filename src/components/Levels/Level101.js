import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level101 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="One Hundred and One" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="One hundred and one dalmatians. Room one-oh-one. The first step into triple digits." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="You've passed one hundred. The first milestone is behind you. Ahead: the wilderness. Levels get sparser out here. The handcrafted landmarks are further apart. But the journey between them — that's the game." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The Fibonacci chain continues at one hundred forty-four. Powers of two at one hundred twenty-eight. Or just keep walking — every number is still a level." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={100}>← One Hundred</LevelButton>
            <LevelButton targetLevel={128}>Powers of 2 →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={144}>Fibonacci →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level101;
