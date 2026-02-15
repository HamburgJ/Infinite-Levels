import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCard from '../Items/CollectableCard';
import { useAchievements } from '../../hooks/useAchievements';

const Level1plus1i = () => {
  const { unlockAchievement } = useAchievements();
  const [rotatorRevealed, setRotatorRevealed] = useState(false);

  // Check if player has enough achievements for the Rotator
  const achievementCount = (() => {
    try {
      const data = JSON.parse(localStorage.getItem('achievements') || '{}');
      return Object.values(data).filter(Boolean).length;
    } catch { return 0; }
  })();

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Heart of Complexity" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Where one meets the imaginary, the heart reveals itself. You've found a stable island in the complex sea. Most complex levels are unstable and will collapse beneath your feet — but here, where both coordinates are small, the ground holds firm."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="A card glimmers in the mathematical mist. The Ace of Hearts — a treasure from the complex plane."
            />
          </Card.Text>
          <CenteredContainer>
            <CollectableCard cardId="ace-hearts" value="A" suit="hearts" />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="From this island, you can see the entire stable network. The diagonal runs through 2+2i and 3+3i toward the Singularity at 5+5i. The Cartographer's Camp is nearby at 2+1i."
            />
          </Card.Text>

          {/* Rotator mechanic — multiplying by i rotates 90° */}
          {achievementCount >= 15 && (
            <>
              <Card.Text style={{ fontStyle: 'italic', color: '#7fdbca' }}>
                <HighlightableText
                  text="A strange device hums at the center of the island. It looks like it could rotate your position by 90 degrees — multiplying by i."
                />
              </Card.Text>
              {!rotatorRevealed ? (
                <CenteredContainer>
                  <Button
                    variant="outline-info"
                    onClick={() => {
                      setRotatorRevealed(true);
                      unlockAchievement('FULL_ROTATION');
                    }}
                  >
                    🔄 Activate Rotator
                  </Button>
                </CenteredContainer>
              ) : (
                <Card.Text style={{ fontStyle: 'italic' }}>
                  <HighlightableText
                    text="The Rotator spins. (1+i) × i = i + i² = i - 1 = -1+i. You can feel the coordinates shifting..."
                  />
                </Card.Text>
              )}
            </>
          )}

          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 1}}>Level i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 0}}>Level 1</LevelButton>
            <LevelButton targetLevel={{real: 2, imag: 1}}>Level 2+i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 2}}>Level 1+2i</LevelButton>
            <LevelButton targetLevel={{real: 2, imag: 2}}>Level 2+2i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 0}}>Level 0</LevelButton>
            {rotatorRevealed && (
              <LevelButton targetLevel={{real: -1, imag: 1}}>Level -1+i (Rotated!)</LevelButton>
            )}
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1plus1i;
