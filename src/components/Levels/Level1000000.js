import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCard from '../Items/CollectableCard';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import HighlightableText from '../UI/HighlightableText';

const Level1000000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="One Million" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Level one million. A number that used to be the biggest thing anyone could imagine. A million dollars. A million miles. A million years. Now it's just another stop on an infinite road."/>
          </Card.Text>
          
          <ChangeMachineButton />
          <AchievementShrine requiredCount={20} shrineLevel="1000000" teaserText="The Jester's favorite card. He left it here for a reason.">
            <CenteredContainer>
              <CollectableCard cardId="king-hearts" />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="The Jester would be proud — if you can still find him. He roams the primes, you know." />
            </Card.Text>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={10000000}>Level 10,000,000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1000000;