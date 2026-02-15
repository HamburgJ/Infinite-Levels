import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level1023 = () => (
  <ThresholdLevel
    level={1023}
    thresholdTarget={1024}
    binaryWidth={10}
    flavor="Ten bits. One kilobyte minus one byte. The last address before the prefix changes from 'bytes' to 'kilobytes.' A small distance on the number line; a category shift in the language of computers."
  />
);

export default Level1023;
