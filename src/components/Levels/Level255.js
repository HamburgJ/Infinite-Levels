import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level255 = () => (
  <ThresholdLevel
    level={255}
    thresholdTarget={256}
    binaryWidth={8}
    flavor="A pixel's ceiling. Every color channel maxes out at two hundred fifty-five — pure red, pure green, pure blue. This is the brightest any single channel gets before it wraps to zero. White is just three of these stacked together."
  />
);

export default Level255;
