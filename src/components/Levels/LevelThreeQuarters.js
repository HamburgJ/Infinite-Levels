import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const LevelThreeQuarters = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.75 — Three Quarters" size="medium" />
          </Card.Title>

          <Card.Text>
            <HighlightableText text="THREE QUARTERS of the way to ONE. So close you can almost taste the integer." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="But almost is the story of every decimal — close, but never quite whole. ZERO POINT SEVEN FIVE is forever trapped in the space between ZERO and ONE. It can see the finish line but never cross it. Not without rounding, anyway." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="From here the path splits. Go back to HALF, forward to ONE, or deeper into the fractions. There's a number that repeats forever just around the corner — ONE THIRD of the way from ZERO." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Or you could visit TWO THIRDS. Fair warning: it looks a little... sinister." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            <LevelButton targetLevel={0.25}>Level 0.25</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
            <LevelButton targetLevel={0.666}>Level 0.666</LevelButton>
            <LevelButton targetLevel={0.333}>Level 0.333</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelThreeQuarters;
