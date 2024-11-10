import styled from 'styled-components';

export const CollectibleLevelButton = styled.button`
  width: auto;
  min-width: ${props => props.small ? '45px' : '60px'};
  height: ${props => props.small ? '30px' : '30px'};
  background: ${props => props.variant === 'outline-primary' ? '#4a90e2' : 
               props.variant === 'outline-success' ? '#2ecc71' : 
               props.variant === 'outline-danger' ? '#e74c3c' : '#4a90e2'};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  opacity: 1 !important;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.small ? '0' : '0.5rem'};
  transition: filter 0.2s ease;
  padding: 4px 8px;
  position: relative;
  z-index: 2;
  white-space: nowrap;
  font-size: ${props => {
    const textLength = props.children?.toString().length || 1;
    if (textLength >= 8) return '0.7rem';
    if (textLength >= 6) return '0.8rem';
    if (textLength >= 4) return '0.9rem';
    return '1rem';
  }};

  &:hover {
    filter: brightness(1.15);
  }

  &:disabled {
    opacity: 1 !important;
    cursor: pointer;
  }
`; 