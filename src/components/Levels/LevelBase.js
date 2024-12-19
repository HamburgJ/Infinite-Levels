import React from 'react';
import styled from 'styled-components';
import BackgroundCube from '../Layout/BackgroundCube';

const BasePage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  overflow: hidden;
`;

const LevelBase = ({ level, theme = 'normal', children }) => {
  return (
    <>
      <BasePage theme={theme} />
      <BackgroundCube level={level} theme={theme} />
      {children}
    </>
  );
};

export default LevelBase; 