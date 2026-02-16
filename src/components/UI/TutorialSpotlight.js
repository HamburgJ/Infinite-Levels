/**
 * TutorialSpotlight — A modal overlay that dims everything except a target
 * element, with a tooltip explaining what the player should do.
 *
 * Usage: Dispatch showSpotlight({ target, message, placement }) from the
 * tutorialSlice. The spotlight finds the DOM element via [data-tutorial="target"],
 * cuts a transparent hole over it, and shows a short message.
 *
 * Clicking anywhere (or pressing Escape) dismisses the spotlight.
 */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { dismissSpotlight } from '../../store/slices/tutorialSlice';
import { colors, radii, fonts } from '../../styles/theme';
import { fadeIn } from '../../styles/animations';

// ─── Styled Components ───────────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  animation: ${fadeIn} 0.25s ease-out;
  cursor: pointer;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  /* The hole is cut via clip-path set inline */
`;

const breathe = keyframes`
  0%, 100% { box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.4), 0 0 24px rgba(37, 99, 235, 0.15); }
  50%      { box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.6), 0 0 32px rgba(37, 99, 235, 0.25); }
`;

const HighlightRing = styled.div`
  position: absolute;
  border-radius: ${radii.md};
  animation: ${breathe} 2s ease-in-out infinite;
  pointer-events: none;
`;

const tooltipEnter = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Tooltip = styled.div`
  position: absolute;
  max-width: 300px;
  padding: 0.75rem 1rem;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: ${radii.md};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${colors.textMain};
  animation: ${tooltipEnter} 0.3s 0.15s ease-out both;
  z-index: 10000;
`;

const TooltipEmoji = styled.span`
  font-size: 1.2em;
  margin-right: 0.4rem;
`;

const DismissHint = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  opacity: 0.5;
  font-family: ${fonts.mono};
  text-align: right;
`;

// ─── Helpers ─────────────────────────────────────────────────────

const PAD = 8; // px padding around the target element

function getTooltipPosition(rect, placement = 'below') {
  const vw = window.innerWidth;
  const style = {};

  if (placement === 'below') {
    style.top = rect.bottom + PAD + 12;
    style.left = Math.max(12, Math.min(rect.left, vw - 320));
  } else if (placement === 'above') {
    style.bottom = window.innerHeight - rect.top + PAD + 12;
    style.left = Math.max(12, Math.min(rect.left, vw - 320));
  } else if (placement === 'left') {
    style.top = rect.top;
    style.right = vw - rect.left + PAD + 12;
  } else {
    style.top = rect.top;
    style.left = rect.right + PAD + 12;
  }

  return style;
}

function buildClipPath(rect) {
  // Creates a polygon with a rectangular hole
  const x1 = rect.left - PAD;
  const y1 = rect.top - PAD;
  const x2 = rect.right + PAD;
  const y2 = rect.bottom + PAD;

  return `polygon(
    0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%,
    ${x1}px ${y1}px, ${x1}px ${y2}px, ${x2}px ${y2}px, ${x2}px ${y1}px, ${x1}px ${y1}px
  )`;
}

// ─── Component ───────────────────────────────────────────────────

const TutorialSpotlight = () => {
  const dispatch = useDispatch();
  const spotlight = useSelector(state => state.tutorial.activeSpotlight);
  const [rect, setRect] = useState(null);

  const measureTarget = useCallback(() => {
    if (!spotlight) return;
    const el = document.querySelector(`[data-tutorial="${spotlight.target}"]`);
    if (el) {
      setRect(el.getBoundingClientRect());
    }
  }, [spotlight]);

  useEffect(() => {
    measureTarget();
    // Re-measure on scroll / resize
    window.addEventListener('resize', measureTarget);
    window.addEventListener('scroll', measureTarget, true);
    return () => {
      window.removeEventListener('resize', measureTarget);
      window.removeEventListener('scroll', measureTarget, true);
    };
  }, [measureTarget]);

  useEffect(() => {
    if (!spotlight) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') dispatch(dismissSpotlight());
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [spotlight, dispatch]);

  if (!spotlight || !rect) return null;

  const tooltipStyle = getTooltipPosition(rect, spotlight.placement || 'below');

  return (
    <Overlay onClick={() => dispatch(dismissSpotlight())}>
      <Backdrop style={{ clipPath: buildClipPath(rect) }} />
      <HighlightRing style={{
        top: rect.top - PAD,
        left: rect.left - PAD,
        width: rect.width + PAD * 2,
        height: rect.height + PAD * 2,
      }} />
      <Tooltip style={tooltipStyle} onClick={(e) => e.stopPropagation()}>
        {spotlight.emoji && <TooltipEmoji>{spotlight.emoji}</TooltipEmoji>}
        {spotlight.message}
        <DismissHint>tap anywhere to continue</DismissHint>
      </Tooltip>
    </Overlay>
  );
};

export default TutorialSpotlight;
