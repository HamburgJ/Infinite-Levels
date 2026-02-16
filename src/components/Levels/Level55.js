import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { useAchievements } from '../../hooks/useAchievements';
import styled from 'styled-components';

const Balloon = styled.div`
  width: 60px;
  height: 80px;
  background: #ff6b6b;
  border-radius: 50%;
  position: relative;
  margin: 30px auto;
  cursor: pointer;
  
  &:before {
    content: '';
    width: 2px;
    height: 30px;
    background: #666;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Level55 = () => {
  const [isPopped, setIsPopped] = useState(false);
  const { unlockAchievement } = useAchievements();

  const handlePop = () => {
    setIsPopped(true);
    unlockAchievement('PARTY_POOPER');
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Say It Out Loud" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Words don't just mean things. They SOUND like things. And in this game, sounds can take you places." />
            <br/><br/>
            <HighlightableText text="For instance: What if you ATE some food? What if you went on a journey FOR knowledge? What if someone WON a prize? What about a TREE in the forest?" />
            <br/><br/>
            <HighlightableText text="Try highlighting those words. You might be surprised where they take you." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="And have you tried going HALF way? Not every level is a whole number. Sometimes the most interesting places are between the integers." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Please don't pop this balloon. It's very special to me." />
          </Card.Text>
          {!isPopped && <Balloon onClick={handlePop} />}
          {isPopped && (
            <Card.Text style={{ color: '#666', fontStyle: 'italic', marginTop: '20px' }}>
              <HighlightableText text="*sigh* I really wish you hadn't done that..." />
            </Card.Text>
          )}
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level55;