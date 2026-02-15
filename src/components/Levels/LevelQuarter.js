import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCoinBill from '../Items/CollectableCoinBill';

const LevelQuarter = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.25 — Quarter" size="medium" />
          </Card.Title>

          <Card.Text>
            <HighlightableText text="A QUARTER. TWENTY-FIVE cents. One FOURTH. TWO bits. All the same number wearing different disguises." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="In music, a QUARTER note gets ONE beat. In football, a QUARTER lasts FIFTEEN minutes. In the space between ZERO and ONE, a QUARTER is just enough to make you wonder what comes next." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="But here's the real riddle: is this Level ZERO POINT TWO FIVE, or is it Level TWENTY-FIVE hundredths? Or Level ONE divided by FOUR? Numbers have many names. The trick is learning which name opens which door." />
          </Card.Text>

          <CollectableCoinBill value={25} id="quarter-realm" />

          <Card.Text>
            <HighlightableText text="Speaking of TWENTY-FIVE — that level's around here somewhere too. Different number, same word. Funny how that works." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            <LevelButton targetLevel={0.75}>Level 0.75</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={25}>Level 25</LevelButton>
            <LevelButton targetLevel={0.333}>Level 0.333</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelQuarter;
