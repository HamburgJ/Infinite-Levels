import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level6 = () => {
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_6');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Crossroads" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Two paths branch from here. One leads back. The other leads toward something shining."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={5}>← Back the way you came</LevelButton>
            <LevelButton targetLevel={7}>Something shines ahead</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level6; 