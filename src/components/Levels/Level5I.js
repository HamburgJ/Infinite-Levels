import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { PhaseFragment } from '../Items/PhaseFragment';

const Level5I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Summit" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Five steps from the real line. Five steps into pure imagination. There's nothing above you but more imagination, and nothing below you but the long climb home."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="This is the highest stable point on the imaginary axis. Beyond here — six i, seven i, eight i — the ground gets shakier. The collapse timers get shorter. Most people turn back at four i. You didn't."
            />
          </Card.Text>
          <PhaseFragment fragmentNumber={1} />
          <Card.Text>
            <HighlightableText 
              text="From the summit, the complex plane spreads out below. To the southeast, the Singularity at five plus five i pulls at the fabric of space. Due south along the axis, four i, three i, two i, i, and then reality. To the east, one plus five i — the Lighthouse."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 4}}>↓ Level 4i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 5}}>→ Level 1+5i</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 5}}>↘ Level 5+5i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5I;
