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
          In this realm, all divergances converge back to one, infinity loops back to itself, plus I think it really big.
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