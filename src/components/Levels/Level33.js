import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const mirrorFlip = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(-1); }
  100% { transform: scaleX(1); }
`;

const MirrorCard = styled(Card.Text)`
  text-align: center;
  font-size: 2rem;
  font-family: monospace;
  letter-spacing: 0.5rem;
  margin: 1.5rem 0;
  color: #666;
  animation: ${mirrorFlip} 6s ease-in-out infinite;
`;

const MirrorButton = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 2s ease-in;
  margin-top: 1rem;
`;

const Level33 = () => {
  const [showMirror, setShowMirror] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMirror(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Mirror" size="medium" /></Card.Title>
          <MirrorCard>3 3</MirrorCard>
          <Card.Text>
            <HighlightableText text="Three three. A palindrome — the same forwards and backwards. In this game, mirrors aren't just reflections. They're doors." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Every positive number has a shadow on the other side of zero. Negative thirty-three exists. So does negative thirteen. So does negative zero. Have you visited the shadows?" />
          </Card.Text>

          <MirrorButton visible={showMirror}>
            <CenteredContainer>
              <LevelButton targetLevel={-33}>Step Through the Mirror</LevelButton>
            </CenteredContainer>
          </MirrorButton>

          <Card.Text style={{ marginTop: '1.5rem' }}>
            <HighlightableText text="Eleven is a palindrome too. So is forty-four. So is one hundred twenty-one. Palindromes are scattered across the number line like mirrors in a funhouse." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={30}>← Outpost</LevelButton>
            <LevelButton targetLevel={42}>Forty-Two →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level33;
