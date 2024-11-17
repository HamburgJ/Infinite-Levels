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
import ChangeMachineButton from '../UI/ChangeMachineButton';
import CollectableCardBox from '../Items/CollectableCardBox';
import HighlightableText from '../UI/HighlightableText';


const Level100 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 100! Woohoo!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Great job getting this far! You're doing great! Come back here after achieving 20 achievements!"
            />
          </Card.Text>
          <CenteredContainer>
            <ChangeMachineButton />
          </CenteredContainer>
       
          <AchievementShrine requiredCount={20}>
            <CenteredContainer>
              <CollectableCardBox />
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={10000000}>Level 20</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={10000000}>Level 10</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={10000000}>Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level100;