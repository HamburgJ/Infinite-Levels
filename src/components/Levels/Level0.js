import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { CenteredContainer, LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import { PageBackground, shimmer, refraction } from './InfinityLevelStyles';
import styled, { css, keyframes } from 'styled-components';
import AchievementShrine from '../UI/AchievementShrine';
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
          <Card.Text>
            <HighlightableText
              text="This game is still in development! some things may be broken, and some things are not possible to do yet or not developed yet! Come back soon!"
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
          {isNegative && (
            <AchievementShrine maximumCount={10}>
              <p>You can have up to 10 achievements.</p>
            </AchievementShrine>
          )}
        </Card.Body>
      </StyledCard>
      </LevelContainer>
    </>
  );
};

export default Level0; 