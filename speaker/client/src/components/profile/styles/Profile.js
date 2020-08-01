import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  /* height: auto; */
  /* background: blue; */
  height: 100%;
  @media (max-width: 768px) {
    margin-left: 2%;
  }
`;

export const ProfileUpperContent = styled.div`
  width: 90%;
  /* background: red; */
  height: auto;
  text-align: left;
  position: relative;
  top: 5%;
`;

export const ProfileHeading = styled.h2`
  font-family: Lato;
  font-size: 2.5rem;
  font-weight: 600;
  color: #23343b;
`;

export const Profilepara = styled.p`
  font-family: Lato;
  font-size: 1.2rem;
  font-weight: 400;
  color: #5b6a84;
  position: relative;
  margin-top: -2%;
`;

export const ProfileDetails = styled.div`
  width: 100%;
  /* background: red; */
  height: 40vh;
  position: relative;
  top: 8%;
`;

// Form
export const Container = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  text-align: left;
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
    color: #838ea1;
  }
  :-ms-input-placeholder {
    color: #838ea1;
  }
  &:focus {
    border: 1px solid #4ca1ff;
  }
  color: #3a414a;
  text-align: left;
  @media (max-width: 768px) {
    width: 94%;
  }
`;
export const FormGroup = styled.div`
  color: palevioletred;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 5% auto;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-botton: 15%;
  }
`;

export const Label = styled.h4`
  width: 99%;
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
  width: 91.5%;
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

export const InputDiv = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProfileButton = styled.button`
  width: 94%;
  height: 55px;
  border: none;
  outline: none;
  background: #4ca1ff;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  border-radius: 4px;
  font-family: Lato;
  letter-spacing: 0.05rem;
  position: relative;
  margin-top: 5%;
  transition: 0.3s all ease-in-out;
  -moz-transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;
  @media (max-width: 768px) {
    width: 99%;
    margin-top: 10%;
    font-size: 17px;
    height: 50px;
  }
  &:hover {
    transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    -webkit-transition: 0.3s all ease-in-out;
    transform: translateY(-2px);
  }

`;
