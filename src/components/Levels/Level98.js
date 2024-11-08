import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ImpossibleButton = styled(Button)`
  position: absolute;
  transition: all 0.2s;
  &:hover {
    transform: translate(
      ${() => Math.random() * 500 - 250}px,
      ${() => Math.random() * 500 - 250}px
    );
  }
`;

const Level98 = () => {
  const [attempts, setAttempts] = useState(0);
  const [buttonText, setButtonText] = useState('Click me to win!');

  const handleAttempt = () => {
    setAttempts(prev => prev + 1);
    setButtonText(['Nice try!', 'Almost!', 'So close!', 'Keep going!'][Math.floor(Math.random() * 4)]);
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>The Impossible Level</Card.Title>
          <Card.Text>
            Attempts: {attempts}
            {attempts > 50 && " (You're pretty persistent!)"}
            {attempts > 100 && " (Maybe there's another way...)"}
          </Card.Text>
          <div style={{ height: '400px', position: 'relative' }}>
            <ImpossibleButton
              variant="success"
              onClick={handleAttempt}
            >
              {buttonText}
            </ImpossibleButton>
          </div>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level98;