import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate3d(1, 1, 1, 0deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate3d(1, 1, 1, 180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate3d(1, 1, 1, 360deg);
  }
`;

const CubeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${props => props.size}vw;
  height: ${props => props.size}vw;
  perspective: 2500px;
  pointer-events: none;
  animation: ${float} ${props => props.rotationSpeed * (props.size)**0.5/25}s linear infinite;
  transform-style: preserve-3d;
  transform-origin: center center;
  transform: translate(-50%, -50%) 
    rotate3d(
      ${props => Math.sin(props.levelFactor)},
      ${props => Math.cos(props.levelFactor)},
      ${props => Math.tan(props.levelFactor)},
      ${props => props.baseRotation}deg
    );
  z-index: -10;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #dddddd;
  border: 0px solid 'rgba(0, 0, 0, 0.1)';
  transform-style: preserve-3d;
  backface-visibility: hidden;
  pointer-events: none;
  opacity: 0.3;

  &.front { transform: translateZ(${props => props.size / 2}vw); }
  &.back { transform: rotateY(180deg) translateZ(${props => props.size / 2}vw); }
  &.right { transform: rotateY(90deg) translateZ(${props => props.size / 2}vw); }
  &.left { transform: rotateY(-90deg) translateZ(${props => props.size / 2}vw); }
  &.top { transform: rotateX(90deg) translateZ(${props => props.size / 2}vw); }
  &.bottom { transform: rotateX(-90deg) translateZ(${props => props.size / 2}vw); }
`;

const BackgroundCube = ({ level, theme = 'normal', size = 2, rotationSpeed = 180 }) => {
  const startTime = React.useMemo(() => Date.now(), []);
  const levelFactor = Math.abs(level) / 50;
  const baseRotation = (level % 360) * 3;
  
  const getFinalNumCubes = () => {
    let numCubes;
    if (typeof level === 'number') {
      if (isNegative(level)) {
        numCubes = 0;
      } else {
        numCubes = Math.floor(level/10) + 1;
      }
    } else if (typeof level === 'object') {
      if (isNegative(level)) { 
        numCubes = 0;
      } else {
        numCubes = Math.floor(level.real/10) + 1;
      }
    } else {
      numCubes = 6;
    }
    return Math.min(Math.max(numCubes, 2), 6);
  };

  const isNegative = (level) => {
    return typeof level === 'number' ? level < 0 : level.real < 0;
  };

  const finalNumCubes = getFinalNumCubes();

  const getCubeSize = (index) => {
    return Math.max(size *(1-(6-index))*(1-(6-index))+ 1, 1);
  };

  const getRandomRotation = () => {
    return Math.floor(Math.random() * 360);
  };

  return (
    <>
      {[...Array(finalNumCubes)].map((_, index) => {
        const cubeSize = getCubeSize(finalNumCubes-1-index);
        const randomRotation = getRandomRotation();
        
        return (
          <CubeContainer 
            key={index}
            levelFactor={levelFactor}
            baseRotation={baseRotation + randomRotation}
            size={cubeSize}
            rotationSpeed={rotationSpeed}
            style={{ 
              zIndex: 3,
              perspective: 10000
            }}
          >
            <Face className="front" theme={theme} size={cubeSize} />
            <Face className="back" theme={theme} size={cubeSize} />
            <Face className="right" theme={theme} size={cubeSize} />
            <Face className="left" theme={theme} size={cubeSize} />
            <Face className="top" theme={theme} size={cubeSize} />
            <Face className="bottom" theme={theme} size={cubeSize} />
          </CubeContainer>
        );
      })}
    </>
  );
};

export default BackgroundCube;