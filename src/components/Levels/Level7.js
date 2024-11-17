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
              text="Be on the lookout for buttons hidden in plain sight. Anything which contains a number is could be a button!"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Take look at these coins, for instance. They might not look like they're buttons, but they are!"
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

          <CenteredContainer>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level7; 