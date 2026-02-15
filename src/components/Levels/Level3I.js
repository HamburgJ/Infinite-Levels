import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  LevelContainer,
  StyledCard,
  CenteredContainer
} from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { Card } from 'react-bootstrap';



const Level3I = () => {
  const complexAngle = 90/360; // 90 degrees for 3i
  return (

      <LevelContainer>
        <StyledCard>
          <Card.Body>
            <Card.Title>
                <HighlightableText text="The imaginary axis is a treacherous journey." size="medium"/>
            </Card.Title>
            <Card.Text>
              <HighlightableText text="And you'll have a hard time getting away from the real number line. Small islands of stability can help, but navigating through unstable levels is a challenge as a collapsing level can spit you out into any direction. Perhaps it would be helpful to figure out a pattern?" />  
            </Card.Text>
            <Card.Text style={{ fontStyle: 'italic', opacity: 0.7 }}>
              <HighlightableText text="Three steps deep. The imaginary axis stretches further — Level 4i, then 5i at the summit. Off the axis, stable islands form a grid. 3+3i lies on the diagonal." />
            </Card.Text>
            <CenteredContainer>      
              <LevelButton 
                targetLevel={0}
              >
                Level 0
              </LevelButton>
              <LevelButton 
                targetLevel={{real: 0, imag: 2}}
              >
                Level 2i
              </LevelButton>
              <LevelButton 
                targetLevel={{real: 0, imag: 4}}
              >
                Level 4i
              </LevelButton>
              <LevelButton
                targetLevel={{real: 3, imag: 3}}
              >
                Level 3+3i
              </LevelButton>
            </CenteredContainer>
          </Card.Body>
        </StyledCard>
      </LevelContainer>
  );
};

export default Level3I; 