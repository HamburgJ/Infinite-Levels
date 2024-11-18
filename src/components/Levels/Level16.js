import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px 0;
`;

const GridCell = styled.div`
  background: ${props => props.value ? '#d4af37' : '#ffffff'};
  border: 2px solid #d4af37;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${props => !props.value && 'scale(1.05)'};
    box-shadow: ${props => !props.value && '0 0 10px rgba(212, 175, 55, 0.5)'};
  }
`;

const ScoreDisplay = styled.div`
  font-size: 1.2rem;
  color: #d4af37;
  text-align: center;
  margin: 10px 0;
`;

const Level16 = () => {
  const [grid, setGrid] = useState(Array(16).fill(null));
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    // Initialize grid with two random cells
    addRandomNumber();
    addRandomNumber();
  }, []);

  const addRandomNumber = () => {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      const emptyIndices = newGrid.map((cell, index) => cell === null ? index : null).filter(idx => idx !== null);
      
      if (emptyIndices.length > 0) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newGrid[randomIndex] = 2;
      }
      
      return newGrid;
    });
  };

  const handleCellClick = (index) => {
    if (gameWon) return;
    
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      if (!newGrid[index]) {
        newGrid[index] = 2;
        setScore(prev => prev + 2);
        
        // Check for matching adjacent cells
        const row = Math.floor(index / 4);
        const col = index % 4;
        const adjacentIndices = [
          row > 0 ? index - 4 : null,           // up
          row < 3 ? index + 4 : null,           // down
          col > 0 ? index - 1 : null,           // left
          col < 3 ? index + 1 : null            // right
        ].filter(idx => idx !== null);

        let merged = false;
        adjacentIndices.forEach(adjIndex => {
          if (newGrid[adjIndex] === newGrid[index]) {
            newGrid[adjIndex] = newGrid[index] * 2;
            newGrid[index] = null;
            setScore(prev => prev + newGrid[adjIndex]);
            merged = true;
            
            if (newGrid[adjIndex] === 16) {
              setGameWon(true);
            }
          }
        });

        if (!merged) {
          addRandomNumber();
        }
      }
      return newGrid;
    });
  };

  const resetGame = () => {
    setGrid(Array(16).fill(null));
    setScore(0);
    setGameWon(false);
    setTimeout(() => {
      addRandomNumber();
      addRandomNumber();
    }, 100);
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <CenteredContainer>
            <Card.Title>
              <HighlightableText text="Level 16 - Powers of 2" size="medium"/>
            </Card.Title>
          </CenteredContainer>

          <CenteredContainer>
            <Card.Text>
              <HighlightableText text={
                gameWon 
                  ? "🎉 Congratulations! You've mastered the power of 2^4!" 
                  : "Click empty cells to place 2's. Match adjacent numbers to combine them!"
              }/>
            </Card.Text>
          </CenteredContainer>

          <ScoreDisplay>Score: {score}</ScoreDisplay>

          <GridContainer>
            {grid.map((value, index) => (
              <GridCell 
                key={index} 
                value={value}
                onClick={() => handleCellClick(index)}
              >
                {value || ''}
              </GridCell>
            ))}
          </GridContainer>

          <CenteredContainer>
            <Button 
              variant="outline-primary" 
              onClick={resetGame}
              className="m-2"
            >
              Reset Grid
            </Button>

            {gameWon && (
              <LevelButton
                variant="outline-success"
                target
              >
                Next Level
              </LevelButton>
            )}
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level16;