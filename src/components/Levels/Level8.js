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
import HighlightableText from '../UI/HighlightableText';

const Level8 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText size="large" text="Advanced Traveling Techniques"/></Card.Title>
          <Card.Text>
            <HighlightableText text="By now, you should know about buttons hidden in plain sight. If not, look at Level 7 again! But did you know that buttons can be created from anywhere?"/>
            </Card.Text>
          
          <Card.Text>
            <HighlightableText text="Just find some text which has a number in it, highlight, and click it to travel to that level!"/>
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level8; 