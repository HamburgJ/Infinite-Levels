import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { PhaseFragment } from '../Items/PhaseFragment';

const Level5Plus1I = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Outpost" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="The furthest outpost along the real coast. Five steps along the real axis, one step into the imaginary. The real number line is right below you — you could almost step back onto it. Level five is directly south."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="But you came this far for a reason. The Singularity at five plus five i is four steps north. The Frontier at five plus three i is two steps closer. And behind you, the interior of the Bright Plane is dotted with islands."
            />
          </Card.Text>
          <PhaseFragment fragmentNumber={3} />
          <CenteredContainer>
            <LevelButton targetLevel={{real: 3, imag: 1}}>← Level 3+1i (Archive)</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 3}}>↑ Level 5+3i (Frontier)</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 5}}>↑↑ Level 5+5i</LevelButton>
            <LevelButton targetLevel={5}>↓ Level 5</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5Plus1I;
