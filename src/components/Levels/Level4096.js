import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level4096 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Two to the Twelfth" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Four thousand and ninety-six. Two raised to the twelfth power. The next stop on the Binary Highway after two thousand and forty-seven." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="In computing, 4096 is everywhere. It's the number of bytes in a standard memory page. The number of possible values in a 12-bit address space. Screens were once 4096 colors wide." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="It's also eight to the fourth. Or sixty-four squared. Or sixteen cubed. So many ways to build the same number from smaller pieces." />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.7 }}>
            <HighlightableText text="The binary chain stretches on: 8192, 16384, 32768, 65536... Each doubling makes the next milestone feel further away." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={2047}>Level 2047</LevelButton>
            <LevelButton targetLevel={6174}>Level 6174</LevelButton>
            <LevelButton targetLevel={8191}>Level 8191</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level4096;
