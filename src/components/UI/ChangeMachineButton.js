import React, { useState } from 'react';
import styled from 'styled-components';
import BaseModal from './BaseModal';
import { Modal } from 'react-bootstrap';
import ChangeMachine from './ChangeMachine';

const StyledButton = styled.button`
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  transition: all 0.2s ease;
  min-width: 120px;
  aspect-ratio: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  .emoji {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .text {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }

  &:hover {
    background: #e9ecef;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ChangeMachineButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setIsOpen(true)}>
        <span className="emoji">🏦</span>
        <span className="text">Money Exchange</span>
      </StyledButton>
      

      <StyledModal 
        show={isOpen} 
        onHide={() => setIsOpen(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Machine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeMachine />
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default ChangeMachineButton; 