import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { colors, shadows, radii, transitions, fonts } from '../../../styles/theme';
import { slideUp } from '../../../styles/animations';

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
  background: ${colors.surface};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: ${radii.lg};
  box-shadow: ${shadows.medium};
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 100%;
  margin: 1rem;
  height: fit-content;
  animation: ${slideUp} 0.4s ease-out;
  transition: box-shadow ${transitions.normal};

  &:hover {
    box-shadow: ${shadows.strong};
  }
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
  font-family: ${fonts.display};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: inherit;
  letter-spacing: 0.5px;
`;

export const ThreeBackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;