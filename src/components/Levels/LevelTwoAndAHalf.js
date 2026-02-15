import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`;

const HalfSymbol = styled.div`
  text-align: center;
  font-size: 3.5rem;
  margin: 1rem 0;
  animation: ${wobble} 3s ease-in-out infinite;
`;

const LevelTwoAndAHalf = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 2.5 — Two and a Half" size="medium" />
          </Card.Title>

          <HalfSymbol>2½</HalfSymbol>

          <Card.Text>
            <HighlightableText text="TWO and a HALF. The most human of decimals." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="Nobody says TWO POINT FIVE in everyday life. They say TWO and a HALF. TWO and a HALF hours until dinner. TWO and a HALF scoops of ice cream. The kid is TWO and a HALF years old — not THIRTY months, not TWO POINT FIVE years. Language has its own mathematics." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="You're sitting exactly between TWO and THREE. FIVE halves stacked up. The midpoint of the SECOND gap. From ONE AND A HALF to here is the same distance as from here to THREE AND A HALF — a hop of ONE each time, always landing on the HALF." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="This is where decimals stop feeling like math and start feeling like life. Nobody needs to calculate TWO and a HALF. They just know it. It's the number that proves fractions were never the enemy — they were always part of the conversation." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={1.5}>Level 1.5</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
            <LevelButton targetLevel={3}>Level 3</LevelButton>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelTwoAndAHalf;
