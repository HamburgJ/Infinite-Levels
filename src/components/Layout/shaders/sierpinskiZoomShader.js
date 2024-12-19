export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    
    // Optimized hash function for randomization
    float hash(float n) {
        return fract(sin(n) * 43758.5453123);
    }
    
    // Vivid color transitions without white
    vec3 rainbow(float t) {
        vec3 c = 0.6 + 0.1 * cos(PI * 2.0 * (t + vec3(0.0, 0.33, 0.67)));
        return c * vec3(0.9, 0.5, 0.8); // Ensure colors stay vivid
    }
    
    // Psychedelic color palette with no white/black
    vec3 psychedelic(float t) {
        vec3 a = vec3(0.6, 0.4, 0.5);  // Raised base colors
        vec3 b = vec3(0.4, 0.5, 0.4);  // More color variation
        vec3 c = vec3(1.5, 1.2, 1.0);  // Faster color cycling
        vec3 d = vec3(0.2, 0.4, 0.3);  // Color offset for vibrancy
        return 0.6 + 0.4 * cos(2.0 * PI * (c * t + d)); // Keep colors in vivid range
    }
    
    // Sierpinski triangle distance function
    float sierpinski(vec2 p, float scale) {
        const int iterations = 8;
        float r = 2.0;
        
        p *= scale;
        float d = 0.0;
        
        for(int i = 0; i < iterations; i++) {
            // Rotate point with varying speed
            float angle = iTime * 0.2 + float(i) * 0.1;
            p *= mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            
            // Fold space
            p.x = abs(p.x);
            p.y = abs(p.y);
            
            // Dynamic rotation
            if(p.y > p.x) p = p.yx;
            
            // Scale and translate with more variation
            p -= 1.0 + 0.1 * sin(iTime * 0.3);
            p *= r;
            
            // Track distance for coloring with more detail
            d += length(p) * pow(r, float(-i)) * (1.0 + 0.2 * sin(iTime + float(i)));
        }
        
        return d;
    }
    
    // Zoom cycle function
    float getZoomCycle(float t) {
        float cycleLength = 10.0; // Length of one complete out-in cycle
        float normalizedTime = mod(t, cycleLength) / cycleLength;
        
        // First half of cycle: zoom out exponentially
        // Second half: zoom back in
        if(normalizedTime < 0.5) {
            float zoomOut = normalizedTime * 2.0; // 0 to 1
            return exp(zoomOut * 4.0); // Exponential zoom out
        } else {
            float zoomIn = (normalizedTime - 0.5) * 2.0; // 0 to 1
            return exp(4.0 * (1.0 - zoomIn)); // Smooth zoom in from max
        }
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        
        // Dynamic zoom parameters with new cycle
        float time = iTime * 0.3;
        float zoom = getZoomCycle(time);
        
        // Calculate vertex to zoom towards with smoother transitions
        float vertexTime = floor(time * 0.2);
        float vertexBlend = smoothstep(0.0, 1.0, fract(time * 0.2));
        float vertexAngle = PI * 2.0 * (hash(vertexTime) + vertexBlend);
        vec2 zoomTarget = vec2(cos(vertexAngle), sin(vertexAngle)) * 0.5;
        
        // Apply zoom transformation with enhanced distortion based on zoom level
        vec2 p = uv;
        float distortionAmount = 0.02 / (zoom * 0.5 + 0.5); // Distortion reduces with zoom
        p += distortionAmount * vec2(sin(p.y * 4.0 + time), cos(p.x * 4.0 + time));
        p = (p - zoomTarget) * zoom + zoomTarget;
        
        // Get fractal distance
        float d = sierpinski(p, 1.0);
        
        // Create vivid color layers
        vec3 col = rainbow(d * 0.15 + time * 0.2); // Start with vibrant base
        
        // Layer multiple color effects
        vec3 color1 = rainbow(d * 0.1 + time);
        vec3 color2 = psychedelic(d * 0.2 - time * 0.5);
        vec3 color3 = rainbow(d * 0.05 - time * 0.3);
        
        // Dynamic color mixing
        float mix1 = sin(d * 8.0 + time * 2.0) * 0.5 + 0.5;
        float mix2 = cos(d * 6.0 - time * 1.5) * 0.5 + 0.5;
        
        // Combine colors ensuring vibrancy
        col = mix(color1, color2, mix1);
        col = mix(col, color3, mix2 * 0.5);
        
        // Add flowing color waves
        col += rainbow(length(p) * 0.2 - time * 0.3) * 0.3;
        
        // Add pulsing patterns
        float pulse = sin(time * 2.0) * 0.5 + 0.5;
        col = mix(col, rainbow(d * 0.3 + time * 0.7), pulse * 0.3);
        
        // Ensure colors stay vivid
        col = clamp(col, vec3(0.2), vec3(0.95));
        col = pow(col, vec3(0.9)); // Slight contrast without losing saturation
        
        gl_FragColor = vec4(col, 1.0);
    }
`; 