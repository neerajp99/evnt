import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  min-height: 100%;
  height: auto;
  width: 80%;
  /* flex-basis: 100% */
  background: rgb(244, 248, 249);
  flex-grow: 7;
  order: 2;
  overflow-y: auto;
  @media (max-width: 1028px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
