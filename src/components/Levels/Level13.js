import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card, Form, Button } from 'react-bootstrap';

const LevelContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

const MathInput = styled(Form.Control)`
  max-width: 100px;
  margin: 0 0.5rem;
  text-align: center;
  display: inline-block;
`;

const Level13 = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const [operation, setOperation] = useState('2x');

  React.useEffect(() => {
    dispatch(markMechanicDiscovered('mathTransforms'));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputNum = parseInt(number, 10);
    
    if (operation === '2x') {
      dispatch(setCurrentLevel(inputNum * 2));
    } else if (operation === '÷2') {
      dispatch(setCurrentLevel(inputNum / 2));
    } else if (operation === '+i') {
      dispatch(setCurrentLevel({ real: inputNum, imag: 1 }));
    }
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level 13 - Mathematical Transformations</Card.Title>
          <Card.Text>
            You can transform level numbers using mathematical operations!
          </Card.Text>
          
          <Form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center">
            <Form.Select 
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              style={{ width: 'auto' }}
            >
              <option value="2x">×2</option>
              <option value="÷2">÷2</option>
              <option value="+i">+i</option>
            </Form.Select>
            
            <MathInput
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Level"
            />
            
            <Button type="submit" variant="outline-dark">
              Transform
            </Button>
          </Form>

          <Card.Text className="text-muted mt-4">
            Try multiplying a level number by 2, or adding an imaginary component!
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level13; 