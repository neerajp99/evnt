import React, { Component } from "react";
import styled from "styled-components";
import InputField from "../commons/InputField";
import { createBrowserHistory } from "history";
import {
  InnerContainer,
  SuccessBox,
  IconBox,
  ConfirmDiv,
  ConfirmContainer,
  SuccessFirst,
  SuccessSecond ,
  SuccessButton
} from "./styles/Forms";
import {
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class EmailSent extends Component {

  componentDidMount() {
    toast.info('Confirmation email has been sent!', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }

  render() {
    return (
      <Container>
        <Card>
          <InnerContainer>
          <ConfirmDiv>
                <ConfirmContainer>
                <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                </ConfirmContainer>
            </ConfirmDiv>
          
          <SuccessBox>
            <IconBox>
            <FontAwesomeIcon className="successIcon" icon={faCheckCircle} aria-hidden="true" />
            </IconBox>
            <SuccessFirst>Confirmation email has been sent successfully!</SuccessFirst>
            <SuccessSecond>Kindly check your email for detailed instructions.</SuccessSecond>
            <SuccessButton>Login</SuccessButton>
          </SuccessBox>
          </InnerContainer>
        </Card>
        <Card>Hello World</Card>
      </Container>
    );
  }
}

export default EmailSent;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  /* overflow-x: hidden; */
  /* grid-gap: 1rem; */
`;

const Card = styled.div`
  /* min-height: 50vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202b41;
  &:nth-child(1) {
    background: #1d2537;
  }
`;
