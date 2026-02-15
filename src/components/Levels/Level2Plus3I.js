import React from 'react';
import ComplexIslandLevel from './ComplexIslandLevel';

const Level2Plus3I = () => {
  return (
    <ComplexIslandLevel
      name="The Drift"
      coord={{real: 2, imag: 3}}
      bodyText={[
        "You've been walking for a while. The ground feels less solid here. The imaginary component is getting large relative to the real. Things start to drift.",
        "Two steps real, three steps imaginary. The balance is tipping toward the imaginary side. Text on the nearby unstable levels starts to feel different — less grounded, more abstract. The complex plane has a way of loosening your grip on what's 'real.'",
        "A Gaussian prime. The norm of two plus three i is thirteen — the same as the Bridge at three plus two i. Mirror numbers, sharing the same distance from the origin but reaching it by different paths."
      ]}
      navTargets={[
        { target: {real: 2, imag: 2}, label: '↓ Level 2+2i' },
        { target: {real: 1, imag: 3}, label: '← Level 1+3i (Watchtower)' },
        { target: {real: 3, imag: 3}, label: '→ Level 3+3i (Midpoint)' },
        { target: {real: 3, imag: 5}, label: '↗ Level 3+5i' },
      ]}
    />
  );
};

export default Level2Plus3I;
