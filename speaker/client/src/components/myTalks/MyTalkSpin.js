import React from "react";
import Spinner from "../../util/img/spinner.gif";
import styled from "styled-components";

function MyTalkSpin() {
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

export default MyTalkSpin;

const SpinnerDiv = styled.div`
  ${'' /* position: absolute; */}
  top: 0;
  right: 0;
  bottom: 0;
  height: 100% !important;
  width: 100% !important;
  margin: 0 auto;
  ${'' /* background: #fff; */}
  /* opacity: 0.9; */
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media(max-width: 768px){
      width: 75% !important;
  }
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
