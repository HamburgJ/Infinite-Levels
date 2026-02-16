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
              text="Every path leads somewhere different."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={3}>Level 3</LevelButton>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={7}>Level 7</LevelButton>
            <LevelButton targetLevel={8}>Level 8</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level6; 