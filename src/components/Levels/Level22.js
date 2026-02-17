import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level22 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Catch Twenty-Two" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="A paradox. You need to leave this level to find the exit. But the exit is only in the words." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="There are no buttons here. No arrows. No hints. Just words — and the numbers hiding inside them." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="If you're lost, remember: you can always go back to twenty-one. The outpost at thirty isn't far. And the answer to everything waits at forty-two." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Some say the real exit is at one hundred. Others say zero is where everything begins. The choice is yours — if you can find it." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level22;
