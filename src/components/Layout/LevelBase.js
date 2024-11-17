import React from 'react';
import styled from 'styled-components';
import BackgroundCube from './BackgroundCube';

const BasePage = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  background: ${props => props.theme === 'negative' 
    ? "black"
    : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'};
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const LevelBase = ({ level, theme = 'normal', children }) => {
  return (
    <>
      <BasePage theme={theme} />
      <BackgroundCube level={level} theme={theme} />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  );
};

export default LevelBase; 