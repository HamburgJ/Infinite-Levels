import React, { useEffect } from 'react';
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
  // Track unit circle visits
  useEffect(() => {
    try {
      const visits = JSON.parse(localStorage.getItem('unitCircleVisits') || '{}');
      visits['i'] = true;
      localStorage.setItem('unitCircleVisits', JSON.stringify(visits));
    } catch (e) {}
  }, []);

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
            <Card.Text>
              <HighlightableText text="The complex plane is vast and unstable. But some coordinates — where both parts are small whole numbers — form islands of calm. Try navigating to one plus one i." />
            </Card.Text>
            <Card.Text style={{ fontStyle: 'italic', opacity: 0.7 }}>
              <HighlightableText text="You stand at i — the first point on the unit circle. One step sideways from reality. The circle connects four points: 1, i, -1, -i. Each is a 90° rotation of the last." />
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
              <LevelButton
                targetLevel={{real: 0, imag: -1}}
              >
                Level -i
              </LevelButton>
              <LevelButton
                targetLevel={{real: 1, imag: 1}}
              >
                Level 1+1i
              </LevelButton>
            </CenteredContainer>
          </Card.Body>
        </StyledCard>
      </LevelContainer>
  );
};

export default LevelI; 