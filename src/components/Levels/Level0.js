import React from 'react';
import styled from 'styled-components';
import { Container, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import ChangeMachineButton from '../UI/ChangeMachineButton';

const StyledContainer = styled(Container)`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled(Card)`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Level0 = () => {
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <StyledCard>
        <Card.Body>
        <ChangeMachineButton />
          <Card.Title as="h2" className="mb-4">Welcome to The Infinite Levels !</Card.Title>
          <Card.Text>
            Here stands a neat puzzle game. Press keys to reach next stages. 
          </Card.Text>
          <Card.Text>
           Many stages seem easy to beat. Some parts matter more than others.
          </Card.Text>
          <Card.Text>
            The game teaches each method as shown to you, no need to make random attempts or locate secret clues.
            <ul>
              <li>Watch each stage well</li>
              <li>Make use of your tools at hand</li>
              <li>Ponder beyond the box, then back</li>
            </ul>
          </Card.Text>
          <HighlightableText text="This is a clickable text. Click on the numbers to go to the next level. e i one 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20" />
        
        </Card.Body>
      </StyledCard>
      <LevelButton 
        targetLevel={{ real: 8, imag: 0 }}
        variant="primary"
      >
        Start Game
      </LevelButton>
    </StyledContainer>
  );
};

export default Level0; 