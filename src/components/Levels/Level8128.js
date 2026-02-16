import React from 'react';
import { Card } from 'react-bootstrap';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import { useAchievements } from '../../hooks/useAchievements';

const Level8128 = () => {
  const { unlockAchievement } = useAchievements();

  React.useEffect(() => {
    unlockAchievement('PERFECT_VISITOR');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="The Fourth Perfect Number" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="Eight thousand one hundred twenty-eight. A perfect number — equal to the sum of its proper divisors. Like 6, like 28, like 496. But rarer. The gaps between perfect numbers grow vast." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="The proper divisors of 8128: 1, 2, 4, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064. Add them all. You get 8128. The number contains itself." />
          </Card.Text>
          <Card.Text>
            <HighlightableText text="Every even perfect number follows Euclid's formula: two raised to p minus one, multiplied by two to the p minus one. For 8128, p is seven. Whether odd perfect numbers exist is one of math's oldest open questions." />
          </Card.Text>
          <Card.Text style={{ fontStyle: 'italic', opacity: 0.7 }}>
            <HighlightableText text="You've now visited the fourth perfect number. The previous three live at six, twenty-eight, and four hundred ninety-six. The next? Thirty-three million, five hundred fifty thousand, three hundred thirty-six. Good luck." />
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={6174}>← Level 6174</LevelButton>
            <LevelButton targetLevel={496}>Level 496</LevelButton>
            <LevelButton targetLevel={9999}>Level 9999</LevelButton>
            <LevelButton targetLevel={10000}>Level 10,000 →</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level8128;
