import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { plantSeed, removePlant } from '../../store/slices/flowerSlice';
import { Card, Button, Modal } from 'react-bootstrap';

const PotContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`;

const FlowerDisplay = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
`;

const FlowerMessage = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`;

const getFlowerStage = (growthLevel) => {
  if (growthLevel < 2) return '🌱';
  if (growthLevel < 4) return '🌿';
  if (growthLevel < 6) return '🌷';
  if (growthLevel < 8) return '🌹';
  if (growthLevel < 10) return '🌸';
  if (growthLevel < 12) return '🌺';
  if (growthLevel < 14) return '🌻';
  if (growthLevel < 16) return '🌼';
  if (growthLevel < 18) return '💐';
  return '🪷';
};

const getFlowerMessage = (growthLevel) => {
  if (growthLevel < 2) return "A tiny sprout emerges... I wonder what it will become? Come back later to see what it grows into.";
  if (growthLevel < 4) return "The seedling grows stronger. It needs a little more time to grow.";
  if (growthLevel < 6) return "A beautiful flower begins to form. Perhaps it has more to show...";
  if (growthLevel < 8) return "The flower blooms brilliantly. Could it grow even more magnificent?";
  if (growthLevel < 10) return "Such a lovely blossom. I sense it still holds untapped potential...";
  if (growthLevel < 12) return "The flower radiates with beauty. What further transformations await?";
  if (growthLevel < 14) return "A remarkable specimen. Yet something tells me this isn't its final form...";
  if (growthLevel < 16) return "The flower seems to shimmer with otherworldly energy. What comes next?";
  if (growthLevel < 18) return "A truly extraordinary bloom. But why do I feel it could transcend further?";
  return "A legendary lotus... the pinnacle of floral evolution!";
};

const FlowerPot = () => {
  const dispatch = useDispatch();
  const { hasPlant, growthLevel } = useSelector(state => state.flower);
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePlantClick = () => {
    if (hasPlant) {
      setShowConfirm(true);
    } else {
      dispatch(plantSeed());
    }
  };

  const handleConfirmReplant = () => {
    dispatch(removePlant());
    dispatch(plantSeed());
    setShowConfirm(false);
  };

  return (
    <PotContainer>
      <FlowerDisplay>
        {hasPlant ? getFlowerStage(growthLevel) : '🪴'}
      </FlowerDisplay>
      
      <FlowerMessage>
        {hasPlant ? getFlowerMessage(growthLevel) : "An empty pot... ready for something special to grow."}
      </FlowerMessage>
      { growthLevel > 0 && hasPlant && (
      <Button 
        variant={hasPlant ? "outline-danger" : "outline-success"}
        onClick={handlePlantClick}
        size="sm"
      >
        {hasPlant ? 'Plant New Seed' : 'Plant Seed'}
      </Button>
      )}

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Replace Current Plant?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove the current plant and start fresh?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmReplant}>
            Replace Plant
          </Button>
        </Modal.Footer>
      </Modal>
    </PotContainer>
  );
};

export default FlowerPot; 