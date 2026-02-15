import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level1024 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="A Kilobyte" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="One thousand twenty-four. Two to the tenth power. A kilobyte. Where math becomes technology." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The power-of-two chain brought you here: two, four, eight, sixteen, thirty-two, sixty-four, one hundred twenty-eight, two hundred fifty-six, five hundred twelve, one thousand twenty-four." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Ten doublings from the beginning. Each one a leap. The chain continues — two thousand forty-eight, four thousand ninety-six — but the landmarks get sparser. Like stars in deep space." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={512}>← 2⁹ (Five Twelve)</LevelButton>
            <LevelButton targetLevel={1000}>Level One Thousand</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1024;
