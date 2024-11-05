import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import Cube from '../Layout/Cube';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';

const LevelContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SecretButton = styled.button`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const Level2 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const [backAndForthCount, setBackAndForthCount] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    unlockAchievement('LEVEL_2');
  }, [unlockAchievement]);

  const handleRotation = (direction) => {
    if (lastDirection && direction !== lastDirection) {
      setBackAndForthCount(prev => prev + 1);
      if (backAndForthCount + 1 >= 5) {
        setShowSecret(true);
      }
    }
    setLastDirection(direction);
  };

  const faces = {
    front: <h2>Find the button to Level 3...</h2>,
    back: <h2>Keep searching...</h2>,
    right: (
      <>
        <LevelButton targetLevel={3}>Go to Level 3</LevelButton>
        {showSecret && (
          <LevelButton 
            targetLevel={5}
            variant="outline-secondary"
            className="mt-2"
          >
            Skip to Level 5
          </LevelButton>
        )}
      </>
    ),
    left: <h2>Not here...</h2>,
    top: <h2>Look around...</h2>,
    bottom: <h2>Try another side</h2>
  };

  return (
    <LevelContainer>
      <Cube 
        faces={faces}
        onRotateLeft={() => handleRotation('left')}
        onRotateRight={() => handleRotation('right')}
      />
    </LevelContainer>
  );
};

export default Level2; 