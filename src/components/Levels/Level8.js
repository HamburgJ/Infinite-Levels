import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import Scale from '../Storage/Scale';
import AchievementShrine from '../UI/AchievementShrine';
import HighlightableText from '../UI/HighlightableText';
import Jester from '../Characters/Jester';

const Level8 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText size="medium" text="Numbers Are Everywhere"/></Card.Title>
          <Card.Text>
              <HighlightableText text="Buttons can be held, too. Right-click a button to pick it up, then carry it with you until you need it."/>
              </Card.Text>
          <Jester currentLevel="8" />
          <Card.Text>
            <HighlightableText text="By now you know that buttons hide in plain sight. But here's a secret: numbers are everywhere in this game. In text, on coins, in achievements, in shrine descriptions. Pay attention to every number you see."/>
          </Card.Text>
          <AchievementShrine requiredCount={4} shrineLevel="8" teaserText="A secret about how this game really works.">
            <Card.Text>
              <HighlightableText text="The scale isn't just for weighing. Try putting different items on it and clicking the weight display." />
            </Card.Text>
            <Card.Text>
              <HighlightableText text="Here's the real secret: every number in this game is alive. On a scale, in an achievement, in a shrine description — numbers aren't just information. They're all doorways. All of them." />
            </Card.Text>
          </AchievementShrine>
          <CenteredContainer>
          <LevelButton targetLevel={0}>Level 0</LevelButton>
              <LevelButton targetLevel={1}>Level 1</LevelButton>
            
              <LevelButton targetLevel={2}>Level 2</LevelButton>
            
              <LevelButton targetLevel={3}>Level 3</LevelButton>
            </CenteredContainer>
            <CenteredContainer>
              <LevelButton targetLevel={4}>Level 4</LevelButton>
            
              <LevelButton targetLevel={5}>Level 5</LevelButton>
           
              <LevelButton targetLevel={6}>Level 6</LevelButton>
          
              <LevelButton targetLevel={7}>Level 7</LevelButton>
            </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level8; 