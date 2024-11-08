import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { CenteredContainer, LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import { PageBackground, shimmer, refraction } from './InfinityLevelStyles';
import styled, { css, keyframes } from 'styled-components';

const gentleFlow = keyframes`
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100px -1000000px;
  }
`;

const Level0Background = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(145deg, #f8f9fa, #e9ecef);
  overflow: hidden;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    inset: -200%;
    width: 500%;
    height: 500%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 50px,
      rgba(0, 0, 0, 0.03) 50px,
      rgba(0, 0, 0, 0.03) 100px
    );
    animation: ${gentleFlow} 10000s linear infinite;
    mix-blend-mode: multiply;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.02) 0%,
      transparent 70%
    );
    mix-blend-mode: multiply;
  }
`;

const Level0 = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Level0Background />
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