import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InnerContainer = styled.div`
  background: #f6f8fc;
  flex-grow: 7;
  order: 2;
`;
