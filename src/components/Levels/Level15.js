import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import LevelButton from '../UI/LevelButton';
import { handleLevelCollapse, UnstableText } from '../../utils/levelCollapse';
import { useAchievements } from '../../hooks/useAchievements';
import achievements from '../../data/achievements';


const Level15 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const [stability, setStability] = useState(100);
  const [isWarning, setIsWarning] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleCollapse = React.useCallback(() => {
    handleLevelCollapse(dispatch, { real: 15, imag: 0 }, setIsFading);
  }, [dispatch]);

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
    }, 100);

    return () => clearInterval(timer);
  }, [dispatch, handleCollapse]);

  return (
    <LevelContainer>
      <StyledCard fading={isFading}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 15 - Instability" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Warning: This level is becoming unstable!" />
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

          <Card.Text>
            <HighlightableText text="Quick! Try to escape to a stable level before this level collapses!" />
          </Card.Text>

        
              {[...Array(21)].map((_, index) => (
                <CenteredContainer>
                <LevelButton 
                  key={index} 
                  targetLevel={index} 
                  variant="warning"
                  style={{ margin: '0.25rem' }}
                >
                  Jump to Level {index}!!
                </LevelButton>
                </CenteredContainer>
              ))}
          
         
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level15; 