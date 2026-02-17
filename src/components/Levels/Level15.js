import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { markMechanicDiscovered } from '../../store';
import { Card, ProgressBar, Button } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import LevelButton from '../UI/LevelButton';
import { handleLevelCollapse, UnstableText } from '../../utils/levelCollapse';
import { useAchievements } from '../../hooks/useAchievements';
import styled from 'styled-components';

const ExitOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  margin: 0.4rem 0;
  border-radius: 8px;
  border: 1px solid ${props => props.$safe ? 'rgba(40, 167, 69, 0.3)' : props.$danger ? 'rgba(220, 53, 69, 0.3)' : 'rgba(255, 193, 7, 0.3)'};
  background: ${props => props.$safe ? 'rgba(40, 167, 69, 0.05)' : props.$danger ? 'rgba(220, 53, 69, 0.05)' : 'rgba(255, 193, 7, 0.05)'};
`;

const CostLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${props => props.$safe ? '#28a745' : props.$danger ? '#dc3545' : '#ffc107'};
`;

const Level15 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const [stability, setStability] = useState(100);
  const [isWarning, setIsWarning] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const exits = [
    { level: 10, label: 'Level 10', cost: 0, costText: 'FREE — Safe exit', safe: true },
    { level: 14, label: 'Level 14', cost: 25, costText: '−25 Stability', danger: false },
    { level: 16, label: 'Level 16', cost: 50, costText: '−50 Stability ⚠️', danger: true },
  ];

  const handleExitAttempt = useCallback((exit) => {
    if (exit.cost > 0) {
      setStability(prev => {
        const newVal = prev - exit.cost;
        if (newVal <= 0) {
          handleLevelCollapse(dispatch, { real: 15, imag: 0 }, setIsFading);
          unlockAchievement('COLLAPSE');
          return 0;
        }
        return newVal;
      });
    }
    // The LevelButton handles actual navigation
  }, [dispatch, unlockAchievement]);

  useEffect(() => {
    dispatch(markMechanicDiscovered('instability'));
    
    const timer = setInterval(() => {
      setStability(prev => {
        const newStability = prev - 1;
        if (newStability <= 20) setIsWarning(true);
        if (newStability <= 0) {
          clearInterval(timer);
          handleLevelCollapse(dispatch, { real: 15, imag: 0 }, setIsFading);
          unlockAchievement('COLLAPSE');
        }
        return Math.max(0, newStability);
      });
    }, 300);

    return () => clearInterval(timer);
  }, [dispatch, unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard fading={isFading}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 15 - Instability" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Warning: This level is becoming unstable! Each exit has a stability cost. Choose wisely — the wrong door will drain what's left." />
          </Card.Text>

          <ProgressBar 
            now={stability} 
            variant={stability <= 20 ? "danger" : "info"}
            label={`Stability: ${stability}%`}
          />

          <UnstableText isWarning={isWarning}>
            <HighlightableText 
              text={isWarning ? "CRITICAL: LEVEL COLLAPSE IMMINENT" : "Status: Unstable"}
            />
          </UnstableText>

          {exits.map((exit) => (
            <ExitOption key={exit.level} $safe={exit.safe} $danger={exit.danger}>
              <LevelButton 
                targetLevel={exit.level} 
                variant={exit.safe ? "success" : exit.danger ? "danger" : "warning"}
                style={{ margin: '0' }}
                onClick={() => handleExitAttempt(exit)}
              >
                {exit.label}
              </LevelButton>
              <CostLabel $safe={exit.safe} $danger={exit.danger}>
                {exit.costText}
              </CostLabel>
            </ExitOption>
          ))}
          
         
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level15; 