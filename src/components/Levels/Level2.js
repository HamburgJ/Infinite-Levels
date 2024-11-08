import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { FaQuestionCircle } from 'react-icons/fa';

const Level2 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_1');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Congratulations! You found the button.</Card.Title>
          <Card.Text>
            However, you will soon find that this game in not linear, and that you may need to backtrack and reexamine places you've already been.
          </Card.Text>
          <Card.Text>
            Here's little hint, for your effort: The <FaQuestionCircle /> in the menu above is a hint system, which is an important and neccisary part of this game. 
            Each level has a unique hint that may allow you to progress further in the game. Using the 'hint' system is not cheating, but rather a required part of the game.
            Take a look at the hint in Level 3, and use it to progress!
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Back to level 1</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level2; 