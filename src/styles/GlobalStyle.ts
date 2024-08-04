import { createGlobalStyle } from 'styled-components';
import {theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-optical-sizing: auto;
    font-style: normal;
    line-height: 1.2;
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

  .image-gallery {
    max-width: 600px; /* Устанавливает максимальную ширину контейнера галереи */
    width: 100%; /* Устанавливает ширину контейнера галереи на 100% от родительского элемента */
    margin: 0 auto; /* Центрирует галерею по горизонтали */
  }

  .image-gallery-thumbnail {
    border: 2px solid ${theme.mainBackgroundColor}; /* Устанавливает цвет границы миниатюр */
    border-radius: 8px; /* Скругляет углы миниатюр */
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover {
    border-color: ${theme.secondaryTextColor}; /* Устанавливает цвет границы активной миниатюры и миниатюры при наведении */
  }

  .image-gallery-icon {
    color: ${theme.mainTextColor}; /* Устанавливает цвет навигационных стрелок */
  }

  .image-gallery-icon:hover {
    color: ${theme.secondaryTextColor}; /* Устанавливает цвет навигационных стрелок при наведении */
  }
`