import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
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

const Level10 = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(markMechanicDiscovered('complexNumbers'));
  }, [dispatch]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 10 - Complex Numbers</Card.Title>
          <Card.Text>
            Welcome to the complex plane! Notice how the background color changes based on the imaginary component of the level number.
          </Card.Text>
          
          <div className="d-flex flex-wrap justify-content-center">
            <LevelButton 
              targetLevel={{ real: 10, imag: 1 }}
              variant="danger"
            >
              Level 10 + i
            </LevelButton>
            
            <LevelButton 
              targetLevel={{ real: 10, imag: -1 }}
              variant="success"
            >
              Level 10 - i
            </LevelButton>
            
            <LevelButton 
              targetLevel={{ real: 11, imag: 0 }}
              variant="primary"
            >
              Back to Real Numbers (Level 11)
            </LevelButton>
          </div>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10; 