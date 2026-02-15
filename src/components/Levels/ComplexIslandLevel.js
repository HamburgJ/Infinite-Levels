import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';

const IslandLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(100, 200, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const fmtC = (r, i) => `${r}${i >= 0 ? '+' : ''}${i}i`;

/**
 * Shared template for stable island levels.
 * Props:
 *   name        — Display name (e.g. "The Crossroads")
 *   coord       — { real, imag }
 *   bodyText    — Main paragraph (string or array of strings)
 *   extraContent— Optional React node rendered between text and nav
 *   navTargets  — Array of { target: {real, imag} | number, label: string }
 *   showDirectionalNav — if true, show the standard ±1 directional buttons
 */
const ComplexIslandLevel = ({ 
  name, 
  coord, 
  bodyText, 
  extraContent, 
  navTargets = [], 
  showDirectionalNav = true 
}) => {
  const texts = Array.isArray(bodyText) ? bodyText : [bodyText];
  const a = coord.real;
  const b = coord.imag;

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <IslandLabel>Stable Island — {fmtC(a, b)}</IslandLabel>
          <Card.Title>
            <HighlightableText text={name} size="medium" />
          </Card.Title>
          {texts.map((t, i) => (
            <Card.Text key={i}>
              <HighlightableText text={t} />
            </Card.Text>
          ))}
          {extraContent}
          {showDirectionalNav && (
            <CenteredContainer>
              <LevelButton targetLevel={{real: a - 1, imag: b}}>← {fmtC(a - 1, b)}</LevelButton>
              <LevelButton targetLevel={{real: a + 1, imag: b}}>{fmtC(a + 1, b)} →</LevelButton>
              <LevelButton targetLevel={{real: a, imag: b - 1}}>↓ {fmtC(a, b - 1)}</LevelButton>
              <LevelButton targetLevel={{real: a, imag: b + 1}}>↑ {fmtC(a, b + 1)}</LevelButton>
            </CenteredContainer>
          )}
          <CenteredContainer>
            {navTargets.map((nav, i) => (
              <LevelButton key={i} targetLevel={nav.target}>{nav.label}</LevelButton>
            ))}
            <LevelButton targetLevel={0}>Return to Reality</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default ComplexIslandLevel;
