import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import styled from 'styled-components';

const Balloon = styled.div`
  width: 60px;
  height: 80px;
  background: #ff6b6b;
  border-radius: 50%;
  position: relative;
  margin: 30px auto;
  cursor: pointer;
  
  &:before {
    content: '';
    width: 2px;
    height: 30px;
    background: #666;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Level55 = () => {
  const [isPopped, setIsPopped] = useState(false);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 55</Card.Title>
          <Card.Text>
            <HighlightableText text="Please don't pop this balloon. It's very special to me." />
          </Card.Text>
          {!isPopped && <Balloon onClick={() => setIsPopped(true)} />}
          {isPopped && (
            <Card.Text style={{ color: '#666', fontStyle: 'italic', marginTop: '20px' }}>
              <HighlightableText text="*sigh* I really wish you hadn't done that..." />
            </Card.Text>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level55;