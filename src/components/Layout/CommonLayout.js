import React, { useState } from 'react';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaCog, FaQuestionCircle, FaTrophy } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import ComplexBackground from './ComplexBackground';
import { formatComplexNumber, getComplexAngle } from '../../utils/complex';
import LevelHint from '../UI/LevelHint';
import AchievementsModal from '../UI/AchievementsModal';
import AchievementNotification from '../UI/AchievementNotification';
import HighlightableText from '../UI/HighlightableText';
import BaseModal from '../UI/BaseModal';
import { setCurrentLevel } from '../../store';

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
`;

const StyledNavbar = styled(Navbar)`
  position: static;
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

const SettingButton = styled(Button)`
  width: 100%;
  margin-bottom: 0.5rem;
  background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};

  &:hover {
    background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
    border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
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
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
    border-radius: 4px;
    
    &:hover {
      background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
    }
  }
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

const CommonLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const hasUnlockedAny = useSelector(state => state.achievements.hasUnlockedAny);
  const hasNewAchievements = useSelector(state => state.achievements.hasNewAchievements);
  const [showAbout, setShowAbout] = useState(false);

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

  console.log('CommonLayout rendering');
  console.log('Current level:', currentLevel);
  console.log('Theme:', getTheme());
  console.log('Children:', children);

  const formatLevel = (level) => {
    if (level === undefined || level === null) {
      return 'Level 0';
    }
    
    if (typeof level === 'string' && level.includes('Infinity')) {
      return `Level ${level.replace(/Infinity/g, '∞')}`;
    }
    
    return `Level ${formatComplexNumber(level)}`;
  };

  const getLevelNumber = (level) => {
    console.log('getLevelNumber input:', level);
    if (typeof level === 'object') {
      console.log('Complex level properties:', Object.keys(level));
    }
    return level;
  };

  const theme = getTheme();

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart the game? All progress will be lost.')) {
      dispatch(setCurrentLevel(0));
      setShowSettings(false);
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

  return (
    <PageWrapper>
      <StyledNavbar fixed="top" theme={theme}>
        <Container fluid>
          <NavbarContent>
            <BrandText theme={theme}>Level Game</BrandText>
            <LevelIndicator theme={theme}>
              <HighlightableText text={formatLevel(currentLevel)} />
            </LevelIndicator>
          </NavbarContent>
          
          <NavbarContent>
            <Nav className="d-flex align-items-center">
              {hasUnlockedAny && (
                <NavIconWrapper onClick={() => setShowAchievements(true)}>
                  <NavIcon theme={theme}>
                    <FaTrophy />
                  </NavIcon>
                  <NotificationDot show={hasNewAchievements} />
                </NavIconWrapper>
              )}
              <NavIcon theme={theme} onClick={() => setShowSettings(true)}>
                <FaCog />
              </NavIcon>
              <NavIcon theme={theme} onClick={() => setShowHelp(true)}>
                <FaQuestionCircle />
              </NavIcon>
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

      <StyledModal show={showSettings} onHide={() => setShowSettings(false)} centered theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SettingsSection>
            <h6>Game Settings</h6>
            <SettingButton theme={theme} onClick={handleRestart}>
              Restart Game
            </SettingButton>
            <SettingButton theme={theme} onClick={handleShare}>
              Share Game Info
            </SettingButton>
          </SettingsSection>

          <SettingsSection>
            <h6>About</h6>
            <AboutText theme={theme}>
              The Infinite Levels is a puzzle game exploring mathematical concepts through interactive challenges.
            </AboutText>
            <AboutText theme={theme}>
              Version 1.0.0 • © 2024
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
          <Modal.Title>Level Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LevelHint 
            level={getLevelNumber(currentLevel)}
            theme={theme}
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
    </PageWrapper>
  );
};

export default CommonLayout; 