import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level89 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Golden Spiral" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Fifty-five plus thirty-four. Eighty-nine. The eleventh Fibonacci number." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Sunflower seeds arrange themselves in spirals of consecutive Fibonacci numbers — thirty-four clockwise, fifty-five counter-clockwise. Nautilus shells, hurricane arms, galaxy arms. Nature keeps finding this sequence." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="After this, the spiral leaves the first hundred levels. The next stop is one hundred forty-four — twelve squared, twelve dozen, where the Fibonacci chain meets the square chain." />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', color: '#888' }}>
            <HighlightableText text="The ratio between eighty-nine and fifty-five is one point six one eight one eight... The golden ratio, accurate to five decimal places. That number is a level." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={55}>← Fifty-Five</LevelButton>
            <LevelButton targetLevel={144}>One Hundred Forty-Four →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level89;
