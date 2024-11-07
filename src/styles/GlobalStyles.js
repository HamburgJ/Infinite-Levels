import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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