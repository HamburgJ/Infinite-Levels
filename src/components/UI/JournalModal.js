/**
 * JournalModal — Unified Achievements + Quests UI
 *
 * Replaces the old AchievementsModal. Everything lives in one place:
 *   • Discoveries (standard achievements)
 *   • Journeys (quest chains with progress)
 *   • Milestones (big numeric achievements)
 *
 * The design is minimal: a compact grid with emoji, title, and a
 * thin progress bar for journeys. No separate quest section — they
 * sit inline alongside discoveries, visually distinguished by a
 * small progress indicator.
 */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { FaLock, FaQuestionCircle } from 'react-icons/fa';
import { markAchievementsSeen } from '../../store/slices/achievementSlice';
import achievements from '../../data/achievements';
import quests from '../../data/quests';
import journalEntries, { JOURNAL_CATEGORIES } from '../../data/journalData';
import HighlightableText from './HighlightableText';
import BaseModal from './BaseModal';
import { colors, radii, fonts, fontSizes } from '../../styles/theme';
import { fadeIn, slideUp } from '../../styles/animations';

// ─── Styled Components ───────────────────────────────────────────

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: ${p => p.theme === 'dark' ? '#000' : '#fff'};
    color: ${p => p.theme === 'dark' ? '#fff' : '#000'};
  }
  .btn-close {
    ${p => p.theme === 'dark' && 'filter: invert(1) grayscale(100%) brightness(200%);'}
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const Stats = styled.div`
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  opacity: 0.6;
  display: flex;
  gap: 1rem;
`;

const Stat = styled.span``;

// ─── Filter Tabs ─────────────────────────────────────────────────

const TabBar = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid ${p => p.theme === 'dark' ? '#222' : '#eee'};
  padding-bottom: 0.5rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 0.35rem 0.75rem;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  border-radius: ${radii.sm};
  color: ${p => p.theme === 'dark' ? '#999' : '#666'};
  transition: all 0.15s ease;

  ${p => p.$active && css`
    background: ${p.theme === 'dark' ? '#222' : '#f0f0f0'};
    color: ${p.theme === 'dark' ? '#fff' : '#000'};
    font-weight: 600;
  `}

  &:hover {
    color: ${p => p.theme === 'dark' ? '#fff' : '#000'};
  }
`;

// ─── Entry Grid ──────────────────────────────────────────────────

const EntryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.4rem;
  max-height: 58vh;
  overflow-y: auto;
  padding: 0.1rem;

  /* Thin custom scrollbar */
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme === 'dark' ? '#333' : '#ddd'};
    border-radius: 2px;
  }
`;

const EntryCard = styled.div`
  display: grid;
  grid-template-columns: 2.2rem 1fr;
  gap: 0.4rem;
  align-items: start;
  padding: 0.5rem;
  border-radius: ${radii.sm};
  transition: all 0.2s ease;
  background: ${p => {
    if (p.$unlocked) return p.theme === 'dark' ? '#1a1800' : '#FFFDE7';
    if (p.$hidden) return p.theme === 'dark' ? '#111' : '#f5f5f5';
    return 'transparent';
  }};
  border-left: 3px solid ${p => {
    if (p.$unlocked && p.$isJourney) return colors.primary;
    if (p.$unlocked) return colors.gold;
    return 'transparent';
  }};
  opacity: ${p => p.$hidden ? 0.5 : 1};

  &:hover {
    background: ${p => p.theme === 'dark' ? '#1a1a1a' : '#fafafa'};
  }
`;

const EntryEmoji = styled.div`
  font-size: 1.4em;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.1rem;
`;

const EntryContent = styled.div`
  min-width: 0;
`;

const EntryTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSizes.sm};
  color: ${p => {
    if (p.$unlocked) return p.theme === 'dark' ? colors.goldBright : colors.gold;
    if (p.$hidden) return p.theme === 'dark' ? '#444' : '#bbb';
    return p.theme === 'dark' ? '#888' : '#666';
  }};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EntryDesc = styled.div`
  font-size: ${fontSizes.xs};
  line-height: 1.4;
  color: ${p => p.theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)'};
  margin-top: 0.15rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// ─── Progress bar (for journeys) ─────────────────────────────────

const ProgressWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.3rem;
`;

const ProgressTrack = styled.div`
  flex: 1;
  height: 3px;
  background: ${p => p.theme === 'dark' ? '#333' : '#e5e5e5'};
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${p => p.$pct}%;
  background: ${p => p.$done ? colors.success : colors.primary};
  border-radius: 2px;
  transition: width 0.4s ease;
`;

const ProgressLabel = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.65rem;
  opacity: 0.6;
  white-space: nowrap;
`;

const NextHint = styled.div`
  font-size: 0.7rem;
  margin-top: 0.2rem;
  color: ${p => p.theme === 'dark' ? '#7B8CFF' : '#4338CA'};
  font-style: italic;
`;

// ─── Sealed Chambers (kept from old modal) ───────────────────────

const ShrineSection = styled.div`
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${p => p.theme === 'dark' ? '#222' : '#eee'};
`;

const ShrineLabel = styled.div`
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  margin-bottom: 0.35rem;
`;

const ShrineRow = styled.div`
  font-size: ${fontSizes.sm};
  padding: 0.3rem 0;
  border-left: 3px solid ${p => p.$ready ? colors.success : 'transparent'};
  padding-left: ${p => p.$ready ? '0.5rem' : '0'};
`;

// ─── Component ───────────────────────────────────────────────────

const TABS = [
  { key: 'all', label: 'All' },
  { key: JOURNAL_CATEGORIES.DISCOVERY, label: 'Discoveries' },
  { key: JOURNAL_CATEGORIES.JOURNEY, label: 'Journeys' },
  { key: JOURNAL_CATEGORIES.MILESTONE, label: 'Milestones' },
];

const AchievementsModal = ({ show, onHide, theme = 'light' }) => {
  const dispatch = useDispatch();
  const unlocked = useSelector(s => s.achievements.achievements);
  const visitedShrines = useSelector(s => s.achievements.visitedShrines || {});
  const visitedLevels = useSelector(s => s.game.visitedLevels || []);
  const collectedCards = useSelector(s => s.inventory?.collectedCards || {});
  const [tab, setTab] = useState('all');
  const achievementCount = Object.keys(unlocked).length;
  const cardCount = Object.keys(collectedCards).length;

  React.useEffect(() => {
    if (show) dispatch(markAchievementsSeen());
  }, [show, dispatch]);

  // ── Journey progress helper ────────────────────────────────────
  const getJourneyProgress = (journey) => {
    if (journey.isCardQuest) {
      return { visited: cardCount, total: 15, nextWaypoint: null };
    }
    let visited = 0;
    let nextWaypoint = null;
    for (const wp of journey.waypoints) {
      if (visitedLevels.includes(wp.level)) visited++;
      else if (!nextWaypoint) nextWaypoint = wp;
    }
    return { visited, total: journey.waypoints.length, nextWaypoint };
  };

  // ── Build sorted list ──────────────────────────────────────────
  const entries = Object.values(journalEntries);

  const shouldRevealEntry = (entry) => {
    if (!entry.secret) return true;
    if (unlocked[entry.id]) return true;
    if (entry.revealAfter && entry.revealAfter.every(r => unlocked[r])) return true;
    return false;
  };

  const isJourneyRevealed = (entry) => {
    if (!entry.journey) return false;
    const { visited } = getJourneyProgress(entry.journey);
    return visited >= entry.journey.revealThreshold;
  };

  const filteredEntries = entries.filter(e => {
    // Filter by tab
    if (tab !== 'all' && e.category !== tab) return false;
    // Hide unrevealed journeys
    if (e.category === JOURNAL_CATEGORIES.JOURNEY && !isJourneyRevealed(e)) return false;
    return true;
  }).sort((a, b) => {
    const aUnlocked = !!unlocked[a.id] || (a.journey && getJourneyProgress(a.journey).visited === getJourneyProgress(a.journey).total);
    const bUnlocked = !!unlocked[b.id] || (b.journey && getJourneyProgress(b.journey).visited === getJourneyProgress(b.journey).total);

    // Journeys first (active), then unlocked, then revealed, then hidden
    if (a.category === JOURNAL_CATEGORIES.JOURNEY && b.category !== JOURNAL_CATEGORIES.JOURNEY) return -1;
    if (b.category === JOURNAL_CATEGORIES.JOURNEY && a.category !== JOURNAL_CATEGORIES.JOURNEY) return 1;

    if (aUnlocked !== bUnlocked) return bUnlocked ? 1 : -1;
    return 0;
  });

  // ── Shrines ────────────────────────────────────────────────────
  const unsealed = Object.values(visitedShrines).filter(s => !s.opened);
  const openable = unsealed.filter(s => achievementCount >= s.requiredCount);
  const locked = unsealed.filter(s => achievementCount < s.requiredCount);

  // ── Render ─────────────────────────────────────────────────────
  const renderEntry = (entry) => {
    const isUnlocked = !!unlocked[entry.id];
    const isJourney = entry.category === JOURNAL_CATEGORIES.JOURNEY;
    const revealed = shouldRevealEntry(entry);
    const hidden = !revealed && !isJourney;

    // Journey progress
    let journeyProgress = null;
    if (isJourney && entry.journey) {
      journeyProgress = getJourneyProgress(entry.journey);
    }
    const journeyDone = journeyProgress && journeyProgress.visited >= journeyProgress.total;

    const icon = (isUnlocked || (isJourney && journeyProgress))
      ? entry.emoji
      : hidden ? <FaLock size={14} /> : <FaQuestionCircle size={14} />;

    const title = (isUnlocked || revealed || isJourney)
      ? <HighlightableText text={entry.title} achievement={achievements.ACHIEVEMENT_TEXT} onLevelChange={onHide} />
      : 'Secret Discovery';

    const desc = (isUnlocked || revealed || isJourney)
      ? <HighlightableText text={entry.description} achievement={achievements.ACHIEVEMENT_TEXT} onLevelChange={onHide} />
      : '???';

    return (
      <EntryCard
        key={entry.id}
        $unlocked={isUnlocked || journeyDone}
        $hidden={hidden}
        $isJourney={isJourney}
        theme={theme}
      >
        <EntryEmoji>{icon}</EntryEmoji>
        <EntryContent>
          <EntryTitle $unlocked={isUnlocked || journeyDone} $hidden={hidden} theme={theme}>
            {title}
          </EntryTitle>
          <EntryDesc theme={theme}>{desc}</EntryDesc>
          {isJourney && journeyProgress && (
            <>
              <ProgressWrap>
                <ProgressTrack theme={theme}>
                  <ProgressFill
                    $pct={Math.round((journeyProgress.visited / journeyProgress.total) * 100)}
                    $done={journeyDone}
                  />
                </ProgressTrack>
                <ProgressLabel>
                  {journeyDone ? '✅' : `${journeyProgress.visited}/${journeyProgress.total}`}
                </ProgressLabel>
              </ProgressWrap>
              {!journeyDone && journeyProgress.nextWaypoint && (
                <NextHint theme={theme}>
                  Next: <HighlightableText text={journeyProgress.nextWaypoint.label} achievement={achievements.ACHIEVEMENT_TEXT} onLevelChange={onHide} />
                </NextHint>
              )}
            </>
          )}
        </EntryContent>
      </EntryCard>
    );
  };

  return (
    <StyledModal show={show} onHide={onHide} size="lg" theme={theme}>
      <Modal.Header closeButton>
        <Modal.Title>
          <HighlightableText
            text="Journal"
            size="medium"
            achievement={achievements.ACHIEVEMENT_TEXT}
            onLevelChange={onHide}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Header>
          <Stats>
            <Stat>⭐ {achievementCount}</Stat>
            {cardCount > 0 && <Stat>🃏 {cardCount}</Stat>}
            <Stat>🗺️ {visitedLevels.length} levels</Stat>
          </Stats>
        </Header>

        <TabBar theme={theme}>
          {TABS.map(t => (
            <Tab
              key={t.key}
              theme={theme}
              $active={tab === t.key}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </Tab>
          ))}
        </TabBar>

        {/* Sealed Chambers — only show if any exist */}
        {unsealed.length > 0 && (
          <ShrineSection theme={theme}>
            <ShrineLabel>Sealed Chambers</ShrineLabel>
            {openable.map(s => (
              <ShrineRow key={s.level} theme={theme} $ready>
                <HighlightableText
                  text={`🔓 Level ${s.level} — Ready to open! (${achievementCount} achievements)`}
                  achievement={achievements.ACHIEVEMENT_TEXT}
                  onLevelChange={onHide}
                />
              </ShrineRow>
            ))}
            {locked.map(s => (
              <ShrineRow key={s.level} theme={theme}>
                <HighlightableText
                  text={`🔒 Level ${s.level} — Need ${s.requiredCount} (have ${achievementCount})`}
                  achievement={achievements.ACHIEVEMENT_TEXT}
                  onLevelChange={onHide}
                />
              </ShrineRow>
            ))}
          </ShrineSection>
        )}

        <EntryGrid theme={theme}>
          {filteredEntries.map(renderEntry)}
        </EntryGrid>
      </Modal.Body>
    </StyledModal>
  );
};

export default AchievementsModal;
