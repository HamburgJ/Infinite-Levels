import React from 'react';
import SwappedLevel from './SwappedLevel';

const Level102 = () => (
  <SwappedLevel
    actualLevel={102}
    displayedLevel={201}
    swapPartner={201}
    resignation="confused"
    swapText="Welcome to Level Two Hundred and One. ...hold on. Check the number at the top. This is Level one hundred and two. But everything in here — the text, the navigation, the math — it all thinks it's two hundred and one. The digits are backwards. This level and Level two hundred and one got swapped. I don't know when. I don't know how. If you go to two hundred and one, you'll find one hundred and two sitting there, equally confused."
  />
);

export default Level102;
