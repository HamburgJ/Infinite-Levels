import React, { useState } from 'react';
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
                  text="A dozen means twelve. A baker's dozen is thirteen. Numbers hide in words!" 
                />
              </>
            )}
          </DozenContainer>
          <HighlightableText text="What comes after a dozen? Thirteen, some say, is an unlucky number." />
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.6, fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <HighlightableText text="Some say the numbers go sideways too — not just up and down. But who would believe that?" />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={11}>Back to Level 11</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level12;