import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
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

const Level4 = () => {
  const dispatch = useDispatch();

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 4</Card.Title>
          <Card.Text>
            Did you know? In Level 3, you need to rotate the cube exactly 5 times to reveal the path forward.
          </Card.Text>
          <Card.Text>
            If you're stuck, you can always go back to Level 2 and try a different approach.
          </Card.Text>
          <LevelButton 
            targetLevel={2}
            variant="outline-secondary"
          >
            Return to Level 2
          </LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4; 