import styled from 'styled-components';

export const CollectableContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const BaseItem = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`; 