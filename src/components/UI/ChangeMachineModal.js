import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeFromInventory, addToInventory } from '../../store/slices/inventorySlice';
import WalletModal from './WalletModal';
import BaseModal from './BaseModal';

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
`;

const ChangeMachineModal = ({ show, onHide }) => {
  const [showWallet, setShowWallet] = useState(false);
  const dispatch = useDispatch();

  const handleExchange = (amount, targetDenom) => {
    dispatch(removeFromInventory({
      type: 'money',
      value: amount
    }));

    const newDenominations = calculateChange(amount, targetDenom);
    newDenominations.forEach(value => {
      dispatch(addToInventory({
        type: 'money',
        value,
        id: `money-${value}-${Date.now()}`
      }));
    });
  };

  return (
    <StyledModal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Change Machine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={() => setShowWallet(true)}>Select Money</button>
        {/* Rest of your change machine UI */}
      </Modal.Body>

      <WalletModal 
        show={showWallet}
        onHide={() => setShowWallet(false)}
        isEmbedded={true}
        onMoneySelect={(denomination) => {
          setShowWallet(false);
          // Handle money selection
        }}
      />
    </StyledModal>
  );
};

export default ChangeMachineModal; 