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
            <LevelButton targetLevel={20}>Level 20</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={10}>Level 10</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
          </CenteredContainer>
          <Card.Text>
            <HighlightableText text="Beyond the century mark: one hundred fifty has a secret about your wallet. Or go straight to one thousand." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={150}>Level 150</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level100;