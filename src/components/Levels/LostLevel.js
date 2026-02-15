import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0%, 95% { clip-path: inset(0 0 0 0); }
  96% { clip-path: inset(10% 0 60% 0); }
  97% { clip-path: inset(40% 0 20% 0); }
  98% { clip-path: inset(70% 0 5% 0); }
  99% { clip-path: inset(5% 0 80% 0); }
  100% { clip-path: inset(0 0 0 0); }
`;

const LostCard = styled(StyledCard)`
  border: 1px solid rgba(200, 50, 50, 0.15);
  animation: ${glitch} 8s ease-in-out infinite;
`;

const FragmentText = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #444;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  border-left: 3px solid rgba(200, 50, 50, 0.3);
  margin: 0.75rem 0;
`;

const FragmentCounter = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: #999;
  text-align: right;
  margin-top: 0.5rem;
`;

const CorruptedTitle = styled.span`
  color: #c33;
  opacity: 0.7;
`;

const LOST_LEVELS = [203, 418, 703, 847, 1009];

const LostLevel = ({ level, fragmentNumber, fragmentText, breadcrumbLevel, isTerminal }) => {
  const { unlockAchievement } = useAchievements();
  const visitedLevels = useSelector(state => state.visitedLevels || {});

  useEffect(() => {
    // Check if all 5 lost levels have been visited
    const allVisited = LOST_LEVELS.every(l => visitedLevels[l]);
    if (allVisited) {
      unlockAchievement('LOST_AND_FOUND');
    }

    // Check if visited in order for DETECTIVE
    if (isTerminal) {
      const allPreviousVisited = LOST_LEVELS.slice(0, -1).every(l => visitedLevels[l]);
      if (allPreviousVisited) {
        unlockAchievement('DETECTIVE');
      }
    }
  }, [unlockAchievement, visitedLevels, isTerminal]);

  // Find nearest handcrafted level for the escape button
  const HANDCRAFTED = [0, 100, 150, 200, 233, 256, 365, 404, 500, 610, 987, 999, 1000];
  const nearest = HANDCRAFTED.reduce((best, h) =>
    Math.abs(h - level) < Math.abs(best - level) ? h : best
  , 0);

  return (
    <LevelContainer>
      <LostCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${level}`} size="medium" />
            {' '}
            <CorruptedTitle>— [CONTENT MISSING]</CorruptedTitle>
          </Card.Title>

          <Card.Text style={{ color: '#888', fontSize: '0.85rem' }}>
            <HighlightableText text="This level's content has been displaced. What remains:" />
          </Card.Text>

          <FragmentText>
            <HighlightableText text={fragmentText} />
          </FragmentText>

          <FragmentCounter>
            [Fragment {fragmentNumber}/5]
          </FragmentCounter>

          <CenteredContainer>
            {!isTerminal && breadcrumbLevel && (
              <LevelButton targetLevel={breadcrumbLevel}>Follow the trail →</LevelButton>
            )}
            <LevelButton targetLevel={nearest}>← Level {nearest}</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </LostCard>
    </LevelContainer>
  );
};

export default LostLevel;
