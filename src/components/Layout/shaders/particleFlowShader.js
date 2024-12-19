export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    
    // Fast hash without sine
    float hash(float n) {
        n = fract(n * 8.1234567);
        n *= (n + 33.33);
        return fract(n * n);
    }
    
    // Optimized color wheel
    vec3 colorWheel(float angle) {
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.0, 0.33, 0.67);
        
        angle = mod(angle, 2.0 * PI) / (2.0 * PI);
        
        return a + b * cos(6.28318 * (c * angle + d));
    }
    
    // Fast 3D value noise
    float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = i.x + i.y * 157.0 + 113.0 * i.z;
        vec4 v1 = fract(vec4(n) * vec4(0.1031, 0.103, 0.0973, 0.1099));
        vec4 v2 = fract(vec4(n + 157.0) * vec4(0.1031, 0.103, 0.0973, 0.1099));
        
        float x1 = mix(v1.x, v1.y, f.x);
        float x2 = mix(v2.x, v2.y, f.x);
        return mix(x1, x2, f.y);
    }
    
    // Optimized FBM with fewer octaves
    float fbm(vec3 p) {
        float sum = 0.0;
        float amp = 0.5;
        p *= 2.0; // Scale up base frequency
        
        for(int i = 0; i < 3; i++) { // Reduced from 6 to 3 octaves
            sum += noise(p) * amp;
            amp *= 0.5;
            p *= 2.0;
            p.xy *= mat2(0.8, 0.6, -0.6, 0.8);
        }
        
        return sum;
    }
    
    // Simplified particle field
    float particleField(vec3 p) {
        float time = iTime * 0.2;
        
        // Single rotation for optimization
        p.xz *= mat2(cos(time), sin(time), -sin(time), cos(time));
        
        // Single layer of particles with optimized movement
        vec3 movement = vec3(
            fbm(p * 0.5 + time * 0.3),
            fbm(p * 0.4 - time * 0.2),
            fbm(p * 0.6 + time * 0.4)
        );
        
        p += movement * 1.5;
        return fbm(p * 2.5) * 0.8;
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        float time = iTime * 0.2;
        
        // Optimized ray setup
        vec3 ro = vec3(0.0, 0.0, -3.0);
        vec3 rd = normalize(vec3(uv, 2.0));
        
        // Optimized ray march with fewer steps
        float t = 0.0;
        float density = 0.0;
        
        for(int i = 0; i < 32; i++) { // Reduced from 64 to 32 steps
            vec3 p = ro + rd * t;
            
            // Simplified density accumulation
            float particles = particleField(p);
            density += particles * 0.15;
            
            t += 0.2; // Fixed step size for better performance
            if(t > 6.0) break;
        }
        
        // Dynamic color calculation
        float angle = atan(uv.y, uv.x) + time;
        angle += sin(length(uv) * 3.0 - time) * 0.3;
        vec3 baseColor = colorWheel(angle);
        
        // Simplified secondary color
        vec3 secondColor = colorWheel(angle + PI * 0.5);
        baseColor = mix(baseColor, secondColor, 0.3);
        
        // Enhanced color output
        vec3 col = baseColor * density * 2.5;
        col += baseColor * exp(-density * 2.0) * 0.3;
        
        // Fast tone mapping
        col = col / (1.0 + col);
        
        gl_FragColor = vec4(col, 1.0);
    }
`; 