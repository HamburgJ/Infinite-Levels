import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level2Plus1I = () => {
  return (
    <ComplexIslandLevel
      name="The Cartographer's Camp"
      coord={{real: 2, imag: 1}}
      bodyText={[
        "A camp. Someone was here before you. Supplies are scattered — a bedroll, a compass case (empty now), and a journal open to the first page.",
        "\"Day one. The stable islands form a grid. Zero, one, two, three, five in each dimension. I've numbered them. Thirty six safe coordinate pairs in an infinite plane. The rest? Quicksand. Ten seconds and the ground opens up. I'm starting my survey from here — two plus one i. Base camp.\"",
        "The Cartographer mapped these islands. Their journal continues somewhere further out. The next entry mentions the Archive at three plus one i."
      ]}
      navTargets={[
        { target: {real: 1, imag: 1}, label: '↙ Level 1+1i' },
        { target: {real: 3, imag: 1}, label: '→ Level 3+1i (The Archive)' },
        { target: {real: 2, imag: 2}, label: '↑ Level 2+2i' },
      ]}
    />
  );
};

export default Level2Plus1I;
