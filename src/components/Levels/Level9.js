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
import HighlightableText from '../UI/HighlightableText';
import LockedBox from '../UI/LockedBox';
import AchievementShrine from '../UI/AchievementShrine';
import Jester from '../Characters/Jester';

const Level9 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText size="medium" text="Secrets"/></Card.Title>
          <Card.Text>
            <HighlightableText text="Congratulations. Reaching this level means that you've mastered the basics of this game. However, there's
            another secret ability which will unlock a truly magnificently infinite amount of levels!"/>
            </Card.Text>
            <Card.Text>
            <HighlightableText text="The secret lies inside the box below.  A hint to 
            the secret place will be revealed here once you've completed 15 achievements!"/>
            </Card.Text>
            <AchievementShrine requiredCount={15}>
              <CenteredContainer>
              The key to the box is stored in an extremely secret place! The information that will lead you to the key is hidden in a mysterious level which is thought by some not to exist.
                A level which equates to the 0th level yet its opposite. A level which is infinitely close yet infinitely far. 
              </CenteredContainer>
              <LockedBox>
              <Card.Text>
                <HighlightableText text="Like you know, buttons can be created from anywhere. But did you know that these buttons can be collected into your inventory? Just highlight some text to create a button, and right click to pick it up! You can carry it around with you, and click it to travel to that level!"/>
              </Card.Text>
              <Card.Text>
                <HighlightableText text="But that's not all... there's a card that can only be found where the real and imaginary meet. Look for level one plus one i." />
              </Card.Text>
              </LockedBox>
            </AchievementShrine>
          <Jester currentLevel="9" />
          <CenteredContainer>
            <LevelButton targetLevel={3}>Level 3</LevelButton>
          </CenteredContainer>

        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level9; 