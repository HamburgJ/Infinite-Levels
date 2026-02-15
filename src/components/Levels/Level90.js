import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const CompassContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 1.5rem auto;
  border: 2px solid #ccc;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

const Axis = styled.div`
  position: absolute;
  background: ${props => props.color || '#333'};
  ${props => props.horizontal 
    ? 'width: 100%; height: 2px; top: 50%; left: 0;' 
    : 'width: 2px; height: 100%; left: 50%; top: 0;'}
`;

const AxisLabel = styled.div`
  position: absolute;
  font-size: 0.7rem;
  font-weight: bold;
  color: ${props => props.color || '#333'};
  ${props => props.position};
`;

const AngleArc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-top: 2px solid #e74c3c;
  border-right: 2px solid #e74c3c;
  border-radius: 0 40px 0 0;
  transform-origin: bottom left;
  transform: translate(0, -100%);
`;

const Level90 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Right Angle" size="medium" /></Card.Title>

          <CompassContainer>
            <Axis horizontal color="#3498db" />
            <Axis color="#2ecc71" />
            <AngleArc />
            <AxisLabel color="#3498db" position="right: 8px; top: 50%; transform: translateY(-50%);">
              Real →
            </AxisLabel>
            <AxisLabel color="#2ecc71" position="top: 8px; left: 50%; transform: translateX(-50%);">
              ↑ Imaginary
            </AxisLabel>
            <AxisLabel color="#e74c3c" position="top: 35%; right: 35%;">
              90°
            </AxisLabel>
          </CompassContainer>

          <Card.Text>
            <HighlightableText text="Ninety degrees. A right angle. The corner where the real numbers meet the imaginary ones." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="In the complex plane, the real axis is the number line you've been walking. The imaginary axis starts at level i. Ninety degrees between them. Have you ever stepped sideways off the number line?" />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The complex plane is hiding an entire dimension of levels you might have missed. Try level i. Or one plus one i. Or five plus five i. The number line is just the floor — the building has more stories." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 1}}>Level i</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={82}>← Eighty-Two</LevelButton>
            <LevelButton targetLevel={99}>Ninety-Nine →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level90;
