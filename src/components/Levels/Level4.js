import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableWallet from '../Items/CollectableWallet';
import CollectableCoinBill from '../Items/CollectableCoinBill';



const Level4 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>A Strange Shrine</Card.Title>
          <Card.Text>
            You'll need to collect some achievements to unlock the secrets that lie within.
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
          </CenteredContainer>
          <Card.Text>
            Wondering how to collect achievements? Why not check out...
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <AchievementShrine requiredCount={3}> {/* 3 */}
              Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!
              <AchievementShrine requiredCount={5}> {/* 5 */}
                Congratulations! You've earned a special wallet.
                Use it to store coins! Make sure you're holding the wallet before you click on the coins, otherwise they'll be treated like a button and will
                transport you away to another level!
                <CollectableWallet />
                <CenteredContainer>
                  <LevelButton targetLevel={7}>Level 7</LevelButton>
                </CenteredContainer>
              </AchievementShrine>
              <CenteredContainer>
                <LevelButton targetLevel={10}>Level 10</LevelButton>
              </CenteredContainer>
            </AchievementShrine>
          </CenteredContainer>
          
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4; 