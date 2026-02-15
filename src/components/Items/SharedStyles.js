import styled from 'styled-components';

export const CollectableContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const BaseItem = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme === 'dark' ? '#fff' : 'var(--color-text)'};
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.25s ease, filter 0.25s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1) translateY(-2px)'};
    filter: ${props => props.collected ? 'none' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))'};
  }
`; 