import React from 'react';
import ShrineLevel from './ShrineLevel';

const Level496 = () => (
  <ShrineLevel
    level={496}
    shrineText="Four hundred ninety-six. Add its divisors: one, two, four, eight, sixteen, thirty-one, sixty-two, one hundred twenty-four, two hundred forty-eight. The sum is four hundred ninety-six. Perfect. The third perfect number. Rarer than primes, rarer than squares — perfection is the scarcest property on the number line."
    shrineThreshold={12}
    shrineReveal="The perfects: six, twenty-eight, four hundred ninety-six, eight thousand one hundred twenty-eight. Four numbers. That's all you'll find below ten thousand. Perfection is rare."
    navButtons={[
      { target: 500, label: 'Five Hundred →' },
      { target: 28, label: '← Previous Perfect (28)' },
      { target: 8128, label: 'Next Perfect (8128)' },
    ]}
  />
);

export default Level496;
