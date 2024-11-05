import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CubeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  perspective: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #ffffff 0%, #f5f5f5 100%);
`;

const CubeContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transform: ${props => `
    translateZ(-1200px)
    rotateX(${props.rotateX}deg)
    rotateY(${props.rotateY + 45}deg)
  `};
  transition: transform 0.5s ease;
`;

const ControlsWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 100;

  button {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.05);
    border: 2px solid rgba(0, 0, 0, 0.1);
    color: #000000;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const Face = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(0, 0, 0, 0.05) 100%
    );
    opacity: ${props => props.isActive ? 1 : 0.3};
  }

  &.front { transform: translateZ(200px); }
  &.back { transform: rotateY(180deg) translateZ(200px); }
  &.right { transform: rotateY(90deg) translateZ(200px); }
  &.left { transform: rotateY(-90deg) translateZ(200px); }
  &.top { transform: rotateX(90deg) translateZ(200px); }
  &.bottom { transform: rotateX(-90deg) translateZ(200px); }

  ${props => props.isActive && `
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2);
  `}
`;

const Cube = ({ faces, allowVerticalRotation, onRotateLeft, onRotateRight }) => {
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(-30);
  const [activeFace, setActiveFace] = useState('front');

  useEffect(() => {
    if (!allowVerticalRotation) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setRotateX(prev => Math.min(prev + 90, 60));
      } else if (e.key === 'ArrowDown') {
        setRotateX(prev => Math.max(prev - 90, -120));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allowVerticalRotation]);

  const rotateLeft = () => {
    setRotateY(prev => prev + 90);
    const faceMap = {
      'front': 'left',
      'left': 'back',
      'back': 'right',
      'right': 'front'
    };
    setActiveFace(prev => faceMap[prev] || 'front');
    if (onRotateLeft) onRotateLeft();
  };

  const rotateRight = () => {
    setRotateY(prev => prev - 90);
    const faceMap = {
      'front': 'right',
      'right': 'back',
      'back': 'left',
      'left': 'front'
    };
    setActiveFace(prev => faceMap[prev] || 'front');
    if (onRotateRight) onRotateRight();
  };

  return (
    <CubeWrapper>
      <CubeContainer rotateY={rotateY} rotateX={rotateX}>
        <Face className="front" isActive={activeFace === 'front'}>{faces.front}</Face>
        <Face className="back" isActive={activeFace === 'back'}>{faces.back}</Face>
        <Face className="right" isActive={activeFace === 'right'}>{faces.right}</Face>
        <Face className="left" isActive={activeFace === 'left'}>{faces.left}</Face>
        <Face className="top" isActive={activeFace === 'top'}>{faces.top}</Face>
        <Face className="bottom" isActive={activeFace === 'bottom'}>{faces.bottom}</Face>
      </CubeContainer>
      <ControlsWrapper>
        <button onClick={rotateLeft}>←</button>
        <button onClick={rotateRight}>→</button>
      </ControlsWrapper>
    </CubeWrapper>
  );
};

export default Cube; 