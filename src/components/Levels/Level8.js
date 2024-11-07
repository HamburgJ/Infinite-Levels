import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { equipItem } from '../../store/slices/inventorySlice';
import { Card, Button } from 'react-bootstrap';
import { FaWallet } from 'react-icons/fa';
import LevelButton from '../UI/LevelButton';
import CollectibleWallet from '../Items/CollectableWallet';

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


const Level8 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 8 - The Wallet</Card.Title>
          <Card.Text>
            You found a wallet! Click to collect it and check your inventory.
          </Card.Text>

          <CollectibleWallet />

          <LevelButton 
            targetLevel={9}
            variant="outline-dark"
            className="mt-4"
          >
            Continue to Level 9
          </LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level8; 