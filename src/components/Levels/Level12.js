import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { equipItem, swapEquippedItem } from '../../store/slices/inventorySlice';
import { Card, Button } from 'react-bootstrap';
import CollectableLevelButton from '../Items/CollectableLevelButton';
import LevelButton from '../UI/LevelButton';
import ConfirmationModal from '../UI/ConfirmationModal';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Level12 = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingButton, setPendingButton] = useState(null);

  const collectButton = (level, variant) => {
    const newButton = { 
      type: 'levelButton',
      value: level,
      variant: variant
    };

    if (equippedItem) {
      setPendingButton(newButton);
      setShowConfirmModal(true);
    } else {
      dispatch(equipItem(newButton));
    }
  };

  const handleConfirmSwap = () => {
    if (pendingButton) {
      dispatch(swapEquippedItem(pendingButton));
      setPendingButton(null);
    }
  };

  const handleCancelSwap = () => {
    setPendingButton(null);
  };

  return (
    <LevelContainer>
      <Card>
        <Card.Body>
          <Card.Title>Level 12 - The Button Collection</Card.Title>
          <Card.Text>
            You can collect one level button and store it in your inventory!
            Click the button to store it, then click it in your inventory to travel to that level.
          </Card.Text>

          <div className="d-flex flex-wrap justify-content-center">
            <CollectableLevelButton
              variant="outline-primary"
              onClick={() => collectButton(15, 'outline-primary')}
              disabled={!!equippedItem}
            >
              15
            </CollectableLevelButton>

            <CollectableLevelButton
              variant="outline-success"
              onClick={() => collectButton(20, 'outline-success')}
              disabled={!!equippedItem}
            >
              20
            </CollectableLevelButton>

            <CollectableLevelButton
              variant="outline-danger"
              onClick={() => collectButton(25, 'outline-danger')}
              disabled={!!equippedItem}
            >
              25
            </CollectableLevelButton>
          </div>

          <LevelButton 
            targetLevel={13}
            variant="primary"
            className="mt-4"
          >
            Continue to Level 13
          </LevelButton>
        </Card.Body>
      </Card>

      <ConfirmationModal
        show={showConfirmModal}
        onConfirm={handleConfirmSwap}
        onCancel={handleCancelSwap}
        itemName={equippedItem?.name || 'current item'}
        message="Picking up a new item will return your current item to its original location. Continue?"
      />
    </LevelContainer>
  );
};

export default Level12; 