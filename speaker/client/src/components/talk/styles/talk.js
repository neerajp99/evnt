import styled from "styled-components";

export const TalkHeading = styled.h1`
  font-size: calc(1.1em + 1.3vw);
  position: relative;
  top: -12%;
  text-align: left;
  font-family: Lato;
  font-weight: 400;
  color: #22343b;
  @media (max-width: 1100px) {
    top: -8vh !important;
  }
  @media (max-width: 768px) {
    top: -8vh !important;
  }
`;

export const TalkContainer = styled.div`
  /* height: 80vh; */
  min-height: 100%;
  height: auto;
  width: 90%;
  margin: 0 auto;
  /* background: #fff; */
  margin-top: 10%;
  /* padding-bottom: 10%; */
  /* border-radius: 12px; */
  margin-bottom: 5%;
  @media (max-width: 1200px) {
    margin-top: 15% !important;
  }
  @media (max-width: 768px) {
    margin-top: 15% !important;
  }
`;

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

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  /* width: 95%; */
  margin-top: -10%;
  padding-top: 1%;
  padding-bottom: 3%;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 7%;
`;

export const TextArea = styled.textarea`
  width: 84%;
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

export const LabelBottom = styled.h5`
  font-size: 16px;
  margin-top: 0.2%;
  text-align: left;
  position: relative;
  left: 89%;
  font-weight: 400;
  color: ${props => (props.length === props.limit ? "#af2c56" : "#4ca1ff")};
  @media (max-width: 1200px) {
    left: 86%;
  }
  @media (max-width: 768px) {
    left: 83%;
  }
`;
export const TalkSubmitButton = styled.div`
  height: 60px;
  background: #4ca1ff;
  color: #fff;
  /* margin-bottom: 10%; */
  width: 88%;
  margin: 0 auto;
  border-radius: 6px;
  line-height: 60px;
  font-weight: 600;
  font-family: Lato;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
  // margin-left: 4%;
  transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;
  -moz-transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    transition: 0.3s all ease-in-out;
    -webkit-transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    transform: translateY(-4px);
  }
  @media (max-width: 768px) {
    width: 92%;
  }
`;
