import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level1Plus3I = () => {
  return (
    <ComplexIslandLevel
      name="The Watchtower"
      coord={{real: 1, imag: 3}}
      bodyText={[
        "Climb the tower. Look out. The stable islands glow faintly — you can see them from here, scattered across the bright plane like campfires in the dark.",
        "Quadrant one — the Bright Plane — stretches before you. You can count the stable islands: one plus one i (the Heart), two plus one i (the Camp), three plus one i (the Archive), two plus two i (the Crossroads), three plus three i (the Midpoint), and further out — five plus one i, five plus three i, three plus five i, five plus five i.",
        "Below, the imaginary axis runs like a spine through the plane. Above, five i — the Summit. And somewhere far to the northeast, at nine hundred ninety nine plus nine hundred ninety nine i, something is watching."
      ]}
      navTargets={[
        { target: {real: 1, imag: 2}, label: '↓ Level 1+2i' },
        { target: {real: 1, imag: 5}, label: '↑ Level 1+5i (Lighthouse)' },
        { target: {real: 2, imag: 3}, label: '→ Level 2+3i' },
        { target: {real: 0, imag: 3}, label: '← Level 3i' },
      ]}
    />
  );
};

export default Level1Plus3I;
