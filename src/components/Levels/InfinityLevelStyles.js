import styled, { keyframes, css } from 'styled-components';

export const shimmer = keyframes`
  0% {
    background-position: -1000px 1000px;
    transform: scale(1);
  }
  50% {
    background-position: 1000px 1000px;
    transform: scale(1.2);
  }
  100% {
    background-position: -1000px 1000px;
    transform: scale(1);
  }
`;

export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const refraction = keyframes`
  0% {
    filter: hue-rotate(0deg) blur(2px);
    transform: scale(1.02);
  }
  50% {
    filter: hue-rotate(45deg) blur(3px);
    transform: scale(1);
  }
  100% {
    filter: hue-rotate(0deg) blur(2px);
    transform: scale(1.02);
  }
`;

export const gaussianWarp = keyframes`
  0% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
  100% {
    transform: translate(-10%, -10%) scale(1.01) rotate(0deg);
    filter: blur(40px);
  }
`;

export const dimensionalShift = keyframes`
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
    filter: hue-rotate(0deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
    filter: hue-rotate(180deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
    filter: hue-rotate(360deg);
  }
`;

export const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  background: ${props => {
    if (props.complexCombination) {
      return `linear-gradient(145deg, 
        hsl(${props.complexAngle}, 70%, 20%), 
        hsl(${props.complexAngle + 45}, 70%, 40%),
        hsl(${props.complexAngle + 90}, 70%, 20%)
      )`;
    }
    if (props.isNegative) {
      return 'linear-gradient(145deg, #000000, #1a1a1a)';
    }
    if (props.complexAngle != null) {
      return `linear-gradient(145deg, hsl(${props.complexAngle}, 70%, 20%), hsl(${props.complexAngle}, 70%, 40%))`;
    }
    return 'linear-gradient(145deg, #000000, #1a1a1a)';
  }};
  overflow: hidden;
  perspective: 1000px;
  transform: ${props => props.flipped ? 'scaleY(-1)' : 'none'};

  &::before {
    content: '';
    position: absolute;
    inset: -200%;
    width: 500%;
    height: 500%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 200px,
      ${props => props.isNegative 
        ? 'rgba(0, 0, 0, 0.03)'
        : 'rgba(255, 255, 255, 0.03)'} 200px,
      ${props => props.isNegative
        ? 'rgba(0, 0, 0, 0.03)'
        : 'rgba(255, 255, 255, 0.03)'} 400px
    );
    animation: ${props => props.complexCombination 
      ? css`${shimmer} 20s linear infinite,
         ${refraction} 8s ease-in-out infinite,
         ${dimensionalShift} 15s ease-in-out infinite`
      : css`${shimmer} 20s linear infinite,
         ${refraction} 8s ease-in-out infinite`};
    mix-blend-mode: screen;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      ${props => props.isNegative 
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.1)'} 0%,
      transparent 70%
    );
    animation: ${gaussianWarp} 10s ease-in-out infinite;
    mix-blend-mode: screen;
  }
`;

export const ContentWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${props => props.flipped ? 'scaleY(-1)' : 'none'};
  overflow: hidden;
`;

export const InfinitySymbol = styled.div`
  font-size: min(15vw, 8rem);
  font-weight: 300;
  text-align: center;
  background: ${props => props.isNegative
    ? 'linear-gradient(135deg, #000 0%, #666 100%)'
    : 'linear-gradient(135deg, #fff 0%, #666 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${float} 3s ease-in-out infinite;
  margin: 0 0 2rem;
  display: inline-block;
  will-change: transform;
  transform: ${props => props.rotated ? 'rotate(90deg)' : 'none'};
`;

export const StyledText = styled.div`
  color: ${props => props.isNegative ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-align: center;
  margin: 1rem 0;
  max-width: 600px;
`;


