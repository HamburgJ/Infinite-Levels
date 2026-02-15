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
import HighlightableText from '../UI/HighlightableText';

const Level1000000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="One Million" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Level one million. A number so large it used to be the biggest thing imaginable. Now it's just another stop on an infinite journey."/>
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

export default Level1000000;