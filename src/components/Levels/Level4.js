import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableWallet from '../Items/CollectableWallet';
import HighlightableText from '../UI/HighlightableText';



const Level4 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="A Shrine" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="Shrines open when you've earned enough achievements."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={3}>Level 3</LevelButton>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <AchievementShrine requiredCount={3} shrineLevel="4" teaserText="A shrine within a shrine. Something valuable waits inside.">
              <HighlightableText
                text="A shrine within a shrine — and a path forward."
              />
              <AchievementShrine requiredCount={5} shrineLevel="4" teaserText="A tool that changes how you travel. It collects things.">
                <HighlightableText
                  text="A wallet. Right-click coins to collect them. Left-click to travel."
                />
                <CollectableWallet />
                <CenteredContainer>
                  <LevelButton targetLevel={7}>Level 7</LevelButton>
                </CenteredContainer>
              </AchievementShrine>
              <CenteredContainer>
                <LevelButton targetLevel={10}>Level 10</LevelButton>
              </CenteredContainer>
            </AchievementShrine>
          </CenteredContainer>
          
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4; 