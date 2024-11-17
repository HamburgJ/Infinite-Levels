import styled from 'styled-components';

export const FakeCollectableLevelButton = styled.button`
  width: auto;
  min-width: ${props => props.small ? '45px' : '60px'};
  height: ${props => props.small ? '30px' : '30px'};
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  opacity: 1 !important;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.$isDigitalScreen ? '0' : '1rem 0'};
  transition: ${props => props.$isDigitalScreen ? 'background-color 0.2s' : 'transform 0.2s'};
  padding: ${props => props.$isDigitalScreen ? '0 15px' : '0.5rem 1.5rem'};
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
    transform: ${props => !props.isCollected && !props.$isDigitalScreen && 'scale(1.05)'};
    background: #0a53be;
  }

  &:disabled {
    opacity: 1 !important;
    cursor: pointer;
  }

  ${props => props.$isDigitalScreen && `
    background: #1a1a1a;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Digital', monospace;
    color: #00ff00;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    border: none;
    text-align: right;
    padding-right: 5px;
    font-size: 12px;
    
    &:hover {
      background: #2a2a2a;
    }
  `}
`; 