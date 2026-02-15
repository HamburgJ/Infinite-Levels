import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableBlackHole from '../Items/CollectableBlackHole';
import { useAchievements } from '../../hooks/useAchievements';

const Level5plus5i = () => {
  const { unlockAchievement } = useAchievements();

  // Unlock singularity achievement on visit
  React.useEffect(() => {
    unlockAchievement('SINGULARITY');
  }, []);

  return (
    <LevelContainer>
      <StyledCard style={{ background: 'linear-gradient(135deg, #0a0a2e, #1a0a3e)', color: 'white' }}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Singularity" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="At the far edge of the stable complex plane, gravity bends. You've traveled five steps along the real axis and five steps into the imaginary. Here, at the outer limit of stability, something impossible exists."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Something here weighs more than everything. It weighs... infinity. Place it on a scale and see where infinity takes you."
            />
          </Card.Text>
          <CenteredContainer>
            <CollectableBlackHole id="singularity-black-hole" />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="The Singularity warps nearby space. Unstable levels near 5+5i collapse faster, their structures unable to withstand the gravitational pull. The island network trembles — but holds."
            />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.6 }}>
            <HighlightableText 
              text="Beyond the stable network, a signal echoes from impossibly deep in the complex plane. 999+999i. The Numberservatory. You'd need to cross hundreds of unstable levels to reach it... or find another way."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 3, imag: 5}}>Level 3+5i</LevelButton>
            <LevelButton targetLevel={{real: 5, imag: 3}}>Level 5+3i</LevelButton>
            <LevelButton targetLevel={{real: 3, imag: 3}}>Level 3+3i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 1}}>Level 1+1i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 0}}>Escape to Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5plus5i;
