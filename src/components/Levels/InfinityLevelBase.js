import React from 'react';
import styled, { keyframes } from 'styled-components';
import LevelButton from '../UI/LevelButton';

const shimmer = keyframes`
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

const float = keyframes`
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

const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  background: ${props => props.theme === 'negative' 
    ? 'linear-gradient(145deg, #ffffff, #e6e6e6)'
    : 'linear-gradient(145deg, #000000, #1a1a1a)'};
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
      ${props => props.theme === 'negative' 
        ? 'rgba(0, 0, 0, 0.03)'
        : 'rgba(255, 255, 255, 0.03)'} 200px,
      ${props => props.theme === 'negative'
        ? 'rgba(0, 0, 0, 0.03)'
        : 'rgba(255, 255, 255, 0.03)'} 400px
    );
    animation: ${shimmer} 20s linear infinite;
    mix-blend-mode: screen;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transform: ${props => props.flipped ? 'scaleY(-1)' : 'none'};
`;

const InfinitySymbol = styled.div`
  font-size: 8rem;
  font-weight: 300;
  text-align: center;
  background: ${props => props.theme === 'negative'
    ? 'linear-gradient(135deg, #000 0%, #666 100%)'
    : 'linear-gradient(135deg, #fff 0%, #666 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${float} 3s ease-in-out infinite;
  margin: 2rem 0;
  display: inline-block;
  will-change: transform;
  transform: ${props => props.rotated ? 'rotate(90deg)' : 'none'};
`;

const StyledText = styled.div`
  color: ${props => props.theme === 'negative' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem 0;
`;

export const createInfinityLevel = ({ symbol, theme, flipped, rotated, messages }) => {
  return () => (
    <>
      <PageBackground theme={theme} flipped={flipped} />
      <ContentWrapper flipped={flipped}>
        <InfinitySymbol theme={theme} rotated={rotated}>{symbol}</InfinitySymbol>
        {messages.map((message, index) => (
          <StyledText key={index} theme={theme}>
            {message}
          </StyledText>
        ))}
        <div className="d-flex justify-content-center">
          <LevelButton 
            targetLevel={0}
            variant={theme === 'negative' ? 'outline-dark' : 'outline-light'}
          >
            Return to Reality
          </LevelButton>
        </div>
      </ContentWrapper>
    </>
  );
}; 