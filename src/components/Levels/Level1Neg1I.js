import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';

const Level1Neg1I = () => {
  const { unlockAchievement } = useAchievements();

  React.useEffect(() => {
    unlockAchievement('QUADRANT_EXPLORER'); // visiting Q4 contributes to this
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, rgba(15, 25, 45, 0.95), rgba(10, 15, 35, 0.95))', color: '#8090b8' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Undertow" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Quadrant four. The Undertow. Positive real, negative imaginary. You've rotated three-quarters of the way around the unit circle. One more step and you'll be back where you started."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="The Undertow pulls downward. It's the complex plane's basement — close to reality (positive real numbers are just overhead), but dragged beneath the surface by the negative imaginary component."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Multiplying by i one more time brings you back to one plus one i — the Bright Plane. The full rotation is complete: the Bright Plane, the Mirror Coast, the Deep, and now the Undertow. Four quadrants. Four perspectives. One circle."
            />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.7 }}>
            <HighlightableText 
              text="Currents run strong here. Some explorers report finding fragments in the undertow — pieces of levels that collapsed above and sank to the bottom of the plane."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 1, imag: 1}}>↑ Level 1+1i (Bright Plane)</LevelButton>
            <LevelButton targetLevel={{real: -1, imag: -1}}>← Level -1-1i (The Deep)</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: -1}}>← Level -i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1Neg1I;
