import React, { useMemo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector } from 'react-redux';
import { getComplexAngle } from '../../utils/complex';

// ─── Utility: extract a normalized "magnitude" from any level type ───
const getLevelMagnitude = (level) => {
  if (typeof level === 'string') return 100; // infinity levels
  if (typeof level === 'number') return Math.abs(level);
  if (typeof level === 'object' && 'real' in level) {
    return Math.sqrt(level.real * level.real + level.imag * level.imag);
  }
  return 0;
};

const isNegativeLevel = (level) => {
  if (typeof level === 'number') return level < 0;
  if (typeof level === 'object' && 'real' in level) return level.real < 0;
  if (typeof level === 'string') return level.startsWith('-');
  return false;
};

const isComplexLevel = (level) => {
  return typeof level === 'object' && 'real' in level && level.imag !== 0;
};

// ─── Continuous functions that map level magnitude to visual intensity ───
// All return 0→1 range. Levels 0-10 are completely untouched.
// 11-100: only the faintest color tint. Everything else kicks in much later.

// How much color tint the background gets (0 = pure white/black, 1 = full color)
const getColorIntensity = (mag) => {
  if (mag <= 10) return 0;          // nothing for 0-10
  if (mag <= 100) {                  // 11-100: barely-there tint, linear 0→0.08
    return ((mag - 10) / 90) * 0.08;
  }
  // 100+: log ramp from 0.08 → 1.0 (reaches ~0.3 at 1000, ~0.5 at 10000, ~1.0 at 1M)
  return Math.min(0.08 + (Math.log10(mag) - 2) / 4.5, 1);
};

// How active/animated the background feels
const getAnimationIntensity = (mag) => {
  if (mag <= 100) return 0;          // no animation until 100+
  if (mag <= 500) {                  // 100-500: very slow fade-in
    return ((mag - 100) / 400) * 0.1;
  }
  return Math.min(0.1 + (Math.log10(mag) - 2.7) / 4, 1);
};

// How visible the floating particle dots are
const getParticleIntensity = (mag) => {
  if (mag <= 500) return 0;          // no particles until level 500+
  return Math.min((Math.log10(mag) - 2.7) / 3.5, 1);
};

// How prominent the radial atmosphere/glow is
const getAtmosphereIntensity = (mag) => {
  if (mag <= 100) return 0;          // no atmosphere glow until 100+
  if (mag <= 1000) {                 // 100-1000: very gentle ramp
    return ((mag - 100) / 900) * 0.15;
  }
  return Math.min(0.15 + (Math.log10(mag) - 3) / 4, 1);
};

// ─── Map level number to a hue (creates a "journey" through the color wheel) ───
const getLevelHue = (mag) => {
  // Golden-angle-based hue rotation so nearby levels get different-ish hues
  // but the progression still feels smooth
  const goldenAngle = 137.508;
  const baseHue = (mag * goldenAngle) % 360;
  // Blend with a slow linear sweep to keep macro-progression feeling
  const linearHue = (mag * 0.7) % 360;
  return (baseHue * 0.3 + linearHue * 0.7) % 360;
};

// ─── Keyframe animations ───

const gradientDrift = keyframes`
  0% { background-position: 0% 50%; }
  25% { background-position: 100% 25%; }
  50% { background-position: 50% 100%; }
  75% { background-position: 0% 75%; }
  100% { background-position: 0% 50%; }
`;

const atmospherePulse = keyframes`
  0% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.6; transform: scale(1); }
`;

const floatParticle = keyframes`
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
`;

const shimmerWave = keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
`;

const noiseShift = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-5%, 5%); }
  50% { transform: translate(5%, -3%); }
  75% { transform: translate(-3%, -5%); }
  100% { transform: translate(0, 0); }
`;

// ─── Styled components ───

const ProgressiveWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  overflow: hidden;
`;

// Layer 1: Subtle color gradient that shifts with level
const ColorTintLayer = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${props => props.$intensity};
  background: ${props => props.$isNegative
    ? `linear-gradient(
        ${props.$angle}deg,
        hsla(${props.$hue}, 40%, 8%, 0.8),
        hsla(${(props.$hue + 60) % 360}, 30%, 5%, 0.6),
        hsla(${(props.$hue + 120) % 360}, 35%, 10%, 0.4)
      )`
    : `linear-gradient(
        ${props.$angle}deg,
        hsla(${props.$hue}, 15%, 95%, 0.8),
        hsla(${(props.$hue + 60) % 360}, 12%, 97%, 0.6),
        hsla(${(props.$hue + 120) % 360}, 18%, 93%, 0.4)
      )`
  };
  background-size: 400% 400%;
  animation: ${props => props.$animIntensity > 0 ? css`${gradientDrift} ${Math.max(30 - props.$animIntensity * 15, 12)}s ease-in-out infinite` : 'none'};
  transition: opacity 1.5s ease, background 2s ease;
`;

// Layer 2: Radial atmospheric glow
const AtmosphereLayer = styled.div`
  position: absolute;
  inset: -20%;
  opacity: ${props => props.$intensity * 0.6};
  background: ${props => props.$isNegative
    ? `radial-gradient(
        ellipse at ${props.$x}% ${props.$y}%,
        hsla(${props.$hue}, 50%, 15%, 0.5) 0%,
        hsla(${(props.$hue + 40) % 360}, 40%, 8%, 0.2) 40%,
        transparent 70%
      )`
    : `radial-gradient(
        ellipse at ${props.$x}% ${props.$y}%,
        hsla(${props.$hue}, 30%, 85%, 0.5) 0%,
        hsla(${(props.$hue + 40) % 360}, 20%, 90%, 0.2) 40%,
        transparent 70%
      )`
  };
  animation: ${props => props.$intensity > 0.2 ? css`${atmospherePulse} ${20 - props.$intensity * 8}s ease-in-out infinite` : 'none'};
  transition: opacity 2s ease;
`;

// Layer 3: Subtle shimmer/highlight pass
const ShimmerLayer = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${props => props.$intensity * 0.15};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 50%;
    height: 200%;
    background: ${props => props.$isNegative
      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.02), transparent)'
    };
    animation: ${shimmerWave} ${props => Math.max(15 - props.$intensity * 5, 6)}s ease-in-out infinite;
  }
`;

// Layer 4: Subtle noise/grain texture for richness  
const NoiseLayer = styled.div`
  position: absolute;
  inset: -10%;
  opacity: ${props => Math.min(props.$intensity * 0.08, 0.06)};
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  background-size: 256px 256px;
  animation: ${noiseShift} 30s linear infinite;
  mix-blend-mode: ${props => props.$isNegative ? 'screen' : 'multiply'};
`;

// Floating particle
const Particle = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  background: ${props => props.$isNegative
    ? `hsla(${props.$hue}, 40%, 70%, ${props.$opacity})`
    : `hsla(${props.$hue}, 30%, 40%, ${props.$opacity})`
  };
  left: ${props => props.$x}%;
  animation: ${floatParticle} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  filter: blur(${props => props.$blur}px);
`;

// Layer 5: Grid/pattern that appears at higher levels (very subtle)
const PatternLayer = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${props => props.$intensity * 0.04};
  background-image: ${props => {
    const size = Math.max(80 - props.$mag * 0.01, 20);
    const color = props.$isNegative ? '255,255,255' : '0,0,0';
    return `
      linear-gradient(rgba(${color}, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(${color}, 0.05) 1px, transparent 1px)
    `;
  }};
  background-size: ${props => {
    const size = Math.max(80 - Math.log10(Math.max(props.$mag, 1)) * 15, 20);
    return `${size}px ${size}px`;
  }};
  transition: opacity 2s ease;
`;

// ─── Component ───

const ProgressiveBackground = () => {
  const currentLevel = useSelector(state => state.game.currentLevel);
  
  const visualParams = useMemo(() => {
    const mag = getLevelMagnitude(currentLevel);
    const negative = isNegativeLevel(currentLevel);
    const complex = isComplexLevel(currentLevel);
    
    // Get base hue - use complex angle for complex numbers, algorithmic for reals
    let hue;
    if (complex) {
      const angle = getComplexAngle(currentLevel);
      hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
    } else {
      hue = getLevelHue(mag);
    }
    
    const colorIntensity = getColorIntensity(mag);
    const animIntensity = getAnimationIntensity(mag);
    const particleIntensity = getParticleIntensity(mag);
    const atmosphereIntensity = getAtmosphereIntensity(mag);
    
    // Gradient angle based on level (so each level tilts differently)
    const gradientAngle = (mag * 7.3) % 360;
    
    // Atmosphere position drifts with level
    const atmosphereX = 30 + Math.sin(mag * 0.1) * 30;
    const atmosphereY = 30 + Math.cos(mag * 0.13) * 30;
    
    // Generate particles (deterministic based on level)
    const numParticles = Math.floor(particleIntensity * 12);
    const particles = [];
    for (let i = 0; i < numParticles; i++) {
      const seed = mag * 100 + i;
      particles.push({
        x: ((seed * 17.3) % 100),
        size: 2 + ((seed * 3.7) % 4),
        duration: 15 + ((seed * 7.1) % 25),
        delay: -((seed * 2.3) % 30),
        hue: (hue + (seed * 30) % 120) % 360,
        opacity: 0.1 + particleIntensity * 0.15,
        blur: 1 + ((seed * 1.7) % 3),
      });
    }
    
    return {
      mag,
      hue,
      negative,
      complex,
      colorIntensity,
      animIntensity,
      particleIntensity,
      atmosphereIntensity,
      gradientAngle,
      atmosphereX,
      atmosphereY,
      particles,
    };
  }, [currentLevel]);
  
  // Don't render anything for string levels (infinity etc.) — they have their own backgrounds
  if (typeof currentLevel === 'string') return null;
  
  // Don't render for levels 0-10 — keep them completely clean
  const skipMag = getLevelMagnitude(currentLevel);
  if (skipMag <= 10) return null;
  
  const {
    mag, hue, negative, colorIntensity, animIntensity,
    particleIntensity, atmosphereIntensity, gradientAngle,
    atmosphereX, atmosphereY, particles,
  } = visualParams;
  
  return (
    <ProgressiveWrapper>
      {/* Layer 1: Color tint */}
      {colorIntensity > 0.01 && (
        <ColorTintLayer
          $intensity={colorIntensity}
          $hue={hue}
          $angle={gradientAngle}
          $isNegative={negative}
          $animIntensity={animIntensity}
        />
      )}
      
      {/* Layer 2: Atmosphere glow */}
      {atmosphereIntensity > 0.05 && (
        <AtmosphereLayer
          $intensity={atmosphereIntensity}
          $hue={hue}
          $x={atmosphereX}
          $y={atmosphereY}
          $isNegative={negative}
        />
      )}
      
      {/* Layer 3: Shimmer pass */}
      {animIntensity > 0.1 && (
        <ShimmerLayer
          $intensity={animIntensity}
          $isNegative={negative}
        />
      )}
      
      {/* Layer 4: Noise texture */}
      {colorIntensity > 0.2 && (
        <NoiseLayer
          $intensity={colorIntensity}
          $isNegative={negative}
        />
      )}
      
      {/* Layer 5: Grid pattern (very high levels only) */}
      {mag > 1000 && (
        <PatternLayer
          $intensity={getAnimationIntensity(mag)}
          $mag={mag}
          $isNegative={negative}
        />
      )}
      
      {/* Layer 6: Floating particles */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          $x={p.x}
          $size={p.size}
          $duration={p.duration}
          $delay={p.delay}
          $hue={p.hue}
          $opacity={p.opacity}
          $blur={p.blur}
          $isNegative={negative}
        />
      ))}
    </ProgressiveWrapper>
  );
};

export default ProgressiveBackground;
