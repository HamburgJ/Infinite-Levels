import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';
import CollectableCard from '../Items/CollectableCard';

const JamesContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #d4af37;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const MemoizedCollectableCard = React.memo(CollectableCard);

const Level17 = () => {
  const [selectedDrink, setSelectedDrink] = React.useState(null);
  const [drinkEmoji, setDrinkEmoji] = React.useState('');
  const [jamesPresent, setJamesPresent] = React.useState(true);
  const [sparkles, setSparkles] = React.useState('✨');
  
  const refreshments = [
    {name: "Sparkling Water", emoji: "💧"},
    {name: "Hot Coffee", emoji: "☕"}, 
  ];

  React.useEffect(() => {
    // Fancy sparkle animation
    const interval = setInterval(() => {
      setSparkles(prev => prev === '✨' ? '⭐' : '✨');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDrinkOrder = (drink) => {
    setSelectedDrink(drink.name);
    setJamesPresent(false);
    
    setTimeout(() => {
      setDrinkEmoji(drink.emoji);
      setJamesPresent(true);
    }, 30000);
  };

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <CenteredContainer>
            <Card.Title>
              <HighlightableText text={`${sparkles} Level 17 - VIP Lounge ${sparkles}`} size="medium"/>
            </Card.Title>
          </CenteredContainer>
          
          <CenteredContainer>
            <Card.Text>
              <HighlightableText text="Welcome to Level 17, our most exclusive level. Your personal butler James is here to serve you." />
            </Card.Text>
          </CenteredContainer>
          <br/>
          <JamesContainer>
            {jamesPresent && !selectedDrink && (
              
                <CenteredContainer>
                  <Card.Text>
                    <HighlightableText text={`Good evening, I'm James 🤵. May I offer you a refreshment? We have an excellent selection today.`} />
                  </Card.Text>
                </CenteredContainer>
              
            )}

            {!selectedDrink && refreshments.map(drink => (
              <CenteredContainer key={drink.name}>
                <Button 
                  variant="outline-primary" 
                  className="m-1"
                  onClick={() => handleDrinkOrder(drink)}
                >
                  {drink.name} {drink.emoji}
                </Button>
              </CenteredContainer>
            ))}

            {!jamesPresent && selectedDrink && (
            
                <CenteredContainer>
                  <Card.Text>
                    <HighlightableText text="James has gone to prepare your drink..." />
                  </Card.Text>
                </CenteredContainer>
          
            )}

            {jamesPresent && selectedDrink && (
          
                <CenteredContainer>
                  <Card.Text>
                    <HighlightableText text={`"Here is your ${selectedDrink} ${drinkEmoji}, served at the perfect temperature. Please enjoy." - James 🤵`} />
                  </Card.Text>
                </CenteredContainer>
            
            )}
          </JamesContainer>

          <br/>
          <CenteredContainer>
            <Card.Text>
              <HighlightableText text="While you enjoy your drink, perhaps you'd like to visit another level?" />
            </Card.Text>
          </CenteredContainer>
          <br/>

          {[...Array(21)].map((_, i) => (
            <CenteredContainer key={i}>
              <LevelButton
                variant="outline-dark"
                className="m-1"
                targetLevel={i}
              >
                {sparkles} Level {i} {sparkles}
              </LevelButton>
            </CenteredContainer>
          ))}

          <JamesContainer>
            <Card.Text>
              <HighlightableText text={`🤵 As a complimentary gift for visiting today, please enjoy the 7 of Diamonds!`} />
            </Card.Text>
            <MemoizedCollectableCard cardId="17" value={7} suit="diamonds"/>
          </JamesContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level17;