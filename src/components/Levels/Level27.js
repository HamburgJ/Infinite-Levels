import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const CubeScene = styled.div`
  perspective: 400px;
  width: 120px;
  height: 120px;
  margin: 1.5rem auto;
  cursor: grab;
`;

const CubeBody = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  transform-style: preserve-3d;
  margin: 20px auto;
  transform: rotateX(${props => props.rotX}deg) rotateY(${props => props.rotY}deg);
  transition: transform 0.15s ease-out;
`;

const CubeFace = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(52, 152, 219, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: ${props => props.fontSize || '0.7rem'};
  font-weight: bold;
  color: rgba(52, 152, 219, 0.8);
  background: ${props => props.bg || 'rgba(52, 152, 219, 0.05)'};
  backface-visibility: visible;
`;

const Level27 = () => {
  const [rotation, setRotation] = useState({ x: -25, y: 35 });

  const handleClick = () => {
    setRotation(prev => ({ x: prev.x - 30, y: prev.y + 45 }));
  };

  const faces = [
    { transform: 'translateZ(40px)', label: '3×3', bg: 'rgba(52, 152, 219, 0.08)' },
    { transform: 'rotateY(180deg) translateZ(40px)', label: '= 27' },
    { transform: 'rotateY(90deg) translateZ(40px)', label: '3³' },
    { transform: 'rotateY(-90deg) translateZ(40px)', label: '∛27' },
    { transform: 'rotateX(90deg) translateZ(40px)', label: '= 3' },
    { transform: 'rotateX(-90deg) translateZ(40px)', label: '×3' },
  ];

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Three Cubed" size="medium" /></Card.Title>
          
          <CubeScene onClick={handleClick}>
            <CubeBody rotX={rotation.x} rotY={rotation.y}>
              {faces.map((f, i) => (
                <CubeFace key={i} style={{ transform: f.transform }} bg={f.bg} fontSize="1rem">
                  {f.label}
                </CubeFace>
              ))}
            </CubeBody>
          </CubeScene>
          <Card.Text style={{ textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
            (click the cube to spin it)
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Three times three times three. Length, width, and height. A number you can hold in your hands — if your hands could hold dimensions." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The cube chain: eight, twenty-seven, sixty-four, one hundred twenty-five, five hundred twelve... each one a little universe in three dimensions." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={8}>← 2³ (Eight)</LevelButton>
            <LevelButton targetLevel={64}>4³ (Sixty-Four) →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={3}>Cube Root (Three)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level27;
