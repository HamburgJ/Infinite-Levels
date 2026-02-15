import React, { useState } from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const EquationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 24px;
`;

const OperatorButton = styled(Button)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  margin: 0 5px;
`;

const ResultDisplay = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${props => props.isCorrect ? '#d4edda' : props.showResult ? '#f8d7da' : 'transparent'};
  color: ${props => props.isCorrect ? '#155724' : props.showResult ? '#721c24' : 'inherit'};
`;

const OperatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin: 5px 0;
`;

const StyledDropdown = styled(Dropdown)`
  display: inline-block;
  .dropdown-toggle {
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Level999 = () => {
  const [operators, setOperators] = useState(['', '']);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const availableOperators = ['+', '-', '*', '/', '**'];

  const calculateResult = () => {
    if (operators.includes('')) return;
    
    try {
      // Create the expression string
      const expression = `9${operators[0]}9${operators[1]}9`;
      // Safely evaluate the expression
      const calculated = Function(`return ${expression}`)();
      setResult(calculated);
      setShowResult(true);
    } catch (error) {
      setResult('Invalid expression');
      setShowResult(true);
    }
  };

  const handleOperatorClick = (index, operator) => {
    const newOperators = [...operators];
    newOperators[index] = operator;
    setOperators(newOperators);
    setShowResult(false);
  };

  const isCorrect = result === 9999;

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Three Nines?" size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="Bask in the glory of mathematical operations. Despite the small selection of digits, through selection of operations, a variety of results are possible!" />
          </Card.Text>

          <EquationContainer>
            9
            {operators.map((op, index) => (
              <React.Fragment key={index}>
                <StyledDropdown>
                  <Dropdown.Toggle variant={op ? "primary" : "outline-primary"}>
                    {op || '?'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {availableOperators.map(operator => (
                      <Dropdown.Item 
                        key={operator}
                        onClick={() => handleOperatorClick(index, operator)}
                      >
                        {operator}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </StyledDropdown>
                9
              </React.Fragment>
            ))}
          </EquationContainer>

          <CenteredContainer>
            <Button 
              variant="primary" 
              onClick={calculateResult}
              disabled={operators.includes('')}
            >
              Calculate
            </Button>
          </CenteredContainer>
          <br/>
          <CenteredContainer>
            {showResult && (
              isCorrect 
                ? <HighlightableText text="Congratulations! You found the solution!" />
                : <HighlightableText text={`Result: ${result}`} />
            )}
          </CenteredContainer>
          <CenteredContainer>
            <LevelButton targetLevel={1000}>Level 1000</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level999;
