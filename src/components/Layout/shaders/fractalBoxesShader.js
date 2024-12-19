export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    
    vec2 rotate(vec2 p, float angle) {
      float c = cos(angle);
      float s = sin(angle);
      return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    }
    
    float sdBox(vec2 p, vec2 b) {
      vec2 d = abs(p) - b;
      return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    }
    
    vec3 palette(float t) {
      vec3 a = vec3(0.5, 0.5, 0.5);
      vec3 b = vec3(0.5, 0.5, 0.5);
      vec3 c = vec3(1.0, 1.0, 1.0);
      vec3 d = vec3(0.263, 0.416, 0.557);
      return a + b * cos(6.28318 * (c * t + d));
    }
    
    void main() {
      vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
      
      // Accumulate colors
      vec3 finalColor = vec3(0.0);
      float finalAlpha = 0.0;
      
      // Fractal parameters
      float scale = 1.0;
      float angle = iTime * 0.2;
      vec2 offset = vec2(
        cos(iTime * 0.5) * 0.2,
        sin(iTime * 0.3) * 0.2
      );
      
      // Iterate to create fractal
      for(int i = 0; i < 8; i++) {
        // Transform space
        vec2 p = uv * scale + offset;
        p = rotate(p, angle * float(i + 1));
        
        // Create shape
        float d = sdBox(p, vec2(0.5, 0.5));
        float glow = 0.02 / (abs(d) + 0.01);
        
        // Add color
        vec3 color = palette(float(i) * 0.1 + iTime * 0.1);
        finalColor += color * glow;
        finalAlpha += glow;
        
        // Modify parameters for next iteration
        scale *= 1.2;
        angle *= 1.1;
        offset *= 1.1;
      }
      
      // Normalize and apply some post-processing
      finalColor /= finalAlpha;
      finalColor = pow(finalColor, vec3(0.8)); // Gamma correction
      
      // Add some subtle pulsing
      float pulse = 1.0 + sin(iTime * 2.0) * 0.1;
      finalColor *= pulse;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
`; 