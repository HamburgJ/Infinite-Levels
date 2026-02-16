import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FadeInSection = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1.2s ease-out forwards;
  animation-delay: ${props => props.$delay || '0s'};
`;

const Divider = styled.div`
  width: 60px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 1.5rem auto;
`;

const JourneyCount = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
`;

const LevelInfinity = () => {
  const visitedLevels = useSelector(state => state.game.visitedLevels || []);
  const levelCount = visitedLevels.length;

  return (
    <>
      <PageBackground />
      <ContentWrapper>
        <FadeInSection $delay="0s">
          <InfinitySymbol>∞</InfinitySymbol>
        </FadeInSection>
        
        <FadeInSection $delay="0.8s">
          <StyledText>
            <HighlightableText 
              text="You made it."
              size="medium"
            />
          </StyledText>
        </FadeInSection>

        <FadeInSection $delay="2s">
          <Divider />
          <StyledText>
            <HighlightableText 
              text={"You've reached the infinite level. The number line doesn't end here — it was never going to. But you found the edge anyway."}
              size="medium"
            />
          </StyledText>
        </FadeInSection>

        <FadeInSection $delay="3.5s">
          <StyledText>
            <HighlightableText 
              text={levelCount > 50
                ? `${levelCount} levels visited. Every one of them led here — and beyond.`
                : "Every level you visited led here — and beyond."}
              size="medium"
            />
          </StyledText>
        </FadeInSection>

        <FadeInSection $delay="5s">
          <Divider />
          <StyledText>
            <HighlightableText 
              text={"But there's more than one infinity. Which one will you find next?"}
              size="medium"
            />
          </StyledText>
        </FadeInSection>

        <FadeInSection $delay="6.5s">
          <div className="d-flex justify-content-center">
            <LevelButton 
              targetLevel={0}
              variant="outline-light"
            >
              Return to Reality
            </LevelButton>
          </div>
          <div className="d-flex justify-content-center" style={{marginTop: '1rem', gap: '0.5rem'}}>
            <LevelButton 
              targetLevel={'Infinityi'}
              variant="outline-light"
            >
              ∞i
            </LevelButton>
            <LevelButton 
              targetLevel={'-Infinity'}
              variant="outline-light"
            >
              -∞
            </LevelButton>
          </div>
        </FadeInSection>

        <FadeInSection $delay="7.5s">
          <JourneyCount>
            {levelCount} levels explored so far
          </JourneyCount>
        </FadeInSection>
      </ContentWrapper>
    </>
  );
};

export default LevelInfinity; 