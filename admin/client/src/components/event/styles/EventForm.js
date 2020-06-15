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
  height: 6vh;
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
  position: relative;
  display: inline-block;
  height: inherit;
  width: 6vh;
  background: tomato;
  position: relative;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 6vh;
  overflow-x: scroll;
  font-family: Lato;
  font-size: calc(0.3rem + 0.7vw);
  font-weight: 700;
  color: #fff;
  overflow-y: hidden;
  filter: alpha(opacity=50);
  /* IE */
  -moz-opacity: 0.5;
  opacity: 0.5;
  div {
      opacity: 1;
  }
`;

export const AddMoreCollaboratorBox = styled.div`
  position: relative;
  display: inline-block;
  height: inherit;
  width: 6vh;
  height: 90%;
  border: 2px solid #4ca1ff;
  position: relative;
  margin-left: 4%;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 6vh;
  /* overflow-x: scroll; */
  overflow-y: hidden;
  font-family: Lato;
  font-size: calc(0.8rem + 1vw);
  font-weight: 900;
  color: #4ca1ff;
`;

export const CollaboratorLabel = styled.h4`
    font-family: Lato;
    color: #384e5e;
    text-transform: uppercase;
    position: relative;
    top: -3vh;
    left: 8%;
    text-align: left;
    margin-top: 3vh;
`
export const AddCollaborators = styled.div`
    width: 87%;
    margin: 0 auto;
    margin-top: -2vh;
    position: relative;
    left: -2.5%;
    display: inline-block;

`

export const AddCollaboratorButton = styled.button`
    height: 50px;
    width: 83%;
    background: #4ca1ff;
    margin: 0 auto;
    border-radius: 6px;
    margin-top: 5%;
    text-align: center;
    line-height: 50px;
    text-transform: uppercase;
    font-family: Lato;
    color: #fff;
    font-weight: 700;
    border: none;
    font-size: 1rem;
`
