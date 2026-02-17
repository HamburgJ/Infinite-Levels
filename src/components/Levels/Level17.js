import React, { useRef, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';
import CollectableCard from '../Items/CollectableCard';
import Scale from '../Storage/Scale';

const PreparationText = ({ children }) => {
  const [dots, setDots] = React.useState('.');
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <span>{children}{dots}</span>;
};

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
  const visitedLevels = useSelector(state => state.game.visitedLevels || []);
  const hasVisitedBefore = visitedLevels.includes('17+0i');

  const [selectedDrink, setSelectedDrink] = React.useState(null);
  const [drinkEmoji, setDrinkEmoji] = React.useState('');
  const [jamesPresent, setJamesPresent] = React.useState(true);
  const [sparkles, setSparkles] = React.useState('✨');
  const drinkTimerRef = useRef(null);

  // Clean up drink timer on unmount
  useEffect(() => {
    return () => {
      if (drinkTimerRef.current) clearTimeout(drinkTimerRef.current);
    };
  }, []);
  
  const refreshments = [
    {name: "Sparkling Water", emoji: "💧"},
    {name: "Hot Coffee", emoji: "☕"}, 
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => prev === '✨' ? '⭐' : '✨');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDrinkOrder = (drink) => {
    setSelectedDrink(drink.name);
    setJamesPresent(false);
    
    // 5 seconds on revisit, 7 seconds on first visit
    const waitTime = hasVisitedBefore ? 5000 : 7000;
    drinkTimerRef.current = setTimeout(() => {
      setDrinkEmoji(drink.emoji);
      setJamesPresent(true);
    }, waitTime);
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
                    <HighlightableText text={hasVisitedBefore 
                      ? `Welcome back! 🤵 The usual, perhaps?`
                      : `Good evening, I'm James 🤵. May I offer you a refreshment? We have an excellent selection today.`} />
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
                    <HighlightableText text={hasVisitedBefore 
                      ? "James nods and steps away briefly..."
                      : "James has gone to prepare your drink"} />
                    {!hasVisitedBefore && <PreparationText />}
                  </Card.Text>
                  {!hasVisitedBefore && (
                    <Card.Text style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem' }}>
                      <em>🤵 A good drink takes a moment to prepare properly.</em>
                    </Card.Text>
                  )}
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

          {[10, 14, 15, 16, 18, 19, 20].map((i) => (
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
              <HighlightableText text={`🤵 A little something for your trouble. The Seven of Diamonds — the first of many, if you know where to look.`} />
            </Card.Text>
            <MemoizedCollectableCard cardId="17" value={7} suit="diamonds"/>
          </JamesContainer>

          <JamesContainer>
            <Card.Text>
              <HighlightableText text={`🤵 May I offer you our precision weighing service? Place any item on the scale, and the weight itself becomes a destination.`} />
            </Card.Text>
            <CenteredContainer>
              <Scale />
            </CenteredContainer>
          </JamesContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level17;