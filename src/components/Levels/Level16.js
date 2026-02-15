import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const Level16 = () => {
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <CenteredContainer>
            <Card.Title>
              <HighlightableText text="WARNING LOW STABILITY DETECTED NEARBY" size="medium"/>
            </Card.Title>
          </CenteredContainer>

          <CenteredContainer>
            <Card.Text>
              <HighlightableText text=
        
                  "Congratulations on making it to level 16! Low stability has been detected in a nearby level along the real axis! Unstable levels tend to have strange properties and can proliferate anomalies to surrounding levels. For safety, please grab a refreshment from level 17."
              
              />
            </Card.Text>
          </CenteredContainer>
          <CenteredContainer>
              <LevelButton
                targetLevel={17}
              >
                Level 17
              </LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level16;