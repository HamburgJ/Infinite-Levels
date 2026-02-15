import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const RedactedBlock = styled.span`
  background: ${props => props.revealed ? 'transparent' : '#111'};
  color: ${props => props.revealed ? 'inherit' : '#111'};
  padding: 0 4px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: ${props => props.revealed ? 'auto' : 'none'};
  
  &:hover {
    background: ${props => props.revealed ? 'transparent' : '#333'};
  }
`;

const ClassifiedHeader = styled.div`
  font-family: monospace;
  font-size: 0.9rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

const Level51 = () => {
  const [revealed, setRevealed] = useState({});

  const toggleReveal = (id) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <ClassifiedHeader>⚠️ CLASSIFIED — CLEARANCE LEVEL REQUIRED</ClassifiedHeader>
          <Card.Title><HighlightableText text="Area Fifty-One" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="The contents of this level are" />{' '}
            <RedactedBlock revealed={revealed.a} onClick={() => toggleReveal('a')}>
              <HighlightableText text="four hundred and four" />
            </RedactedBlock>{' '}
            <HighlightableText text=". Investigation status:" />{' '}
            <RedactedBlock revealed={revealed.b} onClick={() => toggleReveal('b')}>
              <HighlightableText text="one hundred fifty-three" />
            </RedactedBlock>
            <HighlightableText text="." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Subject location:" />{' '}
            <RedactedBlock revealed={revealed.c} onClick={() => toggleReveal('c')}>
              <HighlightableText text="five plus five i" />
            </RedactedBlock>
            <HighlightableText text=". Do not approach without" />{' '}
            <RedactedBlock revealed={revealed.d} onClick={() => toggleReveal('d')}>
              <HighlightableText text="three point one four one five nine" />
            </RedactedBlock>{' '}
            <HighlightableText text="clearance." />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', color: '#888', marginTop: '1rem' }}>
            <HighlightableText text="Some things are classified for a reason. Others just want you to look closer." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={50}>← Back to Level 50</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level51;
