import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import CollectableCard from '../Items/CollectableCard';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
`;

const Level21 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 21 - Blackjack!</Card.Title>
          <CardContainer>
            <CollectableCard cardId="ace-spades" forceAvailable={true} value="A"/>
            <CollectableCard cardId="king-spades" forceAvailable={true} value="K"/>
          </CardContainer>
          <Card.Text>
            <HighlightableText text="The perfect hand in Blackjack - Ace and King of Spades for 21!" />
          </Card.Text>
          <LevelButton targetLevel={17}>VIP Lounge</LevelButton>
          <LevelButton targetLevel={25}>Level 25</LevelButton>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level21;