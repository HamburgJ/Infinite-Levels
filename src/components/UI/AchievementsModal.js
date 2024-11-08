import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { FaQuestionCircle, FaLock } from 'react-icons/fa';
import { markAchievementsSeen } from '../../store/slices/achievementSlice';
import allAchievements from '../../data/achievements';
import HighlightableText from './HighlightableText';
import BaseModal from './BaseModal';

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const AchievementItem = styled.div`
  padding: 1rem;
  background: ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 215, 0, 0.1)';
    }
    if (props.secret) {
      return props.theme === 'dark' ? 'rgba(128, 128, 128, 0.05)' : 'rgba(0, 0, 0, 0.03)';
    }
    return props.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  }};
  border-radius: 4px;
  opacity: ${props => props.unlocked ? 1 : props.secret ? 0.5 : 0.8};
`;

const Title = styled.div`
  font-weight: bold;
  color: ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? 'gold' : '#DAA520';
    }
    if (props.secret) {
      return props.theme === 'dark' ? '#444' : '#999';
    }
    return props.theme === 'dark' ? '#666' : '#666';
  }};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 0.9rem;
  color: ${props => props.secret ? (props.theme === 'dark' ? '#444' : '#999') : 'inherit'};
`;

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  }
`;

const AchievementsModal = ({ show, onHide, theme = 'light' }) => {
  const dispatch = useDispatch();
  const unlockedAchievements = useSelector(state => state.achievements.achievements);

  React.useEffect(() => {
    if (show) {
      dispatch(markAchievementsSeen());
    }
  }, [show, dispatch]);

  const sortAchievements = (achievements) => {
    return Object.values(achievements).sort((a, b) => {
      // First priority: Unlocked status
      const aUnlocked = unlockedAchievements[a.id];
      const bUnlocked = unlockedAchievements[b.id];
      if (aUnlocked !== bUnlocked) {
        return bUnlocked ? 1 : -1;
      }

      // Second priority: Secret status
      if (a.secret !== b.secret) {
        return a.secret ? 1 : -1;
      }

      // Third priority: Original order (using array index in original object)
      const achievementArray = Object.values(allAchievements);
      return achievementArray.indexOf(a) - achievementArray.indexOf(b);
    });
  };

  const renderAchievement = (achievement) => {
    const isUnlocked = unlockedAchievements[achievement.id];
    const isSecret = achievement.secret;

    return (
      <AchievementItem 
        key={achievement.id} 
        unlocked={isUnlocked} 
        secret={isSecret && !isUnlocked}
        theme={theme}
      >
        <Title 
          unlocked={isUnlocked} 
          secret={isSecret && !isUnlocked}
          theme={theme}
        >
          {isUnlocked ? (
            <HighlightableText text={achievement.title} />
          ) : isSecret ? (
            <>
              <FaLock /> 
              Secret Achievement
            </>
          ) : (
            <>
              <FaQuestionCircle /> 
              {achievement.title}
            </>
          )}
        </Title>
        <Description secret={isSecret && !isUnlocked} theme={theme}>
          {isUnlocked ? (
            <HighlightableText text={achievement.description} />
          ) : isSecret ? (
            "???"
          ) : (
            achievement.description
          )}
        </Description>
      </AchievementItem>
    );
  };

  return (
    <StyledModal show={show} onHide={onHide} size="lg" theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>Achievements</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AchievementGrid>
          {sortAchievements(allAchievements).map(renderAchievement)}
        </AchievementGrid>
      </Modal.Body>
    </StyledModal>
  );
};

export default AchievementsModal;