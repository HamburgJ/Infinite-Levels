import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import CollectableCoinBill from '../Items/CollectableCoinBill';
import HighlightableText from '../UI/HighlightableText';

const shimmer = keyframes`
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.4); }
`;

const CoinSpotlight = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  animation: ${shimmer} 2.5s ease-in-out infinite;
`;

const Level7 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Everything Is a Button" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Anything with a number on it could be a doorway. Try clicking the coin."
            />
          </Card.Text>
          <CoinSpotlight>
            <CollectableCoinBill value={8} id="forward-8c" />
          </CoinSpotlight>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level7; 