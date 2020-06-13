import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 0.8rem;
`;

export const Input = styled.input`
  width: 85%;
  height: 50px;
  border-radius: 3px;
  border: 1px solid #d8dde1;
  padding-left: 15px;
  font-size: 15px;
  font-family: Lato;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c1c3c7;
  }
  :-ms-input-placeholder {
    color: #c1c3c7;
  }
  &:focus {
    border: 1px solid #4ca1ff;
  }
  color: #3a414a;
`;
export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  margin: 10% auto;
  justify-content: center;
  text-align: center;
`;

export const Label = styled.h4`
  width: 86%;
  margin: 0 auto;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 1.5vh;
  color: #767c83;
  font-family: Lato;
  font-size: 15px;
  margin-top: 5%;
`;

export const TextArea = styled.textarea`
  width: 83%;
  height: 20vh;
  margin: 0 auto;
  /* margin-top: 5%; */
  resize: none;
  border-radius: 3px;
  border: 1px solid #d8dde1;
  padding-left: 15px;
  font-size: 15px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c1c3c7;
  }
  :-ms-input-placeholder {
    color: #c1c3c7;
  }
  &:focus {
    border: 1px solid #4ca1ff;
  }
  color: #3a414a;
  font-family: Lato;
  font-size: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
`;
