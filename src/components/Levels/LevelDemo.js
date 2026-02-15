import React from 'react';
import styled from 'styled-components';
import { Container, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import GamblingMachine from '../UI/GamblingMachine';
import CollectibleWallet from '../Items/CollectableWallet';
import ChaseButton from '../UI/ChaseButton';
import AchievementShrine from '../UI/AchievementShrine';
import ArgumentSimulator from '../Games/ArgumentSimulator';
import Jester from '../Characters/Jester';
import CollectableCardBox from '../Items/CollectableCardBox';
import CollectableCard from '../Items/CollectableCard';
import Diamond from '../Items/CollectableDiamond';
import BlackHole from '../Items/CollectableBlackHole';
import Scale from '../Storage/Scale';
import Bookshelf from '../Storage/Bookshelf';
import CollectableCoinBill from '../Items/CollectableCoinBill';
import CollectableKey from '../Items/CollectableKey';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  > * {
    margin: 20px 0;
    align-self: center;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const LevelDemo = () => {
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <StyledCard>
      <LevelButton 
        targetLevel={0}
        variant="primary"
      >
        Start Game
      </LevelButton>
        <Card.Body>
          <Card.Title as="h2" className="mb-4">This is the demo level.</Card.Title>
          <Card.Text>
            If you made it here, you've seriously broken the game, congratulations!
          </Card.Text>
          <Card.Text>
            Here stands a neat puzzle game. Press keys to reach next stages. 
          </Card.Text>
          <Card.Text>
           Many stages seem easy to beat. Some parts matter more than others.
          </Card.Text>
          <Card.Text>
            The game teaches each method as shown to you, no need to make random attempts or locate secret clues.
            <ul>
              <li>Watch each stage well</li>
              <li>Make use of your tools at hand</li>
              <li>Ponder beyond the box, then back</li>
            </ul>
          </Card.Text>
          <HighlightableText 
            text={
              "0123456789 999+999i 3i (2+1)^2 level 1 -level 1 level = level*level millinillion the speed of light sound infinity googol centillion Infinity Infinity+i"
            }
            allowTextPickup={true}
            sourceId="unique-source-id"
          /> 
          <Diamond />
          <BlackHole />
          <Scale />
          <Bookshelf />
          <GamblingMachine />
          <CollectibleWallet />
           <ChaseButton targetLevel={4} variant="circle">
            Catch Me 
           </ChaseButton>
          <AchievementShrine />
          <AchievementShrine maximumCount={20} requiredCount={10} />
          <ArgumentSimulator />
          <ChangeMachineButton />
          <Jester currentLevel="0" />
          <CollectableCardBox />
          <CollectableCard cardId="ace-spades" suit="spades" value="A" />
          <CollectableCard cardId="ace-hearts" suit="hearts" value="A" />
          <CollectableCard cardId="ace-diamonds" suit="diamonds" value="A" />
          <CollectableCard cardId="ace-clubs" suit="clubs" value="A" />

          <CollectableCoinBill value={25} id="25-coin" />
          <CollectableKey />
        </Card.Body>
      </StyledCard>
      
    </StyledContainer>
  );
};

export default LevelDemo; 