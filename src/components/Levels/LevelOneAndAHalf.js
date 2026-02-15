import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const LevelOneAndAHalf = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 1.5 — One and a Half" size="medium" />
          </Card.Title>

          <Card.Text>
            <HighlightableText text="Between ONE and TWO. The FIRST fraction most children learn." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="ONE and a HALF cookies. ONE and a HALF hours. Can I have ONE and a HALF? Always a bit more than enough, never quite double. It's the Goldilocks of fractions — not too little, not too much." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="In music, a dotted QUARTER note lasts ONE and a HALF beats. In baking, most recipes call for ONE and a HALF cups of flour. Some numbers aren't about mathematics. They're about life." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="You're HALF-way between the FIRST and SECOND integers. A foot in both worlds. Not quite here, not quite there. The story of every decimal." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
            <LevelButton targetLevel={2.5}>Level 2.5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelOneAndAHalf;
