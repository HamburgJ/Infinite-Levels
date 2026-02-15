import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const growIn = keyframes`
  from { width: 0; opacity: 0; }
  to { width: 100%; opacity: 1; }
`;

const SpiralRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.25rem 0;
`;

const SpiralBar = styled.div`
  height: 18px;
  border-radius: 3px;
  background: ${props => props.color};
  width: ${props => props.width}%;
  max-width: ${props => props.width}%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6px;
  font-size: 0.65rem;
  font-family: monospace;
  font-weight: bold;
  color: white;
  animation: ${growIn} 0.6s ease-out ${props => props.delay}s both;
  min-width: ${props => props.width > 2 ? '20px' : '4px'};
`;

const SpiralLabel = styled.span`
  font-family: monospace;
  font-size: 0.7rem;
  color: #666;
  min-width: 28px;
  text-align: right;
`;

const Level34 = () => {
  const fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34];
  const maxFib = 34;
  const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#1abc9c', '#3498db', '#9b59b6', '#e91e63', '#c0392b'];

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Fibonacci Junction" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Twenty-one plus thirteen. Watch the spiral build:" />
          </Card.Text>

          <div style={{ margin: '1rem 0', padding: '0.75rem', background: 'rgba(0,0,0,0.02)', borderRadius: '8px' }}>
            {fibs.map((n, i) => (
              <SpiralRow key={i}>
                <SpiralLabel>F({i + 1})</SpiralLabel>
                <SpiralBar
                  width={(n / maxFib) * 100}
                  color={colors[i % colors.length]}
                  delay={i * 0.15}
                >
                  {n > 2 ? n : ''}
                </SpiralBar>
              </SpiralRow>
            ))}
          </div>

          <Card.Text>
            <HighlightableText text="Each number is the sum of the two before it. The bars grow like a nautilus shell — slowly at first, then accelerating. The ratio between neighbors drifts toward one point six one eight..." />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', color: '#888' }}>
            <HighlightableText text="The spiral reaches fifty-five next. Then eighty-nine. Then it leaves the first hundred levels entirely." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={21}>← Twenty-One</LevelButton>
            <LevelButton targetLevel={55}>Fifty-Five →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level34;
