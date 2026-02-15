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
const Level1000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="A Thousand Words" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="They say a picture is worth a thousand words. But you didn't need a picture — you walked here, one level at a time. Or maybe you took a shortcut. Either way, you made it." size="small"/>
          </Card.Text>
          <CenteredContainer>
            <ChangeMachineButton />
          </CenteredContainer>
          <AchievementShrine requiredCount={30} shrineLevel="1000" teaserText="A rare card waits for a true collector.">
            <CenteredContainer>
              <CollectableCard cardId={"ace-clubs"} value={"A"} rarity="normal" suit="clubs"/>
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={10000}>Level 10,000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1000;