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
            another secret ability which will unlock an infinite number of levels!"/>
            </Card.Text>
            <Card.Text>
            <HighlightableText text="The secret lies inside the box below. A hint to 
            the secret place will be revealed here once you've completed 10 achievements!"/>
            </Card.Text>
            <AchievementShrine requiredCount={10} shrineLevel="9" teaserText="A box. A lock. A mystery that spans dimensions.">
              <CenteredContainer>
              <HighlightableText text="The key to the box is stored in an extremely secret place. A level which equates to the zeroth level yet its opposite. A level which is infinitely close yet infinitely far. The shadow of zero — negative zero." />
              </CenteredContainer>
              <LockedBox>
              <Card.Text>
                <HighlightableText text="Inside the box: a map. Not of places, but of dimensions. The number line you've been traveling? It's flat. One-dimensional. But numbers have a second direction — sideways, into the imaginary."/>
              </Card.Text>
              <Card.Text>
                <HighlightableText text="One more thing: buttons you create can be picked up. Highlight text to make a button, then right-click to collect it into your inventory. Carry it with you. Use it whenever you're ready."/>
              </Card.Text>
              <Card.Text>
                <HighlightableText text="The treasure lies at one plus one i — one step real, one step imaginary. A golden card awaits there, in the complex plane." />
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