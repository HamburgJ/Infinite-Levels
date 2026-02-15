import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import CollectableDiamond from '../Items/CollectableDiamond';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import HighlightableText from '../UI/HighlightableText';

const Level153 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="A penny in the wallet" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="But it's only to avoid having too much fluff! Why don't you see what else you can do with the levels you've already discovered?"
            />
          </Card.Text>
          <AchievementShrine requiredCount={25}>
            <Card.Text>
              <HighlightableText text="A diamond in the rough. It weighs exactly three point five two grams. What level would that be?" />
            </Card.Text>
            <CenteredContainer>
              <CollectableDiamond id="level-153-diamond" />
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={150}></LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level153;