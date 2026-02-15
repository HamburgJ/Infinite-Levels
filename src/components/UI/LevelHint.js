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
  "1+0i": <HighlightableText text="Find the hidden button in the accordion menu" />,
  "2+0i": <HighlightableText text="Might need to backtrack..." />,
  "3+0i": (
    <>
      <HighlightableText text="Some secrets require persistence... Good work!" />
      <CenteredContainer>
        <LevelButton targetLevel={4}>
          Continue to Level 4
        </LevelButton>
      </CenteredContainer>
    </>
  ),
  "4+0i": <HighlightableText text="Sometimes going back is the way forward" />,
  "5+0i": <HighlightableText text="Numbers can be more than just answers" />,
  "6+0i": <HighlightableText text="All single digits lead somewhere" />,
  "7+0i": <HighlightableText text="The coins here are secretly buttons. Have you tried right-clicking one? Also — did you notice Level 8 has a button now?" />,
  "8+0i": <HighlightableText text="Check your wallet carefully" />,
  "9+0i": <HighlightableText text="Tutorial complete — review what you've learned" />,
  "10+0i": <HighlightableText text="Welcome to the complex plane" />,
  "11+0i": <HighlightableText text="The levels beyond ten are sparse, but the text within them is rich. Try highlighting any number you see." />,
  "12+0i": <HighlightableText text="A dozen is twelve. A score is twenty. A hundred is a hundred. Words that mean numbers are buttons too." />,
  "13+0i": <HighlightableText text="Mathematics can transform your journey" />,
  "14+0i": <HighlightableText text="Enter the negative space" />,
  "15+0i": <HighlightableText text="Stability is not guaranteed" />,
  "16+0i": <HighlightableText text="Every step forward reveals new possibilities" />,
  "17+0i": <HighlightableText text="The path branches in unexpected ways" />,
  "18+0i": <HighlightableText text="Look for patterns in the chaos" />,
  "19+0i": <HighlightableText text="Some solutions require a different perspective" />,
  "20+0i": <HighlightableText text="The wormhole seems empty, but look closely at the title text. Every word is a potential exit." />,
  "21+0i": <HighlightableText text="Each level adds a new layer of complexity" />,
  "22+0i": <HighlightableText text="Think outside conventional boundaries" />,
  "23+0i": <HighlightableText text="The solution might be simpler than it seems" />,
  "24+0i": <HighlightableText text="Time to put your skills to the test" />,
  "25+0i": <HighlightableText text="Look for connections between levels" />,
  "26+0i": <HighlightableText text="Sometimes the obvious path isn't the right one" />,
  "27+0i": <HighlightableText text="Challenge your assumptions" />,
  "28+0i": <HighlightableText text="The answer might be hiding in plain sight" />,
  "29+0i": <HighlightableText text="Every detail matters" />,
  "30+0i": <HighlightableText text="New mechanics await discovery" />,
  "31+0i": <HighlightableText text="Keep track of what you've learned" />,
  "32+0i": <HighlightableText text="Binary thinking might help here" />,
  "33+0i": <HighlightableText text="Three is a magical number" />,
  "34+0i": <HighlightableText text="Look for patterns in the interface" />,
  "35+0i": <HighlightableText text="Some puzzles require patience" />,
  "36+0i": <HighlightableText text="Think in multiple dimensions" />,
  "37+0i": <HighlightableText text="The solution might require previous knowledge" />,
  "38+0i": <HighlightableText text="Consider all your tools" />,
  "39+0i": <HighlightableText text="Progress isn't always linear" />,
  "40+0i": <HighlightableText text="Forty steps deeper into the mystery" />,
  "41+0i": <HighlightableText text="Each level builds upon the last" />,
  "42+0i": <HighlightableText text="The answer to life, the universe, and everything is forty-two. Or so they say. Try highlighting that number word." />,
  "43+0i": <HighlightableText text="Look beyond the obvious" />,
  "44+0i": <HighlightableText text="Double your efforts" />,
  "45+0i": <HighlightableText text="The angle matters" />,
  "46+0i": <HighlightableText text="Consider alternative approaches" />,
  "47+0i": <HighlightableText text="Prime numbers might be relevant" />,
  "48+0i": <HighlightableText text="Think in powers" />,
  "49+0i": <HighlightableText text="Square numbers tell a story" />,
  "50+0i": <HighlightableText text="L is fifty in Roman numerals. C is a hundred. D is five hundred. M is a thousand. Find these letters in any text." />,
  "69+0i": <HighlightableText text="Your screen resolution, timezone, and platform all contain numbers. Try highlighting them." />,
  "77+0i": <HighlightableText text="Roll the die, then try highlighting the result! Every number, even random ones, can be a way forward." />,
  "88+0i": <HighlightableText text="Eight arms, eight hearts, eight brains. The octopus is full of eights. Highlight the word eight to travel there." />,
  "99+0i": <HighlightableText text="Pick an operator, calculate the result, and try highlighting it. Nine times nine is eighty-one. Nine to the power of nine is something much bigger." />,
  "100+0i": <HighlightableText text="You've made it to triple digits! The card box here is a new collectible. Cards have values — and values are numbers." />,
  "150+0i": <HighlightableText text="The journey extends beyond expectations" />,
  "153+0i": <HighlightableText text="Some numbers have special properties" />,
  "155+0i": <HighlightableText text="Look for mathematical patterns" />,
  "156+0i": <HighlightableText text="Consider the relationship between numbers" />,
  "158+0i": <HighlightableText text="Every number has its purpose" />,
  "159+0i": <HighlightableText text="Sequential thinking might help" />,
  "160+0i": <HighlightableText text="The pattern continues to evolve" />,
  "161+0i": <HighlightableText text="Look for symmetry" />,
  "162+0i": <HighlightableText text="The solution might be mathematical" />,
  "165+0i": <HighlightableText text="Consider multiple approaches" />,
  "168+0i": <HighlightableText text="Time plays a role" />,
  "171+0i": <HighlightableText text="The path isn't always straight" />,
  "404+0i": <HighlightableText text="The glitch text hides secrets. Look for the number four hundred and four in the chaos. Or just highlight the title." />,
  "500+0i": <HighlightableText text="Half a thousand possibilities" />,
  "999+0i": <HighlightableText text="Triple nines hide secrets" />,
  "1000+0i": <HighlightableText text="Four digits of complexity" />,
  "1001+0i": <HighlightableText text="Arabian nights of puzzling" />,
  "9999+0i": <HighlightableText text="Nearly infinite possibilities" />,
  "10000+0i": <HighlightableText text="Five digits of mystery" />,
  "69420+0i": <HighlightableText text="Memes won't help you here" />,
  "100000+0i": <HighlightableText text="Six digits of challenges" />,
  "1000000+0i": <HighlightableText text="A million possibilities" />,
  "10000000+0i": <HighlightableText text="Beyond conventional limits" />,
  "-13+0i": <HighlightableText text="Negative space holds secrets" />,
  "-0+0i": <HighlightableText text="Zero isn't always what it seems" />,
  "0+1i": <HighlightableText text="Welcome to the imaginary plane" />,
  "3+1i": <HighlightableText text="Complex numbers create new paths" />,
  "999+999i": <HighlightableText text="The ultimate complex challenge" />,
  "Infinity+0i": <HighlightableText text="Beyond numerical bounds" />,
  "-Infinity+0i": <HighlightableText text="The depths of negative infinity" />,
  "Infinity+Infinityi": <HighlightableText text="The ultimate convergence" />,
  "-Infinity-Infinityi": <HighlightableText text="The deepest point possible" />,
  "Infinity-Infinityi": <HighlightableText text="Opposing infinities create possibilities" />,
  "-Infinity+Infinityi": <HighlightableText text="Infinite complexity awaits" />
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
    parseStoredLevel(levelNumber) : 
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