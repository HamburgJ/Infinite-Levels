import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import { useDispatch } from 'react-redux';
import { addAchievement } from '../../store';

// Multiplayer level
const Level69420 = () => {
  const [otherPlayers, setOtherPlayers] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate other players with random timing
    const interval = setInterval(() => {
      setOtherPlayers(Math.floor(Math.random() * 3) + 1);
      
      if (Math.random() < 0.1) {
        dispatch(addAchievement({
          id: 'viral_level',
          title: 'Going Viral',
          description: 'Was in the same level as 50+ other players'
        }));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>The Multiverse</Card.Title>
          <Card.Text>
            {otherPlayers} other players are currently in this level...
            Can you see them? They can see you! 👀 I wonder what other level's they've seen you in...
          </Card.Text>
          <Button 
            variant="outline-primary"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            Share this level
          </Button>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
}; 

export default Level69420;