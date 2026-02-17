import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level19 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level Nineteen" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="Nothing here. No buttons. No accordions. No way out." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Or is there? When everything else is gone, the words remain. And words with numbers are always doorways. You could go back to eighteen. Or forward to twenty. The choice hides in these sentences." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={18}>← Level 18</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level19;