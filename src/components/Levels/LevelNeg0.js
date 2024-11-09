import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { CenteredContainer, LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import { PageBackground, shimmer, refraction } from './InfinityLevelStyles';
import styled, { css, keyframes } from 'styled-components';
import NegativeLevelWrapper from '../Layout/NegativeLevelWrapper';
import { Level0Background } from './Level0';

const LevelNeg0 = () => {
    console.log("true neg 0");
  return (
    <>
      <Level0Background isNegative={true} />
      <LevelContainer>
        <NegativeLevelWrapper>
          <StyledCard>
            <Card.Body>
              <Card.Title as="h2" className="mb-4">
                <CenteredContainer>
                  <HighlightableText
                    text="Infinite Levels!"
                    size="xlarge"
                    color="#333"
                    enhanced={true}
                  />
                </CenteredContainer>
              </Card.Title>
              <Card.Text>
                <HighlightableText
                  text="Infinite Levels! is a puzzle game about exploring an infinite collection of levels."
                />
              </Card.Text>
              <Card.Text>
                <HighlightableText
                  text="To proceed to a new level, press the button that displays the level number you want to go to."
                />
              </Card.Text>
              <Card.Text>
                <HighlightableText
                  text="Each button will take you to the level it displays."
                />
              </Card.Text>
              <CenteredContainer>
                <LevelButton 
                  targetLevel={1}
                  variant="primary"
                >
                  Level 1
                </LevelButton>
              </CenteredContainer>
            </Card.Body>
          </StyledCard>
        </NegativeLevelWrapper>
      </LevelContainer>
    </>
  );
};

export default LevelNeg0; 