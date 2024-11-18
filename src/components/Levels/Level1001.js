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

const Level1001 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Questionable level?" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Why is this here? A level interesting enough to be here, but not interesting enough to have a purpose?" size="small"/>
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1001;