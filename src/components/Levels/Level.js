import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { formatComplexNumber, isNegative } from '../../utils/complex';
import { useAchievements } from '../../hooks/useAchievements';
import { useBacktrackingAchievement } from '../../hooks/useBacktrackingAchievement';
import { Button } from 'react-bootstrap';
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';
import NotImplementedLevel from './NotImplementedLevel';
import LevelBase from '../Layout/LevelBase';

const LevelWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
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
  '0': React.lazy(() => import('./Level0')),
  '-0': React.lazy(() => import('./LevelNeg0')),
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
  '-13': React.lazy(() => import('./LevelNeg13')),
  '14': React.lazy(() => import('./Level14')),
  '15': React.lazy(() => import('./Level15')),
  '16': React.lazy(() => import('./Level16')),
  '17': React.lazy(() => import('./Level17')),
  '18': React.lazy(() => import('./Level18')),
  '19': React.lazy(() => import('./Level19')),
  '20': React.lazy(() => import('./Level20')),
  '21': React.lazy(() => import('./Level21')),
  '24': React.lazy(() => import('./Level24')),
  '25': React.lazy(() => import('./Level25')),
  '30': React.lazy(() => import('./Level30')),
  '42': React.lazy(() => import('./Level42')),
  '50': React.lazy(() => import('./Level50')),
  '55': React.lazy(() => import('./Level55')),
  '62': React.lazy(() => import('./Level62')),
  '69': React.lazy(() => import('./Level69')),
  '72': React.lazy(() => import('./Level72')),
  '77': React.lazy(() => import('./Level77')),
  '82': React.lazy(() => import('./Level82')),
  '88': React.lazy(() => import('./Level88')),
  '99': React.lazy(() => import('./Level99')),
  '100': React.lazy(() => import('./Level100')),
  '150': React.lazy(() => import('./Level150')),
  '153': React.lazy(() => import('./Level153')),
  '155': React.lazy(() => import('./Level155')),
  '156': React.lazy(() => import('./Level156')),
  '158': React.lazy(() => import('./Level158')),
  '159': React.lazy(() => import('./Level159')),
  '160': React.lazy(() => import('./Level160')),
  '161': React.lazy(() => import('./Level161')),
  '404': React.lazy(() => import('./Level404')),
  '500': React.lazy(() => import('./Level500')),
  '999': React.lazy(() => import('./Level999')),
  '1000': React.lazy(() => import('./Level1000')),
  '1001': React.lazy(() => import('./Level1001')),
  '9999': React.lazy(() => import('./Level9999')),
  '10000': React.lazy(() => import('./Level10000')),
  '69420': React.lazy(() => import('./Level69420')),
  '100000': React.lazy(() => import('./Level100000')),
  '1000000': React.lazy(() => import('./Level1000000')),
  '10000000': React.lazy(() => import('./Level10000000')),
  '999+999i': React.lazy(() => import('./Level999plus999i')),
  'Infinity': React.lazy(() => import('./LevelInfinity')),
  '-Infinity': React.lazy(() => import('./LevelNegativeInfinity')),
  'Infinityi': React.lazy(() => import('./LevelInfinityI')),
  '-Infinityi': React.lazy(() => import('./LevelNegativeInfinityI')),
  'Infinity-Infinityi': React.lazy(() => import('./LevelPosInfinityNegInfinityI')),
  '-Infinity-Infinityi': React.lazy(() => import('./LevelNegInfinityNegInfinityI')),
  'Infinity+Infinityi': React.lazy(() => import('./LevelPosInfinityPosInfinityI')),
  '-Infinity+Infinityi': React.lazy(() => import('./LevelNegInfinityPosInfinityI')),
  'i': React.lazy(() => import('./LevelI')),
  '3i': React.lazy(() => import('./Level3I')),
  '1+1i': React.lazy(() => import('./Level1plus1i')),
  '5+5i': React.lazy(() => import('./Level5plus5i')),
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
    if (typeof level === 'number' && Object.is(level, -0)) {
      return '-0';
    }
    
    if (typeof level === 'string') {
      return level;
    }
    
    if (typeof level === 'number') {
      const negKey = level.toString();
      if (levelComponents[negKey]) {
        return negKey;
      }
      return Math.abs(level).toString();
    }
    
    if (typeof level === 'object' && 'real' in level) {
      if (level.imag === 0 && Object.is(level.real, -0)) {
        return '-0';
      }
      
      if (level.imag === 0) {
        const negKey = level.real.toString();
        if (levelComponents[negKey]) {
          return negKey;
        }
        return Math.abs(level.real).toString();
      }
      
      const key = formatComplexNumber({
        real: Math.abs(level.real),
        imag: level.imag
      });
      return key;
    }
    
    return '0';
  };

  const isNegativeLevel = isNegative(levelNumber);

  const levelKey = getLevelKey(levelNumber);

  console.log('isNegativeLevel:', isNegativeLevel);
  console.log('levelNumber:', levelNumber);
  console.log('levelKey:', levelKey);
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
        <LevelBase 
          level={levelNumber}
          theme={isNegativeLevel ? 'negative' : 'normal'}
        >
          {LevelComponent ? (
            isNegativeLevel ? (
              <NegativeLevelWrapper>
                <LevelComponent isNegative={true} />
              </NegativeLevelWrapper>
            ) : (
              <LevelComponent />
            )
          ) : (
            isNegativeLevel ? (
              <NegativeLevelWrapper>
                <NotImplementedLevel levelKey={levelKey} levelNumber={levelNumber} isNegative={true}/> 
              </NegativeLevelWrapper>
            ) : (
              <NotImplementedLevel levelKey={levelKey} levelNumber={levelNumber} />
            )
          )}
        </LevelBase>
      </React.Suspense>
    </LevelWrapper>
  );
};

export default Level; 