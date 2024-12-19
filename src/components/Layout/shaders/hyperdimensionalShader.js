export const fragmentShader = /* glsl */`
    uniform vec2 iResolution;
    uniform float iTime;
    
    #define PI 3.14159265359
    
    // 4D rotation matrices
    mat4 rotateXY(float a) {
        float c = cos(a), s = sin(a);
        return mat4(
            c,-s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }
    
    mat4 rotateXZ(float a) {
        float c = cos(a), s = sin(a);
        return mat4(
            c, 0,-s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        );
    }
    
    mat4 rotateXW(float a) {
        float c = cos(a), s = sin(a);
        return mat4(
            c, 0, 0,-s,
            0, 1, 0, 0,
            0, 0, 1, 0,
            s, 0, 0, c
        );
    }
    
    mat4 rotateYZ(float a) {
        float c = cos(a), s = sin(a);
        return mat4(
            1, 0, 0, 0,
            0, c,-s, 0,
            0, s, c, 0,
            0, 0, 0, 1
        );
    }
    
    mat4 rotateYW(float a) {
        float c = cos(a), s = sin(a);
        return mat4(
            1, 0, 0, 0,
            0, c, 0,-s,
            0, 0, 1, 0,
            0, s, 0, c
        );
    }
    
    mat4 rotateZW(float a) {
        float c = cos(a), s = sin(a);
        return mat4(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, c,-s,
            0, 0, s, c
        );
    }
    
    // 4D noise
    float noise4D(vec4 p) {
        vec4 i = floor(p);
        vec4 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = i.x + i.y * 157.0 + 113.0 * i.z + i.w * 571.0;
        vec4 v = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);
        
        return mix(
            mix(
                mix(
                    mix(v.x, v.y, f.w),
                    mix(v.z, v.w, f.w),
                    f.z),
                mix(
                    mix(v.y, v.z, f.w),
                    mix(v.w, v.x, f.w),
                    f.z),
                f.y),
            mix(
                mix(
                    mix(v.z, v.w, f.w),
                    mix(v.x, v.y, f.w),
                    f.z),
                mix(
                    mix(v.w, v.x, f.w),
                    mix(v.y, v.z, f.w),
                    f.z),
                f.y),
            f.x);
    }
    
    // Smooth looping time
    float loopTime(float t, float length) {
        return t - floor(t / length) * length;
    }
    
    float smoothLoop(float t, float length) {
        float lt = loopTime(t, length);
        return lt + smoothstep(length - 0.2, length, lt) * -lt;
    }
    
    // 4D distance function
    float sdf4D(vec4 p) {
        float time = iTime * 0.2;
        
        // Smooth looping rotations
        float t1 = smoothLoop(time * 0.5, PI * 2.0);
        float t2 = smoothLoop(time * 0.4, PI * 2.0);
        float t3 = smoothLoop(time * 0.3, PI * 2.0);
        float t4 = smoothLoop(time * 0.2, PI * 2.0);
        float t5 = smoothLoop(time * 0.1, PI * 2.0);
        float t6 = smoothLoop(time * 0.6, PI * 2.0);
        
        // Apply 4D rotations with smooth transitions
        mat4 rot = rotateXY(t1) *
                  rotateXZ(t2) *
                  rotateXW(t3) *
                  rotateYZ(t4) *
                  rotateYW(t5) *
                  rotateZW(t6);
        
        vec4 p2 = rot * vec4(p.xyz, 1.0);
        p2.w = p.w;
        
        // Create smooth morphing 4D shapes
        float morph = smoothstep(-1.0, 1.0, sin(time * 0.3));
        float sphere = length(p2.xyz) - 1.0;
        float torus = length(vec2(length(p2.xy) - 1.5, p2.z)) - 0.3;
        float hyperSphere = length(p2) - 1.5;
        
        float shape = mix(
            mix(sphere, torus, morph),
            hyperSphere,
            smoothstep(-0.5, 0.5, sin(time * 0.2))
        );
        
        // Add smooth noise distortion
        float noise = noise4D(p2 * 2.0 + vec4(time * 0.2)) * 0.3;
        
        return shape + noise;
    }
    
    // Enhanced color based on 4D position
    vec3 colorize(vec4 p, float d) {
        float time = iTime * 0.2;
        
        // Create vivid base colors
        vec3 col1 = vec3(1.0, 0.2, 0.1); // Red
        vec3 col2 = vec3(0.2, 1.0, 0.3); // Green
        vec3 col3 = vec3(0.1, 0.3, 1.0); // Blue
        
        // Create dynamic color mixing
        float a1 = atan(p.y, p.x);
        float a2 = atan(p.z, p.w);
        float blend1 = smoothstep(-PI, PI, a1);
        float blend2 = smoothstep(-PI, PI, a2);
        
        vec3 col = mix(
            mix(col1, col2, blend1),
            col3,
            blend2
        );
        
        // Add depth-based coloring
        col *= 1.0 - exp(-abs(d) * 2.0);
        
        // Add highlight for surface
        float surf = 1.0 - smoothstep(0.0, 0.01, abs(d));
        col += vec3(1.0, 0.9, 0.8) * surf * 0.5;
        
        // Add vibrant glow
        float glow = exp(-d * d * 4.0);
        col += mix(
            vec3(0.8, 0.2, 0.5),
            vec3(0.2, 0.5, 1.0),
            sin(time * 0.5) * 0.5 + 0.5
        ) * glow * 0.5;
        
        return col;
    }
    
    // Draw 4D axis line
    float draw4DAxis(vec4 p, vec4 dir, vec3 color, inout vec3 outColor) {
        // Project 4D line onto 3D view space
        vec4 projected = p - dir * dot(p, dir);
        float d = length(projected) / length(dir);
        
        // Create tapering effect based on w coordinate
        float wFade = exp(-abs(p.w) * 0.5);
        float intensity = (1.0 - smoothstep(0.0, 0.02, d)) * wFade;
        
        // Add pulsing glow effect
        float pulse = 0.8 + 0.2 * sin(iTime * 2.0 + dot(p, dir) * 3.0);
        outColor = mix(outColor, color * pulse, intensity * 0.8);
        return intensity;
    }
    
    // Draw 4D coordinate axes
    void draw4DAxes(vec4 p, inout vec3 col) {
        // X axis (red)
        draw4DAxis(p, vec4(1,0,0,0), vec3(1,0,0), col);
        
        // Y axis (green)
        draw4DAxis(p, vec4(0,1,0,0), vec3(0,1,0), col);
        
        // Z axis (blue)
        draw4DAxis(p, vec4(0,0,1,0), vec3(0,0,1), col);
        
        // W axis (yellow)
        draw4DAxis(p, vec4(0,0,0,1), vec3(1,1,0), col);
        
        // Add intersection highlights at the origin
        float originDist = length(p);
        float highlight = exp(-originDist * 5.0);
        col = mix(col, vec3(1), highlight * 0.3);
        
        // Add axis endpoint markers
        float endpointSize = 0.1;
        vec4 endpoints[4] = vec4[4](
            vec4(1,0,0,0),
            vec4(0,1,0,0),
            vec4(0,0,1,0),
            vec4(0,0,0,1)
        );
        vec3 endpointColors[4] = vec3[4](
            vec3(1,0,0),  // X
            vec3(0,1,0),  // Y
            vec3(0,0,1),  // Z
            vec3(1,1,0)   // W
        );
        
        for(int i = 0; i < 4; i++) {
            float endpointDist = length(p - endpoints[i]);
            float marker = exp(-endpointDist * 10.0);
            col = mix(col, endpointColors[i], marker * 0.5);
        }
    }
    
    void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        
        // Setup 4D ray with adjusted camera position for better axis visibility
        vec4 ro = vec4(2.0, 2.0, -4.0, 1.0);
        vec4 rd = normalize(vec4(uv, 2.0, -0.5));
        
        // Rotate camera in 4D to show the w-axis better
        float camTime = iTime * 0.2;
        mat4 camRot = rotateXW(sin(camTime) * 0.3) * 
                     rotateYW(cos(camTime) * 0.2) *
                     rotateZW(sin(camTime * 0.7) * 0.1);
        ro = camRot * ro;
        rd = camRot * rd;
        
        // Ray march through 4D space
        float t = 0.0;
        float d = 0.0;
        vec3 col = vec3(0.0);
        
        for(int i = 0; i < 100; i++) {
            vec4 p = ro + rd * t;
            d = sdf4D(p);
            
            // Draw 4D axes before surface
            draw4DAxes(p, col);
            
            if(d < 0.001) {
                col = mix(col, colorize(p, d), 0.6);
                break;
            }
            
            // Accumulate color through space with enhanced glow
            col += colorize(p, d) * 0.01;
            
            t += max(abs(d) * 0.5, 0.02);
            if(t > 10.0) break;
        }
        
        // Enhanced color processing
        col = pow(col, vec3(0.8)); // Gamma correction
        col = col / (1.0 + col); // Tone mapping
        col = mix(col, smoothstep(0.0, 1.0, col), 0.3); // Contrast
        col = mix(col, col * col, 0.3); // Saturation boost
        
        gl_FragColor = vec4(col, 1.0);
    }
`; 