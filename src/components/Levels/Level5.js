import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import LockedBox from '../UI/LockedBox';

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

const Level5 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 5 - The Locked Box</Card.Title>
          <Card.Text>
            There's a mysterious locked box here. Maybe that key you found earlier could help?
          </Card.Text>
          
          <LockedBox requiredKey="key-1">
            <Card.Text>
              Congratulations! You've unlocked the box. Here's a secret path...
            </Card.Text>
            <LevelButton 
              targetLevel={7}
              variant="outline-success"
            >
              Skip to Level 7
            </LevelButton>
          </LockedBox>
          
          <LevelButton 
            targetLevel={6}
            variant="outline-primary"
            className="mt-4"
          >
            Continue to Level 6
          </LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level5;