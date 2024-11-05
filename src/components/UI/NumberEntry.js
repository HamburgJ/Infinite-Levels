import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  font-size: 1.5rem;
  width: 120px;
  text-align: center;
  padding: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  
  &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const SubmitButton = styled.button`
  font-size: 1.2rem;
  padding: 0.8em 1.6em;
  min-width: 120px;
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