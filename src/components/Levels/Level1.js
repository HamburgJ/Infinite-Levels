import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSection, markSectionVisited } from '../../store/slices/accordionSlice';
import { Card } from 'react-bootstrap';
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
  const currentLevel = levelToString(useSelector(state => state.game.currentLevel));
  const levelState = useSelector(state => 
    state.accordion.levelStates[currentLevel] || { openSections: [], visitedSections: [] }
  );

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
              text="Some buttons aren't where you'd expect them. They're always on the page somewhere — you just have to look."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Find the hidden button to continue."
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