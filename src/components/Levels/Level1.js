import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSection, markSectionVisited } from '../../store/slices/accordionSlice';
import { Card } from 'react-bootstrap';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { levelToString } from '../../utils/complex';
import HighlightableText from '../UI/HighlightableText';
import { useAchievements } from '../../hooks/useAchievements';
import styled, { keyframes } from 'styled-components';

const DEFAULT_LEVEL_STATE = { openSections: [], visitedSections: [] };

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(37, 99, 235, 0.2); }
  50% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.5); }
`;

const NewPathContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(37, 99, 235, 0.05);
  border: 1px solid rgba(37, 99, 235, 0.2);
  animation: ${glowPulse} 2.5s ease-in-out infinite;
  text-align: center;
`;

const ACCORDIAN_LAYOUT = [
  [ "..."],
  [
    ["..."], ["..."],
    [
      [<CenteredContainer><LevelButton targetLevel={2}>Level 2</LevelButton></CenteredContainer>]
    ]
  ],
  [
    ["..."],
    [
      ["..."],
      [<CenteredContainer><LevelButton targetLevel={3}>Level 3</LevelButton></CenteredContainer>],
      ["..."]
    ]
  ]
];

const Level1 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const currentLevel = levelToString(useSelector(state => state.game.currentLevel));
  const visitedLevels = useSelector(state => state.game.visitedLevels);
  const hasVisitedLevel3 = visitedLevels.includes('3+0i');
  const levelState = useSelector(state => 
    state.accordion.levelStates[currentLevel] || DEFAULT_LEVEL_STATE
  );

  useEffect(() => {
    if (hasVisitedLevel3) {
      unlockAchievement('PATHFINDER');
    }
  }, [hasVisitedLevel3, unlockAchievement]);

  const handleSectionToggle = (sectionPath) => {
    dispatch(toggleSection({ 
      level: currentLevel,
      sectionPath 
    }));
    dispatch(markSectionVisited({ 
      level: currentLevel,
      sectionPath 
    }));
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 1" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Not every button is obvious. Look around."
            />
          </Card.Text>
          
          <NestedAccordion 
            data={ACCORDIAN_LAYOUT} 
            openSections={levelState.openSections}
            visitedSections={levelState.visitedSections}
            onToggle={handleSectionToggle}
          />

          {hasVisitedLevel3 && (
            <NewPathContainer>
              <Card.Text>
                <HighlightableText text="A new path has appeared..." />
              </Card.Text>
              <CenteredContainer>
                <LevelButton targetLevel={4} variant="primary">Level 4 →</LevelButton>
              </CenteredContainer>
            </NewPathContainer>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1; 