import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import TextButton from '../UI/TextButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import Jester from '../Characters/Jester';
import AchievementShrine from '../UI/AchievementShrine';
import HighlightableText from '../UI/HighlightableText';
const Level11 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Open Road" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Not all numbers go up. Some go down — below zero, even. Level fourteen knows a thing or two about that."/>
          </Card.Text>
          <Card.Text>
            The next level is <TextButton targetLevel={12}>twelve</TextButton>. Why don't you see what the Jester ahead knows?
          </Card.Text>
          <Jester currentLevel="11" />
          <AchievementShrine requiredCount={6} shrineLevel="11" teaserText="A shortcut to places unseen. You need 6 achievements.">
            <Card.Text>
              <HighlightableText text="A hidden path reveals itself: Level fourteen waits beyond — the gateway to negative numbers." />
            </Card.Text>
            <CenteredContainer>
              <LevelButton targetLevel={14}>Level 14</LevelButton>
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={10}>
              Level 10
            </LevelButton>
            <LevelButton targetLevel={12}>
              Level 12
            </LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level11;