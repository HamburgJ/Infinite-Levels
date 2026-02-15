import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level128 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Two to the Seventh" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="One hundred twenty-eight. A byte holds values zero through one hundred twenty-seven. You just passed the boundary." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The power-of-two chain: two, four, eight, sixteen, thirty-two, sixty-four, one hundred twenty-eight, two hundred fifty-six, five hundred twelve, one thousand twenty-four..." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Every time you double, the landscape changes. Eight bits. Sixteen bits. Thirty-two bits. The digital world is built on powers of two." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={64}>← 2⁶ (Sixty-Four)</LevelButton>
            <LevelButton targetLevel={256}>2⁸ (Two Fifty-Six) →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level128;
