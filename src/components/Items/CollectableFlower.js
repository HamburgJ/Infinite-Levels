import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { rightClickFlower, leftClickFlower } from '../../store/slices/inventorySlice';

const FlowerContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const FlowerDisplay = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

export const CollectableFlower = ({ 
  flowerType,
  growthLevel,
  stage,
  weight,
  name,
  forceAvailable = false, 
  isInventory = false, 
  isStorage = false 
}) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
    }

    if (isInventory) {
      return;
    }

    if (isRightClick) {
      dispatch(rightClickFlower({ 
        flowerItem: {
          type: 'flower',
          flowerType,
          growthLevel,
          stage,
          weight,
          name
        },
        fromStorage: isStorage,
        fromInventory: isInventory
      }));
    } else {
      dispatch(leftClickFlower({ 
        flowerItem: {
          type: 'flower',
          flowerType,
          growthLevel,
          stage,
          weight,
          name
        },
        fromStorage: isStorage,
        fromInventory: isInventory
      }));
    }
  };

  return (
    <BaseCollectable
      itemConfig={{
        type: 'flower',
        flowerType,
        growthLevel,
        stage,
        weight,
        name: `${flowerType.charAt(0).toUpperCase() + flowerType.slice(1)} (Growth: ${growthLevel})`
      }}
      useBaseCollection={false}
      renderItem={({ collected }) => (
        <FlowerContainer>
          <FlowerDisplay 
            collected={collected && !forceAvailable && !isInventory}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            {stage}
          </FlowerDisplay>
        </FlowerContainer>
      )}
    />
  );
}; 