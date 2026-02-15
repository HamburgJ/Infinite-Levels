import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level987 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Frontier" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Six hundred ten plus three hundred seventy-seven. Nine hundred eighty-seven. The sixteenth Fibonacci number. Almost one thousand." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The spiral reaches the frontier. From here, the Fibonacci chain enters four-digit territory: one thousand five hundred ninety-seven, two thousand five hundred eighty-four... The golden ratio's pull never weakens." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="But level one thousand is right there. The third milestone. The power-of-ten chain and the Fibonacci chain nearly touch. Two different paths through the number line, almost meeting." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={610}>← Six Ten (prev Fibonacci)</LevelButton>
            <LevelButton targetLevel={1000}>One Thousand →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level987;
