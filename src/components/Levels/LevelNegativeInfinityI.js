import React from 'react';
import LevelButton from '../UI/LevelButton';
import HighlightableText from '../UI/HighlightableText';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelNegativeInfinityI = () => {
  const complexAngle = 270; // 270 degrees for -i

  return (
    <>
      <PageBackground 
        complexAngle={complexAngle}
      />
      <ContentWrapper>
        <InfinitySymbol 
          isNegative={true}
          rotated={true}
        >
          -∞i
        </InfinitySymbol>
        <StyledText isNegative={true}>
          <HighlightableText text="You've reached negative imaginary infinity. Reality inverts and bends simultaneously." />
        </StyledText>
        <StyledText isNegative={true}>
          <HighlightableText text="The complex plane folds back on itself, creating impossible geometries." />
        </StyledText>
        <div className="d-flex justify-content-center">
          <LevelButton 
            targetLevel={0}
            variant="outline-dark"
          >
            Return to Reality
          </LevelButton>
        </div>
        <div className="d-flex justify-content-center" style={{marginTop: '1rem', gap: '0.5rem'}}>
          <LevelButton 
            targetLevel={'-Infinity'}
            variant="outline-dark"
          >
            -∞
          </LevelButton>
          <LevelButton 
            targetLevel={'Infinityi'}
            variant="outline-dark"
          >
            ∞i
          </LevelButton>
        </div>
      </ContentWrapper>
    </>
  );
};

export default LevelNegativeInfinityI; 