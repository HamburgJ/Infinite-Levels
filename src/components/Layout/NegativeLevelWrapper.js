import React from 'react';
import styled from 'styled-components';
const NegativeContainer = styled.div`
  transform: scaleX(-1);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background: black;
  color: white;
  border-color: white !important;

  // Override default colors
  button {
    background: black !important;
    color: white !important;
    border-color: white !important;

    &:hover {
      background: #444 !important;
    }
  }

  // Invert card backgrounds
  .card .modal-content .card-body .card-title {
    background: black !important;
    border-color: white !important;
    border-width: 2px !important;
  }

  // Invert text colors
  h1, h2, h3, h4, h5, h6, p, span{
    color: white !important;
  }

  p .card-text {
    color: white !important;
  }
  p.card-title {
    color: white !important;
  }

  div.card-body {
    background: black !important;
    border-color: white !important;
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