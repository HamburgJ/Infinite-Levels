import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearRecentAchievement } from '../../store/slices/achievementSlice';

const NotificationContainer = styled.div`
  position: fixed;
  top: ${props => 80 + props.index * 90}px;
  right: 20px;
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  padding: 0.75rem;
  border-radius: 8px;
  z-index: 1000;
  animation: slideIn 0.5s ease-out;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(218, 165, 32, 0.3)'};
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
  font-size: 0.75em;
  color: ${props => props.theme === 'dark' ? 'gold' : '#DAA520'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AchievementName = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: ${props => props.theme === 'dark' ? '#FFD700' : '#B8860B'};
`;

const Description = styled.div`
  font-size: 0.8em;
  opacity: 0.9;
`;

const AchievementNotification = ({ achievement, index }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearRecentAchievement());
    }, 6000);
    return () => clearTimeout(timer);
  }, [dispatch]);

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
  const recentAchievements = useSelector(state => state.achievements.recentAchievements);
  
  if (!recentAchievements?.length) return null;

  return (
    <>
      {recentAchievements.map((achievement, index) => (
        <AchievementNotification 
          key={achievement.id} 
          achievement={achievement} 
          index={index}
        />
      ))}
    </>
  );
};

export default AchievementNotifications; 