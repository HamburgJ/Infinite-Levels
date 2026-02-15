import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCard from '../Items/CollectableCard';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import HighlightableText from '../UI/HighlightableText';

const Level100000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="One Hundred Thousand" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="You've reached level one hundred thousand. That's a lot of levels. Most people would have stopped at level one thousand, or even level one hundred. But not you."/>
          </Card.Text>
          
          <ChangeMachineButton />
          <AchievementShrine requiredCount={20}>
            <CenteredContainer>
              <CollectableCard cardId={1} value={3} suit="hearts"/>
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={1000000}>Level 1,000,000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level100000;