import { createGlobalStyle } from 'styled-components';
import {theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    scrollbar-width: none; /* Firefox */
  }

  ::-webkit-scrollbar {
    display: none; /* WebKit-based browsers */
  }

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-optical-sizing: auto;
    font-style: normal;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-feature-settings: normal;
    background-color: ${theme.mainBackgroundColor};
    color: ${theme.mainTextColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: "Fira Mono", monospace;
  }

  .swiper-scrollbar {
    position: absolute;
    left: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 5px !important;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0;

  }

  .swiper-scrollbar-drag {
    background: rgb(49, 49, 49) !important;
    height: 100%;
    border-radius: 0;
  }

  .mySwiper2 {
    position: relative;
  }

  .mySwiper2 .swiper-scrollbar {
    width: 3px !important;
    height: 100% !important;
    left: auto !important;
    right: 0 !important;
    top: 0 !important;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }

  .mySwiper2 .swiper-scrollbar-drag {
    width: 8px !important;
    background: rgb(49, 49, 49) !important;
    border-radius: 0;
  }

  .mySwiper2 .swiper-wrapper {
    margin-right: 10px; /* Добавляем отступ справа для скроллбара */
  }

  

`