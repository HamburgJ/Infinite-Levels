import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import styled, { keyframes } from 'styled-components';

const glitchAnimation = keyframes`
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -3px) rotate(3deg) }
  100% { transform: translate(0) }
`;

const GlitchText = styled.div`
  animation: ${glitchAnimation} 0.3s infinite;
  color: red;
  text-shadow: 2px 2px blue, -2px -2px green;
  font-family: monospace;
  font-size: 2em;
`;

const Level404 = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(prev => !prev);
      if (Math.random() < 0.1) {
        document.body.style.filter = 'invert(100%)';
        setTimeout(() => {
          document.body.style.filter = 'none';
        }, 200+Math.random() * 1000);
      }
    }, 200+Math.random() * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LevelContainer>
      <StyledCard style={{ transform: isGlitching ? 'skew(2deg)' : 'none' }}>
        <Card.Body>
          <GlitchText>ERROR 404: LEVEL NOT FOUND</GlitchText>
          <Card.Text style={{ fontFamily: 'monospace' }}>
            SYSTEM MALFUNCTION... REALITY BREACH DETECTED...
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level404;