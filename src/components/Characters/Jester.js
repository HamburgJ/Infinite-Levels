import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setJesterLocation} from '../../store/slices/jesterSlice';
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

const Jester = ({ currentLevel }) => {
  const dispatch = useDispatch();
  const jesterLocation = useSelector(state => state.jester.currentLocation);
  const [isDisappearing, setIsDisappearing] = React.useState(false);

  useEffect(() => {
    if (jesterLocation === currentLevel) {
      dispatch(incrementJesterEncounters());
    }
  }, [dispatch, jesterLocation, currentLevel]);

  if (jesterLocation !== currentLevel) {
    return null;
  }

  const handleTravel = () => {
    setIsDisappearing(true);
    setTimeout(() => {
      const nextLocation = JESTER_LOCATIONS[jesterLocation].nextLocation;
      dispatch(setJesterLocation(nextLocation));
    }, 500); // Wait for animation to complete
  };

  return (
    <JesterContainer isDisappearing={isDisappearing}>
      <JesterEmoji>🃏</JesterEmoji>
      <JesterText>
        {JESTER_LOCATIONS[jesterLocation].message}
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