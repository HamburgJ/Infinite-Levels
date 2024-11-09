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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
  padding: 0.2rem;
  max-height: 70vh;
  overflow-y: auto;
`;

const AchievementItem = styled.div`
  padding: 0.5rem;
  background: ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 215, 0, 0.1)';
    }
    if (props.secret) {
      return props.theme === 'dark' ? 'rgba(128, 128, 128, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    }
    return props.theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
  }};
  border-radius: 8px;
  opacity: ${props => props.unlocked ? 1 : props.secret ? 0.5 : 0.8};
  transition: all 0.3s ease;
  border: 2px solid ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(218, 165, 32, 0.3)';
    }
    return 'transparent';
  }};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.1rem;
  align-items: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

const AchievementEmoji = styled.span`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 0.85em;
  color: ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? 'gold' : '#DAA520';
    }
    if (props.secret) {
      return props.theme === 'dark' ? '#444' : '#999';
    }
    return props.theme === 'dark' ? '#666' : '#666';
  }};
`;

const Description = styled.div`
  font-size: 0.75em;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  opacity: ${props => props.secret ? 0.5 : 0.9};
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
    
    // Check if achievement should be revealed
    const shouldReveal = !isSecret || isUnlocked || (
      achievement.revealAfter && 
      achievement.revealAfter.every(reqId => unlockedAchievements[reqId])
    );

    return (
      <AchievementItem 
        key={achievement.id} 
        unlocked={isUnlocked} 
        secret={isSecret && !shouldReveal}
        theme={theme}
      >
        <AchievementEmoji>
          {isUnlocked ? achievement.emoji : !shouldReveal ? <FaLock /> : <FaQuestionCircle />}
        </AchievementEmoji>
        <ContentWrapper>
          <Title 
            unlocked={isUnlocked} 
            secret={isSecret && !shouldReveal}
            theme={theme}
          >
            {isUnlocked ? (
              <HighlightableText text={achievement.title} />
            ) : !shouldReveal ? (
              "Secret Achievement"
            ) : (
              achievement.title
            )}
          </Title>
          <Description secret={isSecret && !shouldReveal} theme={theme}>
            {isUnlocked ? (
              <HighlightableText text={achievement.description} />
            ) : !shouldReveal ? (
              "???"
            ) : (
              achievement.description
            )}
          </Description>
        </ContentWrapper>
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