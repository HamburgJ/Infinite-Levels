import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HintNudge = styled.div`
  animation: ${fadeIn} 1.5s ease-out;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  background: rgba(0, 123, 255, 0.06);
  border-left: 3px solid rgba(0, 123, 255, 0.4);
  border-radius: 4px;
  font-size: 0.9rem;
  color: #555;
`;

const Level3 = () => {
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNudge(true), 25000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Another One!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Level 2 was hiding in Level 1 — did you find it?"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="If you're stuck, go back. Level 1 has more than one secret tucked inside those accordions."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Some levels look empty. That doesn't mean they are."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Back to Level 1</LevelButton>
            <LevelButton targetLevel={0}>Back to Level 0</LevelButton>
            <LevelButton targetLevel={4}>Onward to Level 4</LevelButton>
          </CenteredContainer>
          {showNudge && (
            <HintNudge>
              <HighlightableText
                text="Still stuck? Try the ❓ icon in the top-right corner — it has a hint for every level."
              />
            </HintNudge>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level3; 