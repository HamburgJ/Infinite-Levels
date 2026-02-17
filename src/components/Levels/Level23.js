import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const FactCard = styled.div`
  background: rgba(255, 248, 220, 0.8);
  border: 1px solid rgba(180, 160, 100, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  position: relative;

  &::before {
    content: '📌';
    position: absolute;
    top: -8px;
    left: 12px;
    font-size: 1rem;
  }
`;

const BoardContainer = styled.div`
  background: rgba(120, 80, 40, 0.08);
  border: 2px solid rgba(120, 80, 40, 0.2);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  margin: 1rem 0;
  position: relative;
`;

const BoardTitle = styled.div`
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 1rem;
`;

const Level23 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Twenty-Three Enigma" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Some believe the number twenty-three is connected to everything. A pattern hiding in plain sight. Coincidence — or something more?" />
          </Card.Text>

          <BoardContainer>
            <BoardTitle>Evidence Board</BoardTitle>
            <FactCard>
              <HighlightableText text="Humans have twenty-three pairs of chromosomes. The blueprint of life, written in twenty-three." />
            </FactCard>
            <FactCard>
              <HighlightableText text="Michael Jordan wore number twenty-three — and later, briefly, forty-five." />
            </FactCard>
            <FactCard>
              <HighlightableText text="The Earth's axis tilts at twenty-three point five degrees. Without that tilt, no seasons. No life as we know it." />
            </FactCard>
            <FactCard>
              <HighlightableText text="Psalm twenty-three: 'The Lord is my shepherd.' The most quoted passage in the Bible." />
            </FactCard>
            <FactCard>
              <HighlightableText text="It takes twenty-three people in a room before there's a fifty percent chance two share a birthday. The Birthday Problem." />
            </FactCard>
            <FactCard>
              <HighlightableText text="William Shakespeare was born on April twenty-three and died on April twenty-three. Coincidence?" />
            </FactCard>
          </BoardContainer>

          <Card.Text>
            <HighlightableText text="Every fact above is a doorway. The numbers in the words will take you somewhere. Twenty-two is behind you. Twenty-four is ahead. And forty-five? That's a story for another level." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={22}>← Level 22</LevelButton>
            <LevelButton targetLevel={24}>Level 24 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level23;
