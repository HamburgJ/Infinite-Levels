import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';
import CollectableCard from '../Items/CollectableCard';

const laughTrack = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(10deg) scale(1.1); }
  75% { transform: rotate(-10deg) scale(0.9); }
  100% { transform: rotate(0deg) scale(1); }
`;

const JesterContainer = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 3px dashed #ff6b6b;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  animation: ${laughTrack} 2s infinite;
`;

const TrapText = styled(Card.Text)`
  color: ${props => props.color || '#ff0000'};
  font-size: ${props => props.size || '1.2rem'};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Level160 = () => {
  const [revealPhase, setRevealPhase] = useState(0);
  const [showEscape, setShowEscape] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealPhase(prev => prev + 1);
    }, 2000);

    if (revealPhase === 3) {
      setTimeout(() => setShowEscape(true), 1500);
    }

    return () => clearTimeout(timer);
  }, [revealPhase]);

  const dialogues = [
    "🃏 HAHAHA! You fell for the oldest trick in the book!",
    "🎪 Did you really think a clown would just let you choose ANY level?",
    "😈 Welcome to my SPECIAL show... where YOU are the entertainment!",
    "🎭 But since you've been such a good sport, here's a little gift..."
  ];

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <CenteredContainer>
            <Card.Title>
              <HighlightableText 
                text="Level 160 - The Jester's Trap" 
                size="medium"
              />
            </Card.Title>
          </CenteredContainer>

          <JesterContainer>
            {revealPhase >= 0 && (
              <TrapText color="#ff0000">
                <HighlightableText text={dialogues[Math.min(revealPhase, 3)]} />
              </TrapText>
            )}
          </JesterContainer>

          {revealPhase >= 3 && (
            <CenteredContainer>
              <CollectableCard cardId="160" value="JOKER" suit="special"/>
              <Card.Text>
                <HighlightableText 
                  text="You've obtained the Joker Card! 🃏" 
                  size="small"
                />
              </Card.Text>
            </CenteredContainer>
          )}

          {showEscape && (
            <CenteredContainer>
              <LevelButton
                variant="outline-danger"
                targetLevel={0}
                className="mt-3"
              >
                Escape the Jester's Domain
              </LevelButton>
            </CenteredContainer>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level160;
