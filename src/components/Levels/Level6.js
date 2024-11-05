import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const NumberButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 1.2rem;
  background: ${props => props.highlighted ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

const Level6 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Mark the number entry mechanic as discovered when reaching this level
    dispatch(markMechanicDiscovered('numberEntry'));
  }, [dispatch]);

  const handleNumberClick = (number) => {
    dispatch(setCurrentLevel(number));
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 6 - The Number Grid</Card.Title>
          <Card.Text>
            Congratulations! You've discovered that the number entry device can be used to travel to any level from 1 to 9.
          </Card.Text>
          <Card.Text>
            Here's a grid of all available levels. Try visiting some of them!
          </Card.Text>
          
          <NumberGrid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <NumberButton
                key={num}
                onClick={() => handleNumberClick(num)}
                highlighted={num === 6}
              >
                {num}
              </NumberButton>
            ))}
          </NumberGrid>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level6; 