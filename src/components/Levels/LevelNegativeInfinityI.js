import React from 'react';
import LevelButton from '../UI/LevelButton';
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
          You've reached negative imaginary infinity. Reality inverts and bends simultaneously.
        </StyledText>
        <StyledText isNegative={true}>
          The complex plane folds back on itself, creating impossible geometries.
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

export default LevelNegativeInfinityI; 