import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import HighlightableText from '../UI/HighlightableText';
import { LevelContainer as BaseContainer } from './styles/CommonLevelStyles';

const InvertedLevelContainer = styled(BaseContainer)`
  transform: scaleY(-1); // Invert the entire level!
`;

const StyledCard = styled(Card)`
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: white;
`;

const InvertedText = styled.div`
  transform: scaleY(-1);
`;

const Level14 = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(markMechanicDiscovered('negativeNumbers'));
  }, [dispatch]);

  return (
    <InvertedLevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <InvertedText>
              <HighlightableText text="Level 14 - Negative Space" size="medium"/>
            </InvertedText>
          </Card.Title>
          <Card.Text>
          <InvertedText>
              <HighlightableText text="These levels are similar to the positive numbered levels, but have a strange inversion to their properties..." />
            </InvertedText>
            <InvertedText>
              <HighlightableText text="Did you know? There are also negative numbered levels..." />
            </InvertedText>
           
          </Card.Text>
          <Card.Text>
            <InvertedText>
              <HighlightableText text="Not all treasures are on the positive side. Something valuable lies at the very start of the negative world... at level negative zero." />
            </InvertedText>
          </Card.Text>
          
          <div className="d-flex justify-content-center flex-wrap">
            <LevelButton targetLevel={-1} variant="light">
              Level -1
            </LevelButton>
            <LevelButton targetLevel={-5} variant="light">
              Level -5
            </LevelButton>
            <LevelButton targetLevel={-14} variant="light">
              Level -14
            </LevelButton>
          </div>
        </Card.Body>
      </StyledCard>
    </InvertedLevelContainer>
  );
};

export default Level14; 