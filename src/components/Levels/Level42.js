import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import LevelButton from '../UI/LevelButton';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  video {
    width: 100%;
    border-radius: 8px;
  }
`;

const Level42 = () => {
  const videoRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true,
          audio: false 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasPermission(true);
        }
      } catch (err) {
        setError('Camera access denied or not available');
        console.error('Camera error:', err);
      }
    }

    setupCamera();

    // Cleanup
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title><HighlightableText text="Level Forty-Two" size="medium" /></Card.Title>
          <Card.Text>
            <HighlightableText text="The answer to the ultimate question of life, the universe, and everything. Douglas Adams would be proud. Though some say the real answer is closer to three point one four one five nine..." />
            <br/><br/>
            {error ? (
              <div>{error}</div>
            ) : !hasPermission ? (
              <div>Please allow camera access...</div>
            ) : (
              <VideoContainer>
                <video 
                  ref={videoRef}
                  autoPlay 
                  playsInline
                />
              </VideoContainer>
            )}
          </Card.Text>
          <CenteredContainer>
            <LevelButton targetLevel={50}>Level 50</LevelButton>
          </CenteredContainer>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
};

export default Level42;