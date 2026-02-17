import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCurrentLevel } from '../../store';
import { transitions } from '../../styles/theme';

/**
 * TextButton — an inline, invisible-until-hover button disguised as normal text.
 *
 * Used as a bridge mechanic between obvious LevelButtons and the
 * HighlightableText selection mechanic. Trains the player to look for
 * interactive number-words inside prose before they discover text-selection.
 *
 * Desktop: completely invisible until hover reveals underline + color shift.
 * Mobile: very faint dotted underline (since hover doesn't exist).
 */
const InlineButton = styled.span`
  cursor: default;
  position: relative;
  transition: color ${transitions.fast}, text-decoration-color ${transitions.fast};

  /* Desktop: invisible until hover */
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: rgba(37, 99, 235, 0.5);
      text-underline-offset: 3px;
      color: rgba(37, 99, 235, 0.85);
    }

    &:active {
      color: rgba(37, 99, 235, 1);
    }
  }

  /* Mobile: subtle dotted underline hint since there's no hover */
  @media (hover: none) {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: rgba(0, 0, 0, 0.12);
    text-underline-offset: 3px;

    &:active {
      color: rgba(37, 99, 235, 0.85);
      text-decoration-style: solid;
      text-decoration-color: rgba(37, 99, 235, 0.5);
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(37, 99, 235, 0.5);
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const TextButton = ({ children, targetLevel }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentLevel(targetLevel));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <InlineButton
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Go to level ${targetLevel}`}
    >
      {children}
    </InlineButton>
  );
};

export default TextButton;
