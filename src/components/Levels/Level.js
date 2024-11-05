import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { formatComplexNumber } from '../../utils/complex';
import { useAchievements } from '../../hooks/useAchievements';
import { Button } from 'react-bootstrap';

const LevelWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const NotImplemented = styled.div`
  font-size: 24px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

// Level dictionary - now using string keys for complex numbers
const levelComponents = {
  '0': React.lazy(() => import('./Level0')),
  '1': React.lazy(() => import('./Level1')),
  '2': React.lazy(() => import('./Level2')),
  '3': React.lazy(() => import('./Level3')),
  '4': React.lazy(() => import('./Level4')),
  '5': React.lazy(() => import('./Level5')),
  '6': React.lazy(() => import('./Level6')),
  '7': React.lazy(() => import('./Level7')),
  '8': React.lazy(() => import('./Level8')),
  '9': React.lazy(() => import('./Level9')),
  '10': React.lazy(() => import('./Level10')),
  '11': React.lazy(() => import('./Level11')),
  '12': React.lazy(() => import('./Level12')),
  '13': React.lazy(() => import('./Level13')),
  '14': React.lazy(() => import('./Level14')),
  '15': React.lazy(() => import('./Level15')),
};

const Level = ({ levelNumber }) => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const levelKey = formatComplexNumber(levelNumber);
  const LevelComponent = levelComponents[levelKey];

  const handleReturnToStart = () => {
    dispatch(setCurrentLevel(0));
  };

  return (
    <LevelWrapper>
      <React.Suspense fallback={<div>Loading...</div>}>
        {LevelComponent ? (
          <LevelComponent />
        ) : (
          <NotImplemented>
            <div>Level {levelKey} is not implemented yet...</div>
            <Button 
              variant="outline-secondary"
              onClick={handleReturnToStart}
            >
              Return to Level 0
            </Button>
          </NotImplemented>
        )}
      </React.Suspense>
    </LevelWrapper>
  );
};

export default Level; 