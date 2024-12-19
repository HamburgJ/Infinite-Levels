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
  "15+0i": "Stability is not guaranteed",
  "16+0i": "Every step forward reveals new possibilities",
  "17+0i": "The path branches in unexpected ways",
  "18+0i": "Look for patterns in the chaos",
  "19+0i": "Some solutions require a different perspective",
  "20+0i": "The journey continues to evolve",
  "21+0i": "Each level adds a new layer of complexity",
  "22+0i": "Think outside conventional boundaries",
  "23+0i": "The solution might be simpler than it seems",
  "24+0i": "Time to put your skills to the test",
  "25+0i": "Look for connections between levels",
  "26+0i": "Sometimes the obvious path isn't the right one",
  "27+0i": "Challenge your assumptions",
  "28+0i": "The answer might be hiding in plain sight",
  "29+0i": "Every detail matters",
  "30+0i": "New mechanics await discovery",
  "31+0i": "Keep track of what you've learned",
  "32+0i": "Binary thinking might help here",
  "33+0i": "Three is a magical number",
  "34+0i": "Look for patterns in the interface",
  "35+0i": "Some puzzles require patience",
  "36+0i": "Think in multiple dimensions",
  "37+0i": "The solution might require previous knowledge",
  "38+0i": "Consider all your tools",
  "39+0i": "Progress isn't always linear",
  "40+0i": "Forty steps deeper into the mystery",
  "41+0i": "Each level builds upon the last",
  "42+0i": "The answer to everything... or is it?",
  "43+0i": "Look beyond the obvious",
  "44+0i": "Double your efforts",
  "45+0i": "The angle matters",
  "46+0i": "Consider alternative approaches",
  "47+0i": "Prime numbers might be relevant",
  "48+0i": "Think in powers",
  "49+0i": "Square numbers tell a story",
  "50+0i": "Halfway there... or are you?",
  "69+0i": "Nice... but focus on the puzzle",
  "100+0i": "Triple digits open new possibilities",
  "150+0i": "The journey extends beyond expectations",
  "153+0i": "Some numbers have special properties",
  "155+0i": "Look for mathematical patterns",
  "156+0i": "Consider the relationship between numbers",
  "158+0i": "Every number has its purpose",
  "159+0i": "Sequential thinking might help",
  "160+0i": "The pattern continues to evolve",
  "161+0i": "Look for symmetry",
  "162+0i": "The solution might be mathematical",
  "165+0i": "Consider multiple approaches",
  "168+0i": "Time plays a role",
  "171+0i": "The path isn't always straight",
  "404+0i": "Page not found... or is it?",
  "500+0i": "Half a thousand possibilities",
  "999+0i": "Triple nines hide secrets",
  "1000+0i": "Four digits of complexity",
  "1001+0i": "Arabian nights of puzzling",
  "9999+0i": "Nearly infinite possibilities",
  "10000+0i": "Five digits of mystery",
  "69420+0i": "Memes won't help you here",
  "100000+0i": "Six digits of challenges",
  "1000000+0i": "A million possibilities",
  "10000000+0i": "Beyond conventional limits",
  "-13+0i": "Negative space holds secrets",
  "-0+0i": "Zero isn't always what it seems",
  "0+1i": "Welcome to the imaginary plane",
  "3+1i": "Complex numbers create new paths",
  "999+999i": "The ultimate complex challenge",
  "Infinity+0i": "Beyond numerical bounds",
  "-Infinity+0i": "The depths of negative infinity",
  "Infinity+Infinityi": "The ultimate convergence",
  "-Infinity-Infinityi": "The deepest point possible",
  "Infinity-Infinityi": "Opposing infinities create possibilities",
  "-Infinity+Infinityi": "Infinite complexity awaits"
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