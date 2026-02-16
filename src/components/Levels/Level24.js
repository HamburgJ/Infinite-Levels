import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import Clock from '../Common/Clock';

const Level24 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="24 Hours in a day" size="medium"/></Card.Title>
          <CenteredContainer>
            <Clock />
          </CenteredContainer>
          <Card.Text>
            <HighlightableText text="The clock shows the current hour. Click the hour number to travel to that level — if it's three o'clock, you'll go to level three." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="There are twenty-four hours in a day, and each hour brings a new destination. Come back at a different time for a different door." />
            <br/><br/>
            <HighlightableText text="In a world of infinite levels, time itself is just another number. Every hour, every minute — they're all levels too." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level24;