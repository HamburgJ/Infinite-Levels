import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ShaderType, defaultVertexShader, getShaderByType } from './shaders';

const ThreeBackground = ({ shaderType = ShaderType.DEFAULT }) => {
    const containerRef = useRef();
    const sceneRef = useRef();
    const cameraRef = useRef();
    const rendererRef = useRef();
    const materialRef = useRef();
    const timeRef = useRef(0);
    const frameRef = useRef();

    useEffect(() => {
        const init = () => {
            // Scene setup
            const scene = new THREE.Scene();
            sceneRef.current = scene;

            // Camera setup
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            cameraRef.current = camera;

            // Renderer setup
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            // Geometry and material setup
            const geometry = new THREE.PlaneGeometry(2, 2);
            const fragmentShader = getShaderByType(shaderType);
            console.log('Using shader type:', shaderType);
            
            const material = new THREE.ShaderMaterial({
                vertexShader: defaultVertexShader,
                fragmentShader: fragmentShader,
                uniforms: {
                    iTime: { value: 0 },
                    iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                    iMouse: { value: new THREE.Vector2(0, 0) }
                }
            });
            materialRef.current = material;

            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Mouse move handler
            const handleMouseMove = (event) => {
                if (materialRef.current) {
                    materialRef.current.uniforms.iMouse.value.x = event.clientX;
                    materialRef.current.uniforms.iMouse.value.y = event.clientY;
                }
            };
            window.addEventListener('mousemove', handleMouseMove);

            // Window resize handler
            const handleResize = () => {
                if (rendererRef.current && materialRef.current) {
                    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
                    materialRef.current.uniforms.iResolution.value.x = window.innerWidth;
                    materialRef.current.uniforms.iResolution.value.y = window.innerHeight;
                }
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', handleResize);
            };
        };

        const cleanup = init();

        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);
            timeRef.current += 0.01;

            if (materialRef.current) {
                materialRef.current.uniforms.iTime.value = timeRef.current;
            }

            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };

        animate();

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
                const domElement = rendererRef.current.domElement;
                domElement.parentNode?.removeChild(domElement);
            }
            cleanup();
        };
    }, [shaderType]);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeBackground; 