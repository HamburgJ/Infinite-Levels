import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level82 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level 82 — The Constants" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Between the whole numbers, the universe hides its most famous residents. They're not integers. They're not even fractions. They go on forever, never repeating, never resolving." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Pi is approximately three point one four one five nine. It's the ratio of every circle's circumference to its diameter. It has its own level — and its own story." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="E is approximately two point seven one eight. Put a dollar in a bank. Wait a year with continuous compound interest. You get back exactly e dollars. The universe's favorite growth constant, hiding in a savings account." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Phi, the golden ratio, is approximately one point six one eight. They say it's the formula for beauty. They say a lot of things. Beauty, it turns out, is irrational." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Try highlighting any of these numbers. The word 'point' is the key to the decimal realm — it turns 'three point one four' into the level 3.14. From here, an entire hidden dimension opens up." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="And between zero and one? Try level zero point five. The simplest fraction. The gateway to the rational chain." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={3.14159}>π (Level 3.14159)</LevelButton>
            <LevelButton targetLevel={50}>← Level 50</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level82;