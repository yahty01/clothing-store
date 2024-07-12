import { createGlobalStyle } from 'styled-components';
import {theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Fira Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    line-height: 1.2;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fira Mono", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-feature-settings: normal;
    background-color: ${theme.mainBackgroundColor};
    color: ${theme.mainTextColor};

    //& > div > div {
    //  display: flex;
    //  gap: 10px;
    //}
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  //button {
  //  background-color: unset;
  //  border: none;
  //}
`