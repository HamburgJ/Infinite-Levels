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
            <HighlightableText text="The clock doesn't just tell time — it tells you where to go. Click it when the hour changes." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="There are 24 hours in a day, and each hour brings new opportunities. Time never stops ticking!" />
            <br/><br/>
            <HighlightableText text="In a world of infinite levels, time itself is just another number. Every hour, every minute — they're all levels too." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level24;