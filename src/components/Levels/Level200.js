import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level200 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Two Hundred" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="A crossroads in the wilderness. If the Scale brought you here, you know that some items weigh exactly two hundred grams. If you walked, you've earned this rest." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="From here, the chains branch in every direction. The Fibonacci chain passes through two hundred thirty-three. Powers of two at two hundred fifty-six. The next milestone at three hundred. The cubes at two hundred sixteen." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Something nearby doesn't belong. Around level two hundred three, there's a page that looks... damaged. Like someone ripped through it. The Jester's calling card, perhaps?" />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Or go back. One hundred fifty has the wallet weight puzzle. One hundred has the Card Box shrine. The number line stretches both ways." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={100}>← One Hundred</LevelButton>
            <LevelButton targetLevel={256}>Two Fifty-Six →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={233}>Fibonacci (233) →</LevelButton>
            <LevelButton targetLevel={300}>Three Hundred →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level200;
