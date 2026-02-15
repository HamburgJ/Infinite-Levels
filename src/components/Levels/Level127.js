import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level127 = () => (
  <ThresholdLevel
    level={127}
    thresholdTarget={128}
    binaryWidth={7}
    flavor="This is what a full byte looked like before bytes were eight bits wide. Seven bits of headroom. The old machines ran out of numbers here. One hundred twenty-eight was science fiction."
  />
);

export default Level127;
