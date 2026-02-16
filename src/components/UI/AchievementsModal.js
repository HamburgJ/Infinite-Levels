import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { FaQuestionCircle, FaLock, FaCompass } from 'react-icons/fa';
import { markAchievementsSeen } from '../../store/slices/achievementSlice';
import allAchievements from '../../data/achievements';
import HighlightableText from './HighlightableText';
import BaseModal from './BaseModal';
import achievements from '../../data/achievements';
import quests from '../../data/quests';

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
  padding: 0.2rem;
  max-height: 60vh;
  overflow-y: auto;
`;

const AchievementItem = styled.div`
  padding: 0.5rem;
  background: ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? '#3A3000' : '#FFF3D4';
    }
    if (props.secret) {
      return props.theme === 'dark' ? '#2A2A2A' : '#F0F0F0';
    }
    return props.theme === 'dark' ? '#1A1A1A' : '#F8F8F8';
  }};
  border-radius: 8px;
  opacity: ${props => props.unlocked ? 1 : props.secret ? 0.8 : 1};
  transition: all 0.3s ease;
  border: 2px solid ${props => {
    if (props.unlocked) {
      return props.theme === 'dark' ? '#FFD700' : '#DAA520';
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
    background: ${props => props.theme === 'dark' ? '#000000' : '#FFFFFF'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  }

  .btn-close {
    ${props => props.theme === 'dark' ? `
      filter: invert(1) grayscale(100%) brightness(200%);
    ` : ''}
  }
`;

const SummaryLine = styled.div`
  text-align: center;
  padding: 0.5rem 0 0.75rem 0;
  font-size: 0.85rem;
  opacity: 0.8;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? '#333' : '#eee'};
  margin-bottom: 0.75rem;
`;

const SealedChambersSection = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? '#333' : '#eee'};
`;

const SealedChambersTitle = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#aaa' : '#666'};
`;

const ShrineEntry = styled.div`
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.3rem;
  background: ${props => {
    if (props.openable) return props.theme === 'dark' ? '#2A3000' : '#F0FFE0';
    return props.theme === 'dark' ? '#1A1A1A' : '#F5F5F5';
  }};
  border-radius: 6px;
  font-size: 0.8rem;
  border-left: 3px solid ${props => {
    if (props.openable) return '#4CAF50';
    return props.theme === 'dark' ? '#444' : '#ccc';
  }};
`;

const ShrineTeaser = styled.em`
  opacity: 0.7;
`;

const GuidanceText = styled.div`
  text-align: center;
  padding: 0.75rem 0;
  font-size: 0.75rem;
  opacity: 0.5;
  font-style: italic;
`;

const QuestSection = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? '#333' : '#eee'};
`;

const QuestSectionTitle = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#aaa' : '#666'};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const QuestEntry = styled.div`
  padding: 0.5rem 0.6rem;
  margin-bottom: 0.4rem;
  background: ${props => {
    if (props.complete) return props.theme === 'dark' ? '#2A3000' : '#F0FFE0';
    if (props.active) return props.theme === 'dark' ? '#1A1A2A' : '#F0F4FF';
    return props.theme === 'dark' ? '#1A1A1A' : '#F8F8F8';
  }};
  border-radius: 6px;
  font-size: 0.8rem;
  border-left: 3px solid ${props => {
    if (props.complete) return '#4CAF50';
    if (props.active) return '#6366F1';
    return props.theme === 'dark' ? '#333' : '#ddd';
  }};
`;

const QuestTitle = styled.div`
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.15rem;
`;

const QuestProgress = styled.div`
  font-size: 0.75rem;
  opacity: 0.7;
`;

const QuestProgressBar = styled.div`
  height: 3px;
  background: ${props => props.theme === 'dark' ? '#333' : '#e0e0e0'};
  border-radius: 2px;
  margin-top: 0.3rem;
  overflow: hidden;
`;

const QuestProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percent}%;
  background: ${props => props.complete ? '#4CAF50' : '#6366F1'};
  border-radius: 2px;
  transition: width 0.3s ease;
`;

const QuestNextHint = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: ${props => props.theme === 'dark' ? '#8B8BFF' : '#4338CA'};
  font-style: italic;
`;

const getAchievementTitle = (achievement, isUnlocked, shouldReveal, onHide) => {
  if (isUnlocked) {
    return <HighlightableText 
      text={achievement.title} 
      achievement={achievements.ACHIEVEMENT_TEXT} 
      onLevelChange={onHide}
    />;
  }
  if (!shouldReveal) {
    return "Secret Achievement";
  }
  return <HighlightableText 
    text={achievement.title} 
    achievement={achievements.ACHIEVEMENT_TEXT} 
    onLevelChange={onHide}
  />;
};

const getAchievementDescription = (achievement, isUnlocked, shouldReveal, onHide) => {
  if (isUnlocked) {
    return <HighlightableText 
      text={achievement.description} 
      achievement={achievements.ACHIEVEMENT_TEXT} 
      onLevelChange={onHide}
    />;
  }
  if (!shouldReveal) {
    return "???";
  }
  return <HighlightableText 
    text={achievement.description} 
    achievement={achievements.ACHIEVEMENT_TEXT} 
    onLevelChange={onHide}
  />;
};

const getAchievementIcon = (isUnlocked, shouldReveal, achievement) => {
  if (isUnlocked) return achievement.emoji;
  if (!shouldReveal) return <FaLock />;
  return <FaQuestionCircle />;
};

const GUIDANCE_TIPS = [
  'Explore new levels to earn achievements. Every level has something to discover.',
  'Try clicking on numbers wherever you see them — even in places you wouldn\'t expect.',
  'Some achievements are secret. Unlocking related achievements will reveal them.',
  'The Jester appears when you least expect it. Keep exploring!',
  'Items you collect might do more than you think. Try using them in different ways.',
  'Numbers below zero, between integers, and beyond imagination all have levels too.',
];

const AchievementsModal = ({ show, onHide, theme = 'light' }) => {
  const dispatch = useDispatch();
  const unlockedAchievements = useSelector(state => state.achievements.achievements);
  const visitedShrines = useSelector(state => state.achievements.visitedShrines || {});
  const visitedLevels = useSelector(state => state.game.visitedLevels || []);
  const collectedCards = useSelector(state => state.inventory?.collectedCards || {});
  const achievementCount = Object.keys(unlockedAchievements).length;

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
          {getAchievementIcon(isUnlocked, shouldReveal, achievement)}
        </AchievementEmoji>
        <ContentWrapper>
          <Title 
            unlocked={isUnlocked} 
            secret={isSecret && !shouldReveal}
            theme={theme}
          >
            {getAchievementTitle(achievement, isUnlocked, shouldReveal, onHide)}
          </Title>
          <Description secret={isSecret && !shouldReveal} theme={theme}>
            {getAchievementDescription(achievement, isUnlocked, shouldReveal, onHide)}
          </Description>
        </ContentWrapper>
      </AchievementItem>
    );
  };

  const unsealed = Object.values(visitedShrines).filter(s => !s.opened);
  const openable = unsealed.filter(s => achievementCount >= s.requiredCount);
  const locked = unsealed.filter(s => achievementCount < s.requiredCount);
  const cardCount = Object.keys(collectedCards).length;
  const guidanceTip = GUIDANCE_TIPS[achievementCount % GUIDANCE_TIPS.length];

  // Quest tracker logic
  const getQuestProgress = (quest) => {
    if (quest.isCardQuest) {
      const total = 15; // total cards in the game
      return { visited: cardCount, total, nextWaypoint: null };
    }
    let visited = 0;
    let nextWaypoint = null;
    for (const wp of quest.waypoints) {
      if (visitedLevels.includes(wp.level)) {
        visited++;
      } else if (!nextWaypoint) {
        nextWaypoint = wp;
      }
    }
    return { visited, total: quest.waypoints.length, nextWaypoint };
  };

  const activeQuests = Object.values(quests)
    .map(q => ({ ...q, progress: getQuestProgress(q) }))
    .filter(q => q.progress.visited >= q.revealThreshold)
    .sort((a, b) => {
      // Complete quests at bottom, most-progressed first
      const aComplete = a.progress.visited >= a.progress.total;
      const bComplete = b.progress.visited >= b.progress.total;
      if (aComplete !== bComplete) return aComplete ? 1 : -1;
      return (b.progress.visited / b.progress.total) - (a.progress.visited / a.progress.total);
    });

  const renderQuestTracker = () => {
    if (activeQuests.length === 0) return null;
    return (
      <QuestSection theme={theme}>
        <QuestSectionTitle theme={theme}>
          <FaCompass /> <HighlightableText text="Quest Compass" achievement={achievements.ACHIEVEMENT_TEXT} onLevelChange={onHide} />
        </QuestSectionTitle>
        {activeQuests.map(quest => {
          const { visited, total, nextWaypoint } = quest.progress;
          const isComplete = visited >= total;
          const percent = Math.round((visited / total) * 100);
          return (
            <QuestEntry key={quest.id} theme={theme} complete={isComplete} active={!isComplete && visited > 0}>
              <QuestTitle>
                {quest.emoji} <HighlightableText text={quest.title} achievement={achievements.ACHIEVEMENT_TEXT} onLevelChange={onHide} />
              </QuestTitle>
              <QuestProgress>
                {isComplete ? '✅ Complete!' : `${visited} / ${total}`}
                {quest.completionAchievement && isComplete && unlockedAchievements[quest.completionAchievement] &&
                  ' — Achievement earned!'
                }
              </QuestProgress>
              <QuestProgressBar theme={theme}>
                <QuestProgressFill percent={percent} complete={isComplete} />
              </QuestProgressBar>
              {!isComplete && nextWaypoint && (
                <QuestNextHint theme={theme}>
                  Next: <HighlightableText text={nextWaypoint.label} achievement={achievements.ACHIEVEMENT_TEXT} onLevelChange={onHide} />
                </QuestNextHint>
              )}
            </QuestEntry>
          );
        })}
      </QuestSection>
    );
  };

  return (
    <StyledModal show={show} onHide={onHide} size="lg" theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>
          <HighlightableText 
            text="Achievements" 
            size="medium"
            achievement={achievements.ACHIEVEMENT_TEXT}
            onLevelChange={onHide}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SummaryLine theme={theme}>
          ⭐ {achievementCount} achievement{achievementCount !== 1 ? 's' : ''}
          {cardCount > 0 && <> · 🃏 {cardCount} card{cardCount !== 1 ? 's' : ''}</>}
          {' '}· 🗺️ {visitedLevels.length} level{visitedLevels.length !== 1 ? 's' : ''} visited
        </SummaryLine>

        {unsealed.length > 0 && (
          <SealedChambersSection theme={theme}>
            <SealedChambersTitle theme={theme}>
              <HighlightableText 
                text="Sealed Chambers"
                achievement={achievements.ACHIEVEMENT_TEXT}
                onLevelChange={onHide}
              />
            </SealedChambersTitle>
            {openable.map(shrine => (
              <ShrineEntry key={shrine.level} theme={theme} openable>
                <HighlightableText 
                  text={`🔓 Level ${shrine.level} — Ready to open! (You have ${achievementCount})`}
                  achievement={achievements.ACHIEVEMENT_TEXT}
                  onLevelChange={onHide}
                />
              </ShrineEntry>
            ))}
            {locked.map(shrine => (
              <ShrineEntry key={shrine.level} theme={theme}>
                <HighlightableText 
                  text={`🔒 Level ${shrine.level}${shrine.teaserText ? '' : ''} (Need ${shrine.requiredCount}, you have ${achievementCount})`}
                  achievement={achievements.ACHIEVEMENT_TEXT}
                  onLevelChange={onHide}
                />
                {shrine.teaserText && (
                  <div><ShrineTeaser>{shrine.teaserText}</ShrineTeaser></div>
                )}
              </ShrineEntry>
            ))}
          </SealedChambersSection>
        )}

        {renderQuestTracker()}

        <AchievementGrid>
          {sortAchievements(allAchievements).map(renderAchievement)}
        </AchievementGrid>

        <GuidanceText>
          💡 {guidanceTip}
        </GuidanceText>
      </Modal.Body>
    </StyledModal>
  );
};

export default AchievementsModal;