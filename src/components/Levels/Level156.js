import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import FlowerPot from '../UI/FlowerPot';
import { useAchievements } from '../../hooks/useAchievements';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCoinBill from '../Items/CollectableCoinBill';

const Level156 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Want my 2 cents?</Card.Title>
          <Card.Text>
           Because that's exactly how much money you must have put in the wallet to have it weigh exactly 156 grams!
           Here's some real cash to fill your wallet!
          </Card.Text>
          <CenteredContainer>
            <CollectableCoinBill value={10000} id="156"/>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level156;