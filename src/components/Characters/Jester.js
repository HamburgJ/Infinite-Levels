import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setJesterLocation, completeJesterTutorial, markPrimeVisited } from '../../store/slices/jesterSlice';
import { incrementJesterEncounters } from '../../store/slices/gameSlice';
import { Button } from 'react-bootstrap';

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
    id: 'default',
    message: null, // Will be generated dynamically
  }
];

const Jester = ({ currentLevel }) => {
  const dispatch = useDispatch();
  const jesterState = useSelector(state => state.jester);
  const jesterLocation = jesterState.currentLocation;
  const phase = jesterState.phase || 'tutorial';
  const visitedPrimes = jesterState.visitedPrimes || [];
  const [isDisappearing, setIsDisappearing] = React.useState(false);

  const levelNum = typeof currentLevel === 'string' ? parseInt(currentLevel) : currentLevel;

  // Check if the Jester should appear on this level
  const shouldAppear = () => {
    if (phase === 'tutorial') {
      return jesterLocation === currentLevel;
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
        const nextLocation = JESTER_LOCATIONS[jesterLocation]?.nextLocation;
        if (nextLocation) {
          dispatch(setJesterLocation(nextLocation));
        } else {
          // Tutorial complete — enter roaming phase
          dispatch(completeJesterTutorial());
        }
      }
      // In roaming phase, the Jester just disappears (already marked as visited)
    }, 500);
  };

  // Get the message to display
  const getMessage = () => {
    if (phase === 'tutorial' && JESTER_LOCATIONS[jesterLocation]) {
      return JESTER_LOCATIONS[jesterLocation].message;
    }
    
    // Roaming: pick a hint from the rotation
    const hintIndex = visitedPrimes.length % (ROAMING_HINTS.length - 1);
    const hint = ROAMING_HINTS[hintIndex];
    if (hint.message) {
      return hint.message;
    }
    // Default message with count
    return `🃏 *does a little jig* You've found me ${visitedPrimes.length + 1} times now! I love prime numbers — they're just so... indivisible. *twirls*`;
  };

  return (
    <JesterContainer isDisappearing={isDisappearing}>
      <JesterEmoji>🃏</JesterEmoji>
      <JesterText>
        {getMessage()}
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