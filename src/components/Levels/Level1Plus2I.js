import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level1Plus2I = () => {
  return (
    <ComplexIslandLevel
      name="The Echo Chamber"
      coord={{real: 1, imag: 2}}
      bodyText={[
        "Sound travels strangely in the complex plane. This chamber catches the echoes of places that fell apart. You can hear the ghost-frequencies of collapsed levels reverberating through the walls.",
        "Every unstable level that crumbles sends a ripple through the nearby complex plane. This island, perched between the imaginary axis and the interior, catches those ripples like a satellite dish.",
        "The echoes whisper coordinates — fragments of places that existed for ten seconds and then were gone. Most of them you'll never visit. But some of them are worth remembering."
      ]}
      navTargets={[
        { target: {real: 1, imag: 1}, label: '↓ Level 1+1i' },
        { target: {real: 1, imag: 3}, label: '↑ Level 1+3i' },
        { target: {real: 2, imag: 2}, label: '→ Level 2+2i' },
      ]}
    />
  );
};

export default Level1Plus2I;
