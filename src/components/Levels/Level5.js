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
import HighlightableText from '../UI/HighlightableText';

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
          <Card.Title>
            <HighlightableText text="Achievement unlocked!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Congratulations! By visiting this level, you've unlocked a new achievement. You can view it in the achievements section by clicking the trophy icon."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Collecting achievements can come in handy, since some levels are locked behind them."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Pay close attention to the words on every page. In this game, text can be more than just text."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="There's another one waiting at..."
            />
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