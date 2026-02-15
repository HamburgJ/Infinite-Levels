import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level610 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Long Road" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Six hundred ten. You're further along the Fibonacci chain than most players ever get. The landmarks are sparse out here — but you already knew that when you started walking." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Six hundred ten is also the product of two, five, and sixty-one. It's the number of different necklaces you can make with six beads if each bead can be one of ten colors. Combinatorics hides in unexpected places." />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', color: '#888' }}>
            <HighlightableText text="One more step on the spiral and you'll reach nine hundred eighty-seven — within sight of one thousand. The frontier." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={377}>← Three Seventy-Seven</LevelButton>
            <LevelButton targetLevel={987}>Nine Eighty-Seven →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={500}>← Five Hundred (hub)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level610;
