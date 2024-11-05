import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const DigitalClock = styled.div`
  font-family: 'Digital', monospace;
  font-size: 3rem;
  background: #000;
  color: #0f0;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin: 2rem auto;
  width: fit-content;
  cursor: pointer;
  user-select: none;
`;

const Level7 = () => {
  const dispatch = useDispatch();
  const [showHint, setShowHint] = useState(false);

  const handleClockClick = () => {
    setShowHint(true);
    // This hints at the future mechanic of levels 1-12 being accessible via clock
    setTimeout(() => {
      dispatch(setCurrentLevel(8));
    }, 2000);
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 7 - Time Mechanics</Card.Title>
          <Card.Text>
            Some levels might only be accessible at certain times...
          </Card.Text>
          
          <DigitalClock onClick={handleClockClick}>
            12:34
          </DigitalClock>

          {showHint && (
            <Card.Text className="text-muted">
              Hint: Remember this clock... it might be useful later when you're looking for levels 1-12.
            </Card.Text>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level7; 