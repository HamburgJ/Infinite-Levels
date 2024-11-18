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



const LevelI = () => {
  const complexAngle = 90/360; // 90 degrees for i
  return (

      <LevelContainer>
        <StyledCard>
          <Card.Body>
            <Card.Title>
                <HighlightableText text="Reach into the abyss..." size="medium"/>
            </Card.Title>
            <Card.Text>
              <HighlightableText text="..and the abyss reaches back. Welcome to the complex plane. But beware, for complex levels tend to be unstable, and may collapse at any time! Not up for that? Just return to the real number line." />  
            </Card.Text>
            <CenteredContainer>      
              <LevelButton 
                targetLevel={0}

              >
                Level 0
              </LevelButton>
              <LevelButton 
                targetLevel={{
                  real: 0,
                  imag: 2
                }}
     
              >
                    Level 2i
              </LevelButton>
            </CenteredContainer>
          </Card.Body>
        </StyledCard>
      </LevelContainer>
  );
};

export default LevelI; 