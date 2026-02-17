import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LockedBox from '../UI/LockedBox';
import AchievementShrine from '../UI/AchievementShrine';
import Jester from '../Characters/Jester';

const Level9 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText size="medium" text="Secrets"/></Card.Title>
          <Card.Text>
            <HighlightableText text="Something is locked here. The key is hidden somewhere impossible."/>
          </Card.Text>
          <AchievementShrine requiredCount={10} shrineLevel="9" teaserText="A box. A lock. A mystery that spans dimensions.">
            <CenteredContainer>
              <HighlightableText text="The key hides in the shadow of zero — negative zero." />
            </CenteredContainer>
            <LockedBox>
              <Card.Text>
                <HighlightableText text="Numbers have a second direction — sideways, into the imaginary. The treasure lies at one plus one i."/>
              </Card.Text>
            </LockedBox>
          </AchievementShrine>
          <Jester currentLevel="9" />
          <Card.Text style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '1rem' }}>
            <HighlightableText text="Something big is ahead. Level 10 changes everything." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={8}>Level 8</LevelButton>
            <LevelButton targetLevel={10}>Level 10 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level9; 