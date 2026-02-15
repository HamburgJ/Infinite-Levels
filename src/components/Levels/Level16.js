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
        
                  "Something went wrong on a nearby level. The instability is leaking outward — you can almost feel it humming through the walls. The best thing you can do right now is keep moving. Level seventeen is safe."
              
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