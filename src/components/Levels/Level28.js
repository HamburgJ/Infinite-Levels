import React from 'react';
import ShrineLevel from './ShrineLevel';

const Level28 = () => (
  <ShrineLevel
    level={28}
    shrineText="Twenty-eight. One plus two plus four plus seven plus fourteen. Add them up. Twenty-eight. Again. Exactly. A number equal to the weight of its own parts. The ancients called these 'perfect.' Euclid proved they exist. Two thousand three hundred years later, we've found fifty-one of them. The first four — six, twenty-eight, four hundred ninety-six, eight thousand one hundred twenty-eight — all fit on the number line you can walk. The rest don't. You're standing on the second one."
    shrineThreshold={8}
    shrineReveal="The next perfect number is four hundred ninety-six. After that, eight thousand one hundred twenty-eight. After that, they vanish into numbers too large to visit on foot."
    navButtons={[
      { target: 25, label: '← Twenty-Five' },
      { target: 30, label: 'Thirty →' },
      { target: 496, label: 'Next Perfect (496)' },
    ]}
  />
);

export default Level28;
