import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level3Plus1I = () => {
  return (
    <ComplexIslandLevel
      name="The Archive"
      coord={{real: 3, imag: 1}}
      bodyText={[
        "Shelves. Not physical shelves — more like the memory of shelves. Information is stored here in the way that complex numbers store information: one part real, one part imaginary.",
        "The Cartographer's journal, day fourteen: \"The islands aren't natural. Something is holding them together. The numbers zero, one, two, three, five — why THOSE numbers? Four is missing. Six is missing. It's not a sequence I recognize.\"",
        "Day fifteen: \"Unless... it's Fibonacci? Zero, one, one, two, three, five. Remove the duplicate and you get zero, one, two, three, five. The stable islands sit on Fibonacci coordinates. The golden ratio is holding the complex plane together.\"",
        "The Cartographer was right. The stable grid is built on Fibonacci numbers. The golden ratio, hiding in the structure of imaginary space."
      ]}
      navTargets={[
        { target: {real: 2, imag: 1}, label: '← Level 2+1i (Camp)' },
        { target: {real: 5, imag: 1}, label: '→ Level 5+1i (Outpost)' },
        { target: {real: 3, imag: 3}, label: '↑ Level 3+3i' },
        { target: {real: 5, imag: 3}, label: '↗ Level 5+3i (Frontier)' },
      ]}
    />
  );
};

export default Level3Plus1I;
