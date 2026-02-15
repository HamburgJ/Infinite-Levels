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
  z-index: 50;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 3s ease-in;
  z-index: 1000;
`;

const EmojiContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 120px;
  font-size: 48px;
  opacity: ${props => props.show ? 0.05 : 0};
  transition: opacity 2s ease-in-out;
  z-index: 1000;
`;

const LevelNeg13 = () => {
  const [darkness, setDarkness] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [revealedText, setRevealedText] = useState("");
  
  const secretText = "... The dog was inside you all along!";

  useEffect(() => {
    // Start the darkness fade after a short delay
    setTimeout(() => {
      const darknessInterval = setInterval(() => {
        setDarkness(prev => {
          if (prev <= 0) {
            clearInterval(darknessInterval);
            setShowButton(true);
            // Start revealing text letter by letter
            let currentIndex = 0;
            const textInterval = setInterval(() => {
              if (currentIndex < secretText.length) {
                setRevealedText(prev => prev + secretText[currentIndex]);
                currentIndex++;
              } else {
                clearInterval(textInterval);
                setShowEmoji(true);
              }
            }, 100);
            return 0;
          }
          return prev > 0.80 ? 0.98*prev : prev - 0.05;
        });
      }, 500);
    }, 1000); // Initial delay before starting fade
  }, []);

  return (
    <>
      <DarkOverlay darkness={darkness} />
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
            <Card.Text>
              <HighlightableText text={`${revealedText}`} />
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </LevelContainer>
      {showEmoji && (
        <EmojiContainer show={showEmoji}>
          🐶
        </EmojiContainer>
      )}
      {showButton && (
        <ButtonContainer>
          <LevelButton 
            targetLevel={0}
            variant="outline-warning"
          >
            Return to the Light at Level 0
          </LevelButton>
          <LevelButton 
            targetLevel={-14}
            variant="outline-warning"
          >
            Deeper into Darkness
          </LevelButton>
        </ButtonContainer>
      )}
    </>
  );
};

export default LevelNeg13; 