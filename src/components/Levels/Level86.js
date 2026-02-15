import React, { useState, useEffect } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

const FakeStabilityContainer = styled.div`
  margin: 1rem 0;
  animation: ${props => props.shaking ? shake : 'none'} 0.1s infinite;
`;

const StabilityLabel = styled.div`
  font-family: monospace;
  font-size: 0.85rem;
  color: ${props => props.danger ? '#dc3545' : '#666'};
  margin-bottom: 0.25rem;
  font-weight: ${props => props.danger ? 'bold' : 'normal'};
`;

const RevealText = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 1s ease-in;
  margin-top: 1rem;
`;

const Level86 = () => {
  const [stability, setStability] = useState(100);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (collapsed) return;
    
    const interval = setInterval(() => {
      setStability(prev => {
        if (prev <= 0) {
          setCollapsed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [collapsed]);

  const variant = stability > 50 ? 'success' : stability > 20 ? 'warning' : 'danger';

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Eighty-Sixed" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="To be eighty-sixed means to be thrown out. Removed. Ejected. Banned from the premises." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Speaking of which — this level's stability looks a little... concerning." />
          </Card.Text>

          <FakeStabilityContainer shaking={stability < 30 && !collapsed}>
            <StabilityLabel danger={stability < 20}>
              {collapsed ? '⚠️ STABILITY: 0%' : `Stability: ${stability}%`}
            </StabilityLabel>
            <ProgressBar 
              now={stability} 
              variant={variant}
              animated={!collapsed && stability > 0}
              style={{ height: '12px' }}
            />
          </FakeStabilityContainer>

          {!collapsed && stability < 30 && (
            <Card.Text style={{ color: '#dc3545', fontWeight: 'bold' }}>
              <HighlightableText text="WARNING: Level collapse imminent..." />
            </Card.Text>
          )}

          <RevealText visible={collapsed}>
            <Card.Text style={{ fontSize: '1.2rem' }}>
              <HighlightableText text="...Just kidding. 😄" />
            </Card.Text>
            <Card.Text>
              <HighlightableText text="This level is perfectly stable. But you panicked a little, didn't you? If you remember Level fifteen, that collapse was real. This one? Pure theater." />
            </Card.Text>
            <Card.Text>
              <HighlightableText text="Not everything that looks dangerous IS dangerous. Keep that in mind — some levels in the complex plane look terrifying but are perfectly safe. And some that look safe..." />
            </Card.Text>
            <CenteredContainer>
              <LevelButton targetLevel={88}>→ Eighty-Eight</LevelButton>
              <LevelButton targetLevel={82}>← Eighty-Two</LevelButton>
            </CenteredContainer>
          </RevealText>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level86;
