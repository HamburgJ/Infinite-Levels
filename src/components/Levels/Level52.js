import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useSelector } from 'react-redux';

const Level52 = () => {
  const collectedCards = useSelector(state => 
    state.inventory?.collectedCards ? Object.keys(state.inventory.collectedCards).length : 0
  );

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="A Deck of Cards" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Fifty-two cards in a standard deck. Scattered across the number line, hiding in unlikely places." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Spades lurk in the shadows — level twenty-one keeps some. Level four hundred four has another, glitching in the dark. Hearts prefer the irrational numbers. Diamonds weigh precisely three point five two grams." />
          </Card.Text>
          {collectedCards > 0 ? (
            <Card.Text style={{ 
              background: 'rgba(74, 144, 217, 0.1)', 
              padding: '0.75rem', 
              borderRadius: '8px',
              textAlign: 'center' 
            }}>
              <HighlightableText text={`You've collected ${collectedCards} card${collectedCards === 1 ? '' : 's'} so far. The deck is fifty-two. Keep searching.`} />
            </Card.Text>
          ) : (
            <Card.Text style={{ fontStyle: 'italic', color: '#888' }}>
              <HighlightableText text="You haven't found any cards yet. They're out there — you just have to know where to look." />
            </Card.Text>
          )}
          <Card.Text>
            <HighlightableText text="If you need a Card Box to hold them, keep climbing past one hundred. Collectors are patient people." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={50}>← Fifty</LevelButton>
            <LevelButton targetLevel={55}>Fifty-Five →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level52;
