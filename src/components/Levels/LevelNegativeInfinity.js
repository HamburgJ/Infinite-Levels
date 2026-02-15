import React from 'react';
import LevelButton from '../UI/LevelButton';
import HighlightableText from '../UI/HighlightableText';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelNegativeInfinity = () => {
  return (
    <>
      <PageBackground isNegative={true}/>
      <ContentWrapper>
        <InfinitySymbol isNegative={true}>-∞</InfinitySymbol>
        <StyledText isNegative={true}>
          <HighlightableText text="You've reached negative infinity. Here, everything is inverted." />
        </StyledText>
        <StyledText isNegative={true}>
          <HighlightableText text="The void stretches endlessly upward, defying the natural order." />
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
            targetLevel={'Infinity'}
            variant="outline-dark"
          >
            ∞
          </LevelButton>
          <LevelButton 
            targetLevel={'-Infinityi'}
            variant="outline-dark"
          >
            -∞i
          </LevelButton>
        </div>
      </ContentWrapper>
    </>
  );
};

export default LevelNegativeInfinity; 