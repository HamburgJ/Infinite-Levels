import React from 'react';
import { FaBook } from 'react-icons/fa';
import BaseCollectable from './BaseCollectable';
import { CollectableContainer, BaseItem } from './SharedStyles';

const CollectableEncyclopedia = () => {
  const itemConfig = {
    type: 'encyclopedia',
    id: 'encyclopedia-1',
    name: 'Number Encyclopedia'
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      renderItem={({ collected, handleCollect }) => (
        <CollectableContainer>
          <BaseItem collected={collected} onClick={handleCollect}>
            <FaBook />
          </BaseItem>
        </CollectableContainer>
      )}
    />
  );
};

export default CollectableEncyclopedia; 