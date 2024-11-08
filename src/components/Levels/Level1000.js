import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import FlowerPot from '../UI/FlowerPot';
import { useAchievements } from '../../hooks/useAchievements';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCard from '../Items/CollectableCard';
import ChangeMachineButton from '../UI/ChangeMachineButton';

const Level10 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Congratulations! You've completed the first 10 levels!</Card.Title>
          <Card.Text>
            If you haven't yet, don't worry, you'll figure out how to get there if you keep exploring!
            These first levels were meant as a tutorial to introduce you to the mechanics of the game.
          </Card.Text>
          
          <ChangeMachineButton />
          <AchievementShrine requiredCount={20}>
            <CenteredContainer>
              <CollectableCard cardId={1} value={3} suit="hearts"/>
            </CenteredContainer>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10;