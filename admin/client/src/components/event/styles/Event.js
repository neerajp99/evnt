import React from "react";
import styled from "styled-components";

export const EventForm = styled.div`
  min-height: 100%;
  height: auto;
  flex-grow: 3;
  order: 1;
  flex-basis: | auto;
  flex-wrap: nowrap | wrap | wrap-reverse;
  width: 60%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 1028px) {
    flex-direction: column;
    width: 100%;
    /* min-height: 100%;
    height: auto; */
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    /* min-height: 100%;
    height: auto; */
  }
`;

export const EventCollaborators = styled.div`
  min-height: 100%;
  height: auto;
  order: 2;
  flex-grow: 3;
  flex-basis: | auto;
  flex-wrap: nowrap | wrap | wrap-reverse;
  width: 40%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 1028px) {
    flex-direction: column;
    width: 100%;
    /* min-height: 100%;
    height: auto; */
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    /* min-height: 100%;
    height: auto; */

  }
`;

export const FormContainer = styled.div`
  min-height: 80%;
  height: auto;
  margin-top: 15%;

  width: 93%;
  background: #fff;
  border-radius: 4px;
  @media(max-width: 768px) {
      -webkit-margin-before: 25%;
  }
`;

export const CollaboratorsContainer = styled.div`
  min-height: 80%;
  height: auto;
  margin-top: 22%;

  width: 93%;
  background: #fff;
  border-radius: 4px;
  @media (max-width: 1028px) {
    margin-bottom: 20%;
  }
`;

export const FormHeading = styled.h2`
  /* font-size: calc(1vw + 1vh + 2vmin) !important; */
  font-size: calc(1.1em + 1.3vw);
  position: relative;
  margin-top: -12%;
  left: 0;
  text-align: left;
  font-family: Lato;
  font-weight: 400;
  color: #22343b;
`;
