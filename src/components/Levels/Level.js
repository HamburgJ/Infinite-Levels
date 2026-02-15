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
  '-42': React.lazy(() => import('./LevelNeg42')),
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
  '24': React.lazy(() => import('./Level24')),
  '25': React.lazy(() => import('./Level25')),
  '27': React.lazy(() => import('./Level27')),
  '30': React.lazy(() => import('./Level30')),
  '33': React.lazy(() => import('./Level33')),
  '34': React.lazy(() => import('./Level34')),
  '37': React.lazy(() => import('./Level37')),
  '40': React.lazy(() => import('./Level40')),
  '42': React.lazy(() => import('./Level42')),
  '44': React.lazy(() => import('./Level44')),
  '50': React.lazy(() => import('./Level50')),
  '51': React.lazy(() => import('./Level51')),
  '52': React.lazy(() => import('./Level52')),
  '55': React.lazy(() => import('./Level55')),
  '60': React.lazy(() => import('./Level60')),
  '62': React.lazy(() => import('./Level62')),
  '63': React.lazy(() => import('./Level63')),
  '64': React.lazy(() => import('./Level64')),
  '66': React.lazy(() => import('./Level66')),
  '69': React.lazy(() => import('./Level69')),
  '72': React.lazy(() => import('./Level72')),
  '75': React.lazy(() => import('./Level75')),
  '77': React.lazy(() => import('./Level77')),
  '81': React.lazy(() => import('./Level81')),
  '82': React.lazy(() => import('./Level82')),
  '86': React.lazy(() => import('./Level86')),
  '88': React.lazy(() => import('./Level88')),
  '89': React.lazy(() => import('./Level89')),
  '90': React.lazy(() => import('./Level90')),
  '95': React.lazy(() => import('./Level95')),
  '97': React.lazy(() => import('./Level97')),
  '98': React.lazy(() => import('./Level98')),
  '99': React.lazy(() => import('./Level99')),
  '100': React.lazy(() => import('./Level100')),
  '101': React.lazy(() => import('./Level101')),
  '102': React.lazy(() => import('./Level102')),
  '123': React.lazy(() => import('./Level123')),
  '127': React.lazy(() => import('./Level127')),
  '128': React.lazy(() => import('./Level128')),
  '132': React.lazy(() => import('./Level132')),
  '144': React.lazy(() => import('./Level144')),
  '150': React.lazy(() => import('./Level150')),
  '153': React.lazy(() => import('./Level153')),
  '155': React.lazy(() => import('./Level155')),
  '156': React.lazy(() => import('./Level156')),
  '158': React.lazy(() => import('./Level158')),
  '159': React.lazy(() => import('./Level159')),
  '160': React.lazy(() => import('./Level160')),
  '161': React.lazy(() => import('./Level161')),
  '200': React.lazy(() => import('./Level200')),
  '201': React.lazy(() => import('./Level201')),
  '203': React.lazy(() => import('./Level203')),
  '220': React.lazy(() => import('./Level220')),
  '231': React.lazy(() => import('./Level231')),
  '233': React.lazy(() => import('./Level233')),
  '247': React.lazy(() => import('./Level247')),
  '255': React.lazy(() => import('./Level255')),
  '256': React.lazy(() => import('./Level256')),
  '284': React.lazy(() => import('./Level284')),
  '302': React.lazy(() => import('./Level302')),
  '358': React.lazy(() => import('./Level358')),
  '365': React.lazy(() => import('./Level365')),
  '377': React.lazy(() => import('./Level377')),
  '404': React.lazy(() => import('./Level404')),
  '418': React.lazy(() => import('./Level418')),
  '496': React.lazy(() => import('./Level496')),
  '500': React.lazy(() => import('./Level500')),
  '511': React.lazy(() => import('./Level511')),
  '512': React.lazy(() => import('./Level512')),
  '579': React.lazy(() => import('./Level579')),
  '610': React.lazy(() => import('./Level610')),
  '703': React.lazy(() => import('./Level703')),
  '847': React.lazy(() => import('./Level847')),
  '853': React.lazy(() => import('./Level853')),
  '987': React.lazy(() => import('./Level987')),
  '999': React.lazy(() => import('./Level999')),
  '1000': React.lazy(() => import('./Level1000')),
  '1001': React.lazy(() => import('./Level1001')),
  '1009': React.lazy(() => import('./Level1009')),
  '1023': React.lazy(() => import('./Level1023')),
  '1024': React.lazy(() => import('./Level1024')),
  '2047': React.lazy(() => import('./Level2047')),
  '4095': React.lazy(() => import('./Level4095')),
  '8191': React.lazy(() => import('./Level8191')),
  '9999': React.lazy(() => import('./Level9999')),
  '10000': React.lazy(() => import('./Level10000')),
  '16383': React.lazy(() => import('./Level16383')),
  '32767': React.lazy(() => import('./Level32767')),
  '65535': React.lazy(() => import('./Level65535')),
  '69420': React.lazy(() => import('./Level69420')),
  '3.14159': React.lazy(() => import('./LevelPi')),
  '2.718': React.lazy(() => import('./LevelE')),
  '1.618': React.lazy(() => import('./LevelPhi')),
  '1.414': React.lazy(() => import('./LevelSqrt2')),
  '0.5': React.lazy(() => import('./LevelHalf')),
  '0.25': React.lazy(() => import('./LevelQuarter')),
  '0.75': React.lazy(() => import('./LevelThreeQuarters')),
  '0.333': React.lazy(() => import('./LevelOneThird')),
  '0.666': React.lazy(() => import('./LevelTwoThirds')),
  '0.999': React.lazy(() => import('./LevelAlmost')),
  '3.52': React.lazy(() => import('./LevelDiamondWeight')),
  '0.1': React.lazy(() => import('./LevelOneTenth')),
  '1.5': React.lazy(() => import('./LevelOneAndAHalf')),
  '0.007': React.lazy(() => import('./LevelDoubleOSeven')),
  '0.2': React.lazy(() => import('./LevelOneFifth')),
  '0.125': React.lazy(() => import('./LevelOneEighth')),
  '2.5': React.lazy(() => import('./LevelTwoAndAHalf')),
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
  // ─── Complex Plane Expansion ──────────────────────────────────
  '2i': React.lazy(() => import('./Level2I')),
  '4i': React.lazy(() => import('./Level4I')),
  '5i': React.lazy(() => import('./Level5I')),
  '-i': React.lazy(() => import('./LevelNegI')),
  '2+1i': React.lazy(() => import('./Level2Plus1I')),
  '1+2i': React.lazy(() => import('./Level1Plus2I')),
  '2+2i': React.lazy(() => import('./Level2Plus2I')),
  '3+1i': React.lazy(() => import('./Level3Plus1I')),
  '1+3i': React.lazy(() => import('./Level1Plus3I')),
  '3+2i': React.lazy(() => import('./Level3Plus2I')),
  '2+3i': React.lazy(() => import('./Level2Plus3I')),
  '3+3i': React.lazy(() => import('./Level3Plus3I')),
  '5+1i': React.lazy(() => import('./Level5Plus1I')),
  '1+5i': React.lazy(() => import('./Level1Plus5I')),
  '5+3i': React.lazy(() => import('./Level5Plus3I')),
  '3+5i': React.lazy(() => import('./Level3Plus5I')),
  '-1+1i': React.lazy(() => import('./LevelNeg1Plus1I')),
  '-1-1i': React.lazy(() => import('./LevelNeg1Neg1I')),
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
    // Snap nearby decimals to registered keys (handles both truncation and extension).
    // e.g. "0.3333333333333333" (from 1/3) → "0.333", "3.14" (from "three point one four") → "3.14159"
    // Uses tolerance to avoid misleading snaps (e.g. 1/6 = 0.1666 should NOT snap to 0.1)
    const snapDecimalKey = (key) => {
      if (!key.includes('.')) return null;
      const val = parseFloat(key);
      if (!isFinite(val)) return null;
      const tolerance = Math.max(0.002, Math.abs(val) * 0.02);
      const decimalKeys = Object.keys(levelComponents).filter(k => k.includes('.'));
      let bestKey = null;
      let bestDist = Infinity;
      for (const regKey of decimalKeys) {
        const dist = Math.abs(val - parseFloat(regKey));
        if (dist < tolerance && dist < bestDist) {
          bestDist = dist;
          bestKey = regKey;
        }
      }
      return bestKey;
    };

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
      const absKey = Math.abs(level).toString();
      if (levelComponents[absKey]) return absKey;
      return snapDecimalKey(absKey) || absKey;
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
        const absKey = Math.abs(level.real).toString();
        if (levelComponents[absKey]) return absKey;
        return snapDecimalKey(absKey) || absKey;
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