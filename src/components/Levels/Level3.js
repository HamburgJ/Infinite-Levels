import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level3 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_1');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Congratulations! You found the button." size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Hopefully, you've been to Level 2 by now. It was also hidden in Level 1!"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="If you're struggling to continue from here, try going back and looking for Level 2 in Level 1 again."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="Some levels will be more barren than others, but that doesn't mean they aren't full of secrets!"
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Back to level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level3; 