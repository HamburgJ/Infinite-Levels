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
            <HighlightableText text="D" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Five hundred. D in Roman numerals. Half of M, which is one thousand. You're literally halfway between the tutorial and the first true milestone."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="Five hundred days is about one year, four months, and fifteen days. Five hundred miles is roughly the distance from London to Edinburgh. Some numbers feel big until you realize they're just the middle of something bigger."
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