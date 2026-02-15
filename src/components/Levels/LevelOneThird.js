import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const RepeatingContainer = styled.div`
  overflow: hidden;
  font-family: monospace;
  font-size: 1.5rem;
  color: #999;
  margin: 1rem 0;
  padding: 0.5rem 0;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
`;

const RepeatingDigits = styled.div`
  white-space: nowrap;
  animation: ${scroll} 15s linear infinite;
`;

const LevelOneThird = () => {
  const threes = '3'.repeat(200);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.333... — The Repeating" size="medium" />
          </Card.Title>

          <Card.Text>
            <HighlightableText text="ONE THIRD. Zero point three three three three three three three three three three three three three three three three three three three three three three three..." />
          </Card.Text>

          <RepeatingContainer>
            <RepeatingDigits>0.{threes}{threes}</RepeatingDigits>
          </RepeatingContainer>

          <Card.Text>
            <HighlightableText text="It never ends. Never resolves. Never becomes whole. A beautiful, infinite approximation of something that's actually quite simple: ONE divided by THREE." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Here's a thought experiment. If ONE THIRD is zero point three three three repeating, and TWO THIRDS is zero point six six six repeating, then what's THREE THIRDS? Is it zero point nine nine nine repeating? Or is it just... ONE?" />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="The answer might surprise you. Head to TWO THIRDS to continue the investigation. Or if you're feeling brave, skip ahead to ZERO POINT NINE NINE NINE." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.666}>Level 0.666</LevelButton>
            <LevelButton targetLevel={0.999}>Level 0.999</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelOneThird;
