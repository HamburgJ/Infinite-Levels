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
import ChangeMachineButton from '../UI/ChangeMachineButton';

const StyledListItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Level10 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Congratulations! You've completed the first 10 levels!</Card.Title>
          <Card.Text>
            If you haven't yet, don't worry, you'll figure out how to get there if you keep exploring!
            These first levels were meant as a tutorial to introduce you to the mechanics of the game.
          </Card.Text>
          <ListGroup>
            <StyledListItem>
              Levels 0-3: <em>Buttons and Hints</em>
            </StyledListItem>
            <StyledListItem>
              Levels 4-6: <em>Achievements and Items</em>
            </StyledListItem>
            <StyledListItem>
              Level 7: <em>Basic Traveling Techniques</em>
            </StyledListItem>
            <StyledListItem>
              Level 8: <em>Advanced Traveling Techniques</em>
            </StyledListItem>
            <StyledListItem>
              Level 9: <em>Secrets</em>
            </StyledListItem>
          </ListGroup>
          <Card.Text>
            From here on out, finding new levels will be more difficult!
          </Card.Text>
          <Card.Text>
            Don't forget to use the game hints, and make sure you explore every level! Here are some places to start:
          </Card.Text>  
          <ListGroup variant="flush">
            <StyledListItem>
              🔄 Return to Level 0 and review the game tutorial
              <LevelButton targetLevel={0} >
                Level 0
              </LevelButton>
            </StyledListItem>
            <StyledListItem>
              🌍 Travel forth
              <LevelButton targetLevel={11} >
                Level 11
              </LevelButton>
            </StyledListItem>
          </ListGroup>
          <AchievementShrine requiredCount={0}> {/* 9 needed*/}
            <CenteredContainer>
              <ChangeMachineButton />
            </CenteredContainer>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10;