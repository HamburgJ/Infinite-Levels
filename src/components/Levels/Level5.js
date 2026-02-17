import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import AchievementShrine from '../UI/AchievementShrine';
import { showSpotlight } from '../../store/slices/tutorialSlice';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HintText = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
  color: ${({ theme }) => theme?.colors?.textSecondary || '#666'};
  font-style: italic;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  text-align: center;
`;

const Level5 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const completedSteps = useSelector(s => s.tutorial?.completedSteps || []);
  const [showHint, setShowHint] = useState(false);
  const [showBypass, setShowBypass] = useState(false);

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

  // Progressive hints for the shrine gate (resilient to app backgrounding)
  useEffect(() => {
    const mountTime = Date.now();
    const checkElapsed = () => {
      const elapsed = Date.now() - mountTime;
      if (elapsed >= 20000) setShowHint(true);
      if (elapsed >= 60000) setShowBypass(true);
    };
    const hintTimer = setTimeout(() => setShowHint(true), 20000);
    const bypassTimer = setTimeout(() => setShowBypass(true), 60000);
    document.addEventListener('visibilitychange', checkElapsed);
    return () => {
      clearTimeout(hintTimer);
      clearTimeout(bypassTimer);
      document.removeEventListener('visibilitychange', checkElapsed);
    };
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The First Shrine" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="A shrine blocks the way. It opens when you've earned enough achievements."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={4}>Back to Level 4</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <AchievementShrine requiredCount={2} shrineLevel="5" teaserText="The shrine needs 2 achievements to open.">
              <HighlightableText text="The shrine opens! The path continues." />
              <CenteredContainer>
                <LevelButton targetLevel={6}>Level 6</LevelButton>
              </CenteredContainer>
            </AchievementShrine>
          </CenteredContainer>
          {showHint && (
            <HintText>
              Check your achievements — you may already have enough. Look for the 🏆 icon above.
            </HintText>
          )}
          {showBypass && (
            <CenteredContainer style={{ marginTop: '1rem' }}>
              <LevelButton targetLevel={6}>Slip past the shrine →</LevelButton>
            </CenteredContainer>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5; 