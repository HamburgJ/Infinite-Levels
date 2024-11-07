import React from 'react';
import BaseCollectable from './BaseCollectable';
import { CollectableContainer, BaseItem } from './SharedStyles';

export const Diamond = () => {
  const itemConfig = {
    type: 'diamond',
    id: 'diamond',
    name: 'Diamond'
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      renderItem={({ collected, handleCollect }) => (
        <CollectableContainer>
          <BaseItem collected={collected} onClick={handleCollect}>
            💎
          </BaseItem>
        </CollectableContainer>
      )}
    />
  );
}; 

export default Diamond;
