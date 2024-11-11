import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { CenteredContainer, LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import { PageBackground, shimmer, refraction } from './InfinityLevelStyles';
import styled, { css, keyframes } from 'styled-components';

const diagonalScroll = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const Level0Background = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(145deg, 
    ${props => props.isNegative ? '#000000, #1a1a1a' : '#f8f9fa, #e9ecef'});
  overflow: hidden;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 35px,
      ${props => props.isNegative ? 
        'rgba(255, 255, 255, 0.03)' : 
        'rgba(0, 0, 0, 0.03)'} 35px,
      ${props => props.isNegative ? 
        'rgba(255, 255, 255, 0.03)' : 
        'rgba(0, 0, 0, 0.03)'} 70px
    );
    background-size: 141.4% 141.4%;
    animation: ${diagonalScroll} 2s linear infinite;
    mix-blend-mode: ${props => props.isNegative ? 'screen' : 'multiply'};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      ${props => props.isNegative ?
        'rgba(255, 255, 255, 0.02)' :
        'rgba(0, 0, 0, 0.02)'} 0%,
      transparent 70%
    );
    mix-blend-mode: ${props => props.isNegative ? 'screen' : 'multiply'};
  }
`;

const Level0 = ({ isNegative }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Level0Background isNegative={isNegative} />
      <LevelContainer>
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
              text="Each button will take you to the level it displays."
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
      </LevelContainer>
    </>
  );
};

export default Level0; 