import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card, Accordion } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Level1 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_1');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Welcome to Level 1</Card.Title>
          <Card.Text>
            In this game, each level contains a button that will take you to the next level.
            Your goal is to find these buttons, which might be hidden in various ways.
          </Card.Text>
          <Card.Text>
            Some levels will use special mechanics, like rotating cubes or other puzzles.
            Always be on the lookout for interactive elements!
          </Card.Text>
          
          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Game Instructions</Accordion.Header>
              <Accordion.Body>
                <p>Here's your first challenge: The button to the next level is hidden in this expandable menu!</p>
                <LevelButton 
                  targetLevel={2}
                  variant="outline-primary"
                >
                  Go to Level 2
                </LevelButton>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1; 