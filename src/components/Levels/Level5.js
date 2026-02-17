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
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [dispatch, completedSteps]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Milestone" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Five levels in, and you're already exploring. You've earned achievements along the way — check your Journal to see them."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="The path continues. Later, you may find shrines that only open when you've earned enough achievements. For now, the way is clear."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={4}>Back to Level 4</LevelButton>
            <LevelButton targetLevel={6}>Level 6 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5; 