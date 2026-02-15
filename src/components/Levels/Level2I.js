import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { CollectableCompass } from '../Items/CollectableCompass';

const Level2I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Compass" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Two steps from reality. The real number line is below you — you can still see it, like a shoreline receding. But up here on the imaginary axis, things get disorienting fast."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Lost? Everyone gets lost here. Take this. It doesn't show you where to go — it shows you where you can rest. The stable islands glow faintly on its face. Zero, one, two, three, five — those are the safe coordinates. Anywhere else, the ground will crumble beneath you."
            />
          </Card.Text>
          <CenteredContainer>
            <CollectableCompass />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="The imaginary axis stretches above and below. One step down takes you back toward i. One step up takes you further from anything real. And to the east — the stable islands of the complex plane are waiting. Try one plus one i if you haven't already."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 1}}>↓ Level i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 3}}>↑ Level 3i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 1}}>→ Level 1+1i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level2I;
