import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level512 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Where Chains Collide" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Five hundred twelve. Two to the ninth power. Also eight cubed. Two chains — powers of two and cubes — meet here at the same number." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Half a kilobyte. In the old days, that was enough memory for a small program. Now it's barely a text message." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The cube chain: eight, twenty-seven, sixty-four, one hundred twenty-five, two hundred sixteen, three hundred forty-three, five hundred twelve. The power chain: two, four, eight... two hundred fifty-six, five hundred twelve, one thousand twenty-four." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={256}>← 2⁸ (Power chain)</LevelButton>
            <LevelButton targetLevel={1024}>2¹⁰ (One Thousand Twenty-Four) →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={343}>← 7³ (Cube chain)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level512;
