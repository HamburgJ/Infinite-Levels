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

const Level6 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_6');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Achievement unlocked! Again!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Enjoy the feeling of accomplishment! It won't come so easily next time."
            />
          </Card.Text>
          <CenteredContainer>
          <LevelButton targetLevel={2}>Level 2</LevelButton>
          <LevelButton targetLevel={3}>Level 3</LevelButton>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level6; 