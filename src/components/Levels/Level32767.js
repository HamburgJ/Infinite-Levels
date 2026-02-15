import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level32767 = () => (
  <ThresholdLevel
    level={32767}
    thresholdTarget={32768}
    binaryWidth={15}
    flavor="Fifteen bits. The maximum value of a signed sixteen-bit integer. Audio samples, elevation maps, sensor readings — they all peak here. This is the loudest a sixteen-bit sound wave gets before it clips."
  />
);

export default Level32767;
