import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    /* Fluid typography: base font size adjusts slightly with width */
    font-size: 14px; 
    
    @media ${device.tablet} {
      font-size: 16px;
    }
  }

  body {
    overflow-x: hidden; /* Prevents horizontal scroll bugs on mobile */
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  img, video, canvas {
    max-width: 100%;
    height: auto;
  }
`;