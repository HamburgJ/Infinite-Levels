import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const LevelInfinity = () => {
  return (
    <>
      <PageBackground />
      <ContentWrapper>
        <InfinitySymbol>∞</InfinitySymbol>
        <StyledText>
          <HighlightableText 
            text={"You've reached the infinite level. The number line doesn't end here — it was never going to."}
            size="medium"
          />
        </StyledText>
        <StyledText>
          <HighlightableText 
            text={"But there's more than one infinity. Which one will you find next?"}
            size="medium"
          />
        </StyledText>
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
      </ContentWrapper>
    </>
  );
};

export default LevelInfinity; 