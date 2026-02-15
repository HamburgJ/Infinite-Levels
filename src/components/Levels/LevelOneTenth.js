import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const LevelOneTenth = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level 0.1 — One Tenth" size="medium" />
          </Card.Title>

          <Card.Text>
            <HighlightableText text="ZERO POINT ONE. ONE TENTH. The smallest common step in the decimal world." />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="In base TEN, this number is elegant: just a ONE after the POINT. But in binary — the language of computers — it's ZERO POINT ZERO ZERO ZERO ONE ONE ZERO ZERO ONE ONE ZERO ZERO ONE ONE... repeating forever. What seems simple in ONE language becomes infinite in another." />
          </Card.Text>

          <div style={{ fontFamily: 'monospace', textAlign: 'center', color: '#666', margin: '1rem 0', padding: '0.5rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
            <div>Decimal: 0.1</div>
            <div>Binary:  0.0001100110011001100110011...</div>
          </div>

          <Card.Text>
            <HighlightableText text="Every system has its blind spots. Decimal can't cleanly express ONE THIRD. Binary can't cleanly express ONE TENTH. The universe doesn't play favorites with number systems." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            <LevelButton targetLevel={1}>Level 1</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={10}>Level 10</LevelButton>
            <LevelButton targetLevel={0.25}>Level 0.25</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelOneTenth;
