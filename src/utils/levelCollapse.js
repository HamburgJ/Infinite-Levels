import { normalDistribution } from './mathHelpers';
import { setCurrentLevel } from '../store';
import styled from 'styled-components';

export const handleLevelCollapse = (dispatch, currentLevel, setFading, onComplete) => {
  setFading(true);
  
  setTimeout(() => {
    let realPart, imagPart;
    const targetReal = typeof currentLevel === 'object' ? currentLevel.real : currentLevel;
    const targetImag = typeof currentLevel === 'object' ? currentLevel.imag : 0;
    
    do {
      realPart = Math.abs(Math.round(normalDistribution(targetReal, 0.5)));
      // Shift distribution toward 0 by towardZero
      const towardZero = Math.abs(normalDistribution(0, 0.5)) * (targetImag == 0 ? 0 : (targetImag > 0 ? -1 : 1));
      const currentDist = Math.abs(normalDistribution(targetImag, 0.5));
      imagPart = Math.round(towardZero + currentDist);
    } while (realPart === targetReal && imagPart === targetImag);
    
    dispatch(setCurrentLevel({ real: realPart, imag: imagPart }));
  }, 1000);
}; 

export const UnstableText = styled.div`
  font-family: monospace;
  text-align: center;
  color: ${props => props.isWarning ? '#ff0000' : '#000'};
  animation: ${props => props.isWarning ? 'blink 1s infinite' : 'none'};
  margin: 1rem 0;

  @keyframes blink {
    50% { opacity: 0; }
  }
`;