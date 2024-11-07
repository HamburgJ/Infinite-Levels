import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import CollectableKey from '../Items/CollectableKey';

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
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 4 - The Golden Key</Card.Title>
          <Card.Text>
            You found a mysterious golden key! Click to collect it.
          </Card.Text>
          
          <CollectableKey keyId="key-1" />
          
          <LevelButton 
            targetLevel={5}
            variant="outline-primary"
            className="mt-4"
          >
            Continue to Level 5
          </LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4; 