import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card, Button, ProgressBar } from 'react-bootstrap';

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
  transition: opacity 0.5s;
  opacity: ${props => props.fading ? 0.5 : 1};
`;

const UnstableText = styled.div`
  font-family: monospace;
  text-align: center;
  color: ${props => props.isWarning ? '#ff0000' : '#000'};
  animation: ${props => props.isWarning ? 'blink 1s infinite' : 'none'};
  margin: 1rem 0;

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const Level15 = () => {
  const dispatch = useDispatch();
  const [stability, setStability] = useState(100);
  const [isWarning, setIsWarning] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleCollapse = React.useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      dispatch(setCurrentLevel(14));
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(markMechanicDiscovered('instability'));
    
    const timer = setInterval(() => {
      setStability(prev => {
        const newStability = prev - 1;
        if (newStability <= 20) setIsWarning(true);
        if (newStability <= 0) {
          clearInterval(timer);
          handleCollapse();
        }
        return Math.max(0, newStability);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [dispatch, handleCollapse]);

  const handleComplexJump = () => {
    dispatch(setCurrentLevel({ real: 15, imag: 1 }));
  };

  return (
    <LevelContainer>
      <StyledCard fading={isFading}>
        <Card.Body>
          <Card.Title>Level 15 - Instability</Card.Title>
          <Card.Text>
            Warning: This level is becoming unstable!
          </Card.Text>

          <ProgressBar 
            now={stability} 
            variant={stability <= 20 ? "danger" : "info"}
            label={`Stability: ${stability}%`}
          />

          <UnstableText isWarning={isWarning}>
            {isWarning ? "CRITICAL: LEVEL COLLAPSE IMMINENT" : "Status: Unstable"}
          </UnstableText>

          <Card.Text>
            Quick! Try to escape through the complex plane before the level collapses!
          </Card.Text>

          <div className="d-flex justify-content-center">
            <Button 
              variant="warning"
              onClick={handleComplexJump}
              disabled={stability <= 0}
            >
              Jump to Level 15 + i
            </Button>
          </div>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level15; 