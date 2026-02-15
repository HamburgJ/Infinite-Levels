import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled, { keyframes } from 'styled-components';

const bootFlicker = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  12% { opacity: 0; }
  14% { opacity: 1; }
  100% { opacity: 1; }
`;

const Win95Container = styled.div`
  background: #008080;
  border: 2px solid #000;
  font-family: 'MS Sans Serif', 'Arial', sans-serif;
  padding: 0;
  min-height: 300px;
  position: relative;
  animation: ${bootFlicker} 1s ease forwards;
`;

const TitleBar = styled.div`
  background: linear-gradient(90deg, #000080, #1084d0);
  color: white;
  padding: 2px 4px;
  font-size: 0.85rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: #c0c0c0;
  border: 2px outset #fff;
  font-size: 0.7rem;
  padding: 0 4px;
  cursor: pointer;
  font-weight: bold;
  &:active { border-style: inset; }
`;

const DialogBox = styled.div`
  background: #c0c0c0;
  border: 2px outset #fff;
  padding: 0;
  margin: 2rem auto;
  max-width: 400px;
  box-shadow: 2px 2px 0 #000;
`;

const DialogContent = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const DialogIcon = styled.span`
  font-size: 2rem;
`;

const DialogText = styled.div`
  font-size: 0.85rem;
  line-height: 1.4;
`;

const Win95Button = styled.button`
  background: #c0c0c0;
  border: 2px outset #fff;
  padding: 2px 20px;
  font-size: 0.85rem;
  cursor: pointer;
  margin: 0 4px;
  &:active { border-style: inset; }
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem 1rem;
  gap: 8px;
`;

const Taskbar = styled.div`
  background: #c0c0c0;
  border-top: 2px outset #fff;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StartButton = styled.button`
  background: #c0c0c0;
  border: 2px outset #fff;
  padding: 1px 8px;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:active { border-style: inset; }
`;

const StartMenu = styled.div`
  position: absolute;
  bottom: 28px;
  left: 4px;
  background: #c0c0c0;
  border: 2px outset #fff;
  min-width: 180px;
  box-shadow: 2px 2px 0 #000;
`;

const StartMenuItem = styled.div`
  padding: 4px 24px 4px 8px;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    background: #000080;
    color: white;
  }
`;

const StartMenuSidebar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 22px;
  background: linear-gradient(0deg, #000080, #1084d0);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 4px;
  letter-spacing: 1px;
`;

const TaskbarClock = styled.div`
  font-size: 0.75rem;
  border: 1px inset #999;
  padding: 1px 8px;
  margin-left: auto;
`;

const Level95 = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LevelContainer>
      <StyledCard style={{ padding: 0, overflow: 'hidden' }}>
        <Win95Container>
          <TitleBar>
            <span>Level95.exe</span>
            <CloseButton>×</CloseButton>
          </TitleBar>

          {showDialog && (
            <DialogBox>
              <TitleBar>
                <span>Level95</span>
                <CloseButton onClick={() => setShowDialog(false)}>×</CloseButton>
              </TitleBar>
              <DialogContent>
                <DialogIcon>⚠️</DialogIcon>
                <DialogText>
                  A fatal exception 0E has occurred at Level 0x005F. 
                  The current level will be terminated.
                  <br /><br />
                  Press OK to continue, or Cancel to pretend this didn't happen.
                </DialogText>
              </DialogContent>
              <ButtonBar>
                <Win95Button onClick={() => setShowDialog(false)}>OK</Win95Button>
                <Win95Button onClick={() => setShowDialog(false)}>Cancel</Win95Button>
              </ButtonBar>
            </DialogBox>
          )}

          {!showDialog && (
            <div style={{ padding: '1rem', paddingBottom: '2rem' }}>
              <Card.Text style={{ color: 'white' }}>
                <HighlightableText text="Welcome to Level Ninety-Five. The operating system of a generation." />
              </Card.Text>
              <Card.Text style={{ color: 'white' }}>
                <HighlightableText text="Click Start to navigate. Just like the old days." />
              </Card.Text>
              <CenteredContainer>
                <LevelButton targetLevel={99}>Level XCIX →</LevelButton>
              </CenteredContainer>
            </div>
          )}

          <Taskbar>
            <StartButton onClick={() => setShowStartMenu(prev => !prev)}>
              <span>🪟</span> Start
            </StartButton>
            <TaskbarClock>{time}</TaskbarClock>
          </Taskbar>

          {showStartMenu && (
            <StartMenu>
              <StartMenuSidebar>Level95</StartMenuSidebar>
              <div style={{ marginLeft: '22px' }}>
                <StartMenuItem>
                  <LevelButton targetLevel={0} variant="link" style={{ all: 'unset', cursor: 'pointer', color: 'inherit' }}>🔄 Restart (Level 0)</LevelButton>
                </StartMenuItem>
                <StartMenuItem>
                  <LevelButton targetLevel={100} variant="link" style={{ all: 'unset', cursor: 'pointer', color: 'inherit' }}>💻 My Computer (Level 100)</LevelButton>
                </StartMenuItem>
                <StartMenuItem>
                  <LevelButton targetLevel={404} variant="link" style={{ all: 'unset', cursor: 'pointer', color: 'inherit' }}>🌐 Internet Explorer (Level 404)</LevelButton>
                </StartMenuItem>
                <StartMenuItem>
                  <LevelButton targetLevel={1000} variant="link" style={{ all: 'unset', cursor: 'pointer', color: 'inherit' }}>🖧 Network (Level 1000)</LevelButton>
                </StartMenuItem>
                <hr style={{ margin: '2px 4px' }} />
                <StartMenuItem>
                  <LevelButton targetLevel={88} variant="link" style={{ all: 'unset', cursor: 'pointer', color: 'inherit' }}>⬅️ Back to 88</LevelButton>
                </StartMenuItem>
              </div>
            </StartMenu>
          )}
        </Win95Container>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level95;
