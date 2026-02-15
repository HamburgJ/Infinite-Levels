import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';

const Level123 = () => {
  const { unlockAchievements } = useAchievements();

  React.useEffect(() => {
    unlockAchievements(['CURIOUS_MIND']);
  }, [unlockAchievements]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="One, Two, Three" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="You typed it, didn't you? One two three. The most obvious sequence. Everyone tries it." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The reward for being curious: you're here. That's enough. Curiosity is its own destination." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="But since you like sequences... try one thousand two hundred thirty-four. Or one two three four five. The number line rewards the curious." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={100}>← One Hundred</LevelButton>
            <LevelButton targetLevel={200}>Two Hundred →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level123;
