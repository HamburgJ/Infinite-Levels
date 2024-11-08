import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';
import { CenteredContainer } from './styles/CommonLevelStyles';

const cubeFloat = keyframes`
  0% {
    transform: translateZ(0) rotateX(0) rotateY(0);
  }
  50% {
    transform: translateZ(100px) rotateX(180deg) rotateY(180deg);
  }
  100% {
    transform: translateZ(0) rotateX(360deg) rotateY(360deg);
  }
`;

const backgroundScroll = keyframes`
  0% {
    transform: perspective(1000px) translateZ(0) rotateX(20deg);
  }
  100% {
    transform: perspective(1000px) translateZ(-1000px) rotateX(20deg);
  }
`;

const CubeBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  overflow: hidden;
  perspective: 1000px;
  z-index: -1;
`;

const CubeContainer = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  left: -50%;
  top: -50%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  transform-style: preserve-3d;
  animation: ${backgroundScroll} 20s linear infinite;
`;

const Cube = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${cubeFloat} 8s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &::before {
    transform: rotateY(90deg) translateZ(50px);
  }

  &::after {
    transform: rotateX(90deg) translateZ(50px);
  }
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin: 2rem auto;
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

const Level0 = () => {
  const dispatch = useDispatch();

  const renderCubes = () => {
    const cubes = [];
    for (let i = 0; i < 100; i++) {
      const delay = (i % 10) * 0.2;
      cubes.push(<Cube key={i} delay={delay} />);
    }
    return cubes;
  };

  return (
    <>
      <CubeBackground>
        <CubeContainer>
          {renderCubes()}
        </CubeContainer>
      </CubeBackground>
      <StyledCard>
        <Card.Body>
          <Card.Title as="h2" className="mb-4">
            <CenteredContainer>
              <HighlightableText
                text="Infinite Levels!"
              size="xlarge"
              color="#333"
              enhanced={true}
              />
            </CenteredContainer>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Infinite Levels! is a puzzle game about exploring an infinite collection of levels."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="To proceed to a new level, press the button that displays the level number you want to go to."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Each button will take you to level it displays."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton 
              targetLevel={1}
              variant="primary"
            >
              Level 1
            </LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </>
  );
};

export default Level0; 