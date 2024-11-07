import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelNegInfinityNegInfinityI = () => {
  const complexAngle = 225; // 225 degrees for -∞-∞i

  return (
    <>
      <PageBackground 
        complexAngle={complexAngle}
        complexCombination={true}
      />
      <ContentWrapper>
        <InfinitySymbol>-∞-∞i</InfinitySymbol>
        <StyledText>
          A double inversion creates impossible geometries.
        </StyledText>
        <StyledText>
          Both real and imaginary dimensions collapse inward infinitely.
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

export default LevelNegInfinityNegInfinityI; 