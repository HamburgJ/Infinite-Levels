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
            <HighlightableText text="One Hundred" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="The first century mark. C in Roman numerals. A number that once felt impossibly far from zero."
            />
          </Card.Text>
          <CenteredContainer>
            <ChangeMachineButton />
          </CenteredContainer>
       
          <AchievementShrine requiredCount={12} shrineLevel="100" teaserText="A collection awaits. Cards, numbers, and journeys.">
            <CenteredContainer>
              <CollectableCardBox />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="The Card Box. Every card you find can be stored here. And stored cards have weight — which means the Scale can take you places you've never been." />
            </Card.Text>
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
            <HighlightableText text="Beyond the century mark: one hundred fifty has a secret about your wallet. Level one hundred fifty-three hides something precious behind a shrine. Or go straight to one thousand." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Feeling lost? The Fibonacci chain passes through three hundred seventy-seven, where a wilderness map reveals every landmark ahead. And the achievements menu now tracks your active quest chains — check the Quest Compass." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={377}>🗺️ Wilderness Map (Level 377)</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={150}>Level 150</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level100;