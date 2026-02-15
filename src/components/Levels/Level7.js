import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
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

const CoinsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Level7 = () => {
  const { unlockAchievement } = useAchievements();

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Basic Traveling Techniques" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Be on the lookout for buttons hidden in plain sight. Anything which contains a number could be a button!"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Take a look at these coins, for instance. They might not look like they're buttons, but they are! Left-click a coin to travel to that level. Right-click a coin to collect it into your wallet!"
            />
          </Card.Text>
          <CoinsContainer>
            <CollectableCoinBill value={5} id="initial-5c" />
            <CollectableCoinBill value={1} id="initial-1c" />
            <CollectableCoinBill value={1} id="initial-1c2" />
          </CoinsContainer>
          <Card.Text>
            <HighlightableText 
              text="And here's a scale. Its screen is a secret button too!"
            />
          </Card.Text>
          <CenteredContainer>
            <Scale />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="Everything has a weight. And every weight is a number. And every number... is a level."
            />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="Now that you know the basics, head to Level 8 for advanced techniques!"
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