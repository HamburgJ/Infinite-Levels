import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level3Plus5I = () => {
  return (
    <ComplexIslandLevel
      name="The Observatory Approach"
      coord={{real: 3, imag: 5}}
      bodyText={[
        "A road leads northeast. A very, very long road. At the end, they say, there's a place that can see every number. The Numberservatory.",
        "Coordinates: nine hundred ninety nine plus nine hundred ninety nine i. That's nine hundred and ninety six steps along each axis from here. The Cartographer tried to walk there. They turned back at the Frontier.",
        "But you have something the Cartographer didn't — a number entry system. Type the coordinates directly and the complex plane will take you there. Or walk. It's your choice. The road is long, and the ground between here and there is infinitely unstable."
      ]}
      navTargets={[
        { target: {real: 3, imag: 3}, label: '↓ Level 3+3i (Midpoint)' },
        { target: {real: 5, imag: 5}, label: '→ Level 5+5i' },
        { target: {real: 1, imag: 5}, label: '← Level 1+5i (Lighthouse)' },
        { target: {real: 999, imag: 999}, label: '↗ Level 999+999i (Numberservatory)' },
      ]}
    />
  );
};

export default Level3Plus5I;
