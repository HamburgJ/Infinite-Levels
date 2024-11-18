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
const Level500 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="D is for Delightful!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Welcome to level D (that's 500 in Roman numerals)! D is such a delightful letter - it starts words like 'dance', 'dream', and 'discover'. It's also half of a smile turned sideways! :D"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Did you know that D is the most common consonant in English? Or maybe not, nobody knows! Decidedly deserving of this distinguished level!"
            />
          </Card.Text>
          
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level500;