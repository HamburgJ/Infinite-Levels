import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';

const Level37 = () => {
  const { unlockAchievements } = useAchievements();

  React.useEffect(() => {
    unlockAchievements(['CURIOUS_MIND']);
  }, [unlockAchievements]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Most Random Number" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="When people are asked to pick a 'random' number between one and one hundred, they pick thirty-seven more than any other. Psychologists aren't sure why. It just FEELS random." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="But you didn't pick randomly. You came here on purpose. That makes you the opposite of random — you're curious." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="If thirty-seven is the most 'random' number, what's the most deliberate? Some say forty-two — the answer to everything. Others say seventy-three, thirty-seven's mirror. Both are prime. Both are chosen." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={42}>The Answer</LevelButton>
            <LevelButton targetLevel={30}>Back to Outpost</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level37;
