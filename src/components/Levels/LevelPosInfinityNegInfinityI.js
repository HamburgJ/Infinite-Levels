import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelPosInfinityNegInfinityI = () => {
  const complexAngle = 315; // 315 degrees for +∞-∞i

  return (
    <>
      <PageBackground 
        complexAngle={complexAngle}
        complexCombination={true}
      />
      <ContentWrapper>
        <InfinitySymbol>∞-∞i</InfinitySymbol>
        <StyledText>
          Reality splits between expansion and inversion.
        </StyledText>
        <StyledText>
          The positive realm stretches outward while the imaginary folds inward.
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

export default LevelPosInfinityNegInfinityI; 