import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import CollectableCoinBill from '../Items/CollectableCoinBill';

const Level25 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Quarter" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="Twenty-five. A quarter of a hundred. A quarter of a dollar. A quarter of the way through." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="A quarter is twenty-five cents. Two quarters make fifty cents. Four quarters make a dollar — that's one hundred cents!" />
          </Card.Text>
          <CollectableCoinBill value={50} id="25l"/>
          <Card.Text>
            <HighlightableText text="A quarter of the way to one hundred. Thirty levels in, there's an outpost. But the coin above? That's fifty cents — enough to get you to level fifty." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="A quarter is also zero point two five. Funny — the same word, a completely different level. What happens between the whole numbers? Try HALF to find out." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level25;