import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { formatLevel, parseStoredLevel } from '../../utils/complex';
import { LEVEL_CATEGORIES, getLevelCategory, getComplexColor } from '../../utils/levelCategories';

const Container = styled.div`
  background: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(218, 165, 32, 0.3)'};
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(218, 165, 32, 0.3)'};
  padding: 0 1rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(218, 165, 32, 0.3)'};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: ${props => props.active ? 
    (props.theme === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(218, 165, 32, 0.2)') : 
    'transparent'};
  color: ${props => props.disabled ? 
    (props.theme === 'dark' ? '#666' : '#999') : 
    (props.theme === 'dark' ? 'gold' : '#DAA520')};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  position: relative;
  margin-bottom: -2px;
  z-index: ${props => props.active ? 2 : 1};

  &:hover {
    background: ${props => !props.disabled && (props.theme === 'dark' ? 
      'rgba(255, 215, 0, 0.1)' : 
      'rgba(218, 165, 32, 0.1)')};
  }

  ${props => props.active && `
    background: ${props.theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
    border-bottom: 2px solid ${props.theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  `}
`;

const ContentContainer = styled.div`
  padding-top: 1.5rem;
`;

const LevelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: ${props => props.shouldScroll ? 'auto' : 'hidden'};
  padding-right: 0.5rem;
  padding-top: 0.5rem;
`;

const LevelBadge = styled.div`
  background: ${props => props.complexColor || 
    (props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
  padding: 0.5rem;
  border-radius: 8px;
  text-align: center;
  font-family: monospace;
  transition: all 0.2s ease;
  color: ${props => props.complexColor ? '#fff' : 'inherit'};
`;

const CategoryDescription = styled.div`
  color: ${props => props.theme === 'dark' ? '#999' : '#666'};
  font-style: italic;
  text-align: center;
  margin-bottom: 1rem;
  min-height: 2em;
`;

const LockedMessage = styled.div`
  color: ${props => props.theme === 'dark' ? '#666' : '#999'};
  text-align: center;
  font-style: italic;
  padding: 2rem;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const QuestionMark = styled.div`
  font-size: 3rem;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: ${props => props.theme === 'dark' ? '#444' : '#ccc'};
`;
const CATEGORY_MESSAGES = {
    INTEGERS: "Numbers as old as counting itself...",
    REALS: "Between every two numbers lies infinity...",
    COMPLEX: "Where imagination meets reality...",
    BEYOND: "Beyond the boundaries of conventional mathematics..."
  };
  
const LOCKED_MESSAGE = "Explore more distant realms to unlock this dimension...";
const VisitedLevelsDisplay = () => {
  const [activeTab, setActiveTab] = useState(LEVEL_CATEGORIES.INTEGERS);
  const theme = useSelector(state => state.theme);
  const visitedLevels = useSelector(state => state.game.visitedLevels);

  const categorizedLevels = visitedLevels.reduce((acc, level) => {
    const category = getLevelCategory(level);
    if (!acc[category]) acc[category] = [];
    acc[category].push(level);
    return acc;
  }, {});

  const shouldShowTab = (category) => categorizedLevels[category]?.length > 0;

  const sortLevels = (a, b) => {
    const levelA = parseStoredLevel(a);
    const levelB = parseStoredLevel(b);
    
    // Handle special cases like 'Demo'
    if (typeof levelA === 'string' || typeof levelB === 'string') {
      return a.localeCompare(b);
    }
    
    // Handle complex numbers
    if (typeof levelA === 'object' && typeof levelB === 'object') {
      // First compare real parts
      if (levelA.real !== levelB.real) {
        return levelA.real - levelB.real;
      }
      // If real parts are equal, compare imaginary parts
      return levelA.imag - levelB.imag;
    }
    
    // Handle simple numbers
    return Number(levelA) - Number(levelB);
  };

  return (
    <Container theme={theme}>
      <TabContainer>
        {Object.values(LEVEL_CATEGORIES).map(category => (
          <Tab
            key={category}
            active={activeTab === category}
            disabled={!shouldShowTab(category)}
            onClick={() => setActiveTab(category)}
            theme={theme}
          >
            {shouldShowTab(category) ? category : '???'}
          </Tab>
        ))}
      </TabContainer>
      
      {shouldShowTab(activeTab) ? (
        <LevelGrid shouldScroll={categorizedLevels[activeTab]?.length > 12}>
          {(categorizedLevels[activeTab] || []).sort(sortLevels).map(level => (
            <LevelBadge 
              key={level} 
              theme={theme}
              complexColor={activeTab === LEVEL_CATEGORIES.COMPLEX ? getComplexColor(level) : null}
            >
              {formatLevel(level)}
            </LevelBadge>
          ))}
        </LevelGrid>
      ) : (
        <LockedMessage theme={theme}>
          <QuestionMark theme={theme}>?</QuestionMark>
          {LOCKED_MESSAGE}
        </LockedMessage>
      )}
    </Container>
  );
};

export default VisitedLevelsDisplay; 