import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { activateButton } from '../../store/slices/linkedButtonsSlice';

const StyledButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.activated {
    background-color: #28a745;
    border-color: #28a745;
  }
`;

const LinkedTriggerButton = ({ 
  buttonId,
  children,
  variant = 'primary',
  className = ''
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(activateButton(buttonId));
  };

  return (
    <StyledButton
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children || 'Activate'}
    </StyledButton>
  );
};

export default LinkedTriggerButton; 