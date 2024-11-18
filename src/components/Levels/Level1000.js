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
const Level10 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="A picture's worth a thousand words" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="And this level is worth an achievement! Which makes it very grand that you made it here!" size="small"/>
          </Card.Text>
          <CenteredContainer>
            <ChangeMachineButton />
          </CenteredContainer>
          <AchievementShrine requiredCount={30}>
            <CenteredContainer>
              <CollectableCard cardId={"ace-clubs"} value={"A"} rarity="normal" suit="clubs"/>
            </CenteredContainer>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10;