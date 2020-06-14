import React from "react";
import styled from "styled-components";

export const EventForm = styled.div`
  margin: 0 auto;
  flex: 0 1 auto;
  width: 60%;
  // flex-grow: 3;
  order: 1;
  flex-basis: | auto;
  flex-wrap: nowrap | wrap | wrap-reverse;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  postition: relative;
  @media (max-width: 1028px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const EventCollaborators = styled.div`
  min-height: 100%;
  height: auto;
  order: 2;
  flex: 1 1 auto;
  width: 40%;
  order: 2;
  flex-basis: | auto;
  flex-wrap: nowrap | wrap | wrap-reverse;
  postition: relative;
  @media (max-width: 1028px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  padding-bottom: 2%;
  margin: 0 auto;
  margin-top: 15%;
  margin-bottom: 5%;
  width: 93%;
  background: #fff;
  border-radius: 7px;
  postition: relative;
  @media (max-width: 768px) {
    -webkit-margin-before: 25%;
  }
`;

export const CollaboratorsContainer = styled.div`
  min-height: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 22.2%;
  width: 93%;
  background: #fff;
  border-radius: 7px;
  @media (max-width: 1028px) {
    margin-bottom: 20%;
  }
`;

export const FormHeading = styled.h2`
  /* font-size: calc(1vw + 1vh + 2vmin) !important; */
  font-size: calc(1.1em + 1.3vw);
  position: relative;
  top: -8vh;
  text-align: left;
  font-family: Lato;
  font-weight: 400;
  color: #22343b;
  @media(max-width: 768px){
      top: -5vh
  }
`;
