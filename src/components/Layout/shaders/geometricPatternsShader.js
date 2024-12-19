export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    
    // Sharp step function for crisp edges
    float sharpStep(float edge, float x) {
        float width = length(vec2(dFdx(x), dFdy(x))) * 0.5;
        return smoothstep(edge - width, edge + width, x);
    }
    
    // Looping time functions
    float loopTime(float t, float length) {
        return mod(t, length);
    }
    
    float smoothLoop(float t, float length) {
        float lt = loopTime(t, length);
        return lt + smoothstep(length - 0.2, length, lt) * -lt;
    }
    
    // Modified warping functions for smooth loops
    vec2 sinWarp(vec2 p, float time, float freq, float amp) {
        float t = smoothLoop(time, PI * 2.0);
        return p + vec2(
            sin(p.y * freq + t) * amp,
            cos(p.x * freq + t) * amp
        );
    }
    
    vec2 spiralWarp(vec2 p, float time) {
        float t = smoothLoop(time, PI * 2.0);
        float angle = atan(p.y, p.x);
        float radius = length(p);
        float warp = sin(radius * 4.0 - t) * 0.1;
        return p * (1.0 + warp);
    }
    
    vec2 vortexWarp(vec2 p, float time) {
        float t = smoothLoop(time, PI * 4.0);
        float angle = atan(p.y, p.x);
        float radius = length(p);
        angle += radius * sin(t * 0.5) * 2.0;
        return vec2(
            radius * cos(angle),
            radius * sin(angle)
        );
    }
    
    // Geometric patterns with dynamic warping
    float lines(vec2 p, float scale, float time) {
        p = sinWarp(p, time * 0.5, 3.0, 0.1);
        p *= scale;
        return sharpStep(0.5, abs(fract(p.x + p.y) - 0.5));
    }
    
    float grid(vec2 p, float scale, float time) {
        p = spiralWarp(p, time);
        p *= scale;
        vec2 fp = abs(fract(p) - 0.5);
        return sharpStep(0.05, min(fp.x, fp.y));
    }
    
    float triangles(vec2 p, float scale, float time) {
        p = vortexWarp(p, time);
        p *= scale;
        vec2 fp = fract(p) - 0.5;
        float d = abs(fp.x) + abs(fp.y);
        return sharpStep(0.7, d);
    }
    
    // Rotation matrix
    mat2 rot2D(float angle) {
        float s = sin(angle), c = cos(angle);
        return mat2(c, -s, s, c);
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        float time = iTime * 0.2;
        
        // Layer 1: Base grid with spiral warp
        vec2 p1 = uv;
        p1 = spiralWarp(p1, time * 0.7);
        float pattern = grid(p1, 4.0, time);
        
        // Layer 2: Rotating lines with sine warp
        vec2 p2 = uv * rot2D(smoothLoop(time * 0.3, PI * 2.0));
        p2 = sinWarp(p2, time, 2.0, 0.2);
        float lines1 = lines(p2, 5.0, time * 0.8);
        pattern = mix(pattern, lines1, 0.4);
        
        // Layer 3: Moving triangles with vortex warp
        vec2 p3 = uv;
        p3 = vortexWarp(p3, time * 0.5);
        p3.x += sin(smoothLoop(time * 0.3, PI * 2.0) + p3.y * 2.0) * 0.2;
        float tris = triangles(p3, 3.0, time);
        pattern = mix(pattern, tris, 0.3);
        
        // Layer 4: Diagonal lines with combined warping
        vec2 p4 = uv * rot2D(PI * 0.25);
        p4 = sinWarp(p4, time * 0.4, 1.0, 0.1);
        p4 = spiralWarp(p4, time * 0.3);
        float diagonals = lines(p4, 20.0, time * 0.5);
        pattern = mix(pattern, diagonals, 0.2);
        
        // Layer 5: Additional flowing grid
        vec2 p5 = uv * rot2D(smoothLoop(time * 0.1, PI * 2.0));
        p5 = vortexWarp(p5, time * 0.2);
        float flowGrid = grid(p5, 8.0, time * 0.3);
        pattern = mix(pattern, flowGrid, 0.15);
        
        // Create sharp contrast between white and grey
        vec3 col = mix(vec3(0.2), vec3(0.95), pattern);
        
        // Add depth layers with dynamic warping
        float depth = 0.0;
        vec2 dp = sinWarp(uv, time * 0.6, 4.0, 0.05);
        depth += grid(dp * 2.0, 8.0, time * 0.4) * 0.1;
        
        vec2 dp2 = spiralWarp(uv, time * 0.3);
        depth += lines(dp2 * rot2D(smoothLoop(time * -0.2, PI * 2.0)), 10.0, time * 0.5) * 0.05;
        
        // Apply depth to darken some areas
        col *= 1.0 - depth;
        
        // Add subtle highlight lines with warping
        vec2 hp = vortexWarp(uv, time * 0.4);
        float highlight = lines(hp * rot2D(smoothLoop(time * 0.1, PI * 2.0)), 15.0, time * 0.7) * 0.05;
        col += vec3(highlight);
        
        // Ensure we stay in grey-scale range
        col = clamp(col, vec3(0.15), vec3(0.95));
        
        gl_FragColor = vec4(col, 1.0);
    }
`; 