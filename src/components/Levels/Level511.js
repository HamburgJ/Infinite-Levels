import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level511 = () => (
  <ThresholdLevel
    level={511}
    thresholdTarget={512}
    binaryWidth={9}
    flavor="Nine bits. Enough to address five hundred twelve positions. This was the memory ceiling for early processors — every address fit in nine bits, and five hundred eleven was the last one. After this, you needed a wider bus."
  />
);

export default Level511;
