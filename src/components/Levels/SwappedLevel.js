import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0%, 90%, 100% { opacity: 1; }
  92% { opacity: 0; }
  94% { opacity: 1; }
  96% { opacity: 0; }
`;

const SwapTitle = styled.div`
  display: inline;
  position: relative;
`;

const WrongNumber = styled.span`
  text-decoration: line-through;
  opacity: 0.5;
  margin-right: 0.5rem;
`;

const RealNumber = styled.span`
  color: #c33;
  font-weight: bold;
`;

const SwapNotice = styled.div`
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
  text-align: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px dashed rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  animation: ${flicker} 12s ease-in-out infinite;
`;

const SwappedLevel = ({ actualLevel, displayedLevel, swapPartner, resignation, swapText }) => {
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('MIRROR_MIRROR');
    
    // Track swapped level visits for FULLY_SWAPPED achievement
    try {
      const visits = JSON.parse(localStorage.getItem('swappedLevelVisits') || '{}');
      visits[String(actualLevel)] = true;
      localStorage.setItem('swappedLevelVisits', JSON.stringify(visits));
      
      const allSwapped = ['102', '201', '132', '231', '358', '853'];
      if (allSwapped.every(lvl => visits[lvl])) {
        unlockAchievement('FULLY_SWAPPED');
      }
    } catch (e) {}
  }, [unlockAchievement, actualLevel]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <SwapTitle>
              <WrongNumber>
                <HighlightableText text={`Level ${displayedLevel}`} size="medium" />
              </WrongNumber>
              <RealNumber>
                Level {actualLevel}
              </RealNumber>
            </SwapTitle>
          </Card.Title>

          <SwapNotice>
            ⚠ Content mismatch detected
          </SwapNotice>

          <Card.Text>
            <HighlightableText text={swapText} />
          </Card.Text>

          {resignation === 'confused' && (
            <Card.Text>
              <HighlightableText text={`Nobody filed a bug report. Nobody's coming to fix it.`} />
            </Card.Text>
          )}

          {resignation === 'resigned' && (
            <Card.Text>
              <HighlightableText text="Some things that are broken just stay broken." />
            </Card.Text>
          )}

          {resignation === 'embraced' && (
            <Card.Text>
              <HighlightableText text="The Jester says he didn't do this one. For once, I believe him. Some numbers are just mirrors of each other. Reverse the digits and you land right here." />
            </Card.Text>
          )}

          <CenteredContainer>
            <LevelButton targetLevel={swapPartner}>
              Go to Level {swapPartner} (where YOUR level ended up)
            </LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={0}>← Level 0 (escape the confusion)</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default SwappedLevel;
