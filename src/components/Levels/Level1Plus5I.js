import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level1Plus5I = () => {
  return (
    <ComplexIslandLevel
      name="The Lighthouse"
      coord={{real: 1, imag: 5}}
      bodyText={[
        "A light in the dark. Someone put it here to help travelers on the imaginary coast. Its beam sweeps across the nearby unstable levels — if you have the Compass, you can feel its warmth even from a distance.",
        "The Lighthouse sits at the intersection of two frontiers: the imaginary coast (running north from one plus one i) and the summit ridge (running east from five i). It's one of the loneliest stable islands — far from the diagonal highway, far from the real axis.",
        "But the view is extraordinary. To the south: the Heart of Complexity at one plus one i, where this all began. To the east: the Singularity at five plus five i. And everywhere else: the flickering instability of the complex plane, levels winking in and out of existence."
      ]}
      navTargets={[
        { target: {real: 0, imag: 5}, label: '← Level 5i (Summit)' },
        { target: {real: 1, imag: 3}, label: '↓ Level 1+3i (Watchtower)' },
        { target: {real: 3, imag: 5}, label: '→ Level 3+5i' },
        { target: {real: 5, imag: 5}, label: '↗ Level 5+5i' },
      ]}
    />
  );
};

export default Level1Plus5I;
