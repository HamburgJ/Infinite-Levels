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
            text={"You've reached the infinite level. Here, all paths converge and diverge eternally."}
            size="medium"
          />
        </StyledText>
        <StyledText>
          <HighlightableText 
            text={"But ask yourself, what is infinity? Is there really only one? And if not, for which infinity I will discover next?"}
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