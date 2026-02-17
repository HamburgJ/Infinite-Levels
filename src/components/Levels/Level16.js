import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import Scale from '../Storage/Scale';

const Level16 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <CenteredContainer>
            <Card.Title>
              <HighlightableText text="WARNING LOW STABILITY DETECTED NEARBY" size="medium"/>
            </Card.Title>
          </CenteredContainer>

          <CenteredContainer>
            <Card.Text>
              <HighlightableText text=
        
                  "Something went wrong on a nearby level. The instability is leaking outward — you can almost feel it humming through the walls. The best thing you can do right now is keep moving. Level seventeen is safe."
              
              />
            </Card.Text>
          </CenteredContainer>

          <CenteredContainer>
            <Card.Text>
              <HighlightableText text="But first — a precision scale. Place any item on it. The weight itself becomes a destination." />
            </Card.Text>
          </CenteredContainer>
          <CenteredContainer>
            <Scale />
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level16;