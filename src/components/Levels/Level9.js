import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card, ListGroup } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';

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

const SecretText = styled.span`
  color: ${props => props.revealed ? '#000' : 'transparent'};
  background: ${props => props.revealed ? 'transparent' : '#000'};
  cursor: pointer;
  padding: 0 4px;
  
  &:hover {
    color: ${props => props.revealed ? '#000' : '#666'};
    background: ${props => props.revealed ? 'transparent' : '#333'};
  }
`;

const Level9 = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(markMechanicDiscovered('tutorial_complete'));
  }, [dispatch]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 9 - Tutorial Complete!</Card.Title>
          <Card.Text>
            Congratulations! You've completed the tutorial levels. Here's what you've learned:
          </Card.Text>
          
          <ListGroup variant="flush">
            <ListGroup.Item>🔢 Number entry can take you to levels 1-9</ListGroup.Item>
            <ListGroup.Item>⏰ Some levels are time-sensitive</ListGroup.Item>
            <ListGroup.Item>💰 Money bills can contain level tokens</ListGroup.Item>
            <ListGroup.Item>
              🔍 Hidden text might contain secrets... like <SecretText>level 25</SecretText>
            </ListGroup.Item>
          </ListGroup>

          <Card.Text className="mt-4">
            From here, you can:
          </Card.Text>
          <ListGroup>
            <LevelButton targetLevel={5} variant="outline-primary">
              Return to the number entry device (Level 5)
            </LevelButton>
            <LevelButton targetLevel={10} variant="primary">
              Continue to Level 10
            </LevelButton>
            <LevelButton targetLevel={1} variant="outline-secondary">
              Start over from Level 1
            </LevelButton>
          </ListGroup>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level9; 