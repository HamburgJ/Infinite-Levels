import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { markTutorialStopVisited, markPrimeVisited, TUTORIAL_STOPS } from '../../store/slices/jesterSlice';
import { incrementJesterEncounters } from '../../store/slices/gameSlice';
import { Button } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';

const JesterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.85));
  padding: 0.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${props => props.isDisappearing ? 'disappear 0.5s forwards' : 'none'};

  @keyframes disappear {
    0% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8) rotate(180deg);
    }
    100% {
      opacity: 0;
      transform: scale(0) rotate(360deg);
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 8px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.08),
      inset 0 1px 1px rgba(255, 255, 255, 0.6);
  }
`;

const JesterEmoji = styled.span`
  font-size: 2rem;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const JesterText = styled.div`
  flex: 1;
  font-style: italic;
  color: #666;
`;

// Tutorial stops (original 3-stop chain)
const JESTER_LOCATIONS = {
  '11': {
    nextLocation: '8',
    message: "Ah, the sparse levels! *juggles some numbers* Did you know that if you look carefully at Level 8, you might find some interesting traveling techniques? *winks*"
  },
  '8': {
    nextLocation: '9',
    message: "Ohoho! Advanced techniques, indeed! But the real magic lies in the secrets... *pulls a rabbit from a hat* Why don't you check Level 9? There might be a mysterious box waiting to be unlocked! *disappears in a puff of smoke, then reappears* Oh, I'm still here!"
  },
  '9': {
    nextLocation: null,
    message: "The grand finale! *throws confetti* You've found all my hiding spots! But remember, in this world of numbers and mysteries, nothing is quite what it seems... *bows theatrically*"
  }
};

// Simple primality test for roaming
const isSimplePrime = (n) => {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

// Roaming hints — the Jester gives contextual advice based on what the player hasn't found
const ROAMING_HINTS = [
  {
    id: 'negative',
    message: "🃏 *somersaults* Have you been below zero yet? There's a whole world down there! Try the gateway at level fourteen!",
  },
  {
    id: 'complex',
    message: "🃏 *pulls a compass from thin air* The number line isn't the only road, you know. At level thirty, you can step sideways into the complex plane. Whole new dimension! *winks*",
  },
  {
    id: 'scale',
    message: "🃏 *balances on one finger* Here's a secret nobody tells you — put something on the scale. Then click the weight. Just... trust me on this one. *taps nose knowingly*",
  },
  {
    id: 'roman',
    message: "🃏 *adjusts an imaginary toga* The Romans had their own numbers, you know. Level fifty can teach you their secrets. Every L, C, D, and M is a doorway! *dramatic bow*",
  },
  {
    id: 'sound',
    message: "🃏 *cups ear* Listen carefully... some words SOUND like numbers. 'Ate' is a meal... or is it? Level fifty-five knows the truth! *giggles mysteriously*",
  },
  {
    id: 'calculator',
    message: "🃏 *pulls out a tiny calculator* What's nine times nine times nine? Level ninety-nine has a calculator that can help you figure it out! *presses random buttons*",
  },
  {
    id: 'blackhole',
    message: "🃏 *whispers conspiratorially* Deep in the complex plane, where five meets five i, something impossible exists. Something that weighs... infinity. *eyes go wide*",
  },
  {
    id: 'decimal',
    message: "🃏 *squints at the space between two numbers* Not every level is a whole number, you know. Try going HALF way — literally. Or visit level eighty-two. It knows about pi, e, and phi... and they're ALL levels. *mind blown gesture*",
  },
  {
    id: 'area51',
    message: "🃏 *looks around nervously* Level fifty-one has some... redacted documents. Top secret stuff. But if you click the black bars... well, I didn't tell you that. *adjusts tinfoil hat*",
  },
  {
    id: 'jester_payoff',
    message: "🃏 *gets uncharacteristically serious* My old friend the clown lives around level one hundred fifty-nine. We go way back. But be careful what you agree to — clowns are tricky. Even trickier than jesters. *nervous laugh*",
  },
  {
    id: 'diamond',
    message: "🃏 *holds up a magnifying glass* The diamond at level one hundred fifty-three is beautiful, but it's also very precise — three point five two grams, if you put it on the scale. And guess what? Three point five two is a level too. *drops monocle*",
  },
  {
    id: 'constants',
    message: "🃏 *draws a circle in the air* Level eighty-two is the gateway to the spaces between whole numbers. Pi, e, and phi — they're not just constants, they're addresses. Three point one four one five nine. Two point seven one eight. One point six one eight. *counts on fingers*",
  },
  {
    id: 'default',
    message: null, // Will be generated dynamically
  }
];

const Jester = ({ currentLevel }) => {
  const dispatch = useDispatch();
  const jesterState = useSelector(state => state.jester);
  const phase = jesterState.phase || 'tutorial';
  const visitedPrimes = jesterState.visitedPrimes || [];
  const visitedTutorialStops = jesterState.visitedTutorialStops || [];
  const [isDisappearing, setIsDisappearing] = React.useState(false);

  const levelNum = typeof currentLevel === 'string' ? parseInt(currentLevel) : currentLevel;

  // Check if the Jester should appear on this level
  const shouldAppear = () => {
    if (phase === 'tutorial') {
      // Order-independent: appear on any unvisited tutorial stop
      return TUTORIAL_STOPS.includes(currentLevel) && !visitedTutorialStops.includes(currentLevel);
    }
    // Roaming phase: appear on prime procedural levels the player hasn't seen the Jester on
    if (phase === 'roaming' && isSimplePrime(levelNum) && levelNum > 20) {
      return !visitedPrimes.includes(levelNum);
    }
    return false;
  };

  useEffect(() => {
    if (shouldAppear()) {
      dispatch(incrementJesterEncounters());
      if (phase === 'roaming' && isSimplePrime(levelNum)) {
        dispatch(markPrimeVisited(levelNum));
      }
    }
  }, [dispatch, currentLevel]);

  if (!shouldAppear()) {
    return null;
  }

  const handleTravel = () => {
    setIsDisappearing(true);
    setTimeout(() => {
      if (phase === 'tutorial') {
        // Mark this stop as visited; the slice auto-completes tutorial when all 3 are done
        dispatch(markTutorialStopVisited(currentLevel));
      }
      // In roaming phase, the Jester just disappears (already marked as visited)
    }, 500);
  };

  // Get the message to display
  const getMessage = () => {
    if (phase === 'tutorial' && JESTER_LOCATIONS[currentLevel]) {
      return JESTER_LOCATIONS[currentLevel].message;
    }
    
    // Endgame: 100th encounter special message
    const totalEncounters = visitedPrimes.length + 1;
    if (totalEncounters >= 100) {
      return "🃏 *sits down quietly* You know, after all this time, I've grown rather fond of you. Here's something I've never told anyone: the singularity at five plus five i has something special for those with infinite patience. Something with infinite weight. Put it on a scale. *winks one last time*";
    }

    // Roaming: pick a hint from the rotation (exclude the last 'default' entry)
    const hintCount = ROAMING_HINTS.length - 1;
    const hintIndex = visitedPrimes.length % hintCount;
    const hint = ROAMING_HINTS[hintIndex];
    if (hint.message) {
      return hint.message;
    }
    // Default message with count
    return `🃏 *does a little jig* You've found me ${totalEncounters} times now! I love prime numbers — they're just so... indivisible. *twirls*`;
  };

  return (
    <JesterContainer isDisappearing={isDisappearing}>
      <JesterEmoji>🃏</JesterEmoji>
      <JesterText>
        <HighlightableText text={getMessage()} />
      </JesterText>
      <Button 
        variant="outline-primary" 
        onClick={handleTravel}
        size="sm"
      >
        *poof*
      </Button>
    </JesterContainer>
  );
};

export default Jester;