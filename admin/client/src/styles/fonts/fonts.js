import { createGlobalStyle, css } from "styled-components";

import Lato from "../../styles/fonts/Lato.ttf";
import Roboto from "../fonts/roboto/RobotoMono-Medium.ttf"

export default createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${Lato}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${Roboto}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
`;
