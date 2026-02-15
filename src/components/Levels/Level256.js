import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: 1px;
  margin: 1rem 0;
  border-radius: 4px;
  overflow: hidden;
`;

const ColorCell = styled.div`
  aspect-ratio: 1;
  background-color: ${props => props.color};
`;

const Level256 = () => {
  // Generate 256 colors spread across hue spectrum
  const colors = Array.from({ length: 256 }, (_, i) => {
    const hue = (i * 360) / 256;
    const saturation = 70 + (i % 3) * 10;
    const lightness = 40 + (i % 5) * 8;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Two to the Eighth" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Two hundred fifty-six. The number of colors in an eight-bit palette. The number of values in a byte. The world of eight-bit." />
          </Card.Text>
          <ColorGrid>
            {colors.map((color, i) => (
              <ColorCell key={i} color={color} />
            ))}
          </ColorGrid>
          <Card.Text>
            <HighlightableText text="Two hundred fifty-six colors were once all a computer could show. Now screens display millions. But these two hundred fifty-six started it all." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={128}>← 2⁷ (One Twenty-Eight)</LevelButton>
            <LevelButton targetLevel={512}>2⁹ (Five Twelve) →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level256;
