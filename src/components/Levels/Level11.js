import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const DigitalClock = styled.div`
  font-family: 'Digital', monospace;
  font-size: 4rem;
  background: #000;
  color: #0f0;
  padding: 1rem;
  margin: 2rem auto;
  width: fit-content;
  cursor: pointer;
  user-select: none;
`;

const Level11 = () => {
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    dispatch(markMechanicDiscovered('clock'));
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const handleClockClick = () => {
    const hour = currentTime.getHours() % 12 || 12;
    dispatch(setCurrentLevel(hour));
    setShowHint(true);
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 11 - The Clock</Card.Title>
          <Card.Text>
            Some levels are only accessible at certain times...
          </Card.Text>
          
          <DigitalClock onClick={handleClockClick}>
            {currentTime.toLocaleTimeString()}
          </DigitalClock>

          {showHint && (
            <Card.Text className="text-muted">
              Hint: The current hour (1-12) can be used to access corresponding levels!
            </Card.Text>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level11; 