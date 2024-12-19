import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, ThreeBackgroundWrapper } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import ThreeBackground from '../Layout/ThreeBackground';
import { ShaderType } from '../Layout/shaders';

const Level96 = () => {
    return (
        <LevelContainer>
            <ThreeBackgroundWrapper>
                <ThreeBackground shaderType={ShaderType.DNA_VISUALIZER} />
            </ThreeBackgroundWrapper>
            <StyledCard>
                <Card.Body>
                    <Card.Title>
                        <HighlightableText text="Level 96" size="medium"/>
                    </Card.Title>
                    <Card.Text>
                        <HighlightableText text="DNA visualization patterns." />
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </LevelContainer>
    );
};

export default Level96;