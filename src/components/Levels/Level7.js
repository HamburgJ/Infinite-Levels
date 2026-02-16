import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { FaTrophy } from 'react-icons/fa';
import Scale from '../Storage/Scale';
import CollectableCoinBill from '../Items/CollectableCoinBill';
import HighlightableText from '../UI/HighlightableText';
import { addToScale } from '../../store/slices/inventorySlice';
import { TutorialCallout } from '../UI/Feedback';

const CoinsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Level7 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const scaleItem = useSelector(state => state.inventory.scale);
  const hasWallet = equippedItem?.type === 'wallet';

  // Pre-place a penny on the scale if it's empty, so the player sees the mechanic in action
  useEffect(() => {
    if (!scaleItem) {
      dispatch(addToScale({ item: { type: 'currency', id: 'tutorial-penny-7', name: '1¢ Coin', value: 1 } }));
    }
  }, []); // Only on mount

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Everything Is a Button" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Be on the lookout for buttons hiding in plain sight. Anything with a number on it could be a doorway."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text={hasWallet 
                ? "Take a look at these coins, for instance. They might not look like they're buttons, but they are! Left-click a coin to travel to that level. Right-click a coin to collect it into your wallet!"
                : "Take a look at these coins, for instance. They might not look like they're buttons, but they are! Click a coin to travel to that level."}
            />
          </Card.Text>
          <CoinsContainer>
            <CollectableCoinBill value={5} id="initial-5c" />
            <CollectableCoinBill value={1} id="initial-1c" />
            <CollectableCoinBill value={1} id="initial-1c2" />
          </CoinsContainer>
          <Card.Text>
            <HighlightableText 
              text="And here's a scale. Put something on it and the screen shows the weight. Here's the secret: that weight is a level number. Click the weight on the screen to travel there!"
            />
          </Card.Text>
          <CenteredContainer>
            <Scale />
          </CenteredContainer>
          <TutorialCallout>
            <HighlightableText 
              text="⚖️ A penny is already on the scale — it weighs 3 grams. See the number on the display? Click it to travel to level 3!"
            />
          </TutorialCallout>
          <Card.Text>
            <HighlightableText 
              text="Try putting a coin on the scale — a penny weighs three grams. Click the three on the screen to visit level three. Your wallet weighs one hundred fifty grams. Everything has a weight. Every weight is a number. Every number is a level."
            />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="Coins, scales, buttons — you're starting to see the pattern. Head to Level 8 for what comes next."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={8}>Level 8</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level7; 