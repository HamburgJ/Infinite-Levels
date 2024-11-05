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
  transform: scaleY(-1); // Invert the entire level!
`;

const StyledCard = styled(Card)`
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: white;
`;

const Level14 = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(markMechanicDiscovered('negativeNumbers'));
  }, [dispatch]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title style={{ transform: 'scaleY(-1)' }}>
            Level 14 - Negative Space
          </Card.Title>
          <Card.Text style={{ transform: 'scaleY(-1)' }}>
            Welcome to the negative number space! Everything here is inverted...
          </Card.Text>
          
          <div className="d-flex justify-content-center flex-wrap">
            <LevelButton targetLevel={-1} variant="light">
              Level -1
            </LevelButton>
            <LevelButton targetLevel={-5} variant="light">
              Level -5
            </LevelButton>
            <LevelButton targetLevel={15} variant="light">
              Return to Positive Space
            </LevelButton>
          </div>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level14; 