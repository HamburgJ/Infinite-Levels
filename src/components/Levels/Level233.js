import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const RatioTable = styled.div`
  margin: 1rem 0;
  padding: 0.75rem;
  background: rgba(0,0,0,0.02);
  border-radius: 8px;
  font-family: monospace;
  font-size: 0.8rem;
  line-height: 1.8;
  color: #555;
`;

const RatioRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: ${props => props.highlight ? 'rgba(52, 152, 219, 0.08)' : 'transparent'};
`;

const Level233 = () => {
  const pairs = [
    [2, 1], [3, 2], [5, 3], [8, 5], [13, 8],
    [21, 13], [34, 21], [55, 34], [89, 55], [144, 89], [233, 144]
  ];

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Convergence" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Two hundred thirty-three. Watch what happens when you divide each Fibonacci number by the one before it:" />
          </Card.Text>

          <RatioTable>
            {pairs.map(([a, b], i) => (
              <RatioRow key={i} highlight={i === pairs.length - 1}>
                <span>{a} ÷ {b}</span>
                <span>= {(a / b).toFixed(8)}</span>
              </RatioRow>
            ))}
            <RatioRow style={{ borderTop: '1px solid #ddd', marginTop: '0.25rem', paddingTop: '0.25rem', color: '#c0392b' }}>
              <span>φ</span>
              <span>= 1.61803398...</span>
            </RatioRow>
          </RatioTable>

          <Card.Text>
            <HighlightableText text="The further you go, the closer the ratio gets — but it never quite arrives. That's the golden ratio: always approached, never reached. The number one point six one eight is a level." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={144}>← One Forty-Four</LevelButton>
            <LevelButton targetLevel={377}>Three Seventy-Seven →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level233;
