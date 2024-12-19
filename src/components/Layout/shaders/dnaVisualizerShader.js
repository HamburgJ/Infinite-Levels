export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    #define MAX_STEPS 100
    #define MAX_DIST 100.0
    #define SURF_DIST 0.001
    
    mat2 rot2D(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
    }
    
    // Optimized noise function
    float hash(vec3 p) {
        p = fract(p * 0.3183099 + .1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }
    
    float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
            mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    }
    
    vec3 palette(float t) {
        vec3 a = vec3(0.2, 0.2, 0.3);
        vec3 b = vec3(0.2, 0.2, 0.2);
        vec3 c = vec3(2.0, 1.0, 0.5);
        vec3 d = vec3(0.20, 0.25, 0.35);
        return a + b * cos(2.0 * PI * (c * t + d));
    }
    
    // Optimized DNA structure
    float sdDNA(vec3 p) {
        float time = iTime * 0.3;
        float helix = MAX_DIST;
        
        vec3 pp = p;
        pp.xz *= rot2D(pp.y * 0.5 + time);
        
        float radius = 2.0 + sin(pp.y * 0.5 + time) * 0.5;
        float d = length(pp.xz) - radius;
        float y = mod(pp.y * 2.0 + time * 2.0, 4.0) - 2.0;
        helix = length(vec2(d, y)) - 0.2;
        
        return helix;
    }
    
    // Optimized particle field
    float particleField(vec3 p) {
        vec3 pp = p;
        float field = 0.0;
        
        // Reduced iterations for better performance
        for(int i = 0; i < 2; i++) {
            float scale = 1.0 + float(i) * 0.7;
            pp = p * scale;
            
            pp.xz *= rot2D(iTime * (0.1 + float(i) * 0.05));
            pp.xy *= rot2D(iTime * (0.15 + float(i) * 0.05));
            
            pp += noise(pp * 2.0 + iTime * 0.2) * 0.3;
            
            vec3 id = floor(pp + 0.5);
            vec3 local = fract(pp + 0.5) - 0.5;
            
            float particle = length(local) - (0.05 + sin(iTime + hash(id) * 10.0) * 0.02);
            
            float dna = sdDNA(p);
            particle += 0.05 * sin(dna * 5.0 + iTime);
            
            field += particle / (scale * 2.0);
        }
        
        return field;
    }
    
    float sceneSDF(vec3 p) {
        return min(sdDNA(p), particleField(p));
    }
    
    vec3 getNormal(vec3 p) {
        float d = sceneSDF(p);
        vec2 e = vec2(0.001, 0.0);
        vec3 n = d - vec3(
            sceneSDF(p - e.xyy),
            sceneSDF(p - e.yxy),
            sceneSDF(p - e.yyx)
        );
        return normalize(n);
    }
    
    // Optimized ray marching with adaptive step size
    float rayMarch(vec3 ro, vec3 rd) {
        float d0 = 0.0;
        float dS = 0.0;
        
        for(int i = 0; i < MAX_STEPS; i++) {
            vec3 p = ro + d0 * rd;
            dS = sceneSDF(p);
            d0 += dS * 0.7; // Larger steps for faster convergence
            if(abs(dS) < SURF_DIST || d0 > MAX_DIST) break;
        }
        
        return d0;
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        
        float camTime = iTime * 0.2;
        vec3 ro = vec3(cos(camTime) * 8.0, sin(camTime * 0.5) * 3.0, sin(camTime) * 8.0);
        vec3 lookAt = vec3(0.0);
        
        vec3 forward = normalize(lookAt - ro);
        vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), forward));
        vec3 up = cross(forward, right);
        vec3 rd = normalize(forward + right * uv.x + up * uv.y);
        
        float d = rayMarch(ro, rd);
        vec3 p = ro + rd * d;
        
        vec3 col = vec3(0.01);
        
        if(d < MAX_DIST) {
            vec3 n = getNormal(p);
            vec3 lightDir = normalize(vec3(2.0, 4.0, -3.0) - p);
            
            float diff = max(0.0, dot(n, lightDir)) * 0.3;
            float spec = pow(max(0.0, dot(reflect(-lightDir, n), -rd)), 32.0) * 0.2;
            float rim = pow(1.0 - max(0.0, dot(n, -rd)), 4.0) * 0.1;
            
            vec3 baseColor = palette(length(p) * 0.1 + iTime * 0.1);
            baseColor *= 0.5;
            baseColor += palette(dot(n, vec3(1.0)) * 0.3 + iTime * 0.2) * 0.3;
            
            float fluid = noise(p * 2.0 + iTime * 0.2);
            baseColor *= 0.8 + fluid * 0.4;
            
            col = baseColor * (diff + 0.1) + spec + rim;
        }
        
        // Optimized volumetric particles with fewer steps
        float particleDepth = 0.0;
        vec3 particlePos = ro;
        
        for(int i = 0; i < 4; i++) {
            particleDepth += 2.0; // Larger steps
            particlePos += rd * 2.0;
            
            float particles = particleField(particlePos);
            float glow = exp(-particles * 3.0) * 0.03;
            
            vec3 particleColor = palette(particles + iTime * 0.2 + float(i) * 0.1);
            col += particleColor * glow * (1.0 - particleDepth / 8.0);
        }
        
        float fog = 1.0 - exp(-d * 0.05);
        vec3 fogColor = palette(iTime * 0.05) * 0.02;
        col = mix(col, fogColor, fog * 0.3);
        
        col = pow(col, vec3(0.9));
        col *= 0.8;
        col = smoothstep(0.0, 1.0, col);
        
        gl_FragColor = vec4(col, 1.0);
    }
`; 