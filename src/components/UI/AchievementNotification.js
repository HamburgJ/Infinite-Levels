import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearRecentAchievement } from '../../store/slices/achievementSlice';

const NotificationContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 
               props.theme === 'complex' ? 'rgba(255, 255, 255, 0.95)' : 
               'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  padding: 1rem;
  border-radius: 8px;
  z-index: 1000;
  animation: slideIn 0.5s ease-out;
  backdrop-filter: blur(10px);
  border: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 
                               props.theme === 'complex' ? 'rgba(0, 0, 255, 0.1)' : 
                               'rgba(0, 0, 0, 0.1)'};
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: ${props => props.theme === 'dark' ? 'gold' : '#DAA520'};
  margin-bottom: 0.5rem;
`;

const AchievementNotification = () => {
  const dispatch = useDispatch();
  const recentAchievement = useSelector(state => state.achievements.recentAchievement);

  useEffect(() => {
    if (recentAchievement) {
      const timer = setTimeout(() => {
        dispatch(clearRecentAchievement());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [recentAchievement, dispatch]);

  if (!recentAchievement) return null;

  return (
    <NotificationContainer>
      <Title>Achievement Unlocked!</Title>
      <div>{recentAchievement.title}</div>
      <div>{recentAchievement.description}</div>
    </NotificationContainer>
  );
};

export default AchievementNotification; 