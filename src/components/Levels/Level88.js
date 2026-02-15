import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const OctopusEmoji = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: 20px 0;
  animation: float 2s ease-in-out infinite;
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

const Level88 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Octo-Level" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Eight sides make an octagon, eight arms make an octopus, eight bits make a byte, and eight eights make sixty-four!" />
          </Card.Text>
          <OctopusEmoji>🐙</OctopusEmoji>
          <Card.Text>
            <HighlightableText text="Fun fact: Octopi are known to be highly intelligent and can solve puzzles. Maybe this little guy could help navigate through all these levels!" />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level88;