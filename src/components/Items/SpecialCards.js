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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 90px;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  opacity: ${props => props.collected ? 0.4 : 1};
  filter: ${props => props.collected ? 'grayscale(40%) brightness(0.9)' : 'none'};
  transition: opacity 0.3s ease, filter 0.3s ease;
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
    background-position: -100% 100%;
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
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(33, 150, 243, 0.6);
  }
`; 


export const PlayingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 90px;
  background: white;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.5rem;
  opacity: ${props => props.collected ? 0.4 : 1};
  filter: ${props => props.collected ? 'grayscale(40%) brightness(0.9)' : 'none'};
  transition: opacity 0.3s ease, filter 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  &.hearts, &.diamonds {
    color: red;
  }
`;

export const CollectedCard = styled(PlayingCard)`
  width: 80px;
  height: 120px;
  font-size: 1.5rem;
  margin: 0 auto;
  cursor: default;
  opacity: 1;
`;

export const NormalCard = styled(PlayingCard)`
  width: 80px;
  height: 120px;
  font-size: 1.5rem;
  margin: 0 auto;
  cursor: pointer;
  opacity: ${props => props.collected ? 0.4 : 1};
  filter: ${props => props.collected ? 'grayscale(40%) brightness(0.9)' : 'none'};
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
  
  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
    opacity: ${props => props.collected ? 0.4 : 1};
  }
`;

// This function returns the correct card component based on the card type
// dark-holographic, gold-shiny, diamond
export const getCardComponent = (type) => {
    const baseStyles = `
      width: 80px;
      height: 120px;
      font-size: 1.5rem;
      margin: 0 auto;
      cursor: pointer;
      opacity: ${props => props.collected ? 0.4 : 1};
      filter: ${props => props.collected ? 'grayscale(40%) brightness(0.9)' : 'none'};
      transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
      
      &:hover {
        transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
        opacity: ${props => props.collected ? 0.4 : 1};
      }
    `;

    switch (type) {
      case 'dark-holographic':
        return styled(DarkHolographicCard)`${baseStyles}`;
      case 'gold-shiny':
        return styled(GoldShinyCard)`${baseStyles}`;
      case 'diamond':
        return styled(DiamondCard)`${baseStyles}`;
      default:
        return NormalCard;
    }
};
  
