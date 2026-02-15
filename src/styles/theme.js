/**
 * Infinite Levels — Design Token System
 * 
 * All visual constants live here. Components import from this file
 * instead of hardcoding hex values. This enables zone-based theming
 * and keeps the visual language consistent.
 */

// ─── Color Palette ───────────────────────────────────────────────
export const colors = {
  // Primary interaction color — used for buttons, links, active states
  primary: '#2563eb',         // A deeper, more "artifact" blue than Bootstrap's #0d6efd
  primaryHover: '#1d4ed8',
  primaryActive: '#1e40af',
  primarySubtle: 'rgba(37, 99, 235, 0.08)',

  // Surface & background
  surface: 'rgba(255, 255, 255, 0.92)',
  surfaceDark: 'rgba(0, 0, 0, 0.92)',
  background: '#fafafa',
  backgroundDark: '#0a0a0a',

  // Text hierarchy
  textMain: '#111827',
  textSecondary: '#4b5563',
  textDim: '#9ca3af',
  textInverse: '#f9fafb',
  textInverseDim: 'rgba(255, 255, 255, 0.6)',

  // Borders
  border: 'rgba(0, 0, 0, 0.08)',
  borderStrong: 'rgba(0, 0, 0, 0.15)',
  borderDark: 'rgba(255, 255, 255, 0.08)',
  borderDarkStrong: 'rgba(255, 255, 255, 0.15)',

  // Semantic colors
  success: '#059669',
  successSubtle: 'rgba(5, 150, 105, 0.1)',
  warning: '#d97706',
  warningSubtle: 'rgba(217, 119, 6, 0.1)',
  danger: '#dc2626',
  dangerSubtle: 'rgba(220, 38, 38, 0.1)',

  // Shrine / Achievement gold
  gold: '#b8860b',
  goldBright: '#ffd700',
  goldSubtle: 'rgba(255, 215, 0, 0.1)',

  // Complex plane quadrants
  complexQ1: '#c2884d',      // Warm gold
  complexQ2: '#94a3b8',      // Misty silver
  complexQ3: '#312e81',      // Deep indigo
  complexQ4: '#065f46',      // Sickly teal

  // Selection highlight
  selectionBg: 'rgba(37, 99, 235, 0.15)',
  selectionBgDark: 'rgba(96, 165, 250, 0.25)',
};

// ─── Typography ──────────────────────────────────────────────────
export const fonts = {
  // Handwritten / mystery — Level titles, "Voice of God" text
  display: "'Edu AU VIC WA NT Pre', cursive",
  // Clean / scientific — Body text, descriptions
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  // Code / math — Numbers, equations, constants, system messages
  mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', Consolas, monospace",
};

export const fontSizes = {
  xs: '0.75rem',     // 12px — Fine print, badges
  sm: '0.875rem',    // 14px — Secondary text
  base: '1rem',      // 16px — Body text
  md: '1.125rem',    // 18px — Emphasized body
  lg: '1.5rem',      // 24px — Section headings
  xl: '2rem',        // 32px — Level titles
  '2xl': '2.5rem',   // 40px — Hero text
};

// ─── Shadows ─────────────────────────────────────────────────────
export const shadows = {
  soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
  medium: '0 8px 24px rgba(0, 0, 0, 0.1)',
  strong: '0 12px 40px rgba(0, 0, 0, 0.15)',
  glow: '0 0 20px rgba(37, 99, 235, 0.15)',
  glowGold: '0 0 20px rgba(255, 215, 0, 0.2)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
};

// ─── Spacing & Layout ────────────────────────────────────────────
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
};

export const radii = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

// ─── Transitions ─────────────────────────────────────────────────
export const transitions = {
  fast: '0.15s ease',
  normal: '0.25s ease',
  slow: '0.4s ease',
  spring: '0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
};

// ─── Z-Index Layers ──────────────────────────────────────────────
export const zIndex = {
  background: 0,
  content: 1,
  card: 2,
  navbar: 100,
  overlay: 500,
  modal: 1000,
  notification: 1100,
  tooltip: 1200,
};

// ─── Composite Themes ────────────────────────────────────────────
// Pre-built theme objects for styled-components ThemeProvider
export const lightTheme = {
  colors: {
    ...colors,
    surface: colors.surface,
    background: colors.background,
    text: colors.textMain,
    textDim: colors.textDim,
    border: colors.border,
  },
  fonts,
  fontSizes,
  shadows,
  spacing,
  radii,
  transitions,
};

export const darkTheme = {
  colors: {
    ...colors,
    surface: colors.surfaceDark,
    background: colors.backgroundDark,
    text: colors.textInverse,
    textDim: colors.textInverseDim,
    border: colors.borderDark,
  },
  fonts,
  fontSizes,
  shadows,
  spacing,
  radii,
  transitions,
};

export default { colors, fonts, fontSizes, shadows, spacing, radii, transitions, zIndex };
