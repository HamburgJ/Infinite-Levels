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
            <HighlightableText text="A Strange Shrine" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="You'll need to collect some achievements to unlock the secrets that lie within. Shrines come in many sizes. Some need three achievements to open. Others need five, nine, or even fourteen. The deeper you explore, the more you'll need."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={2}>Level 2</LevelButton>
          </CenteredContainer>
          <Card.Text>
            <HighlightableText
              text="Wondering how to collect achievements? Why not check out..."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={5}>Level 5</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <AchievementShrine requiredCount={3} shrineLevel="4" teaserText="A shrine within a shrine. Something valuable waits inside.">
              <HighlightableText
                text="Behold! A shrine to your achievements! It contains another shrine within! As well as a button to Level 10!"
              />
              <AchievementShrine requiredCount={5} shrineLevel="4" teaserText="A tool that changes how you travel. It collects things.">
                <HighlightableText
                  text="Congratulations! You've earned a wallet. It can hold coins — but be careful. If you click a coin without holding the wallet, the coin acts like a button and whisks you away."
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