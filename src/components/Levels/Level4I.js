import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level4I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Lookout" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Four steps up the imaginary axis. From here you can almost see the stable islands scattered across the complex plane like stars in a dark sky."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="To the northeast: five plus five i — a dark singularity. Something with infinite weight lives there. Due east: three plus three i, a quiet crossroads at the midpoint of the diagonal. Below: the axis stretches back toward reality. Above: five i, the summit."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="The stable islands form a grid. Zero, one, two, three, five in each direction. That's thirty six safe coordinates in an infinite plane. Everything else? Quicksand. Ten seconds and the ground opens up."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 3}}>↓ Level 3i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 5}}>↑ Level 5i</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 3}}>→ Level 3+3i</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 5}}>→ Level 5+5i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4I;
