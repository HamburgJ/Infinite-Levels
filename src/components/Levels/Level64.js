import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const ChainPath = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background: ${props => props.color || 'rgba(0,0,0,0.03)'};
  cursor: default;
  transition: transform 0.2s ease;
  &:hover { transform: translateX(4px); }
`;

const ChainLabel = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #555;
  min-width: 100px;
`;

const ChainNumbers = styled.span`
  font-family: monospace;
  font-size: 0.9rem;
  color: #333;
`;

const Level64 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Crossroads" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Sixty-four. Two to the sixth power. Eight squared. Four cubed. Three chains converge on a single number." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="A chessboard has sixty-four squares. A Nintendo had sixty-four bits. Some numbers are simply important." />
          </Card.Text>

          <ChainPath color="rgba(52, 152, 219, 0.1)">
            <ChainLabel>⚡ Powers of 2</ChainLabel>
            <ChainNumbers>
              <HighlightableText text="...thirty-two → 64 → one hundred twenty-eight → two hundred fifty-six..." />
            </ChainNumbers>
          </ChainPath>

          <ChainPath color="rgba(46, 204, 113, 0.1)">
            <ChainLabel>◻️ Squares</ChainLabel>
            <ChainNumbers>
              <HighlightableText text="...forty-nine → 64 → eighty-one → one hundred..." />
            </ChainNumbers>
          </ChainPath>

          <ChainPath color="rgba(155, 89, 182, 0.1)">
            <ChainLabel>🧊 Cubes</ChainLabel>
            <ChainNumbers>
              <HighlightableText text="...twenty-seven → 64 → one hundred twenty-five → two hundred sixteen..." />
            </ChainNumbers>
          </ChainPath>

          <Card.Text style={{ marginTop: '1rem' }}>
            <HighlightableText text="Three paths. One number. Where the chains cross, you choose your direction." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={50}>← Fifty</LevelButton>
            <LevelButton targetLevel={100}>One Hundred →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level64;
