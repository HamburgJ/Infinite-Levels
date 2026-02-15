import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import AchievementShrine from '../UI/AchievementShrine';
import { useAchievements } from '../../hooks/useAchievements';
import { useEffect } from 'react';
import styled from 'styled-components';

const ShrineCard = styled(StyledCard)`
  border: 1px solid rgba(218, 165, 32, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(218, 165, 32, 0.08);
`;

const ShrineText = styled.div`
  font-style: italic;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(218, 165, 32, 0.05);
  border-radius: 6px;
  border-left: 3px solid rgba(218, 165, 32, 0.3);
`;

const ShrineLevel = ({
  level,
  shrineText,
  shrineThreshold,
  shrineReveal,
  partner,
  navButtons,
}) => {
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('PERFECT_VISITOR');
    if (partner) {
      // Amicable pair tracking handled by visiting both
    }
  }, [unlockAchievement, partner]);

  return (
    <LevelContainer>
      <ShrineCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${level}`} size="medium" />
          </Card.Title>

          <Card.Text>
            <HighlightableText text={shrineText} />
          </Card.Text>

          {partner && (
            <Card.Text>
              <HighlightableText
                text={`This number is bound to Level ${partner}. Their divisors point to each other — an amicable pair, linked since Pythagoras.`}
              />
            </Card.Text>
          )}

          <AchievementShrine requiredCount={shrineThreshold}>
            <ShrineText>
              <HighlightableText text={shrineReveal} />
            </ShrineText>
          </AchievementShrine>

          <CenteredContainer>
            {navButtons.map(({ target, label }, i) => (
              <LevelButton key={i} targetLevel={target}>{label}</LevelButton>
            ))}
          </CenteredContainer>
          {partner && (
            <CenteredContainer>
              <LevelButton targetLevel={partner}>→ Level {partner}</LevelButton>
            </CenteredContainer>
          )}
          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </ShrineCard>
    </LevelContainer>
  );
};

export default ShrineLevel;
