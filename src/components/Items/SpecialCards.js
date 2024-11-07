import styled, { keyframes, css } from 'styled-components';

const wobbleFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(-4deg);
  }
  25% {
    transform: translate(0, -10px) rotate(4deg);
  }
  50% {
    transform: translate(0, 0px) rotate(4deg);
  }
  75% {
    transform: translate(0, -10px) rotate(-4deg);
  }
`;

const baseCardStyles = css`
  display: inline-block;
  cursor: pointer;
  width: 60px;
  height: 90px;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  will-change: transform;
  transform-origin: center center;
  animation: ${wobbleFloat} 3s ease-in-out infinite;
`;

const holographicShimmer = keyframes`
  0% {
    background-position: 0 0;
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    background-position: 100% 100%;
    filter: hue-rotate(180deg) brightness(1.2);
  }
  100% {
    background-position: 0 0;
    filter: hue-rotate(360deg) brightness(1);
  }
`;

const goldShine = keyframes`
  0% {
    background-position: -100% -100%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: -100% -100%;
  }
`;

const diamondSparkle = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
`;

export const DarkHolographicCard = styled.div`
  ${baseCardStyles}
  background: linear-gradient(135deg, #1a1a1a, #333);
  color: #fff;
  position: relative;
  overflow: hidden;
  border: 2px solid #444;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    background-size: 200% 200%;
    animation: ${holographicShimmer} 3s linear infinite;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
`;

export const GoldShinyCard = styled.div`
  ${baseCardStyles}
  background: linear-gradient(135deg, #ffd700, #b8860b);
  color: #442c00;
  border: 2px solid #966b00;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 65%,
      transparent 100%
    );
    background-size: 200% 200%;
    animation: ${goldShine} 4s ease-in-out infinite;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
  }
`;

export const DiamondCard = styled.div`
  ${baseCardStyles}
  background: linear-gradient(135deg, #e3f2fd, #90caf9);
  color: #1565c0;
  border: 2px solid #42a5f5;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    background-size: 200% 200%;
    animation: ${holographicShimmer} 3s linear infinite;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(33, 150, 243, 0.6);
  }
`; 