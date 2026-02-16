import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { showSpotlight } from '../../store/slices/tutorialSlice';

const Level2 = () => {
  const dispatch = useDispatch();
  const completedSteps = useSelector(s => s.tutorial?.completedSteps || []);

  // Spotlight the hint icon when the player first arrives here
  useEffect(() => {
    if (!completedSteps.includes('hint-icon')) {
      const timer = setTimeout(() => {
        dispatch(showSpotlight({
          id: 'hint-icon',
          target: 'hint-icon',
          message: 'Stuck? Every level has a hint. Tap here when you need one.',
          emoji: '❓',
          placement: 'below',
        }));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [dispatch, completedSteps]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Nice Find!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Paths aren't always forward. Sometimes you need to go back."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
            <LevelButton targetLevel={3}>Level 3</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level2; 