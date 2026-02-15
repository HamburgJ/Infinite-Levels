import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const ThresholdTitle = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const BinaryDisplay = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #888;
  text-align: center;
  letter-spacing: 0.15em;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
`;

const ThresholdLevel = ({ level, thresholdTarget, binaryWidth, flavor }) => {
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('OVERFLOW');
  }, [unlockAchievement]);

  const binary = '1'.repeat(binaryWidth);
  const prevThreshold = thresholdTarget / 2 - 1;

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${level}`} size="medium" />
          </Card.Title>

          <ThresholdTitle>
            All ones. Every bit set.
          </ThresholdTitle>

          <BinaryDisplay>
            {binary}
          </BinaryDisplay>

          <Card.Text>
            <HighlightableText
              text={`Every bit set. The maximum before the next power of two — one more and the whole register rolls over.`}
            />
          </Card.Text>

          {flavor && (
            <Card.Text>
              <HighlightableText text={flavor} />
            </Card.Text>
          )}

          <CenteredContainer>
            {prevThreshold > 0 && (
              <LevelButton targetLevel={prevThreshold}>← {prevThreshold}</LevelButton>
            )}
            <LevelButton targetLevel={thresholdTarget}>{thresholdTarget} →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default ThresholdLevel;
