import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

const StyledModal = styled(Modal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ConfirmationModal = ({ show, onConfirm, onCancel, itemName }) => {
  return (
    <StyledModal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Drop Item?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to drop the {itemName}? It will return to its original location.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Drop Item
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default ConfirmationModal; 