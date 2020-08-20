import React from "react";
import Spinner from "./img/spinner.gif";
import styled from "styled-components";

function Spin() {
  return (
    <SpinnerDiv>
      <SpinnerImg />
      <img
        src={Spinner}
        style={{
          width: "100px"
        }}
        alt="Loading...."
      />

      <SpinnerHeading>LOADING...</SpinnerHeading>
    </SpinnerDiv>
  );
}

export default Spin;

const SpinnerDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: inherit;
  background: #f9fafc;
  /* opacity: 0.9; */
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerImg = styled.img`
  height: 15px;
`;

const SpinnerHeading = styled.h3`
  font-family: Lato;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.03rem;
  color: #48658e;
`;
