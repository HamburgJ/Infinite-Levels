import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level8191 = () => (
  <ThresholdLevel
    level={8191}
    thresholdTarget={8192}
    binaryWidth={13}
    flavor="Thirteen bits. A Mersenne prime — two to the thirteenth minus one, and it happens to be prime. Not all thresholds have this distinction. The ones that do are prized by mathematicians like gemstones."
  />
);

export default Level8191;
