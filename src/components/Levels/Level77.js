import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level77 = () => {
  const [roll, setRoll] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);
  const [specialEvent, setSpecialEvent] = useState('');

  const handleRoll = () => {
    const chance = Math.random();
    
    if (chance < 0.001) { // 1/1000 chance
      setRoll('landed on a corner');
      setSpecialEvent("That's pretty crazy odds, like 1 in a billion!");
    } else if (chance < 0.01) { // 1/100 chance
      setRoll('landed on its edge');
      setSpecialEvent("That's pretty crazy odds, like 1 in a million!");
    } else if (chance < 0.05) { // Additional 1/100 chance for other rare events
      const rareEvents = [
        'fell into the complex plane...',
        'floated away into space...',
        'is still rolling to this day...',
        'fell off the table...',
        'quantum tunneled through the table...',
        'transformed into a Klein bottle...',
        'achieved sentience and walked away??'
      ];
      const eventIndex = Math.floor(Math.random() * rareEvents.length);
      setRoll(rareEvents[eventIndex]);
      setSpecialEvent('');
    } else {
      setRoll(Math.floor(Math.random() * 6) + 1);
      setSpecialEvent('');
    }
    setHasRolled(true);
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`Lucky number! Roll for new level!`} size="medium"/>
          </Card.Title>
          <Card.Text>
            <HighlightableText text="77! Double sevens! That's almost a triple sevens! I wonder what triple sevens has..?" />
          </Card.Text>
          {!hasRolled && <CenteredContainer>
            <Button onClick={handleRoll} variant="primary">Roll</Button>
          </CenteredContainer>}
          {hasRolled &&<> 
              <CenteredContainer>
              <Button variant="primary" onClick={() => handleRoll()}>Roll again</Button></CenteredContainer>
              <br/>
              <CenteredContainer>
              The die {typeof roll === 'number' ? `landed on ${roll}` : roll}
              {specialEvent && <><br/>{specialEvent}</>}
              </CenteredContainer></>
            }
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level77;