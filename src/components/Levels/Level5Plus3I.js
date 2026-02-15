import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { PhaseFragment } from '../Items/PhaseFragment';

const Level5Plus3I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Frontier" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="The Cartographer's last known position. Their notes end here."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text={'"Day thirty one. This is as far as I go. The Singularity at five plus five i is pulling everything toward it. My compass spins. The levels around it collapse in five seconds, not ten. Something lives there \u2014 something heavy. I\'ve marked the danger zone on my map."'}
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text={'"If you\'re reading this, you\'ve come further than most. The Outpost at five plus one i is below. The Singularity is above. Beyond this point: uncharted."'}
            />
          </Card.Text>
          <PhaseFragment fragmentNumber={4} />
          <CenteredContainer>
            <LevelButton targetLevel={{real: 5, imag: 1}}>↓ Level 5+1i (Outpost)</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 5}}>↑ Level 5+5i (Singularity)</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 3}}>↙ Level 3+3i (Midpoint)</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 5}}>← Level 3+5i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5Plus3I;
