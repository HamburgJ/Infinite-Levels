import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level3Plus2I = () => {
  return (
    <ComplexIslandLevel
      name="The Bridge"
      coord={{real: 3, imag: 2}}
      bodyText={[
        "A bridge between territories. To the south: the Archive and the Camp, close to the real axis. To the north: the Midpoint and the heights. And to the west... the Mirror Coast.",
        "The Bridge connects the Bright Plane to the Mirror Coast — the second quadrant, where everything is reflected. The same stable islands exist there, but flipped. Negative three plus two i is this island's mirror twin. Cross the bridge if you dare.",
        "A Gaussian prime. The norm of three plus two i is thirteen — a prime number. In the complex plane, this point is indivisible. Something about that feels important."
      ]}
      navTargets={[
        { target: {real: 3, imag: 1}, label: '↓ Level 3+1i (Archive)' },
        { target: {real: 3, imag: 3}, label: '↑ Level 3+3i (Midpoint)' },
        { target: {real: 2, imag: 2}, label: '← Level 2+2i' },
        { target: {real: -3, imag: 2}, label: '⟵ Level -3+2i (Mirror Coast)' },
      ]}
    />
  );
};

export default Level3Plus2I;
