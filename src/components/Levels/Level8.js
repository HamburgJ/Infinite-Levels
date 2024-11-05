import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { equipItem } from '../../store/slices/inventorySlice';
import { Card, Button } from 'react-bootstrap';
import { FaWallet } from 'react-icons/fa';
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

const CollectibleWallet = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
  cursor: pointer;
  transition: transform 0.2s;
  opacity: ${props => props.collected ? 0.5 : 1};
  pointer-events: ${props => props.collected ? 'none' : 'auto'};

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const Level8 = () => {
  const dispatch = useDispatch();
  const collectedItems = useSelector(state => state.inventory.collectedItems);
  const [collected, setCollected] = React.useState(false);

  // Check if wallet was previously collected
  React.useEffect(() => {
    if (collectedItems['wallet-1'] === false) {
      setCollected(false);
    }
  }, [collectedItems]);

  const handleCollectWallet = () => {
    if (!collected) {
      dispatch(equipItem({
        type: 'wallet',
        id: 'wallet-1',
        name: 'Money Wallet'
      }));
      setCollected(true);
    }
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 8 - The Wallet</Card.Title>
          <Card.Text>
            You found a wallet! Click to collect it and check your inventory.
          </Card.Text>

          <CollectibleWallet 
            onClick={handleCollectWallet}
            collected={collected}
          >
            <FaWallet />
          </CollectibleWallet>

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