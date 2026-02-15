import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HiddenContent = styled.div`
  animation: ${fadeIn} 3s ease-in;
  margin-top: 1rem;
`;

const Level19 = () => {
  const [patience, setPatience] = useState(0);
  const [showEscape, setShowEscape] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPatience(prev => {
        if (prev >= 6) {
          clearInterval(timer);
          setShowEscape(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level Nineteen" size="medium"/></Card.Title>
          <Card.Text>
            <HighlightableText text="Nothing here. No buttons. No accordions. No way out." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Or is there? Sometimes the way out is to wait." />
          </Card.Text>
          {showEscape && (
            <HiddenContent>
              <Card.Text>
                <HighlightableText text="A few seconds. That's all it took. Now you see what was always here — a path forward to level twenty, or back to level eighteen." />
              </Card.Text>
              <CenteredContainer>
                <LevelButton targetLevel={20}>Level 20</LevelButton>
                <LevelButton targetLevel={18}>Level 18</LevelButton>
              </CenteredContainer>
            </HiddenContent>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level19;