import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableKey from '../Items/CollectableKey';
import { CenteredContainer, LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import styled from 'styled-components';
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';
import { Level0Background } from './Level0';
import AchievementShrine from '../UI/AchievementShrine';
import { useAchievements } from '../../hooks/useAchievements';

const GoldenGlow = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,180,0,0.05));
  border-radius: 8px;
  margin: 1rem 0;
`;

const LevelNeg0 = () => {
  const { unlockAchievement } = useAchievements();
  const achievements = useSelector(state => state.achievements.achievements);
  const achievementCount = Object.keys(achievements).length;
  const [shrineWasOpen, setShrineWasOpen] = React.useState(false);

  // Track if player saw the Purity Shrine open
  React.useEffect(() => {
    if (achievementCount === 0) {
      setShrineWasOpen(true);
    }
  }, [achievementCount]);

  // Award DOWN_UNDER only when player has achievements (preserve Purity Run)
  useEffect(() => {
    if (achievementCount > 0) {
      unlockAchievement('DOWN_UNDER');
    }
  }, [achievementCount, unlockAchievement]);

  // Award PURITY when player leaves the level (cleanup), not while viewing
  useEffect(() => {
    return () => {
      if (shrineWasOpen) {
        unlockAchievement('PURITY');
      }
    };
  }, [shrineWasOpen, unlockAchievement]);

  return (
    <>
      <Level0Background isNegative={true} />
      <LevelContainer>
        <NegativeLevelWrapper>
          <StyledCard>
            <Card.Body>
              <Card.Title as="h2" className="mb-4">
                <CenteredContainer>
                  <HighlightableText
                    text="Infinite Levels!"
                    size="xlarge"
                    color="#333"
                    enhanced={true}
                  />
                </CenteredContainer>
              </Card.Title>
              <Card.Text>
                <HighlightableText
                  text="The shadow of zero. The boundary between positive and negative, between something and its absence."
                />
              </Card.Text>
              <Card.Text>
                <HighlightableText
                  text="In the shadow of zero, something glints. A key? But to what lock?"
                />
              </Card.Text>
              <CenteredContainer>
                <CollectableKey />
              </CenteredContainer>

              {/* Purity Shrine — opens with 0 achievements, stayOpen prevents race condition with PURITY achievement */}
              <AchievementShrine maximumCount={0}
                stayOpen={true}
                overLimitMessage={`This shrine opens only for the pure of heart — those who arrive with nothing. You carry the weight of ${achievementCount} achievement${achievementCount !== 1 ? 's' : ''}. To see what's inside, start over. Arrive with a clean slate. No achievements. No shortcuts. Just understanding.`}
              >
                <GoldenGlow>
                  <Card.Text>
                    <HighlightableText
                      text="You came here with nothing. No achievements. No items. No map. Just the memory of a game you've already played."
                    />
                  </Card.Text>
                  <Card.Text>
                    <HighlightableText
                      text="That memory — that understanding — was the real treasure all along."
                    />
                  </Card.Text>
                  <Card.Text>
                    <HighlightableText
                      text="You didn't need achievements to prove your worth. You needed to prove you could let them go."
                    />
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                    <HighlightableText
                      text="Congratulations. You've truly completed Infinite Levels."
                    />
                  </Card.Text>
                </GoldenGlow>
              </AchievementShrine>

              <CenteredContainer>
                <LevelButton 
                  targetLevel={1}
                  variant="primary"
                >
                  Level 1
                </LevelButton>
              </CenteredContainer>

            </Card.Body>
          </StyledCard>
        </NegativeLevelWrapper>
      </LevelContainer>
    </>
  );
};

export default LevelNeg0; 