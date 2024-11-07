import React from 'react';
import BaseCollectable from './BaseCollectable';
import { CollectableContainer, BaseItem } from './SharedStyles';

export const BlackHole = () => {
  const itemConfig = {
    type: 'black-hole',
    id: 'black-hole',
    name: 'Black Hole'
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      renderItem={({ collected, handleCollect }) => (
        <CollectableContainer>
          <BaseItem collected={collected} onClick={handleCollect}>
            �️
          </BaseItem>
        </CollectableContainer>
      )}
    />
  );
}; 

export default BlackHole;
