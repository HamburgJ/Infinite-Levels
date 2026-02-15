/**
 * Infinite Levels — Shared Animation Library
 * 
 * Reusable keyframe animations. Import these instead of
 * defining one-off keyframes in individual components.
 */
import { keyframes } from 'styled-components';

// ─── Entrance Animations ─────────────────────────────────────────

/** Fade in from transparent */
export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/** Fade in + slide up from below */
export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/** Fade in + slide down from above */
export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/** Scale in from slightly smaller */
export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// ─── Looping / Ambient Animations ────────────────────────────────

/** Gentle floating motion */
export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

/** Soft breathing pulse */
export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
`;

/** Attention-grabbing scale pulse */
export const pulseBounce = keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
`;

/** Subtle glow intensity cycle */
export const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(37, 99, 235, 0.15); }
  50%      { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
`;

/** Slow rotation */
export const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

// ─── Interaction Feedback ────────────────────────────────────────

/** Brief "click" feedback */
export const clickPop = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

/** Shake for errors or warnings */
export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-4px); }
  40%      { transform: translateX(4px); }
  60%      { transform: translateX(-3px); }
  80%      { transform: translateX(3px); }
`;

// ─── Special / Thematic ──────────────────────────────────────────

/** Digital glitch — brief color/position offset */
export const glitch = keyframes`
  0%, 100% {
    transform: translate(0);
    filter: none;
  }
  20% {
    transform: translate(-2px, 1px);
    filter: hue-rotate(90deg);
  }
  40% {
    transform: translate(1px, -1px);
    filter: hue-rotate(180deg);
  }
  60% {
    transform: translate(-1px, 2px);
    filter: hue-rotate(270deg);
  }
  80% {
    transform: translate(2px, -1px);
    filter: hue-rotate(360deg);
  }
`;

/** Number scramble — for level transitions */
export const scramble = keyframes`
  0%   { opacity: 1; filter: blur(0); }
  30%  { opacity: 0.5; filter: blur(2px); }
  60%  { opacity: 0.5; filter: blur(2px); }
  100% { opacity: 1; filter: blur(0); }
`;

/** Shimmer sweep — for gold/premium elements */
export const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/** Slow diagonal background scroll */
export const diagonalScroll = keyframes`
  0%, 100% { background-position: 50% 100%; }
  50%      { background-position: 0 0; }
`;

/** Slide in from right — for notifications */
export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
