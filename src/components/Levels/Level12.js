import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

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

const Level12 = () => {
  const [selectedDozen, setSelectedDozen] = useState(null);

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
                  text="Did you know? A dozen means twelve. A baker's dozen is thirteen. A score is twenty. A pair is two. And a gross is one hundred forty-four. Numbers hide in words!" 
                />
              </>
            )}
          </DozenContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level12;