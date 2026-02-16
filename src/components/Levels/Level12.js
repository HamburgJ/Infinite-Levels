import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const DozenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const DozenDisplay = styled.div`
  font-size: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const HintNudge = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(255, 193, 7, 0.1);
  border: 1px dashed rgba(255, 193, 7, 0.4);
  border-radius: 8px;
  text-align: center;
  animation: fadeIn 1s ease-in;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Level12 = () => {
  const [selectedDozen, setSelectedDozen] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const renderDozen = (emoji) => {
    return Array(12).fill(emoji).map((emoji, index) => (
      <span key={index}>{emoji}</span>
    ));
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="A Dozen Choices" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Would you like a dozen eggs or a dozen donuts?" />
          </Card.Text>
          
          <DozenContainer>
            {!selectedDozen ? (
              <>
                <Button 
                  variant="outline-primary" 
                  onClick={() => setSelectedDozen('🥚')}
                >
                  Dozen Eggs 🥚
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => setSelectedDozen('🍩')}
                >
                  Dozen Donuts 🍩
                </Button>
              </>
            ) : (
              <>
                <HighlightableText 
                  text={`Here's your dozen ${selectedDozen === '🥚' ? 'eggs' : 'donuts'}!`} 
                  size="small"
                />
                <DozenDisplay>
                  {renderDozen(selectedDozen)}
                </DozenDisplay>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setSelectedDozen(null)}
                >
                  Choose Again
                </Button>
                <br/>
                <HighlightableText 
                  text="A dozen means twelve. A baker's dozen is thirteen. Numbers hide in words!" 
                />
              </>
            )}
          </DozenContainer>
          <HighlightableText text="What comes after a dozen? Thirteen, some say, is an unlucky number." />
          {showHint && (
            <HintNudge>
              <HighlightableText text="💡 Stuck? Try selecting one of the number words in the text above. Words like twelve, thirteen, and twenty aren't just words here — they're doorways." />
            </HintNudge>
          )}
          <CenteredContainer>
            <LevelButton targetLevel={11}>Back to Level 11</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level12;