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

const LevelInfinity = () => {
  return (
    <>
      <PageBackground />
      <ContentWrapper>
        <InfinitySymbol>∞</InfinitySymbol>
        <StyledText>
          You've reached the infinite level. Here, all paths converge and diverge eternally.
        </StyledText>
        <StyledText>
          The boundary between numbers dissolves, and reality becomes fluid.
        </StyledText>
        <div className="d-flex justify-content-center">
          <LevelButton 
            targetLevel={0}
            variant="outline-light"
          >
            Return to Reality
          </LevelButton>
        </div>
      </ContentWrapper>
    </>
  );
};

export default LevelInfinity; 