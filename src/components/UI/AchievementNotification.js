import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearRecentAchievement, clearRecentAchievementById, clearNewlyOpenableShrine } from '../../store/slices/achievementSlice';
import { setCurrentLevel } from '../../store/slices/gameSlice';
import { parseStoredLevel } from '../../utils/complex';
import { colors, radii, shadows, transitions, fonts } from '../../styles/theme';
import { slideInRight } from '../../styles/animations';

const NotificationContainer = styled.div`
  position: fixed;
  top: ${props => 80 + props.index * 90}px;
  right: 20px;
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.92)' : colors.surface};
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  padding: 0.75rem;
  border-radius: ${radii.lg};
  z-index: 1100;
  animation: ${slideInRight} 0.4s ease-out;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: ${shadows.strong};
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(218, 165, 32, 0.2)'};
  min-width: 280px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: center;
`;

const AchievementEmoji = styled.span`
  font-size: 2em;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.div`
  font-family: ${fonts.mono};
  font-size: 0.7em;
  color: ${props => props.theme === 'dark' ? colors.goldBright : colors.gold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const AchievementName = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: ${props => props.theme === 'dark' ? colors.goldBright : colors.gold};
`;

const Description = styled.div`
  font-size: 0.8em;
  opacity: 0.9;
`;

const ShrineGoButton = styled.button`
  background: ${props => props.theme === 'dark' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.1)'};
  border: 1px solid ${colors.success};
  color: ${props => props.theme === 'dark' ? '#8BC34A' : '#2E7D32'};
  border-radius: ${radii.sm};
  padding: 0.25rem 0.5rem;
  font-family: ${fonts.mono};
  font-size: 0.75em;
  cursor: pointer;
  margin-top: 0.25rem;
  transition: all ${transitions.fast};
  &:hover {
    background: ${props => props.theme === 'dark' ? 'rgba(76, 175, 80, 0.4)' : 'rgba(76, 175, 80, 0.25)'};
    transform: translateY(-1px);
  }
`;

const AchievementNotification = ({ achievement, index }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearRecentAchievementById(achievement.id));
    }, 6000);
    return () => clearTimeout(timer);
  }, [dispatch, achievement.id]);

  return (
    <NotificationContainer theme={theme} index={index}>
      <AchievementEmoji role="img" aria-label={`${achievement.title} emoji`}>
        {achievement.emoji}
      </AchievementEmoji>
      <ContentWrapper>
        <Title theme={theme}>Achievement Unlocked!</Title>
        <AchievementName theme={theme}>{achievement.title}</AchievementName>
        <Description>{achievement.description}</Description>
      </ContentWrapper>
    </NotificationContainer>
  );
};

const AchievementNotifications = () => {
  const dispatch = useDispatch();
  const recentAchievements = useSelector(state => state.achievements.recentAchievements);
  const newlyOpenableShrines = useSelector(state => state.achievements.newlyOpenableShrines || []);
  const visitedShrines = useSelector(state => state.achievements.visitedShrines || {});
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    if (newlyOpenableShrines.length > 0) {
      const timer = setTimeout(() => {
        dispatch(clearNewlyOpenableShrine());
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [newlyOpenableShrines, dispatch]);

  const handleGoToShrine = (level) => {
    const parsed = parseStoredLevel(level);
    dispatch(setCurrentLevel(parsed));
    dispatch(clearNewlyOpenableShrine());
  };

  // Cap visible notifications at 3 to prevent overflow
  const MAX_VISIBLE = 3;
  const visibleAchievements = (recentAchievements || []).slice(0, MAX_VISIBLE);
  const visibleShrines = newlyOpenableShrines.slice(0, Math.max(0, MAX_VISIBLE - visibleAchievements.length));
  const overflowCount = ((recentAchievements?.length || 0) + newlyOpenableShrines.length) - (visibleAchievements.length + visibleShrines.length);

  const totalNotifications = visibleAchievements.length;
  
  if (!recentAchievements?.length && !newlyOpenableShrines?.length) return null;

  return (
    <>
      {visibleAchievements.map((achievement, index) => (
        <AchievementNotification 
          key={achievement.id} 
          achievement={achievement} 
          index={index}
        />
      ))}
      {visibleShrines.map((level, index) => {
        const shrine = visitedShrines[level];
        return (
          <NotificationContainer 
            key={`shrine-${level}`} 
            theme={theme} 
            index={totalNotifications + index}
            style={{ borderColor: '#4CAF50' }}
          >
            <AchievementEmoji role="img" aria-label="shrine unlocked">
              🔓
            </AchievementEmoji>
            <ContentWrapper>
              <Title theme={theme} style={{ color: '#4CAF50' }}>Shrine Unlocked!</Title>
              <AchievementName theme={theme} style={{ color: '#4CAF50' }}>
                Level {level}
              </AchievementName>
              <Description>
                {shrine?.teaserText || 'A shrine is now open for you!'}
              </Description>
              <ShrineGoButton theme={theme} onClick={() => handleGoToShrine(level)}>
                Go to Level {level} →
              </ShrineGoButton>
            </ContentWrapper>
          </NotificationContainer>
        );
      })}
      {overflowCount > 0 && (
        <NotificationContainer
          theme={theme}
          index={totalNotifications + visibleShrines.length}
          style={{ minWidth: 'auto', justifyContent: 'center', padding: '0.5rem 1rem' }}
        >
          <Description style={{ textAlign: 'center', width: '100%' }}>
            +{overflowCount} more…
          </Description>
        </NotificationContainer>
      )}
    </>
  );
};

export default AchievementNotifications; 