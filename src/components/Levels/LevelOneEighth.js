import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const PizzaSlice = styled.div`
  text-align: center;
  font-size: 2.5rem;
  margin: 1rem 0;

  & span {
    display: inline-block;
    animation: ${bounce} 1.5s ease-in-out infinite;
    animation-delay: ${props => props.$delay || '0s'};
  }
`;

const NoteDisplay = styled.div`
  font-family: monospace;
  text-align: center;
  font-size: 1.3rem;
  color: #8e6cc0;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(142, 108, 192, 0.08);
  border-radius: 8px;
`;

const LevelOneEighth = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.125 — One Eighth" size="medium" />
          </Card.Title>

          <PizzaSlice>
            <span>🍕</span>
          </PizzaSlice>
          <NoteDisplay>♪ = ⅛ note</NoteDisplay>

          <Card.Text>
            <HighlightableText text="ONE EIGHTH. ZERO POINT ONE TWO FIVE. One slice of a pizza cut into EIGHT." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="In music, an EIGHTH note is HALF a beat — you play TWO of them in the time it takes to play ONE QUARTER note. Musicians call them quavers, because they're quick enough to make the air tremble." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="EIGHT is the great halver. HALF of a HALF of a HALF. Three bisections deep. Start with ONE and cut it in HALF: you get ZERO POINT FIVE. Cut that in HALF: ZERO POINT TWO FIVE. Once more: ZERO POINT ONE TWO FIVE. Each cut reveals a new number, waiting inside the last one like a matryoshka doll." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="And TWELVE POINT FIVE percent — that's what ONE EIGHTH is as a percentage. Not a round number, not a clean fraction of ONE HUNDRED. EIGHTHS don't play nice with the decimal system. They need THREE digits after the POINT where HALVES and QUARTERS only need ONE or TWO." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.25}>Level 0.25 (Double me)</LevelButton>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0.1}>Level 0.1</LevelButton>
            <LevelButton targetLevel={8}>Level 8</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelOneEighth;
