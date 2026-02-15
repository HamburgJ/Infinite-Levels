import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level1001 = () => {

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="One Thousand and One Nights" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="One thousand and one. The number of nights Scheherazade told stories to survive. Each night, a new tale — each level, a new number. You've heard a thousand stories. Here is one more." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The greatest story is the one you tell yourself: that infinity has an end. It doesn't. But the journey can still have a destination. Go back to one thousand and see what the shrine holds." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={1000}>Back to 1000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1001;