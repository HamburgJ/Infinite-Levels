import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { formatComplexNumber, isNegative } from '../../utils/complex';
import { useAchievements } from '../../hooks/useAchievements';
import { useBacktrackingAchievement } from '../../hooks/useBacktrackingAchievement';
import { Button } from 'react-bootstrap';
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';

const LevelWrapper = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
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
  '-13': React.lazy(() => import('./LevelNeg13')),
  '14': React.lazy(() => import('./Level14')),
  '15': React.lazy(() => import('./Level15')),
  '16': React.lazy(() => import('./Level16')),
  '17': React.lazy(() => import('./Level17')),
  '18': React.lazy(() => import('./Level18')),
  '19': React.lazy(() => import('./Level19')),
  '20': React.lazy(() => import('./Level20')),
  '21': React.lazy(() => import('./Level21')),
  '22': React.lazy(() => import('./Level22')),
  '23': React.lazy(() => import('./Level23')),
  '24': React.lazy(() => import('./Level24')),
  '25': React.lazy(() => import('./Level25')),
  '26': React.lazy(() => import('./Level26')),
  '27': React.lazy(() => import('./Level27')),
  '28': React.lazy(() => import('./Level28')),
  '29': React.lazy(() => import('./Level29')),
  '30': React.lazy(() => import('./Level30')),
  '31': React.lazy(() => import('./Level31')),
  '32': React.lazy(() => import('./Level32')),
  '33': React.lazy(() => import('./Level33')),
  '34': React.lazy(() => import('./Level34')),
  '35': React.lazy(() => import('./Level35')),
  '36': React.lazy(() => import('./Level36')),
  '37': React.lazy(() => import('./Level37')),
  '38': React.lazy(() => import('./Level38')),
  '39': React.lazy(() => import('./Level39')),
  '40': React.lazy(() => import('./Level40')),
  '41': React.lazy(() => import('./Level41')),
  '42': React.lazy(() => import('./Level42')),
  '43': React.lazy(() => import('./Level43')),
  '44': React.lazy(() => import('./Level44')),
  '45': React.lazy(() => import('./Level45')),
  '46': React.lazy(() => import('./Level46')),
  '47': React.lazy(() => import('./Level47')),
  '48': React.lazy(() => import('./Level48')),
  '49': React.lazy(() => import('./Level49')),
  '50': React.lazy(() => import('./Level50')),
  '51': React.lazy(() => import('./Level51')),
  '52': React.lazy(() => import('./Level52')),
  '53': React.lazy(() => import('./Level53')),
  '54': React.lazy(() => import('./Level54')),
  '55': React.lazy(() => import('./Level55')),
  '56': React.lazy(() => import('./Level56')),
  '57': React.lazy(() => import('./Level57')),
  '58': React.lazy(() => import('./Level58')),
  '59': React.lazy(() => import('./Level59')),
  '60': React.lazy(() => import('./Level60')),
  '61': React.lazy(() => import('./Level61')),
  '62': React.lazy(() => import('./Level62')),
  '63': React.lazy(() => import('./Level63')),
  '64': React.lazy(() => import('./Level64')),
  '65': React.lazy(() => import('./Level65')),
  '66': React.lazy(() => import('./Level66')),
  '67': React.lazy(() => import('./Level67')),
  '68': React.lazy(() => import('./Level68')),
  '69': React.lazy(() => import('./Level69')),
  '70': React.lazy(() => import('./Level70')),
  '71': React.lazy(() => import('./Level71')),
  '72': React.lazy(() => import('./Level72')),
  '73': React.lazy(() => import('./Level73')),
  '74': React.lazy(() => import('./Level74')),
  '75': React.lazy(() => import('./Level75')),
  '76': React.lazy(() => import('./Level76')),
  '77': React.lazy(() => import('./Level77')),
  '78': React.lazy(() => import('./Level78')),
  '79': React.lazy(() => import('./Level79')),
  '80': React.lazy(() => import('./Level80')),
  '81': React.lazy(() => import('./Level81')),
  '82': React.lazy(() => import('./Level82')),
  '83': React.lazy(() => import('./Level83')),
  '84': React.lazy(() => import('./Level84')),
  '85': React.lazy(() => import('./Level85')),
  '86': React.lazy(() => import('./Level86')),
  '87': React.lazy(() => import('./Level87')),
  '88': React.lazy(() => import('./Level88')),
  '89': React.lazy(() => import('./Level89')),
  '90': React.lazy(() => import('./Level90')),
  '91': React.lazy(() => import('./Level91')),
  '92': React.lazy(() => import('./Level92')),
  '93': React.lazy(() => import('./Level93')),
  '94': React.lazy(() => import('./Level94')),
  '95': React.lazy(() => import('./Level95')),
  '96': React.lazy(() => import('./Level96')),
  '97': React.lazy(() => import('./Level97')),
  '98': React.lazy(() => import('./Level98')),
  '99': React.lazy(() => import('./Level99')),
  '100': React.lazy(() => import('./Level100')),
  '404': React.lazy(() => import('./Level404')),
  '1000': React.lazy(() => import('./Level1000')),
  '1001': React.lazy(() => import('./Level1001')),
  '69420': React.lazy(() => import('./Level69420')),
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
    if (typeof level === 'number' && Object.is(level, -0)) {
      return '0';
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
        return '0';
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
        {LevelComponent ? (
          isNegativeLevel ? (
            <NegativeLevelWrapper>
              <LevelComponent isNegative={true} />
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