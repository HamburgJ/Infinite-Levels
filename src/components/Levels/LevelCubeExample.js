import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import Cube from '../Layout/Cube';

const LevelContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FaceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Level1 = () => {
  const dispatch = useDispatch();

  const faces = {
    front: (
      <FaceContent>
        <h2>Find the button...</h2>
      </FaceContent>
    ),
    back: (
      <FaceContent>
        <h2>Keep looking...</h2>
      </FaceContent>
    ),
    right: (
      <FaceContent>
        <h2>Almost there...</h2>
      </FaceContent>
    ),
    left: (
      <FaceContent>
        <button onClick={() => dispatch(setCurrentLevel(2))}>2</button>
      </FaceContent>
    ),
    top: (
      <FaceContent>
        <h2>Not here...</h2>
      </FaceContent>
    ),
    bottom: (
      <FaceContent>
        <h2>Try another side</h2>
      </FaceContent>
    )
  };

  return (
    <LevelContainer>
      <Cube faces={faces} />
    </LevelContainer>
  );
};

export default Level1; 