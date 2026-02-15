import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
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

const Level22 = () => {
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNudge(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Catch Twenty-Two" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="A paradox. You need to leave this level to find the exit. But the exit is only in the words." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="There are no buttons here. No arrows. No hints. Just words — and the numbers hiding inside them." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="If you're lost, remember: you can always go back to twenty-one. The outpost at thirty isn't far. And the answer to everything waits at forty-two." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Some say the real exit is at one hundred. Others say zero is where everything begins. The choice is yours — if you can find it." />
          </Card.Text>
          {showNudge && (
            <HintNudge>
              <HighlightableText
                text="Stuck? Try selecting a number word in the text above — like 'twenty-one' or 'forty-two'."
              />
            </HintNudge>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level22;
