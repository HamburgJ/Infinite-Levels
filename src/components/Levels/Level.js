import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { formatComplexNumber } from '../../utils/complex';
import { useAchievements } from '../../hooks/useAchievements';
import { useBacktrackingAchievement } from '../../hooks/useBacktrackingAchievement';
import { Button } from 'react-bootstrap';
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';

const LevelWrapper = styled.div`
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
`;

const NotImplemented = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: 24px;
  color: #666;
`;

const LoadingWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
`;

// Level dictionary - now using string keys for complex numbers
const levelComponents = {
  '-0': React.lazy(() => import('./LevelNeg0')),
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
  '100': React.lazy(() => import('./Level100')),
  '150': React.lazy(() => import('./Level150')),
  '153': React.lazy(() => import('./Level153')),
  '156': React.lazy(() => import('./Level156')),
  '155': React.lazy(() => import('./Level155')),
  '158': React.lazy(() => import('./Level158')),
  '161': React.lazy(() => import('./Level161')),
  '1000': React.lazy(() => import('./Level1000')),
  '1001': React.lazy(() => import('./Level1001')),
  '10000': React.lazy(() => import('./Level10000')),
  '100000': React.lazy(() => import('./Level100000')),
  '1000000': React.lazy(() => import('./Level1000000')),
  '10000000': React.lazy(() => import('./Level10000000')),
  'Infinity': React.lazy(() => import('./LevelInfinity')),
  '-Infinity': React.lazy(() => import('./LevelNegativeInfinity')),
  'Infinityi': React.lazy(() => import('./LevelInfinityI')),
  '-Infinityi': React.lazy(() => import('./LevelNegativeInfinityI')),
  'Infinity-Infinityi': React.lazy(() => import('./LevelPosInfinityNegInfinityI')),
  '-Infinity-Infinityi': React.lazy(() => import('./LevelNegInfinityNegInfinityI')),
  'Infinity+Infinityi': React.lazy(() => import('./LevelPosInfinityPosInfinityI')),
  '-Infinity+Infinityi': React.lazy(() => import('./LevelNegInfinityPosInfinityI')),
  'Demo': React.lazy(() => import('./LevelDemo')),
};

const Level = ({ levelNumber }) => {
  const dispatch = useDispatch();
  const { unlockAchievements } = useAchievements();
  useBacktrackingAchievement();
  const theme = useSelector(state => state.theme);
  const prevLevelRef = useRef(levelNumber);
  const isModalOpen = useSelector(state => state.modal?.isOpen);
  
  
  const getLevelKey = (level) => {
    
    if (typeof level === 'string') {
      console.log('Handling string level:', level);
      return level;
    }
    
    if (typeof level === 'number') {
      const key = Math.abs(level).toString();
      console.log('Handling number level:', level, '-> key:', key);
      return key;
    }
    
    if (typeof level === 'object' && 'real' in level) {
      console.log('Handling complex level:', level);
      if (level.imag === 0) {
        const key = Math.abs(level.real).toString();
        console.log('Complex with imag=0 -> key:', key);
        return key;
      }
      
      const key = formatComplexNumber({
        real: Math.abs(level.real),
        imag: level.imag
      });
      console.log('Complex number -> key:', key);
      return key;
    }
    
    console.log('Fallback to default key: 0');
    return '0';
  };

  const isNegativeLevel = typeof levelNumber === 'number' 
    ? levelNumber < 0 
    : (typeof levelNumber === 'object' && levelNumber.real < 0);

  const levelKey = getLevelKey(levelNumber);

  
  const LevelComponent = levelComponents[levelKey];

  const handleReturnToStart = () => {
    dispatch(setCurrentLevel(0));
  };

  // Modify scroll reset effect to respect modal state
  React.useEffect(() => {
    if (
      JSON.stringify(prevLevelRef.current) !== JSON.stringify(levelNumber) && 
      !isModalOpen
    ) {
      window.scrollTo(0, 0);
      prevLevelRef.current = levelNumber;
    }
  }, [levelNumber, isModalOpen]);

  return (
    <LevelWrapper>
      <React.Suspense fallback={
        <LoadingWrapper theme={theme}>
          Loading...
        </LoadingWrapper>
      }>
        {LevelComponent ? (
          isNegativeLevel ? (
            <NegativeLevelWrapper>
              <LevelComponent />
            </NegativeLevelWrapper>
          ) : (
            <LevelComponent />
          )
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