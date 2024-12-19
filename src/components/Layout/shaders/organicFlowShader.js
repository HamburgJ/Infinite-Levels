export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    
    // Ultra-smooth interpolation
    float smootherstep(float x) {
        x = clamp(x, 0.0, 1.0);
        return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
    }
    
    vec3 smootherstep3(vec3 x) {
        return vec3(
            smootherstep(x.x),
            smootherstep(x.y),
            smootherstep(x.z)
        );
    }
    
    // Continuous periodic function
    float cperiod(float x, float period) {
        return (1.0 - cos(x * 2.0 * PI / period)) * 0.5;
    }
    
    // Super smooth noise without discontinuities
    float smoothNoise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = smootherstep3(f);
        
        vec3 u = f * f * (3.0 - 2.0 * f);
        
        float n = i.x + i.y * 157.0 + 113.0 * i.z;
        vec4 v = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);
        
        return mix(
            mix(mix(v.x, v.y, u.x), mix(v.z, v.w, u.x), u.y),
            mix(mix(v.z, v.w, u.x), mix(v.w, v.x, u.x), u.y),
            u.z
        );
    }
    
    // Continuous FBM without sudden changes
    float fbm(vec3 p) {
        float sum = 0.0;
        float amp = 0.5;
        float freq = 1.0;
        
        // Fixed rotation matrix for consistency
        mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
        
        for(int i = 0; i < 6; i++) {
            sum += smoothNoise(p * freq) * amp;
            p.xy *= rot;
            p.yz *= rot;
            amp *= 0.5;
            freq *= 2.0;
        }
        
        return sum * 0.5 + 0.5;
    }
    
    // Continuous color shift with more variation
    vec3 colorShift(float time) {
        vec3 shift = vec3(
            cperiod(time * 0.4 + 0.0, 8.0),
            cperiod(time * 0.5 + 2.0, 7.0),
            cperiod(time * 0.6 + 4.0, 6.0)
        );
        return shift * 0.5 + 0.3;
    }
    
    // More aggressive brightness normalization
    vec3 normalizeColor(vec3 col) {
        float maxBright = max(max(col.r, col.g), col.b);
        float minBright = min(min(col.r, col.g), col.b);
        
        // Compress high values more aggressively
        if(maxBright > 0.6) {
            float factor = 0.6 + (maxBright - 0.6) * 0.3;
            col *= factor / maxBright;
        }
        
        // Ensure minimum saturation
        if(maxBright > minBright) {
            float sat = (maxBright - minBright) / maxBright;
            if(sat < 0.2) {
                col = mix(vec3(maxBright), col, 0.2 / sat);
            }
        }
        
        return clamp(col, vec3(0.1), vec3(0.7));
    }
    
    // Modified color palette with controlled range
    vec3 palette(float t, vec3 shift) {
        t = fract(t);
        t = smootherstep(t);
        
        vec3 a = vec3(0.4, 0.3, 0.3) + shift * 0.15;
        vec3 b = vec3(0.3, 0.3, 0.4) + shift * 0.1;
        vec3 c = vec3(0.6, 0.5, 0.4) + shift * 0.2;
        vec3 d = shift * 0.6;
        
        vec3 col = a + b * cos(2.0 * PI * (c * t + d));
        return normalizeColor(col);
    }
    
    // Organic distortion field
    vec2 organicDistort(vec2 p, float time) {
        vec2 dp = vec2(
            fbm(vec3(p * 1.2 + vec2(0.0, time * 0.1), time * 0.2)),
            fbm(vec3(p * 1.2 + vec2(time * 0.1, 0.0), time * 0.2))
        );
        return p + dp * 0.15;
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        float time = iTime * 0.15;
        
        // Apply organic distortion
        vec2 p = organicDistort(uv, time);
        
        // Get continuous color shift with reduced range
        vec3 shift = colorShift(time) * 0.8;
        
        // Create continuous base pattern
        float pattern = 0.0;
        
        // Flowing organic patterns with reduced intensity
        vec3 pos1 = vec3(p * 1.2, time * 0.2);
        pattern += fbm(pos1) * 0.4;
        
        // Rotating patterns
        float angle = atan(p.y, p.x);
        float radius = length(p);
        vec3 pos2 = vec3(
            radius * cos(angle + time * 0.2),
            radius * sin(angle + time * 0.2),
            time * 0.3
        );
        pattern += fbm(pos2) * 0.3;
        
        // Dynamic surface patterns
        vec3 pos3 = vec3(
            p * 1.5 + vec2(
                cperiod(time * 0.1, 1.0),
                cperiod(time * 0.15, 1.0)
            ),
            time * 0.1
        );
        pattern += fbm(pos3) * 0.2;
        
        // Create rich color layers with controlled intensity
        vec3 col = palette(pattern * 0.5 + time * 0.1, shift);
        
        // Add flowing color patterns
        float flow = fbm(vec3(p * 1.0, time * 0.2));
        vec3 flowCol = palette(flow + time * 0.15, shift);
        col = normalizeColor(mix(col, flowCol, 0.3));
        
        // Add pulsing color variations with reduced intensity
        float pulse = cperiod(time, 1.0) * 0.15 + 0.2;
        vec3 pulseColor = palette(pattern * 0.3 + time * 0.2, shift);
        col = normalizeColor(mix(col, pulseColor, smootherstep(pulse)));
        
        // Add subtle color details
        float detail = fbm(vec3(p * 2.0, time * 0.1));
        vec3 detailColor = palette(detail, shift * 0.7);
        col = normalizeColor(mix(col, detailColor, 0.15));
        
        // Final subtle enhancement without increasing brightness
        col = mix(col, col * col, 0.1);
        col = smootherstep3(col);
        col = normalizeColor(col);
        
        gl_FragColor = vec4(col, 1.0);
    }
`; 