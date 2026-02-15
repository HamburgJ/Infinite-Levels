import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level65535 = () => (
  <ThresholdLevel
    level={65535}
    thresholdTarget={65536}
    binaryWidth={16}
    flavor="Sixteen bits. The largest number an unsigned sixteen-bit integer can hold. Old games stored your health here. Your gold. Your high score. Sixty-five thousand five hundred thirty-five was the ceiling of what a world could contain. Some players found ways to push past it. The number wrapped to zero, and they lost everything."
  />
);

export default Level65535;
