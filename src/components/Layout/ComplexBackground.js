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
  transition: background 1s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.$gradient || `radial-gradient(
      circle at center,
      transparent 0%,
      ${props.$isNegative ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'} 100%
    )`};
    transition: background 1s ease;
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

// Generate a subtle gradient overlay for positive real levels based on magnitude
// Nothing until level 100+, and even then very faint
const getPositiveGradient = (level) => {
  const mag = Math.abs(level);
  if (mag <= 100) return null; // completely clean for levels 0-100
  // Very subtle warm/cool drift based on level
  const hue = (mag * 0.7) % 360;
  const saturation = Math.min((Math.log10(mag) - 2) * 4, 12);
  const alpha = Math.min((Math.log10(mag) - 2) * 0.015, 0.06);
  return `radial-gradient(
    ellipse at 50% 40%,
    hsla(${hue}, ${saturation}%, 92%, ${alpha}) 0%,
    transparent 70%
  ), radial-gradient(
    circle at center,
    transparent 0%,
    rgba(0, 0, 0, 0.04) 100%
  )`;
};

const getNegativeGradient = (level) => {
  const mag = Math.abs(level);
  if (mag <= 100) return null; // completely clean for levels 0 to -100
  const hue = (mag * 0.7 + 180) % 360;
  const saturation = Math.min((Math.log10(mag) - 2) * 5, 15);
  const alpha = Math.min((Math.log10(mag) - 2) * 0.02, 0.08);
  return `radial-gradient(
    ellipse at 50% 60%,
    hsla(${hue}, ${saturation}%, 15%, ${alpha}) 0%,
    transparent 70%
  ), radial-gradient(
    circle at center,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 100%
  )`;
};


const ComplexBackground = () => {
  const currentLevel = useSelector(state => state.game.currentLevel);
  
  // Handle real numbers
  if (typeof currentLevel === 'number') {
    if (currentLevel < 0) {
      return <Background $baseColor="#000000" $isNegative={true} $gradient={getNegativeGradient(currentLevel)} />;
    }
    return <Background $baseColor="#ffffff" $isNegative={false} $gradient={getPositiveGradient(currentLevel)} />;
  }
  
  // Handle complex numbers
  const angle = getComplexAngle(currentLevel);
  
  // Check if complex number is actually real (angle is 0 or PI)
  if (angle === 0) {
    const mag = currentLevel?.real || 0;
    return <Background $baseColor="#ffffff" $isNegative={false} $gradient={getPositiveGradient(mag)} />;
  }
  if (Math.abs(angle) === Math.PI) {
    const mag = currentLevel?.real || 0;
    return <Background $baseColor="#000000" $isNegative={true} $gradient={getNegativeGradient(mag)} />;
  }
  
  const baseColor = angleToColor(angle);
  return <Background $baseColor={baseColor} $isNegative={false} />;
};

export default ComplexBackground; 