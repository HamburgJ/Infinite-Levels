/**
 * LevelLayout — Standardized wrapper for level content.
 * 
 * Replaces the repetitive <LevelContainer><StyledCard><Card.Body>...
 * pattern used across all handcrafted level files. Levels can still
 * import the raw primitives for custom layouts, but most levels 
 * should use this wrapper for consistency.
 */
import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from '../Levels/styles/CommonLevelStyles';
import { fonts } from '../../styles/theme';
import { slideUp } from '../../styles/animations';

const LevelTitle = styled(Card.Title)`
  font-family: ${fonts.display};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const LevelLayout = ({ 
  title,
  children, 
  background = null,
  className = '',
}) => {
  return (
    <>
      {background}
      <LevelContainer className={className}>
        <StyledCard>
          <Card.Body>
            {title && <LevelTitle as="h2">{title}</LevelTitle>}
            {children}
          </Card.Body>
        </StyledCard>
      </LevelContainer>
    </>
  );
};

export default LevelLayout;
