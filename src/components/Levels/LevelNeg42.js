import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import CollectableCard from '../Items/CollectableCard';
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';

const LevelNeg42 = () => {
  return (
    <LevelContainer isNegative={true}>
      <NegativeLevelWrapper>
        <StyledCard>
          <Card.Body>
            <Card.Title>
              <HighlightableText text="Level -42 — The Shadow of the Answer" size="medium"/>
            </Card.Title>
            <Card.Text>
              <HighlightableText
                text="In the shadow of the answer, the question persists. If forty-two is the answer to life, the universe, and everything... then negative forty-two is the question nobody thought to ask."
              />
            </Card.Text>
            <Card.Text>
              <HighlightableText
                text="In the shadow of the answer, a diamond glints."
              />
            </Card.Text>
            <CenteredContainer>
              <CollectableCard cardId="ace-diamonds" />
            </CenteredContainer>
            <CenteredContainer>
              <LevelButton targetLevel={-0}>Level -0</LevelButton>
              <LevelButton targetLevel={42}>Level 42</LevelButton>
            </CenteredContainer>
          </Card.Body>
        </StyledCard>
      </NegativeLevelWrapper>
    </LevelContainer>
  );
};

export default LevelNeg42;
