import React from 'react';
import styled from 'styled-components';
import { FaWallet } from 'react-icons/fa';

const WalletIcon = styled(FaWallet)`
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  pointer-events: none;
`;

const WalletItem = ({ onWalletClick }) => {
  return (
    <>
      <WalletIcon onClick={onWalletClick} />
    </>
  );
};

export default WalletItem; 