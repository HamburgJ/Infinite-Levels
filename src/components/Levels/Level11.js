import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import Jester from '../Characters/Jester';
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
            <HighlightableText text="From here, the landmarks thin out. But don't let that fool you — there are a dozen hidden paths between any two levels, and a hundred secrets you haven't found yet."/>
            <br/><br/>
            <HighlightableText text="Not all numbers go up, you know. Some go down. Way down. Below zero, even. Level fourteen knows a thing or two about that."/>
            <br/><br/>
            <HighlightableText text="Here's a secret: you don't always need a button to travel. Try selecting the word fourteen above. Or any number you see. Go on — try it."/>
            <br/><br/>
            <HighlightableText text="Why don't you see what the Jester ahead knows?"/>
          </Card.Text>
          <Jester currentLevel="11" />
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