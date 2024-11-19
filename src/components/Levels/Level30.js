import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
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
            <HighlightableText text="🌌 The Complex Plane (i)" />
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
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level30;