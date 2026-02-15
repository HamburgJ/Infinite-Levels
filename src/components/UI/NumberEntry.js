import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { colors, fonts, radii, shadows, transitions } from '../../styles/theme';

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: ${radii.lg};
  box-shadow: ${shadows.medium};
  backdrop-filter: blur(12px);
`;

const Input = styled.input`
  font-family: ${fonts.mono};
  font-size: 1.5rem;
  width: 140px;
  text-align: center;
  padding: 0.5rem;
  border: 2px solid ${colors.border};
  border-radius: ${radii.sm};
  background: rgba(255, 255, 255, 0.95);
  transition: border-color ${transitions.fast}, box-shadow ${transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primarySubtle};
  }
`;

const SubmitButton = styled.button`
  font-family: ${fonts.mono};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.6em 1.6em;
  min-width: 120px;
  background: ${colors.primary};
  color: #fff;
  border: 1px solid ${colors.primaryHover};
  border-radius: ${radii.sm};
  cursor: pointer;
  transition: background ${transitions.fast}, transform ${transitions.fast}, box-shadow ${transitions.fast};

  &:hover {
    background: ${colors.primaryHover};
    box-shadow: ${shadows.glow};
    transform: translateY(-1px);
  }

  &:active {
    background: ${colors.primaryActive};
    transform: translateY(0) scale(0.98);
  }
`;

const NumberEntry = ({ 
  initialValue = '', 
  onSubmit, 
  placeholder = 'Enter number',
  allowNegative = false,
  allowDecimal = false,
  maxLength = 3
}) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newValue = e.target.value;
    
    // Validate input based on props
    if (!allowNegative && newValue.includes('-')) return;
    if (!allowDecimal && newValue.includes('.')) return;
    if (newValue.length > maxLength) return;
    
    // Allow only numbers and specific special characters
    if (!/^-?\d*\.?\d*$/.test(newValue)) return;
    
    setValue(newValue);
  };

  const handleSubmit = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    if (onSubmit) {
      onSubmit(numValue);
    } else {
      // Default behavior: navigate to entered level
      dispatch(setCurrentLevel({ real: numValue, imag: 0 }));
    }
  };

  return (
    <EntryContainer>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        inputMode="numeric"
      />
      <SubmitButton onClick={handleSubmit}>
        Submit
      </SubmitButton>
    </EntryContainer>
  );
};

export default NumberEntry; 