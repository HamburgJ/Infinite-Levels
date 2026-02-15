import React from 'react';
import ShrineLevel from './ShrineLevel';

const Level284 = () => (
  <ShrineLevel
    level={284}
    shrineText="Two hundred eighty-four. Its divisors: one, two, four, seventy-one, one hundred forty-two. Sum them. Two hundred twenty. And the divisors of two hundred twenty sum to... this. Two hundred eighty-four. A perfect loop. Two numbers pointing at each other across sixty-four levels of empty space, forever. Some numbers are just meant for each other."
    shrineThreshold={10}
    shrineReveal="You came from two hundred twenty, didn't you? You were always going to end up here. Some numbers are just meant for each other."
    partner={220}
    navButtons={[
      { target: 256, label: '← Two Fifty-Six' },
      { target: 365, label: 'Three Sixty-Five →' },
    ]}
  />
);

export default Level284;
