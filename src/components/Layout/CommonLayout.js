import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import styled, { keyframes, css } from 'styled-components';
import { FaCog, FaQuestionCircle, FaTrophy } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import ComplexBackground from './ComplexBackground';
import ProgressiveBackground from './ProgressiveBackground';
import { formatLevel, getComplexAngle, isNegative } from '../../utils/complex';
import LevelHint from '../UI/LevelHint';
import AchievementsModal from '../UI/AchievementsModal';
import AchievementNotification from '../UI/AchievementNotification';
import HighlightableText from '../UI/HighlightableText';
import BaseModal from '../UI/BaseModal';
import { setCurrentLevel } from '../../store';
import debugConfig from '../../config/debug';
import { clearGameState } from '../../utils/localStorage';
import { setModalClose } from '../../store/slices/modalSlice';
import achievements from '../../data/achievements';

const StyledModal = styled(BaseModal)`
  .modal-content {
    background: ${props => {
      switch (props.theme) {
        case 'dark':
          return 'rgba(0, 0, 0, 0.95)';
        case 'complex':
          return 'rgba(255, 255, 255, 0.95)';
        default:
          return 'rgba(255, 255, 255, 0.95)';
      }
    }};
    backdrop-filter: blur(10px);
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  }

  .btn-close {
    ${props => props.theme === 'dark' ? `
      filter: invert(1) grayscale(100%) brightness(200%);
    ` : ''}
  }
`;

const StyledNavbar = styled(Navbar)`
  transform: ${props => props.isNegative ? 'scaleX(-1)' : 'scaleX(1)'};
  position: fixed;
  width: 100%;
  background: ${props => {
    switch (props.theme) {
      case 'dark':
      case 'negative':
        return 'rgba(0, 0, 0, 0.9)';
      case 'complex':
        return 'rgba(255, 255, 255, 0.95)';
      default:
        return 'rgba(255, 255, 255, 0.9)';
    }
  }};
  backdrop-filter: blur(10px);
  border-bottom: 2px solid ${props => {
    switch (props.theme) {
      case 'dark':
        return 'rgba(255, 255, 255, 0.1)';
      case 'complex':
        return 'rgba(0, 0, 255, 0.1)';
      default:
        return 'rgba(0, 0, 0, 0.1)';
    }
  }};
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'rgba(255, 255, 255, 0.7)';
      case 'complex':
        return 'rgba(0, 0, 255, 0.7)';
      default:
        return 'rgba(0, 0, 0, 0.7)';
    }
  }};
  transition: color 0.2s ease;
  margin-left: 1.5rem;

  &:hover {
    color: ${props => {
      switch (props.theme) {
        case 'dark':
          return 'rgba(255, 255, 255, 0.9)';
        case 'complex':
          return 'rgba(0, 0, 255, 0.9)';
        default:
          return 'rgba(0, 0, 0, 0.9)';
      }
    }};
  }
`;

const hintPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
`;

const HintNavIcon = styled(NavIcon)`
  ${props => props.$pulsing && css`
    animation: ${hintPulse} 2s ease-in-out infinite;
    color: ${() => {
      switch (props.theme) {
        case 'dark': return 'rgba(100, 180, 255, 0.9)';
        case 'complex': return 'rgba(80, 80, 255, 0.9)';
        default: return 'rgba(0, 100, 220, 0.9)';
      }
    }};
  `}
`;

const BrandText = styled(Navbar.Brand)`
  color: ${props => {
    switch (props.theme) {
      case 'dark':
        return '#fff';
      case 'complex':
        return '#00f';
      default:
        return '#000';
    }
  }} !important;
`;

const LevelIndicator = styled.div`
  font-size: 1.1rem;
  color: ${props => {
    switch (props.theme) {
      case 'dark':
        return '#fff';
      case 'complex':
        return '#00f';
      default:
        return 'rgba(0, 0, 0, 0.7)';
    }
  }};
  margin-left: 1rem;
  padding: 0.3rem 0.8rem;
  background: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'rgba(255, 255, 255, 0.1)';
      case 'complex':
        return 'rgba(0, 0, 255, 0.1)';
      default:
        return 'rgba(0, 0, 0, 0.05)';
    }
  }};
  border-radius: 4px;
  border: 1px solid ${props => {
    switch (props.theme) {
      case 'dark':
        return 'rgba(255, 255, 255, 0.1)';
      case 'complex':
        return 'rgba(0, 0, 255, 0.1)';
      default:
        return 'rgba(0, 0, 0, 0.1)';
    }
  }};
`;

const NavIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const NotificationDot = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
  display: ${props => props.show ? 'block' : 'none'};
`;

const AchievementBadge = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  margin-left: 0.3rem;
  color: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'rgba(255, 255, 255, 0.6)';
      case 'complex':
        return 'rgba(0, 0, 255, 0.6)';
      default:
        return 'rgba(0, 0, 0, 0.6)';
    }
  }};
  vertical-align: middle;
`;

const SettingButton = styled(Button)`
  width: 100%;
  margin-bottom: 0.5rem;
  background: ${props => {
    if (props.variant === 'danger') {
      return props.theme === 'dark' ? 'rgba(220,53,69,0.1)' : 'rgba(220,53,69,0.05)';
    }
    return props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
  }};
  border: 1px solid ${props => {
    if (props.variant === 'danger') {
      return props.theme === 'dark' ? 'rgba(220,53,69,0.2)' : 'rgba(220,53,69,0.1)';
    }
    return props.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
  }};
  color: ${props => {
    if (props.variant === 'danger') {
      return '#dc3545';
    }
    return props.theme === 'dark' ? '#fff' : '#000';
  }};

  &:hover {
    background: ${props => {
      if (props.variant === 'danger') {
        return props.theme === 'dark' ? 'rgba(220,53,69,0.2)' : 'rgba(220,53,69,0.1)';
      }
      return props.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
    }};
    border: 1px solid ${props => {
      if (props.variant === 'danger') {
        return props.theme === 'dark' ? 'rgba(220,53,69,0.3)' : 'rgba(220,53,69,0.2)';
      }
      return props.theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';
    }};
    color: ${props => {
      if (props.variant === 'danger') {
        return '#dc3545';
      }
      return props.theme === 'dark' ? '#fff' : '#000';
    }};
  }
`;

const SettingsSection = styled.div`
  margin-bottom: 1.5rem;

  h6 {
    margin-bottom: 1rem;
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  }
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SettingLabel = styled.label`
  font-weight: bold;
`;

const SettingValue = styled.div`
  margin-left: 1rem;
`;

const HighlightableSettingText = styled(HighlightableText)`
  font-weight: bold;
`;

const AboutSection = styled.div`
  margin-bottom: 1.5rem;
`;

const AboutTitle = styled.h5`
  margin-bottom: 1rem;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
`;

const AboutText = styled.p`
  margin: 0.5rem 0;
  color: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'};
  font-size: 0.9rem;
`;

const AboutList = styled.ul`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'};
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);
  
  /* Hide scrollbar while keeping the code for future reference */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
`;

const LevelInput = styled.input`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  padding: 8px;
  border: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 4px;
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  backdrop-filter: blur(10px);
  z-index: 1000;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  }
`;

const CommonLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [levelInput, setLevelInput] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const hasUnlockedAny = useSelector(state => state.achievements.hasUnlockedAny);
  const hasNewAchievements = useSelector(state => state.achievements.hasNewAchievements);
  const achievementCount = useSelector(state => Object.keys(state.achievements.achievements).length);
  const [showAbout, setShowAbout] = useState(false);
  const openModals = useSelector(state => state.modal.openModals);
  const [hintPulsing, setHintPulsing] = useState(false);
  const stuckTimerRef = useRef(null);

  const ENABLE_LEVEL_INPUT = debugConfig.isDebugMode && debugConfig.debugFeatures.enableLevelInput;

  const handleLevelInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.trim();
      
      // Handle infinity cases
      if (value.toLowerCase().includes('infinity')) {
        dispatch(setCurrentLevel(value));
        setLevelInput('');
        return;
      }
      
      // Handle complex numbers (e.g., "1+2i")
      const complexMatch = value.match(/^(-?\d+)?([-+]\d*i)?$/);
      if (complexMatch) {
        const real = complexMatch[1] ? parseFloat(complexMatch[1]) : 0;
        const imagMatch = complexMatch[2]?.match(/([+-])(\d*)i/);
        const imag = imagMatch 
          ? (imagMatch[2] ? parseFloat(imagMatch[1] + imagMatch[2]) : (imagMatch[1] === '+' ? 1 : -1))
          : 0;
        
        dispatch(setCurrentLevel({ real, imag }));
        setLevelInput('');
        return;
      }
      
      // Handle regular numbers
      const num = parseFloat(value);
      if (!isNaN(num)) {
        dispatch(setCurrentLevel(num));
        setLevelInput('');
      }
    }
  };

  const getTheme = () => {
    // Handle string-based infinity levels
    if (typeof currentLevel === 'string' && currentLevel.includes('Infinity')) {
      return 'dark';
      if (currentLevel.startsWith('-')) {
        return 'negative';
      }
      if (currentLevel.endsWith('i')) {
        return 'complex';
      }
      return 'dark';
    }
    
    // Handle real numbers
    if (typeof currentLevel === 'number') {
      if (currentLevel < 0) {
        return 'dark';
      }
      return 'light';
    }
    
    // Handle complex numbers
    const angle = getComplexAngle(currentLevel);
    if (angle === 0) return 'light';
    if (Math.abs(angle) === Math.PI) return 'dark';
    return 'complex';
  };

  const theme = getTheme();

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart the game? All progress will be lost.')) {
      clearGameState();
      window.location.reload();
    }
  };

  const handleShare = () => {
    const gameInfo = {
      level: currentLevel,
      achievements: 'List of achievements...' // Add actual achievements data here
    };
    
    navigator.clipboard.writeText(JSON.stringify(gameInfo, null, 2))
      .then(() => alert('Game info copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  };

  // Add effect to close help modal when level changes
  useEffect(() => {
    setShowHelp(false);
  }, [currentLevel]);

  // Pulse the hint icon when player has been on the same level for 60+ seconds
  useEffect(() => {
    setHintPulsing(false);
    if (stuckTimerRef.current) clearTimeout(stuckTimerRef.current);
    stuckTimerRef.current = setTimeout(() => setHintPulsing(true), 60000);
    return () => { if (stuckTimerRef.current) clearTimeout(stuckTimerRef.current); };
  }, [currentLevel]);
  console.log('current level', currentLevel);
  console.log('open modals', openModals);
  return (
    <PageWrapper>
      
      <StyledNavbar fixed="top" theme={theme} isNegative={isNegative(currentLevel)}>
        <Container fluid>
          <NavbarContent>
            <BrandText theme={theme}>
              <HighlightableText 
                text="Infinite Levels!" 
                achievement={achievements.TITLE_TEXT}
                
              />
            </BrandText>
            <LevelIndicator theme={theme}>
              <HighlightableText 
                text={"Level " + formatLevel(currentLevel)} 
                achievement={achievements.LEVEL_TEXT}
                size="small"
              />
            </LevelIndicator>
          </NavbarContent>
          
          <NavbarContent>
            <Nav className="d-flex align-items-center">
              {hasUnlockedAny && (
                <NavIconWrapper onClick={() => setShowAchievements(true)}>
                  <NavIcon theme={theme}>
                    <FaTrophy />
                    <AchievementBadge theme={theme}>{achievementCount}</AchievementBadge>
                  </NavIcon>
                  <NotificationDot show={hasNewAchievements} />
                </NavIconWrapper>
              )}
              <NavIcon theme={theme} onClick={() => setShowSettings(true)}>
                <FaCog />
              </NavIcon>
              <HintNavIcon theme={theme} $pulsing={hintPulsing} onClick={() => { setShowHelp(true); setHintPulsing(false); }}>
                <FaQuestionCircle />
              </HintNavIcon>
            </Nav>
          </NavbarContent>
        </Container>
      </StyledNavbar>
      <MainContent theme={theme}>
        {children}
      </MainContent>
      <AchievementsModal show={showAchievements} onHide={() => setShowAchievements(false)} theme={theme} />
      <AchievementNotification theme={theme} />
      <ComplexBackground />
      <ProgressiveBackground />

      <StyledModal show={showSettings} onHide={() => setShowSettings(false)} centered theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>
            <HighlightableText 
              text="Settings" 
              achievement={achievements.SETTINGS_TEXT}
              size="medium"
              onLevelChange={() => setShowSettings(false)}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SettingsSection>
            <h6>
              <HighlightableText 
                text="Game Settings"
                achievement={achievements.SETTINGS_TEXT}
                onLevelChange={() => setShowSettings(false)}
              />
            </h6>
            <SettingButton theme={theme} onClick={handleRestart} variant="danger">
              <HighlightableText text="Restart Game" onLevelChange={() => setShowSettings(false)} />
            </SettingButton>
          </SettingsSection>

          <SettingsSection>
            <HighlightableText 
              text="This game is still in development. Find a bug or have a suggestion? Please let me know!"
              achievement={achievements.SETTINGS_TEXT}
              onLevelChange={() => setShowSettings(false)}
            />
            <AboutText theme={theme}>
              <HighlightableText 
                text="Beta Version 0.0.1"
                achievement={achievements.SETTINGS_TEXT}
                onLevelChange={() => setShowSettings(false)}
              />
            </AboutText>
          </SettingsSection>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSettings(false)}>
            Close
          </Button>
        </Modal.Footer>
      </StyledModal>

      <StyledModal show={showHelp} onHide={() => setShowHelp(false)} centered theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>
            <HighlightableText 
              text="Level Hint" 
              size="medium" 
              achievement={achievements.HINT_TEXT} 
              onLevelChange={() => setShowHelp(false)}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LevelHint 
            levelNumber={formatLevel(currentLevel)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant={theme === 'dark' ? 'light' : theme === 'complex' ? 'primary' : 'secondary'} 
            onClick={() => setShowHelp(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </StyledModal>



      {ENABLE_LEVEL_INPUT && (
        <LevelInput
          type="text"
          value={levelInput}
          onChange={(e) => setLevelInput(e.target.value)}
          onKeyPress={handleLevelInputKeyPress}
          placeholder="Go to..."
          theme={theme}
        />
      )}
    </PageWrapper>
  );
};

export default CommonLayout; 