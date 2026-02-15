import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level161 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Long Road" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="The gaps between landmarks grow wider out here. Two hundred is ahead. One hundred fifty-six is behind. The number line rewards patience." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={158}>Level 158</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level161;