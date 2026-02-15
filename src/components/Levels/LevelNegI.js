import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';

const LevelNegI = () => {
  const { unlockAchievement } = useAchievements();

  React.useEffect(() => {
    // Check for full rotation achievement
    const visited = JSON.parse(localStorage.getItem('unitCircleVisits') || '{}');
    visited['-i'] = true;
    localStorage.setItem('unitCircleVisits', JSON.stringify(visited));
    if (visited['1'] && visited['i'] && visited['-1'] && visited['-i']) {
      unlockAchievement('FULL_ROTATION');
    }
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, rgba(20, 40, 30, 0.9), rgba(10, 30, 20, 0.9))', color: '#a8c8b8' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Negative i" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="The shadow of i. One quarter-turn below the real axis. Most players arrive at i and never think to look DOWN. But the complex plane extends in every direction. Negative i is proof."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="You're standing on the fourth root of unity. One times i is i. i times i is negative one. Negative one times i is negative i. Negative i times i is... one. The circle closes. Multiply by i four times and you're back where you started."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="This is quadrant four — the Undertow. Things pull downward here. The imaginary component is negative, and it drags. The stable islands exist in mirror below the real axis, but they feel heavier. Harder to leave."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 1}}>↑ Level i (conjugate)</LevelButton>
            <LevelButton targetLevel={-1}>← Level -1 (rotate by i)</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: -1}}>→ Level 1-1i</LevelButton>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelNegI;
