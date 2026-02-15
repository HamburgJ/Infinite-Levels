import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import CollectableCard from '../Items/CollectableCard';

const ClownText = styled(Card.Text)`
  color: ${props => props.color || '#FF6B6B'};
  font-size: ${props => props.size || '1rem'};
`;

const Level159 = () => {
  const [dialogueStep, setDialogueStep] = useState(0);
  
  const dialogues = [
    {
      text: "🤡 Hey there! I'm Giggles the Clown! Want to see a magic trick?",
      options: ["Sure!", "I guess..."]
    },
    {
      text: "🎪 *pulls endless handkerchiefs from sleeve* Ta-da! Now, would you like to pick a card?",
      options: ["Okay", "If I must"]
    },
    {
      text: "🃏 *drops all cards* Oopsie! While I pick these up, want to hear a joke?",
      options: ["*sigh* Fine", "Do I have a choice?"]
    },
    {
      text: "🤡 Why did the clown go to the doctor? Because he was feeling a bit FUNNY! HONK HONK!",
      options: ["...", "Please stop"]
    },
    {
      text: "🎈 Tough crowd! Say, would you like to visit ANY level except 160?",
      options: ["No"]
    }
  ];

  const handleOption = () => {
    if (dialogueStep < dialogues.length - 1) {
      setDialogueStep(prev => prev + 1);
    }
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <CenteredContainer>
            <Card.Title>
              <HighlightableText text="Level 159 - The Clown's Proposition" size="medium"/>
            </Card.Title>
          </CenteredContainer>

          <CenteredContainer>
            <ClownText>
              <HighlightableText text={dialogues[dialogueStep].text} />
            </ClownText>
          </CenteredContainer>

          <CenteredContainer>
            {dialogueStep < dialogues.length - 1 ? (
              dialogues[dialogueStep].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline-primary"
                  className="m-2"
                  onClick={handleOption}
                >
                  {option}
                </Button>
              ))
            ) : (
              <LevelButton
                variant="outline-danger"
                targetLevel={160}
                className="m-2"
              >
                No
              </LevelButton>
            )}
          </CenteredContainer>
          {dialogueStep >= dialogues.length - 1 && (
            <CenteredContainer>
              <Card.Text>
                <HighlightableText text="🂠 While the clown fumbles with his cards, one slips out and lands at your feet..." />
              </Card.Text>
              <CollectableCard cardId="queen-hearts" />
            </CenteredContainer>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level159;
