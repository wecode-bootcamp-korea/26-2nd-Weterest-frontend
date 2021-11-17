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
    font-weight: 400;
    font-size:30px;
  }
`;

export default GlobalStyle;
