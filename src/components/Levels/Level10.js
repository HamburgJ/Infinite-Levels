import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import NumberEntry from '../UI/NumberEntry';
import HighlightableText from '../UI/HighlightableText';
import { TutorialCallout, SuccessMessage } from '../UI/Feedback';
import { radii } from '../../styles/theme';

const textPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0px rgba(37, 99, 235, 0); }
  50% { box-shadow: 0 0 10px rgba(37, 99, 235, 0.3); }
`;

const ClickableHighlight = styled.div`
  display: inline;
  padding: 2px 4px;
  border-radius: ${radii.sm};
  animation: ${props => props.$active ? textPulse : 'none'} 2.5s ease-in-out infinite;
`;

const Level10 = () => {
  const [hasSelectedNumber, setHasSelectedNumber] = useState(false);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <ClickableHighlight $active={!hasSelectedNumber}>
              <HighlightableText text="Level Ten" size="medium"/>
            </ClickableHighlight>
          </Card.Title>

          {!hasSelectedNumber ? (
            <TutorialCallout>
              <HighlightableText
                text="Click the word 'ten' above."
                onLevelChange={() => setHasSelectedNumber(true)}
              />
            </TutorialCallout>
          ) : (
            <SuccessMessage>
              🎉 Every number-word is a doorway. This is the game's most powerful mechanic.
            </SuccessMessage>
          )}

          <Card.Text>
            <HighlightableText
              text="From here, paths get harder to find. Try selecting words. Try clicking numbers in unexpected places."
            />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
            {hasSelectedNumber && <LevelButton targetLevel={11}>Level 11</LevelButton>}
          </CenteredContainer>

          <AchievementShrine requiredCount={9} shrineLevel="10" teaserText="Go anywhere. Type any number.">
            <CenteredContainer>
              <ChangeMachineButton />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="Type any number to go there." />
            </Card.Text>
            <CenteredContainer>
              <NumberEntry placeholder="Level #" maxLength={8} allowNegative={true} />
            </CenteredContainer>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10;