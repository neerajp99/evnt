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
  border: 1px solid #55636b40;
  padding-left: 15px;
  font-size: 15px;
  font-family: Lato;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #5b6a84;
  }
  :-ms-input-placeholder {
    color: #5b6a84;
  }
  &:focus {
    border: 1px solid #4ca1ff;
  }
  color: #3a414a;
`;
export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  margin: 5% auto;
  justify-content: center;
  text-align: center;
`;

export const Label = styled.h4`
  width: 86%;
  margin: 0 auto;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 1.5vh;
  color: #384e5e;
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
  border: 1px solid #55636b40;
  padding-left: 15px;
  font-size: 15px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #5b6a84;
  }
  :-ms-input-placeholder {
    color: #5b6a84;
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

export const EventCollaboratorsHeading = styled.h2`
  position: relative;
  top: -8vh;
  text-align: center;
  font-family: Lato;
  font-weight: 400;
  color: #fff;
  background: #4ca1ffd1;
  padding: 15px 20px 15px;
  border-radius: 6px;
  font-size: calc(0.5em + 0.7vw);
  @media (max-width: 768px) {
    font-size: calc(0.8em + 1.1vw);
  }
`;

export const CollaboratorsTag = styled.div`
  width: 90%;
  height: 7vh;
  /* background: red; */
  margin: 0 auto;
  position: relative;
  top: -3vh;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  display: inline-block;
  text-align: left;
`;

export const CollaboratorTagBox = styled.div`
  display: inline-block;
  height: inherit;
  width: 15%;
  background: tomato;
  position: relative;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 7vh;
  overflow-x: scroll;
  font-family: Lato;
  font-size: calc(0.4rem + 0.9vw);
  font-weight: 700;
  color: #fff;
`;

export const AddMoreCollaboratorBox = styled.div`
  display: inline-block;
  height: inherit;
  width: 15%;
  height: 95%;
  border: 1.5px solid #4ca1ff;
  position: relative;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 7vh;
  /* overflow-x: scroll; */
  overflow-y: hidden;
  font-family: Lato;
  font-size: calc(0.8rem + 1vw);
  font-weight: 900;
  color: #4ca1ff;
`;
