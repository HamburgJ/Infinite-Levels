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
                        <HighlightableText text="Level 72 — Hyperdimensional" size="medium"/>
                    </Card.Title>
                    <Card.Text>
                        <HighlightableText text="The geometry warps here. Shapes fold into dimensions that shouldn't exist." />
                        <br/><br/>
                        <HighlightableText text="There's a number out there — multiply it by itself and you get five thousand one hundred eighty-four. The game understands equations. Try writing one." />
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </LevelContainer>
    );
};

export default Level72;