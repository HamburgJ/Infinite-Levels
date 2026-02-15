import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import AchievementShrine from '../UI/AchievementShrine';
import styled from 'styled-components';

const SpyContainer = styled.div`
  background: #111;
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
  margin: 0 -1rem;
`;

const SpyTitle = styled.div`
  font-family: 'Georgia', serif;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.3em;
  margin-bottom: 1.5rem;
  color: #d4af37;
`;

const SpyText = styled.div`
  font-family: 'Georgia', serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 1rem;
`;

const LevelDoubleOSeven = () => {
  return (
    <LevelContainer>
      <StyledCard style={{ background: '#111', border: '1px solid #333' }}>
        <Card.Body>
          <SpyContainer>
            <SpyTitle>007</SpyTitle>
            
            <SpyText>
              <HighlightableText text="ZERO ZERO SEVEN." />
            </SpyText>

            <SpyText>
              <HighlightableText text="The name's POINT. Decimal POINT." />
            </SpyText>

            <SpyText>
              <HighlightableText text="You expected something more? This is a SECRET level. SEVEN thousandths of the way between ZERO and ONE. Most players will never find this — they'd have to type it deliberately, or know exactly where to look." />
            </SpyText>

            <SpyText>
              <HighlightableText text="Then again, that's what a secret agent does: goes where others don't think to look. Between the integers. In the margins. In the spaces so small that most people round them away to nothing." />
            </SpyText>

            <SpyText>
              <HighlightableText text="Your mission, should you choose to accept it: find the rest of the decimal realm. Start with HALF. Work your way to THREE POINT ONE FOUR. The full picture only emerges when you've seen every FRACTION of the truth." />
            </SpyText>

            <AchievementShrine requiredCount={15} shrineLevel="207" teaserText="A hidden bonus for the worthy agent.">
              <SpyText style={{ color: '#d4af37', textAlign: 'center' }}>
                🃏 A hidden bonus awaits the worthy agent. 🃏
              </SpyText>
              <SpyText style={{ color: '#d4af37', fontStyle: 'italic', textAlign: 'center' }}>
                (The shrine recognizes your achievements. Well done, agent.)
              </SpyText>
            </AchievementShrine>

            <CenteredContainer>
              <LevelButton targetLevel={0}>Level 0</LevelButton>
              <LevelButton targetLevel={0.5}>Level 0.5</LevelButton>
            </CenteredContainer>
            <CenteredContainer>
              <LevelButton targetLevel={7}>Level 7</LevelButton>
              <LevelButton targetLevel={3.14159}>Level π</LevelButton>
            </CenteredContainer>
          </SpyContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default LevelDoubleOSeven;
