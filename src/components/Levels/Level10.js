import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import AchievementShrine from '../UI/AchievementShrine';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import NumberEntry from '../UI/NumberEntry';
import HighlightableText from '../UI/HighlightableText';

const Level10 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level Ten" size="medium"/>
          </Card.Title>

          <Card.Text>
            <HighlightableText
              text="No buttons. No coins. Nothing to hover over."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="But the numbers haven't gone anywhere. Eleven is right here, hiding in this sentence. Nine is too. They've always been doorways — you've just never opened them this way."
            />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.6, fontSize: '0.9rem' }}>
            <HighlightableText
              text="Every word you've read since level zero has been more interactive than you realized."
            />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={0}>Level 0</LevelButton>
          </CenteredContainer>

          <AchievementShrine requiredCount={7} shrineLevel="10" teaserText="Go anywhere. Type any number.">
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