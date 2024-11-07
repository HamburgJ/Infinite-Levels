import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setJesterLocation } from '../../store/slices/jesterSlice';
import { Button } from 'react-bootstrap';

const JesterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  '0': {
    nextLocation: '1',
    message: "Welcome! Let me show you around this peculiar place..."
  }
};

const Jester = ({ currentLevel }) => {
  const dispatch = useDispatch();
  const jesterLocation = useSelector(state => state.jester.currentLocation);

  if (jesterLocation !== currentLevel) {
    return null;
  }

  const handleTravel = () => {
    const nextLocation = JESTER_LOCATIONS[jesterLocation].nextLocation;
    dispatch(setJesterLocation(nextLocation));
  };

  return (
    <JesterContainer>
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