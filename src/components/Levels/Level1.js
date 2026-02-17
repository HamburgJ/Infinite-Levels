import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { useAchievements } from '../../hooks/useAchievements';
import styled, { keyframes } from 'styled-components';

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(37, 99, 235, 0.2); }
  50% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.5); }
`;

const NewPathContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.2);
  animation: ${glowPulse} 2.5s ease-in-out infinite;
  text-align: center;
`;

const Level1 = () => {
  const { unlockAchievement } = useAchievements();
  const visitedLevels = useSelector(state => state.game.visitedLevels);
  const hasVisitedLevel3 = visitedLevels.includes('3+0i');

  useEffect(() => {
    if (hasVisitedLevel3) {
      unlockAchievement('PATHFINDER');
    }
  }, [hasVisitedLevel3, unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 1" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Welcome, traveler. Two paths lead onward."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Every journey begins with a choice."
            />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
          </CenteredContainer>

          {hasVisitedLevel3 && (
            <NewPathContainer>
              <Card.Text>
                <HighlightableText text="A new path has appeared..." />
              </Card.Text>
              <CenteredContainer>
                <LevelButton targetLevel={4} variant="primary">Level 4 →</LevelButton>
              </CenteredContainer>
            </NewPathContainer>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1; 