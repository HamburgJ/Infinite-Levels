import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const HighwaySign = styled.div`
  background: #006b3f;
  color: white;
  border: 3px solid white;
  outline: 3px solid #006b3f;
  border-radius: 12px;
  padding: 1rem 2rem;
  text-align: center;
  font-family: 'Highway Gothic', 'Arial', sans-serif;
  font-weight: bold;
  margin: 1.5rem auto;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`;

const HighwayNumber = styled.div`
  font-size: 2.5rem;
  margin: 0.25rem 0;
`;

const HighwaySubtext = styled.div`
  font-size: 0.85rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Level66 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <HighwaySign>
            <HighwaySubtext>LEVEL</HighwaySubtext>
            <HighwayNumber>66</HighwayNumber>
            <HighwaySubtext>GET YOUR KICKS</HighwaySubtext>
          </HighwaySign>
          <Card.Text>
            <HighlightableText text="A highway stretching from Chicago to Los Angeles — two thousand four hundred forty-eight miles of open road." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Some roads cross a country. This one crosses a number line. The sign says one hundred, but the road goes to five hundred, one thousand, and beyond." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="How far will you drive?" />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={50}>← Exit 50</LevelButton>
            <LevelButton targetLevel={100}>Exit 100 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level66;
