import React from 'react';
import styled from 'styled-components';

const HintContainer = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.7)'};
  margin-left: 1rem;
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 4px;
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
`;

const levelHints = {
  1: "Find the hidden button in the accordion menu",
  2: "Rotate the cube to find your path",
  3: "Some secrets require persistence...",
  4: "Sometimes going back is the way forward",
  5: "Numbers can be more than just answers",
  6: "All single digits lead somewhere",
  7: "Time reveals new paths",
  8: "Check your wallet carefully",
  9: "Tutorial complete - review what you've learned",
  10: "Welcome to the complex plane",
  11: "The clock shows more than just time",
  12: "Collect buttons for later use",
  13: "Mathematics can transform your journey",
  14: "Enter the negative space",
  15: "Stability is not guaranteed"
};

const LevelHint = ({ level, theme = 'light' }) => {
  return (
    <HintContainer theme={theme}>
      {levelHints[level] || "Explore and discover..."}
    </HintContainer>
  );
};

export default LevelHint; 