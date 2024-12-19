// Import all shaders
import { fragmentShader as hyperdimensionalShader } from './hyperdimensionalShader';
import { fragmentShader as particleFlowShader } from './particleFlowShader';
import { fragmentShader as geometricPatternsShader } from './geometricPatternsShader';
import { fragmentShader as fractalBoxesShader } from './fractalBoxesShader';
import { fragmentShader as dnaVisualizerShader } from './dnaVisualizerShader';
import { fragmentShader as sierpinskiZoomShader } from './sierpinskiZoomShader';
import { fragmentShader as organicFlowShader } from './organicFlowShader';

// Shader type enum
export const ShaderType = {
    DEFAULT: 'DEFAULT',
    WORMHOLE: 'WORMHOLE',
    HYPERDIMENSIONAL: 'HYPERDIMENSIONAL',
    PARTICLE_FLOW: 'PARTICLE_FLOW',
    GEOMETRIC_PATTERNS: 'GEOMETRIC_PATTERNS',
    FRACTAL_BOXES: 'FRACTAL_BOXES',
    DNA_VISUALIZER: 'DNA_VISUALIZER',
    SIERPINSKI_ZOOM: 'SIERPINSKI_ZOOM',
    ORGANIC_FLOW: 'ORGANIC_FLOW'
};

console.log('Shader types:', ShaderType);

// Default shaders
export const defaultVertexShader = /* glsl */`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const defaultFragmentShader = /* glsl */`
    uniform float iTime;
    uniform vec2 iResolution;
    
    void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        gl_FragColor = vec4(uv.x, uv.y, 0.5 + 0.5 * sin(iTime), 1.0);
    }
`;

console.log('Default shaders loaded');

// Export wormhole shader directly since it's special for Level20
export const wormholeFragmentShader = /* glsl */`
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec2 iMouse;
    
    #define pi 3.14159
    
    mat2 Rot(float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c);
    }
    
    vec3 pal(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
        return a + b*cos( 6.28318*(c*t+d) );
    }

    vec2 swirl(vec2 p, vec2 center, float r) {
        vec2 diff = p - center;
        float d = length(diff);
        float angle = 2.0 * pi * (1.0 - exp(-d/r));
        float c = cos(angle), s = sin(angle);
        vec2 rotated = vec2(diff.x*c - diff.y*s, diff.x*s + diff.y*c);
        return center + rotated;
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
        vec2 ms = iMouse.xy / iResolution.xy * 2.0 - 1.0;
        ms *= 0.4;
        
        vec2 swirlUv = swirl(uv, ms, 0.8);
        uv = mix(uv, swirlUv, 0.7);
        
        float A = 1.0;
        float r = 0.3;
        float th = 0.02;
        
        vec2 dir = uv - ms;
        float a = atan(dir.x, dir.y);
        float s = 0.0;
        
        float n = 5.0;
        float k = 6.0/iResolution.y;
        
        for (float i = n; i > 0.0; i--) {
            float io = A * 2.0 * pi * i / n;
            float sc = -2.0 - 0.5 * i + 1.45 * cos(io - 9.0 * length(dir) + iTime * 2.7);
            vec2 fpos = fract(sc * uv + 0.5 * i * ms) - 0.5;
            fpos *= Rot(a);
            float d = abs(fpos.x);
            s *= 0.865;
            s += step(0.0, s) * smoothstep(-k, k, -abs(d - r) + th);
        }
        
        float val = s * 0.1 + 0.72 + 0.0 * iTime - 0.23 * pow(dot(dir,dir), 0.25);
        val = clamp(val, 0.4, 1.0);
        vec3 e = vec3(1.0);
        vec3 col = 0.5 * pal(val, e, e, e, 0.24 * vec3(0.0,1.0,2.0)/3.0);
        col = smoothstep(0.0, 1.0, col);
        
        gl_FragColor = vec4(col, 1.0);
    }
`;

console.log('Wormhole shader loaded');

export const getShaderByType = (type) => {
    console.log('Getting shader for type:', type);
    switch (type) {
        case ShaderType.DEFAULT:
            return defaultFragmentShader;
        case ShaderType.WORMHOLE:
            return wormholeFragmentShader;
        case ShaderType.HYPERDIMENSIONAL:
            return hyperdimensionalShader;
        case ShaderType.PARTICLE_FLOW:
            return particleFlowShader;
        case ShaderType.GEOMETRIC_PATTERNS:
            return geometricPatternsShader;
        case ShaderType.FRACTAL_BOXES:
            return fractalBoxesShader;
        case ShaderType.DNA_VISUALIZER:
            return dnaVisualizerShader;
        case ShaderType.SIERPINSKI_ZOOM:
            return sierpinskiZoomShader;
        case ShaderType.ORGANIC_FLOW:
            return organicFlowShader;
        default:
            console.warn('Unknown shader type:', type);
            return defaultFragmentShader;
    }
}; 