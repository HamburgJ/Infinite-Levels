import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';

const LevelNeg1Neg1I = () => {
  const { unlockAchievement } = useAchievements();

  React.useEffect(() => {
    unlockAchievement('DEEP_DIVER');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, rgba(10, 5, 20, 0.95), rgba(5, 0, 15, 0.95))', color: '#7070a0' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Deep" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Quadrant three. The Deep. Both coordinates are negative — negative real, negative imaginary. This is the furthest you can get from the Bright Plane without crossing infinity."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="The darkness is thicker here. The complex plane's version of Level thirteen — not horror, but absence. The feeling of being somewhere that doesn't want to be found."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Unstable levels in the Deep collapse faster. Seven seconds instead of ten. The complex plane wants you gone. But you came here anyway. That says something about you."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="One more rotation and you'll be in quadrant four — the Undertow. Or you could go back the way you came. The Mirror Coast is one rotation behind you. The Bright Plane is two."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: -1, imag: 1}}>↑ Level -1+1i (Mirror Coast)</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: -1}}>→ Level 1-1i (Undertow)</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 1}}>↗ Level 1+1i (Bright Plane)</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelNeg1Neg1I;
