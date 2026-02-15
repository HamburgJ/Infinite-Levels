import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCard from '../Items/CollectableCard';

const Level144 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="A Gross" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="One hundred forty-four. Twelve dozen — a gross. Also the twelfth Fibonacci number. Where commerce meets mathematics." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The spiral carried you here from eighty-nine. It continues to two hundred thirty-three, then three hundred seventy-seven, then six hundred ten, then nine hundred eighty-seven... approaching one thousand." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="One hundred forty-four is also twelve squared. The dozens chain (twelve, twenty-four, thirty-six...) meets the square chain (one, four, nine, sixteen...) meets the Fibonacci chain — all at this one number." />
          </Card.Text>
          <CenteredContainer>
            <CollectableCard cardId="10-diamonds" />
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={89}>← Eighty-Nine (prev Fibonacci)</LevelButton>
            <LevelButton targetLevel={233}>Two Thirty-Three (next Fibonacci) →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level144;
