import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProofStep = styled.div`
  font-family: monospace;
  font-size: 1.1rem;
  padding: 0.3rem 1rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.delay}s;
  color: #333;
`;

const LevelDisplay = styled.div`
  font-family: monospace;
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
  color: #4a90d9;
  font-weight: bold;
  transition: all 2s ease;
`;

const RevealText = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: ${props => props.delay}s;
`;

const LevelAlmost = () => {
  const [displayNumber, setDisplayNumber] = useState('0.999...');

  useEffect(() => {
    // After 30 seconds, morph the display from 0.999... to 1
    const timer = setTimeout(() => {
      setDisplayNumber('1');
    }, 30000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.999... — Almost" size="medium" />
          </Card.Title>

          <LevelDisplay>{displayNumber}</LevelDisplay>

          <Card.Text>
            <HighlightableText text="Zero point nine nine nine, repeating. Forever." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="It looks less than one. It feels less than one. Every instinct says there's a gap. But is there?" />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="But watch:" />
          </Card.Text>

          <div style={{ background: 'rgba(74, 144, 217, 0.05)', borderRadius: '8px', padding: '1rem', margin: '1rem 0' }}>
            <ProofStep delay={1}>Let x = 0.999...</ProofStep>
            <ProofStep delay={2}>Then 10x = 9.999...</ProofStep>
            <ProofStep delay={3}>So 10x − x = 9</ProofStep>
            <ProofStep delay={4}>Therefore 9x = 9</ProofStep>
            <ProofStep delay={5}>Therefore x = 1</ProofStep>
          </div>

          <RevealText delay={6}>
            <Card.Text>
              <HighlightableText text="You're already on Level ONE. You just didn't know it. There is no gap. There never was." />
            </Card.Text>
          </RevealText>

          <RevealText delay={7}>
            <Card.Text>
              <HighlightableText text="The proof is complete. Zero point nine repeating equals one. The rational chain leads right back to where it started." />
            </Card.Text>
          </RevealText>

          <CenteredContainer>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0.333}>Level 0.333</LevelButton>
            <LevelButton targetLevel={0.666}>Level 0.666</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelAlmost;
