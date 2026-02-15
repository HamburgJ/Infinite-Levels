import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level63 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Seven Times Nine" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="You did the math. Seven times nine equals sixty-three. Welcome to the answer." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Now — what's nine times nine?" />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={62}>← Sixty-Two</LevelButton>
            <LevelButton targetLevel={81}>Eighty-One →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level63;
