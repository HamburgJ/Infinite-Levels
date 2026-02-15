import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableBlackHole from '../Items/CollectableBlackHole';

const Level5plus5i = () => {
  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, #0a0a2e, #1a0a3e)', color: 'white' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Singularity" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="At the far edge of the stable complex plane, gravity bends. You've traveled five steps along the real axis and five steps into the imaginary. Here, at the outer limit of stability, something impossible exists."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Something here weighs more than everything. It weighs... infinity. Place it on a scale and see where infinity takes you."
            />
          </Card.Text>
          <CenteredContainer>
            <CollectableBlackHole id="singularity-black-hole" />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="The stable islands of the complex plane form a constellation: one plus one i, two plus three i, three minus three i, and here at five plus five i. Beyond these points, reality fractures."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 1, imag: 1}}>Level 1+1i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 0}}>Escape to Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5plus5i;
