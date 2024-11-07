import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LevelButton from './LevelButton';

const circleMotion = keyframes`
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`;

const figureEightMotion = keyframes`
  0% {
    transform: translate(100px, 0);
  }
  25% {
    transform: translate(0, 50px);
  }
  50% {
    transform: translate(-100px, 0);
  }
  75% {
    transform: translate(0, -50px);
  }
  100% {
    transform: translate(100px, 0);
  }
`;

const wobbleMotion = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovingButton = styled(LevelButton)`
  position: absolute;
  animation: ${props => props.motion === 'circle' 
    ? css`${circleMotion} 5s linear infinite`
    : props.motion === 'figureEight' 
    ? css`${figureEightMotion} 5s ease-in-out infinite`
    : 'none'};
`;

const AvoidanceButton = styled(LevelButton)`
  position: absolute;
  transition: transform 0.3s ease-out;
  transform: translate(
    ${props => props.offsetX}px,
    ${props => props.offsetY}px
  );
  animation: ${css`${wobbleMotion} 1s ease-in-out infinite`};
`;

const ChaseButton = ({ variant = 'circle', targetLevel, children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (variant !== 'avoid') return;

    const handleMouseMove = (e) => {
      const container = document.getElementById('chase-container');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePos({ x, y });

      // Calculate new button position (avoiding mouse)
      const angle = Math.atan2(y, x);
      const distance = Math.min(Math.hypot(x, y), 100);
      const newX = -Math.cos(angle) * distance;
      const newY = -Math.sin(angle) * distance;

      setButtonPos({ x: newX, y: newY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [variant]);

  if (variant === 'avoid') {
    return (
      <ButtonContainer id="chase-container">
        <AvoidanceButton
          targetLevel={targetLevel}
          offsetX={buttonPos.x}
          offsetY={buttonPos.y}
        >
          {children}
        </AvoidanceButton>
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer id="chase-container">
      <MovingButton
        targetLevel={targetLevel}
        motion={variant}
      >
        {children}
      </MovingButton>
    </ButtonContainer>
  );
};

export default ChaseButton; 