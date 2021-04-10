import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: "europa", sans-serif;
  }

  body.fontLoaded {
    font-family: "europa", sans-serif;
  }

  #app {
    background-color: #fdfdfd;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label { 
    color: #adb7bd;
    font-family: 'Lucida Sans',Arial, sans-serif;
    font-size: 16px;
    line-height: 26px;
    text-indent: 30px;
    margin: 0;
  }

  h1 {
    color: black;
    font-family: 'Lato', sans-serif;
    font-size: 54px;
    font-weight: 300;
    line-height: 58px;
  }

  bold {
    color: black;
    text-shadow: 6px 6px #def0fe;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
  }

  h2 {
    color: black;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    font-weight: 200;
    line-height: 58px;
  }
`;

export default GlobalStyle;
