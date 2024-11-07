import React from 'react';
import styled from 'styled-components';

const NegativeContainer = styled.div`
  transform: scaleX(-1);
  width: 100%;
  min-height: 100vh;
  padding-top: 76px; // Account for navbar height + some padding
  background: #1a1a1a;
  color: white;

  // Invert all text back to be readable
  * {
    transform: scaleX(-1);
  }

  // Override default colors
  button {
    background: #333 !important;
    color: white !important;
    border-color: #666 !important;

    &:hover {
      background: #444 !important;
    }
  }

  // Invert card backgrounds
  .card {
    background: #222 !important;
    border-color: #444 !important;
  }

  // Invert text colors
  h1, h2, h3, h4, h5, h6, p, span {
    color: white !important;
  }
`;

const NegativeLevelWrapper = ({ children }) => {
  return (
    <NegativeContainer>
      {children}
    </NegativeContainer>
  );
};

export default NegativeLevelWrapper; 