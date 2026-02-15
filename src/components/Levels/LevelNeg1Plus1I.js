import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';

const LevelNeg1Plus1I = () => {
  const { unlockAchievement } = useAchievements();

  React.useEffect(() => {
    unlockAchievement('QUADRANT_EXPLORER'); // visiting Q2 contributes to this
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, rgba(30, 30, 40, 0.9), rgba(20, 20, 35, 0.9))', color: '#b0b0c8' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Mirror Coast" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Welcome to the second quadrant. The Mirror Coast. Everything here is a reflection of the Bright Plane, flipped across the imaginary axis. One plus one i becomes negative one plus one i. The same distance from the origin, but on the wrong side."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="The reflections here are... unsettled. The text on unstable levels in this quadrant is mirrored, the navigation reversed. What was east is now west. What was familiar is now strange."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="You reached this place by multiplying one plus one i by i. Rotation. The complex plane's deepest secret: multiplication by i is a quarter-turn counterclockwise. That's not a metaphor. It's geometry."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 1, imag: 1}}>→ Level 1+1i (cross back)</LevelButton>
            <LevelButton targetLevel={{real: -1, imag: -1}}>↓ Level -1-1i (The Deep)</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 1}}>→ Level i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelNeg1Plus1I;
