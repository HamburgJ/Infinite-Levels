import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const DarkOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: black;
  opacity: ${props => props.darkness};
  transition: opacity 2s ease;
  pointer-events: none;
  z-index: 100;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 3s ease-in;
  z-index: 1000;
`;

const EyesContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 120px;
  font-size: 24px;
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
  opacity: ${props => props.show ? 0.02 : 0};
  transition: opacity 2s ease-in-out;
  z-index: 1000;
`;

const Level13 = () => {
  const [darkness, setDarkness] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showEyes, setShowEyes] = useState(false);

  useEffect(() => {
    const darknessInterval = setInterval(() => {
      setDarkness(prev => {
        if (prev >= 1) {
          clearInterval(darknessInterval);
          setShowButton(true);
          setTimeout(() => setShowEyes(true), 1000);
          return 1;
        }
        return prev + 0.1;
      });
    }, 2000);

    return () => clearInterval(darknessInterval);
  }, []);

  return (
    <>
      <LevelContainer>
        <StyledCard>
          <Card.Body>
            <Card.Title>
              <HighlightableText text="Level 13 - Are you afraid?" size="medium"/>
            </Card.Title>
            <Card.Text>
              <HighlightableText text="The darkness is coming..." />
            </Card.Text>
            <Card.Text>
              <HighlightableText text="They say bad things happen in the dark..." size="small"/>
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </LevelContainer>
      <DarkOverlay darkness={darkness} />
      {showEyes && (
        <EyesContainer show={showEyes}>
          👁️👁️
        </EyesContainer>
      )}
      {showButton && (
        <ButtonContainer>
          <LevelButton 
            targetLevel={0}
            variant="outline-danger"
          >
            Escape the Dark back to Level 0
          </LevelButton>
        </ButtonContainer>
      )}
    </>
  );
};

export default Level13; 