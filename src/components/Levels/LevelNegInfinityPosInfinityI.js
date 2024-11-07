import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelNegInfinityPosInfinityI = () => {
  const complexAngle = 135; // 135 degrees for -∞+∞i

  return (
    <>
      <PageBackground 
        complexAngle={complexAngle}
        complexCombination={true}
      />
      <ContentWrapper>
        <InfinitySymbol>-∞+∞i</InfinitySymbol>
        <StyledText>
          Reality inverts while expanding perpendicular to itself.
        </StyledText>
        <StyledText>
          The boundary between negative and imaginary dissolves into pure abstraction.
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

export default LevelNegInfinityPosInfinityI; 