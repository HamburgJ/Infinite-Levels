import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import AchievementShrine from '../UI/AchievementShrine';
import CollectableWallet from '../Items/CollectableWallet';
import styled from 'styled-components';

const ButtonGroup = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Level30 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="The Outpost - Level 30" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText 
              text="Welcome to The Outpost. While the surrounding levels are sparse, this waypoint offers directions to various regions of interest."
            />
          </Card.Text>

          <Card.Text>
            <HighlightableText text="📍 Notable Destinations:" />
          </Card.Text>

          <ButtonGroup>
            <HighlightableText text="⬇️ The Tutorial Levels (0-10)" />
            <div>
              <LevelButton targetLevel={0}>Level 0</LevelButton>
              <LevelButton targetLevel={10}>Level 10</LevelButton>
            </div>
          </ButtonGroup>

          <ButtonGroup>
            <HighlightableText text="🌌 The Complex Plane" />
            <HighlightableText text="The number line isn't the only road. Level i is the square root of negative one. Mathematicians call it 'imaginary,' but in this game, imaginary numbers are just as real as any other level. Step through, if you dare." />
            <div>
              <LevelButton 
                targetLevel={{
                  real: 0,
                  imag: 1
                }}
              >
                Level i
              </LevelButton>
            </div>
          </ButtonGroup>

          <ButtonGroup>
            <HighlightableText text="🔄 The Negative Realm" />
            <div>
              <LevelButton targetLevel={-30}>Level -30</LevelButton>
            </div>
          </ButtonGroup>

          <Card.Text>
            <HighlightableText 
              text="Remember: Not all paths are direct. Some destinations require discovering special traveling techniques or collecting achievements first."
            />
          </Card.Text>
          <Card.Text style={{ padding: '0.75rem', background: 'rgba(37, 99, 235, 0.06)', borderRadius: '6px', borderLeft: '3px solid rgba(37, 99, 235, 0.3)' }}>
            <HighlightableText text="🧭 Not sure where to start? The answer to everything lies at forty-two. Or step through to level i if you're feeling brave." />
          </Card.Text>
          <Card.Text style={{ padding: '0.75rem', background: 'rgba(255, 215, 0, 0.06)', borderRadius: '6px', borderLeft: '3px solid rgba(255, 215, 0, 0.3)', marginTop: '0.5rem' }}>
            <HighlightableText text="🌀 Travelers who follow certain paths discover hidden chains — the Fibonacci spiral, the powers of two, the quest for perfection. Your Journal tracks these journeys once you stumble onto the first waypoint." />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="The Outpost stands at the crossroads of thirty paths. From here, fifty lies to the east, and one hundred to the north."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Travelers speak of a legendary answer at level forty-two." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Brave explorers say there are stable islands scattered throughout the complex plane. The closest is at one plus one i." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Between the whole numbers lies another hidden realm. Level zero point five is the gateway. Or visit level eighty-two — it knows the addresses of pi, e, and phi." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Further ahead, at level three hundred seventy-seven, a wilderness map charts the landmarks beyond one hundred. Worth the journey." />
          </Card.Text>

          <AchievementShrine requiredCount={6} shrineLevel="30" teaserText="A traveler's essential. Right-click coins to save them for later. 6 achievements needed.">
            <Card.Text>
              <HighlightableText text="🧳 A wallet! Right-click coins to collect them instead of traveling. Left-click coins to use them as doorways. A true explorer's tool." />
            </Card.Text>
            <CenteredContainer>
              <CollectableWallet />
            </CenteredContainer>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level30;