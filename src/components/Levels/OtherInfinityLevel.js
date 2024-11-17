import React from 'react';
import LevelButton from '../UI/LevelButton';
import {
  PageBackground,
  ContentWrapper,
  InfinitySymbol,
  StyledText
} from './InfinityLevelStyles';
import PropTypes from 'prop-types';

const OtherInfinityLevel = ({ complexAngle, symbol, messages }) => {
  return (
    <>
      <PageBackground 
        complexAngle={complexAngle}
        complexCombination={true}
      />
      <ContentWrapper>
        <InfinitySymbol>{symbol}</InfinitySymbol>
        {messages.map((message, index) => (
          <StyledText key={index}>
            {message}
          </StyledText>
        ))}
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

OtherInfinityLevel.propTypes = {
  complexAngle: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default OtherInfinityLevel; 