import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level99 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 99</Card.Title>
          <Card.Text>
            <HighlightableText text="In the depths below zero, where shadows grow and mysteries flow, your mind must learn to think in reverse. Through passages of xenon-lit halls and phenol-stained walls, ancient texts spiral backwards like nevermore's echoes. Each growth of knowledge requires enough patience to decode these mirror-whispered truths. As you descend past the towtruck graveyard and into the network of forgotten chambers, remember: what seems nonsense at first glance holds wisdom when viewed through reflection's lens. The deeper you venture, the more these reversed revelations will guide your path through the nevertheless endless maze." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level99;