import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const DEBUG_MODE = true; // Set to true to enable debug styling

const TextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

const NumberSpan = styled.span`
  cursor: text;
  ${DEBUG_MODE && `
    color: red; // Example debug styling
  `}
`;

// Dictionary of non-numerical terms and their corresponding levels
const levelDictionary = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'i': { real: 0, imag: 1 },
  'e': Math.E
};

const ClickableText = ({ text }) => {
  const dispatch = useDispatch();

  const handleClick = (term) => {
    const level = levelDictionary[term.toLowerCase()] || parseInt(term, 10);
    if (level !== undefined) {
      dispatch(setCurrentLevel(level));
    }
  };

  const renderTextWithNumbers = (text) => {
    // Create a regex pattern to match any part of the text containing dictionary keys or numbers
    const wordPattern = Object.keys(levelDictionary).join('|');
    const regex = new RegExp(`(\\d+|${wordPattern})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase();
      if (levelDictionary.hasOwnProperty(lowerPart) || /^\d+$/.test(part)) {
        return (
          <NumberSpan
            key={`number-${index}`}
            onClick={() => handleClick(part)}
          >
            {part}
          </NumberSpan>
        );
      }
      return <span key={`text-${index}`}>{part}</span>;
    });
  };

  return <TextContainer>{renderTextWithNumbers(text)}</TextContainer>;
};

export default ClickableText; 