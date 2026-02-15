import React from 'react';
import SwappedLevel from './SwappedLevel';

const Level201 = () => (
  <SwappedLevel
    actualLevel={201}
    displayedLevel={102}
    swapPartner={102}
    resignation="confused"
    swapText="Welcome to Level One Hundred and Two. Except it's not. You're on Level two hundred and one, and you're reading one hundred and two's mail. The digits got reversed somewhere between here and there. Level one hundred and two has your content. Go check. It's a whole thing."
  />
);

export default Level201;
