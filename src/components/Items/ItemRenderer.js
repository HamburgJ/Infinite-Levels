import React from 'react';
import { FaKey, FaBook } from 'react-icons/fa';
import { CollectibleLevelButton, } from '../UI/SharedStyles';
import styled from 'styled-components';
import CollectableWallet from './CollectableWallet';
import CollectableCardBox from './CollectableCardBox';
import CollectableCard from './CollectableCard';
import CollectableCoinBill from './CollectableCoinBill';
import CollectableDiamond from './CollectableDiamond';
import CollectableBlackHole from './CollectableBlackHole';
import CollectableLevelButton from './CollectableLevelButton';
import { CollectableKey } from './CollectableKey';
import { CollectableEncyclopedia } from './CollectableEncyclopedia';
import { CollectableFlower } from './CollectableFlower';
import CollectableText from './CollectableText';

const SmallContainer = styled.div`
  transform: scale(0.6);
  transform-origin: center;
  margin: -15px;
`;


const ItemRenderer = ({ item, isStorage = false, forceAvailable = false }) => {
  if (!item) return null;

  switch (item?.type) {
    case 'key':
      return (
        <SmallContainer>
          <CollectableKey
            forceAvailable={forceAvailable}
            isInventory={!isStorage}
            isStorage={isStorage}
          />
        </SmallContainer>
      );
    case 'levelButton':
      return (
        <CollectableLevelButton
          value={item.value}
          variant={item.variant}
          displayText={item.displayText}
          id={item.id}
          name={item.name}
          forceAvailable={forceAvailable}
          isInventory={!isStorage}
          isStorage={isStorage}
          isDigitalScreen={item.isDigitalScreen}
        />
      );
    case 'book':
      return <CollectibleLevelButton><FaBook /></CollectibleLevelButton>;
    case 'wallet':
      return (
        <SmallContainer>
          <CollectableWallet 
            forceAvailable={forceAvailable}
            isInventory={!isStorage}
            isStorage={isStorage}
          />
        </SmallContainer>
      );
    case 'encyclopedia':
      return (
        <SmallContainer>
          <CollectableEncyclopedia
            forceAvailable={forceAvailable}
            isInventory={!isStorage}
            isStorage={isStorage}
          />
        </SmallContainer>
      );
    case 'card-box':
      return (
        <SmallContainer>
          <CollectableCardBox
            forceAvailable={forceAvailable} 
            isInventory={!isStorage}
            isStorage={isStorage}
          />
        </SmallContainer>
      );
    case 'card':
      return (
        <SmallContainer>
          <CollectableCard
            cardId={item.collectableCardId || item.id}
            value={item.value}
            suit={item.suit}
            forceAvailable={forceAvailable}
            isInventory={!isStorage}
            isStorage={isStorage}
          />
        </SmallContainer>
      );
    case 'currency':
      return (
        <SmallContainer>
          <CollectableCoinBill
            value={item.value}
            id={item.id}
            forceAvailable={forceAvailable}
            isInventory={!isStorage}
            isStorage={isStorage}
          />
        </SmallContainer>
      );
    case 'text':
      return (
        <CollectableText
          sourceId={item.sourceId}
          index={item.index}
          level={item.level}
          text={item.text}
          theme={item.theme}
          isLevelNegative={item.isLevelNegative}
          forceAvailable={forceAvailable}
          isInventory={!isStorage}
          isStorage={isStorage}
        />
      );
    case 'diamond':
      return <CollectableDiamond 
        forceAvailable={forceAvailable}
        isInventory={!isStorage}
        isStorage={isStorage}
      />;
    case 'black-hole':
      return <CollectableBlackHole
        forceAvailable={forceAvailable}
        isInventory={!isStorage}
        isStorage={isStorage}
      />;
    case 'flower':
      return (
        <CollectableFlower
          flowerType={item.flowerType}
          growthLevel={item.growthLevel}
          stage={item.stage}
          weight={item.weight}
          name={item.name}
          forceAvailable={forceAvailable}
          isInventory={!isStorage}
          isStorage={isStorage}
        />
      );
    default:
      return null;
  }
};

export default ItemRenderer; 