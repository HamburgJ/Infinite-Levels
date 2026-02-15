import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level81 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Nine by Nine" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Nine times nine. Eighty-one. You might have arrived here from level sixty-three — 'what's nine times nine?' Now you know." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="A Sudoku grid is nine by nine — eighty-one cells. A Go board is nineteen by nineteen. A chessboard is eight by eight. Some numbers are shapes in disguise." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Eighty-one sits on the perfect square chain: four, nine, sixteen, twenty-five, thirty-six, forty-nine, sixty-four, eighty-one, one hundred. But here's a deeper question: what happens when you put nine NEXT to nine? Level ninety-nine has a puzzle for you." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={64}>← Sixty-Four (prev square)</LevelButton>
            <LevelButton targetLevel={99}>Ninety-Nine →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={9}>Square Root (Nine)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level81;
