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
            <HighlightableText text="The Shrine at One Fifty-Three" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Something glitters behind the stone. You can feel it — the weight of something precious, waiting for someone who's earned the right to take it."
            />
          </Card.Text>
          <AchievementShrine requiredCount={25} shrineLevel="153" teaserText="Something precious is hidden here. It has weight.">
            <Card.Text>
              <HighlightableText text="A diamond in the rough. It weighs exactly three point five two grams. What level would that be?" />
            </Card.Text>
            <CenteredContainer>
              <CollectableDiamond id="level-153-diamond" />
            </CenteredContainer>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={150}>← Back to Level 150</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level153;