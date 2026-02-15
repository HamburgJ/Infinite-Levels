import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level44 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Through the Looking Glass" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Forty-four. Another palindrome — another mirror. But this one goes deeper." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Every positive level has a negative twin. Level forty-four and level negative forty-four. Level one and level negative one. Level zero and level... negative zero." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The negative realm is a mirror world. Everything you know has a shadow. Have you found the Key at negative zero? It unlocks something at level nine..." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={-44}>Step into −44</LevelButton>
          </CenteredContainer>
          <CenteredContainer style={{ marginTop: '0.5rem' }}>
            <LevelButton targetLevel={42}>← Forty-Two</LevelButton>
            <LevelButton targetLevel={50}>Fifty →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level44;
