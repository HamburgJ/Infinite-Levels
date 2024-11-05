import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { equipItem } from '../../store/slices/inventorySlice';
import { Card, Button } from 'react-bootstrap';
import { CollectibleLevelButton } from '../UI/SharedStyles';
import LevelButton from '../UI/LevelButton';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Level12 = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const collectButton = (level, variant) => {
    if (!equippedItem) {
      dispatch(equipItem({ 
        type: 'levelButton',
        value: level,
        variant: variant
      }));
    }
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
            <CollectibleLevelButton
              variant="outline-primary"
              onClick={() => collectButton(15, 'outline-primary')}
              disabled={!!equippedItem}
            >
              15
            </CollectibleLevelButton>

            <CollectibleLevelButton
              variant="outline-success"
              onClick={() => collectButton(20, 'outline-success')}
              disabled={!!equippedItem}
            >
              20
            </CollectibleLevelButton>

            <CollectibleLevelButton
              variant="outline-danger"
              onClick={() => collectButton(25, 'outline-danger')}
              disabled={!!equippedItem}
            >
              25
            </CollectibleLevelButton>
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
    </LevelContainer>
  );
};

export default Level12; 