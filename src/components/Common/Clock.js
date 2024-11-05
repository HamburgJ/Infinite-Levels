import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';

const ClockContainer = styled.div`
  background: #000;
  padding: 1rem 2rem;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const TimeDisplay = styled.div`
  font-family: 'Digital', monospace;
  font-size: 2.5rem;
  color: ${props => props.isActive ? '#0f0' : '#444'};
`;

const Clock = ({ onTimeChange, isInteractive = true }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      if (onTimeChange) {
        onTimeChange(new Date());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeChange]);

  const handleClick = () => {
    if (!isInteractive) return;
    
    setIsActive(true);
    dispatch(markMechanicDiscovered('clock'));
    
    const hours = time.getHours();
    const minutes = time.getMinutes();
    
    // If time is between 1:00 and 12:59, allow access to that level
    if (hours <= 12) {
      dispatch(setCurrentLevel(hours));
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <ClockContainer onClick={handleClick}>
      <TimeDisplay isActive={isActive}>
        {formatTime(time)}
      </TimeDisplay>
    </ClockContainer>
  );
};

export default Clock; 