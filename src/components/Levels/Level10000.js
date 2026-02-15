import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCard from '../Items/CollectableCard';
import HighlightableText from '../UI/HighlightableText';

const Level10000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Ten Thousand" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Ten thousand. Most people never make it this far. The number line stretches on, but the landmarks are sparser now — and the distances between them grow." size="small"/>
          </Card.Text>
      
          <AchievementShrine requiredCount={30} shrineLevel="10000" teaserText="Another card for the collection. The deck grows.">
            <CenteredContainer>
              <CollectableCard cardId="10-diamonds" />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="Ten thousand levels explored. The number line goes on. To one hundred thousand. To one million. To ten million. And beyond that... infinity. But infinity isn't a number you can walk to. You need a different kind of transportation." />
            </Card.Text>
          </AchievementShrine>
          <CenteredContainer>
            <LevelButton targetLevel={100000}>Level 100,000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10000;