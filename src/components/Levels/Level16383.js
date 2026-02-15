import React from 'react';
import ThresholdLevel from './ThresholdLevel';

const Level16383 = () => (
  <ThresholdLevel
    level={16383}
    thresholdTarget={16384}
    binaryWidth={14}
    flavor="Fourteen bits of ones. In MIDI music, this is the highest pitch bend value — the note bends as far as it can go. One more and it snaps."
  />
);

export default Level16383;
