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
import HighlightableText from '../UI/HighlightableText';

const Level158 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The levels become more sparse" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="But it's only to avoid having too much fluff! Why don't you see what else you can do with the levels you've already discovered?"
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={156}></LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level158;