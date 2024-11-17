import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { FaTrophy } from 'react-icons/fa';
import Scale from '../Storage/Scale';
import AchievementShrine from '../UI/AchievementShrine';
import HighlightableText from '../UI/HighlightableText';
import Jester from '../Characters/Jester';

const Level8 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText size="medium" text="Advanced Traveling Techniques"/></Card.Title>
          <Card.Text>
              <HighlightableText text="Did you know that buttons can be held just like items? Just right click a button, then carry it around until you need it!"/>
              </Card.Text>
          <Jester currentLevel="8" />
          <AchievementShrine requiredCount={15}>
            <Card.Text>
              <HighlightableText text="By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"/>
              </Card.Text>
            
            <Card.Text>
              <HighlightableText text="Just find some text which has a number in it, highlight, and click it to travel to that level!"/>
              <HighlightableText text="For example, this text has a 10 in it! That's one of the levels you've already been to!"/>
            </Card.Text>

          </AchievementShrine>
          <CenteredContainer>
          <LevelButton targetLevel={0}>Level 0</LevelButton>
              <LevelButton targetLevel={1}>Level 1</LevelButton>
            
              <LevelButton targetLevel={2}>Level 2</LevelButton>
            
              <LevelButton targetLevel={3}>Level 3</LevelButton>
            </CenteredContainer>
            <CenteredContainer>
              <LevelButton targetLevel={4}>Level 4</LevelButton>
            
              <LevelButton targetLevel={5}>Level 5</LevelButton>
           
              <LevelButton targetLevel={6}>Level 6</LevelButton>
          
              <LevelButton targetLevel={7}>Level 7</LevelButton>
            </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level8; 