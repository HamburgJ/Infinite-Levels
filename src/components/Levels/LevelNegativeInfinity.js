import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelNegativeInfinity = () => {
  return (
    <>
      <PageBackground/>
      <ContentWrapper>
        <InfinitySymbol isNegative={true}>-∞</InfinitySymbol>
        <StyledText isNegative={true}>
          You've reached negative infinity. Here, everything is inverted.
        </StyledText>
        <StyledText isNegative={true}>
          The void stretches endlessly upward, defying the natural order.
        </StyledText>
        <div className="d-flex justify-content-center">
          <LevelButton 
            targetLevel={0}
            variant="outline-dark"
          >
            Return to Reality
          </LevelButton>
        </div>
      </ContentWrapper>
    </>
  );
};

export default LevelNegativeInfinity; 