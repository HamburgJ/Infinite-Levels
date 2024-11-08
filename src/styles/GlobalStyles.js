import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* latin-ext */
  @font-face {
    font-family: 'Edu AU VIC WA NT Pre';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/eduauvicwantpre/v1/f0Xp0fWk-t0rbG8Ycr-t55aG0elTWbFeXYwK3zFPJA.woff2) format('woff2');
    unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Edu AU VIC WA NT Pre';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/eduauvicwantpre/v1/f0Xp0fWk-t0rbG8Ycr-t55aG0elTWbFeXYwE3zE.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #000000;
    background: #ffffff;
    overflow-x: hidden;
    padding-right: 0 !important;
  }

  /* Webkit browsers */
  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: 2px solid transparent;
    background-clip: padding-box;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
      background-clip: padding-box;
    }
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
  }

  .modal-dialog {
    margin: 1.75rem auto;
  }
`;

export default GlobalStyles; 