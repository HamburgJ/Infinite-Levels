import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #000000;
    background: #ffffff;
    overflow-x: hidden;
  }

  button {
    padding: 0.8em 1.6em;
    border: 2px solid rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.05);
    color: #000000;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    transform-style: preserve-3d;
    position: relative;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }

  input, select {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #000000;
    padding: 0.5em 1em;
    border-radius: 4px;
    
    &:focus {
      outline: none;
      border-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default GlobalStyles; 