import React, { useState } from 'react';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaCog, FaQuestionCircle, FaTrophy } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ComplexBackground from './ComplexBackground';
import { formatComplexNumber, getComplexAngle } from '../../utils/complex';
import LevelHint from '../UI/LevelHint';
import AchievementsModal from '../UI/AchievementsModal';
import AchievementNotification from '../UI/AchievementNotification';
import HighlightableText from '../UI/HighlightableText';
import BaseModal from '../UI/BaseModal';

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
  background: ${props => {
    switch (props.theme) {
      case 'dark':
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

const CommonLayout = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const hasUnlockedAny = useSelector(state => state.achievements.hasUnlockedAny);
  const hasNewAchievements = useSelector(state => state.achievements.hasNewAchievements);
  
  const getTheme = () => {
    // Handle real numbers
    if (typeof currentLevel === 'number') {
      if (currentLevel < 0) {
        return 'dark';
      }
      return 'light';
    }
    
    // Handle complex numbers
    const angle = getComplexAngle(currentLevel);
    
    // Check if complex number is actually real (angle is 0 or PI)
    if (angle === 0) {
      return 'light';
    }
    if (Math.abs(angle) === Math.PI) {
      return 'dark';
    }
    
    return 'complex';
  };

  const theme = getTheme();

  return (
    <>
      <StyledNavbar fixed="top" theme={theme}>
        <Container fluid>
          <NavbarContent>
            <BrandText theme={theme}>Level Game</BrandText>
            <LevelIndicator theme={theme}>
              <HighlightableText text={`Level ${formatComplexNumber(currentLevel)}`} />
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
      <AchievementsModal show={showAchievements} onHide={() => setShowAchievements(false)} theme={theme} />
      <AchievementNotification theme={theme} />
      <ComplexBackground />

      <StyledModal show={showSettings} onHide={() => setShowSettings(false)} centered theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Game Settings</h5>
          <p>Settings options will go here...</p>
          {/* Add your settings controls here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSettings(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowSettings(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </StyledModal>

      <StyledModal show={showHelp} onHide={() => setShowHelp(false)} centered theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title>Level Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LevelHint 
            level={typeof currentLevel === 'number' ? currentLevel : currentLevel.real} 
            theme={theme}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant={
              theme === 'dark' ? 'light' : 
              theme === 'complex' ? 'primary' : 
              'secondary'
            } 
            onClick={() => setShowHelp(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </StyledModal>

      {children}
    </>
  );
};

export default CommonLayout; 