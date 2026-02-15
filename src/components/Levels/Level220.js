import React from 'react';
import ShrineLevel from './ShrineLevel';

const Level220 = () => (
  <ShrineLevel
    level={220}
    shrineText="Two hundred twenty. Add up its divisors: one, two, four, five, ten, eleven, twenty, twenty-two, forty-four, fifty-five, one hundred ten. The sum? Two hundred eighty-four. Now go to Level two hundred eighty-four and do the same thing. Its divisors sum to... two hundred twenty. You end up right back here. Mathematicians call them 'amicable.' Friendly numbers. They've been pointing at each other since Pythagoras discovered them. That's twenty-five hundred years of mutual devotion."
    shrineThreshold={10}
    shrineReveal="Your pair is waiting at Level two hundred eighty-four. Go there. See what happens."
    partner={284}
    navButtons={[
      { target: 200, label: '← Two Hundred' },
      { target: 233, label: 'Two Thirty-Three →' },
    ]}
  />
);

export default Level220;
