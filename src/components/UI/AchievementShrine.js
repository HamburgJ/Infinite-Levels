import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import allAchievements from '../../data/achievements';
import LevelButton from './LevelButton';
import debugConfig from '../../config/debug';
import { recordShrineVisit, markShrineOpened } from '../../store/slices/achievementSlice';
import { colors, radii, shadows, transitions } from '../../styles/theme';

const ShrineContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`;

const StyledCard = styled(Card)`
  background: ${colors.surface};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 2px solid ${colors.border};
  border-radius: ${radii.lg};
  box-shadow: ${shadows.medium};
  transition: all 0.3s ease;
  
  ${props => props.isMaxShrine && `
    background: rgba(70, 0, 70, 0.08);
    border: 2px solid purple;
    box-shadow: 0 0 20px rgba(128, 0, 128, 0.1);
  `}
  
  ${props => props.isComplete && !props.isMaxShrine && `
    background: ${colors.goldSubtle};
    border-color: ${colors.goldBright};
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.15);
  `}

  ${props => props.isOverLimit && `
    background: ${colors.dangerSubtle};
    border-color: ${colors.danger};
  `}
`;

const ShrineSymbol = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: color ${transitions.normal};
  color: ${props => {
    if (props.isMaxShrine) return 'purple';
    if (props.isOverLimit) return colors.danger;
    if (props.isComplete) return colors.goldBright;
    return colors.textDim;
  }};
`;

const ProgressText = styled.div`
  color: ${props => props.isOverLimit ? colors.danger : 'inherit'};
  font-weight: ${props => props.isOverLimit ? 'bold' : 'normal'};
`;

const AchievementShrine = ({ 
  requiredCount = null,
  maximumCount = null,
  stayOpen = false,
  children,
  teaserText = null,
  shrineLevel = null,
  overLimitMessage = "Too many achievements! You must prestige to access this content."
}) => {
  const dispatch = useDispatch();
  const unlockedAchievements = useSelector(state => state.achievements.achievements);
  const currentLevel = useSelector(state => state.game.currentLevel);
  const achievementCount = Object.keys(unlockedAchievements).length;
  const [lockedOpen, setLockedOpen] = useState(false);
  
  const isMaxShrine = maximumCount !== null;
  const isOverLimit = isMaxShrine && achievementCount > maximumCount;
  const hasRequiredAchievements = !isMaxShrine && (
    debugConfig.isDebugMode && debugConfig.debugFeatures.unlockAllShrines ? 
    true : achievementCount >= requiredCount
  );
  
  const currentlyAccessible = isMaxShrine ? !isOverLimit : hasRequiredAchievements;

  // Once opened, lock the shrine open if stayOpen is true
  useEffect(() => {
    if (stayOpen && currentlyAccessible && !lockedOpen) {
      setLockedOpen(true);
    }
  }, [stayOpen, currentlyAccessible, lockedOpen]);

  // Track shrine visits when locked (for Sealed Chambers)
  useEffect(() => {
    if (!isMaxShrine && requiredCount && !hasRequiredAchievements) {
      const level = shrineLevel || currentLevel;
      dispatch(recordShrineVisit({ 
        level: typeof level === 'object' ? `${level.real}${level.imag >= 0 ? '+' : ''}${level.imag}i` : String(level),
        requiredCount,
        teaserText 
      }));
    }
  }, [isMaxShrine, requiredCount, hasRequiredAchievements, shrineLevel, currentLevel, teaserText, dispatch]);

  // Mark shrine as opened when it becomes accessible
  useEffect(() => {
    if (!isMaxShrine && hasRequiredAchievements && requiredCount) {
      const level = shrineLevel || currentLevel;
      const levelStr = typeof level === 'object' ? `${level.real}${level.imag >= 0 ? '+' : ''}${level.imag}i` : String(level);
      dispatch(markShrineOpened(levelStr));
    }
  }, [isMaxShrine, hasRequiredAchievements, requiredCount, shrineLevel, currentLevel, dispatch]);

  const isAccessible = lockedOpen || currentlyAccessible;

  return (
    <ShrineContainer>
      <StyledCard isComplete={isAccessible} isOverLimit={isOverLimit} isMaxShrine={isMaxShrine}>
        <Card.Body>
          <ShrineSymbol 
            isComplete={isAccessible} 
            isOverLimit={isOverLimit}
            isMaxShrine={isMaxShrine}
          >
            {isMaxShrine ? '🔮' : (isAccessible ? '🔓' : '🔒')}
          </ShrineSymbol>
          
          <Card.Title>
            {isMaxShrine ? 'Prestige Shrine' : 'Achievement Shrine'}
          </Card.Title>
          
          <ProgressText isOverLimit={isOverLimit}>
            {isMaxShrine ? (
              <>Current: {achievementCount} / Maximum: {maximumCount}</>
            ) : (
              <>Progress: {achievementCount} / {requiredCount}</>
            )}
          </ProgressText>
          
          {isMaxShrine ? (
            isOverLimit ? (
              <Card.Text className="text-danger">
                {overLimitMessage}
              </Card.Text>
            ) : (
              <Card.Text>
                {children}
              </Card.Text>
            )
          ) : (
            !hasRequiredAchievements ? (
              <Card.Text>
                {teaserText ? (
                  <><em>{teaserText}</em><br /><br />Need {requiredCount} achievements. You have {achievementCount}.</>
                ) : (
                  <>Return when you have unlocked at least {requiredCount} achievements...</>
                )}
              </Card.Text>
            ) : (
              <Card.Text>
                {children}
              </Card.Text>
            )
          )}
        </Card.Body>
      </StyledCard>
    </ShrineContainer>
  );
};

export default AchievementShrine;