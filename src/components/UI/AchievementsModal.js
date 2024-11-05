import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
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
  background: ${props => props.theme === 'dark' ? 
    (props.unlocked ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)') :
    (props.unlocked ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
  border-radius: 4px;
  opacity: ${props => props.unlocked ? 1 : 0.7};
`;

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: ${props => props.unlocked ? 
    (props.theme === 'dark' ? 'gold' : '#DAA520') : 
    (props.theme === 'dark' ? '#666' : '#999')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 0.9rem;
`;

const AchievementsModal = ({ show, onHide, theme = 'light' }) => {
  const dispatch = useDispatch();
  const unlockedAchievements = useSelector(state => state.achievements.achievements);

  React.useEffect(() => {
    if (show) {
      dispatch(markAchievementsSeen());
    }
  }, [show, dispatch]);

  const getHiddenText = (text) => {
    return text.split('').map(char => char === ' ' ? ' ' : '?').join('');
  };

  return (
    <StyledModal show={show} onHide={onHide} size="lg" theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>Achievements</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AchievementGrid>
          {Object.values(allAchievements).map(achievement => {
            const isUnlocked = unlockedAchievements[achievement.id];
            return (
              <AchievementItem 
                key={achievement.id} 
                unlocked={isUnlocked} 
                theme={theme}
              >
                <Title unlocked={isUnlocked} theme={theme}>
                  {isUnlocked ? (
                    <HighlightableText text={achievement.title} />
                  ) : (
                    <>
                      <FaQuestionCircle /> 
                      Unknown Achievement
                    </>
                  )}
                </Title>
                <Description>
                  {isUnlocked ? 
                    <HighlightableText text={achievement.description} /> : 
                    getHiddenText(achievement.description)
                  }
                </Description>
              </AchievementItem>
            );
          })}
        </AchievementGrid>
      </Modal.Body>
    </StyledModal>
  );
};

export default AchievementsModal;