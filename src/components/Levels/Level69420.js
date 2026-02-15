import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import { useDispatch } from 'react-redux';
import { addAchievement } from '../../store';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import achievements from '../../data/achievements';
import { CenteredContainer } from './styles/CommonLevelStyles';

// Multiplayer level
const Level69420 = () => {
  const [otherPlayers, setOtherPlayers] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate other players with random timing
    const interval = setInterval(() => {
      setOtherPlayers(Math.floor(Math.random() * 3) + 1);
      
      if (Math.random() < 0.1) {
        dispatch(addAchievement(achievements.STRANGE_PRESENCE));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="A level with an uninteresting number" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text={`They say a strange presence can be felt in this level...`} size="small"/>
            <HighlightableText text="Can feel it? If you stick around long enough you may be able to feel it too..." size="small"/>
          </Card.Text>
          <CenteredContainer>
            <Button 
              variant="outline-primary"
            >
              Do nothing
            </Button>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
}; 

export default Level69420;