import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import styled, { keyframes } from 'styled-components';

const morphAnim = keyframes`
  0%   { content: '6174'; }
  25%  { content: '7641 → 1467'; }
  50%  { content: '7641 - 1467 = 6174'; }
  100% { content: '6174'; }
`;

const KaprekarDisplay = styled.div`
  text-align: center;
  font-family: 'Courier New', monospace;
  font-size: 1.4rem;
  padding: 1rem;
  margin: 1rem 0;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  color: #444;
  letter-spacing: 4px;
`;

const Level6174 = () => {
  const [step, setStep] = useState(0);
  const steps = [
    '6174',
    '7641 − 1467',
    '= 6174',
    '♾️ forever'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Kaprekar's Constant" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Six thousand one hundred seventy-four. Take any four-digit number where the digits aren't all the same. Arrange its digits in descending order, then subtract the ascending order. Repeat. You will always arrive here." />
          </Card.Text>
          <KaprekarDisplay>
            {steps[step]}
          </KaprekarDisplay>
          <Card.Text>
            <HighlightableText text="Try it yourself. Start with 3087. Descending: 8730. Ascending: 0378. Subtract: 8730 - 378 = 8352. Again: 8532 - 2358 = 6174. Once you reach six thousand one hundred seventy-four, you stay here forever." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="This level is a fixed point — a number that absorbs all others. Like a drain in the number line. Everything flows here eventually." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={4096}>← Level 4096</LevelButton>
            <LevelButton targetLevel={8128}>Level 8128</LevelButton>
            <LevelButton targetLevel={9999}>Level 9999</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level6174;
