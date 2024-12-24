import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const LevelContainer = styled.div`
  position: fixed;
  top: 64px; /* Navbar height */
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: overlay;
  overflow-x: hidden;
  className: level-container;
  min-height: calc(100vh - 64px);
`;

export const StyledCard = styled(Card)`
  color: inherit;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 100%;
  margin: 1rem;
  height: fit-content;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  > * {
    margin: 20px 0;
    align-self: center;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: inherit;
`;

export const ThreeBackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;