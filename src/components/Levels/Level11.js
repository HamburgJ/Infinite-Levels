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
import Jester from '../Characters/Jester';
import HighlightableText from '../UI/HighlightableText';
const Level11 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The levels become more sparse" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="The levels become more sparse from here. But don't let that fool you — there are a dozen hidden paths between any two levels, and a hundred secrets you haven't found yet."/>
            <br/><br/>
            <HighlightableText text="Why don't you see what the Jester ahead knows?"/>
          </Card.Text>
          <Jester currentLevel="11" />
          <CenteredContainer>
            <LevelButton targetLevel={10}>
              Level 10
            </LevelButton>
            <LevelButton targetLevel={12}>
              Level 12
            </LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level11;