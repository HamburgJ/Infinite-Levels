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

const Level10000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="10k? Are you cheating?" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Getting to level 10k is no small feat... your IQ must be close to 10k!" size="small"/>
            <HighlightableText text="From here on out, the levels will not be as easy as the first ten thousand!" size="small"/>
          </Card.Text>
      
          <AchievementShrine requiredCount={30}>
            <CenteredContainer>
              <CollectableCard cardId={1} value={3} suit="hearts"/>
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={100000}>Level 100,000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10000;