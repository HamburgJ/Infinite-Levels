import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HiddenContent = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  height: ${props => props.isVisible ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const LinkedContent = ({ 
  buttonId,
  children,
  fallbackContent = 'This content is locked'
}) => {
  const isActivated = useSelector(
    state => state.linkedButtons.activatedButtons[buttonId]
  );

  return (
    <HiddenContent isVisible={isActivated}>
      {isActivated ? children : fallbackContent}
    </HiddenContent>
  );
};

export default LinkedContent; 