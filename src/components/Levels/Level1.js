import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { Card } from 'react-bootstrap';
import { useAchievements } from '../../hooks/useAchievements';
import NestedAccordion from '../UI/NestedAccordion';
import LevelButton from '../UI/LevelButton';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';

const ACCORDIAN_LAYOUT = [
  [ "..."],
  [
    [
      ["..."], ["..."]
    ],
    [
      ["..."], [
        [
          ["..."], ["..."]
        ], ["..."],
        [
          ["..."], ["..."], [<CenteredContainer><LevelButton targetLevel={2}>Level 2</LevelButton></CenteredContainer>]
        ]
      ]
    ],
    [
      ["..."], ["..."],
      [
        ["..."],
        [<CenteredContainer><LevelButton targetLevel={3}>Level 3</LevelButton></CenteredContainer>],
        ["..."],
        ["..."]
      ]
    ]
  ]
];

const Level1 = () => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    unlockAchievement('LEVEL_1');
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Welcome to Level 1</Card.Title>
          <Card.Text>
            In this game, many levels contain buttons that are hidden. Buttons are never invisible or off-screen. Every button has
            a logical way to find it.
          </Card.Text>
          <Card.Text>
            Find a hidden button in this level to proceed.
          </Card.Text>
          
            <NestedAccordion data={ACCORDIAN_LAYOUT} />
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level1; 