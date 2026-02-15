import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
const Level24 = () => {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit', 
        minute: '2-digit'
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="24 Hours in a day" size="medium"/></Card.Title>
          <Card.Text>
            <CenteredContainer>
              <HighlightableText text={`${time}`} size="large"/>
            </CenteredContainer>
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