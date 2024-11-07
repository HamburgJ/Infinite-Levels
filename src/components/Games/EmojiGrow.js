import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import gameData from './game_data.json';

const GameContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

const ItemButton = styled.button`
  background: ${props => props.used ? '#f0f0f0' : 'white'};
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  font-size: 2rem;
  cursor: ${props => props.used ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.used ? 0.5 : 1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${props => props.used ? 'none' : 'translateY(-2px)'};
    border-color: ${props => props.used ? '#ddd' : '#aaa'};
  }
`;

const GameState = styled.div`
  text-align: center;
  font-size: 2.5rem;
  margin: 1rem 0;
  min-height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StateDescription = styled.div`
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
  text-align: center;
`;

const TryAgainButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
  
  &:hover {
    background: #45a049;
  }
`;

// Add new styled component for the controls
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 1rem 0;
`;

const ScoreDisplay = styled.div`
  text-align: right;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

// Game logic constant
const INITIAL_ITEMS = Object.keys(gameData.states['']);

const END_STATE_SCORES = {
  '∞🔢➕': 100,
  '∞➕🔢': 150,
  '➕🔢∞': 75,
};

// Add/modify these styled components
const BackButton = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #666;
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
  transition: all 0.2s;

  &:hover {
    background: #e0e0e0;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ScoreReveal = styled.div`
  font-size: 1.2rem;
  color: #4CAF50;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const EmojiGrow = () => {
  const [gameState, setGameState] = useState('');
  const [usedItems, setUsedItems] = useState([]);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);

  const isEndState = gameState in END_STATE_SCORES;

  const handleTryAgain = () => {
    setGameState('');
    setUsedItems([]);
    setHistory([]);
    setScore(0);
  };

  const handleItemClick = (item) => {
    if (usedItems.includes(item)) return;

    const currentStates = gameData.states[gameState];
    if (currentStates && currentStates[item] !== undefined) {
      const newState = currentStates[item];
      setHistory([...history, { state: gameState, used: [...usedItems] }]);
      setGameState(newState);
      setUsedItems([...usedItems, item]);
      
      // Update score based on whether it's an end state
      if (newState in END_STATE_SCORES) {
        setScore(END_STATE_SCORES[newState]);
      } else {
        setScore(score + 10);
      }
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    
    const previousState = history[history.length - 1];
    setGameState(previousState.state);
    setUsedItems(previousState.used);
    setHistory(history.slice(0, -1));
    setScore(Math.max(0, score - 5)); // Penalty for going back
  };

  return (
    <GameContainer>
      <Card>
        <Card.Body>
          <Card.Title>Emoji Garden</Card.Title>
          <GameState>
            {gameState || '🟦'}
            <StateDescription>
              {gameData.descriptions[gameState] || 'Start combining elements'}
            </StateDescription>
          </GameState>
          <Controls>
            <BackButton 
              onClick={handleBack} 
              disabled={history.length === 0}
            >
              Back
            </BackButton>
            {isEndState && <TryAgainButton onClick={handleTryAgain}>Try Again</TryAgainButton>}
          </Controls>
          <ItemGrid>
            {INITIAL_ITEMS.map((item, index) => (
              <ItemButton
                key={index}
                onClick={() => handleItemClick(item)}
                used={usedItems.includes(item)}
                disabled={isEndState}
              >
                {item}
              </ItemButton>
            ))}
          </ItemGrid>
        </Card.Body>
      </Card>
    </GameContainer>
  );
};

export default EmojiGrow; 