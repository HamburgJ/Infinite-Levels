import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const Level365 = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="One Orbit" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Three hundred sixty-five days. One trip around the sun. One year. One level." />
          </Card.Text>
          <Card.Text style={{ 
            background: 'rgba(74, 144, 217, 0.1)', 
            padding: '0.75rem', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <HighlightableText text={`Today is day ${dayOfYear} of this year's orbit. ${365 - dayOfYear} days remain.`} />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Time is just numbers we agreed on. Twenty-four hours in a day. Sixty minutes in an hour. Fifty-two weeks in a year. Twelve months. All of them are levels too." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={52}>Weeks (Fifty-Two)</LevelButton>
            <LevelButton targetLevel={24}>Hours (Twenty-Four)</LevelButton>
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={200}>← Two Hundred</LevelButton>
            <LevelButton targetLevel={500}>Five Hundred →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level365;
