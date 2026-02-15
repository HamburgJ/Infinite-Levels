import React from 'react';
import LevelButton from '../UI/LevelButton';
import HighlightableText from '../UI/HighlightableText';
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
          <HighlightableText text="Reality inverts while expanding perpendicular to itself." />
        </StyledText>
        <StyledText>
          <HighlightableText text="The boundary between negative and imaginary dissolves into pure abstraction." />
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
            targetLevel={'-Infinity'}
            variant="outline-light"
          >
            -∞
          </LevelButton>
          <LevelButton 
            targetLevel={'Infinityi'}
            variant="outline-light"
          >
            ∞i
          </LevelButton>
        </div>
      </ContentWrapper>
    </>
  );
};

export default LevelNegInfinityPosInfinityI; 