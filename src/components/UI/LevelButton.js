import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const StyledButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.5rem 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const LevelButton = ({ 
  targetLevel, 
  children, 
  variant = 'primary',
  className = '',
  disabled = false 
}) => {
  const dispatch = useDispatch();

  return (
    <StyledButton
      variant={variant}
      className={className}
      onClick={() => dispatch(setCurrentLevel(targetLevel))}
      disabled={disabled}
    >
      {children || `Level ${targetLevel}`}
    </StyledButton>
  );
};

export default LevelButton; 