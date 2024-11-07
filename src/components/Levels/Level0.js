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
import CollectableEncyclopedia from '../Items/CollectableEncyclopedia';
import ArgumentSimulator from '../Games/ArgumentSimulator';
import Jester from '../Characters/Jester';
import CollectableCardBox from '../Items/CollectableCardBox';
import CollectableCard from '../Items/CollectableCard';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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

const Level0 = () => {
  const dispatch = useDispatch();

  return (
    <StyledContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title as="h2" className="mb-4">Welcome to The Infinite Levels !</Card.Title>
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
            text="not 1 Some text -2 that can be picked up twthreeo wonton xii vii l Infinity -Infinity - Infinityi-Infinityi (2+1*3^2)/2=level+1 2=level+1=2"
            allowTextPickup={true}
            sourceId="unique-source-id"
          />
          <HighlightableText 
            text={
              " -3 -4 -5 -6 one plus two equals level " +
              "dozen divided by three equals level " +
              "score minus dozen equals level " +
              "pair plus couple equals level " +
              "triple times trio equals level " +
              "(quartet squared plus triple) divided by pair equals level " +
              "dozen minus (level times pair) equals zero " +
              "pi equals level " +
              "e times level equals ten " +
              "level times level equals quartet " +
              "level squared equals sixteen " +
              "infinity equals level plus one " +
              "level equals level plus one " +
              "level equals level " +
              "level+1=dozen/2 " +
              "(2*level+1)^2=25 " +
              "wonton plus fortnight equals level " +
              "toupee times forest equals level " +
              "level equals happiness " +
              "level = cat + dog " +
              "= level = " +
              "level level level " +
              "zero equals level " +
              "-infinity equals level " +
              "level equals -one " +
              "i times level equals i " +
              "level plus i equals 2i " +
              "level equals (((one plus two) times three) divided by pair) " +
              "((level plus one) times (level minus one)) equals zero"
            }
            allowTextPickup={true}
            sourceId="unique-source-id"
          />
          <GamblingMachine />
          <CollectibleWallet />
           <ChaseButton targetLevel={4} variant="circle">
            Catch Me 
           </ChaseButton>
          <AchievementShrine />
          <ArgumentSimulator />
          <CollectableEncyclopedia />
          <ChangeMachineButton />
          <Jester currentLevel="0" />
          <CollectableCardBox />
          <CollectableCard cardId="ace-spades" suit="spades" value="A" />
          <CollectableCard cardId="ace-hearts" suit="hearts" value="A" />
          <CollectableCard cardId="ace-diamonds" suit="diamonds" value="A" />
          <CollectableCard cardId="ace-clubs" suit="clubs" value="A" />
        </Card.Body>
      </StyledCard>
      <LevelButton 
        targetLevel={4}
        variant="primary"
      >
        Start Game
      </LevelButton>
    </StyledContainer>
  );
};

export default Level0; 