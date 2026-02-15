import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCard from '../Items/CollectableCard';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import HighlightableText from '../UI/HighlightableText';

const Level100000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="One Hundred Thousand" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="You've reached level one hundred thousand. That's a lot of levels. Most people would have stopped at level one thousand, or even level one hundred. But not you. You're either very persistent or very creative. Either way, impressive."/>
          </Card.Text>
          
          <ChangeMachineButton />
          <AchievementShrine requiredCount={20} shrineLevel="100000" teaserText="A card and a hint about dimensions you haven't explored.">
            <CenteredContainer>
              <CollectableCard cardId="5-clubs" />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="But have you found the complex plane? There's a whole dimension of numbers you might have missed. Level thirty has a door." />
            </Card.Text>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={1000000}>Level 1,000,000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level100000;