import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level69 = () => {
  const [browserData, setBrowserData] = useState('');
  
  useEffect(() => {
    // Collect harmless but surprising browser info
    const data = [
      `Your screen is ${window.screen.width}x${window.screen.height}`,
      `Your battery is ${navigator.getBattery ? 'trackable' : 'private'}`,
      `Your timezone is ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
      `Your OS is ${navigator.platform}`,
    ].join('\n');
    
    setBrowserData(data);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="I Know You" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text={browserData} />
            <br/><br/>
            <HighlightableText text="Your screen resolution alone contains a multitude of levels." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level69;