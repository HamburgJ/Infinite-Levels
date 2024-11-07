import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { 
  TROLL_MOODS, 
  generateResponse, 
  getNextState,
  VALID_RESPONSES,
  generateStateVector,
  updateStateVector,
  getResponseStyle,
  RESPONSE_VECTORS,
  TROLL_RESPONSES 
} from './ArgumentLogic';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const TrollContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: ${props => props.mood === 'ANGRY' ? '#ffebee' : 
    props.mood === 'SCIENTIFIC' ? '#e3f2fd' :
    props.mood === 'MOCKING' ? '#fff3e0' :
    props.mood === 'DEFENSIVE' ? '#e8f5e9' : '#f5f5f5'};
  padding: 15px;
  border-radius: 10px;
  transition: background 0.3s ease;
`;

const TrollEmoji = styled.div`
  font-size: 40px;
  margin-right: 15px;
  transform: ${props => props.mood === 'ANGRY' ? 'scale(1.2)' : 
    props.mood === 'MOCKING' ? 'rotate(-10deg)' :
    props.mood === 'DEFENSIVE' ? 'translateY(-2px)' : 'none'};
  transition: transform 0.3s ease;
`;

const DialogueBox = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-family: monospace;
  font-size: 1.1rem;
  min-height: 80px;
`;

const ResponseButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const UndoButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const ResponseSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const StateIndicators = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ArgumentSimulator = () => {
  const [stateVector, setStateVector] = useState(generateStateVector());
  const [history, setHistory] = useState([]);
  
  const handleResponse = (response) => {
    const newVector = updateStateVector(stateVector, response);
    setHistory([...history, stateVector]);
    setStateVector(newVector);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setStateVector(previousState);
    setHistory(history.slice(0, -1));
  };

  const responseStyle = getResponseStyle(stateVector);
  const trollResponse = generateResponse(responseStyle);

  return (
    <Container>
      <Card>
        <Card.Body>
          <TrollContainer stateVector={stateVector}>
            <TrollEmoji stateVector={stateVector}>🧌</TrollEmoji>
            <StateIndicators vector={stateVector} />
          </TrollContainer>

          <DialogueBox>
            {trollResponse}
          </DialogueBox>

          <ResponseSection>
            {VALID_RESPONSES.map(response => (
              <ResponseButton
                key={response}
                onClick={() => handleResponse(response)}
                disabled={stateVector.consistency < 10}
              >
                {response}
              </ResponseButton>
            ))}
            <UndoButton onClick={handleUndo} disabled={history.length === 0}>
              Undo
            </UndoButton>
          </ResponseSection>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ArgumentSimulator; 