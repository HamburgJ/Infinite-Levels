import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { PhaseFragment } from '../Items/PhaseFragment';

const Level3Plus3I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Midpoint" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Three and three. The exact midpoint of the diagonal. Behind you: the origin, one plus one i, two plus two i. Ahead: four plus four i (unstable — don't linger), and then five plus five i. The Singularity."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Halfway between where you started and where you probably shouldn't go. The Singularity at five plus five i is only two diagonal steps away. You can feel its pull — a faint heaviness in the numbers, like gravity but sideways."
            />
          </Card.Text>
          <PhaseFragment fragmentNumber={2} />
          <CenteredContainer>
            <LevelButton targetLevel={{real: 2, imag: 2}}>↙ Level 2+2i</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 5}}>↗ Level 5+5i</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 3}}>→ Level 5+3i</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 5}}>↑ Level 3+5i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 3}}>← Level 3i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level3Plus3I;
