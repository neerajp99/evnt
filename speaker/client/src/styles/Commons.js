import styled from "styled-components";
import React from "react";

export const Container = styled.div`
height: 100vh;
display: flex;
@media (max-width: 768px) {
  flex-direction: column;
}
`;

export const InnerContainer = styled.div`
width: 80%;
flex-basis: 100%;
background: rgb(244, 248, 249);
padding-bottom: 5%;
flex: 1 1 auto;
overflow: auto;
padding: 0 1em;
display: flex;
postition: relative;
overflow-x: hidden;
@media (max-width: 1028px) {
  flex-direction: column;
}
@media (max-width: 768px) {
  width: 95%;
}
`;
