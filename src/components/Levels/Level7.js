import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import Scale from '../Storage/Scale';
import CollectableCoinBill from '../Items/CollectableCoinBill';
import HighlightableText from '../UI/HighlightableText';
import { addToScale } from '../../store/slices/inventorySlice';

const CoinsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Level7 = () => {
  const dispatch = useDispatch();
  const scaleItem = useSelector(state => state.inventory.scale);

  // Pre-place a penny on the scale so the player sees the mechanic
  useEffect(() => {
    if (!scaleItem) {
      dispatch(addToScale({ item: { type: 'currency', id: 'tutorial-penny-7', name: '1¢ Coin', value: 1 } }));
    }
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Everything Is a Button" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Anything with a number on it could be a doorway."
            />
          </Card.Text>
          <CoinsContainer>
            <CollectableCoinBill value={5} id="initial-5c" />
            <CollectableCoinBill value={1} id="initial-1c" />
            <CollectableCoinBill value={1} id="initial-1c2" />
          </CoinsContainer>
          <CenteredContainer>
            <Scale />
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={4}>Level 4</LevelButton>
            <LevelButton targetLevel={8}>Level 8</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level7; 