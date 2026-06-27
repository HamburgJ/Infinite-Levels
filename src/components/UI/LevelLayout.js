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
import HighlightableText from './HighlightableText';

const LevelTitle = styled(Card.Title)`
  font-family: ${fonts.display};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  text-align: ${props => props.$align};
`;

const LevelLayout = ({ 
  title,
  children, 
  background = null,
  className = '',
  titleAlign = 'left',
  titleSize = 'medium',
  titleEnhanced = false,
  titleColor,
}) => {
  const renderedTitle = typeof title === 'string'
    ? (
      <HighlightableText
        text={title}
        size={titleSize}
        enhanced={titleEnhanced}
        color={titleColor}
      />
    )
    : title;

  return (
    <>
      {background}
      <LevelContainer className={`level-container ${className}`.trim()}>
        <StyledCard>
          <Card.Body>
            {title && <LevelTitle as="h2" $align={titleAlign}>{renderedTitle}</LevelTitle>}
            {children}
          </Card.Body>
        </StyledCard>
      </LevelContainer>
    </>
  );
};

export default LevelLayout;
