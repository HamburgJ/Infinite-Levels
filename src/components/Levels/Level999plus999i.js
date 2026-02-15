import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import VisitedLevelsDisplay from '../UI/VisitedLevelsDisplay';
import { PhaseFragment, AssembledFragments, getPhaseFragmentCount } from '../Items/PhaseFragment';
import { useAchievements } from '../../hooks/useAchievements';

const Level999plus999i = () => {
  const { unlockAchievement } = useAchievements();
  const fragmentCount = getPhaseFragmentCount();

  React.useEffect(() => {
    unlockAchievement('NUMBERSERVATORY');
  }, []);

  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, #0a0a1a, #0a1a2e)', color: 'white' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="999 + 999i — The Numberservatory" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText text="You've reached the deepest charted point in the complex plane. Nine hundred ninety nine steps along the real axis and nine hundred ninety nine steps into the imaginary. The Numberservatory here tracks every level you've ever visited." />
          </Card.Text>

          <Card.Text style={{ fontStyle: 'italic', opacity: 0.8 }}>
            <HighlightableText text="The Cartographer was here. Their notes line the walls — coordinates, stability readings, diagrams of the island network. They mapped everything, and then they kept going." />
          </Card.Text>

          <PhaseFragment fragmentNumber={5} />

          {fragmentCount >= 5 && (
            <>
              <Card.Text style={{ color: '#7fdbca' }}>
                <HighlightableText text="All five Phase Fragments assembled. The Cartographer's complete transmission emerges:" />
              </Card.Text>
              <AssembledFragments />
            </>
          )}

          <VisitedLevelsDisplay />

          <LevelButton targetLevel={{real: 5, imag: 5}}>Return to 5+5i</LevelButton>
          <LevelButton targetLevel={0}>Return to Level 0</LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level999plus999i;