import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CenteredContainer } from '../Levels/styles/CommonLevelStyles';
import LevelButton from './LevelButton';
import { useDispatch } from 'react-redux';
import { markHintOpened } from '../../store/slices/gameSlice';
import HighlightableText from './HighlightableText';
import achievements from '../../data/achievements';
import { levelToString, parseStoredLevel } from '../../utils/complex';

const levelHints = {
  "0+0i": <>
    <HighlightableText text="A sense of exploration is key!" achievement={achievements.HINT_TEXT} />
    <CenteredContainer>
      <LevelButton targetLevel={7}>
        Continue to Level 7
      </LevelButton>
    </CenteredContainer>
  </>,
  "1+0i": "Find the hidden button in the accordion menu",
  "2+0i": "Might need to backtrack...",
  "3+0i": (
    <>
      Some secrets require persistence... Good work!
      <CenteredContainer>
        <LevelButton targetLevel={4}>
          Continue to Level 4
        </LevelButton>
      </CenteredContainer>
    </>
  ),
  "4+0i": "Sometimes going back is the way forward",
  "5+0i": "Numbers can be more than just answers",
  "6+0i": "All single digits lead somewhere",
  "7+0i": "Time reveals new paths",
  "8+0i": "Check your wallet carefully",
  "9+0i": "Tutorial complete - review what you've learned",
  "10+0i": "Welcome to the complex plane",
  "11+0i": "The clock shows more than just time",
  "12+0i": "Collect buttons for later use",
  "13+0i": "Mathematics can transform your journey",
  "14+0i": "Enter the negative space",
  "15+0i": "Stability is not guaranteed"
};

const LevelHint = ({ levelNumber }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(markHintOpened(levelNumber));
  }, [dispatch, levelNumber]);

  console.log('LevelHint - Input levelNumber:', {
    value: levelNumber,
    type: typeof levelNumber,
    hasReal: levelNumber?.real !== undefined
  });

  // First parse the level number if it's a string
  const parsedLevel = typeof levelNumber === 'string' ? 
    { real: parseInt(levelNumber, 10), imag: 0 } : 
    levelNumber;

  // Then convert to our standard format
  const levelKey = levelToString(parsedLevel);
  
  console.log('LevelHint - Generated levelKey:', {
    key: levelKey,
    foundInHints: levelKey in levelHints,
    availableHints: Object.keys(levelHints)
  });

  const hint = levelHints[levelKey];
  console.log('LevelHint - Found hint:', hint);

  return hint || "Explore and discover...";
};

export default LevelHint;