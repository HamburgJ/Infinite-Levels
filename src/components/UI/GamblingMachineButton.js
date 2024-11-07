import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import GamblingMachine from './GamblingMachine';

const StyledButton = styled.button`
  background: #ffd700;
  border: 1px solid #e6c200;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  transition: all 0.2s ease;

  &:hover {
    background: #ffed4a;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledModal = styled(Modal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const GamblingMachineButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setIsOpen(true)}>
        🎰 Button Machine
      </StyledButton>

      <StyledModal 
        show={isOpen} 
        onHide={() => setIsOpen(false)}
        centered
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Button Machine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GamblingMachine />
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default GamblingMachineButton; 