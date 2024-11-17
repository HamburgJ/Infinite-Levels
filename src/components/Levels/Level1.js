import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { toggleSection, markSectionVisited } from '../../store/slices/accordionSlice';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { levelToString } from '../../utils/complex';
import HighlightableText from '../UI/HighlightableText';

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
  const levelState = useSelector(state => 
    state.accordion.levelStates[currentLevel] || { openSections: [], visitedSections: [] }
  );

  useEffect(() => {
    unlockAchievement('LEVEL_1');
  }, [unlockAchievement]);

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
            <HighlightableText text="Welcome to Level 1" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="In this game, many levels contain buttons that are hidden. Buttons are never invisible or off-screen. Every button has a logical way to find it."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Find a hidden button in this level to proceed."
            />
          </Card.Text>
          
          <NestedAccordion 
            data={ACCORDIAN_LAYOUT} 
            openSections={levelState.openSections}
            visitedSections={levelState.visitedSections}
            onToggle={handleSectionToggle}
          />
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1; 