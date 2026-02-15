/**
 * Shared Feedback Components
 * 
 * Reusable callout / alert / success / warning boxes
 * extracted from individual level files (e.g. Level10.js).
 */
import styled from 'styled-components';
import { colors, radii, transitions, fonts } from '../../styles/theme';
import { glowPulse, slideUp } from '../../styles/animations';

/**
 * TutorialCallout — Pulsing dashed-border box for tutorial moments.
 * Used to draw attention to a mechanic the player should try.
 */
export const TutorialCallout = styled.div`
  margin: 1.25rem 0;
  padding: 1rem 1.25rem;
  border: 2px dashed rgba(37, 99, 235, 0.35);
  border-radius: ${radii.md};
  background: ${colors.primarySubtle};
  text-align: center;
  font-size: 1rem;
  animation: ${glowPulse} 2.5s ease-in-out infinite;
`;

/**
 * SuccessMessage — Green left-border box confirming a completed action.
 */
export const SuccessMessage = styled.div`
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  background: ${colors.successSubtle};
  border-left: 4px solid ${colors.success};
  border-radius: ${radii.sm};
  font-size: 0.95rem;
  color: #065f46;
  animation: ${slideUp} 0.3s ease-out;
`;

/**
 * WarningMessage — Amber left-border box for caution states.
 */
export const WarningMessage = styled.div`
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  background: ${colors.warningSubtle};
  border-left: 4px solid ${colors.warning};
  border-radius: ${radii.sm};
  font-size: 0.95rem;
  color: #78350f;
`;

/**
 * DangerMessage — Red left-border box for errors or danger.
 */
export const DangerMessage = styled.div`
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  background: ${colors.dangerSubtle};
  border-left: 4px solid ${colors.danger};
  border-radius: ${radii.sm};
  font-size: 0.95rem;
  color: #7f1d1d;
`;

/**
 * SystemMessage — Monospace text in a subtle box for "system" voice.
 */
export const SystemMessage = styled.div`
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: ${radii.sm};
  font-family: ${fonts.mono};
  font-size: 0.85rem;
  color: ${colors.textSecondary};
  letter-spacing: 0.02em;
`;

/**
 * NarrativeBlock — For immersive "wonder" or "unease" prose paragraphs.
 * Slightly indented with a vertical guide line.
 */
export const NarrativeBlock = styled.div`
  margin: 1.25rem 0;
  padding: 0.75rem 1.25rem;
  border-left: 3px solid rgba(0, 0, 0, 0.08);
  font-style: italic;
  color: ${colors.textSecondary};
  line-height: 1.7;
`;
