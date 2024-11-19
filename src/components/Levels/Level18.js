import React from 'react';
import { Card, ProgressBar, Button } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import { handleLevelCollapse } from '../../utils/levelCollapse';
import { useDispatch } from 'react-redux';
import { UnstableText } from '../../utils/levelCollapse';

const Level18 = () => {
  const dispatch = useDispatch();
  const [temporalStability, setTemporalStability] = React.useState(100);
  const [countdown, setCountdown] = React.useState(100);
  const [glitchText, setGlitchText] = React.useState('');
  const [targetLevel, setTargetLevel] = React.useState(1);
  const [isFading, setIsFading] = React.useState(false);
  const [isWarning, setIsWarning] = React.useState(false);

  const getStabilityString = (level) => {
    if (level >= 8) return 'HYPER-STABLE';
    if (level >= 6) return 'STABLE';
    if (level >= 4) return 'WARNING';
    if (level >= 2) return 'CRITICAL';
    return 'COLLAPSE IMMINENT';
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(generateGlitchText());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const levelOptions = [1, 11, 111, 1111, -1, -11, -111];
    const interval = setInterval(() => {
      setTargetLevel(levelOptions[Math.floor(Math.random() * levelOptions.length)]);
    }, Math.max(500, temporalStability * 10)); // Slower changes with higher stability

    return () => clearInterval(interval);
  }, [temporalStability]);

  React.useEffect(() => {
    if (temporalStability <= 20) {
      setIsWarning(true);
      const timer = setInterval(() => {
        setCountdown(prev => {
          const newCountdown = prev - 1;
          if (newCountdown <= 0) {
            clearInterval(timer);
            handleLevelCollapse(dispatch, { real: 18, imag: 0 }, setIsFading);
          }
          return Math.max(0, newCountdown);
        });
      }, 100);
      return () => clearInterval(timer);
    } else {
      setIsWarning(false);
      setCountdown(100);
    }
  }, [temporalStability, dispatch]);

  const generateGlitchText = () => {
    const chars = '!@#$%^&*()';
    return Array(5).fill(0).map(() => 
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  };

  const handleStabilityCheck = () => {
    setTemporalStability(prev => {
      const change = prev === 100 ? -15 : (Math.random() > 0.5 ? 10 : -15); // If 100, always decrease
      return Math.min(100, Math.max(0, prev + change));
    });
  };

  return (
    <LevelContainer>
      <StyledCard fading={isFading}>
        <Card.Body>
          <Card.Title>
            <HighlightableText text={`⚠️ TEMPORAL ANOMALY DETECTED - LEVEL ${glitchText} ⚠️`} size="medium"/>
          </Card.Title>
          
          <ProgressBar 
            now={temporalStability} 
            variant={temporalStability <= 20 ? "danger" : "info"}
            label={`Temporal Stability: ${temporalStability}%`}
            className="mb-3"
          />

          {temporalStability <= 20 && (
            <ProgressBar 
              now={countdown} 
              variant="danger"
              label={`Collapse in: ${countdown}%`}
              className="mb-3"
            />
          )}

          <UnstableText isWarning={isWarning}>
            <HighlightableText 
              text={isWarning ? "CRITICAL: TEMPORAL COLLAPSE IMMINENT" : "Status: Semi-Stable"}
            />
          </UnstableText>
          <Card.Text>
            <CenteredContainer>
              <Button
              onClick={handleStabilityCheck}
            >
              Adjust Temporal Stability
            </Button>
            </CenteredContainer>
          </Card.Text>

          <Card.Text>
            <CenteredContainer>
            <HighlightableText text="⚠️ UNSTABLE REALITY ZONE ⚠️" />
            </CenteredContainer>
            <HighlightableText text="WARNING: Level 18 has been compromised by a miasmic time rift." />
            <HighlightableText text="CAUSE: Excessive manipulation of game mechanics has created a small temporal paradox." />
            <HighlightableText text="STATUS: The level as it was originally designed exists in a state of quantum uncertainty. Reality cohesion fluctuating. To prevent firm instanciation of paradoxes, stability has been reduced." />
            <HighlightableText text="Notes: This area has been quarantined due to dangerous temporal fluctuations. Standard game physics may not apply." />
          </Card.Text>
          <CenteredContainer>

            <LevelButton 
              targetLevel={targetLevel}
            >
              Proceed to Level {targetLevel}
            </LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level18;