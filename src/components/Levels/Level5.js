import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card, Form, Button } from 'react-bootstrap';

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

const NumberInput = styled(Form.Control)`
  max-width: 200px;
  margin: 1rem auto;
  text-align: center;
  font-size: 1.2rem;
`;

const HintText = styled.p`
  color: ${props => props.isRevealed ? '#666' : 'transparent'};
  transition: color 0.3s ease;
  user-select: none;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const Level5 = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputNumber = parseInt(number, 10);

    if (inputNumber === 6) {
      dispatch(setCurrentLevel(6));
    } else if (inputNumber >= 1 && inputNumber <= 9) {
      // After a few attempts, allow navigation to any level 1-9
      if (attempts >= 2) {
        dispatch(setCurrentLevel(inputNumber));
      } else {
        setAttempts(prev => prev + 1);
        if (attempts === 1) {
          setShowHint(true);
        }
      }
    }
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>The Number Device</Card.Title>
          <Card.Text>
            You find a mysterious number entry device with a display showing:
          </Card.Text>
          <Card.Text className="text-center">
            "2 × 3 = ?"
          </Card.Text>
          
          <Form onSubmit={handleSubmit}>
            <NumberInput
              type="number"
              min="1"
              max="9"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter number"
            />
            <div className="text-center">
              <Button type="submit" variant="outline-dark">
                Submit
              </Button>
            </div>
          </Form>

          <HintText isRevealed={showHint}>
            Hint: This device seems to accept any single digit...
          </HintText>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5;