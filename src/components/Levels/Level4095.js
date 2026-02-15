import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level4095 = () => (
  <ThresholdLevel
    level={4095}
    thresholdTarget={4096}
    binaryWidth={12}
    flavor="Twelve bits. Four thousand ninety-five. The maximum file descriptor on most UNIX systems. Every open file, every socket, every pipe — they all get a number, and this is the last one the kernel gives out without special permission."
  />
);

export default Level4095;
