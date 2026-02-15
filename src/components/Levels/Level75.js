import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useSelector } from 'react-redux';

const Level75 = () => {
  const visitedLevels = useSelector(state => state.game?.visitedLevels || {});
  const hasVisitedDecimal = Object.keys(visitedLevels).some(key => key.includes('.'));

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Three Quarters" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Seventy-five percent. Three quarters of the way to one hundred. You're almost there." />
          </Card.Text>
          {hasVisitedDecimal ? (
            <Card.Text style={{ 
              background: 'rgba(46, 204, 113, 0.1)', 
              padding: '0.75rem', 
              borderRadius: '8px' 
            }}>
              <HighlightableText text="You've already found the spaces between whole numbers. The decimal realm hides an entire universe between zero and one — and you've been there." />
            </Card.Text>
          ) : (
            <Card.Text>
              <HighlightableText text="But 'three quarters' means something else too — zero point seven five. A decimal. A fraction. A level BETWEEN levels. Have you visited the spaces between whole numbers? Try level zero point five. Or type 'three quarters' into the number entry." />
            </Card.Text>
          )}
          <Card.Text>
            <HighlightableText text="Twenty-five was one quarter. Fifty was one half. Seventy-five is three quarters. What comes at one hundred?" />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={0.75}>Level 0.75</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={50}>← Fifty</LevelButton>
            <LevelButton targetLevel={100}>One Hundred →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level75;
