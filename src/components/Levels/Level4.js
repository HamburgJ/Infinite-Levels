import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { showSpotlight } from '../../store/slices/tutorialSlice';

const Level4 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const completedSteps = useSelector(s => s.tutorial?.completedSteps || []);

  useEffect(() => {
    unlockAchievement('PIONEER');
  }, [unlockAchievement]);

  useEffect(() => {
    if (!completedSteps.includes('journal-icon')) {
      const timer = setTimeout(() => {
        dispatch(showSpotlight({
          id: 'journal-icon',
          target: 'journal-icon',
          message: 'You earned an achievement! Tap here to see your progress.',
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
            <HighlightableText text="A New Path" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="A hidden path brought you here. Something was watching — and it noticed. Check your Journal."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Back to Level 1</LevelButton>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4; 