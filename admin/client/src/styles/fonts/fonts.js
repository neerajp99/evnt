import { createGlobalStyle, css } from "styled-components";

import Lato from "../../styles/fonts/Lato.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${Lato}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
`;
