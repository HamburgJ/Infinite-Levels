import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FaLock, FaLockOpen, FaBox } from 'react-icons/fa';

const BoxContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Box = styled.div`
  display: inline-block;
  cursor: ${props => props.hasKey ? 'pointer' : 'not-allowed'};
  font-size: 3rem;
  position: relative;
  opacity: ${props => props.isOpen ? 0.7 : 1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${props => props.hasKey ? 'scale(1.1)' : 'none'};
  }
`;

const Lock = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  color: gold;
`;

const Content = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const LockedBox = ({ children, requiredKey = 'key-1' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const inventory = useSelector(state => state.inventory.equippedItem);
  const hasKey = inventory[requiredKey];

  const handleClick = () => {
    if (hasKey && !isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsContentVisible(true), 500);
    }
  };

  return (
    <BoxContainer>
      <Box hasKey={hasKey} isOpen={isOpen} onClick={handleClick}>
        <FaBox />
        <Lock>
          {isOpen ? <FaLockOpen /> : <FaLock />}
        </Lock>
      </Box>
      <Content isVisible={isContentVisible}>
        {children}
      </Content>
    </BoxContainer>
  );
};

export default LockedBox; 