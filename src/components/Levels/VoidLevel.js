import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';
import { useEffect } from 'react';
import styled from 'styled-components';

const VoidCard = styled(StyledCard)`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const GhostText = styled.div`
  color: rgba(0, 0, 0, 0.15);
  font-size: 0.85rem;
  line-height: 1.8;
  margin: 0.5rem 0;
`;

const HiddenText = styled.span`
  color: rgba(0, 0, 0, 0.04);
  font-size: 0.75rem;
`;

const MutedButton = styled.div`
  opacity: 0.4;
  margin-top: 1rem;
`;

const VoidLevel = ({ level, voidType, hiddenExit }) => {
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('INTO_THE_VOID');
  }, [unlockAchievement]);

  const renderContent = () => {
    switch (voidType) {
      case 'empty':
        return (
          <>
            <GhostText>
              <HighlightableText text="This level is empty. Not 'not yet built' — empty. Whatever was here, someone took it with them." />
            </GhostText>
            {hiddenExit && (
              <HiddenText>
                <HighlightableText text={`the way out is in the number ${hiddenExit}`} />
              </HiddenText>
            )}
          </>
        );

      case 'residual':
        return (
          <>
            <GhostText>
              <HighlightableText text="..." />
            </GhostText>
            <GhostText>
              <HighlightableText text="There's nothing here. Just the faint impression of something that used to be." />
            </GhostText>
            <GhostText>
              <HighlightableText text="Whatever was here, it left a long time ago. The only exit is the way you came in — or the number in the title." />
            </GhostText>
          </>
        );

      case 'silent':
      default:
        return null;
    }
  };

  return (
    <LevelContainer>
      <VoidCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Level ${level}`} size="medium" />
          </Card.Title>

          {renderContent()}

          <MutedButton>
            <CenteredContainer>
              <LevelButton targetLevel={0}>Return to Level 0</LevelButton>
            </CenteredContainer>
          </MutedButton>
        </Card.Body>
      </VoidCard>
    </LevelContainer>
  );
};

export default VoidLevel;
