import { createGlobalStyle } from 'styled-components';
import { colors, fonts, fontSizes, transitions } from './theme';

const GlobalStyles = createGlobalStyle`
  /* ── Font Loading ──────────────────────────────────────────── */
  @font-face {
    font-family: 'Edu AU VIC WA NT Pre';
    font-style: normal;
    font-weight: 400 700;
    font-display: block;
    src: url(https://fonts.gstatic.com/s/eduauvicwantpre/v1/f0Xp0fWk-t0rbG8Ycr-t55aG0elTWbFeXYwK3zFPJA.woff2) format('woff2');
    unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  @font-face {
    font-family: 'Edu AU VIC WA NT Pre';
    font-style: normal;
    font-weight: 400 700;
    font-display: block;
    src: url(https://fonts.gstatic.com/s/eduauvicwantpre/v1/f0Xp0fWk-t0rbG8Ycr-t55aG0elTWbFeXYwE3zE.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400;700&display=block');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

  /* ── CSS Custom Properties (Design Tokens) ─────────────────── */
  :root {
    --color-primary: ${colors.primary};
    --color-primary-hover: ${colors.primaryHover};
    --color-primary-active: ${colors.primaryActive};
    --color-primary-subtle: ${colors.primarySubtle};

    --color-surface: ${colors.surface};
    --color-background: ${colors.background};

    --color-text: ${colors.textMain};
    --color-text-secondary: ${colors.textSecondary};
    --color-text-dim: ${colors.textDim};

    --color-border: ${colors.border};
    --color-border-strong: ${colors.borderStrong};

    --color-success: ${colors.success};
    --color-success-subtle: ${colors.successSubtle};
    --color-warning: ${colors.warning};
    --color-danger: ${colors.danger};

    --color-gold: ${colors.gold};
    --color-gold-bright: ${colors.goldBright};
    --color-gold-subtle: ${colors.goldSubtle};

    --color-selection: ${colors.selectionBg};

    --font-display: ${fonts.display};
    --font-body: ${fonts.body};
    --font-mono: ${fonts.mono};

    --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.06);
    --shadow-medium: 0 8px 24px rgba(0, 0, 0, 0.1);
    --shadow-strong: 0 12px 40px rgba(0, 0, 0, 0.15);
    --shadow-glow: 0 0 20px rgba(37, 99, 235, 0.15);

    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;

    --transition-fast: ${transitions.fast};
    --transition-normal: ${transitions.normal};
  }

  /* ── Reset & Base ──────────────────────────────────────────── */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow: hidden;
  }

  body {
    font-family: var(--font-body);
    font-size: ${fontSizes.base};
    color: var(--color-text);
    background: var(--color-background);
    overflow: hidden;
    padding-right: 0 !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  /* ── Custom Selection Highlight ────────────────────────────── */
  ::selection {
    background: var(--color-selection);
    color: var(--color-text);
  }

  ::-moz-selection {
    background: var(--color-selection);
    color: var(--color-text);
  }

  /* ── Typography Utilities ──────────────────────────────────── */
  .font-display { font-family: var(--font-display); }
  .font-body    { font-family: var(--font-body); }
  .font-mono    { font-family: var(--font-mono); }

  /* ── Scrollbar Styling ─────────────────────────────────────── */
  .level-container {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    
    &::-webkit-scrollbar {
      width: 6px;
      display: block;
      position: absolute;
      right: 0;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      background-clip: padding-box;
      transition: background var(--transition-fast);

      &:hover {
        background: rgba(0, 0, 0, 0.25);
      }
    }

    &::-webkit-scrollbar-button {
      display: none;
    }
  }

  .dark-theme .level-container {
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      
      &:hover {
        background: rgba(255, 255, 255, 0.35);
      }
    }
  }

  /* ── Modal Override ────────────────────────────────────────── */
  .modal-dialog {
    margin: 1.75rem auto;
  }

  /* ── Smooth focus outlines ─────────────────────────────────── */
  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default GlobalStyles; 