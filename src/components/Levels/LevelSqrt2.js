import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const draw = keyframes`
  from { stroke-dashoffset: 200; }
  to { stroke-dashoffset: 0; }
`;

const GeometryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
`;

const StyledSVG = styled.svg`
  .diagonal {
    stroke-dasharray: 200;
    animation: ${draw} 2s ease forwards;
  }
`;

const DigitsContainer = styled.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: #8e44ad;
  text-align: center;
  word-break: break-all;
  line-height: 1.6;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(142, 68, 173, 0.05);
  border-radius: 8px;
`;

const LevelSqrt2 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 1.414... — The Diagonal" size="medium" />
          </Card.Title>

          <GeometryContainer>
            <StyledSVG width="150" height="150" viewBox="0 0 150 150">
              {/* Unit square */}
              <rect x="10" y="10" width="120" height="120" fill="none" stroke="#ccc" strokeWidth="2" />
              {/* Labels */}
              <text x="70" y="145" textAnchor="middle" fontSize="12" fill="#999">1</text>
              <text x="145" y="75" textAnchor="middle" fontSize="12" fill="#999">1</text>
              {/* Diagonal */}
              <line className="diagonal" x1="10" y1="130" x2="130" y2="10" stroke="#8e44ad" strokeWidth="3" />
              {/* √2 label */}
              <text x="80" y="60" textAnchor="middle" fontSize="14" fill="#8e44ad" fontWeight="bold">√2</text>
            </StyledSVG>
          </GeometryContainer>

          <Card.Text>
            <HighlightableText text="The square root of TWO." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Draw a square with sides of length ONE. The diagonal — corner to corner — measures exactly this number. ONE POINT FOUR ONE FOUR TWO ONE THREE FIVE..." />
          </Card.Text>

          <DigitsContainer>
            1.41421356237309504880168872420969807856967187537694...
          </DigitsContainer>

          <Card.Text>
            <HighlightableText text="When Hippasus of Metapontum proved this number couldn't be expressed as a fraction, it shattered the Pythagorean worldview. Every number was supposed to be a ratio of whole numbers. That was the fundamental belief. And this ONE diagonal — this ONE simple measurement — proved it wrong." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Legend says they drowned him at sea for it. Some truths are dangerous to know." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="This is the FIRST irrational number ever discovered. The beginning of a deeper truth: between any TWO rational numbers lie infinitely many irrationals. The spaces between the spaces have spaces. And those spaces have spaces too. All the way down. Forever." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={1.618}>Level φ</LevelButton>
            <LevelButton targetLevel={2}>Level 2 (its square)</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={82}>Level 82 (Constants)</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5 (Rational Chain)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelSqrt2;
