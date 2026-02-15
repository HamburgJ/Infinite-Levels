import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`;

const DistantGlow = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: rgba(74, 144, 217, 0.3);
  animation: ${glow} 3s ease-in-out infinite;
  margin: 2rem 0;
  letter-spacing: 0.5rem;
  user-select: none;
`;

const Level98 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Almost" size="medium" /></Card.Title>
          <DistantGlow>100</DistantGlow>
          <Card.Text style={{ textAlign: 'center' }}>
            <HighlightableText text="Ninety-eight. Two steps from one hundred. You can see it from here." />
          </Card.Text>
          <Card.Text style={{ textAlign: 'center', fontStyle: 'italic', color: '#888' }}>
            <HighlightableText text="Almost." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={99}>→ Ninety-Nine</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level98;
