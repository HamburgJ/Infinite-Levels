import React from 'react';
import LevelButton from '../UI/LevelButton';
import HighlightableText from '../UI/HighlightableText';
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
          <HighlightableText text="You've transcended both real and imaginary infinities simultaneously." />
        </StyledText>
        <StyledText>
          <HighlightableText text="Reality expands in all directions, creating a hyperdimensional cascade." />
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
            targetLevel={'Infinity'}
            variant="outline-light"
          >
            ∞
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

export default LevelPosInfinityPosInfinityI; 