import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import CollectableCoinBill from '../Items/CollectableCoinBill';
import HighlightableText from '../UI/HighlightableText';

const shimmer = keyframes`
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.4); }
`;

const CoinSpotlight = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  animation: ${shimmer} 2.5s ease-in-out infinite;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HintText = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
  color: ${({ theme }) => theme?.colors?.textSecondary || '#666'};
  font-style: italic;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  text-align: center;
`;

const Level7 = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const mountTime = Date.now();
    const checkElapsed = () => {
      if (Date.now() - mountTime >= 15000) setShowHint(true);
    };
    const timer = setTimeout(() => setShowHint(true), 15000);
    document.addEventListener('visibilitychange', checkElapsed);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', checkElapsed);
    };
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Everything Is a Button" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Anything with a number on it could be a doorway. Try clicking the coin."
            />
          </Card.Text>
          <CoinSpotlight>
            <CollectableCoinBill value={8} id="forward-8c" />
          </CoinSpotlight>
          {showHint && (
            <HintText>
              That coin says 8 on it. Left-click it to travel to Level 8. (Later, right-click or long-press will collect items instead.)
            </HintText>
          )}
          <CenteredContainer>
            <LevelButton targetLevel={6}>← Back to Crossroads</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level7; 