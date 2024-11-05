import styled from 'styled-components';

export const CollectibleLevelButton = styled.button`
  width: ${props => props.small ? '45px' : '60px'};
  height: ${props => props.small ? '45px' : '60px'};
  background: ${props => props.variant === 'outline-primary' ? '#4a90e2' : 
               props.variant === 'outline-success' ? '#2ecc71' : 
               props.variant === 'outline-danger' ? '#e74c3c' : '#4a90e2'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: ${props => props.small ? '1rem' : '1.2rem'};
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.small ? '0' : '0.5rem'};
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.15);
  }
`; 