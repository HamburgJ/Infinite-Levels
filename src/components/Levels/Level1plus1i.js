import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCard from '../Items/CollectableCard';

const Level1plus1i = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Heart of Complexity" size="medium" />
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Where one meets the imaginary, the heart reveals itself. You've found a stable island in the complex sea. Most complex levels are unstable and will collapse beneath your feet — but here, where both coordinates are small, the ground holds firm."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText 
              text="A card glimmers in the mathematical mist. The Ace of Hearts — a treasure from the complex plane."
            />
          </Card.Text>
          <CenteredContainer>
            <CollectableCard cardId="ace-hearts" value="A" suit="hearts" />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText 
              text="From this island, you can see other stable points in the complex plane. The origin lies at zero plus zero i. Further out, five plus five i holds something extraordinary — if you dare venture that far."
            />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={{real: 0, imag: 1}}>Level i</LevelButton>
            <LevelButton targetLevel={{real: 1, imag: 0}}>Level 1</LevelButton>
            <LevelButton targetLevel={{real: 2, imag: 1}}>Level 2+i</LevelButton>
            <LevelButton targetLevel={{real: 0, imag: 0}}>Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1plus1i;
