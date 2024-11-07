import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelPosInfinityPosInfinityI = () => {
  const complexAngle = 45; // 45 degrees for +∞+∞i

  return (
    <>
      <PageBackground 
        complexAngle={complexAngle}
        complexCombination={true}
      />
      <ContentWrapper>
        <InfinitySymbol>∞+∞i</InfinitySymbol>
        <StyledText>
          You've transcended both real and imaginary infinities simultaneously.
        </StyledText>
        <StyledText>
          Reality expands in all directions, creating a hyperdimensional cascade.
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

export default LevelPosInfinityPosInfinityI; 