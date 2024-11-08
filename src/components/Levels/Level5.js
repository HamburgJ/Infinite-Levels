import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { FaTrophy } from 'react-icons/fa';

const Level5 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_5');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Achievement unlocked!</Card.Title>
          <Card.Text>
            Congratulations! By visiting this level, you've unlocked a new achievement. You can view it in the achievements section by clicking the <FaTrophy /> icon.
          </Card.Text>
          <Card.Text>
            Collecting achievements can come in handy, since some levels are locked behind them.
          </Card.Text>
          <Card.Text>
            Want another achievement? Why not check out...
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={6}>Level 6</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5; 