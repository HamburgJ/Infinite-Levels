import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { showSpotlight } from '../../store/slices/tutorialSlice';

const Level5 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const completedSteps = useSelector(s => s.tutorial?.completedSteps || []);

  useEffect(() => {
    unlockAchievement('LEVEL_5');
  }, [unlockAchievement]);

  // Spotlight the trophy/journal icon after the achievement toast appears
  useEffect(() => {
    if (!completedSteps.includes('journal-icon')) {
      const timer = setTimeout(() => {
        dispatch(showSpotlight({
          id: 'journal-icon',
          target: 'journal-icon',
          message: 'You earned an achievement! Open your Journal to see all your discoveries and track progress.',
          emoji: '🏆',
          placement: 'below',
        }));
      }, 2500); // wait for the achievement toast to show first
      return () => clearTimeout(timer);
    }
  }, [dispatch, completedSteps]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 5" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Achievements unlock things. Some levels are sealed until you've earned enough."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
            <LevelButton targetLevel={6}>Level 6</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5; 