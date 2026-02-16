import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level1729 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Taxicab Number" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="One thousand seven hundred twenty-nine. The Hardy-Ramanujan number. When the mathematician G.H. Hardy visited Ramanujan in the hospital, he remarked that his taxi had the rather dull number 1729." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Ramanujan instantly replied: 'No, it is a very interesting number. It is the smallest number expressible as the sum of two cubes in two different ways.'" />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.8 }}>
            <HighlightableText text="1729 = 1³ + 12³ = 9³ + 10³" />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Some numbers hide their beauty behind a plain face. This one needed a genius to see it. What other numbers are hiding in plain sight? Try level two thousand and twenty-five — the square of forty-five. Or visit level four thousand and ninety-six — two raised to the twelfth power." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1000}>← Level 1000</LevelButton>
            <LevelButton targetLevel={2025}>Level 2025</LevelButton>
            <LevelButton targetLevel={10000}>Level 10,000 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1729;
