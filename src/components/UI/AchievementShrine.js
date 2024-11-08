import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import allAchievements from '../../data/achievements';
import LevelButton from './LevelButton';

const ShrineContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${props => props.isComplete && `
    background: rgba(255, 215, 0, 0.1);
    border-color: gold;
  `}
`;

const ShrineSymbol = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  color: ${props => props.isComplete ? 'gold' : '#666'};
`;

const SecretContent = styled.div`
  max-height: ${props => props.show ? '500px' : '0'};
  opacity: ${props => props.show ? '1' : '0'};
  overflow: hidden;
  transition: all 0.5s ease;
`;

const AchievementShrine = ({ requiredCount = 5, children }) => {
  const unlockedAchievements = useSelector(state => state.achievements.achievements);
  const achievementCount = Object.keys(unlockedAchievements).length;
  const totalAchievements = Object.keys(allAchievements).length;
  const hasRequiredAchievements = achievementCount >= requiredCount;
  const hasAllAchievements = achievementCount === totalAchievements;

  return (
    <ShrineContainer>
      <StyledCard isComplete={hasAllAchievements}>
        <Card.Body>
          <ShrineSymbol isComplete={hasRequiredAchievements}>
            {hasRequiredAchievements ? '🔓' : '🔒'}
          </ShrineSymbol>
          
          <Card.Title>Achievement Shrine</Card.Title>
          <Card.Title>{hasRequiredAchievements ? "UNLOCKED" : "LOCKED"} {achievementCount}/{requiredCount}</Card.Title>
          
          {!hasRequiredAchievements ? (
            <Card.Text>
              Return when you have unlocked at least {requiredCount} achievements...
            </Card.Text>
            ) : (
                <Card.Text>
                  {children}
                </Card.Text>
            )}
        </Card.Body>
      </StyledCard>
    </ShrineContainer>
  );
};

export default AchievementShrine; 