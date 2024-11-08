import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import BaseModal from './BaseModal';
import WalletSystem from '../../systems/WalletSystem';
import { setCurrentLevel } from '../../store';
import MoneyDisplay from './MoneyDisplay';
import { useAchievements } from '../../hooks/useAchievements';

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
`;

const WalletModal = ({ show, onHide, isEmbedded = false, onMoneySelect = null }) => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  const handleMoneyClick = (item) => {
    if (isEmbedded && onMoneySelect) {
      onMoneySelect(item.value);
    } else {
      const levelValue = item.value >= 500 ? item.value / 100 : item.value;
      WalletSystem.collectMoney(levelValue);
      dispatch(setCurrentLevel(levelValue));
      unlockAchievement('WALLET_TRAVEL');
      onHide();
    }
  };

  return (
    <StyledModal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {isEmbedded ? 'Select Money to Exchange' : 'Wallet Contents'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MoneyDisplay 
          selectable={true}
          onItemClick={handleMoneyClick}
        />
      </Modal.Body>
    </StyledModal>
  );
};

export default WalletModal;