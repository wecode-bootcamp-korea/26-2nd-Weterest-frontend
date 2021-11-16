import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
