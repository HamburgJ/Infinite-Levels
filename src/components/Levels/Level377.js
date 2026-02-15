import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const WildernessMap = styled.div`
  position: relative;
  background: #1a1a2e;
  border-radius: 8px;
  padding: 2rem 1rem;
  margin: 1rem 0;
  min-height: 160px;
  overflow: hidden;
`;

const MapDot = styled.div`
  position: absolute;
  width: ${props => props.visited ? '10px' : '6px'};
  height: ${props => props.visited ? '10px' : '6px'};
  border-radius: 50%;
  background: ${props => props.active ? '#e74c3c' : props.visited ? '#2ecc71' : '#555'};
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  transform: translate(-50%, -50%);
  ${props => props.active && `animation: ${pulse} 1.5s ease-in-out infinite;`}
  &::after {
    content: '${props => props.label}';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.55rem;
    color: ${props => props.visited ? '#aaa' : '#555'};
    white-space: nowrap;
    font-family: monospace;
  }
`;

const MapLine = styled.div`
  position: absolute;
  height: 1px;
  background: ${props => props.visited ? 'rgba(46, 204, 113, 0.4)' : 'rgba(85, 85, 85, 0.3)'};
  left: ${props => props.x1}%;
  top: ${props => props.y}%;
  width: ${props => props.width}%;
`;

const MapTitle = styled.div`
  color: #888;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Level377 = () => {
  const visitedLevels = useSelector(state => state.game?.visitedLevels || {});
  const [discoveredCount, setDiscoveredCount] = useState(0);

  useEffect(() => {
    const count = Object.keys(visitedLevels).filter(k => parseInt(k) > 100).length;
    setDiscoveredCount(count);
  }, [visitedLevels]);

  const landmarks = [
    { level: 101, x: 8, y: 30, label: '101' },
    { level: 123, x: 15, y: 55, label: '123' },
    { level: 128, x: 18, y: 30, label: '128' },
    { level: 144, x: 23, y: 45, label: '144' },
    { level: 200, x: 33, y: 35, label: '200' },
    { level: 233, x: 40, y: 55, label: '233' },
    { level: 256, x: 45, y: 30, label: '256' },
    { level: 365, x: 58, y: 50, label: '365' },
    { level: 377, x: 60, y: 35, label: '377' },
    { level: 512, x: 75, y: 45, label: '512' },
    { level: 610, x: 82, y: 35, label: '610' },
    { level: 987, x: 92, y: 50, label: '987' },
    { level: 1024, x: 95, y: 35, label: '1024' },
  ];

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Wilderness Map" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Three hundred seventy-seven. Deep in the wilderness now. The landmarks are sparse — but that's what makes finding them matter." />
          </Card.Text>

          <WildernessMap>
            <MapTitle>Beyond One Hundred</MapTitle>
            {landmarks.map((lm, i) => {
              const visited = visitedLevels[String(lm.level)];
              const isHere = lm.level === 377;
              return (
                <MapDot
                  key={lm.level}
                  x={lm.x}
                  y={lm.y}
                  label={lm.label}
                  visited={visited}
                  active={isHere}
                />
              );
            })}
            {landmarks.slice(0, -1).map((lm, i) => {
              const next = landmarks[i + 1];
              const visited = visitedLevels[String(lm.level)] && visitedLevels[String(next.level)];
              return (
                <MapLine
                  key={`line-${i}`}
                  x1={lm.x}
                  y={(lm.y + next.y) / 2}
                  width={next.x - lm.x}
                  visited={visited}
                />
              );
            })}
          </WildernessMap>

          <Card.Text style={{ textAlign: 'center', color: '#888', fontSize: '0.85rem' }}>
            <HighlightableText text={`You've discovered ${discoveredCount} level${discoveredCount === 1 ? '' : 's'} beyond one hundred.`} />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={233}>← Two Thirty-Three</LevelButton>
            <LevelButton targetLevel={610}>Six Ten →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level377;
