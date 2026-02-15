import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import CollectableCard from '../Items/CollectableCard';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
const Level500 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="D is for Delightful!" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Welcome to level D (that's 500 in Roman numerals)! D is such a delightful letter - it starts words like 'dance', 'dream', and 'discover'. It's also half of a smile turned sideways! :D"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Did you know that D is the most common consonant in English? Or maybe not, nobody knows! Decidedly deserving of this distinguished level!"
            />
          </Card.Text>
          <CenteredContainer>
            <CollectableCard cardId="2-clubs" value="2" suit="clubs" />
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={1000}>Level M</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level500;