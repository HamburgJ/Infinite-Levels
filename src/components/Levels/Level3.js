import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import Cube from '../Layout/Cube';
import { useAchievements } from '../../hooks/useAchievements';

const LevelContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HintText = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const Level3 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const [rotationCount, setRotationCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    unlockAchievement('LEVEL_3');
  }, [unlockAchievement]);

  const handleRotation = (direction) => {
    setRotationCount(prev => prev + 1);
    if (rotationCount + 1 >= 5) {
      setShowHint(true);
    }
  };
  const faces = {
    front: showHint ? (
      <h2>Hint: Go back to Level 2 and rotate left and right 5 times for a secret!</h2>
    ) : (
      <h2>Another cube puzzle...</h2>
    ),
    back: <h2>Getting warmer...</h2>,
    right: <h2>Almost there...</h2>,
    left: <h2>Keep looking...</h2>,
    top: <button onClick={() => dispatch(setCurrentLevel(4))}>Go to Level 4</button>,
    bottom: <h2>Not down here</h2>
  };

  return (
    <LevelContainer>
      <HintText show={showHint}>
        Secret discovered! Go back to Level 2 and rotate the cube left and right 5 times to reveal a hidden path...
      </HintText>
      <Cube 
        faces={faces} 
        allowVerticalRotation={true}
        onRotateLeft={() => handleRotation('left')}
        onRotateRight={() => handleRotation('right')}
      />
    </LevelContainer>
  );
};

export default Level3; 