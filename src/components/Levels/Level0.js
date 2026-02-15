import React from 'react';
import { Card } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { CenteredContainer, LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import styled, { keyframes } from 'styled-components';
const diagonalScroll = keyframes`
  0%, 100% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 0 0;
  }
`;

export const Level0Background = styled.div`
  position: fixed;
  inset: 0;
  perspective: 1000px;
  background-image: repeating-linear-gradient(
    -45deg,
    ${props => props.isNegative ? '#000000' : '#f8f9fa'},
    ${props => props.isNegative ? '#000000' : '#f8f9fa'} 2rem,
    ${props => props.isNegative ? '#1a1a1a' : '#e9ecef'} 2rem,
    ${props => props.isNegative ? '#1a1a1a' : '#e9ecef'} 4rem
  );
  background-size: 200% 200%;
  animation: ${diagonalScroll} 20s ease-in-out infinite;

  }
`;

const barberpole = keyframes`
  100% {
    background-position: 100% 100%;
  }
`;

const Level0 = ({ isNegative }) => {

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
              text="To proceed, press the button that shows the level you want to visit."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Every level is filled with secrets and may have multiple ways forward, so explore carefully!"
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