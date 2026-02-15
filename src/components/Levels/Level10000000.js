import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableCard from '../Items/CollectableCard';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import HighlightableText from '../UI/HighlightableText';

const Level10000000 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Ten Million" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Level ten million. The farthest charted milestone on the number line. But infinity isn't a number — it's a direction."/>
          </Card.Text>
          
          <ChangeMachineButton />
          <AchievementShrine requiredCount={20} shrineLevel="10000000" teaserText="A card from beyond the deck. Dark and holographic.">
            <CenteredContainer>
              <CollectableCard cardId="ace-void" />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="The Ace of the Void. A card from beyond the deck. Dark-holographic, like staring into nothing." />
            </Card.Text>
          </AchievementShrine>
          <Card.Text>
            <HighlightableText text="The path to true infinity isn't forward — it's sideways. Through the complex plane, at the coordinates five plus five i, something with infinite weight awaits. Put it on the Scale, and find what lies beyond all numbers." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={0}>Return to the Beginning</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10000000;