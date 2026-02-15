import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import AchievementShrine from '../UI/AchievementShrine';

const Level40 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Threshold" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Forty. The number of transformation — forty days, forty nights, forty years in the desert." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="You've traveled through the thirties. Encountered some darkness along the way, perhaps. The answer to everything lies just two steps ahead." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="But first — look around. There are other paths from here." />
          </Card.Text>

          <CenteredContainer>
            <LevelButton targetLevel={42}>Forty-Two awaits →</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={30}>← Back to the Outpost</LevelButton>
          </CenteredContainer>

          <AchievementShrine requiredCount={12} shrineLevel="40" teaserText="A revelation about weight and numbers.">
            <Card.Text style={{ 
              background: 'rgba(255, 215, 0, 0.1)', 
              padding: '0.75rem', 
              borderRadius: '8px',
              marginTop: '1rem' 
            }}>
              <HighlightableText text="You've earned enough achievements to see this: some items have weight. Have you tried the Scale? A LevelButton weighs forty-two grams. Think about that." />
            </Card.Text>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level40;
