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
          <Card.Title><HighlightableText text="Quarter Back! 🏈" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="Just like a quarterback throwing for 25 yards, here's your quarter! Ready... set... HIKE! 🏈" />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Time to score a touchdown in this game - no fumbling this quarter!" />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="A quarter is twenty-five cents. Two quarters make fifty cents. Four quarters make a dollar — that's one hundred cents!" />
          </Card.Text>
          <CollectableCoinBill value={25} id="25l"/>
          <Card.Text>
            <HighlightableText text="A quarter of the way to one hundred. Thirty levels in, there's an outpost." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level25;