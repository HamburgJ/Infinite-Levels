import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  0% { transform: scaleY(0.1); }
  100% { transform: scaleY(1); }
`;

const GrowthBar = styled.div`
  width: ${props => props.width}%;
  height: 40px;
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  border-radius: 4px;
  margin: 2px 0;
  transform-origin: bottom;
  animation: ${grow} ${props => props.delay}s ease-out forwards;
  opacity: 0.7;
`;

const GrowthChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5rem auto;
  padding: 1rem;
  background: rgba(46, 204, 113, 0.05);
  border-radius: 8px;
  width: 80%;
`;

const DigitsContainer = styled.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: #27ae60;
  text-align: center;
  word-break: break-all;
  line-height: 1.6;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(46, 204, 113, 0.05);
  border-radius: 8px;
`;

const LevelE = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 2.718... — Growth" size="medium" />
          </Card.Title>

          <GrowthChart>
            <GrowthBar width={10} delay={0.3} />
            <GrowthBar width={20} delay={0.5} />
            <GrowthBar width={37} delay={0.7} />
            <GrowthBar width={55} delay={0.9} />
            <GrowthBar width={74} delay={1.1} />
            <GrowthBar width={90} delay={1.3} />
            <GrowthBar width={100} delay={1.5} />
          </GrowthChart>

          <Card.Text>
            <HighlightableText text="e. Euler's number. The base of natural growth." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="If you put ONE dollar in a bank that compounds continuously at ONE HUNDRED percent interest, after ONE year you'd have exactly TWO dollars and SEVENTY-ONE point EIGHT cents. That's it. That's the whole secret of exponential growth, hiding in a number most people can't even name." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="PI gets all the fame. PHI gets the beauty myths. But e? e is the quiet engine that makes the universe actually work. Population growth. Radioactive decay. Compound interest. Normal distributions. The number e is woven into the fabric of reality so deeply that most people walk right past it." />
          </Card.Text>

          <DigitsContainer>
            2.71828182845904523536028747135266249775724709369995...
          </DigitsContainer>

          <Card.Text>
            <HighlightableText text="TWO POINT SEVEN ONE EIGHT TWO EIGHT ONE EIGHT TWO EIGHT... The digits never repeat. Never settle into a pattern. Never resolve. That's what makes it irrational — and what makes it beautiful." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={3.14159}>Level π</LevelButton>
            <LevelButton targetLevel={1.618}>Level φ</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={82}>Level 82 (Constants)</LevelButton>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelE;
