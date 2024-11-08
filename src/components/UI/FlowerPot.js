import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { plantSeed, removePlant } from '../../store/slices/flowerSlice';
import { Card, Button, Modal, ProgressBar } from 'react-bootstrap';
import flowerTypes from '../../data/flowerTypes';
import { equipItem } from '../../store/slices/inventorySlice';

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
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  
  &:hover {
    transform: ${props => props.clickable ? 'scale(1.1)' : 'none'};
  }
`;

const FlowerMessage = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
`;

const ProgressContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

const getFlowerStage = (growthLevel, flowerType) => {
  if (!flowerType) return null;
  const stages = flowerTypes[flowerType].stages;
  const levels = Object.keys(stages).map(Number).sort((a, b) => a - b);
  
  for (let i = levels.length - 1; i >= 0; i--) {
    if (growthLevel >= levels[i]) {
      return stages[levels[i]];
    }
  }
  return stages[0];
};

const getFlowerMessage = (growthLevel, flowerType) => {
  if (!flowerType) return "An empty pot... ready for something special to grow.";
  
  const messages = flowerTypes[flowerType].messages;
  const levels = Object.keys(messages).map(Number).sort((a, b) => a - b);
  
  for (let i = levels.length - 1; i >= 0; i--) {
    if (growthLevel >= levels[i]) {
      return messages[levels[i]];
    }
  }
  return messages[0];
};

const getNextStageLevel = (currentLevel, flowerType) => {
  if (!flowerType) return 0;
  const stages = Object.keys(flowerTypes[flowerType].stages)
    .map(Number)
    .sort((a, b) => a - b);
  
  for (const level of stages) {
    if (level > currentLevel) {
      return level;
    }
  }
  return stages[stages.length - 1];
};

const getProgressPercentage = (growthLevel, flowerType) => {
  if (!flowerType) return 0;
  const currentLevel = growthLevel;
  const nextLevel = getNextStageLevel(currentLevel, flowerType);
  const prevLevel = Math.max(0, ...Object.keys(flowerTypes[flowerType].stages)
    .map(Number)
    .filter(level => level <= currentLevel));
  
  const progress = currentLevel - prevLevel;
  const total = nextLevel - prevLevel;
  return Math.min((progress / total) * 100, 100);
};

const FlowerPot = () => {
  const dispatch = useDispatch();
  const { hasPlant, growthLevel, flowerType } = useSelector(state => state.flower);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPickupWarning, setShowPickupWarning] = useState(false);
  const [pendingPickup, setPendingPickup] = useState(false);

  const getMaxGrowthLevel = () => {
    if (!flowerType) return 0;
    const stages = Object.keys(flowerTypes[flowerType].stages).map(Number);
    return Math.max(...stages);
  };

  const getProgressPercentage = () => {
    const maxLevel = getMaxGrowthLevel();
    return Math.min((growthLevel / maxLevel) * 100, 100);
  };

  const handlePlantClick = () => {
    if (hasPlant) {
      setShowConfirm(true);
    } else if (equippedItem?.type === 'flower') {
      dispatch(plantSeed());
    } else {
      dispatch(plantSeed());
    }
  };

  const handleFlowerClick = () => {
    if (!hasPlant) return;
    setShowPickupWarning(true);
  };

  const handleConfirmPickup = () => {
    const stages = Object.keys(flowerTypes[flowerType].stages).map(Number).sort((a, b) => a - b);
    let currentStage = 0;
    for (let stage of stages) {
      if (growthLevel >= stage) {
        currentStage = stage;
      }
    }
    
    const flowerItem = {
      type: 'flower',
      flowerType,
      growthLevel,
      stage: getFlowerStage(growthLevel, flowerType),
      name: `${flowerType.charAt(0).toUpperCase() + flowerType.slice(1)} (Growth: ${growthLevel})`,
      weight: flowerTypes[flowerType].weights[currentStage]
    };
    
    dispatch(equipItem(flowerItem));
    dispatch(removePlant());
    setShowPickupWarning(false);
  };

  return (
    <PotContainer>
      <FlowerDisplay 
        clickable={hasPlant} 
        onClick={handleFlowerClick}
      >
        {hasPlant ? getFlowerStage(growthLevel, flowerType) : null}
      </FlowerDisplay>
      
      {hasPlant && (
        <ProgressContainer>
          <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: '#666' }}>Growth</div>
          <ProgressBar 
            now={getProgressPercentage()} 
            variant="success"
          />
        </ProgressContainer>
      )}
      
      <FlowerMessage>
        {hasPlant ? getFlowerMessage(growthLevel, flowerType) : "An empty pot... ready for something special to grow."}
      </FlowerMessage>

      <Button 
        variant={hasPlant ? "outline-danger" : "outline-success"}
        onClick={handlePlantClick}
        size="sm"
      >
        {hasPlant ? 'Plant New Seed' : 'Plant Seed'}
      </Button>

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
          <Button variant="danger" onClick={() => {
            dispatch(removePlant());
            dispatch(plantSeed());
            setShowConfirm(false);
          }}>
            Replace Plant
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPickupWarning} onHide={() => setShowPickupWarning(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Pick Up Flower?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Warning: Once you pick up the flower, you cannot put it back in the pot. You'll need to plant a new seed to grow another flower.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPickupWarning(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmPickup}>
            Pick Up Flower
          </Button>
        </Modal.Footer>
      </Modal>
    </PotContainer>
  );
};

export default FlowerPot; 