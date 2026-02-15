import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CircleContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #4a90d9;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px dashed #4a90d9;
    animation: ${rotate} 20s linear infinite;
  }
`;

const PiSymbol = styled.div`
  font-size: 3rem;
  color: #4a90d9;
  font-weight: bold;
  font-family: serif;
`;

const DigitsContainer = styled.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  word-break: break-all;
  line-height: 1.6;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(74, 144, 217, 0.05);
  border-radius: 8px;
`;

const LevelPi = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level π" size="medium" />
          </Card.Title>
          
          <CircleContainer>
            <PiSymbol>π</PiSymbol>
          </CircleContainer>

          <Card.Text>
            <HighlightableText 
              text="Pi. The ratio of a circle's circumference to its diameter. Approximately three point one four one five nine two six five three five eight nine seven nine three two three eight four six two six four three three eight three two seven nine five zero two eight eight..." 
            />
          </Card.Text>

          <DigitsContainer>
            3.14159265358979323846264338327950288419716939937510...
          </DigitsContainer>

          <Card.Text>
            <HighlightableText 
              text="The digits go on forever, and they never repeat. Like the levels in this game." 
            />
          </Card.Text>

          <Card.Text>
            <HighlightableText 
              text="You followed the breadcrumb from level forty-two. Douglas Adams would appreciate the irony — the answer to everything leads to a number that never ends." 
            />
          </Card.Text>

          <Card.Text>
            <HighlightableText 
              text="There are other constants hiding in the math. Euler's number e is approximately two point seven one eight. The golden ratio phi is approximately one point six one eight. Every constant is a level." 
            />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={42}>Back to Level 42</LevelButton>
            <LevelButton targetLevel={82}>Level 82 (Constants)</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={2.718}>Level e (2.718...)</LevelButton>
            <LevelButton targetLevel={1.618}>Level φ (1.618...)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelPi;
