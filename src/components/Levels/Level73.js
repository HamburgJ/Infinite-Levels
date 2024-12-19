import React from 'react';
import { Card } from 'react-bootstrap';
import { LevelContainer, StyledCard, ThreeBackgroundWrapper } from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';
import ThreeBackground from '../Layout/ThreeBackground';
import { ShaderType } from '../Layout/shaders';

const Level73 = () => {
    return (
        <LevelContainer>
            <ThreeBackgroundWrapper>
                <ThreeBackground shaderType={ShaderType.PARTICLE_FLOW} />
            </ThreeBackgroundWrapper>
            <StyledCard>
                <Card.Body>
                    <Card.Title>
                        <HighlightableText text="Level 73" size="medium"/>
                    </Card.Title>
                    <Card.Text>
                        <HighlightableText text="Flowing particles." />
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </LevelContainer>
    );
};

export default Level73;