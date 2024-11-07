import React from 'react';
import styled from 'styled-components';
import { FaKey } from 'react-icons/fa';
import BaseCollectable from './BaseCollectable';

const KeyContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Key = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: gold;
  opacity: ${props => props.collected ? 0.5 : 1};
  pointer-events: ${props => props.collected ? 'none' : 'auto'};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const CollectableKey = ({ keyId = 'key-1' }) => {
  const itemConfig = {
    type: 'key',
    id: keyId,
    name: 'Golden Key',
    icon: 'key'
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      renderItem={({ collected, handleCollect }) => (
        <KeyContainer>
          <Key collected={collected} onClick={handleCollect}>
            <FaKey />
          </Key>
        </KeyContainer>
      )}
    />
  );
};

export default CollectableKey;