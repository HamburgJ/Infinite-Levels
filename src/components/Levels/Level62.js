import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import styled from 'styled-components';

const WarningText = styled.div`
  color: #dc3545;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;

const PestIcon = styled.span`
  font-size: 1.5em;
  margin: 0 5px;
`;

const Level62 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level 62" size="medium" /></Card.Title>
          <WarningText>
            <PestIcon>🐛</PestIcon>
            <HighlightableText text="NOTICE: This level is temporarily closed for pest control" />
            <PestIcon>🐜</PestIcon>
          </WarningText>
          <Card.Text>
            <HighlightableText text="Sixty-two. An unassuming number. But here's something: you can navigate using math. Try highlighting seven times nine or twelve plus twelve. The game understands arithmetic — even something like two to the power of ten." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="We apologize for any inconvenience. Our pest control team is working diligently to resolve the issue. Please visit another level until maintenance is complete." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level62;