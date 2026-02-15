import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { PhaseFragment } from '../Items/PhaseFragment';

const Level2Plus2I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Crossroads" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="The crossroads of the complex plane. Two steps real, two steps imaginary. Paths lead in every direction. The Cartographer passed through here — you can see their notes scratched into the margins of this place."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="From here, the geometry of the stable islands becomes clear. You're at the center of the grid. One plus one i is behind you. Three plus three i is ahead. The diagonal stretches from the origin all the way to the Singularity at five plus five i."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="The Cartographer's margin note reads: 'The stable coordinates are zero, one, two, three, five. Not four. Not six. Why those numbers?' A pattern hides in the pattern."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 1, imag: 1}}>↙ Level 1+1i</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 3}}>↗ Level 3+3i</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 1}}>→ Level 3+1i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 3}}>↑ Level 1+3i</LevelButton>
            <LevelButton targetLevel={{real: 2, imag: 1}}>↓ Level 2+1i</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 5}}>↗ Level 5+5i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level2Plus2I;
