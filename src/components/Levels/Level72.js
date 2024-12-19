import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, ThreeBackgroundWrapper } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import ThreeBackground from '../Layout/ThreeBackground';
import { ShaderType } from '../Layout/shaders';

const Level72 = () => {
    return (
        <LevelContainer>
            <ThreeBackgroundWrapper>
                <ThreeBackground shaderType={ShaderType.HYPERDIMENSIONAL} />
            </ThreeBackgroundWrapper>
            <StyledCard>
                <Card.Body>
                    <Card.Title>
                        <HighlightableText text="Level 72" size="medium"/>
                    </Card.Title>
                    <Card.Text>
                        <HighlightableText text="Hyperdimensional space." />
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </LevelContainer>
    );
};

export default Level72;