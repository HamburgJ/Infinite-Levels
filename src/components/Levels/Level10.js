import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel, markMechanicDiscovered } from '../../store';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { useAchievements } from '../../hooks/useAchievements';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import AchievementShrine from '../UI/AchievementShrine';
import ChangeMachineButton from '../UI/ChangeMachineButton';
import NumberEntry from '../UI/NumberEntry';
import HighlightableText from '../UI/HighlightableText';
import { TutorialCallout, SuccessMessage } from '../UI/Feedback';
import { fonts, colors, radii } from '../../styles/theme';

const StyledListItem = styled(ListGroup.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
`;

const textPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0px rgba(37, 99, 235, 0); }
  50% { box-shadow: 0 0 10px rgba(37, 99, 235, 0.3); }
`;

const ClickableHighlight = styled.div`
  display: inline;
  padding: 2px 4px;
  border-radius: 4px;
  animation: ${props => props.$active ? textPulse : 'none'} 2.5s ease-in-out infinite;
`;

const Level10 = () => {
  const [hasSelectedNumber, setHasSelectedNumber] = useState(false);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <ClickableHighlight $active={!hasSelectedNumber}>
              <HighlightableText text="Congratulations! You've completed the first 10 levels!" size="medium"/>
            </ClickableHighlight>
          </Card.Title>
          <Card.Text>
            <HighlightableText
              text="If you haven't visited all ten, don't worry — they'll still be there when you circle back. Here's what you've learned so far:"
            />
          </Card.Text>
          <ListGroup>
            <StyledListItem>
              <HighlightableText text="Levels 0-3: " />
              <em><HighlightableText text="Buttons and Hints" /></em>
            </StyledListItem>
            <StyledListItem>
              <HighlightableText text="Levels 4-6: " />
              <em><HighlightableText text="Achievements and Items" /></em>
            </StyledListItem>
            <StyledListItem>
              <HighlightableText text="Level 7: " />
              <em><HighlightableText text="Everything Is a Button" /></em>
            </StyledListItem>
            <StyledListItem>
              <HighlightableText text="Level 8: " />
              <em><HighlightableText text="Numbers Are Everywhere" /></em>
            </StyledListItem>
            <StyledListItem>
              <HighlightableText text="Level 9: " />
              <em><HighlightableText text="Secrets" /></em>
            </StyledListItem>
          </ListGroup>

          {!hasSelectedNumber ? (
            <TutorialCallout>
              <HighlightableText
                text="👆 Try it now: click on the word 'ten' above (or any number on this page) to travel to that level!"
                onLevelChange={() => setHasSelectedNumber(true)}
              />
            </TutorialCallout>
          ) : (
            <SuccessMessage>
              🎉 You got it! Clicking on number-words is how you'll discover most new levels from here on. This is the most powerful mechanic in the game — every page is full of hidden paths.
            </SuccessMessage>
          )}

          <Card.Text>
            <HighlightableText
              text="From here on out, finding new levels will be more difficult!"
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="The paths forward are less obvious from here. The hint system knows things you don't — use it. And keep your eyes open."
            />
          </Card.Text>
          <Card.Text>
            <HighlightableText
              text="One more thing: the text on every page is more interactive than it looks. Try selecting words — you might be surprised what happens."
            />
          </Card.Text>  
          <ListGroup variant="flush">
            <StyledListItem>
              🔄 Return to Level 0 and revisit the beginning
              <LevelButton targetLevel={0} >
                Level 0
              </LevelButton>
            </StyledListItem>
            {hasSelectedNumber && (
              <StyledListItem>
                🌍 Travel forth
                <LevelButton targetLevel={11} >
                  Level 11
                </LevelButton>
              </StyledListItem>
            )}
          </ListGroup>
          <AchievementShrine requiredCount={9} shrineLevel="10" teaserText="Go anywhere. Type any number."> {/* 9 needed*/}
            <CenteredContainer>
              <ChangeMachineButton />
            </CenteredContainer>
            <Card.Text>
              <HighlightableText text="You've proven yourself worthy. Here's a direct line to any level — just type a number." />
            </Card.Text>
            <CenteredContainer>
              <NumberEntry placeholder="Level #" maxLength={8} allowNegative={true} />
            </CenteredContainer>
          </AchievementShrine>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level10;