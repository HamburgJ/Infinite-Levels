import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level60 = () => {
  const [playMinutes, setPlayMinutes] = useState(null);

  useEffect(() => {
    try {
      const startTime = localStorage.getItem('gameStartTime');
      if (startTime) {
        const minutes = Math.floor((Date.now() - parseInt(startTime)) / 60000);
        setPlayMinutes(minutes);
      }
    } catch (e) {
      // Silently fail if localStorage unavailable
    }
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="A Minute" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Sixty seconds in a minute. Sixty minutes in an hour. The Babylonians built their mathematics on sixty — because it has twelve factors. More than any number its size." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="That's not a coincidence. That's design." />
          </Card.Text>
          {playMinutes !== null && playMinutes > 0 && (
            <Card.Text style={{ 
              background: 'rgba(74, 144, 217, 0.1)', 
              padding: '0.75rem', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <HighlightableText text={`You've been playing for about ${playMinutes} minute${playMinutes === 1 ? '' : 's'}. That's ${playMinutes * 60} seconds. Each one of them was a level you could have visited.`} />
            </Card.Text>
          )}
          <Card.Text>
            <HighlightableText text="Time is just numbers we agree on. Twenty-four hours. Three hundred sixty-five days. Twelve months. All of them are levels." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={50}>← Fifty</LevelButton>
            <LevelButton targetLevel={69}>Sixty-Nine →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level60;
