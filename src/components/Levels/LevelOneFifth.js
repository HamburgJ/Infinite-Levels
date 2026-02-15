import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const fill = keyframes`
  0% { width: 0%; }
  100% { width: 20%; }
`;

const FifthBar = styled.div`
  width: 80%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  margin: 1.5rem auto;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20%;
    background: linear-gradient(90deg, #e8a838, #f0c060);
    border-radius: 5px;
    animation: ${fill} 1.5s ease-out;
  }
`;

const StarRow = styled.div`
  text-align: center;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  margin: 0.5rem 0;
`;

const LevelOneFifth = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.2 — One Fifth" size="medium" />
          </Card.Title>

          <FifthBar />
          <StarRow>★☆☆☆☆</StarRow>

          <Card.Text>
            <HighlightableText text="ONE out of FIVE. TWENTY percent. The loneliest star rating." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="ONE FIFTH is the ugly duckling of fractions. Not as famous as ONE HALF. Not as useful as ONE QUARTER. Not as mysterious as ONE THIRD. It sits there at ZERO POINT TWO, waiting to be noticed." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="But here's the thing about fifths: our whole world runs on them. Percentages are just fifths in disguise — TWENTY percent, FORTY percent, SIXTY, EIGHTY, ONE HUNDRED. Every time you tip, split a bill, or read a poll, you're thinking in FIFTHS." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="And FIVE divides into TEN perfectly, which is why ONE FIFTH is the cleanest fraction in the decimal system that isn't a HALF or a QUARTER. No repeating digits. No infinite tails. Just ZERO POINT TWO." />
          </Card.Text>

          <Card.Text style={{ fontStyle: 'italic', color: '#888' }}>
            <HighlightableText text="There are FOUR more FIFTHS out there, if you know how to ask for them." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.25}>Level 0.25</LevelButton>
            <LevelButton targetLevel={0.1}>Level 0.1</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelOneFifth;
