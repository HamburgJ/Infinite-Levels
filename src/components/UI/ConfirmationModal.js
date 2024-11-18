import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import BaseModal from './BaseModal';
import HighlightableText from './HighlightableText';
import achievements from '../../data/achievements';
const StyledModal = styled(Modal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ConfirmationModal = ({ show, onConfirm, onCancel, itemName, message }) => {
  const handleConfirm = () => {
    onConfirm();
    // Don't call onCancel/onHide here as it will be called by BaseModal
  };

  const handleCancel = () => {
    onCancel();
    // Don't call onCancel/onHide here as it will be called by BaseModal
  };

  return (
    <StyledModal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <HighlightableText 
            text="Warning" 
            achievement={achievements.CONFIRMATION_TEXT}
            onLevelChange={onCancel}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HighlightableText 
          text={message || `Are you sure you want to drop the ${itemName}? It will return to its original location.`}
          achievement={achievements.CONFIRMATION_TEXT}
          onLevelChange={onCancel}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          <HighlightableText 
            text="Cancel" 
            onLevelChange={onCancel}
          />
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          <HighlightableText 
            text="Continue" 
            onLevelChange={onCancel}
          />
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default ConfirmationModal; 