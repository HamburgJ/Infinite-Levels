import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { angleToColor, getComplexAngle } from '../../utils/complex';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;
  background: ${props => props.$baseColor};
  transition: background 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
       background: radial-gradient(
      circle at center,
      transparent 0%,
      ${props => props.isNegative ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 100%
    );

  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${props => props.$baseColor};
  transition: background 0.3s ease;
  transform: ${props => props.$isNegative ? 'scaleY(-1)' : 'none'};
`;


const ComplexBackground = () => {
  const currentLevel = useSelector(state => state.game.currentLevel);
  
  // Handle real numbers
  if (typeof currentLevel === 'number') {
    if (currentLevel < 0) {
      return <Background baseColor="#000000" isNegative={true} />;
    }
    return <Background baseColor="#ffffff" isNegative={false} />;
  }
  
  // Handle complex numbers
  const angle = getComplexAngle(currentLevel);
  
  // Check if complex number is actually real (angle is 0 or PI)
  if (angle === 0) {
    return <Background baseColor="#ffffff" isNegative={false} />;
  }
  if (Math.abs(angle) === Math.PI) {
    return <Background baseColor="#000000" isNegative={true} />;
  }
  
  const baseColor = angleToColor(angle);
  return <Background baseColor={baseColor} isNegative={false} />;
};

export default ComplexBackground; 