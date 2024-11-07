import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';

const LevelInfinityI = () => {
  const complexAngle = 90/360; // 90 degrees for i

  return (
    <>
      <PageBackground complexAngle={complexAngle} />
      <ContentWrapper>
        <InfinitySymbol rotated={true}>∞i</InfinitySymbol>
        <StyledText>
          You've reached imaginary infinity. Reality bends perpendicular to itself.
        </StyledText>
        <StyledText>
          The complex plane extends infinitely in all dimensions.
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

export default LevelInfinityI; 