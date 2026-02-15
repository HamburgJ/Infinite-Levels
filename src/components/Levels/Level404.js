import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import styled, { keyframes } from 'styled-components';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCard from '../Items/CollectableCard';

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

const FadeIn = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 2s ease-in;
  margin-top: 20px;
`;

const Level404 = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showEscape, setShowEscape] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEscape(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LevelContainer>
      <StyledCard style={{ transform: isGlitching ? 'skew(-20deg)' : 'none' }}>
        <Card.Body>
          <GlitchText><HighlightableText text="ERROR 404: LEVEL NOT FOUND" /></GlitchText>
          <Card.Text style={{ fontFamily: 'monospace' }}>
            <HighlightableText text="SYSTEM MALFUNCTION... REALITY BREACH DETECTED..." />
          </Card.Text>
          <FadeIn visible={showEscape}>
            <CenteredContainer>
              <CollectableCard cardId="jack-spades" value="J" suit="spades" />
            </CenteredContainer>
            <CenteredContainer>
              <LevelButton targetLevel={0}>Escape the Glitch</LevelButton>
            </CenteredContainer>
          </FadeIn>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level404;