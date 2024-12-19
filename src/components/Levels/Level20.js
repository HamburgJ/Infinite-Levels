import React, { useCallback } from 'react';
import { useAchievements } from '../../hooks/useAchievements';
import { LevelContainer, StyledCard, ThreeBackgroundWrapper } from './styles/CommonLevelStyles';
import { Card } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';
import ThreeBackground from '../Layout/ThreeBackground';
import { ShaderType } from '../Layout/shaders';
import * as THREE from 'three';

const Level20 = () => {
  const { unlockAchievement } = useAchievements();

  const handleInit = useCallback(({ shaderMaterial, clock }) => {
    unlockAchievement('LEVEL_20');
    console.log('Level20 initialized with shader:', shaderMaterial.fragmentShader);

    function updatePoint() {
      const elapsedTime = clock.getElapsedTime();
      const radius = 0.3;
      const speed = 1.2;
      const x = Math.cos(elapsedTime * speed) * radius;
      const y = Math.sin(elapsedTime * speed * 1.5) * radius;
      
      shaderMaterial.uniforms.iMouse.value.set(
        (x + 1) * window.innerWidth / 2,
        (y + 1) * window.innerHeight / 2
      );
    }

    shaderMaterial.onBeforeRender = updatePoint;
  }, [unlockAchievement]);

  return (
    <LevelContainer>
      <ThreeBackgroundWrapper>
        <ThreeBackground
          shaderType={ShaderType.WORMHOLE}
          uniforms={{
            iMouse: { value: new THREE.Vector2(0.5, 0.5) }
          }}
          onInit={handleInit}
        />
      </ThreeBackgroundWrapper>
      <StyledCard>
        <Card.Body>
          <Card.Title>
            <HighlightableText text="Level Wormhole" size="medium"/>
          </Card.Title>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level20;